import { NextResponse } from "next/server";

/**
 * Inscription à la lettre d'information, côté serveur.
 *
 * Même principe que /api/commande : le navigateur ne poste qu'à notre route,
 * et les clés des services tiers ne quittent jamais le serveur.
 *
 * DEUX CANAUX, OPTIONNELS, INDÉPENDANTS
 *
 * 1. BREVO, recommandé : il stocke les contacts ET envoie la lettre, avec le
 *    lien de désinscription que la loi impose, et un tableau de bord pour les
 *    consulter et les exporter.
 * 2. GOOGLE SHEET : une ligne par adresse, rien de plus. Il faut un autre
 *    outil pour écrire aux inscrits.
 *
 * L'inscription est confirmée au visiteur dès qu'un canal a abouti.
 */

const BREVO_CLE = process.env.BREVO_API_KEY;
const BREVO_LISTE = Number(process.env.BREVO_LIST_ID ?? "");
const FEUILLE = process.env.NEWSLETTER_SHEET_WEBHOOK;

const brevoConfigure = Boolean(BREVO_CLE && Number.isInteger(BREVO_LISTE) && BREVO_LISTE > 0);
const feuilleConfiguree = Boolean(FEUILLE);

/** D'où vient l'inscription : sert à savoir quel emplacement fonctionne. */
const SOURCES = new Set(["fenetre", "pied", "commande"]);

const EMAIL = /^[^\s@<>()[\]\\,;:"]+@[^\s@<>()[\]\\,;:"]+\.[a-z]{2,}$/i;
const DELAI_MS = 10000;

/*
 * Limite de débit par adresse IP : 20 tentatives par tranche de 10 minutes.
 * Pas moins : les opérateurs mobiles algériens font sortir beaucoup d'abonnés
 * par la même adresse IP, et une limite serrée bloquerait de vrais visiteurs.
 * La mémoire est propre à chaque instance serverless, donc la limite est
 * approximative ; elle suffit à freiner un script qui remplirait la liste
 * d'adresses factices, ce qui ruinerait la réputation d'envoi de la lettre.
 */
const FENETRE_MS = 10 * 60 * 1000;
const MAX_TENTATIVES = 20;
const tentatives = new Map<string, number[]>();

function tropDeTentatives(ip: string): boolean {
  const maintenant = Date.now();
  const recentes = (tentatives.get(ip) ?? []).filter((t) => maintenant - t < FENETRE_MS);
  recentes.push(maintenant);
  tentatives.set(ip, recentes);
  if (tentatives.size > 5000) tentatives.clear();
  return recentes.length > MAX_TENTATIVES;
}

async function poster(url: string, init: RequestInit): Promise<Response | null> {
  const abandon = new AbortController();
  const minuteur = setTimeout(() => abandon.abort(), DELAI_MS);
  try {
    return await fetch(url, { ...init, signal: abandon.signal });
  } catch {
    return null;
  } finally {
    clearTimeout(minuteur);
  }
}

/* ------------------------------------------------------------------ */
/* Canal 1 — Brevo                                                     */
/* ------------------------------------------------------------------ */

async function inscrireBrevo(email: string, source: string): Promise<boolean> {
  if (!brevoConfigure) return false;

  const envoyer = (avecSource: boolean) =>
    poster("https://api.brevo.com/v3/contacts", {
      method: "POST",
      headers: { "api-key": BREVO_CLE!, "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({
        email,
        listIds: [BREVO_LISTE],
        // Une adresse déjà connue est simplement ajoutée à la liste, au lieu
        // d'être refusée comme doublon.
        updateEnabled: true,
        ...(avecSource ? { attributes: { SOURCE: source } } : {}),
      }),
    });

  let reponse = await envoyer(true);
  // L'attribut SOURCE doit exister dans le compte Brevo. S'il a été supprimé,
  // on inscrit quand même l'adresse, sans lui : l'adresse compte plus que sa provenance.
  if (reponse?.status === 400) {
    const detail = await reponse.text();
    if (/attribute/i.test(detail)) {
      reponse = await envoyer(false);
    } else {
      console.error(`[newsletter] Brevo a refusé l'inscription : ${detail.slice(0, 200)}`);
      return false;
    }
  }
  // 201 : contact créé. 204 : contact existant, ajouté à la liste.
  if (reponse && (reponse.status === 201 || reponse.status === 204)) return true;
  const detail = reponse ? `${reponse.status} ${(await reponse.text()).slice(0, 200)}` : "pas de réponse";
  console.error(`[newsletter] Brevo en échec — ${detail}`);
  return false;
}

/* ------------------------------------------------------------------ */
/* Canal 2 — Google Sheet                                              */
/* ------------------------------------------------------------------ */

async function inscrireFeuille(email: string, source: string): Promise<boolean> {
  if (!FEUILLE) return false;
  const reponse = await poster(FEUILLE, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, source, date: new Date().toISOString() }),
  });
  if (reponse?.ok) return true;
  console.error(`[newsletter] tableur en échec (${reponse?.status ?? "pas de réponse"}).`);
  return false;
}

/* ------------------------------------------------------------------ */
/* Route                                                               */
/* ------------------------------------------------------------------ */

export async function POST(requete: Request) {
  let corps: { email?: unknown; source?: unknown; site_web?: unknown };
  try {
    corps = await requete.json();
  } catch {
    return NextResponse.json({ inscrit: false, motif: "requête illisible" }, { status: 400 });
  }

  // Champ piège, invisible pour un humain : seul un robot le remplit. On lui
  // répond comme à un humain, pour ne pas lui apprendre à contourner le piège.
  if (typeof corps.site_web === "string" && corps.site_web.trim() !== "") {
    return NextResponse.json({ inscrit: true });
  }

  const email = typeof corps.email === "string" ? corps.email.trim().toLowerCase() : "";
  if (email.length < 6 || email.length > 254 || !EMAIL.test(email)) {
    return NextResponse.json({ inscrit: false, motif: "adresse invalide" }, { status: 400 });
  }
  const source = typeof corps.source === "string" && SOURCES.has(corps.source) ? corps.source : "pied";

  const ip = (requete.headers.get("x-forwarded-for") ?? "").split(",")[0].trim() || "inconnue";
  if (tropDeTentatives(ip)) {
    return NextResponse.json({ inscrit: false, motif: "trop de tentatives" }, { status: 429 });
  }

  if (!brevoConfigure && !feuilleConfiguree) {
    console.error("[newsletter] aucun canal configuré : ni BREVO_*, ni NEWSLETTER_SHEET_WEBHOOK.");
    return NextResponse.json({ inscrit: false, motif: "inscriptions non configurées" }, { status: 503 });
  }

  const [brevo, feuille] = await Promise.all([inscrireBrevo(email, source), inscrireFeuille(email, source)]);
  if (!brevo && !feuille) {
    return NextResponse.json({ inscrit: false, motif: "enregistrement impossible" }, { status: 502 });
  }
  return NextResponse.json({ inscrit: true });
}

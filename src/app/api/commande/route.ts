import { NextResponse } from "next/server";
import { estPubliable, getProduit, urlAbsolue, urlProduit } from "@/lib/catalogue";
import { emailCommande } from "@/lib/email-commande";

/**
 * Réception des commandes, côté serveur.
 *
 * POURQUOI CETTE ROUTE EXISTE
 *
 * La première version envoyait la commande depuis le navigateur du client,
 * par EmailJS, et proposait un lien WhatsApp qu'il fallait valider à la main.
 * Deux défauts, et le second est le grave :
 *
 *  - un lien `wa.me` n'envoie rien tout seul. WhatsApp impose au client
 *    d'appuyer sur « envoyer ». Celui qui abandonne à cette seconde-là est une
 *    commande perdue dont on n'apprend jamais l'existence ;
 *  - les identifiants EmailJS partaient dans le code envoyé au navigateur,
 *    donc publics par construction.
 *
 * Ici, rien ne dépend du client une fois le formulaire validé, et aucun secret
 * ne quitte le serveur. EmailJS est revenu, mais appelé DEPUIS LE SERVEUR,
 * avec une clé privée qui ne part jamais dans le navigateur.
 *
 * TROIS CANAUX, INDÉPENDANTS
 *
 * 1. L'E-MAIL (EmailJS) est le canal principal : il prévient le vendeur dans
 *    la seconde et reste archivé dans sa boîte, avec tout le détail.
 * 2. Le TABLEUR (Google Sheet), optionnel : le carnet de commandes, trié et
 *    exportable.
 * 3. WHATSAPP (CallMeBot), optionnel : une alerte sur le téléphone.
 *
 * Les canaux configurés partent ensemble. La commande est confirmée au client
 * dès qu'UN canal a abouti : à partir de là elle existe quelque part, et un
 * canal en échec est un incident d'exploitation, écrit dans les journaux du
 * serveur, pas l'affaire du client.
 *
 * Si TOUS échouent, la route répond en erreur et le client se voit proposer le
 * lien WhatsApp manuel, filet de dernier recours. Jamais de « merci » affiché
 * sur une commande partie nulle part.
 */

/** Le tableur. URL du déploiement Apps Script. */
const FEUILLE = process.env.GOOGLE_SHEET_WEBHOOK;

/** EmailJS. Le modèle ne contient que {{sujet}} et {{{html}}} : voir lib/email-commande. */
const EMAILJS_SERVICE = process.env.EMAILJS_SERVICE_ID;
const EMAILJS_MODELE = process.env.EMAILJS_TEMPLATE_ID;
const EMAILJS_CLE_PUBLIQUE = process.env.EMAILJS_PUBLIC_KEY;
const EMAILJS_CLE_PRIVEE = process.env.EMAILJS_PRIVATE_KEY;

/** CallMeBot : notification WhatsApp vers le numéro du vendeur. */
const CALLMEBOT_TEL = (process.env.CALLMEBOT_PHONE ?? "").replace(/\D/g, "");
const CALLMEBOT_CLE = process.env.CALLMEBOT_APIKEY;

/**
 * Aucune de ces variables n'est préfixée `NEXT_PUBLIC_`, et c'est délibéré :
 * elles ne doivent jamais partir dans le code envoyé au navigateur.
 */
const tableurConfigure = Boolean(FEUILLE);
const emailConfigure = Boolean(
  EMAILJS_SERVICE && EMAILJS_MODELE && EMAILJS_CLE_PUBLIQUE && EMAILJS_CLE_PRIVEE,
);
const whatsappConfigure = Boolean(CALLMEBOT_TEL && CALLMEBOT_CLE);

const DELAI_MS = 12000;

interface Ligne {
  slug: string;
  nom: string;
  marque?: string;
  contenance?: string;
  prixUnitaire: number;
  quantite: number;
  /** Prix transmis par le navigateur, quand il diffère du catalogue. */
  prixTransmis?: number;
  /** Produit introuvable ou dépublié au moment de la commande. */
  horsCatalogue?: boolean;
  url?: string;
  image?: string;
}

interface CorpsCommande {
  numero: string;
  dateIso: string;
  client: {
    prenom: string;
    nom: string;
    telephone: string;
    wilayaCode: string;
    wilayaNom: string;
    commune: string;
    adresse: string;
    commentaire: string;
  };
  lignes: Ligne[];
  total: number;
}

/* ------------------------------------------------------------------ */
/* Validation                                                          */
/* ------------------------------------------------------------------ */

/**
 * La route est publique : tout ce qui arrive est tenu pour hostile jusqu'à
 * preuve du contraire. On vérifie la forme et on borne les tailles.
 */
function valider(corps: unknown): { ok: true; commande: CorpsCommande } | { ok: false; motif: string } {
  if (!corps || typeof corps !== "object") return { ok: false, motif: "corps absent" };
  const c = corps as Partial<CorpsCommande>;

  if (!c.client || typeof c.client !== "object") return { ok: false, motif: "client absent" };
  if (!Array.isArray(c.lignes) || c.lignes.length === 0) return { ok: false, motif: "panier vide" };
  if (c.lignes.length > 100) return { ok: false, motif: "panier hors limites" };

  const { telephone, wilayaNom, prenom } = c.client;
  if (!telephone || typeof telephone !== "string" || telephone.replace(/\D/g, "").length < 9) {
    return { ok: false, motif: "téléphone invalide" };
  }
  if (!prenom || !wilayaNom) return { ok: false, motif: "coordonnées incomplètes" };

  for (const l of c.lignes) {
    if (!l || typeof l.nom !== "string" || typeof l.slug !== "string") {
      return { ok: false, motif: "ligne invalide" };
    }
    if (!Number.isFinite(l.prixUnitaire) || l.prixUnitaire <= 0) return { ok: false, motif: "prix invalide" };
    if (!Number.isInteger(l.quantite) || l.quantite <= 0 || l.quantite > 99) {
      return { ok: false, motif: "quantité invalide" };
    }
  }

  return { ok: true, commande: c as CorpsCommande };
}

/**
 * Le prix qui fait foi est celui du catalogue, relu ici côté serveur.
 *
 * Avant, le total était « recalculé » avec les prix unitaires transmis par le
 * navigateur : n'importe qui pouvait poster une commande à 1 DA l'article.
 * Désormais nom, marque, contenance et prix viennent du catalogue. Un écart
 * avec ce que le client a vu (prix changé entre-temps) est conservé pour que
 * le vendeur le voie avant d'appeler ; un produit introuvable est gardé et
 * signalé plutôt que refusé, pour ne jamais perdre une commande.
 */
function rapprocher(commande: CorpsCommande): CorpsCommande {
  const lignes = commande.lignes.map((l): Ligne => {
    const p = getProduit(l.slug);
    if (!p || !estPubliable(p)) return { ...l, horsCatalogue: true };
    const image = p.images[0];
    return {
      slug: p.slug,
      nom: p.nom,
      marque: p.marque,
      contenance: p.contenance,
      prixUnitaire: p.prix,
      quantite: l.quantite,
      ...(p.prix !== l.prixUnitaire ? { prixTransmis: l.prixUnitaire } : {}),
      url: urlAbsolue(urlProduit(p)),
      ...(image ? { image: image.startsWith("http") ? image : urlAbsolue(image) } : {}),
    };
  });
  const total = lignes.reduce((n, l) => n + l.prixUnitaire * l.quantite, 0);
  return { ...commande, lignes, total };
}

/** Tronque et neutralise les retours à la ligne pour un champ de tableur. */
function champ(valeur: string | undefined, max = 500): string {
  return (valeur ?? "").replace(/[\r\n\t]+/g, " ").slice(0, max).trim();
}

function prixFr(n: number): string {
  return `${n.toLocaleString("fr-DZ")} DA`;
}

/**
 * Libellé d'une ligne de commande.
 *
 * La marque n'est ajoutée que si le nom ne la porte pas déjà, et la contenance
 * de même : la plupart des noms du catalogue commencent par leur marque et
 * finissent par leur format. Les préfixer sans vérifier donnait
 * « 2 x Dior Dior Sauvage (100ml) » sur le récapitulatif envoyé au vendeur.
 */
function libelleLigne(l: Ligne): string {
  const marque =
    l.marque && !l.nom.toLowerCase().includes(l.marque.toLowerCase()) ? `${l.marque} ` : "";
  const contenance =
    l.contenance && !l.nom.toLowerCase().includes(l.contenance.toLowerCase())
      ? ` (${l.contenance})`
      : "";
  return `${marque}${l.nom}${contenance}`;
}

function recapitulatif(commande: CorpsCommande): string {
  return commande.lignes
    .map(
      (l) =>
        `${l.quantite} x ${libelleLigne(l)} = ${prixFr(l.prixUnitaire * l.quantite)}` +
        (l.horsCatalogue ? " [hors catalogue, prix à vérifier]" : "") +
        (l.prixTransmis !== undefined ? ` [le client a vu ${prixFr(l.prixTransmis)}]` : ""),
    )
    .join("\n");
}

/** POST avec délai maximal : un service tiers qui ne répond pas ne bloque pas la commande. */
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
/* Canal 1 — e-mail (EmailJS)                                          */
/* ------------------------------------------------------------------ */

async function envoyerEmail(commande: CorpsCommande): Promise<boolean> {
  if (!emailConfigure) return false;

  const { sujet, html } = emailCommande({
    numero: commande.numero,
    recueLe: new Date(),
    client: commande.client,
    lignes: commande.lignes.map((l) => ({
      nom: l.nom,
      marque: l.marque ?? "",
      contenance: l.contenance ?? "",
      quantite: l.quantite,
      prixUnitaire: l.prixUnitaire,
      prixTransmis: l.prixTransmis,
      horsCatalogue: l.horsCatalogue,
      url: l.url,
      image: l.image,
    })),
    total: commande.total,
  });

  const reponse = await poster("https://api.emailjs.com/api/v1.0/email/send", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      service_id: EMAILJS_SERVICE,
      template_id: EMAILJS_MODELE,
      user_id: EMAILJS_CLE_PUBLIQUE,
      accessToken: EMAILJS_CLE_PRIVEE,
      template_params: {
        sujet,
        html,
        numero: commande.numero,
        total: prixFr(commande.total),
        telephone: commande.client.telephone,
      },
    }),
  });

  if (reponse?.ok) return true;
  // EmailJS explique son refus en clair (« API calls are disabled for
  // non-browser applications », « The template ID is invalid »…) : c'est ce
  // message qu'il faut lire dans les journaux Vercel.
  const detail = reponse ? `${reponse.status} ${(await reponse.text()).slice(0, 200)}` : "pas de réponse";
  console.error(`[commande] ${commande.numero} : EmailJS en échec — ${detail}`);
  return false;
}

/* ------------------------------------------------------------------ */
/* Canal 2 — tableur (Google Sheet)                                    */
/* ------------------------------------------------------------------ */

async function enregistrer(commande: CorpsCommande): Promise<boolean> {
  if (!FEUILLE) return false;

  const { client } = commande;
  const reponse = await poster(FEUILLE, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      numero: champ(commande.numero, 40),
      date: champ(commande.dateIso, 40),
      nom: champ(`${client.prenom} ${client.nom}`.trim(), 120),
      telephone: champ(client.telephone, 30),
      wilaya: champ(`${client.wilayaCode} — ${client.wilayaNom}`, 80),
      commune: champ(client.commune, 120),
      adresse: champ(client.adresse, 300),
      commentaire: champ(client.commentaire, 500),
      articles: champ(recapitulatif(commande), 3000),
      nb_articles: commande.lignes.reduce((n, l) => n + l.quantite, 0),
      total: commande.total,
      paiement: "À la livraison",
    }),
  });
  if (reponse?.ok) return true;
  console.error(`[commande] ${commande.numero} : tableur en échec (${reponse?.status ?? "pas de réponse"}).`);
  return false;
}

/* ------------------------------------------------------------------ */
/* Canal 3 — alerte WhatsApp (CallMeBot)                               */
/* ------------------------------------------------------------------ */

async function notifierWhatsApp(commande: CorpsCommande): Promise<boolean> {
  if (!whatsappConfigure) return false;

  const { client } = commande;
  const texte =
    `NOUVELLE COMMANDE ${commande.numero}\n\n` +
    `${`${client.prenom} ${client.nom}`.trim()}\n` +
    `Tel : ${client.telephone}\n` +
    `Wilaya : ${client.wilayaCode} - ${client.wilayaNom}\n` +
    (client.commune ? `Commune : ${client.commune}\n` : "") +
    (client.adresse ? `Adresse : ${client.adresse}\n` : "") +
    `\n${recapitulatif(commande)}\n\n` +
    `TOTAL : ${prixFr(commande.total)}\n` +
    `Paiement a la livraison` +
    (client.commentaire ? `\n\nMessage : ${client.commentaire}` : "");

  const url =
    `https://api.callmebot.com/whatsapp.php?phone=${CALLMEBOT_TEL}` +
    `&text=${encodeURIComponent(texte)}&apikey=${CALLMEBOT_CLE}`;

  const abandon = new AbortController();
  const minuteur = setTimeout(() => abandon.abort(), DELAI_MS);
  try {
    const reponse = await fetch(url, { signal: abandon.signal });
    if (!reponse.ok) console.error(`[commande] ${commande.numero} : WhatsApp en échec (${reponse.status}).`);
    return reponse.ok;
  } catch {
    console.error(`[commande] ${commande.numero} : WhatsApp en échec (pas de réponse).`);
    return false;
  } finally {
    clearTimeout(minuteur);
  }
}

/* ------------------------------------------------------------------ */
/* Route                                                               */
/* ------------------------------------------------------------------ */

export async function POST(requete: Request) {
  let corps: unknown;
  try {
    corps = await requete.json();
  } catch {
    return NextResponse.json({ recue: false, motif: "requête illisible" }, { status: 400 });
  }

  const controle = valider(corps);
  if (!controle.ok) {
    return NextResponse.json({ recue: false, motif: controle.motif }, { status: 400 });
  }
  const commande = rapprocher(controle.commande);

  if (!emailConfigure && !tableurConfigure && !whatsappConfigure) {
    // Aucun canal : on refuse franchement. Répondre « reçue » ici ferait
    // disparaître la commande en affichant un remerciement au client.
    console.error(
      "[commande] aucun canal configuré : ni EMAILJS_*, ni GOOGLE_SHEET_WEBHOOK, ni CALLMEBOT_*. " +
        "La commande n'a été transmise nulle part.",
    );
    return NextResponse.json({ recue: false, motif: "réception non configurée" }, { status: 503 });
  }

  // Les canaux partent ensemble : aucun n'attend les autres.
  const [email, tableur, whatsapp] = await Promise.all([
    envoyerEmail(commande),
    enregistrer(commande),
    notifierWhatsApp(commande),
  ]);

  if (!email && !tableur && !whatsapp) {
    console.error(`[commande] ${commande.numero} : aucun canal n'a abouti.`);
    return NextResponse.json({ recue: false, motif: "transmission impossible" }, { status: 502 });
  }

  return NextResponse.json({ recue: true, email, tableur, whatsapp });
}

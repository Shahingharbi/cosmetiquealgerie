import { NextResponse } from "next/server";

/**
 * Réception des commandes, côté serveur.
 *
 * POURQUOI CETTE ROUTE EXISTE
 *
 * La version précédente envoyait la commande depuis le navigateur du client,
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
 * ne quitte le serveur.
 *
 * DEUX CANAUX, ET UN SEUL FAIT FOI
 *
 * 1. L'ENREGISTREMENT (Google Sheet) est la source de vérité. Une commande
 *    n'est acceptée que si elle y est écrite.
 * 2. La NOTIFICATION (WhatsApp) sert à réagir vite. Son échec n'annule jamais
 *    une commande déjà enregistrée : elle est simplement signalée dans les
 *    journaux du serveur.
 *
 * Cette séparation est le point important. Une notification n'est pas un
 * enregistrement : WhatsApp tombe, un message se perd dans une conversation,
 * on supprime par erreur. Une commande qui n'existerait que sous forme de
 * notification est une commande qu'on finit par perdre.
 *
 * Si les DEUX échouent, la route répond en erreur et le client se voit
 * proposer le lien WhatsApp manuel — le filet de dernier recours.
 */

/** Le tableur est la source de vérité. URL du déploiement Apps Script. */
const FEUILLE = process.env.GOOGLE_SHEET_WEBHOOK;

/** CallMeBot : notification WhatsApp vers le numéro du vendeur. */
const CALLMEBOT_TEL = (process.env.CALLMEBOT_PHONE ?? "").replace(/\D/g, "");
const CALLMEBOT_CLE = process.env.CALLMEBOT_APIKEY;

/**
 * Aucune de ces variables n'est préfixée `NEXT_PUBLIC_`, et c'est délibéré :
 * elles ne doivent jamais partir dans le code envoyé au navigateur.
 */
const enregistrementConfigure = Boolean(FEUILLE);
const notificationConfiguree = Boolean(CALLMEBOT_TEL && CALLMEBOT_CLE);

const DELAI_MS = 12000;

interface Ligne {
  slug: string;
  nom: string;
  marque?: string;
  contenance?: string;
  prixUnitaire: number;
  quantite: number;
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
 * preuve du contraire. On vérifie la forme, on borne les tailles, et on
 * recalcule le total plutôt que de faire confiance à celui qui est transmis.
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

  // Le total est recalculé côté serveur : celui envoyé par le client ne sert
  // qu'à détecter une incohérence, jamais à décider du montant.
  const total = c.lignes.reduce((n, l) => n + l.prixUnitaire * l.quantite, 0);

  return { ok: true, commande: { ...(c as CorpsCommande), total } };
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
    .map((l) => `${l.quantite} x ${libelleLigne(l)} = ${prixFr(l.prixUnitaire * l.quantite)}`)
    .join("\n");
}

/* ------------------------------------------------------------------ */
/* Canal 1 — enregistrement durable                                    */
/* ------------------------------------------------------------------ */

async function enregistrer(commande: CorpsCommande): Promise<boolean> {
  if (!FEUILLE) return false;

  const { client } = commande;
  const abandon = new AbortController();
  const minuteur = setTimeout(() => abandon.abort(), DELAI_MS);

  try {
    const reponse = await fetch(FEUILLE, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      signal: abandon.signal,
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
    clearTimeout(minuteur);
    return reponse.ok;
  } catch {
    clearTimeout(minuteur);
    return false;
  }
}

/* ------------------------------------------------------------------ */
/* Canal 2 — notification immédiate                                    */
/* ------------------------------------------------------------------ */

async function notifier(commande: CorpsCommande): Promise<boolean> {
  if (!notificationConfiguree) return false;

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
    clearTimeout(minuteur);
    return reponse.ok;
  } catch {
    clearTimeout(minuteur);
    return false;
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
  const { commande } = controle;

  if (!enregistrementConfigure && !notificationConfiguree) {
    // Aucun canal : on refuse franchement. Répondre « reçue » ici ferait
    // disparaître la commande en affichant un remerciement au client.
    console.error(
      "[commande] aucun canal configuré : ni GOOGLE_SHEET_WEBHOOK ni CALLMEBOT_*. " +
        "La commande n'a été transmise nulle part.",
    );
    return NextResponse.json({ recue: false, motif: "réception non configurée" }, { status: 503 });
  }

  // Les deux canaux partent ensemble : la notification n'a pas à attendre
  // l'écriture du tableur, et l'inverse non plus.
  const [enregistree, notifiee] = await Promise.all([enregistrer(commande), notifier(commande)]);

  if (!enregistree && !notifiee) {
    console.error(`[commande] ${commande.numero} : aucun canal n'a abouti.`);
    return NextResponse.json({ recue: false, motif: "transmission impossible" }, { status: 502 });
  }

  // À partir d'ici la commande existe quelque part : on la confirme au client.
  // Un canal en échec est un incident d'exploitation, pas l'affaire du client.
  if (!enregistree) {
    console.error(
      `[commande] ${commande.numero} : notifiée sur WhatsApp mais NON enregistrée au tableur. ` +
        "Vérifier GOOGLE_SHEET_WEBHOOK — cette commande n'existe que dans la conversation.",
    );
  }
  if (!notifiee && notificationConfiguree) {
    console.error(`[commande] ${commande.numero} : enregistrée, mais notification WhatsApp en échec.`);
  }

  return NextResponse.json({ recue: true, enregistree, notifiee });
}

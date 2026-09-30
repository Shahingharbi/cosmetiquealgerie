import "server-only";

/**
 * E-mail de commande envoyé au vendeur, via EmailJS.
 *
 * Le modèle EmailJS ne contient que deux variables : {{sujet}} en objet et
 * {{{html}}} en corps (triple accolade : le HTML n'est pas échappé). Toute la
 * mise en page vit ici, versionnée avec le site, plutôt que dans le tableau de
 * bord EmailJS où personne ne la relirait ni ne la testerait.
 *
 * Un e-mail n'est pas une page web :
 *  - styles en ligne uniquement, mise en page en tableaux de 600 px ;
 *  - polices système : Inter n'existe pas dans une boîte mail ;
 *  - TOUT ce que saisit le client est échappé. Sans cela, un « nom » contenant
 *    du HTML s'afficherait comme tel dans la boîte du vendeur : faux bouton,
 *    lien piégé ;
 *  - EmailJS refuse plus de 50 Ko de variables sur l'offre gratuite. Au-delà,
 *    on retire les vignettes, puis on abrège la liste : une commande ne doit
 *    jamais être perdue pour une question de mise en page.
 */

export interface LigneEmail {
  nom: string;
  marque: string;
  contenance: string;
  quantite: number;
  /** Prix du catalogue, celui qui fait foi. */
  prixUnitaire: number;
  /** Prix transmis par le navigateur, quand il diffère du catalogue. */
  prixTransmis?: number;
  /** Produit introuvable ou dépublié au moment de la commande. */
  horsCatalogue?: boolean;
  /** URL absolue de la fiche produit. */
  url?: string;
  /** URL absolue du visuel. */
  image?: string;
}

export interface CommandeEmail {
  numero: string;
  recueLe: Date;
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
  lignes: LigneEmail[];
  total: number;
}

export interface EmailCommande {
  sujet: string;
  html: string;
}

const LIMITE_OCTETS = 45_000;

const POLICE = "Helvetica,Arial,sans-serif";
const MONO = "'Courier New',Courier,monospace";
const ENCRE = "#141414";
const CREME = "#f4f4f2";
const GRIS = "#909090";
const TEXTE = "#4f4f4f";
const FILET = "#e5e5e5";
const ALERTE = "#8a4b00";
const FOND_ALERTE = "#fff6e5";

function echapper(texte: string): string {
  return texte
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

/** Une ligne de texte libre : retours à la ligne neutralisés, longueur bornée. */
function propre(texte: string, max = 500): string {
  return texte.replace(/[\r\n\t]+/g, " ").trim().slice(0, max);
}

function prix(n: number): string {
  return `${n.toLocaleString("fr-DZ")} DA`;
}

/** 0662104150 → 06 62 10 41 50. Un numéro d'un autre format est laissé tel quel. */
function telephoneAffiche(tel: string): string {
  const chiffres = tel.replace(/\D/g, "");
  return chiffres.length === 10 ? chiffres.replace(/(\d{2})(?=\d)/g, "$1 ") : tel;
}

/** 0662104150 → 213662104150, le format attendu par tel:+ et wa.me. */
function telephoneInternational(tel: string): string {
  const chiffres = tel.replace(/\D/g, "");
  if (chiffres.length === 10 && chiffres.startsWith("0")) return `213${chiffres.slice(1)}`;
  if (chiffres.startsWith("00")) return chiffres.slice(2);
  return chiffres;
}

function libelle(texte: string): string {
  return `<div style="font:11px/1.4 ${MONO};letter-spacing:.12em;text-transform:uppercase;color:${GRIS};">${texte}</div>`;
}

function bouton(href: string, texte: string, plein: boolean): string {
  const couleurs = plein
    ? `background:${ENCRE};color:${CREME};border:1px solid ${ENCRE};`
    : `background:#ffffff;color:${ENCRE};border:1px solid ${ENCRE};`;
  return (
    `<a href="${echapper(href)}" style="display:inline-block;${couleurs}` +
    `font:500 14px/1 ${POLICE};text-decoration:none;padding:14px 20px;margin:0 8px 8px 0;">` +
    `${texte}</a>`
  );
}

function rangee(etiquette: string, valeur: string): string {
  return (
    `<tr><td style="padding:10px 16px 10px 0;border-top:1px solid ${FILET};vertical-align:top;width:120px;` +
    `font:13px/1.5 ${POLICE};color:${GRIS};">${etiquette}</td>` +
    `<td style="padding:10px 0;border-top:1px solid ${FILET};vertical-align:top;` +
    `font:15px/1.5 ${POLICE};color:${ENCRE};">${valeur}</td></tr>`
  );
}

function ligneArticle(l: LigneEmail, vignettes: boolean): string {
  const nom = l.url
    ? `<a href="${echapper(l.url)}" style="color:${ENCRE};text-decoration:none;">${echapper(l.nom)}</a>`
    : echapper(l.nom);
  const details = [l.contenance, `${prix(l.prixUnitaire)} l'unité`].filter(Boolean).map(echapper).join(" · ");
  const alertes: string[] = [];
  if (l.horsCatalogue) {
    alertes.push("Produit absent du catalogue en ligne : prix transmis par le navigateur, à vérifier.");
  } else if (l.prixTransmis !== undefined) {
    alertes.push(`Prix vu par le client : ${prix(l.prixTransmis)}. Le prix du catalogue est appliqué.`);
  }

  const cellule = `padding:14px 0;border-top:1px solid ${FILET};vertical-align:top;`;
  const vignette = vignettes
    ? `<td style="${cellule}width:68px;padding-right:12px;">` +
      (l.image
        ? `<img src="${echapper(l.image)}" width="56" height="56" alt="" style="display:block;width:56px;height:56px;border:0;background:#ffffff;">`
        : `<div style="width:56px;height:56px;background:${CREME};"></div>`) +
      `</td>`
    : "";

  return (
    `<tr>${vignette}` +
    `<td style="${cellule}font:14px/1.45 ${POLICE};color:${ENCRE};">` +
    (l.marque ? libelle(echapper(l.marque)) : "") +
    `<div style="margin-top:2px;">${nom}</div>` +
    `<div style="margin-top:3px;font:12px/1.4 ${POLICE};color:${GRIS};">${details}</div>` +
    alertes
      .map((a) => `<div style="margin-top:6px;font:12px/1.4 ${POLICE};color:${ALERTE};">${echapper(a)}</div>`)
      .join("") +
    `</td>` +
    `<td align="right" style="${cellule}padding-left:12px;white-space:nowrap;font:14px/1.45 ${POLICE};color:${ENCRE};">` +
    `<div style="color:${GRIS};">× ${l.quantite}</div>` +
    `<div style="margin-top:2px;font-weight:600;">${prix(l.prixUnitaire * l.quantite)}</div>` +
    `</td></tr>`
  );
}

function composer(c: CommandeEmail, vignettes: boolean, maxLignes: number): string {
  const { client } = c;
  const prenom = propre(client.prenom, 60);
  const nomComplet = propre(`${client.prenom} ${client.nom}`, 120);
  const telephone = telephoneAffiche(propre(client.telephone, 30));
  const international = telephoneInternational(client.telephone);
  const wilaya = propre(`${client.wilayaCode} — ${client.wilayaNom}`, 80);
  const commune = propre(client.commune, 120);
  const adresse = propre(client.adresse, 300);
  const commentaire = propre(client.commentaire, 500);
  const nbArticles = c.lignes.reduce((n, l) => n + l.quantite, 0);
  const recue = c.recueLe.toLocaleString("fr-FR", {
    timeZone: "Africa/Algiers",
    weekday: "long",
    day: "numeric",
    month: "long",
    hour: "2-digit",
    minute: "2-digit",
  });

  const messageClient =
    `Bonjour ${prenom}, ici Cosmétique Algérie. Nous avons bien reçu votre commande ` +
    `n° ${c.numero} d'un montant de ${prix(c.total)}, hors frais de livraison. ` +
    `Pouvez-vous nous confirmer votre adresse de livraison${commune ? ` à ${commune}` : ""} ?`;

  const apercu = `${nomComplet} · ${telephone} · ${nbArticles} article${nbArticles > 1 ? "s" : ""} · ${propre(client.wilayaNom, 60)}`;

  const affichees = c.lignes.slice(0, maxLignes);
  const reste = c.lignes.length - affichees.length;
  const aVerifier = c.lignes.some((l) => l.horsCatalogue || l.prixTransmis !== undefined);

  return (
    `<div style="margin:0;padding:0;background:${CREME};">` +
    // Texte d'aperçu : la ligne grise que Gmail affiche sous l'objet, dans la liste.
    `<div style="display:none;max-height:0;overflow:hidden;opacity:0;color:${CREME};">${echapper(apercu)}</div>` +
    `<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background:${CREME};">` +
    `<tr><td align="center" style="padding:28px 12px;">` +
    `<table role="presentation" width="600" cellpadding="0" cellspacing="0" border="0" style="width:100%;max-width:600px;">` +
    // En-tête : le wordmark du site, en texte.
    `<tr><td style="padding:0 2px 18px;font:500 17px/1.2 ${POLICE};color:${ENCRE};">` +
    `Cosmétique <span style="font-weight:300;">Algérie.</span></td>` +
    `<td align="right" style="padding:0 2px 18px;">${libelle("Nouvelle commande")}</td></tr>` +
    // Bandeau noir : numéro, total, conditions.
    `<tr><td colspan="2" style="background:${ENCRE};padding:28px 28px 26px;">` +
    `<div style="font:12px/1.4 ${MONO};letter-spacing:.1em;color:${GRIS};">N° ${echapper(c.numero)}</div>` +
    `<div style="margin-top:10px;font:500 34px/1.1 ${POLICE};color:${CREME};">${prix(c.total)}</div>` +
    `<div style="margin-top:8px;font:14px/1.5 ${POLICE};color:#cfcfcb;">` +
    `${nbArticles} article${nbArticles > 1 ? "s" : ""} · paiement à la livraison · livraison selon la wilaya en sus</div>` +
    `<div style="margin-top:14px;font:12px/1.4 ${POLICE};color:${GRIS};">Reçue le ${echapper(recue)}, heure d'Alger</div>` +
    `</td></tr>` +
    // Actions : appeler, écrire sur WhatsApp.
    `<tr><td colspan="2" style="background:#ffffff;padding:22px 28px 14px;border:1px solid ${FILET};border-top:0;">` +
    `<div style="font:14px/1.5 ${POLICE};color:${TEXTE};margin-bottom:14px;">À confirmer avec ${echapper(prenom || "le client")} avant expédition.</div>` +
    // L'espace entre les deux boutons n'est pas anodin : sans lui, le second ne
    // peut pas passer à la ligne et l'e-mail déborde sur un écran de téléphone.
    bouton(`tel:+${international}`, `Appeler · ${echapper(telephone)}`, true) +
    " " +
    bouton(`https://wa.me/${international}?text=${encodeURIComponent(messageClient)}`, "Écrire sur WhatsApp", false) +
    `</td></tr>` +
    (aVerifier
      ? `<tr><td colspan="2" style="padding:14px 28px;background:${FOND_ALERTE};border:1px solid ${FILET};border-top:0;` +
        `font:13px/1.5 ${POLICE};color:${ALERTE};">À vérifier avant de confirmer : un article au moins diffère du catalogue (détail ci-dessous).</td></tr>`
      : "") +
    // Client.
    `<tr><td colspan="2" style="background:#ffffff;padding:24px 28px 18px;border:1px solid ${FILET};border-top:0;">` +
    libelle("Client") +
    `<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-top:10px;">` +
    rangee("Nom", `<strong style="font-weight:600;">${echapper(nomComplet)}</strong>`) +
    rangee(
      "Téléphone",
      `<a href="tel:+${international}" style="color:${ENCRE};font-weight:600;text-decoration:none;">${echapper(telephone)}</a>`,
    ) +
    rangee("Wilaya", echapper(wilaya)) +
    (commune ? rangee("Commune", echapper(commune)) : "") +
    (adresse ? rangee("Adresse", echapper(adresse)) : "") +
    `</table>` +
    (commentaire
      ? `<div style="margin-top:16px;padding:14px 16px;background:${CREME};border-left:3px solid ${ENCRE};` +
        `font:14px/1.55 ${POLICE};color:${ENCRE};">` +
        `${libelle("Message du client")}<div style="margin-top:6px;">${echapper(commentaire)}</div></div>`
      : "") +
    `</td></tr>` +
    // Articles.
    `<tr><td colspan="2" style="background:#ffffff;padding:24px 28px 8px;border:1px solid ${FILET};border-top:0;">` +
    libelle("Articles") +
    `<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-top:10px;">` +
    affichees.map((l) => ligneArticle(l, vignettes)).join("") +
    (reste > 0
      ? `<tr><td colspan="${vignettes ? 3 : 2}" style="padding:14px 0;border-top:1px solid ${FILET};` +
        `font:13px/1.5 ${POLICE};color:${ALERTE};">Et ${reste} autre${reste > 1 ? "s" : ""} ligne${reste > 1 ? "s" : ""}, ` +
        `non détaillée${reste > 1 ? "s" : ""} faute de place : le total ci-dessous les inclut.</td></tr>`
      : "") +
    `</table></td></tr>` +
    // Total.
    `<tr><td colspan="2" style="background:#ffffff;padding:4px 28px 24px;border:1px solid ${FILET};border-top:0;">` +
    `<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">` +
    `<tr><td style="padding:14px 0 4px;border-top:1px solid ${ENCRE};font:14px/1.5 ${POLICE};color:${TEXTE};">` +
    `Sous-total (${nbArticles} article${nbArticles > 1 ? "s" : ""})</td>` +
    `<td align="right" style="padding:14px 0 4px;border-top:1px solid ${ENCRE};font:600 18px/1.3 ${POLICE};color:${ENCRE};">${prix(c.total)}</td></tr>` +
    `<tr><td style="padding:4px 0;font:14px/1.5 ${POLICE};color:${TEXTE};">Livraison</td>` +
    `<td align="right" style="padding:4px 0;font:13px/1.5 ${POLICE};color:${GRIS};">selon la wilaya, à annoncer au client</td></tr>` +
    `<tr><td style="padding:4px 0;font:14px/1.5 ${POLICE};color:${TEXTE};">Paiement</td>` +
    `<td align="right" style="padding:4px 0;font:13px/1.5 ${POLICE};color:${GRIS};">en espèces, à la livraison</td></tr>` +
    `</table></td></tr>` +
    // Pied.
    `<tr><td colspan="2" style="padding:18px 2px 0;font:12px/1.6 ${POLICE};color:${GRIS};">` +
    `Commande passée sur <a href="https://cosmetiquealgerie.com" style="color:${GRIS};">cosmetiquealgerie.com</a>. ` +
    `Répondre à cet e-mail n'écrit pas au client : appelez-le ou écrivez-lui sur WhatsApp.` +
    `</td></tr>` +
    `</table></td></tr></table></div>`
  );
}

export function emailCommande(c: CommandeEmail): EmailCommande {
  const octets = (s: string) => Buffer.byteLength(s, "utf8");
  let html = composer(c, true, c.lignes.length);
  if (octets(html) > LIMITE_OCTETS) html = composer(c, false, c.lignes.length);
  if (octets(html) > LIMITE_OCTETS) html = composer(c, false, 25);

  const nbArticles = c.lignes.reduce((n, l) => n + l.quantite, 0);
  const sujet = propre(
    `Nouvelle commande ${c.numero} · ${prix(c.total)} · ${nbArticles} article${nbArticles > 1 ? "s" : ""} · ${c.client.wilayaNom}`,
    200,
  );
  return { sujet, html };
}

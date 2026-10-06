/**
 * Coordonnées du vendeur, en un seul endroit.
 *
 * Depuis le 06/10/2026, un seul numéro algérien, le 06 72 64 44 81, sert à
 * tout ce qui est visible : appel (en-tête, bandeau, pied de page, fiche
 * produit, commande) et WhatsApp (bouton flottant, pied de page, question sur
 * un produit). Un numéro du pays, que le visiteur compose sans frais
 * d'international, est un signal de confiance sur un marché où tout se règle
 * à la livraison.
 *
 * SEULE EXCEPTION : la confirmation de commande sur WhatsApp (page de
 * remerciement, et secours si l'envoi automatique échoue) part vers le compte
 * WhatsApp personnel du propriétaire, via la variable `NEXT_PUBLIC_WHATSAPP`
 * lue par `envoi-commande`. Ne pas la brancher sur ce fichier.
 *
 * Les valeurs sont écrites ici plutôt que tirées de l'environnement : ce sont
 * des coordonnées publiques, elles doivent figurer sur le site dès le premier
 * rendu, y compris si une variable est oubliée au déploiement.
 */

/* ------------------------------------------------------------------ */
/* Téléphone algérien — celui que l'on montre                          */
/* ------------------------------------------------------------------ */

/** Tel qu'on le lit en Algérie. */
export const TEL_DZ_AFFICHE = "06 72 64 44 81";

/**
 * Format international pour `href="tel:"`.
 *
 * Le zéro initial du format national tombe et cède la place à l'indicatif :
 * un visiteur en itinérance, ou dont le téléphone n'est pas sur un réseau
 * algérien, ne peut composer le numéro qu'à cette condition.
 */
export const TEL_DZ_LIEN = "tel:+213672644481";

/* ------------------------------------------------------------------ */
/* WhatsApp — le compte qui répond aux visiteurs                       */
/* ------------------------------------------------------------------ */

/** Chiffres seuls, indicatif compris, sans le « + » : format attendu par wa.me. */
export const WHATSAPP_NUMERO = "213672644481";

/** Lien WhatsApp simple, sans message pré-rempli. */
export const WHATSAPP_LIEN = `https://wa.me/${WHATSAPP_NUMERO}`;

/**
 * Lien WhatsApp avec un message d'ouverture déjà écrit.
 *
 * Un message pré-rempli lève l'hésitation du premier contact et, sur une fiche
 * produit, dit au vendeur de quel produit on parle sans qu'il ait à le
 * demander.
 */
export function whatsappAvecMessage(message: string): string {
  return `${WHATSAPP_LIEN}?text=${encodeURIComponent(message)}`;
}

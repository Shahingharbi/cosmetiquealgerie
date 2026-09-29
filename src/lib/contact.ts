/**
 * Coordonnées du vendeur, en un seul endroit.
 *
 * Deux numéros, deux usages distincts :
 *
 *  - le numéro ALGÉRIEN est celui que l'on affiche. C'est un numéro local, que
 *    le visiteur reconnaît et peut composer sans frais d'international. Sur un
 *    marché où tout se règle à la livraison, voir un numéro du pays est un
 *    signal de confiance plus fort que n'importe quelle mention rassurante ;
 *  - le numéro FRANÇAIS porte le compte WhatsApp. Il n'a pas à être affiché en
 *    clair : il sert de destination aux liens `wa.me`.
 *
 * Les valeurs sont écrites ici plutôt que tirées de l'environnement : ce sont
 * des coordonnées publiques, elles doivent figurer sur le site dès le premier
 * rendu, y compris si une variable est oubliée au déploiement. `envoi-commande`
 * garde en revanche sa variable `NEXT_PUBLIC_WHATSAPP`, qui permet de basculer
 * la réception des commandes sans toucher au code.
 */

/* ------------------------------------------------------------------ */
/* Téléphone algérien — celui que l'on montre                          */
/* ------------------------------------------------------------------ */

/** Tel qu'on le lit en Algérie. */
export const TEL_DZ_AFFICHE = "06 62 10 41 50";

/**
 * Format international pour `href="tel:"`.
 *
 * Le zéro initial du format national tombe et cède la place à l'indicatif :
 * un visiteur en itinérance, ou dont le téléphone n'est pas sur un réseau
 * algérien, ne peut composer le numéro qu'à cette condition.
 */
export const TEL_DZ_LIEN = "tel:+213662104150";

/* ------------------------------------------------------------------ */
/* WhatsApp — le compte qui reçoit                                     */
/* ------------------------------------------------------------------ */

/** Chiffres seuls, indicatif compris, sans le « + » : format attendu par wa.me. */
export const WHATSAPP_NUMERO = "33782214993";

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

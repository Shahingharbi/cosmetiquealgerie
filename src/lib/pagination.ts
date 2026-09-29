/**
 * Pagination des pages de listing.
 *
 * Raison d'être : une catégorie n'affichait que ses 48 premiers produits. Les
 * suivants ne recevaient aucun lien interne — 6 118 fiches sur 22 505 (27 %)
 * n'étaient atteignables que par le sitemap. Une page qui ne reçoit aucun lien
 * n'existe pas pour Google, c'est la règle la plus élémentaire du référencement.
 *
 * Les pages 2 et suivantes vivent sous `/{noeud}/p/{n}/`.
 *
 * Le segment s'appelait d'abord `page`. C'était une erreur : `page` est le nom
 * de fichier réservé par Next.js pour les routes. La route parente
 * `/soin-visage/` s'est retrouvée servie comme une 404 après que 145 pages
 * `/soin-visage/page/N/` ont été générées à côté d'elle. Aucune URL publiée
 * n'utilisait encore l'ancien schéma au moment du changement.
 */

/** 48 tient exactement 12 rangées de 4 sur écran large, 24 rangées de 2 sur mobile. */
export const PAR_PAGE = 48;

export function nbPages(total: number): number {
  return Math.max(1, Math.ceil(total / PAR_PAGE));
}

/** Tranche affichée pour une page donnée (1 = première page). */
export function tranche<T>(liste: T[], page: number): T[] {
  const debut = (page - 1) * PAR_PAGE;
  return liste.slice(debut, debut + PAR_PAGE);
}

/** URL d'une page de listing. La page 1 garde l'URL canonique du nœud. */
export function urlPage(urlNoeud: string, page: number): string {
  return page <= 1 ? urlNoeud : `${urlNoeud}p/${page}/`;
}

/**
 * Numéros à afficher dans la barre de pagination : les bornes, les voisins de
 * la page courante, et des trous explicites. Lister 133 numéros diluerait le
 * jus de lien et rendrait la barre illisible sur mobile.
 */
export function numerosAffiches(courante: number, total: number): (number | "…")[] {
  if (total <= 7) return Array.from({ length: total }, (_, i) => i + 1);

  const proches = new Set<number>([1, total, courante]);
  for (const d of [-2, -1, 1, 2]) {
    const n = courante + d;
    if (n > 1 && n < total) proches.add(n);
  }

  const tries = [...proches].sort((a, b) => a - b);
  const sortie: (number | "…")[] = [];
  let precedent = 0;
  for (const n of tries) {
    if (precedent && n - precedent > 1) sortie.push("…");
    sortie.push(n);
    precedent = n;
  }
  return sortie;
}

/**
 * Nombre de pages réellement pré-générées au build pour un nœud.
 *
 * Les premières pages concentrent l'essentiel du trafic et des liens ; les
 * suivantes sont rendues à la demande puis mises en cache. Tout pré-générer
 * ajouterait des milliers de pages au build pour un gain nul.
 */
export const PAGES_PREGENEREES = 3;

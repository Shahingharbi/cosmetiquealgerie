/**
 * `/sitemap.xml` : le même index que `/sitemap-index.xml`.
 *
 * C'est l'adresse conventionnelle, celle que les robots essaient d'eux-mêmes
 * et celle que lit le robot Google Indexing API (`scripts/google-indexing-api.mjs`
 * dans le dépôt de publication). Elle répond l'index, pas une redirection :
 * certains outils ne suivent pas les redirections sur un sitemap.
 *
 * Le contenu vient d'une seule source — la route voisine — pour que les deux
 * adresses ne puissent jamais diverger.
 */

import { GET as indexDesSitemaps } from "@/app/sitemap-index.xml/route";

/**
 * Écrit en toutes lettres et non ré-exporté : Next lit la configuration d'une
 * route par analyse statique du fichier, et ignore en silence une valeur qui
 * arrive par un `export { … } from`.
 */
export const dynamic = "force-static";

export function GET(): Response {
  return indexDesSitemaps();
}

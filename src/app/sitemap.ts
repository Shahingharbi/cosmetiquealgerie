import type { MetadataRoute } from "next";

import { getSegmentSitemap, segmentsSitemap } from "@/lib/sitemap-segments";

/**
 * Un fichier par segment : /sitemap/taxonomie.xml, /sitemap/marques.xml,
 * /sitemap/produits-soin-visage-1.xml, etc.
 *
 * Les identifiants sont nommés et non numérotés : le rapport « Sitemaps » de
 * Search Console se lit alors directement par type de page et par département,
 * sans table de correspondance.
 *
 * L'index qui les référence est servi par app/sitemap-index.xml/route.ts.
 */
export async function generateSitemaps(): Promise<{ id: string }[]> {
  return segmentsSitemap.map((segment) => ({ id: segment.id }));
}

export default async function sitemap({
  id,
}: {
  id: Promise<string>;
}): Promise<MetadataRoute.Sitemap> {
  const segment = getSegmentSitemap(await id);
  return segment ? segment.entrees() : [];
}

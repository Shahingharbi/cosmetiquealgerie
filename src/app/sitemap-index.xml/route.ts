import { segmentsSitemap, urlSegmentSitemap } from "@/lib/sitemap-segments";

/**
 * Index des sitemaps : l'unique URL déclarée dans robots.txt et soumise dans
 * Search Console. Passer par l'index permet d'activer ou de retirer un segment
 * sans re-soumission, ce qui est la condition d'une montée en charge pilotée.
 *
 * Next ne génère pas d'index pour `generateSitemaps` : on l'écrit ici.
 */

/** Figé au build : les segments ne bougent qu'avec les données, donc qu'avec un déploiement. */
export const dynamic = "force-static";

export function GET(): Response {
  const fichiers = segmentsSitemap
    .map(
      (segment) =>
        `  <sitemap>\n    <loc>${urlSegmentSitemap(segment.id)}</loc>\n    <lastmod>${segment.lastModified}</lastmod>\n  </sitemap>`,
    )
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${fichiers}
</sitemapindex>
`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=UTF-8",
      "Cache-Control": "public, max-age=0, must-revalidate",
    },
  });
}

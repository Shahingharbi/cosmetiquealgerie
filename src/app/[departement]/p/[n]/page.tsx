import type { Metadata } from "next";

import VueNoeudPaginee, { metadonneesPage } from "@/components/VueNoeudPaginee";
import { produitsDuNoeud, taxonomie } from "@/lib/catalogue";
import { nbPages, PAGES_PREGENEREES } from "@/lib/pagination";

/** Pages 2+ d'un rayon : /soin-visage/p/2/ */

interface Props {
  params: Promise<{ departement: string; n: string }>;
}

/**
 * Seules les premières pages sont pré-générées ; les suivantes sont rendues à
 * la demande puis mises en cache. `dynamicParams` reste donc à vrai, et c'est
 * la vue qui répond 404 au-delà de la dernière page réelle.
 */
export const dynamicParams = true;
export const revalidate = 86400;

export function generateStaticParams() {
  return taxonomie.flatMap((dep) => {
    const total = nbPages(produitsDuNoeud(dep.url).length);
    const pages: { departement: string; n: string }[] = [];
    for (let n = 2; n <= Math.min(total, PAGES_PREGENEREES); n++) {
      pages.push({ departement: dep.slug, n: String(n) });
    }
    return pages;
  });
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { departement, n } = await params;
  return metadonneesPage(`/${departement}/`, n);
}

export default async function PageRayonPaginee({ params }: Props) {
  const { departement, n } = await params;
  return <VueNoeudPaginee urlNoeud={`/${departement}/`} numero={n} />;
}

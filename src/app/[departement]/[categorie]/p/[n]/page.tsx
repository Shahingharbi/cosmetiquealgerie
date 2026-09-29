import type { Metadata } from "next";

import VueNoeudPaginee, { metadonneesPage } from "@/components/VueNoeudPaginee";
import { produitsDuNoeud, taxonomie } from "@/lib/catalogue";
import { nbPages, PAGES_PREGENEREES } from "@/lib/pagination";

/** Pages 2+ d'une catégorie : /soin-visage/creme-hydratante-visage/p/2/ */

interface Props {
  params: Promise<{ departement: string; categorie: string; n: string }>;
}

export const dynamicParams = true;
export const revalidate = 86400;

export function generateStaticParams() {
  return taxonomie.flatMap((dep) =>
    dep.categories.flatMap((cat) => {
      const total = nbPages(produitsDuNoeud(cat.url).length);
      const pages: { departement: string; categorie: string; n: string }[] = [];
      for (let n = 2; n <= Math.min(total, PAGES_PREGENEREES); n++) {
        pages.push({ departement: dep.slug, categorie: cat.slug, n: String(n) });
      }
      return pages;
    }),
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { departement, categorie, n } = await params;
  return metadonneesPage(`/${departement}/${categorie}/`, n);
}

export default async function PageCategoriePaginee({ params }: Props) {
  const { departement, categorie, n } = await params;
  return <VueNoeudPaginee urlNoeud={`/${departement}/${categorie}/`} numero={n} />;
}

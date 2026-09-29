import Link from "next/link";
import { SITE_URL } from "@/lib/catalogue";
import type { FilAriane as Maillon } from "@/types/catalogue";

interface Props {
  maillons: Maillon[];
}

/**
 * Fil d'Ariane + BreadcrumbList JSON-LD.
 *
 * C'est le lien montant le plus régulier du site : chaque page produit renvoie
 * mécaniquement vers sa catégorie, ce qui alimente les pages cibles du cocon
 * avec des ancres cohérentes. Rendu côté serveur, donc toujours crawlable.
 */
export default function FilAriane({ maillons }: Props) {
  if (maillons.length < 2) return null;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: maillons.map((m, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: m.nom,
      item: `${SITE_URL}${m.url}`,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <nav aria-label="Fil d'Ariane" className="text-[12px] text-[#4f4f4f]">
        <ol className="flex flex-wrap items-center gap-x-2 gap-y-1">
          {maillons.map((m, i) => {
            const dernier = i === maillons.length - 1;
            return (
              <li key={m.url} className="flex items-center gap-x-2">
                {dernier ? (
                  <span aria-current="page" className="text-[#141414]">
                    {m.nom}
                  </span>
                ) : (
                  <>
                    <Link href={m.url} className="hover:text-[#141414] hover:underline">
                      {m.nom}
                    </Link>
                    <span aria-hidden className="text-[#909090]">
                      /
                    </span>
                  </>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}

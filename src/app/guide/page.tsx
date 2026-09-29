import type { Metadata } from "next";
import Link from "next/link";

import FilAriane from "@/components/FilAriane";
import { SITE_NOM, urlAbsolue } from "@/lib/catalogue";
import { GUIDES, urlGuide } from "@/lib/guides";

/**
 * Index des guides.
 *
 * Page de tête du silo éditorial : elle ne vend rien, elle oriente. Elle
 * n'existe que parce que des guides existent — un index vide serait une page
 * sans contenu propre, exactement ce qu'il ne faut pas publier.
 */

export const metadata: Metadata = {
  title: { absolute: `Guides et conseils cosmétiques | ${SITE_NOM}` },
  description:
    "Nos guides pour choisir sans se tromper : crème solaire, actifs du visage, peau grasse, chute de cheveux, fond de teint et authenticité des produits.",
  alternates: { canonical: urlAbsolue("/guide/") },
};

export default function PageGuides() {
  return (
    <div className="relative flex min-h-screen flex-col bg-[#f4f4f2]">

      <main className="flex-1 px-4 py-10 md:px-8 md:py-16">
        <div className="mx-auto max-w-[1000px]">
          <FilAriane
            maillons={[
              { nom: "Accueil", url: "/" },
              { nom: "Guides", url: "/guide/" },
            ]}
          />

          <h1 className="mt-6 text-[32px] leading-[1.08] tracking-tight text-[#141414] md:text-[46px]">
            Guides et conseils
          </h1>
          <p className="mt-6 max-w-[62ch] text-[17px] leading-[1.6] text-[#4f4f4f]">
            Des réponses écrites pour être utiles, pas pour vendre : comment
            choisir, comment appliquer, et ce qu&apos;un cosmétique ne peut pas
            faire. Chaque guide renvoie vers les rayons concernés.
          </p>

          <ul className="mt-12 grid grid-cols-1 gap-px bg-[#e5e5e5] md:grid-cols-2">
            {GUIDES.map((g) => (
              <li key={g.slug} className="bg-white">
                <Link href={urlGuide(g.slug)} className="block h-full px-6 py-8 hover:bg-[#f3efe9]">
                  <h2 className="text-[19px] leading-[1.25] text-[#141414] underline underline-offset-4">
                    {g.h1}
                  </h2>
                  <p className="mt-3 text-[14px] leading-[1.6] text-[#4f4f4f]">
                    {g.description}
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </main>
    </div>
  );
}

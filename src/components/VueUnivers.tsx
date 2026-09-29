import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import BlocFaq from "@/components/BlocFaq";
import FilAriane from "@/components/FilAriane";
import GrilleProduits from "@/components/GrilleProduits";
import TexteEditorial from "@/components/TexteEditorial";
import { SITE_NOM, urlAbsolue } from "@/lib/catalogue";
import {
  getUnivers,
  nbProduitsUnivers,
  produitsUnivers,
  rayonsUnivers,
} from "@/lib/hubs";

/**
 * Page « univers » : K-beauty, bio, peau sensible.
 *
 * Trois pages transverses qui traversent l'arbre au lieu de le suivre. Elles
 * captent une intention large et redistribuent vers les catégories, qui sont
 * les pages qui vendent. Le sens des liens est volontairement unique :
 * l'univers pointe vers les rayons, jamais l'inverse, pour ne pas mélanger
 * les silos — c'est la règle du cocon sémantique.
 */

export function metadonneesUnivers(slug: string): Metadata {
  const u = getUnivers(slug);
  if (!u) return {};
  return {
    title: { absolute: `${u.title} | ${SITE_NOM}` },
    description: u.description,
    alternates: { canonical: urlAbsolue(`/${u.slug}/`) },
    openGraph: { type: "website", title: u.h1, url: urlAbsolue(`/${u.slug}/`) },
  };
}

export default function VueUnivers({ slug }: { slug: string }) {
  const u = getUnivers(slug);
  if (!u) notFound();

  const rayons = rayonsUnivers(u);
  const produits = produitsUnivers(u, 24);
  const total = nbProduitsUnivers(u);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: u.h1,
    description: u.description,
    url: urlAbsolue(`/${u.slug}/`),
    isPartOf: { "@type": "WebSite", name: SITE_NOM, url: urlAbsolue("/") },
  };

  return (
    <main className="mx-auto w-full max-w-[1400px] px-4 pb-24 pt-6 sm:px-6 lg:px-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <FilAriane
        maillons={[
          { nom: "Accueil", url: "/" },
          { nom: u.h1, url: `/${u.slug}/` },
        ]}
      />

      <header className="mt-6 max-w-[70ch]">
        <h1 className="text-[30px] leading-[1.08] tracking-tight text-[#141414] md:text-[44px]">
          {u.h1}
        </h1>
        <p className="mt-5 font-mono text-[11px] uppercase tracking-[0.08em] text-[#909090]">
          Livraison dans les 69 wilayas · règlement au livreur
        </p>
      </header>

      <div className="mt-8 max-w-[75ch]">
        <TexteEditorial paragraphes={u.contenu.intro} />
      </div>

      {rayons.length > 0 && (
        <section aria-labelledby="rayons" className="mt-14 border-t border-[#e5e5e5] pt-10">
          <h2 id="rayons" className="text-[22px] leading-[1.2] text-[#141414] md:text-[26px]">
            Par où commencer
          </h2>
          <ul className="mt-6 grid grid-cols-1 gap-px bg-[#e5e5e5] sm:grid-cols-2 lg:grid-cols-3">
            {rayons.map((r) => (
              <li key={r.url} className="bg-white">
                <Link href={r.url} className="block px-5 py-6 transition-colors hover:bg-[#f3efe9]">
                  <span className="block text-[16px] text-[#141414] underline underline-offset-4">
                    {r.nom}
                  </span>
                  <span className="mt-1 block font-mono text-[11px] uppercase tracking-[0.06em] text-[#909090]">
                    {r.nb.toLocaleString("fr-DZ")} références
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      )}

      {produits.length > 0 && (
        <section className="mt-16 border-t border-[#e5e5e5] pt-10">
          <h2 className="mb-8 text-[22px] leading-[1.2] text-[#141414] md:text-[26px]">
            Une sélection pour démarrer
          </h2>
          <GrilleProduits produits={produits} total={total} />
        </section>
      )}

      <div className="mt-16 space-y-12 border-t border-[#e5e5e5] pt-12">
        {u.contenu.sections.map((s) => (
          <TexteEditorial key={s.titre} titre={s.titre} paragraphes={s.paragraphes} />
        ))}
        <BlocFaq faq={u.contenu.faq} />
      </div>
    </main>
  );
}

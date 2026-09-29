import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import BlocFaq from "@/components/BlocFaq";
import FilAriane from "@/components/FilAriane";
import TexteEditorial from "@/components/TexteEditorial";
import { SITE_NOM, urlAbsolue } from "@/lib/catalogue";
import { GUIDES, getGuide, urlGuide } from "@/lib/guides";

/** L'arbre est figé : un slug inconnu répond 404, jamais une page vide. */
export const dynamicParams = false;

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return GUIDES.map((g) => ({ slug: g.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const g = getGuide(slug);
  if (!g) return {};
  return {
    title: { absolute: `${g.titre} | ${SITE_NOM}` },
    description: g.description,
    alternates: { canonical: urlAbsolue(urlGuide(g.slug)) },
    openGraph: { type: "article", title: g.h1, url: urlAbsolue(urlGuide(g.slug)) },
  };
}

export default async function PageGuide({ params }: Props) {
  const { slug } = await params;
  const g = getGuide(slug);
  if (!g) notFound();

  // Deux autres guides en fin de page : le maillage entre guides se fait
  // entre pairs, sans jamais remonter depuis une catégorie.
  const autres = GUIDES.filter((x) => x.slug !== g.slug).slice(0, 2);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: g.h1,
    description: g.description,
    mainEntityOfPage: urlAbsolue(urlGuide(g.slug)),
    publisher: { "@type": "Organization", name: SITE_NOM, url: urlAbsolue("/") },
    inLanguage: "fr",
  };

  return (
    <div className="relative flex min-h-screen flex-col bg-[#f4f4f2]">

      <main className="flex-1 px-4 py-10 md:px-8 md:py-16">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        <article className="mx-auto max-w-[840px]">
          <FilAriane
            maillons={[
              { nom: "Accueil", url: "/" },
              { nom: "Guides", url: "/guide/" },
              { nom: g.h1, url: urlGuide(g.slug) },
            ]}
          />

          <h1 className="mt-6 text-[32px] leading-[1.08] tracking-tight text-[#141414] md:text-[46px]">
            {g.h1}
          </h1>

          <p className="mt-6 border-l-2 border-[#141414] pl-5 text-[18px] leading-[1.6] text-[#141414]">
            {g.chapo}
          </p>

          <div className="mt-14 space-y-12">
            {g.sections.map((s) => (
              <TexteEditorial key={s.titre} titre={s.titre} paragraphes={s.paragraphes} />
            ))}
          </div>

          <div className="mt-16 border-t border-[#e5e5e5] pt-12">
            <BlocFaq faq={g.faq} />
          </div>

          {autres.length > 0 && (
            <nav aria-labelledby="autres-guides" className="mt-16 border-t border-[#e5e5e5] pt-10">
              <h2 id="autres-guides" className="text-[20px] leading-[1.2] text-[#141414]">
                À lire aussi
              </h2>
              <ul className="mt-6 grid grid-cols-1 gap-px bg-[#e5e5e5] sm:grid-cols-2">
                {autres.map((a) => (
                  <li key={a.slug} className="bg-white">
                    <Link href={urlGuide(a.slug)} className="block px-5 py-6 hover:bg-[#f3efe9]">
                      <span className="block text-[16px] leading-[1.35] text-[#141414] underline underline-offset-4">
                        {a.h1}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          )}
        </article>
      </main>
    </div>
  );
}

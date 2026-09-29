import type { Metadata } from "next";
import BlocFaq from "@/components/BlocFaq";
import { Carousel } from "@/components/Carousel";
import CarteProduit from "@/components/CarteProduit";
import { DiagnosticCTA } from "@/components/DiagnosticCTA";
import GrilleRayons from "@/components/GrilleRayons";
import { Hero } from "@/components/Hero";
import { Philosophy } from "@/components/Philosophy";
import { Reviews } from "@/components/Reviews";
import RoutineCard from "@/components/RoutineCard";
import TexteEditorial from "@/components/TexteEditorial";
import { SITE_NOM, SITE_URL, urlAbsolue } from "@/lib/catalogue";
import {
  CATEGORIES,
  EDITORIAL_ACCUEIL,
  FAQ_ACCUEIL,
  ICONIQUES,
  NOUVEAUTES,
  ROUTINES,
} from "@/lib/site-data";

export function generateMetadata(): Metadata {
  return {
    // `absolute` court-circuite le gabarit "%s | Cosmétique Algérie" du layout :
    // la marque est déjà dans le title de la home.
    title: { absolute: "Cosmétique original en Algérie : soin, maquillage, parfum" },
    description:
      "Soin du visage, cheveux, maquillage et parfum d'origine, avec marque, contenance et prix en dinars. Livraison dans les 69 wilayas, règlement au livreur.",
    alternates: { canonical: urlAbsolue("/") },
  };
}

export default function PageAccueil() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${SITE_URL}/#organization`,
        name: SITE_NOM,
        url: `${SITE_URL}/`,
        description:
          "Catalogue de produits cosmétiques originaux livrés dans les 69 wilayas d'Algérie.",
        areaServed: { "@type": "Country", name: "Algérie" },
        contactPoint: [
          {
            "@type": "ContactPoint",
            contactType: "customer service",
            email: "contact@cosmetiquealgerie.com",
            availableLanguage: ["fr", "ar"],
          },
        ],
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        name: SITE_NOM,
        url: `${SITE_URL}/`,
        inLanguage: "fr-DZ",
        publisher: { "@id": `${SITE_URL}/#organization` },
        potentialAction: {
          "@type": "SearchAction",
          target: {
            "@type": "EntryPoint",
            urlTemplate: `${SITE_URL}/recherche/?q={search_term_string}`,
          },
          "query-input": "required name=search_term_string",
        },
      },
    ],
  };

  return (
    <div className="relative flex min-h-screen flex-col bg-[#f4f4f2]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/*
        Ordre des titres, volontaire et à ne pas défaire : le H1 est porté par
        le Hero, donc c'est la première balise de titre du document. Toutes les
        sections qui suivent sont des H2. La version précédente ouvrait sur un
        H2 dans le Hero et plaçait le H1 plus bas, sous forme de mots
        superposés : la hiérarchie était fausse et le mot-clé absent du H1.
      */}
      <main id="contenu" className="flex-1 pb-20">
        <Hero />

        <Carousel
          eyebrow="Les plus demandés"
          viewAllLabel="Voir le soin du visage"
          viewAllHref="/soin-visage/"
          slideClass="min-w-[70vw] sm:min-w-[45vw] md:min-w-[360px] max-w-[440px]"
        >
          {ICONIQUES.map((p) => (
            <CarteProduit key={p.slug} produit={p} />
          ))}
        </Carousel>

        <GrilleRayons titre="Nos rayons" rayons={CATEGORIES} />

        <Carousel
          eyebrow="Les maisons référencées"
          viewAllLabel="Toutes les marques"
          viewAllHref="/marques/"
          slideClass="min-w-[52vw] sm:min-w-[34vw] md:min-w-[220px] max-w-[260px]"
          className="bg-white"
        >
          {ROUTINES.map((m) => (
            <RoutineCard key={m.id} routine={m} />
          ))}
        </Carousel>

        <DiagnosticCTA />

        <Carousel
          eyebrow="Un choix par rayon"
          viewAllLabel="Voir le maquillage"
          viewAllHref="/maquillage/"
          slideClass="min-w-[70vw] sm:min-w-[45vw] md:min-w-[360px] max-w-[440px]"
        >
          {NOUVEAUTES.map((p) => (
            <CarteProduit key={p.slug} produit={p} />
          ))}
        </Carousel>

        <Reviews />

        {/*
          Corps de texte de la page. Une accueil faite uniquement de carrousels
          ne contient aucune phrase à indexer : elle ne peut se positionner sur
          rien. Ce bloc porte le vocabulaire du marché et distribue les
          premiers liens vers les têtes de silo.
        */}
        <section className="w-full px-4 py-14 sm:px-6 md:py-20 lg:px-10">
          <div className="mx-auto w-full max-w-[1400px]">
            <h2 className="text-[26px] font-[400] leading-none text-[#141414] md:text-[36px]">
              {EDITORIAL_ACCUEIL.titre}
            </h2>
            <div className="mt-10 grid gap-10 md:grid-cols-2 md:gap-x-14 md:gap-y-12">
              {EDITORIAL_ACCUEIL.sections.map((s) => (
                <TexteEditorial
                  key={s.titre}
                  titre={s.titre}
                  paragraphes={s.paragraphes}
                  niveau={3}
                />
              ))}
            </div>
          </div>
        </section>

        <section className="w-full px-4 pb-16 sm:px-6 lg:px-10">
          <div className="mx-auto w-full max-w-[1400px] border-t border-[#e5e5e5] pt-12">
            <BlocFaq faq={FAQ_ACCUEIL} />
          </div>
        </section>

        <Philosophy />
      </main>
    </div>
  );
}

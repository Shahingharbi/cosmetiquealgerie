import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import CarteProduit from "@/components/CarteProduit";
import FilAriane from "@/components/FilAriane";
import {
  SITE_NOM,
  SITE_URL,
  categoriesDeLaMarque,
  getMarque,
  getNoeud,
  marqueCategories,
  produitsDuNoeud,
  trierParPertinence,
  urlAbsolue,
  urlMarque,
  urlProduit,
} from "@/lib/catalogue";
import type { Marque, NoeudTaxonomie, Produit } from "@/types/catalogue";

const MAX_GRILLE = 48;

interface Props {
  params: Promise<{ marque: string; categorie: string }>;
}

/** Produits publiés d'une marque à l'intérieur d'un nœud, descendance comprise. */
function produitsCroisement(urlNoeud: string, marqueSlug: string): Produit[] {
  return produitsDuNoeud(urlNoeud).filter((p) => p.marqueSlug === marqueSlug);
}

/**
 * Résolution du segment [categorie].
 *
 * marque-categorie.json stocke une URL de taxonomie complète
 * ("/soin-visage/serum-visage/") alors que l'URL du croisement n'accepte qu'un
 * segment : on retient le dernier ("serum-visage"). En cas de collision entre
 * deux catégories partageant ce segment pour une même marque, seule la première
 * rencontrée est générée — les données actuelles n'en contiennent aucune.
 */
function resoudre(marqueSlug: string, segment: string): NoeudTaxonomie | undefined {
  for (const mc of categoriesDeLaMarque(marqueSlug)) {
    const noeud = getNoeud(mc.categorie);
    if (noeud && noeud.slug === segment) return noeud;
  }
  return undefined;
}

/**
 * Un croisement dont tous les produits sont non publiables (sans visuel ou sans
 * prix) ne génère pas de page : 17 combinaisons sur 1 010 sont dans ce cas.
 */
export function generateStaticParams() {
  const vus = new Set<string>();
  const params: Array<{ marque: string; categorie: string }> = [];
  for (const mc of marqueCategories) {
    const noeud = getNoeud(mc.categorie);
    if (!noeud) continue;
    const cle = `${mc.marqueSlug}/${noeud.slug}`;
    if (vus.has(cle)) continue;
    if (produitsCroisement(noeud.url, mc.marqueSlug).length === 0) continue;
    vus.add(cle);
    params.push({ marque: mc.marqueSlug, categorie: noeud.slug });
  }
  return params;
}

/** Title <= 60 caractères, mot-clé de la catégorie et marque toujours en tête. */
function titreCroisement(nomNoeud: string, nomMarque: string): string {
  const base = `${nomNoeud} ${nomMarque}`;
  const candidats = [
    `${base} Algérie | ${SITE_NOM}`,
    `${base} | ${SITE_NOM}`,
    `${base} en Algérie`,
    base,
  ];
  for (const c of candidats) if (c.length <= 60) return c;
  return base.slice(0, 60);
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { marque: slugMarque, categorie: segment } = await params;
  const marque = getMarque(slugMarque);
  const noeud = marque ? resoudre(slugMarque, segment) : undefined;
  if (!marque || !noeud) return {};

  const chemin = `${urlMarque(slugMarque)}${segment}/`;
  const title = titreCroisement(noeud.nom, marque.nom);
  // Sans comptage de références : le propriétaire refuse les chiffres de
  // catalogue dans tout texte visible, et Google affiche la description.
  const description = `${noeud.nom} ${marque.nom} : produits originaux en Algérie, prix en dinars, livraison dans les 69 wilayas et paiement à la livraison.`;

  return {
    title: { absolute: title },
    description,
    alternates: { canonical: urlAbsolue(chemin) },
    openGraph: { title, description, url: urlAbsolue(chemin), type: "website" },
  };
}

export default async function PageMarqueCategorie({ params }: Props) {
  const { marque: slugMarque, categorie: segment } = await params;
  const marque: Marque | undefined = getMarque(slugMarque);
  if (!marque) notFound();

  const noeud = resoudre(slugMarque, segment);
  if (!noeud) notFound();

  const tous = produitsCroisement(noeud.url, slugMarque);
  if (tous.length === 0) notFound();

  const chemin = `${urlMarque(slugMarque)}${segment}/`;
  const affiches = trierParPertinence(tous).slice(0, MAX_GRILLE);
  const h1 = `${noeud.h1} ${marque.nom} en Algérie`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": `${urlAbsolue(chemin)}#page`,
        url: urlAbsolue(chemin),
        name: h1,
        description: `${noeud.keyword} ${marque.nom} disponibles en Algérie.`,
        inLanguage: "fr",
        isPartOf: { "@type": "WebSite", name: SITE_NOM, url: SITE_URL },
        about: {
          "@type": "Brand",
          name: marque.nom,
          url: urlAbsolue(urlMarque(slugMarque)),
        },
      },
      {
        "@type": "ItemList",
        "@id": `${urlAbsolue(chemin)}#produits`,
        name: h1,
        numberOfItems: affiches.length,
        itemListElement: affiches.map((p, i) => ({
          "@type": "ListItem",
          position: i + 1,
          name: p.nom,
          url: urlAbsolue(urlProduit(p)),
        })),
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="mx-auto w-full max-w-[1440px] px-4 pb-24 pt-8 md:px-8">
        <FilAriane
          maillons={[
            { nom: "Accueil", url: "/" },
            { nom: "Marques", url: "/marques/" },
            { nom: marque.nom, url: urlMarque(slugMarque) },
            { nom: noeud.nom, url: chemin },
          ]}
        />

        <header className="mt-8 max-w-[760px]">
          <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-[#909090]">
            {marque.nom}
          </p>
          <h1 className="mt-2 text-[32px] font-[400] leading-[1.1] text-[#141414] md:text-[44px]">
            {h1}
          </h1>
          <p className="mt-4 text-[15px] leading-[1.6] text-[#4f4f4f]">
            {noeud.nom} {marque.nom} : chaque référence est un produit original, présenté
            avec sa contenance et son prix en dinars. La livraison couvre les 69 wilayas,
            avec paiement à la réception.
          </p>
        </header>

        <nav aria-label="Pages liées" className="mt-8 flex flex-wrap gap-2">
          <Link
            href={urlMarque(slugMarque)}
            className="block border border-black/15 px-3 py-1.5 text-[13px] text-[#141414] hover:bg-[#141414] hover:text-white"
          >
            Toute la marque {marque.nom}
          </Link>
          <Link
            href={noeud.url}
            className="block border border-black/15 px-3 py-1.5 text-[13px] text-[#141414] hover:bg-[#141414] hover:text-white"
          >
            {noeud.nom}, toutes marques
          </Link>
        </nav>

        <section aria-labelledby="produits" className="mt-14">
          <div className="flex flex-wrap items-baseline justify-between gap-3 border-b border-black/10 pb-2">
            <h2
              id="produits"
              className="font-mono text-[13px] uppercase tracking-[0.12em] text-[#141414]"
            >
              {noeud.nom} {marque.nom}
            </h2>
            <p className="font-mono text-[11px] text-[#909090]">
              {affiches.length} affichés sur {tous.length}
            </p>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-3 lg:grid-cols-4">
            {affiches.map((p, i) => (
              <CarteProduit key={p.slug} produit={p} prioritaire={i < 4} />
            ))}
          </div>
        </section>
      </main>
    </>
  );
}

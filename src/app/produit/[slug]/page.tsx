import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import BlocAuthenticite from "@/components/BlocAuthenticite";
import BlocsRecoProduit from "@/components/BlocsRecoProduit";
import TexteEditorial from "@/components/TexteEditorial";
import BlocFaq from "@/components/BlocFaq";
import { decrireProduit } from "@/lib/descriptions";
import BoutonAjoutPanier from "@/components/BoutonAjoutPanier";
import ContactAchat from "@/components/ContactAchat";
import FilAriane from "@/components/FilAriane";
import GalerieProduit from "@/components/GalerieProduit";
import {
  SITE_NOM,
  estIndexable,
  estPubliable,
  filArianeProduit,
  formatPrix,
  getNoeud,
  getProduit,
  produitsPrioritaires,
  urlAbsolue,
  urlMarque,
  urlProduit,
} from "@/lib/catalogue";
import type { Produit } from "@/types/catalogue";

/* ------------------------------------------------------------------ */
/* Libellés des attributs                                              */
/* ------------------------------------------------------------------ */

/** Attributs affichés, dans l'ordre de lecture souhaité. */
const CARACTERISTIQUES: { champ: keyof Produit; libelle: string }[] = [
  { champ: "texture", libelle: "Texture" },
  { champ: "zone", libelle: "Zone d'application" },
  { champ: "besoin", libelle: "Besoin" },
  { champ: "type_peau", libelle: "Type de peau" },
  { champ: "type_cheveux", libelle: "Type de cheveux" },
  { champ: "spf", libelle: "Protection solaire" },
  { champ: "genre", libelle: "Destiné à" },
  { champ: "format", libelle: "Format" },
];

/**
 * Les valeurs sont stockées sous forme de slugs (extraits des noms produits).
 * Aucun slug n'est partagé par deux attributs, une table unique suffit.
 */
const VALEURS: Record<string, string> = {
  // texture
  huile: "Huile",
  creme: "Crème",
  lait: "Lait",
  spray: "Spray",
  gel: "Gel",
  serum: "Sérum",
  lotion: "Lotion",
  baume: "Baume",
  stick: "Stick",
  mousse: "Mousse",
  poudre: "Poudre",
  // zone
  cheveux: "Cheveux",
  visage: "Visage",
  corps: "Corps",
  levres: "Lèvres",
  yeux: "Yeux",
  ongles: "Ongles",
  pieds: "Pieds",
  mains: "Mains",
  // besoin
  hydratation: "Hydratation",
  eclat: "Éclat",
  matifiant: "Matifiant",
  "anti-taches": "Anti-taches",
  "anti-acne": "Anti-acné",
  "anti-chute": "Anti-chute",
  raffermissant: "Raffermissant",
  apaisant: "Apaisant",
  "anti-age": "Anti-âge",
  cicatrisant: "Cicatrisant",
  // type de peau
  grasse: "Grasse",
  sensible: "Sensible",
  seche: "Sèche",
  acneique: "Acnéique",
  normale: "Normale",
  mixte: "Mixte",
  atopique: "Atopique",
  // type de cheveux
  sec: "Secs",
  abime: "Abîmés",
  boucle: "Bouclés",
  colore: "Colorés",
  gras: "Gras",
  crepu: "Crépus",
  fin: "Fins",
  // indice solaire
  "spf50+": "SPF 50+",
  spf50: "SPF 50",
  spf30: "SPF 30",
  spf25: "SPF 25",
  spf20: "SPF 20",
  spf15: "SPF 15",
  // genre
  bebe: "Bébé",
  femme: "Femme",
  homme: "Homme",
  enfant: "Enfant",
  // format
  coffret: "Coffret",
  voyage: "Format voyage",
  recharge: "Recharge",
};

function libelleValeur(valeur: string): string {
  const connu = VALEURS[valeur];
  if (connu) return connu;
  const brut = valeur.replace(/-/g, " ");
  return brut.charAt(0).toUpperCase() + brut.slice(1);
}

/** Les champs multivalués utilisent "|" comme séparateur. */
function valeursAffichables(brut: string): string {
  return brut
    .split("|")
    .map((v) => v.trim())
    .filter(Boolean)
    .map(libelleValeur)
    .join(", ");
}

/* ------------------------------------------------------------------ */
/* Métadonnées                                                         */
/* ------------------------------------------------------------------ */

/**
 * Le nom du site en suffixe coûtait 21 caractères sur les 60 utiles, au point
 * de tronquer le nom du produit — l'information qui fait cliquer. Il est
 * remplacé par l'intention réellement tapée sur ce marché : « {produit} prix
 * algerie ». Google ajoute de lui-même le nom du site sous le titre.
 */
const SUFFIXE_TITLE = " — prix en Algérie";
const TITLE_MAX = 68;

/** Coupe sur un mot entier quand c'est possible, sinon coupe net. */
function tronquer(texte: string, max: number): string {
  if (texte.length <= max) return texte;
  const coupe = texte.slice(0, max - 1);
  const dernierEspace = coupe.lastIndexOf(" ");
  const base = dernierEspace > max * 0.6 ? coupe.slice(0, dernierEspace) : coupe;
  return `${base.replace(/[\s,;:.\-–—]+$/u, "")}…`;
}

function contient(texte: string, fragment: string): boolean {
  return texte.toLowerCase().includes(fragment.toLowerCase());
}

/**
 * « {nom} {marque} — prix en Algérie », ramené à 68 caractères.
 *
 * Le nom du produit occupe la tête du titre : c'est le mot-clé de la page et
 * ce que l'internaute reconnaît dans les résultats. La mention de prix n'est
 * ajoutée que si elle tient sans amputer le nom ; un nom tronqué pour loger un
 * suffixe est une mauvaise affaire.
 */
function titreProduit(p: Produit): string {
  const marqueDansNom = !p.marque || contient(p.nom, p.marque);
  const complet = marqueDansNom ? p.nom : `${p.nom} ${p.marque}`;

  if (complet.length + SUFFIXE_TITLE.length <= TITLE_MAX) {
    return `${complet}${SUFFIXE_TITLE}`;
  }
  if (complet.length <= TITLE_MAX) return complet;
  return tronquer(complet, TITLE_MAX);
}

const DESCRIPTION_MAX = 160;

/**
 * Le nom du produit est le seul élément de longueur variable : on lui donne
 * la place qui reste une fois la contenance, la marque et la phrase de
 * réassurance posées, pour ne pas dépasser la coupure des SERP.
 */
function descriptionProduit(p: Produit): string {
  const queue = ` à ${formatPrix(p.prix)}. Produit original, livraison dans les 69 wilayas et paiement à la livraison.`;
  const contenance =
    p.contenance && !contient(p.nom, p.contenance) ? ` ${p.contenance}` : "";
  const marque = p.marque && !contient(p.nom, p.marque) ? ` de ${p.marque}` : "";
  const budget = DESCRIPTION_MAX - queue.length - contenance.length - marque.length;
  return `${tronquer(p.nom, Math.max(budget, 24))}${contenance}${marque}${queue}`;
}

/**
 * Référence courte et stable, pour le champ `sku` du balisage Product.
 *
 * Le slug servait de sku, mais Google refuse plus de 50 caractères dans les
 * fiches marchand (« Longueur de chaîne non valide dans le champ sku »,
 * inspection Search Console du 30/09/2026) et bien des slugs dépassent.
 * Deux empreintes FNV-1a de 32 bits concaténées : un slug donne toujours la
 * même référence, et l'espace de 64 bits rend une collision improbable.
 */
function skuProduit(slug: string): string {
  const empreinte = (graine: number) => {
    let h = graine >>> 0;
    for (let i = 0; i < slug.length; i++) {
      h ^= slug.charCodeAt(i);
      h = Math.imul(h, 0x01000193) >>> 0;
    }
    return h.toString(36).padStart(7, "0");
  };
  return `CA-${empreinte(0x811c9dc5)}${empreinte(0x050c5d1f)}`.toUpperCase();
}

/* ------------------------------------------------------------------ */
/* Route                                                               */
/* ------------------------------------------------------------------ */

interface Props {
  params: Promise<{ slug: string }>;
}

/**
 * Fiches pré-générées au build : les ~5 385 produits prioritaires.
 * Les autres sont rendues à la demande au premier accès, puis mises en cache.
 */
export function generateStaticParams(): { slug: string }[] {
  return produitsPrioritaires.map((p) => ({ slug: p.slug }));
}

/**
 * Une fiche générée à la demande reste en cache jusqu'au déploiement suivant.
 * Le catalogue est un fichier du dépôt : il ne change qu'avec un déploiement,
 * qui vide ce cache. La régénérer chaque jour, comme avant le 30/09/2026, ne
 * produisait que des écritures ISR inutiles, décomptées du quota Vercel.
 */
export const revalidate = false;

// Un slug hors du pré-rendu est rendu à la demande ; s'il ne correspond à
// aucun produit publiable, la page appelle notFound() et renvoie bien un 404.
export const dynamicParams = true;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const p = getProduit(slug);
  if (!p || !estPubliable(p)) {
    return { title: { absolute: `Produit introuvable${SUFFIXE_TITLE}` } };
  }

  const canonical = urlAbsolue(urlProduit(p));
  const description = descriptionProduit(p);

  return {
    title: { absolute: titreProduit(p) },
    description,
    alternates: { canonical },
    // Les fiches hors vague d'indexation passent en `noindex, follow`.
    //
    // Elles restent en ligne, atteignables et vendables, et continuent de
    // transmettre leur jus de lien — c'est tout l'objet du `follow`. Mais
    // elles ne sont pas soumises a l'indexation : sans visuel ni marque
    // identifiee, leur contenu est trop mince pour se distinguer, et les
    // pousser en masse est precisement ce qui a provoque l'effondrement du
    // crawl sur le site precedent. Google decouvre des milliers d'URL d'un
    // coup, juge l'ensemble a faible valeur unique, et coupe la demande de
    // crawl : les pages restent bloquees en « Detectee, actuellement non
    // indexee ».
    //
    // Le sitemap ne liste que les fiches indexables. Cette balise aligne le
    // rendu sur le sitemap : sans elle, les deux se contredisaient et 12 128
    // fiches etaient crawlables tout en etant absentes du sitemap.
    ...(estIndexable(p) ? {} : { robots: { index: false, follow: true } }),
    openGraph: {
      type: "website",
      locale: "fr_DZ",
      siteName: SITE_NOM,
      url: canonical,
      title: titreProduit(p),
      description,
      // Toutes les fiches n'ont pas encore de visuel : une balise image vide
      // vaut moins qu'une absence de balise.
      ...(p.images[0] ? { images: [{ url: p.images[0], alt: p.nom }] } : {}),
    },
  };
}

export default async function PageProduit({ params }: Props) {
  const { slug } = await params;
  const p = getProduit(slug);
  if (!p || !estPubliable(p)) notFound();

  const noeud = getNoeud(p.categorie);
  const description = descriptionProduit(p);
  const canonical = urlAbsolue(urlProduit(p));

  const fiche = decrireProduit(p);

  const caracteristiques = CARACTERISTIQUES.map(({ champ, libelle }) => {
    const brut = p[champ];
    return typeof brut === "string" && brut.length > 0
      ? { libelle, valeur: valeursAffichables(brut) }
      : null;
  }).filter((c): c is { libelle: string; valeur: string } => c !== null);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: p.nom,
    // `image` omis plutot que vide quand la fiche n'a pas encore de visuel :
    // un tableau vide fait echouer la validation du Product chez Google.
    // URL absolues : le balisage est lu hors de la page, par Google Shopping.
    ...(p.images.length > 0
      ? { image: p.images.map((src) => (src.startsWith("http") ? src : urlAbsolue(src))) }
      : {}),
    description,
    sku: skuProduit(p.slug),
    ...(p.marque ? { brand: { "@type": "Brand", name: p.marque } } : {}),
    ...(noeud ? { category: noeud.nom } : {}),
    offers: {
      "@type": "Offer",
      url: canonical,
      price: String(p.prix),
      priceCurrency: "DZD",
      availability: "https://schema.org/InStock",
      itemCondition: "https://schema.org/NewCondition",
      seller: { "@type": "Organization", name: SITE_NOM },
    },
  };

  return (
    <main className="mx-auto w-full max-w-[1280px] px-4 pb-20 sm:px-6 lg:px-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="py-5">
        <FilAriane maillons={filArianeProduit(p)} />
      </div>

      <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
        <GalerieProduit images={p.images} nom={p.nom} marque={p.marque} />

        <div className="flex flex-col gap-6">
          <div>
            {p.marque && (
              <Link
                href={urlMarque(p.marqueSlug)}
                className="font-mono text-[11px] uppercase tracking-[0.08em] text-[#4f4f4f] hover:text-[#141414] hover:underline"
              >
                {p.marque}
              </Link>
            )}
            <h1 className="mt-2 text-[24px] leading-[1.25] text-[#141414] sm:text-[28px]">
              {p.nom}
            </h1>
            {/* Le point médian n'est pas décoratif. Sans lui, le texte de la page
                se lisait « 950 DA500ml » : Google y a vu « DA 500 » et affichait
                500,00 DZD sous la fiche, malgré le prix exact des données
                structurées. */}
            <p className="mt-4 flex items-baseline gap-3">
              <span className="text-[22px] font-medium text-[#141414]">
                {formatPrix(p.prix)}
              </span>
              {p.contenance && (
                <>
                  <span aria-hidden="true" className="text-[#909090]">
                    ·
                  </span>
                  <span className="font-mono text-[12px] text-[#909090]">
                    {p.contenance}
                  </span>
                </>
              )}
            </p>
          </div>

          <BoutonAjoutPanier produit={p} />

          <ContactAchat nomProduit={p.nom} />

          {(caracteristiques.length > 0 || fiche.faits.length > 0 || noeud || p.marque) && (
            <section
              aria-labelledby="titre-caracteristiques"
              className="border-t border-[#e5e5e5] pt-6"
            >
              <h2
                id="titre-caracteristiques"
                className="font-mono text-[11px] uppercase tracking-[0.08em] text-[#909090]"
              >
                Caractéristiques
              </h2>
              <dl className="mt-4 grid grid-cols-1 gap-x-6 gap-y-2 sm:grid-cols-[minmax(0,10rem)_1fr]">
                {p.marque && (
                  <>
                    <dt className="text-[13px] text-[#4f4f4f]">Marque</dt>
                    <dd className="mb-2 text-[13px] text-[#141414] sm:mb-0">
                      <Link
                        href={urlMarque(p.marqueSlug)}
                        className="hover:underline"
                      >
                        {p.marque}
                      </Link>
                    </dd>
                  </>
                )}
                {p.contenance && (
                  <>
                    <dt className="text-[13px] text-[#4f4f4f]">Contenance</dt>
                    <dd className="mb-2 text-[13px] text-[#141414] sm:mb-0">
                      {p.contenance}
                    </dd>
                  </>
                )}
                {/* Faits issus de la note écrite pour ce produit : pyramide
                    olfactive d'un parfum, actif principal d'un soin, type
                    d'applicateur d'un maquillage. Les attributs extraits
                    automatiquement du nom ne couvrent que 43 % du catalogue
                    sur la texture et 1,8 % sur le type de peau : sans eux, la
                    plupart des fiches n'affichaient qu'une ou deux lignes. */}
                {fiche.faits.map((f) => (
                  <div key={`redige-${f.libelle}`} className="contents">
                    <dt className="text-[13px] text-[#4f4f4f]">{f.libelle}</dt>
                    <dd className="mb-2 text-[13px] text-[#141414] sm:mb-0">
                      {f.valeur}
                    </dd>
                  </div>
                ))}
                {caracteristiques.map((c) => (
                  <div key={c.libelle} className="contents">
                    <dt className="text-[13px] text-[#4f4f4f]">{c.libelle}</dt>
                    <dd className="mb-2 text-[13px] text-[#141414] sm:mb-0">
                      {c.valeur}
                    </dd>
                  </div>
                ))}
                {noeud && (
                  <>
                    <dt className="text-[13px] text-[#4f4f4f]">Catégorie</dt>
                    <dd className="text-[13px] text-[#141414]">
                      <Link href={noeud.url} className="hover:underline">
                        {noeud.nom}
                      </Link>
                    </dd>
                  </>
                )}
              </dl>
            </section>
          )}

          {p.inci && (
            <details className="border-t border-[#e5e5e5] pt-6">
              <summary className="cursor-pointer font-mono text-[11px] uppercase tracking-[0.08em] text-[#909090] hover:text-[#141414]">
                Composition (INCI)
              </summary>
              <p className="mt-4 font-mono text-[12px] leading-[1.6] break-words text-[#4f4f4f]">
                {p.inci}
              </p>
            </details>
          )}

          <BlocAuthenticite />
        </div>
      </div>

      <div className="mt-16 space-y-10 border-t border-[#e5e5e5] pt-12">
        {fiche.accroche && <TexteEditorial paragraphes={[fiche.accroche]} />}
        {fiche.blocs.map((b) => (
          <TexteEditorial key={b.titre} titre={b.titre} paragraphes={b.paragraphes} />
        ))}
        <BlocFaq faq={fiche.faq} />
      </div>

      <BlocsRecoProduit produit={p} />
    </main>
  );
}

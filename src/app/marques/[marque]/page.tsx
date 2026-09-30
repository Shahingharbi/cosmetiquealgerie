import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import CarteProduit from "@/components/CarteProduit";
import FilAriane from "@/components/FilAriane";
import TexteEditorial, { enrichir } from "@/components/TexteEditorial";
import BlocFaq from "@/components/BlocFaq";
import { contenuMarque } from "@/lib/contenu-marque";
import { marqueRedigee } from "@/lib/redige";
import {
  SITE_NOM,
  SITE_URL,
  categoriesDeLaMarque,
  getDepartement,
  getMarque,
  getNoeud,
  marques,
  produitsDeLaMarque,
  produitsDuNoeud,
  trierParPertinence,
  urlAbsolue,
  urlMarque,
  urlProduit,
} from "@/lib/catalogue";
import type { Produit } from "@/types/catalogue";

/** Nombre de produits affichés dans la grille. Le reste est atteint par les croisements. */
const MAX_GRILLE = 48;

interface Props {
  params: Promise<{ marque: string }>;
}

/**
 * Une marque sans aucun produit publiable ne génère pas de page : 7 marques sur
 * 431 n'ont que des références sans visuel ou sans prix, une page vide serait
 * du thin content pur.
 */
export function generateStaticParams() {
  return marques
    .filter((m) => produitsDeLaMarque(m.slug).length > 0)
    .map((m) => ({ marque: m.slug }));
}

/**
 * Title <= 60 caractères. On retire d'abord le suffixe du site, puis les
 * qualifiants, plutôt que de couper le nom de la marque au milieu.
 */
function titreMarque(nom: string): string {
  const base = `${nom} Algérie - Prix et livraison`;
  const complet = `${base} | ${SITE_NOM}`;
  if (complet.length <= 60) return complet;
  if (base.length <= 60) return base;
  const court = `${nom} Algérie - Prix`;
  if (court.length <= 60) return court;
  return `${nom} Algérie`.slice(0, 60);
}

/** Départements réellement couverts par les produits publiés, du plus fourni au moins fourni. */
function departementsCouverts(liste: Produit[]): Array<{ slug: string; nom: string; url: string; nb: number }> {
  const compte = new Map<string, number>();
  for (const p of liste) {
    if (!p.departement) continue;
    compte.set(p.departement, (compte.get(p.departement) ?? 0) + 1);
  }
  return [...compte.entries()]
    .map(([slug, nb]) => {
      const dep = getDepartement(slug);
      return dep ? { slug, nom: dep.nom, url: dep.url, nb } : undefined;
    })
    .filter((d): d is { slug: string; nom: string; url: string; nb: number } => Boolean(d))
    .sort((a, b) => b.nb - a.nb);
}

/**
 * Croisements marque × catégorie publiables.
 * Le segment d'URL est le dernier segment de l'URL de taxonomie ; en cas de
 * collision entre deux catégories partageant ce segment pour une même marque,
 * seule la première est conservée (aucune collision dans les données actuelles).
 */
function croisements(marqueSlug: string) {
  const vus = new Set<string>();
  const sortie: Array<{ segment: string; nom: string; nb: number }> = [];
  for (const mc of categoriesDeLaMarque(marqueSlug)) {
    const noeud = getNoeud(mc.categorie);
    if (!noeud) continue;
    const segment = noeud.slug;
    if (vus.has(segment)) continue;
    const nb = produitsDuNoeud(noeud.url).filter((p) => p.marqueSlug === marqueSlug).length;
    if (nb === 0) continue;
    vus.add(segment);
    sortie.push({ segment, nom: noeud.nom, nb });
  }
  return sortie.sort((a, b) => b.nb - a.nb);
}

/**
 * Première phrase d'un paragraphe rédigé, sans ses marqueurs de lien, bornée
 * à la longueur qu'affiche un extrait Google.
 *
 * La description de la page marque vient du chapeau écrit à la main pour
 * cette maison. L'ancienne l'assemblait à partir d'un comptage (« 23 produits
 * Awane originaux en Algérie ») : un chiffre de catalogue, que le propriétaire
 * refuse dans tout texte visible, et Google affiche la description.
 */
function extrait(paragraphe: string, max = 160): string {
  const texte = paragraphe
    .replace(/\[\[([^|\]]+)\|[^\]]+\]\]/g, "$1")
    .replace(/\s+/g, " ")
    .trim();
  const phrase = texte.match(/^.+?[.!?](?=\s|$)/)?.[0] ?? texte;
  if (phrase.length <= max) return phrase;
  const coupe = phrase.slice(0, max - 1);
  return `${coupe.slice(0, coupe.lastIndexOf(" ")).replace(/[\s,;:]+$/, "")}…`;
}

/** Repli sans chiffre, pour une marque qui n'aurait pas encore de texte rédigé. */
function introSansTexte(nom: string, deps: Array<{ nom: string }>): string {
  const rayons = deps
    .slice(0, 3)
    .map((d) => d.nom.toLowerCase())
    .join(", ");
  return `Produits ${nom} originaux en Algérie${rayons ? ` : ${rayons}` : ""}. Livraison dans les 69 wilayas, paiement à la livraison.`;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { marque: slug } = await params;
  const marque = getMarque(slug);
  if (!marque) return {};

  const title = titreMarque(marque.nom);
  const chapeau = marqueRedigee(marque.slug)?.chapeau[0];
  const description = chapeau
    ? extrait(chapeau)
    : introSansTexte(marque.nom, departementsCouverts(produitsDeLaMarque(slug)));

  return {
    title: { absolute: title },
    description,
    alternates: { canonical: urlAbsolue(urlMarque(slug)) },
    openGraph: {
      title,
      description,
      url: urlAbsolue(urlMarque(slug)),
      type: "website",
    },
  };
}

export default async function PageMarque({ params }: Props) {
  const { marque: slug } = await params;
  const marque = getMarque(slug);
  if (!marque) notFound();

  const tous = produitsDeLaMarque(slug);
  if (tous.length === 0) notFound();

  const chemin = urlMarque(slug);
  const deps = departementsCouverts(tous);
  const liens = croisements(slug);
  const affiches = trierParPertinence(tous).slice(0, MAX_GRILLE);

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": `${urlAbsolue(chemin)}#page`,
        url: urlAbsolue(chemin),
        name: `${marque.nom} en Algérie`,
        description: `Produits ${marque.nom} originaux disponibles en Algérie.`,
        inLanguage: "fr",
        isPartOf: { "@type": "WebSite", name: SITE_NOM, url: SITE_URL },
        about: { "@id": `${urlAbsolue(chemin)}#marque` },
      },
      {
        "@type": "Brand",
        "@id": `${urlAbsolue(chemin)}#marque`,
        name: marque.nom,
        url: urlAbsolue(chemin),
      },
      {
        "@type": "ItemList",
        "@id": `${urlAbsolue(chemin)}#produits`,
        name: `Produits ${marque.nom}`,
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

  // Contenu écrit à la main pour cette maison, s'il existe. `contenuMarque`
  // est le repli : il compose ses phrases à partir des agrégats de la marque
  // (nombre de références, médiane des prix, nombre de revendeurs), c'est-à-
  // dire exactement les tournures que le propriétaire a rejetées.
  const redigeeMarque = marqueRedigee(marque.slug);
  const editorialMarque = redigeeMarque ? null : contenuMarque(marque.slug);

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
            { nom: marque.nom, url: chemin },
          ]}
        />

        <header className="mt-8 max-w-[760px]">
          <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-[#909090]">
            Marque
          </p>
          <h1 className="mt-2 text-[32px] font-[400] leading-[1.1] text-[#141414] md:text-[44px]">
            {marque.nom} en Algérie
          </h1>
          {/* Sous le H1, le premier paragraphe du chapeau rédigé pour cette
              maison. Il remplace une phrase de gabarit qui comptait les
              références (« 23 produits Awane sont référencés… avec 21
              références ») : le propriétaire refuse tout chiffre de catalogue
              dans un texte visible. */}
          <p className="mt-4 max-w-[62ch] text-[15px] leading-[1.6] text-[#4f4f4f]">
            {redigeeMarque?.chapeau[0]
              ? enrichir(redigeeMarque.chapeau[0])
              : introSansTexte(marque.nom, deps)}
          </p>
        </header>

        {deps.length > 0 && (
          <nav aria-label="Rayons de la marque" className="mt-8">
            <ul className="flex flex-wrap gap-2">
              {deps.map((d) => (
                <li key={d.slug}>
                  <Link
                    href={d.url}
                    className="block border border-black/15 px-3 py-1.5 text-[13px] text-[#141414] hover:bg-[#141414] hover:text-white"
                  >
                    {d.nom}
                    <span className="ml-2 font-mono text-[11px] text-[#909090]">{d.nb}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        )}

        {/* La contrefaçon est la première objection à l'achat de cosmétiques en ligne
            en Algérie : le bloc est fixe, factuel, et présent sur chaque page marque. */}
        <section
          aria-labelledby="authenticite"
          className="mt-12 border border-black/15 bg-white p-6 md:p-8"
        >
          <h2
            id="authenticite"
            className="text-[18px] font-[500] leading-[1.2] text-[#141414] md:text-[22px]"
          >
            Produits {marque.nom} originaux : comment nous le vérifions
          </h2>
          <div className="mt-4 grid gap-4 text-[14px] leading-[1.65] text-[#4f4f4f] md:grid-cols-2 md:gap-8">
            <p>
              Les références {marque.nom} publiées ici sont des produits originaux. Elles
              proviennent de distributeurs, pharmacies et parapharmacies établis en Algérie,
              et chaque fiche reprend le nom exact, la contenance et le visuel fournis par
              la source. Une référence dont l&apos;origine ne peut pas être établie
              n&apos;est pas publiée : c&apos;est la raison pour laquelle une partie du
              catalogue {marque.nom} reste hors ligne.
            </p>
            <p>
              À la réception, deux contrôles suffisent à écarter une imitation : le numéro
              de lot et la date de péremption doivent être imprimés sur le flacon et sur
              l&apos;étui, et correspondre entre les deux ; l&apos;impression du packaging
              doit être nette, sans faute d&apos;orthographe ni couleur délavée. Si un
              produit reçu ne correspond pas à sa fiche, il est repris.
            </p>
          </div>
        </section>

        {liens.length > 0 && (
          <section aria-labelledby="categories" className="mt-14">
            <h2
              id="categories"
              className="border-b border-black/10 pb-2 font-mono text-[13px] uppercase tracking-[0.12em] text-[#141414]"
            >
              {marque.nom} par catégorie
            </h2>
            <ul className="mt-5 grid grid-cols-1 gap-x-8 gap-y-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {liens.map((c) => (
                <li key={c.segment}>
                  <Link
                    href={`${chemin}${c.segment}/`}
                    className="flex items-baseline justify-between gap-3 border-b border-black/5 py-1.5 text-[14px] text-[#141414] hover:underline"
                  >
                    <span>
                      {c.nom} {marque.nom}
                    </span>
                    <span className="font-mono text-[11px] text-[#909090]">{c.nb}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        )}

        <section aria-labelledby="produits" className="mt-14">
          <div className="flex flex-wrap items-baseline justify-between gap-3 border-b border-black/10 pb-2">
            <h2
              id="produits"
              className="font-mono text-[13px] uppercase tracking-[0.12em] text-[#141414]"
            >
              Produits {marque.nom}
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

          {tous.length > affiches.length && liens.length > 0 && (
            <p className="mt-10 text-[14px] leading-[1.6] text-[#4f4f4f]">
              Les autres références {marque.nom} sont accessibles depuis les catégories
              listées plus haut.
            </p>
          )}
        </section>

        {redigeeMarque ? (
          <div className="mt-16 space-y-12 border-t border-[#e5e5e5] pt-12">
            {/* Le premier paragraphe du chapeau est déjà sous le H1. */}
            <TexteEditorial paragraphes={redigeeMarque.chapeau.slice(1)} />
            {redigeeMarque.sections.map((sec) => (
              <TexteEditorial key={sec.titre} titre={sec.titre} paragraphes={sec.paragraphes} />
            ))}
            <BlocFaq faq={redigeeMarque.faq} />
          </div>
        ) : editorialMarque ? (
          <div className="mt-16 space-y-12 border-t border-[#e5e5e5] pt-12">
            <TexteEditorial paragraphes={editorialMarque.intro} />
            {editorialMarque.gammes && (
              <TexteEditorial
                titre={editorialMarque.gammes.titre}
                paragraphes={editorialMarque.gammes.paragraphes}
              />
            )}
            <TexteEditorial
              titre={editorialMarque.authenticite.titre}
              paragraphes={editorialMarque.authenticite.paragraphes}
            />
            <BlocFaq faq={editorialMarque.faq} />
          </div>
        ) : null}
      </main>
    </>
  );
}

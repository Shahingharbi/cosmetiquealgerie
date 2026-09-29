import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import CarteProduit from "@/components/CarteProduit";
import FilAriane from "@/components/FilAriane";
import TexteEditorial from "@/components/TexteEditorial";
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

/** Nombre de produits affichÃ©s dans la grille. Le reste est atteint par les croisements. */
const MAX_GRILLE = 48;

interface Props {
  params: Promise<{ marque: string }>;
}

/**
 * Une marque sans aucun produit publiable ne gÃ©nÃ¨re pas de page : 7 marques sur
 * 431 n'ont que des rÃ©fÃ©rences sans visuel ou sans prix, une page vide serait
 * du thin content pur.
 */
export function generateStaticParams() {
  return marques
    .filter((m) => produitsDeLaMarque(m.slug).length > 0)
    .map((m) => ({ marque: m.slug }));
}

/**
 * Title <= 60 caractÃ¨res. On retire d'abord le suffixe du site, puis les
 * qualifiants, plutÃ´t que de couper le nom de la marque au milieu.
 */
function titreMarque(nom: string): string {
  const base = `${nom} AlgÃ©rie - Prix et livraison`;
  const complet = `${base} | ${SITE_NOM}`;
  if (complet.length <= 60) return complet;
  if (base.length <= 60) return base;
  const court = `${nom} AlgÃ©rie - Prix`;
  if (court.length <= 60) return court;
  return `${nom} AlgÃ©rie`.slice(0, 60);
}

/** DÃ©partements rÃ©ellement couverts par les produits publiÃ©s, du plus fourni au moins fourni. */
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
 * Croisements marque Ã— catÃ©gorie publiables.
 * Le segment d'URL est le dernier segment de l'URL de taxonomie ; en cas de
 * collision entre deux catÃ©gories partageant ce segment pour une mÃªme marque,
 * seule la premiÃ¨re est conservÃ©e (aucune collision dans les donnÃ©es actuelles).
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

/** Intro rÃ©digÃ©e Ã  partir des seules donnÃ©es du catalogue : volume et rayons rÃ©els. */
function phraseIntro(nom: string, nb: number, deps: Array<{ nom: string }>): string {
  const rayons = deps.map((d) => d.nom.toLowerCase()).join(", ");
  const volume =
    nb >= 100
      ? `${nb} rÃ©fÃ©rences ${nom} sont disponibles`
      : nb > 1
        ? `${nb} produits ${nom} sont rÃ©fÃ©rencÃ©s`
        : `Un produit ${nom} est rÃ©fÃ©rencÃ©`;
  const couverture =
    deps.length === 0
      ? ""
      : deps.length === 1
        ? `, dans le rayon ${rayons}`
        : `, dans ${deps.length} rayons : ${rayons}`;
  return `${volume} en AlgÃ©rie sur ${SITE_NOM}${couverture}. Les prix sont indiquÃ©s en dinars et la livraison couvre les 69 wilayas.`;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { marque: slug } = await params;
  const marque = getMarque(slug);
  if (!marque) return {};

  const liste = produitsDeLaMarque(slug);
  const deps = departementsCouverts(liste);
  const title = titreMarque(marque.nom);
  const rayons = deps
    .slice(0, 3)
    .map((d) => d.nom.toLowerCase())
    .join(", ");
  const description = `${liste.length} produits ${marque.nom} originaux en AlgÃ©rie${
    rayons ? ` : ${rayons}` : ""
  }. Prix en dinars, livraison dans les 69 wilayas, paiement Ã  la rÃ©ception.`;

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
        name: `${marque.nom} en AlgÃ©rie`,
        description: `Produits ${marque.nom} originaux disponibles en AlgÃ©rie.`,
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
            {marque.nom} en AlgÃ©rie
          </h1>
          <p className="mt-4 max-w-[62ch] text-[15px] leading-[1.6] text-[#4f4f4f]">
            {phraseIntro(marque.nom, tous.length, deps)}
            {liens.length > 0 && (
              <>
                {" "}
                La marque est la plus prÃ©sente en {liens[0].nom.toLowerCase()}, avec{" "}
                {liens[0].nb} rÃ©fÃ©rences.
              </>
            )}
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

        {/* La contrefaÃ§on est la premiÃ¨re objection Ã  l'achat de cosmÃ©tiques en ligne
            en AlgÃ©rie : le bloc est fixe, factuel, et prÃ©sent sur chaque page marque. */}
        <section
          aria-labelledby="authenticite"
          className="mt-12 border border-black/15 bg-white p-6 md:p-8"
        >
          <h2
            id="authenticite"
            className="text-[18px] font-[500] leading-[1.2] text-[#141414] md:text-[22px]"
          >
            Produits {marque.nom} originaux : comment nous le vÃ©rifions
          </h2>
          <div className="mt-4 grid gap-4 text-[14px] leading-[1.65] text-[#4f4f4f] md:grid-cols-2 md:gap-8">
            <p>
              Les rÃ©fÃ©rences {marque.nom} publiÃ©es ici sont des produits originaux. Elles
              proviennent de distributeurs, pharmacies et parapharmacies Ã©tablis en AlgÃ©rie,
              et chaque fiche reprend le nom exact, la contenance et le visuel fournis par
              la source. Une rÃ©fÃ©rence dont l&apos;origine ne peut pas Ãªtre Ã©tablie
              n&apos;est pas publiÃ©e : c&apos;est la raison pour laquelle une partie du
              catalogue {marque.nom} reste hors ligne.
            </p>
            <p>
              Ã€ la rÃ©ception, deux contrÃ´les suffisent Ã  Ã©carter une imitation : le numÃ©ro
              de lot et la date de pÃ©remption doivent Ãªtre imprimÃ©s sur le flacon et sur
              l&apos;Ã©tui, et correspondre entre les deux ; l&apos;impression du packaging
              doit Ãªtre nette, sans faute d&apos;orthographe ni couleur dÃ©lavÃ©e. Si un
              produit reÃ§u ne correspond pas Ã  sa fiche, il est repris.
            </p>
          </div>
        </section>

        {liens.length > 0 && (
          <section aria-labelledby="categories" className="mt-14">
            <h2
              id="categories"
              className="border-b border-black/10 pb-2 font-mono text-[13px] uppercase tracking-[0.12em] text-[#141414]"
            >
              {marque.nom} par catÃ©gorie
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
              {affiches.length} affichÃ©s sur {tous.length}
            </p>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-3 lg:grid-cols-4">
            {affiches.map((p, i) => (
              <CarteProduit key={p.slug} produit={p} prioritaire={i < 4} />
            ))}
          </div>

          {tous.length > affiches.length && liens.length > 0 && (
            <p className="mt-10 text-[14px] leading-[1.6] text-[#4f4f4f]">
              Les {tous.length - affiches.length} autres rÃ©fÃ©rences {marque.nom} sont
              accessibles depuis les catÃ©gories listÃ©es plus haut.
            </p>
          )}
        </section>

        {redigeeMarque ? (
          <div className="mt-16 space-y-12 border-t border-[#e5e5e5] pt-12">
            <TexteEditorial paragraphes={redigeeMarque.chapeau} />
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

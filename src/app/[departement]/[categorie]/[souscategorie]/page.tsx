import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import FilAriane from "@/components/FilAriane";
import EnteteCategorie, {
  descriptionNoeud,
  jsonLdCollection,
} from "@/components/EnteteCategorie";
import GrilleProduits from "@/components/GrilleProduits";
import LiensPagination from "@/components/LiensPagination";
import TexteEditorial from "@/components/TexteEditorial";
import BlocFaq from "@/components/BlocFaq";
import { nbPages, PAR_PAGE } from "@/lib/pagination";
import { categorieRedigee } from "@/lib/redige";
import {
  filArianeNoeud,
  getCategorie,
  getNoeud,
  getSousCategorie,
  produitsDuNoeud,
  taxonomie,
  trierParPertinence,
  urlAbsolue,
} from "@/lib/catalogue";

/** Première page du listing : la suite vit sous /p/{n}/. */
const MAX_AFFICHES = PAR_PAGE;

/** L'arbre est figé : tout segment hors taxonomie doit répondre 404, jamais être rendu. */
export const dynamicParams = false;

interface Props {
  params: Promise<{ departement: string; categorie: string; souscategorie: string }>;
}

export function generateStaticParams() {
  return taxonomie.flatMap((dep) =>
    dep.categories.flatMap((cat) =>
      cat.sousCategories.map((sous) => ({
        departement: dep.slug,
        categorie: cat.slug,
        souscategorie: sous.slug,
      })),
    ),
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { departement, categorie, souscategorie } = await params;
  const noeud = getNoeud(`/${departement}/${categorie}/${souscategorie}/`);
  if (!noeud) return {};

  return {
    title: { absolute: noeud.title },
    description: descriptionNoeud(noeud, produitsDuNoeud(noeud.url)),
    alternates: { canonical: urlAbsolue(noeud.url) },
    openGraph: {
      type: "website",
      title: noeud.h1,
      url: urlAbsolue(noeud.url),
    },
  };
}

export default async function PageSousCategorie({ params }: Props) {
  const { departement, categorie, souscategorie } = await params;
  const sous = getSousCategorie(departement, categorie, souscategorie);
  const cat = getCategorie(departement, categorie);
  const noeud = getNoeud(`/${departement}/${categorie}/${souscategorie}/`);
  if (!sous || !cat || !noeud) notFound();

  const tous = trierParPertinence(produitsDuNoeud(noeud.url));
  const affiches = tous.slice(0, MAX_AFFICHES);
  const description = descriptionNoeud(noeud, tous);

  // Dernier niveau de l'arbre : sans enfant à lier, on relie les sœurs pour que
  // la page ne soit pas un cul-de-sac dans le maillage interne.
  const soeurs = cat.sousCategories
    .filter((s) => s.slug !== sous.slug)
    .map((s) => ({ nom: s.nom, url: s.url, nb: produitsDuNoeud(s.url).length }));

  // Contenu écrit à la main pour ce rayon. Les 134 nœuds de l'arbre en ont un,
  // et l'arbre est figé : il n'y a pas de repli. Le générateur statistique qui
  // servait de repli a été supprimé — il composait ses phrases à partir des
  // agrégats du nœud (nombre de références, marques dominantes, fourchette de
  // prix), c'est-à-dire exactement le rendu que le propriétaire a rejeté. Un
  // nœud sans contenu rédigé affiche donc sa grille sans texte, ce qui est
  // visible immédiatement, plutôt que du remplissage à chiffres.
  const redige = categorieRedigee(noeud.url);

  return (
    <main className="mx-auto w-full max-w-[1400px] px-4 pb-24 pt-6 sm:px-6 lg:px-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLdCollection(noeud, description, affiches, tous.length),
        }}
      />

      <FilAriane maillons={filArianeNoeud(noeud.url)} />

      <div className="mt-6">
        <EnteteCategorie
          noeud={noeud}
          produits={tous}
          enfants={[]}
          libelleEnfant="sous-catégorie"
        />
      </div>

      <GrilleProduits produits={affiches} total={tous.length} />

      <LiensPagination urlNoeud={noeud.url} courante={1} total={nbPages(tous.length)} />

      {redige && (
        <div className="mt-16 space-y-12 border-t border-[#e5e5e5] pt-12">
          {redige.sections.map((s) => (
            <TexteEditorial key={s.titre} titre={s.titre} paragraphes={s.paragraphes} />
          ))}
          <BlocFaq faq={redige.faq} />
        </div>
      )}

      {soeurs.length > 0 && (
        <nav aria-label={`Autres rayons ${cat.nom}`} className="mt-14">
          <h2 className="font-mono text-[11px] uppercase tracking-[0.08em] text-[#909090]">
            Dans {cat.nom}
          </h2>
          <ul className="mt-3 flex flex-wrap gap-2">
            {soeurs.map((soeur) => (
              <li key={soeur.url}>
                <Link
                  href={soeur.url}
                  className="inline-flex items-baseline gap-2 border border-[#e5e5e5] bg-white px-4 py-2.5 text-[14px] text-[#141414] transition-colors hover:border-[#141414]"
                >
                  {soeur.nom}
                  <span className="font-mono text-[11px] text-[#909090]">
                    {soeur.nb.toLocaleString("fr-DZ")}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </main>
  );
}

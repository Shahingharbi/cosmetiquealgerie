import type { Metadata } from "next";
import { notFound } from "next/navigation";
import FilAriane from "@/components/FilAriane";
import EnteteCategorie, {
  descriptionNoeud,
  jsonLdCollection,
  type LienEnfant,
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
  params: Promise<{ departement: string; categorie: string }>;
}

export function generateStaticParams() {
  return taxonomie.flatMap((dep) =>
    dep.categories.map((cat) => ({ departement: dep.slug, categorie: cat.slug })),
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { departement, categorie } = await params;
  const noeud = getNoeud(`/${departement}/${categorie}/`);
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

export default async function PageCategorie({ params }: Props) {
  const { departement, categorie } = await params;
  const cat = getCategorie(departement, categorie);
  const noeud = getNoeud(`/${departement}/${categorie}/`);
  if (!cat || !noeud) notFound();

  const tous = trierParPertinence(produitsDuNoeud(noeud.url));
  const affiches = tous.slice(0, MAX_AFFICHES);

  // Beaucoup de catégories n'ont aucune sous-catégorie : la section de liens
  // disparaît alors, et l'introduction bascule sur une tournure sans enfants.
  const enfants: LienEnfant[] = cat.sousCategories.map((sous) => ({
    nom: sous.nom,
    url: sous.url,
    nb: produitsDuNoeud(sous.url).length,
  }));

  const description = descriptionNoeud(noeud, tous);

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
          enfants={enfants}
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
    </main>
  );
}

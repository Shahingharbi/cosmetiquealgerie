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
  getDepartement,
  getNoeud,
  produitsDuNoeud,
  taxonomie,
  trierParPertinence,
  urlAbsolue,
} from "@/lib/catalogue";

/** La pagination viendra plus tard ; on borne l'affichage pour tenir le poids de page. */
/** Première page du listing : la suite vit sous /p/{n}/. */
const MAX_AFFICHES = PAR_PAGE;

/** L'arbre est figé : tout segment hors taxonomie doit répondre 404, jamais être rendu. */
export const dynamicParams = false;

interface Props {
  params: Promise<{ departement: string }>;
}

/**
 * Uniquement les 9 slugs de la taxonomie : « produit » et « marques » sont des
 * segments statiques et ne doivent jamais être générés ici.
 */
export function generateStaticParams() {
  return taxonomie.map((dep) => ({ departement: dep.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { departement } = await params;
  const noeud = getNoeud(`/${departement}/`);
  if (!noeud) return {};

  return {
    // `absolute` : le title du nœud porte déjà le nom du site, le template du
    // layout le dupliquerait.
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

export default async function PageDepartement({ params }: Props) {
  const { departement } = await params;
  const dep = getDepartement(departement);
  const noeud = getNoeud(`/${departement}/`);
  if (!dep || !noeud) notFound();

  const tous = trierParPertinence(produitsDuNoeud(noeud.url));
  const affiches = tous.slice(0, MAX_AFFICHES);

  const enfants: LienEnfant[] = dep.categories.map((cat) => ({
    nom: cat.nom,
    url: cat.url,
    nb: produitsDuNoeud(cat.url).length,
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
          libelleEnfant="catégorie"
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

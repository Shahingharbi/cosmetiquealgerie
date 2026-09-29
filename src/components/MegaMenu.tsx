import Link from "next/link";
import {
  getNoeud,
  marques,
  produitsPubliables,
  taxonomie,
  urlMarque,
} from "@/lib/catalogue";

/* ================================================================== */
/* Modèle du menu                                                      */
/* ================================================================== */

export interface NavLien {
  libelle: string;
  href: string;
}

export interface NavColonne {
  titre: string;
  liens: NavLien[];
  /** Colonne présente dans le HTML mais non affichée < 1024px (colonne marques). */
  masqueMobile?: boolean;
}

export interface NavDepartement {
  slug: string;
  nom: string;
  href: string;
  colonnes: NavColonne[];
}

/** Une entrée du menu. `libelle` n'est fourni que quand l'ancre diffère du nom du nœud. */
interface Entree {
  url: string;
  libelle?: string;
}

interface ColonneSource {
  titre: string;
  entrees: Entree[];
}

/**
 * Ordre des départements dans la barre : potentiel de chiffre d'affaires
 * décroissant, pas ordre alphabétique.
 */
const ORDRE_DEPARTEMENTS = [
  "soin-visage",
  "maquillage",
  "soin-cheveux",
  "soin-corps",
  "hygiene-bain",
  "parfum",
  "creme-solaire",
  "soin-homme",
  "bebe-maman",
] as const;

/**
 * Contenu figé des 9 panneaux.
 *
 * Étanchéité du cocon : un panneau ne contient QUE des URL de son propre
 * département. Aucun hub transverse, aucun guide, aucun lien vers un autre
 * silo — la seule passerelle entre départements est la barre principale.
 * Le menu ne descend au niveau 3 que sur une sélection à fort volume : ce
 * n'est pas un plan de site.
 */
const PANNEAUX: Record<string, ColonneSource[]> = {
  "soin-visage": [
    {
      titre: "Catégories",
      entrees: [
        { url: "/soin-visage/nettoyant-visage/" },
        { url: "/soin-visage/creme-hydratante-visage/" },
        { url: "/soin-visage/serum-visage/" },
        { url: "/soin-visage/soin-anti-age-visage/" },
        { url: "/soin-visage/contour-des-yeux/" },
        { url: "/soin-visage/masque-visage/" },
        { url: "/soin-visage/gommage-visage/" },
        { url: "/soin-visage/peau-a-problemes/" },
        { url: "/soin-visage/soin-visage-coreen/" },
        { url: "/soin-visage/soin-levres/" },
      ],
    },
    {
      titre: "Par besoin et type de peau",
      entrees: [
        { url: "/soin-visage/peau-a-problemes/soin-anti-acne-visage/", libelle: "Peau grasse et acné" },
        { url: "/soin-visage/peau-a-problemes/soin-peau-sensible-rougeurs/", libelle: "Peau sensible et rougeurs" },
        { url: "/soin-visage/creme-hydratante-visage/creme-peau-seche/", libelle: "Peau sèche" },
        { url: "/soin-visage/peau-a-problemes/soin-anti-taches-visage/", libelle: "Taches et teint terne" },
        { url: "/soin-visage/serum-visage/serum-anti-age/", libelle: "Rides et fermeté" },
        { url: "/soin-visage/serum-visage/serum-vitamine-c/", libelle: "Éclat — vitamine C" },
        { url: "/soin-visage/serum-visage/serum-acide-hyaluronique/", libelle: "Hydratation — acide hyaluronique" },
        { url: "/soin-visage/serum-visage/serum-retinol/", libelle: "Renouvellement — rétinol" },
      ],
    },
  ],

  maquillage: [
    {
      titre: "Catégories",
      entrees: [
        { url: "/maquillage/maquillage-teint/" },
        { url: "/maquillage/maquillage-yeux/" },
        { url: "/maquillage/maquillage-levres/" },
        { url: "/maquillage/vernis-a-ongles/" },
        { url: "/maquillage/palette-maquillage/" },
        { url: "/maquillage/pinceau-maquillage/" },
      ],
    },
    {
      titre: "Les incontournables",
      entrees: [
        { url: "/maquillage/maquillage-levres/rouge-a-levres/" },
        { url: "/maquillage/maquillage-teint/anti-cernes/" },
        { url: "/maquillage/maquillage-teint/fond-de-teint/" },
        { url: "/maquillage/maquillage-yeux/mascara/" },
        { url: "/maquillage/maquillage-levres/gloss-levres/" },
        { url: "/maquillage/maquillage-teint/poudre-visage/" },
        { url: "/maquillage/maquillage-yeux/eyeliner-khol/" },
        { url: "/maquillage/maquillage-teint/blush/" },
      ],
    },
  ],

  "soin-cheveux": [
    {
      titre: "Catégories",
      entrees: [
        { url: "/soin-cheveux/shampoing/" },
        { url: "/soin-cheveux/apres-shampoing/" },
        { url: "/soin-cheveux/soin-anti-chute-cheveux/" },
        { url: "/soin-cheveux/huile-cheveux/" },
        { url: "/soin-cheveux/serum-cheveux/" },
        { url: "/soin-cheveux/creme-cheveux/" },
        { url: "/soin-cheveux/coloration-cheveux/" },
        { url: "/soin-cheveux/gel-coiffant-cheveux/" },
        { url: "/soin-cheveux/appareil-coiffant/" },
      ],
    },
    {
      titre: "Par besoin",
      entrees: [
        { url: "/soin-cheveux/shampoing/shampoing-antipelliculaire/", libelle: "Pellicules" },
        { url: "/soin-cheveux/shampoing/shampoing-cheveux-secs/", libelle: "Cheveux secs" },
        { url: "/soin-cheveux/soin-anti-chute-cheveux/shampoing-anti-chute/", libelle: "Chute de cheveux" },
        { url: "/soin-cheveux/shampoing/shampoing-sans-sulfate/", libelle: "Sans sulfate" },
        { url: "/soin-cheveux/shampoing/shampoing-keratine/", libelle: "Kératine et lissage" },
        { url: "/soin-cheveux/shampoing/shampoing-sec/" },
        { url: "/soin-cheveux/apres-shampoing/masque-cheveux/" },
      ],
    },
  ],

  "soin-corps": [
    {
      titre: "Soin du corps",
      entrees: [
        { url: "/soin-corps/lait-corps/" },
        { url: "/soin-corps/creme-hydratante-corps/" },
        { url: "/soin-corps/gommage-corps/" },
        { url: "/soin-corps/creme-mains/" },
        { url: "/soin-corps/creme-pieds/" },
        { url: "/soin-corps/soin-minceur-vergetures/" },
      ],
    },
    {
      titre: "Déodorant et huiles",
      entrees: [
        { url: "/soin-corps/deodorant/" },
        { url: "/soin-corps/deodorant/anti-transpirant/" },
        { url: "/soin-corps/deodorant/deodorant-roll-on/" },
        { url: "/soin-corps/huile-corps/" },
        { url: "/soin-corps/huile-vegetale/" },
        { url: "/soin-corps/huile-essentielle/" },
      ],
    },
  ],

  "hygiene-bain": [
    {
      titre: "Douche et soin",
      entrees: [
        { url: "/hygiene-bain/gel-douche/" },
        { url: "/hygiene-bain/savon/" },
        { url: "/hygiene-bain/epilation/" },
        { url: "/hygiene-bain/coton-lingette/" },
      ],
    },
    {
      titre: "Bucco-dentaire et intime",
      entrees: [
        { url: "/hygiene-bain/hygiene-bucco-dentaire/" },
        { url: "/hygiene-bain/hygiene-bucco-dentaire/dentifrice/" },
        { url: "/hygiene-bain/hygiene-bucco-dentaire/brosse-a-dents/" },
        { url: "/hygiene-bain/hygiene-bucco-dentaire/bain-de-bouche/" },
        { url: "/hygiene-bain/hygiene-intime/" },
        { url: "/hygiene-bain/protection-hygienique/" },
      ],
    },
  ],

  parfum: [
    {
      titre: "Parfum femme",
      entrees: [
        { url: "/parfum/parfum-femme/" },
        { url: "/parfum/parfum-femme/eau-de-parfum-femme/" },
        { url: "/parfum/parfum-femme/eau-de-toilette-femme/" },
      ],
    },
    {
      titre: "Homme et autres",
      entrees: [
        { url: "/parfum/parfum-homme/" },
        { url: "/parfum/eau-de-cologne/" },
        { url: "/parfum/brume-parfumee/" },
        { url: "/parfum/coffret-parfum/" },
      ],
    },
  ],

  "creme-solaire": [
    {
      titre: "Par zone",
      entrees: [
        { url: "/creme-solaire/creme-solaire-visage/" },
        { url: "/creme-solaire/creme-solaire-corps/" },
        { url: "/creme-solaire/creme-solaire-enfant/" },
        { url: "/creme-solaire/apres-soleil/" },
        { url: "/creme-solaire/autobronzant/" },
      ],
    },
    {
      titre: "Par indice et type de peau",
      entrees: [
        { url: "/creme-solaire/creme-solaire-spf-50/" },
        { url: "/creme-solaire/creme-solaire-spf-30/" },
        { url: "/creme-solaire/creme-solaire-visage/ecran-solaire-peau-sensible/" },
        { url: "/creme-solaire/creme-solaire-visage/ecran-solaire-peau-grasse/" },
        { url: "/creme-solaire/creme-solaire-corps/spray-solaire/" },
      ],
    },
  ],

  // Deux colonnes seulement : shampoing homme et parfum homme restent dans
  // leurs silos respectifs, les lier ici créerait une cannibalisation.
  "soin-homme": [
    {
      titre: "Catégories",
      entrees: [
        { url: "/soin-homme/deodorant-homme/" },
        { url: "/soin-homme/shampoing-homme/" },
        { url: "/soin-homme/soin-visage-homme/" },
        { url: "/soin-homme/gel-douche-homme/" },
        { url: "/soin-homme/rasage-homme/" },
      ],
    },
  ],

  // La crème solaire enfant appartient au silo solaire : le rapprochement se
  // fait en lien contextuel dans le corps de /bebe-maman/, jamais dans le nav.
  "bebe-maman": [
    {
      titre: "Catégories",
      entrees: [
        { url: "/bebe-maman/soin-toilette-bebe/" },
        { url: "/bebe-maman/change-bebe/" },
        { url: "/bebe-maman/soin-maman-grossesse/" },
        { url: "/bebe-maman/accessoire-bebe/" },
      ],
    },
  ],
};

/* ================================================================== */
/* Colonne marques, calculée depuis le catalogue                       */
/* ================================================================== */

/**
 * Libellés distributeurs et bruit de scraping : ce sont des chaînes présentes
 * dans les noms de produits, pas des marques. Les exposer dans le menu
 * enverrait du jus sitewide vers des pages sans identité commerciale.
 */
const MARQUES_EXCLUES = new Set([
  "flux",
  "enzo",
  "heva",
  "sol",
  "soleil",
  "charlotte",
  "oral",
  "elseve",
  "franck",
  "andrea",
  "valeria",
  "viola",
  "piove",
  "myla",
  "durex",
]);

/** Une marque trop petite ne mérite pas 21 000 liens entrants. */
const SEUIL_CATALOGUE = 25;
const SEUIL_DEPARTEMENT = 5;
const MARQUES_PAR_PANNEAU = 6;

/** Ordre souhaité par département ; complété depuis les données si besoin. */
const MARQUES_PREFEREES: Record<string, string[]> = {
  "soin-visage": ["la-roche-posay", "bioderma", "eucerin", "uriage", "cerave", "avene"],
  maquillage: ["maybelline", "nyx", "loreal-paris", "sheglam", "bourjois", "kiko-milano"],
  "soin-cheveux": ["loreal-paris", "garnier", "kerastase", "vichy", "luxeol", "le-petit-marseillais"],
  "soin-corps": ["nivea", "mixa", "nuxe", "yves-rocher", "dove", "le-petit-marseillais"],
  "hygiene-bain": ["dove", "oral-b", "sensodyne", "signal", "listerine", "gillette"],
  parfum: ["victorias-secret", "bath-et-body-works", "yves-rocher", "udv", "nuxe", "diane-castel"],
  "creme-solaire": ["la-roche-posay", "bioderma", "avene", "vichy", "garnier", "svr"],
  "soin-homme": ["nivea", "loreal-paris", "gillette", "rexona", "axe", "clear"],
  "bebe-maman": ["mustela", "klorane", "uriage", "mixa", "biolane", "bepanthen"],
};

const nomDeLaMarque = new Map(marques.map((m) => [m.slug, m.nom]));

/** Comptages calculés une fois par process, sur les seuls produits publiables. */
const { nbParMarque, nbParDepartementMarque } = (() => {
  const parMarque = new Map<string, number>();
  const parDepartementMarque = new Map<string, number>();
  for (const p of produitsPubliables) {
    if (!p.marqueSlug) continue;
    parMarque.set(p.marqueSlug, (parMarque.get(p.marqueSlug) ?? 0) + 1);
    const cle = `${p.departement}|${p.marqueSlug}`;
    parDepartementMarque.set(cle, (parDepartementMarque.get(cle) ?? 0) + 1);
  }
  return { nbParMarque: parMarque, nbParDepartementMarque: parDepartementMarque };
})();

function marqueEligible(slug: string, depSlug: string): boolean {
  if (MARQUES_EXCLUES.has(slug)) return false;
  if (!nomDeLaMarque.has(slug)) return false;
  if ((nbParMarque.get(slug) ?? 0) < SEUIL_CATALOGUE) return false;
  return (nbParDepartementMarque.get(`${depSlug}|${slug}`) ?? 0) >= SEUIL_DEPARTEMENT;
}

/**
 * Marques majeures d'un département.
 * On part de la liste éditoriale, on écarte tout ce qui n'existe pas ou ne
 * pèse rien dans ce département, puis on complète avec les marques les mieux
 * représentées. Déterministe : même entrée, même sortie à chaque build.
 */
function marquesDuDepartement(depSlug: string): NavLien[] {
  const retenues: string[] = [];

  for (const slug of MARQUES_PREFEREES[depSlug] ?? []) {
    if (retenues.length >= MARQUES_PAR_PANNEAU) break;
    if (marqueEligible(slug, depSlug) && !retenues.includes(slug)) retenues.push(slug);
  }

  if (retenues.length < MARQUES_PAR_PANNEAU) {
    const candidates = [...nbParDepartementMarque.entries()]
      .filter(([cle]) => cle.startsWith(`${depSlug}|`))
      .map(([cle, n]) => [cle.slice(depSlug.length + 1), n] as const)
      .filter(([slug]) => !retenues.includes(slug) && marqueEligible(slug, depSlug))
      .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0], "fr"));

    for (const [slug] of candidates) {
      if (retenues.length >= MARQUES_PAR_PANNEAU) break;
      retenues.push(slug);
    }
  }

  return retenues.map((slug) => ({
    libelle: nomDeLaMarque.get(slug) as string,
    href: urlMarque(slug),
  }));
}

/* ================================================================== */
/* Construction du modèle                                              */
/* ================================================================== */

function construireNav(): NavDepartement[] {
  return ORDRE_DEPARTEMENTS.map((depSlug) => {
    const departement = taxonomie.find((d) => d.slug === depSlug);
    if (!departement) {
      throw new Error(`MegaMenu : département inconnu dans la taxonomie — ${depSlug}`);
    }

    const vues = new Set<string>();
    const colonnes: NavColonne[] = (PANNEAUX[depSlug] ?? []).map((source) => ({
      titre: source.titre,
      liens: source.entrees.map((entree) => {
        const noeud = getNoeud(entree.url);
        // Un lien de menu vers une URL absente de l'arbre est un 404 sitewide :
        // on casse le build plutôt que de le livrer.
        if (!noeud) {
          throw new Error(`MegaMenu : URL hors taxonomie — ${entree.url}`);
        }
        if (noeud.departementSlug !== depSlug) {
          throw new Error(
            `MegaMenu : fuite de silo — ${entree.url} dans le panneau ${depSlug}`,
          );
        }
        if (vues.has(entree.url)) {
          throw new Error(`MegaMenu : URL en double dans le panneau ${depSlug} — ${entree.url}`);
        }
        vues.add(entree.url);
        return { libelle: entree.libelle ?? noeud.nom, href: noeud.url };
      }),
    }));

    colonnes.push({
      titre: "Marques",
      liens: marquesDuDepartement(depSlug),
      masqueMobile: true,
    });

    return {
      slug: departement.slug,
      nom: departement.nom,
      href: departement.url,
      colonnes,
    };
  });
}

/** Modèle du menu principal. Invariant sur toutes les pages du site. */
export const NAV: NavDepartement[] = construireNav();

/* ================================================================== */
/* Rendu                                                               */
/* ================================================================== */

function ChevronBas({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="14"
      height="14"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      <polyline points="6 9 12 15 18 9" />
    </svg>
  );
}

function ColonneNav({ colonne }: { colonne: NavColonne }) {
  if (colonne.liens.length === 0) return null;

  return (
    <div className={colonne.masqueMobile ? "hidden lg:block" : ""}>
      <p className="font-mono text-[11px] uppercase tracking-[0.08em] text-[#141414]/60">
        {colonne.titre}
      </p>
      <ul aria-label={colonne.titre} className="mt-3 lg:mt-4">
        {colonne.liens.map((lien) => (
          <li key={lien.href}>
            <Link
              href={lien.href}
              prefetch={false}
              className="block py-3 text-[14px] leading-[1.6] text-[#141414] hover:underline lg:py-1.5"
            >
              {lien.libelle}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function PanneauDepartement({ departement }: { departement: NavDepartement }) {
  const grille =
    departement.colonnes.length >= 3
      ? "lg:grid-cols-3"
      : "lg:grid-cols-2";

  return (
    <div className="border-t border-[#141414] bg-white">
      <div
        className={`mx-auto grid max-w-[1280px] gap-8 px-4 pb-6 pt-4 lg:gap-12 lg:px-8 lg:py-10 ${grille}`}
      >
        {departement.colonnes.map((colonne) => (
          <ColonneNav key={colonne.titre} colonne={colonne} />
        ))}
      </div>
    </div>
  );
}

/**
 * Mega menu — Server Component, zéro JavaScript.
 *
 * Un seul balisage sert les deux affichages : barre horizontale à partir de
 * 1024 px, accordéon dans le tiroir en dessous. Les panneaux sont TOUJOURS
 * rendus dans le HTML serveur ; seul leur affichage est piloté en CSS
 * (`group-hover` au bureau, case à cocher `peer` sur mobile). Aucun rendu
 * conditionnel : c'est ce qui garantit que les ~150 liens de navigation sont
 * crawlables et que le menu fonctionne JavaScript désactivé.
 */
export function MegaMenu() {
  return (
    <nav aria-label="Navigation principale" className="lg:relative">
      <ul className="mx-auto lg:flex lg:max-w-[1280px] lg:items-stretch lg:justify-between lg:px-8">
        {NAV.map((departement) => (
          <li
            key={departement.slug}
            className="group relative flex flex-wrap items-stretch border-b border-[#141414]/10 lg:static lg:block lg:border-0"
          >
            {/* État d'ouverture de l'accordéon mobile : case à cocher, aucun JS. */}
            <input
              type="checkbox"
              id={`ca-nav-${departement.slug}`}
              className="peer sr-only lg:hidden"
              aria-label={`Afficher les catégories ${departement.nom}`}
            />

            {/* Le libellé du département est un vrai lien, jamais un bouton. */}
            <Link
              href={departement.href}
              prefetch={false}
              className="flex flex-1 items-center px-4 py-4 text-[13px] uppercase tracking-[0.06em] text-[#141414] hover:opacity-60 lg:flex-none lg:px-3 lg:py-4 lg:text-[12px]"
            >
              {departement.nom}
            </Link>

            {/* Le déplieur est un <label> distinct du lien : la ligne reste
                cliquable pour naviguer, le chevron déplie. */}
            <label
              htmlFor={`ca-nav-${departement.slug}`}
              aria-hidden="true"
              className="grid w-14 shrink-0 cursor-pointer place-items-center text-[#141414] transition-transform duration-200 peer-checked:rotate-180 peer-focus-visible:outline peer-focus-visible:outline-2 peer-focus-visible:outline-[#141414] lg:hidden"
            >
              <ChevronBas />
            </label>

            <div className="w-full basis-full overflow-hidden transition-[max-height] duration-300 max-h-0 peer-checked:max-h-[3000px] lg:invisible lg:absolute lg:inset-x-0 lg:top-full lg:z-30 lg:max-h-none lg:basis-auto lg:overflow-visible lg:opacity-0 lg:transition-none lg:group-focus-within:visible lg:group-focus-within:opacity-100 lg:group-hover:visible lg:group-hover:opacity-100">
              <PanneauDepartement departement={departement} />
            </div>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default MegaMenu;

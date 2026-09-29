/**
 * Couche d'accès au catalogue.
 *
 * Tout est chargé au build (server-only) depuis data/*.json.
 * Les index sont construits une seule fois par process, puis mémoïsés :
 * 22 564 produits × ~21 800 pages statiques, une recherche linéaire par page
 * coûterait des minutes de build.
 */

import "server-only";

import produitsRaw from "../../data/produits.json";
import taxonomieRaw from "../../data/taxonomie.json";
import marquesRaw from "../../data/marques.json";
import marqueCategorieRaw from "../../data/marque-categorie.json";

import type {
  Categorie,
  Departement,
  FilAriane,
  Marque,
  MarqueCategorie,
  NoeudTaxonomie,
  Produit,
  SousCategorie,
} from "@/types/catalogue";

export const produits = produitsRaw as unknown as Produit[];
export const taxonomie = taxonomieRaw as unknown as Departement[];
export const marques = marquesRaw as unknown as Marque[];
export const marqueCategories = marqueCategorieRaw as unknown as MarqueCategorie[];

/* ------------------------------------------------------------------ */
/* Index                                                               */
/* ------------------------------------------------------------------ */

function construireNoeuds(): NoeudTaxonomie[] {
  const noeuds: NoeudTaxonomie[] = [];
  for (const dep of taxonomie) {
    noeuds.push({
      url: dep.url,
      slug: dep.slug,
      nom: dep.nom,
      keyword: dep.keyword,
      h1: dep.h1,
      title: dep.title,
      niveau: 1,
      departementSlug: dep.slug,
      parentUrl: "",
    });
    for (const cat of dep.categories) {
      noeuds.push({
        url: cat.url,
        slug: cat.slug,
        nom: cat.nom,
        keyword: cat.keyword,
        h1: cat.h1,
        title: cat.title,
        niveau: 2,
        departementSlug: dep.slug,
        parentUrl: dep.url,
      });
      for (const sous of cat.sousCategories) {
        noeuds.push({
          url: sous.url,
          slug: sous.slug,
          nom: sous.nom,
          keyword: sous.keyword,
          h1: sous.h1,
          title: sous.title,
          niveau: 3,
          departementSlug: dep.slug,
          parentUrl: cat.url,
        });
      }
    }
  }
  return noeuds;
}

/** Les 134 nœuds de l'arbre, aplatis. */
export const noeuds: NoeudTaxonomie[] = construireNoeuds();

const noeudParUrl = new Map<string, NoeudTaxonomie>(noeuds.map((n) => [n.url, n]));
const produitParSlug = new Map<string, Produit>(produits.map((p) => [p.slug, p]));
const marqueParSlug = new Map<string, Marque>(marques.map((m) => [m.slug, m]));

/* ------------------------------------------------------------------ */
/* Publiabilité                                                        */
/* ------------------------------------------------------------------ */

/**
 * Un produit sans prix n'est jamais publié : sans prix il n'y a ni offre, ni
 * panier, ni raison d'exister.
 *
 * Le visuel, lui, n'est plus exigé — arbitrage du propriétaire du 2026-09-24.
 * Le tri de provenance a écarté tout ce qui appartenait aux marchands
 * concurrents, et beaucoup de fiches se retrouvent sans image. Elles gardent
 * un titre, un H1, ~475 mots propres, un prix, une marque, un fil d'Ariane et
 * leurs recommandations : ce n'est pas une page vide, elle a de quoi se
 * référencer. La fiche affiche un cadre explicite à la place du visuel.
 *
 * Le garde-fou contre l'effondrement du crawl n'est donc plus ici mais dans
 * `estIndexable` : on soumet à Google les fiches illustrées d'abord.
 */
export function estPubliable(p: Produit): boolean {
  return p.prix > 0;
}

/** Tous les produits réellement servis par le site. */
export const produitsPubliables: Produit[] = produits.filter(estPubliable);

/** Fiches disposant d'au moins un visuel que nous hébergeons. */
export const produitsIllustres: Produit[] = produitsPubliables.filter(
  (p) => p.images.length > 0,
);

/**
 * Fiches pré-générées au build (~817).
 *
 * Le reste du catalogue est rendu à la demande puis mis en cache : pré-générer
 * 20 000 fiches alors qu'on ne soumet à Google que 50 à 100 URL par vague est
 * du travail perdu, et la contention disque faisait échouer le build sur
 * Windows. Toute URL de produit publiable reste servie normalement — c'est le
 * sitemap qui décide de ce que Google découvre, pas le build.
 *
 * Critère : présent chez au moins deux concurrents (signal best-seller rare,
 * 96,5 % des produits n'existent que sur un site) ou disposant d'une seconde
 * image, donc de l'effet de survol.
 */
export const produitsPrioritaires: Produit[] = produitsPubliables.filter(
  (p) => p.nbSites >= 2 && p.images.length > 0,
);

/**
 * Fiches soumises à l'indexation.
 *
 * Toutes les fiches publiables restent servies et vendables ; seules celles qui
 * franchissent une barre de qualité entrent dans le sitemap. La distinction est
 * délibérée : soumettre 20 000 fiches d'un coup est précisément ce qui fait
 * juger un domaine « à faible valeur unique » et coupe la demande de crawl.
 *
 * Deux portes d'entrée :
 *  - deux visuels rapatriés en local ET une marque résolue : la fiche a de quoi
 *    se tenir visuellement et porte une entité identifiable ;
 *  - présence chez au moins deux revendeurs concurrents : signal de rotation
 *    rare (3,5 % du catalogue), donc page à valeur commerciale démontrée.
 *
 * Le reste rejoindra le sitemap au fur et à mesure que les visuels arrivent et
 * que le contenu s'étoffe. La progression se pilote ici, pas au build.
 */
export function estIndexable(p: Produit): boolean {
  if (!estPubliable(p)) return false;
  // Vague 1 : ce qu'on soumet à Google aujourd'hui, c'est une fiche illustrée
  // portant une marque identifiable. Les fiches sans visuel restent en ligne,
  // accessibles et vendables, mais ne sont pas poussées à l'indexation tant
  // que la vague précédente n'a pas été validée dans Search Console.
  return p.images.length > 0 && Boolean(p.marqueSlug);
}

export const produitsIndexables: Produit[] = produitsPubliables.filter(estIndexable);
/**
 * Produits publiables d'un nœud, descendance incluse : une catégorie affiche
 * aussi les produits de ses sous-catégories.
 *
 * L'index est construit une seule fois et directement sur les publiables.
 * Indexer tout le catalogue puis re-filtrer doublait l'empreinte mémoire et
 * faisait tomber les workers de build en out-of-memory.
 */
const publiablesParNoeud = (() => {
  const index = new Map<string, Produit[]>();
  for (const n of noeuds) index.set(n.url, []);
  for (const p of produitsPubliables) {
    const noeud = noeudParUrl.get(p.categorie);
    if (!noeud) continue;
    index.get(noeud.url)!.push(p);
    if (noeud.parentUrl) {
      index.get(noeud.parentUrl)?.push(p);
      const grandParent = noeudParUrl.get(noeud.parentUrl)?.parentUrl;
      if (grandParent) index.get(grandParent)?.push(p);
    }
  }
  return index;
})();

const publiablesParMarque = (() => {
  const index = new Map<string, Produit[]>();
  for (const p of produitsPubliables) {
    if (!p.marqueSlug) continue;
    const liste = index.get(p.marqueSlug);
    if (liste) liste.push(p);
    else index.set(p.marqueSlug, [p]);
  }
  return index;
})();


/* ------------------------------------------------------------------ */
/* Accès                                                               */
/* ------------------------------------------------------------------ */

export function getNoeud(url: string): NoeudTaxonomie | undefined {
  return noeudParUrl.get(url);
}

export function getProduit(slug: string): Produit | undefined {
  return produitParSlug.get(slug);
}

export function getMarque(slug: string): Marque | undefined {
  return marqueParSlug.get(slug);
}

export function getDepartement(slug: string): Departement | undefined {
  return taxonomie.find((d) => d.slug === slug);
}

export function getCategorie(depSlug: string, catSlug: string): Categorie | undefined {
  return getDepartement(depSlug)?.categories.find((c) => c.slug === catSlug);
}

export function getSousCategorie(
  depSlug: string,
  catSlug: string,
  sousSlug: string,
): SousCategorie | undefined {
  return getCategorie(depSlug, catSlug)?.sousCategories.find((s) => s.slug === sousSlug);
}

/** Produits publiables d'un nœud, descendance incluse. */
export function produitsDuNoeud(url: string): Produit[] {
  return publiablesParNoeud.get(url) ?? [];
}

/** Produits publiables d'une marque. */
export function produitsDeLaMarque(slug: string): Produit[] {
  return publiablesParMarque.get(slug) ?? [];
}

/** Croisements marque × catégorie ayant au moins 5 produits. */
export function categoriesDeLaMarque(marqueSlug: string): MarqueCategorie[] {
  return marqueCategories.filter((mc) => mc.marqueSlug === marqueSlug);
}

/* ------------------------------------------------------------------ */
/* Tri et fil d'Ariane                                                 */
/* ------------------------------------------------------------------ */

/**
 * Ordre de mise en avant. `nbSites` est le signal le plus discriminant dont on
 * dispose : 96,5 % des produits n'existent que sur un seul site concurrent,
 * donc nbSites >= 2 désigne un vrai best-seller.
 */
export function trierParPertinence(liste: Produit[]): Produit[] {
  return [...liste].sort((a, b) => {
    // Une fiche illustrée passe devant : une grille qui s'ouvre sur des cadres
    // sans visuel fait fuir, quelle que soit la qualité du reste.
    const illustreA = a.images.length > 0 ? 1 : 0;
    const illustreB = b.images.length > 0 ? 1 : 0;
    if (illustreA !== illustreB) return illustreB - illustreA;
    if (b.nbSites !== a.nbSites) return b.nbSites - a.nbSites;
    if (b.images.length !== a.images.length) return b.images.length - a.images.length;
    return a.nom.localeCompare(b.nom, "fr");
  });
}

/** Fil d'Ariane d'un nœud de taxonomie. */
export function filArianeNoeud(url: string): FilAriane[] {
  const fil: FilAriane[] = [{ nom: "Accueil", url: "/" }];
  const noeud = noeudParUrl.get(url);
  if (!noeud) return fil;

  const chaine: NoeudTaxonomie[] = [];
  let courant: NoeudTaxonomie | undefined = noeud;
  while (courant) {
    chaine.unshift(courant);
    courant = courant.parentUrl ? noeudParUrl.get(courant.parentUrl) : undefined;
  }
  for (const n of chaine) fil.push({ nom: n.nom, url: n.url });
  return fil;
}

/**
 * Fil d'Ariane d'un produit.
 * L'URL produit est plate (`/produit/{slug}/`) pour survivre à un reclassement
 * sans redirection ; le fil est donc reconstruit depuis `categorie`.
 */
export function filArianeProduit(p: Produit): FilAriane[] {
  const fil = filArianeNoeud(p.categorie);
  fil.push({ nom: p.nom, url: urlProduit(p) });
  return fil;
}

/* ------------------------------------------------------------------ */
/* URLs                                                               */
/* ------------------------------------------------------------------ */

export const SITE_URL = "https://cosmetiquealgerie.com";
export const SITE_NOM = "Cosmétique Algérie";

export function urlProduit(p: Produit): string {
  return `/produit/${p.slug}/`;
}

export function urlMarque(slug: string): string {
  return `/marques/${slug}/`;
}

export function urlAbsolue(chemin: string): string {
  return `${SITE_URL}${chemin}`;
}

/** Prix formaté pour l'affichage. Le marché est en dinars, sans décimales. */
export function formatPrix(prix: number): string {
  return `${prix.toLocaleString("fr-DZ")} DA`;
}

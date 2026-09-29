/**
 * Découpage des sitemaps.
 *
 * Un seul fichier tiendrait (≈ 21 800 URL pour une limite protocolaire de
 * 50 000), mais on segmente par type de page puis, pour les produits, par
 * département et par tranches de 1500 URL : c'est le seul moyen de lire un
 * ratio « Valide / Envoyée » isolé par segment dans Search Console, et donc de
 * diagnostiquer quel type de page Google refuse d'indexer sans attendre que le
 * problème contamine le budget d'exploration de tout le domaine.
 *
 * Module partagé par app/sitemap.ts (les fichiers) et app/sitemap-index.xml
 * (l'index) : la liste des segments doit être identique des deux côtés.
 */

import "server-only";

import type { MetadataRoute } from "next";

import {
  getNoeud,
  marqueCategories,
  marques,
  noeuds,
  produitsIndexables,
  taxonomie,
  urlAbsolue,
  urlMarque,
  urlProduit,
} from "@/lib/catalogue";
import { GUIDES, urlGuide } from "@/lib/guides";

/**
 * `lastmod` ne doit jamais valoir la date de build : un simple redéploiement
 * ferait bouger 20 000 dates d'un coup, ce que Google lit comme de la
 * génération de masse et non comme de la fraîcheur. Ces constantes se
 * modifient donc à la main, quand la donnée change réellement.
 */
/** Dernier rafraîchissement des données catalogue (prix, visuels, classement). */
export const DATE_CATALOGUE = "2026-07-27";
/** Dernière évolution éditoriale de l'arbre (H1, titles, libellés). */
export const DATE_TAXONOMIE = "2026-07-27";

/**
 * Volontairement très en-dessous des 50 000 URL autorisées : la granularité de
 * lecture prime sur la compacité, et un lot de 1500 URL est la taille maximale
 * qu'on s'autorise à soumettre en une fois.
 */
export const MAX_URL_PAR_FICHIER = 1500;

/**
 * Pages hors catalogue. Limité à ce qui existe réellement : une URL non-200
 * dans un sitemap dégrade le ratio d'indexation de tout le segment.
 *
 * Les pages transactionnelles (panier, commande) et la recherche en sont
 * absentes : elles sont en noindex, les soumettre serait contradictoire.
 */
const PAGES_HORS_CATALOGUE = [
  "/",
  "/marques/",
  "/a-propos/",
  "/livraison/",
  "/authenticite/",
  "/contact/",
  "/k-beauty/",
  "/bio/",
  "/peau-sensible/",
  "/guide/",
  ...GUIDES.map((g) => urlGuide(g.slug)),
];

export interface SegmentSitemap {
  /** Identifiant de fichier. Sert d'URL : /sitemap/{id}.xml */
  id: string;
  lastModified: string;
  /** Connu sans construire les entrées : utile à l'index et aux contrôles. */
  nbUrl: number;
  /** Entrées du fichier, construites seulement quand ce fichier est rendu. */
  entrees: () => MetadataRoute.Sitemap;
}

/** Découpe en tranches de taille égale, chacune sous `max`. */
function decouper<T>(liste: T[], max: number): T[][] {
  if (liste.length === 0) return [];
  const nbTranches = Math.ceil(liste.length / max);
  const taille = Math.ceil(liste.length / nbTranches);
  const tranches: T[][] = [];
  for (let i = 0; i < liste.length; i += taille) {
    tranches.push(liste.slice(i, i + taille));
  }
  return tranches;
}

/**
 * `/marques/{marque}/{categorie}/` : le dernier segment du nœud suffit à
 * l'identifier, les slugs de catégorie et de sous-catégorie étant uniques dans
 * tout l'arbre (règle « un label ne route que vers un seul nœud »).
 */
function urlsCroisements(): string[] {
  const urls: string[] = [];
  for (const mc of marqueCategories) {
    const noeud = getNoeud(mc.categorie);
    if (!noeud) continue;
    urls.push(urlAbsolue(`/marques/${mc.marqueSlug}/${noeud.slug}/`));
  }
  return urls;
}

function construireSegments(): SegmentSitemap[] {
  const croisements = urlsCroisements();

  const segments: SegmentSitemap[] = [
    {
      id: "pages",
      lastModified: DATE_TAXONOMIE,
      nbUrl: PAGES_HORS_CATALOGUE.length,
      entrees: () =>
        PAGES_HORS_CATALOGUE.map((chemin) => ({
          url: urlAbsolue(chemin),
          lastModified: DATE_TAXONOMIE,
        })),
    },
    {
      id: "taxonomie",
      lastModified: DATE_TAXONOMIE,
      nbUrl: noeuds.length,
      entrees: () =>
        noeuds.map((n) => ({
          url: urlAbsolue(n.url),
          lastModified: DATE_TAXONOMIE,
        })),
    },
    {
      id: "marques",
      lastModified: DATE_CATALOGUE,
      nbUrl: marques.length,
      entrees: () =>
        marques.map((m) => ({
          url: urlAbsolue(urlMarque(m.slug)),
          lastModified: DATE_CATALOGUE,
        })),
    },
    {
      id: "marques-categories",
      lastModified: DATE_CATALOGUE,
      nbUrl: croisements.length,
      entrees: () =>
        croisements.map((url) => ({ url, lastModified: DATE_CATALOGUE })),
    },
  ];

  // Produits : un jeu de fichiers par département, dans l'ordre de l'arbre.
  // Le regroupement par département (et non par ordre alphabétique) permet de
  // publier et de mesurer un département à la fois.
  for (const dep of taxonomie) {
    // On ne soumet que les fiches franchissant la barre de qualite : une fiche
    // servie n'est pas forcement une fiche a faire decouvrir a Google.
    const produitsDep = produitsIndexables.filter(
      (p) => p.departement === dep.slug,
    );
    const tranches = decouper(produitsDep, MAX_URL_PAR_FICHIER);
    tranches.forEach((tranche, i) => {
      segments.push({
        id: `produits-${dep.slug}-${i + 1}`,
        lastModified: DATE_CATALOGUE,
        nbUrl: tranche.length,
        entrees: () =>
          tranche.map((p) => ({
            url: urlAbsolue(urlProduit(p)),
            lastModified: DATE_CATALOGUE,
          })),
      });
    });
  }

  return segments;
}

/** Tous les segments, dans l'ordre où ils sont listés dans l'index. */
export const segmentsSitemap: SegmentSitemap[] = construireSegments();

const segmentParId = new Map<string, SegmentSitemap>(
  segmentsSitemap.map((s) => [s.id, s]),
);

export function getSegmentSitemap(id: string): SegmentSitemap | undefined {
  return segmentParId.get(id);
}

/** URL absolue du fichier d'un segment, telle que référencée par l'index. */
export function urlSegmentSitemap(id: string): string {
  return urlAbsolue(`/sitemap/${id}.xml`);
}

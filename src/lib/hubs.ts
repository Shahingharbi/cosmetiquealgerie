/**
 * Pages « univers » : sélection des produits et des rayons mis en avant.
 *
 * Un univers n'est pas un nœud de l'arbre : c'est une lecture transverse du
 * catalogue. La sélection est donc explicite et vérifiable — une liste de
 * nœuds, une liste de marques, un filtre sur les attributs — plutôt qu'une
 * recherche de mots-clés dans les noms, qui ferait entrer n'importe quoi.
 */

import "server-only";

import {
  getNoeud,
  produitsDuNoeud,
  produitsPubliables,
  trierParPertinence,
} from "@/lib/catalogue";
import type { ContenuHub } from "@/lib/hubs-types";
import { HUB_BIO } from "@/lib/hubs/bio";
import { HUB_K_BEAUTY } from "@/lib/hubs/k-beauty";
import { HUB_PEAU_SENSIBLE } from "@/lib/hubs/peau-sensible";
import type { Produit } from "@/types/catalogue";

export interface Univers {
  slug: string;
  h1: string;
  title: string;
  description: string;
  /** Rayons et catégories mis en avant, dans l'ordre d'affichage. */
  noeuds: string[];
  /** Produits retenus : le critère est écrit, pas deviné. */
  retenir: (p: Produit) => boolean;
  contenu: ContenuHub;
}

/**
 * Marques coréennes présentes au catalogue. Liste explicite : « coréen » ne
 * se lit pas dans une donnée, et chercher « korea » dans les noms ferait
 * entrer des produits qui n'ont rien à voir.
 */
const MARQUES_COREENNES = new Set([
  "cosrx", "anua", "skin1004", "numbuzin", "medicube", "beauty-of-joseon",
  "tirtir", "mixsoon", "axis-y", "cos-baha", "dr-althea", "some-by-mi",
  "isntree", "round-lab", "laneige", "innisfree", "etude", "etude-house",
  "missha", "banila-co", "purito", "torriden", "abib", "haruharu",
  "farm-stay", "medi-peel", "medipeel", "seoul-1988", "ma-nyo", "dasique",
  "peripera", "rom-nd", "romand", "tocobo", "goodal", "mediheal", "sulwhasoo",
  "the-face-shop", "nature-republic", "holika-holika", "klairs", "iunik",
  "benton", "pyunkang-yul", "eqqualberry", "arencia", "soonjung", "unove",
  "coxir", "devlor", "moms-bath-recipe", "ilso", "reedle-shot", "sungboon",
]);

const NOEUDS_COREENS = ["/soin-visage/soin-visage-coreen/"];

/** Un produit « bio » est annoncé comme tel par son nom : rien d'autre ne le dit. */
const MOTIF_BIO = /\b(bio|organic|naturel|natural|vegan)\b/i;

function valeurs(champ: string | undefined): string[] {
  return (champ ?? "").split("|").map((v) => v.trim()).filter(Boolean);
}

export const UNIVERS: Univers[] = [
  {
    slug: "k-beauty",
    h1: "K-beauty : la cosmétique coréenne en Algérie",
    title: "K-beauty Algérie : cosmétique coréenne, routine et soins",
    description:
      "La cosmétique coréenne en Algérie : routine étape par étape, actifs, filtres solaires et sélection de références livrées dans les 69 wilayas.",
    noeuds: [
      "/soin-visage/soin-visage-coreen/",
      "/soin-visage/serum-visage/",
      "/soin-visage/masque-visage/",
      "/soin-visage/nettoyant-visage/",
      "/creme-solaire/creme-solaire-visage/",
      "/soin-visage/lotion-tonique-visage/",
    ],
    retenir: (p) =>
      (p.marqueSlug ? MARQUES_COREENNES.has(p.marqueSlug) : false) ||
      NOEUDS_COREENS.includes(p.categorie),
    contenu: HUB_K_BEAUTY,
  },
  {
    slug: "bio",
    h1: "Cosmétique bio et naturelle en Algérie",
    title: "Cosmétique bio Algérie : huiles, soins naturels et INCI",
    description:
      "Cosmétique bio et naturelle en Algérie : ce que disent les labels, comment lire une liste INCI, huiles végétales et soins livrés dans les 69 wilayas.",
    noeuds: [
      "/soin-corps/huile-vegetale/",
      "/soin-corps/huile-essentielle/",
      "/hygiene-bain/savon/",
      "/soin-cheveux/huile-cheveux/",
      "/soin-corps/huile-corps/",
      "/soin-visage/eau-thermale-visage/",
    ],
    retenir: (p) => MOTIF_BIO.test(p.nom),
    contenu: HUB_BIO,
  },
  {
    slug: "peau-sensible",
    h1: "Soin des peaux sensibles et réactives",
    title: "Peau sensible : soins, rougeurs et routine — Algérie",
    description:
      "Peaux sensibles et réactives : reconnaître les déclencheurs, bâtir une routine minimale, et les soins disponibles en Algérie avec paiement à la livraison.",
    noeuds: [
      "/soin-visage/soin-peau-sensible-rougeurs/",
      "/soin-visage/soin-peau-atopique-eczema/",
      "/soin-visage/eau-thermale-visage/",
      "/soin-visage/creme-reparatrice-visage/",
      "/creme-solaire/ecran-solaire-peau-sensible/",
      "/soin-visage/creme-cicatrisante/",
    ],
    retenir: (p) =>
      valeurs(p.type_peau).includes("sensible") ||
      valeurs(p.type_peau).includes("atopique") ||
      p.categorie === "/soin-visage/soin-peau-sensible-rougeurs/" ||
      p.categorie === "/soin-visage/soin-peau-atopique-eczema/",
    contenu: HUB_K_BEAUTY, // remplacé juste en dessous : voir `contenus`
  },
];

/** Contenus rédigés, rattachés après coup pour garder la liste lisible. */
const contenus: Record<string, ContenuHub> = {
  "k-beauty": HUB_K_BEAUTY,
  bio: HUB_BIO,
  "peau-sensible": HUB_PEAU_SENSIBLE,
};
for (const u of UNIVERS) u.contenu = contenus[u.slug];

export function getUnivers(slug: string): Univers | undefined {
  return UNIVERS.find((u) => u.slug === slug);
}

/** Produits de l'univers, les mieux placés d'abord. */
export function produitsUnivers(u: Univers, combien = 24): Produit[] {
  return trierParPertinence(produitsPubliables.filter(u.retenir)).slice(0, combien);
}

export function nbProduitsUnivers(u: Univers): number {
  return produitsPubliables.filter(u.retenir).length;
}

/** Rayons mis en avant, avec leur volume réel. */
export function rayonsUnivers(u: Univers): { nom: string; url: string; nb: number }[] {
  return u.noeuds
    .map((url) => {
      const noeud = getNoeud(url);
      return noeud ? { nom: noeud.nom, url, nb: produitsDuNoeud(url).length } : null;
    })
    .filter((x): x is { nom: string; url: string; nb: number } => x !== null);
}

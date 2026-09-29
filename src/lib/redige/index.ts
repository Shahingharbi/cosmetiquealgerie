/**
 * Point d'entrée du contenu rédigé à la main.
 *
 * Les lots sont agrégés ici en trois tables indexées par clé — URL de nœud,
 * slug de marque, slug de produit. Les pages interrogent ces tables ; elles
 * n'importent jamais un lot directement.
 *
 * Le fichier `lots.ts` est REGÉNÉRÉ par `pipeline/9-redige/index_lots.ps1` :
 * il ne contient que la liste des imports, pour qu'ajouter un lot ne demande
 * pas de toucher à la logique ci-dessous.
 *
 * Précédence : un contenu rédigé l'emporte toujours sur un contenu composé.
 * Les générateurs de `contenu-categorie.ts`, `contenu-marque.ts` et
 * `descriptions.ts` ne servent plus que de repli pour les pages non encore
 * rédigées — la longue traîne du catalogue.
 */

import "server-only";

import { LOTS_CATEGORIES, LOTS_FICHES, LOTS_MARQUES } from "@/lib/redige/lots";
import type { CategorieRedigee, FicheRedigee, MarqueRedigee } from "@/lib/redige/types";

function indexer<T>(lots: T[][], cle: (x: T) => string): Map<string, T> {
  const table = new Map<string, T>();
  for (const lot of lots) {
    for (const entree of lot) {
      const k = cle(entree);
      // Premier arrivé, premier servi : un doublon entre deux lots signale une
      // erreur de découpage, on garde le plus ancien et on ne masque rien.
      if (k && !table.has(k)) table.set(k, entree);
    }
  }
  return table;
}

const CATEGORIES = indexer<CategorieRedigee>(LOTS_CATEGORIES, (c) => c.url);
const MARQUES = indexer<MarqueRedigee>(LOTS_MARQUES, (m) => m.slug);
const FICHES = indexer<FicheRedigee>(LOTS_FICHES, (f) => f.slug);

/** Contenu rédigé d'un nœud de taxonomie, ou `undefined` s'il n'en a pas. */
export function categorieRedigee(url: string): CategorieRedigee | undefined {
  return CATEGORIES.get(url);
}

/** Contenu rédigé d'une page marque. */
export function marqueRedigee(slug: string): MarqueRedigee | undefined {
  return MARQUES.get(slug);
}

/**
 * Note rédigée pour un produit.
 *
 * Une fiche sans texte d'identité n'est pas retenue : c'est le seul champ
 * obligatoire du contrat, et une entrée qui en manque est une entrée vide.
 */
export function ficheRedigee(slug: string): FicheRedigee | undefined {
  const f = FICHES.get(slug);
  return f && f.identite.length > 0 ? f : undefined;
}

/** Compteurs de couverture, pour les contrôles de build. */
export const COUVERTURE = {
  categories: CATEGORIES.size,
  marques: MARQUES.size,
  fiches: FICHES.size,
};

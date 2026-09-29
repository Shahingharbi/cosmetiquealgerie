/**
 * Types du catalogue Cosmétique Algérie.
 * Source de vérité : data/*.json, générés depuis produits_publiables.csv
 * et taxonomie_v2.json (arbre figé de 134 URL).
 */

/** Un produit du catalogue. */
export interface Produit {
  /** Slug unique, immuable une fois publié. Ex. "bioderma-sebium-gel-moussant-400ml" */
  slug: string;
  nom: string;
  /** Marque canonique résolue via marques_canoniques.csv. Vide si non résolue. */
  marque: string;
  marqueSlug: string;
  /** Prix médian en DZD. 0 si inconnu. */
  prix: number;
  /** URL du nœud de taxonomie. Ex. "/soin-visage/serum-visage/" */
  categorie: string;
  departement: string;
  /** Ex. "400ml", "50g", "6x10ml". Vide si absente du nom. */
  contenance: string;
  /** URLs absolues des visuels. Le hover n'est actif qu'à partir de 2 images. */
  images: string[];
  /** Nombre de sites concurrents où le produit apparaît. >= 2 = signal best-seller (rare). */
  nbSites: number;

  // --- attributs extraits du nom, tous optionnels ---
  spf?: string;
  /** Multivalué, séparateur "|". */
  type_peau?: string;
  type_cheveux?: string;
  besoin?: string;
  zone?: string;
  genre?: string;
  texture?: string;
  format?: string;
  /** Composition INCI (Open Beauty Facts). */
  inci?: string;
}

/** Nœud de taxonomie, niveau 3. */
export interface SousCategorie {
  slug: string;
  nom: string;
  /** URL absolue depuis la racine, avec slash final. */
  url: string;
  /** Mot-clé cible. Présent dans l'URL, le H1 et le title (règle d'or). */
  keyword: string;
  h1: string;
  title: string;
}

/** Nœud de taxonomie, niveau 2. */
export interface Categorie extends SousCategorie {
  sousCategories: SousCategorie[];
}

/** Nœud de taxonomie, niveau 1. */
export interface Departement extends SousCategorie {
  categories: Categorie[];
}

/** Une marque ayant au moins un produit. */
export interface Marque {
  slug: string;
  nom: string;
  nbProduits: number;
  departements: string[];
}

/** Croisement marque × catégorie, créé seulement au-delà de 5 produits. */
export interface MarqueCategorie {
  marqueSlug: string;
  categorie: string;
  nbProduits: number;
}

/** Niveau d'un nœud dans l'arbre. */
export type NiveauTaxonomie = 1 | 2 | 3;

/** Nœud aplati, pour le routage et le fil d'Ariane. */
export interface NoeudTaxonomie {
  url: string;
  slug: string;
  nom: string;
  keyword: string;
  h1: string;
  title: string;
  niveau: NiveauTaxonomie;
  departementSlug: string;
  /** URL du parent. Vide pour un département. */
  parentUrl: string;
}

/** Un maillon du fil d'Ariane. */
export interface FilAriane {
  nom: string;
  url: string;
}

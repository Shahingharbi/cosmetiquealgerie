/**
 * Recherche produits, marques et rayons.
 *
 * L'index est construit une fois au démarrage du process : 20 000 produits
 * balayés à chaque frappe coûteraient trop cher, et une recherche par sous-
 * chaîne naïve renverrait « crème » pour « ème ».
 *
 * On indexe par token, pas par sous-chaîne : la requête est découpée en mots,
 * chaque mot doit être présent (préfixe accepté) pour qu'un produit remonte.
 * C'est ce qui fait que « serum vitamine c » ne ramène pas tous les sérums.
 */

import "server-only";

import { marques, noeuds, produitsPubliables, urlMarque, urlProduit } from "@/lib/catalogue";
import type { Produit } from "@/types/catalogue";

export interface ResultatProduit {
  type: "produit";
  slug: string;
  nom: string;
  marque: string;
  prix: number;
  contenance: string;
  image?: string;
  url: string;
  score: number;
}

export interface ResultatLien {
  type: "marque" | "rayon";
  nom: string;
  url: string;
  nb: number;
}

export interface Resultats {
  requete: string;
  produits: ResultatProduit[];
  marques: ResultatLien[];
  rayons: ResultatLien[];
  total: number;
}

/* ------------------------------------------------------------------ */
/* Normalisation                                                       */
/* ------------------------------------------------------------------ */

/** Sans accents, sans ponctuation : « Avène » et « avene » doivent matcher. */
export function normaliser(s: string): string {
  return s
    .toLowerCase()
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "")
    .replace(/[^a-z0-9]+/g, " ")
    .trim();
}

function tokens(s: string): string[] {
  return normaliser(s).split(" ").filter((t) => t.length >= 2);
}

/* ------------------------------------------------------------------ */
/* Index                                                               */
/* ------------------------------------------------------------------ */

interface Entree {
  produit: Produit;
  tokens: Set<string>;
  /** Texte normalisé complet, pour départager sur la position du mot. */
  plat: string;
}

const entrees: Entree[] = produitsPubliables.map((p) => {
  const brut = `${p.marque} ${p.nom} ${p.contenance}`;
  return { produit: p, tokens: new Set(tokens(brut)), plat: normaliser(brut) };
});

/**
 * Index inversé token -> produits. Une requête ne balaye ainsi que les
 * candidats partageant son premier mot, au lieu des 20 000 fiches.
 */
const parToken = new Map<string, Entree[]>();
for (const e of entrees) {
  for (const t of e.tokens) {
    const liste = parToken.get(t);
    if (liste) liste.push(e);
    else parToken.set(t, [e]);
  }
}

/** Tokens connus, pour la recherche par préfixe (« sha » → « shampoing »). */
const tousTokens = [...parToken.keys()];

function candidats(mot: string): Entree[] {
  const exact = parToken.get(mot);
  if (exact) return exact;
  // Préfixe : utile pendant la frappe, mais limité pour rester rapide.
  const proches = tousTokens.filter((t) => t.startsWith(mot)).slice(0, 12);
  return proches.flatMap((t) => parToken.get(t) ?? []);
}

/* ------------------------------------------------------------------ */
/* Recherche                                                           */
/* ------------------------------------------------------------------ */

function scorer(e: Entree, mots: string[], requete: string): number {
  let score = 0;

  for (const mot of mots) {
    if (e.tokens.has(mot)) score += 10;
    else if ([...e.tokens].some((t) => t.startsWith(mot))) score += 6;
    else return 0; // tous les mots doivent être présents
  }

  // La requête entière retrouvée telle quelle vaut mieux qu'une dispersion.
  if (e.plat.includes(requete)) score += 25;
  // Un nom court qui matche est plus pertinent qu'un nom fleuve.
  score += Math.max(0, 12 - e.produit.nom.length / 8);
  // Signaux de qualité : visuel disponible, distribution réelle.
  if (e.produit.images.length >= 2) score += 4;
  score += Math.min(8, e.produit.nbSites * 2);

  return score;
}

export function rechercher(requete: string, limite = 24): Resultats {
  const q = normaliser(requete);
  const mots = tokens(requete);
  if (mots.length === 0) {
    return { requete, produits: [], marques: [], rayons: [], total: 0 };
  }

  // On part du mot le plus discriminant : c'est lui qui réduit le plus l'espace.
  const parRarete = [...mots].sort(
    (a, b) => (parToken.get(a)?.length ?? 1e9) - (parToken.get(b)?.length ?? 1e9),
  );
  const base = candidats(parRarete[0]);

  const vus = new Set<string>();
  const notes: { e: Entree; score: number }[] = [];
  for (const e of base) {
    if (vus.has(e.produit.slug)) continue;
    vus.add(e.produit.slug);
    const s = scorer(e, mots, q);
    if (s > 0) notes.push({ e, score: s });
  }
  notes.sort((a, b) => b.score - a.score || a.e.produit.nom.localeCompare(b.e.produit.nom, "fr"));

  const produits: ResultatProduit[] = notes.slice(0, limite).map(({ e, score }) => ({
    type: "produit",
    slug: e.produit.slug,
    nom: e.produit.nom,
    marque: e.produit.marque,
    prix: e.produit.prix,
    contenance: e.produit.contenance,
    image: e.produit.images[0],
    url: urlProduit(e.produit),
    score,
  }));

  const marquesTrouvees: ResultatLien[] = marques
    .filter((m) => mots.every((mot) => normaliser(m.nom).includes(mot)))
    .slice(0, 5)
    .map((m) => ({ type: "marque", nom: m.nom, url: urlMarque(m.slug), nb: m.nbProduits }));

  const rayonsTrouves: ResultatLien[] = noeuds
    .filter((n) => mots.every((mot) => normaliser(n.nom).includes(mot)))
    .slice(0, 5)
    .map((n) => ({ type: "rayon", nom: n.nom, url: n.url, nb: 0 }));

  return {
    requete,
    produits,
    marques: marquesTrouvees,
    rayons: rayonsTrouves,
    total: notes.length,
  };
}

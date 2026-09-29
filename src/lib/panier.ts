/**
 * Panier — logique pure, sans React et sans dépendance au catalogue.
 *
 * Ce module traverse la frontière serveur/client : il est importé aussi bien
 * par les composants clients que par les actions serveur des pages
 * transactionnelles. Il ne doit donc JAMAIS importer `@/lib/catalogue`, qui est
 * marqué `server-only` et charge 10 Mo de produits.
 *
 * L'état persisté ne contient que `{ slug, quantite }`. Le nom, la contenance
 * et surtout le prix sont relus dans le catalogue à chaque rendu : figer un
 * prix dans le navigateur du client, c'est le laisser dériver du catalogue sans
 * que personne ne le voie, et découvrir l'écart au moment de la livraison.
 */

import type { Produit } from "@/types/catalogue";

/* ------------------------------------------------------------------ */
/* Constantes                                                          */
/* ------------------------------------------------------------------ */

/**
 * Clés versionnées. Un changement de forme du stockage passe par une v2 :
 * l'ancienne clé est alors simplement ignorée, jamais migrée à l'aveugle.
 */
export const CLE_PANIER = "ca-panier-v1";
export const CLE_COMMANDE = "ca-commande-v1";

/** Paiement à la livraison, sans stock en temps réel : au-delà, on préfère un appel. */
export const QUANTITE_MAX = 10;

/** Plafond de lignes. Vaut pour le stockage comme pour l'action serveur. */
export const LIGNES_MAX = 50;

/* ------------------------------------------------------------------ */
/* Types                                                               */
/* ------------------------------------------------------------------ */

/** Seule chose réellement persistée. */
export interface ArticlePanier {
  slug: string;
  quantite: number;
}

/**
 * Vue minimale d'un produit, résolue côté serveur à chaque rendu du panier.
 * C'est le seul objet produit qui traverse la frontière : envoyer le `Produit`
 * complet ferait passer l'INCI et tous les attributs dans le payload.
 */
export interface ProduitPanier {
  slug: string;
  nom: string;
  marque: string;
  marqueSlug: string;
  contenance: string;
  prix: number;
  /** Premier visuel. Toujours présent : un produit sans image n'est pas publiable. */
  image: string;
  url: string;
}

export interface LignePanier {
  produit: ProduitPanier;
  quantite: number;
}

/** Réponse de l'action serveur qui relit le catalogue. */
export interface ResolutionPanier {
  /** Dans l'ordre demandé. Les slugs inconnus ou dépubliés sont omis. */
  produits: ProduitPanier[];
  /** Compléments de routine issus du moteur de reco. Vide sur la page commande. */
  upsell: ProduitPanier[];
}

export type ResoudrePanier = (slugs: string[]) => Promise<ResolutionPanier>;

/** Coordonnées saisies au checkout. Aucun compte, aucun mot de passe. */
export interface ClientCommande {
  prenom: string;
  nom: string;
  /** Normalisé : 10 chiffres, commence par 0. */
  telephone: string;
  wilayaCode: string;
  wilayaNom: string;
  commune: string;
  adresse: string;
  commentaire: string;
}

export interface LigneCommande {
  slug: string;
  nom: string;
  marque: string;
  contenance: string;
  prixUnitaire: number;
  quantite: number;
}

export interface Commande {
  numero: string;
  dateIso: string;
  client: ClientCommande;
  lignes: LigneCommande[];
  total: number;
  /** Le marché algérien ne connaît que ça. Le champ existe pour l'export, pas pour le choix. */
  paiement: "livraison";
}

/* ------------------------------------------------------------------ */
/* Conversion catalogue -> vue panier                                  */
/* ------------------------------------------------------------------ */

/**
 * L'URL est écrite en dur plutôt qu'appelée via `urlProduit` : ce module est
 * importé par des composants clients, et `@/lib/catalogue` est `server-only`.
 * Le motif `/produit/{slug}/` est figé par l'architecture d'URL.
 */
export function vueProduit(p: Produit): ProduitPanier {
  return {
    slug: p.slug,
    nom: p.nom,
    marque: p.marque,
    marqueSlug: p.marqueSlug,
    contenance: p.contenance,
    prix: p.prix,
    image: p.images[0] ?? "",
    url: `/produit/${p.slug}/`,
  };
}

/* ------------------------------------------------------------------ */
/* Persistance                                                         */
/* ------------------------------------------------------------------ */

function estArticle(valeur: unknown): valeur is ArticlePanier {
  if (typeof valeur !== "object" || valeur === null) return false;
  const a = valeur as Record<string, unknown>;
  return typeof a.slug === "string" && a.slug.length > 0 && typeof a.quantite === "number";
}

/**
 * Le contenu de localStorage est une entrée non fiable : il peut avoir été
 * écrit par une version antérieure, tronqué par un quota, ou édité à la main.
 */
function normaliser(valeur: unknown): ArticlePanier[] {
  if (!Array.isArray(valeur)) return [];
  const vus = new Set<string>();
  const sortie: ArticlePanier[] = [];
  for (const brut of valeur) {
    if (!estArticle(brut)) continue;
    if (vus.has(brut.slug)) continue;
    const quantite = Math.min(QUANTITE_MAX, Math.max(1, Math.floor(brut.quantite)));
    if (!Number.isFinite(quantite)) continue;
    vus.add(brut.slug);
    sortie.push({ slug: brut.slug, quantite });
    if (sortie.length >= LIGNES_MAX) break;
  }
  return sortie;
}

/**
 * Renvoie toujours un tableau. Un localStorage indisponible — navigation
 * privée Safari, cookies tiers bloqués, quota plein — ne doit jamais empêcher
 * la page de s'afficher.
 */
export function lirePanier(): ArticlePanier[] {
  if (typeof window === "undefined") return [];
  try {
    const brut = window.localStorage.getItem(CLE_PANIER);
    return brut ? normaliser(JSON.parse(brut)) : [];
  } catch {
    return [];
  }
}

export function ecrirePanier(articles: ArticlePanier[]): void {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(CLE_PANIER, JSON.stringify(articles));
  } catch {
    // Stockage refusé : le panier reste vivant en mémoire pour la session.
  }
}

export function enregistrerCommande(commande: Commande): void {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(CLE_COMMANDE, JSON.stringify(commande));
  } catch {
    // Sans stockage, la page de confirmation retombe sur son message générique.
  }
}

export function lireDerniereCommande(): Commande | null {
  if (typeof window === "undefined") return null;
  try {
    const brut = window.localStorage.getItem(CLE_COMMANDE);
    if (!brut) return null;
    const c = JSON.parse(brut) as Commande;
    return typeof c?.numero === "string" && Array.isArray(c?.lignes) ? c : null;
  } catch {
    return null;
  }
}

/* ------------------------------------------------------------------ */
/* Opérations — fonctions pures, l'état est détenu par le provider     */
/* ------------------------------------------------------------------ */

export function ajouterArticle(
  articles: ArticlePanier[],
  slug: string,
  quantite = 1,
): ArticlePanier[] {
  const pas = Math.min(QUANTITE_MAX, Math.max(1, Math.floor(quantite)));
  const existant = articles.find((a) => a.slug === slug);
  if (existant) {
    return articles.map((a) =>
      a.slug === slug ? { ...a, quantite: Math.min(QUANTITE_MAX, a.quantite + pas) } : a,
    );
  }
  if (articles.length >= LIGNES_MAX) return articles;
  return [...articles, { slug, quantite: pas }];
}

export function retirerArticle(articles: ArticlePanier[], slug: string): ArticlePanier[] {
  return articles.filter((a) => a.slug !== slug);
}

/** Une quantité nulle ou négative vaut un retrait : pas de ligne fantôme. */
export function changerQuantiteArticle(
  articles: ArticlePanier[],
  slug: string,
  quantite: number,
): ArticlePanier[] {
  const q = Math.floor(quantite);
  if (!Number.isFinite(q) || q <= 0) return retirerArticle(articles, slug);
  const borne = Math.min(QUANTITE_MAX, q);
  return articles.map((a) => (a.slug === slug ? { ...a, quantite: borne } : a));
}

export function nombreArticles(articles: ArticlePanier[]): number {
  return articles.reduce((n, a) => n + a.quantite, 0);
}

export function totalPanier(lignes: LignePanier[]): number {
  return lignes.reduce((somme, l) => somme + l.produit.prix * l.quantite, 0);
}

/* ------------------------------------------------------------------ */
/* Formatage                                                           */
/* ------------------------------------------------------------------ */

/**
 * Duplique volontairement `formatPrix` de `@/lib/catalogue` : le panier est
 * rendu côté client et ne peut pas importer un module `server-only`.
 * Toute modification doit être répercutée des deux côtés.
 */
export function formatPrixDA(prix: number): string {
  return `${prix.toLocaleString("fr-DZ")} DA`;
}

/* ------------------------------------------------------------------ */
/* Téléphone algérien                                                  */
/* ------------------------------------------------------------------ */

/**
 * Ramène une saisie à la forme nationale : 10 chiffres commençant par 0.
 * Les indicatifs +213 et 00213 sont acceptés puis convertis — les recopier
 * depuis un contact enregistré est le cas le plus fréquent.
 */
export function normaliserTelephone(saisie: string): string {
  let chiffres = saisie.replace(/\D/g, "");
  if (chiffres.startsWith("00213")) chiffres = chiffres.slice(5);
  else if (chiffres.startsWith("213")) chiffres = chiffres.slice(3);
  else return chiffres;
  return chiffres.startsWith("0") ? chiffres : `0${chiffres}`;
}

export function telephoneValide(saisie: string): boolean {
  return /^0\d{9}$/.test(normaliserTelephone(saisie));
}

/** "0X XX XX XX XX" — la forme lue à voix haute au téléphone. */
export function formaterTelephone(saisie: string): string {
  const n = normaliserTelephone(saisie);
  if (!/^0\d{9}$/.test(n)) return saisie;
  return `${n.slice(0, 2)} ${n.slice(2, 4)} ${n.slice(4, 6)} ${n.slice(6, 8)} ${n.slice(8, 10)}`;
}

/* ------------------------------------------------------------------ */
/* Numéro de commande                                                  */
/* ------------------------------------------------------------------ */

const ALPHABET = "0123456789ABCDEFGHJKLMNPQRSTUVWXYZ"; // sans I ni O : dictés au téléphone

/**
 * `CA-AAMMJJ-XXXX`, généré dans le navigateur.
 *
 * Il n'a aucune valeur d'unicité globale — il n'y a pas de backend pour la
 * garantir. Il sert de référence à citer lors de l'appel de confirmation.
 * Le vrai numéro sera attribué par le back-office le jour où il existera.
 */
export function genererNumeroCommande(date = new Date()): string {
  const aa = String(date.getFullYear()).slice(2);
  const mm = String(date.getMonth() + 1).padStart(2, "0");
  const jj = String(date.getDate()).padStart(2, "0");

  let suffixe = "";
  const octets = new Uint8Array(4);
  if (typeof globalThis.crypto?.getRandomValues === "function") {
    globalThis.crypto.getRandomValues(octets);
  } else {
    for (let i = 0; i < octets.length; i++) octets[i] = Math.floor(Math.random() * 256);
  }
  for (const octet of octets) suffixe += ALPHABET[octet % ALPHABET.length];

  return `CA-${aa}${mm}${jj}-${suffixe}`;
}

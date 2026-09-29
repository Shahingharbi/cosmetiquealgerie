/**
 * Moteur de recommandation et de maillage interne.
 * Implémentation de SPEC-MOTEUR-RECO.md.
 *
 * Le moteur est déterministe et sans état : deux appels sur le même catalogue
 * renvoient exactement la même liste, donc deux builds produisent le même HTML
 * et Googlebot ne voit aucun churn de liens.
 *
 * Chaque slot de recommandation est un lien rendu côté serveur : le moteur EST
 * le maillage interne. C'est la raison des plafonds (liens de reco par fiche,
 * liens inter-département) — ce sont des contraintes de cocon, pas d'affichage.
 */

import { getNoeud, produitsPubliables } from "@/lib/catalogue";
import type { Produit } from "@/types/catalogue";

export interface Reco {
  produit: Produit;
  /** Score normalisé à 100, pénalités comprises. */
  score: number;
}

/* ================================================================== */
/* 1. Chaînes de routine                                               */
/* ================================================================== */

/**
 * Enchaînements cosmétiques réels. L'ordre porte le sens : une étape appelle
 * les suivantes, jamais les précédentes — on ne recommande pas un démaquillant
 * depuis une crème de nuit.
 */
const CHAINES: string[][] = [
  [
    "/soin-visage/nettoyant-visage/",
    "/soin-visage/nettoyant-visage/lotion-tonique-visage/",
    "/soin-visage/serum-visage/",
    "/soin-visage/creme-hydratante-visage/creme-de-jour-visage/",
    "/creme-solaire/creme-solaire-visage/",
  ],
  [
    "/soin-visage/nettoyant-visage/demaquillant-visage/",
    "/soin-visage/nettoyant-visage/gel-nettoyant-visage/",
    "/soin-visage/serum-visage/",
    "/soin-visage/contour-des-yeux/",
    "/soin-visage/creme-hydratante-visage/creme-de-nuit-visage/",
  ],
  [
    "/soin-visage/peau-a-problemes/nettoyant-anti-imperfections/",
    "/soin-visage/peau-a-problemes/soin-anti-acne-visage/",
    "/soin-visage/peau-a-problemes/creme-anti-imperfections/",
    "/creme-solaire/creme-solaire-visage/",
  ],
  [
    "/soin-visage/nettoyant-visage/",
    "/soin-visage/serum-visage/serum-anti-age/",
    "/soin-visage/contour-des-yeux/contour-des-yeux-anti-age/",
    "/soin-visage/soin-anti-age-visage/",
    "/creme-solaire/creme-solaire-visage/",
  ],
  [
    "/soin-visage/nettoyant-visage/",
    "/soin-visage/peau-a-problemes/soin-anti-taches-visage/",
    "/soin-visage/peau-a-problemes/creme-eclaircissante-visage/",
    "/creme-solaire/creme-solaire-visage/",
  ],
  [
    "/soin-visage/nettoyant-visage/eau-micellaire/",
    "/soin-visage/peau-a-problemes/soin-peau-sensible-rougeurs/",
    "/soin-visage/creme-hydratante-visage/",
  ],
  [
    "/soin-cheveux/shampoing/",
    "/soin-cheveux/apres-shampoing/",
    "/soin-cheveux/apres-shampoing/masque-cheveux/",
    "/soin-cheveux/huile-cheveux/",
  ],
  [
    "/soin-cheveux/soin-anti-chute-cheveux/shampoing-anti-chute/",
    "/soin-cheveux/soin-anti-chute-cheveux/",
    "/soin-cheveux/serum-cheveux/",
  ],
  [
    "/soin-homme/rasage-homme/",
    "/soin-homme/soin-visage-homme/",
    "/soin-homme/corps-hygiene-homme/",
    "/parfum/parfum-homme/",
  ],
  [
    "/bebe-maman/soin-toilette-bebe/",
    "/bebe-maman/change-bebe/",
    "/creme-solaire/creme-solaire-enfant/",
  ],
  [
    "/creme-solaire/creme-solaire-visage/",
    "/creme-solaire/creme-solaire-corps/",
    "/creme-solaire/apres-soleil/",
    "/soin-corps/lait-corps/",
  ],
  [
    "/hygiene-bain/gel-douche/",
    "/soin-corps/gommage-corps/",
    "/soin-corps/creme-hydratante-corps/",
    "/soin-corps/deodorant/",
  ],
];

/**
 * Matrice de complémentarité dérivée des chaînes : chaque étape pointe vers les
 * deux suivantes, avec un poids dégressif. Dériver plutôt que saisir les paires
 * à la main garantit que la matrice reste cohérente avec les routines.
 * Les URL absentes de l'arbre sont ignorées silencieusement.
 */
const COMPLEMENTARITE = (() => {
  const m = new Map<string, Map<string, number>>();
  const ajouter = (a: string, b: string, poids: number) => {
    if (a === b || !getNoeud(a) || !getNoeud(b)) return;
    let cible = m.get(a);
    if (!cible) {
      cible = new Map();
      m.set(a, cible);
    }
    cible.set(b, Math.max(cible.get(b) ?? 0, poids));
  };
  for (const etapes of CHAINES) {
    for (let i = 0; i < etapes.length; i++) {
      if (i + 1 < etapes.length) ajouter(etapes[i], etapes[i + 1], 100);
      if (i + 2 < etapes.length) ajouter(etapes[i], etapes[i + 2], 60);
    }
  }
  return m;
})();

/* ================================================================== */
/* 2. Index                                                            */
/* ================================================================== */

function tokens(s: string): string[] {
  return s
    .toLowerCase()
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "")
    .replace(/[^a-z0-9]+/g, " ")
    .trim()
    .split(" ")
    .filter(Boolean);
}

const parCategorie = new Map<string, Produit[]>();
const parDepartement = new Map<string, Produit[]>();
const parMarque = new Map<string, Produit[]>();

for (const p of produitsPubliables) {
  const c = parCategorie.get(p.categorie);
  if (c) c.push(p);
  else parCategorie.set(p.categorie, [p]);

  const d = parDepartement.get(p.departement);
  if (d) d.push(p);
  else parDepartement.set(p.departement, [p]);

  if (p.marqueSlug) {
    const m = parMarque.get(p.marqueSlug);
    if (m) m.push(p);
    else parMarque.set(p.marqueSlug, [p]);
  }
}

/** Tokens du nom hors marque : sert à détecter une même gamme (Effaclar, Sensibio…). */
const tokensNom = new Map<string, Set<string>>();
for (const p of produitsPubliables) {
  const marque = new Set(tokens(p.marque));
  tokensNom.set(
    p.slug,
    new Set(tokens(p.nom).filter((t) => t.length >= 4 && !marque.has(t) && !/^\d+$/.test(t))),
  );
}

/* ================================================================== */
/* 3. Règles d'incompatibilité — gates binaires, avant tout scoring     */
/* ================================================================== */

const RETINOL = "/soin-visage/serum-visage/serum-retinol/";
const VITAMINE_C = "/soin-visage/serum-visage/serum-vitamine-c/";
const GOMMAGE_VISAGE = "/soin-visage/gommage-visage/";
const GOMMAGE_CORPS = "/soin-corps/gommage-corps/";
const ANTI_ACNE = "/soin-visage/peau-a-problemes/soin-anti-acne-visage/";
const EPILATION = "/hygiene-bain/epilation/";
const AUTOBRONZANT = "/creme-solaire/autobronzant/";
const PEAU_SENSIBLE = "/soin-visage/peau-a-problemes/soin-peau-sensible-rougeurs/";
const PEAU_ATOPIQUE = "/soin-visage/peau-a-problemes/soin-peau-atopique-eczema/";

/** Couples d'actifs qui ne doivent jamais être recommandés ensemble. */
const INCOMPATIBLES: [string, string][] = [
  [RETINOL, GOMMAGE_VISAGE], // barrière cutanée : desquamation sévère
  [RETINOL, ANTI_ACNE], // rétinoïde + kératolytique : inactivation croisée
  [RETINOL, VITAMINE_C], // pH incompatibles, les deux actifs se dégradent
  [GOMMAGE_VISAGE, ANTI_ACNE], // double kératolyse
  [GOMMAGE_VISAGE, EPILATION], // peau fraîchement épilée = peau lésée
  [GOMMAGE_CORPS, EPILATION],
];

/** Catégories agressives, proscrites depuis une peau réactive. */
const AGRESSIFS = new Set([RETINOL, GOMMAGE_VISAGE, GOMMAGE_CORPS, ANTI_ACNE]);

/**
 * Depuis une fiche bébé, tout ce qui relève du soin adulte est interdit.
 * Seule exception hors département : la crème solaire enfant.
 */
const INTERDIT_DEPUIS_BEBE = [
  "/soin-visage/soin-anti-age-visage/",
  "/soin-visage/serum-visage/",
  "/soin-visage/gommage-visage/",
  "/soin-visage/peau-a-problemes/creme-eclaircissante-visage/",
  "/soin-visage/peau-a-problemes/soin-anti-taches-visage/",
  "/maquillage/",
  "/parfum/",
  "/hygiene-bain/epilation/",
  "/soin-corps/soin-minceur-vergetures/",
  "/creme-solaire/autobronzant/",
];

/** Couples de départements entre lesquels un lien garde du sens (cocon). */
const SILOS_AUTORISES = new Set([
  "soin-visage>creme-solaire",
  "creme-solaire>soin-visage",
  "soin-visage>soin-corps",
  "soin-corps>soin-visage",
  "soin-corps>hygiene-bain",
  "hygiene-bain>soin-corps",
  "soin-cheveux>hygiene-bain",
  "hygiene-bain>soin-cheveux",
  "soin-corps>creme-solaire",
  "creme-solaire>soin-corps",
  "soin-homme>parfum",
  "parfum>soin-homme",
  "bebe-maman>creme-solaire",
  "maquillage>soin-visage",
  "soin-visage>maquillage",
]);

/** Deux contenances du même produit : on n'en affiche qu'une. */
function memeProduit(a: Produit, b: Produit): boolean {
  if (a.marqueSlug !== b.marqueSlug || a.categorie !== b.categorie) return false;
  const ta = tokensNom.get(a.slug);
  const tb = tokensNom.get(b.slug);
  if (!ta || !tb || ta.size === 0 || tb.size === 0) return false;
  let communs = 0;
  for (const t of ta) if (tb.has(t)) communs++;
  return communs >= Math.min(ta.size, tb.size) * 0.8;
}

function passeLesGates(a: Produit, b: Produit): boolean {
  if (a.slug === b.slug) return false; // auto-référence
  if (b.images.length === 0) return false; // rien à afficher
  if (memeProduit(a, b)) return false;

  for (const [x, y] of INCOMPATIBLES) {
    if ((a.categorie === x && b.categorie === y) || (a.categorie === y && b.categorie === x)) {
      return false;
    }
  }

  if ((a.categorie === PEAU_SENSIBLE || a.categorie === PEAU_ATOPIQUE) && AGRESSIFS.has(b.categorie)) {
    return false;
  }

  // L'autobronzant n'a aucun indice de protection : jamais dans un contexte solaire.
  if (a.departement === "creme-solaire" && b.categorie === AUTOBRONZANT) return false;
  if (a.categorie === AUTOBRONZANT && b.departement === "creme-solaire") return false;

  if (a.departement === "bebe-maman" && a.categorie !== "/bebe-maman/soin-maman-grossesse/") {
    if (b.departement === "soin-homme") return false;
    if (INTERDIT_DEPUIS_BEBE.some((prefixe) => b.categorie.startsWith(prefixe))) return false;
    if (b.departement !== "bebe-maman" && b.categorie !== "/creme-solaire/creme-solaire-enfant/") {
      return false;
    }
  }

  if (a.departement !== b.departement && !SILOS_AUTORISES.has(`${a.departement}>${b.departement}`)) {
    return false;
  }

  return true;
}

/* ================================================================== */
/* 4. Signaux                                                          */
/* ================================================================== */

/** Bande de prix : 1 si l'écart est nul, 0 au-delà d'un facteur 3. */
function proximitePrix(a: number, b: number): number {
  if (a <= 0 || b <= 0) return 0;
  const ratio = a > b ? a / b : b / a;
  return ratio >= 3 ? 0 : 1 - (ratio - 1) / 2;
}

/** Popularité : nbSites >= 2 est rare (3,5 % du catalogue) donc très discriminant. */
function popularite(p: Produit): number {
  if (p.nbSites >= 4) return 1;
  if (p.nbSites === 3) return 0.8;
  if (p.nbSites === 2) return 0.6;
  return 0;
}

function memeGamme(a: Produit, b: Produit): number {
  const ta = tokensNom.get(a.slug);
  const tb = tokensNom.get(b.slug);
  if (!ta || !tb) return 0;
  let communs = 0;
  for (const t of ta) if (tb.has(t)) communs++;
  return communs === 0 ? 0 : Math.min(1, communs / 2);
}

function memeBesoin(a: Produit, b: Produit): number {
  if (!a.besoin || !b.besoin) return 0;
  const ba = new Set(a.besoin.split("|"));
  let communs = 0;
  for (const x of b.besoin.split("|")) if (ba.has(x)) communs++;
  return communs === 0 ? 0 : Math.min(1, communs / 2);
}

function complementarite(a: Produit, b: Produit): number {
  const cibles = COMPLEMENTARITE.get(a.categorie);
  if (!cibles) return 0;
  const direct = cibles.get(b.categorie);
  if (direct) return direct / 100;
  // Une sous-catégorie hérite de la complémentarité de sa mère.
  const parent = getNoeud(b.categorie)?.parentUrl;
  if (parent) {
    const via = cibles.get(parent);
    if (via) return (via / 100) * 0.7;
  }
  return 0;
}

/* ================================================================== */
/* 5. Score                                                            */
/* ================================================================== */

interface Profil {
  marque: number;
  gamme: number;
  besoin: number;
  prix: number;
  popularite: number;
  media: number;
}

const P_ROUTINE: Profil = { marque: 10, gamme: 20, besoin: 45, prix: 5, popularite: 6, media: 4 };
const P_ENSEMBLE: Profil = { marque: 12, gamme: 14, besoin: 22, prix: 14, popularite: 20, media: 4 };
const P_GAMME: Profil = { marque: 35, gamme: 40, besoin: 8, prix: 6, popularite: 5, media: 3 };
const P_ALTERNATIVE: Profil = { marque: 0, gamme: 0, besoin: 40, prix: 22, popularite: 25, media: 6 };
const P_CATEGORIE: Profil = { marque: 6, gamme: 10, besoin: 30, prix: 10, popularite: 28, media: 8 };

function score(a: Produit, b: Produit, profil: Profil): number {
  const s1 = a.marqueSlug && a.marqueSlug === b.marqueSlug ? 1 : 0;
  const s2 = memeGamme(a, b);
  const s3 = Math.max(complementarite(a, b), memeBesoin(a, b));
  const s4 = proximitePrix(a.prix, b.prix);
  const s5 = popularite(b);
  const s6 = b.images.length >= 2 ? 1 : 0.5;

  const total =
    profil.marque * s1 +
    profil.gamme * s2 +
    profil.besoin * s3 +
    profil.prix * s4 +
    profil.popularite * s5 +
    profil.media * s6;

  const poids =
    profil.marque + profil.gamme + profil.besoin + profil.prix + profil.popularite + profil.media;

  let note = Math.round((100 * total) / poids);

  // Pénalités : un produit mal classé ou sans marque rassure moins,
  // et sortir du silo a un coût.
  if (getNoeud(b.categorie)?.niveau === 1) note -= 12;
  if (!b.marqueSlug) note -= 8;
  if (a.departement !== b.departement) note -= 15;
  if (a.prix > 0 && b.prix > 2 * a.prix) note -= 6;

  return Math.max(0, Math.min(100, note));
}

/**
 * Re-ranking de diversité, déterministe.
 * Sans lui les listes deviennent monotones — quatre fois la même marque et la
 * même sous-catégorie — et le bloc ne diffuse du jus que vers un seul nœud.
 */
function diversifier(candidats: Reco[], k: number): Reco[] {
  const sortie: Reco[] = [];
  const restants = [...candidats];
  const vusCategorie = new Map<string, number>();
  const vusMarque = new Map<string, number>();

  while (sortie.length < k && restants.length > 0) {
    let meilleur = 0;
    let meilleureValeur = -Infinity;
    for (let i = 0; i < restants.length; i++) {
      const c = restants[i];
      const penalite =
        (vusCategorie.get(c.produit.categorie) ?? 0) * 25 +
        (vusMarque.get(c.produit.marqueSlug) ?? 0) * 12;
      const valeur = c.score - penalite;
      if (valeur > meilleureValeur) {
        meilleureValeur = valeur;
        meilleur = i;
      }
    }
    const choisi = restants.splice(meilleur, 1)[0];
    sortie.push(choisi);
    vusCategorie.set(choisi.produit.categorie, (vusCategorie.get(choisi.produit.categorie) ?? 0) + 1);
    if (choisi.produit.marqueSlug) {
      vusMarque.set(choisi.produit.marqueSlug, (vusMarque.get(choisi.produit.marqueSlug) ?? 0) + 1);
    }
  }
  return sortie;
}

/**
 * Réduit l'ensemble candidat avant de scorer : balayer les 20 262 produits
 * publiables pour chaque bloc de chaque fiche coûterait des minutes de build.
 */
function candidatsRoutine(a: Produit): Produit[] {
  const cibles = COMPLEMENTARITE.get(a.categorie);
  if (!cibles || cibles.size === 0) return parDepartement.get(a.departement) ?? [];
  const liste: Produit[] = [];
  for (const url of cibles.keys()) {
    const directs = parCategorie.get(url);
    if (directs) liste.push(...directs);
  }
  return liste.length > 0 ? liste : (parDepartement.get(a.departement) ?? []);
}

function classer(a: Produit, liste: Produit[], profil: Profil, k: number): Reco[] {
  const notes: Reco[] = [];
  for (const b of liste) {
    if (!passeLesGates(a, b)) continue;
    const s = score(a, b, profil);
    if (s <= 0) continue;
    notes.push({ produit: b, score: s });
  }
  notes.sort((x, y) => y.score - x.score || x.produit.slug.localeCompare(y.produit.slug));
  return diversifier(notes.slice(0, k * 6), k);
}

/* ================================================================== */
/* 6. API publique                                                     */
/* ================================================================== */

/** Étapes suivantes de la routine. Jamais la même catégorie que le produit. */
export function completezVotreRoutine(p: Produit, k = 4): Reco[] {
  const liste = candidatsRoutine(p).filter((b) => b.categorie !== p.categorie);
  return classer(p, liste, P_ROUTINE, k);
}

/** Complément d'achat, à prix contenu par rapport au produit consulté. */
export function souventAchetesEnsemble(p: Produit, k = 4): Reco[] {
  const liste = (parDepartement.get(p.departement) ?? []).filter(
    (b) => b.categorie !== p.categorie && b.prix > 0 && b.prix <= p.prix * 1.2,
  );
  return classer(p, liste, P_ENSEMBLE, k);
}

/** Reste de la gamme. Strictement intra-département. */
export function memeGammeMemeMarque(p: Produit, k = 4): Reco[] {
  if (!p.marqueSlug) return [];
  const liste = (parMarque.get(p.marqueSlug) ?? []).filter((b) => b.departement === p.departement);
  return classer(p, liste, P_GAMME, k);
}

/** Même besoin, autre marque : le bloc qui capte l'intention comparative. */
export function alternatives(p: Produit, k = 4): Reco[] {
  const liste = (parCategorie.get(p.categorie) ?? []).filter((b) => b.marqueSlug !== p.marqueSlug);
  return classer(p, liste, P_ALTERNATIVE, k);
}

/** Sélection mise en avant sur une page de catégorie. */
export function recosDeCategorie(urlCategorie: string, k = 8): Reco[] {
  const liste = parCategorie.get(urlCategorie) ?? [];
  if (liste.length === 0) return [];
  const pivot = liste[0];
  const notes: Reco[] = [];
  for (const b of liste) {
    if (b.images.length === 0) continue;
    notes.push({ produit: b, score: score(pivot, b, P_CATEGORIE) });
  }
  notes.sort((x, y) => y.score - x.score || x.produit.slug.localeCompare(y.produit.slug));
  return diversifier(notes.slice(0, k * 4), k);
}

/** Upsell panier : compléments de routine des articles déjà présents. */
export function upsellPanier(panier: Produit[], k = 3): Reco[] {
  if (panier.length === 0) return [];
  const dejaLa = new Set(panier.map((p) => p.slug));
  const cumul = new Map<string, Reco>();
  for (const p of panier) {
    for (const r of completezVotreRoutine(p, k * 2)) {
      if (dejaLa.has(r.produit.slug)) continue;
      const existant = cumul.get(r.produit.slug);
      if (!existant || r.score > existant.score) cumul.set(r.produit.slug, r);
    }
  }
  const notes = [...cumul.values()].sort(
    (x, y) => y.score - x.score || x.produit.slug.localeCompare(y.produit.slug),
  );
  return diversifier(notes, k);
}

/**
 * Les quatre blocs d'une fiche produit, avec les plafonds de cocon appliqués
 * globalement : au plus 16 liens de recommandation, dont 2 hors département.
 * L'ordre de passage donne la priorité — la routine sert le parcours d'achat,
 * les alternatives ne prennent que ce qui reste sous le plafond.
 */
export function recosFicheProduit(p: Produit): {
  routine: Reco[];
  ensemble: Reco[];
  gamme: Reco[];
  alternatives: Reco[];
} {
  const MAX_LIENS = 16;
  const MAX_HORS_SILO = 2;

  const vus = new Set<string>([p.slug]);
  let total = 0;
  let horsSilo = 0;

  const filtrer = (liste: Reco[]): Reco[] => {
    const gardes: Reco[] = [];
    for (const r of liste) {
      if (total >= MAX_LIENS) break;
      if (vus.has(r.produit.slug)) continue; // pas deux fois le même lien sur la page
      const sort = r.produit.departement !== p.departement;
      if (sort && horsSilo >= MAX_HORS_SILO) continue;
      vus.add(r.produit.slug);
      if (sort) horsSilo++;
      total++;
      gardes.push(r);
    }
    return gardes;
  };

  return {
    routine: filtrer(completezVotreRoutine(p, 4)),
    ensemble: filtrer(souventAchetesEnsemble(p, 4)),
    gamme: filtrer(memeGammeMemeMarque(p, 4)),
    alternatives: filtrer(alternatives(p, 4)),
  };
}

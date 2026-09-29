/**
 * Socle du moteur de descriptions produit.
 *
 * Ce fichier ne contient aucune phrase rédigée : uniquement les outils
 * déterministes (empreinte, tirage, permutation), la lecture des données
 * réelles du catalogue (contenance, prix, volumétrie de la catégorie, INCI)
 * et le calcul du tier défini par SPEC-CONTENU.md §B.1.
 *
 * Séparé de `descriptions.ts` pour que les banques de formulations restent
 * lisibles : le générateur mélange sinon 1 000 phrases et 300 lignes de calcul.
 */

import "server-only";

import { getNoeud, produitsPubliables } from "@/lib/catalogue";
import type { NoeudTaxonomie, Produit } from "@/types/catalogue";

/* ================================================================== */
/* 1. Déterminisme                                                     */
/* ================================================================== */

/**
 * FNV-1a 32 bits. Deux builds successifs doivent produire exactement le même
 * HTML : aucun tirage aléatoire n'est autorisé dans ce moteur, sinon le
 * contenu change à chaque déploiement et Google le lit comme de l'instabilité.
 */
export function empreinte(texte: string): number {
  let h = 2166136261;
  for (let i = 0; i < texte.length; i++) {
    h ^= texte.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

/** Tirage stable dans une banque de formulations. */
export function pioche<T>(banque: readonly T[], cle: string): T {
  return banque[empreinte(cle) % banque.length];
}

/**
 * Générateur congruentiel linéaire amorcé par une clé.
 * Sert aux permutations et aux tirages sans remise, qui doivent rester
 * reproductibles alors qu'ils consomment plusieurs valeurs.
 */
export function suite(cle: string): () => number {
  let etat = empreinte(cle) || 1;
  return () => {
    etat = (Math.imul(etat, 1664525) + 1013904223) >>> 0;
    return etat;
  };
}

/** Mélange de Fisher-Yates amorcé : l'ordre des phrases varie par produit. */
export function ordonner<T>(items: readonly T[], cle: string): T[] {
  const sortie = [...items];
  const suivant = suite(cle);
  for (let i = sortie.length - 1; i > 0; i--) {
    const j = suivant() % (i + 1);
    [sortie[i], sortie[j]] = [sortie[j], sortie[i]];
  }
  return sortie;
}

/** n éléments distincts d'une banque, choisis de façon stable. */
export function piocheN<T>(banque: readonly T[], cle: string, n: number): T[] {
  return ordonner(banque, cle).slice(0, Math.min(n, banque.length));
}

/* ================================================================== */
/* 2. Formatage                                                        */
/* ================================================================== */

export function formatNombre(n: number): string {
  return n.toLocaleString("fr-DZ");
}

export function formatDA(prix: number): string {
  return `${formatNombre(prix)} DA`;
}

/** Deux décimales sous 10, une seule au-delà : « 2,20 DA », « 14,5 DA ». */
export function formatDecimal(valeur: number): string {
  const decimales = valeur < 10 ? 2 : 1;
  return valeur.toFixed(decimales).replace(".", ",").replace(/,0+$/, "");
}

/** « de la crème », « du sérum », « de l'huile ». */
export function contracte(type: string, genre: Genre): string {
  if (/^[aàâäeéèêëiîïoôöuùûüy]/i.test(type)) return `de l'${type}`;
  return genre === "f" ? `de la ${type}` : `du ${type}`;
}

export function majuscule(texte: string): string {
  return texte.charAt(0).toUpperCase() + texte.slice(1);
}

export function enumerer(items: string[]): string {
  if (items.length === 0) return "";
  if (items.length === 1) return items[0];
  return `${items.slice(0, -1).join(", ")} et ${items[items.length - 1]}`;
}

/* ================================================================== */
/* 3. Genre grammatical du type de produit                             */
/* ================================================================== */

export type Genre = "m" | "f";

/**
 * Le libellé du type vient de la taxonomie (134 valeurs), son genre décide de
 * tous les accords du texte. Une table de premiers mots suffit : les libellés
 * sont des syntagmes nominaux dont la tête est toujours en première position.
 */
const TETES_FEMININES = new Set([
  "creme",
  "crème",
  "eau",
  "huile",
  "lotion",
  "mousse",
  "poudre",
  "palette",
  "brume",
  "brosse",
  "protection",
  "coloration",
  "base",
  "epilation",
  "épilation",
  "hygiene",
  "hygiène",
  "lingette",
  "bb",
  "cc",
  "solution",
  "cire",
  "essence",
  "ampoule",
  "teinture",
  "trousse",
]);

export function genreDuType(type: string): Genre {
  const tete = type
    .trim()
    .split(/[\s-]/)[0]
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "");
  return TETES_FEMININES.has(tete) ? "f" : "m";
}

/* ================================================================== */
/* 4. Contenance                                                       */
/* ================================================================== */

export interface Volume {
  /** Quantité totale, unité comprise dans `unite`. Ex. 6×10 ml -> 60. */
  total: number;
  /** « ml » ou « g ». Les litres et kilos sont ramenés à ml et g. */
  unite: "ml" | "g";
  /** Nombre d'unités du conditionnement. 1 sauf multipack. */
  lots: number;
}

/**
 * Lit « 500ml », « 6x10ml », « 1L », « 50 g ».
 * Renvoie null si la chaîne ne porte pas de quantité exploitable : mieux vaut
 * supprimer une phrase que d'écrire un coût par millilitre faux.
 */
export function lireVolume(contenance: string): Volume | null {
  if (!contenance) return null;
  const nettoye = contenance.toLowerCase().replace(",", ".");
  const m = nettoye.match(
    /(?:(\d+)\s*[x*]\s*)?(\d+(?:\.\d+)?)\s*(ml|cl|l|g|gr|kg|mg)\b/,
  );
  if (!m) return null;

  const lots = m[1] ? Number(m[1]) : 1;
  const valeur = Number(m[2]);
  if (!Number.isFinite(valeur) || valeur <= 0 || lots <= 0) return null;

  let total = valeur * lots;
  let unite: "ml" | "g";
  switch (m[3]) {
    case "cl":
      total *= 10;
      unite = "ml";
      break;
    case "l":
      total *= 1000;
      unite = "ml";
      break;
    case "kg":
      total *= 1000;
      unite = "g";
      break;
    case "mg":
      total /= 1000;
      unite = "g";
      break;
    case "g":
    case "gr":
      unite = "g";
      break;
    default:
      unite = "ml";
  }
  if (total < 1 || total > 20000) return null;
  return { total, unite, lots };
}

/** Bandes de format. Décrit le chiffre, n'invente aucune durée d'utilisation. */
export function bandeFormat(v: Volume): "nomade" | "courant" | "grand" | "familial" {
  if (v.total <= 30) return "nomade";
  if (v.total <= 120) return "courant";
  if (v.total <= 300) return "grand";
  return "familial";
}

/* ================================================================== */
/* 5. Agrégats du catalogue                                            */
/* ================================================================== */

function mediane(valeurs: number[]): number {
  if (valeurs.length === 0) return 0;
  const tries = [...valeurs].sort((a, b) => a - b);
  return tries[Math.floor(tries.length / 2)];
}

interface Agregats {
  parCategorie: Map<string, { nb: number; mediane: number }>;
  parMarque: Map<string, { nb: number; mediane: number }>;
  top60: Set<string>;
  top200: Set<string>;
}

const agregats: Agregats = (() => {
  const prixCategorie = new Map<string, number[]>();
  const prixMarque = new Map<string, number[]>();

  for (const p of produitsPubliables) {
    const listeCat = prixCategorie.get(p.categorie);
    if (listeCat) listeCat.push(p.prix);
    else prixCategorie.set(p.categorie, [p.prix]);

    if (p.marqueSlug) {
      const listeMarque = prixMarque.get(p.marqueSlug);
      if (listeMarque) listeMarque.push(p.prix);
      else prixMarque.set(p.marqueSlug, [p.prix]);
    }
  }

  const parCategorie = new Map<string, { nb: number; mediane: number }>();
  for (const [url, prix] of prixCategorie) {
    parCategorie.set(url, { nb: prix.length, mediane: mediane(prix) });
  }

  const parMarque = new Map<string, { nb: number; mediane: number }>();
  for (const [slug, prix] of prixMarque) {
    parMarque.set(slug, { nb: prix.length, mediane: mediane(prix) });
  }

  const classement = [...parMarque.entries()]
    .sort((a, b) => b[1].nb - a[1].nb || a[0].localeCompare(b[0]))
    .map(([slug]) => slug);

  return {
    parCategorie,
    parMarque,
    top60: new Set(classement.slice(0, 60)),
    top200: new Set(classement.slice(0, 200)),
  };
})();

export function volumeCategorie(url: string): number {
  return agregats.parCategorie.get(url)?.nb ?? 0;
}

export function medianeCategorie(url: string): number {
  return agregats.parCategorie.get(url)?.mediane ?? 0;
}

export function volumeMarque(slug: string): number {
  return agregats.parMarque.get(slug)?.nb ?? 0;
}

export function medianeMarque(slug: string): number {
  return agregats.parMarque.get(slug)?.mediane ?? 0;
}

/* ================================================================== */
/* 6. Tiering (SPEC-CONTENU.md §B.1)                                   */
/* ================================================================== */

export type Tier = 1 | 2 | 3;

/** Score brut. Toutes les composantes sont lues dans la donnée, aucune estimation. */
function score(p: Produit): number {
  let s = 0;

  if (p.marqueSlug && agregats.top60.has(p.marqueSlug)) s += 3;
  else if (p.marqueSlug && agregats.top200.has(p.marqueSlug)) s += 2;
  else if (p.marque) s += 1;

  s += p.images.length >= 2 ? 2 : 1;
  if (p.inci) s += 2;
  if (p.nbSites >= 2) s += 1;

  const nbCat = volumeCategorie(p.categorie);
  if (nbCat >= 300) s += 2;
  else if (nbCat >= 100) s += 1;

  if (p.contenance) s += 1;
  if (p.prix >= 3000) s += 1;

  return s;
}

/**
 * Tiers définitifs, plafond et plancher appliqués par catégorie.
 *
 * Le plafond (25 % de Tier 1 par nœud) évite de concentrer 300 textes longs
 * et forcément voisins sur la même sous-catégorie ; le plancher (5 fiches
 * riches minimum) évite qu'un nœud entier n'ait que des fiches courtes, ce
 * qui le rendrait incapable de se positionner.
 */
const tiers: Map<string, Tier> = (() => {
  const table = new Map<string, Tier>();
  const parCategorie = new Map<string, Produit[]>();

  for (const p of produitsPubliables) {
    const liste = parCategorie.get(p.categorie);
    if (liste) liste.push(p);
    else parCategorie.set(p.categorie, [p]);
  }

  for (const [, liste] of parCategorie) {
    const classes = [...liste].sort(
      (a, b) => score(b) - score(a) || a.slug.localeCompare(b.slug),
    );
    const plafond = Math.max(5, Math.floor(classes.length * 0.25));

    classes.forEach((p, rang) => {
      const s = score(p);
      let tier: Tier = s >= 8 ? 1 : s >= 6 ? 2 : 3;
      if (tier === 1 && rang >= plafond) tier = 2;
      if (rang < 5) tier = 1;
      table.set(p.slug, tier);
    });
  }
  return table;
})();

export function tierDuProduit(p: Produit): Tier {
  return tiers.get(p.slug) ?? 3;
}

/**
 * Fiches autorisées à porter le bloc « la marque ».
 *
 * Plafonné à 40 fiches par marque : L'Oréal Paris compte plus de 900
 * références, un paragraphe de marque répété 900 fois serait le premier
 * motif de near-duplicate du site.
 */
const porteursBlocMarque: Set<string> = (() => {
  const parMarque = new Map<string, Produit[]>();
  for (const p of produitsPubliables) {
    if (!p.marqueSlug || tierDuProduit(p) !== 1) continue;
    const liste = parMarque.get(p.marqueSlug);
    if (liste) liste.push(p);
    else parMarque.set(p.marqueSlug, [p]);
  }

  const retenus = new Set<string>();
  for (const [, liste] of parMarque) {
    liste
      .sort((a, b) => score(b) - score(a) || a.slug.localeCompare(b.slug))
      .slice(0, 40)
      .forEach((p) => retenus.add(p.slug));
  }
  return retenus;
})();

export function porteBlocMarque(p: Produit): boolean {
  return porteursBlocMarque.has(p.slug);
}

/* ================================================================== */
/* 7. INCI                                                             */
/* ================================================================== */

export interface ActifCite {
  /** Nom lisible, nom INCI conservé quand il est le nom d'usage. */
  nom: string;
  /** Fonction cosmétique, 10 à 18 mots, sans promesse thérapeutique. */
  role: string;
  /** Rang dans la liste INCI. L'ordre INCI est un ordre de concentration. */
  position: number;
}

interface EntreeActif {
  cle: string;
  nom: string;
  role: string;
}

/**
 * Actifs identifiables. La liste est volontairement courte et cosmétique :
 * on ne cite jamais un conservateur ni un solvant comme un actif, et on
 * n'attribue jamais d'effet thérapeutique à un ingrédient.
 */
const ACTIFS: EntreeActif[] = [
  { cle: "niacinamide", nom: "Niacinamide (vitamine B3)", role: "contribue à réguler la production de sébum et à uniformiser le teint" },
  { cle: "sodium hyaluronate", nom: "Hyaluronate de sodium (acide hyaluronique)", role: "retient l'eau dans les couches superficielles de l'épiderme" },
  { cle: "hyaluronic acid", nom: "Acide hyaluronique", role: "retient l'eau dans les couches superficielles de l'épiderme" },
  { cle: "glycerin", nom: "Glycérine", role: "humectant qui attire l'eau vers la surface de la peau et limite la déshydratation" },
  { cle: "panthenol", nom: "Panthénol (provitamine B5)", role: "apaise et limite la sensation d'inconfort après le nettoyage" },
  { cle: "tocopheryl acetate", nom: "Acétate de tocophérol (vitamine E)", role: "antioxydant qui protège les corps gras de la formule de l'oxydation" },
  { cle: "tocopherol", nom: "Tocophérol (vitamine E)", role: "antioxydant qui protège les corps gras de la formule de l'oxydation" },
  { cle: "ascorbic acid", nom: "Acide ascorbique (vitamine C)", role: "actif antioxydant, employé pour l'éclat et l'uniformité du teint" },
  { cle: "ascorbyl glucoside", nom: "Ascorbyl glucoside (vitamine C stabilisée)", role: "forme stable de vitamine C, employée pour l'éclat du teint" },
  { cle: "salicylic acid", nom: "Acide salicylique (BHA)", role: "exfoliant affine par lequel les pores se désincrustent" },
  { cle: "glycolic acid", nom: "Acide glycolique (AHA)", role: "exfoliant de surface qui aide à lisser le grain de peau" },
  { cle: "lactic acid", nom: "Acide lactique (AHA)", role: "exfoliant doux, mieux toléré que l'acide glycolique" },
  { cle: "retinol", nom: "Rétinol", role: "dérivé de vitamine A, utilisé sur les signes visibles de l'âge" },
  { cle: "retinyl", nom: "Ester de rétinol", role: "dérivé de vitamine A à libération progressive" },
  { cle: "bakuchiol", nom: "Bakuchiol", role: "actif végétal employé comme alternative au rétinol" },
  { cle: "butyrospermum parkii", nom: "Beurre de karité", role: "corps gras nourrissant qui limite la perte en eau" },
  { cle: "shea butter", nom: "Beurre de karité", role: "corps gras nourrissant qui limite la perte en eau" },
  { cle: "theobroma cacao", nom: "Beurre de cacao", role: "corps gras occlusif, fréquent dans les baumes" },
  { cle: "argania spinosa", nom: "Huile d'argan", role: "huile végétale riche en acides gras insaturés" },
  { cle: "simmondsia chinensis", nom: "Huile de jojoba", role: "cire liquide dont la composition est proche du sébum" },
  { cle: "prunus amygdalus dulcis", nom: "Huile d'amande douce", role: "huile végétale émolliente, tolérée par les peaux réactives" },
  { cle: "cocos nucifera", nom: "Huile de coco", role: "corps gras occlusif, utilisé sur les longueurs et le corps" },
  { cle: "olea europaea", nom: "Huile d'olive", role: "huile végétale nourrissante riche en acide oléique" },
  { cle: "persea gratissima", nom: "Huile d'avocat", role: "huile végétale épaisse, employée sur les zones sèches" },
  { cle: "helianthus annuus", nom: "Huile de tournesol", role: "huile légère riche en acide linoléique" },
  { cle: "ricinus communis", nom: "Huile de ricin", role: "huile épaisse, traditionnellement appliquée sur cils et cheveux" },
  { cle: "rosa canina", nom: "Huile de rose musquée", role: "huile végétale employée sur les marques et le grain de peau" },
  { cle: "rosa moschata", nom: "Huile de rose musquée", role: "huile végétale employée sur les marques et le grain de peau" },
  { cle: "aloe barbadensis", nom: "Aloe vera", role: "gel végétal hydratant et rafraîchissant" },
  { cle: "centella asiatica", nom: "Centella asiatica", role: "extrait végétal apaisant, courant dans les formules coréennes" },
  { cle: "madecassoside", nom: "Madécassoside", role: "molécule issue de la centella, employée sur les rougeurs" },
  { cle: "allantoin", nom: "Allantoïne", role: "agent apaisant, réduit la sensation d'inconfort" },
  { cle: "bisabolol", nom: "Bisabolol", role: "actif apaisant issu de la camomille" },
  { cle: "ceramide", nom: "Céramides", role: "lipides qui participent à la cohésion de la barrière cutanée" },
  { cle: "squalane", nom: "Squalane", role: "corps gras léger, très bien toléré, non comédogène" },
  { cle: "urea", nom: "Urée", role: "hydratant et kératolytique doux, courant sur les zones épaisses" },
  { cle: "zinc oxide", nom: "Oxyde de zinc", role: "filtre solaire minéral à large spectre" },
  { cle: "titanium dioxide", nom: "Dioxyde de titane", role: "filtre solaire minéral, souvent associé à l'oxyde de zinc" },
  { cle: "octocrylene", nom: "Octocrylène", role: "filtre solaire organique stabilisant les autres filtres" },
  { cle: "homosalate", nom: "Homosalate", role: "filtre solaire organique des UVB" },
  { cle: "ethylhexyl methoxycinnamate", nom: "Ethylhexyl methoxycinnamate", role: "filtre solaire organique des UVB" },
  { cle: "butyl methoxydibenzoylmethane", nom: "Avobenzone", role: "filtre solaire organique des UVA" },
  { cle: "bis-ethylhexyloxyphenol", nom: "Bemotrizinol", role: "filtre solaire organique large spectre et photostable" },
  { cle: "diethylamino hydroxybenzoyl", nom: "Diethylamino hydroxybenzoyl hexyl benzoate", role: "filtre solaire organique des UVA longs" },
  { cle: "keratin", nom: "Kératine", role: "protéine capillaire, utilisée sur les fibres fragilisées" },
  { cle: "collagen", nom: "Collagène", role: "protéine hydrolysée employée pour son effet filmogène" },
  { cle: "caffeine", nom: "Caféine", role: "actif employé sur le contour des yeux et les zones infiltrées" },
  { cle: "adenosine", nom: "Adénosine", role: "actif employé sur les rides d'expression" },
  { cle: "arbutin", nom: "Arbutine", role: "actif employé sur l'uniformité du teint" },
  { cle: "kojic", nom: "Acide kojique", role: "actif employé sur l'uniformité du teint" },
  { cle: "azelaic", nom: "Acide azélaïque", role: "actif employé sur les imperfections et les rougeurs" },
  { cle: "tranexamic", nom: "Acide tranexamique", role: "actif employé sur les marques pigmentaires" },
  { cle: "charcoal", nom: "Charbon", role: "poudre absorbante utilisée dans les masques et nettoyants" },
  { cle: "kaolin", nom: "Kaolin", role: "argile blanche absorbante, courante dans les masques" },
  { cle: "bentonite", nom: "Bentonite", role: "argile absorbante utilisée sur les peaux grasses" },
  { cle: "zinc pca", nom: "Zinc PCA", role: "sel de zinc employé pour réguler le sébum" },
  { cle: "biotin", nom: "Biotine", role: "vitamine B8, présente dans les soins capillaires" },
  { cle: "camellia sinensis", nom: "Thé vert", role: "extrait antioxydant riche en polyphénols" },
  { cle: "melaleuca alternifolia", nom: "Huile essentielle de tea tree", role: "extrait employé sur les peaux à imperfections" },
  { cle: "lavandula", nom: "Lavande", role: "extrait aromatique employé pour son odeur et son effet apaisant" },
  { cle: "rosmarinus", nom: "Romarin", role: "extrait aromatique antioxydant" },
  { cle: "mentha piperita", nom: "Menthe poivrée", role: "extrait rafraîchissant, procure un effet de fraîcheur immédiat" },
  { cle: "propolis", nom: "Propolis", role: "extrait de ruche employé pour son effet apaisant" },
  { cle: "snail secretion", nom: "Filtrat de bave d'escargot", role: "ingrédient signature de la cosmétique coréenne, employé pour l'hydratation" },
  { cle: "glycyrrhiza glabra", nom: "Réglisse", role: "extrait employé sur les rougeurs et l'uniformité du teint" },
  { cle: "avena sativa", nom: "Avoine", role: "extrait apaisant, courant dans les soins pour peaux réactives" },
  { cle: "chamomilla", nom: "Camomille", role: "extrait apaisant, employé sur les peaux sensibles" },
  { cle: "calendula", nom: "Calendula", role: "extrait de souci, employé sur les peaux fragiles" },
  { cle: "cera alba", nom: "Cire d'abeille", role: "agent de texture qui structure baumes et sticks" },
  { cle: "lanolin", nom: "Lanoline", role: "corps gras occlusif employé sur les zones très sèches" },
  { cle: "petrolatum", nom: "Vaseline", role: "occlusif qui limite fortement la perte en eau" },
  { cle: "sodium fluoride", nom: "Fluorure de sodium", role: "source de fluor des dentifrices" },
  { cle: "sodium monofluorophosphate", nom: "Monofluorophosphate de sodium", role: "source de fluor des dentifrices" },
  { cle: "xylitol", nom: "Xylitol", role: "polyol utilisé en hygiène bucco-dentaire" },
  { cle: "silica", nom: "Silice", role: "poudre minérale au fini mat" },
  { cle: "cocamidopropyl betaine", nom: "Cocamidopropyl bétaïne", role: "tensioactif doux issu de l'huile de coco" },
  { cle: "coco-glucoside", nom: "Coco-glucoside", role: "tensioactif doux d'origine végétale" },
  { cle: "sodium laureth sulfate", nom: "Sodium laureth sulfate", role: "tensioactif moussant, à l'origine de la mousse abondante" },
  { cle: "cetearyl alcohol", nom: "Alcool cétéarylique", role: "alcool gras émollient, sans effet asséchant" },
  { cle: "dimethicone", nom: "Diméthicone", role: "silicone filmogène qui lisse la surface et facilite l'étalement" },
  { cle: "mica", nom: "Mica", role: "minéral nacré qui apporte la réflexion lumineuse" },
  { cle: "iron oxides", nom: "Oxydes de fer", role: "pigments minéraux qui portent la teinte" },
];

/** Ingrédients recherchés d'abord : ceux qui portent une vraie information. */
const ACTIFS_TRIES = [...ACTIFS].sort((a, b) => b.cle.length - a.cle.length);

export interface LectureInci {
  actifs: ActifCite[];
  /** Nombre total d'ingrédients déclarés. */
  total: number;
}

/**
 * Extrait 3 actifs identifiables au maximum, dans l'ordre de la liste INCI.
 * Rien n'est déduit : si aucun ingrédient du dictionnaire n'apparaît, on
 * renvoie une liste vide et le bloc composition disparaît.
 */
export function lireInci(inci: string | undefined): LectureInci {
  if (!inci) return { actifs: [], total: 0 };

  const jetons = inci
    .split(/[,;•\n]/)
    .map((t) => t.trim())
    .filter((t) => t.length > 1);

  const actifs: ActifCite[] = [];
  const vus = new Set<string>();

  jetons.forEach((jeton, index) => {
    if (actifs.length >= 3) return;
    const minuscule = jeton.toLowerCase();
    const trouve = ACTIFS_TRIES.find((a) => minuscule.includes(a.cle));
    if (!trouve || vus.has(trouve.nom)) return;
    vus.add(trouve.nom);
    actifs.push({ nom: trouve.nom, role: trouve.role, position: index + 1 });
  });

  return { actifs, total: jetons.length };
}

/* ================================================================== */
/* 8. Libellés des attributs, en prose                                 */
/* ================================================================== */

/** Formes utilisables dans une phrase, pas des étiquettes de tableau. */
export const BESOIN_PROSE: Record<string, string> = {
  hydratation: "l'hydratation",
  eclat: "l'éclat du teint",
  matifiant: "l'effet matifiant",
  "anti-taches": "les taches pigmentaires",
  "anti-acne": "les imperfections",
  "anti-chute": "la chute des cheveux",
  "anti-age": "les signes visibles de l'âge",
  raffermissant: "la fermeté",
  apaisant: "l'apaisement des zones réactives",
  cicatrisant: "la réparation de la peau",
};

export const PEAU_PROSE: Record<string, string> = {
  grasse: "les peaux grasses",
  sensible: "les peaux sensibles",
  seche: "les peaux sèches",
  acneique: "les peaux à tendance acnéique",
  normale: "les peaux normales",
  mixte: "les peaux mixtes",
  atopique: "les peaux atopiques",
};

export const CHEVEUX_PROSE: Record<string, string> = {
  sec: "les cheveux secs",
  abime: "les cheveux abîmés",
  boucle: "les cheveux bouclés",
  colore: "les cheveux colorés",
  gras: "les cheveux gras",
  crepu: "les cheveux crépus",
  fin: "les cheveux fins",
};

export const TEXTURE_PROSE: Record<string, string> = {
  creme: "crème",
  gel: "gel",
  huile: "huile",
  lait: "lait",
  serum: "sérum",
  spray: "spray",
  baume: "baume",
  stick: "stick",
  mousse: "mousse",
  poudre: "poudre",
  lotion: "lotion",
};

export const ZONE_PROSE: Record<string, string> = {
  visage: "le visage",
  corps: "le corps",
  cheveux: "les cheveux",
  levres: "les lèvres",
  yeux: "le contour des yeux",
  mains: "les mains",
  pieds: "les pieds",
  ongles: "les ongles",
};

export const SPF_PROSE: Record<string, string> = {
  "spf50+": "SPF 50+",
  spf50: "SPF 50",
  spf30: "SPF 30",
  spf25: "SPF 25",
  spf20: "SPF 20",
  spf15: "SPF 15",
};

export const FORMAT_PROSE: Record<string, string> = {
  coffret: "coffret",
  voyage: "format voyage",
  recharge: "recharge",
};

/** Première valeur d'un champ multivalué, traduite. */
export function premiere(
  brut: string | undefined,
  table: Record<string, string>,
): string {
  if (!brut) return "";
  for (const v of brut.split("|")) {
    const t = table[v.trim()];
    if (t) return t;
  }
  return "";
}

/** Toutes les valeurs traduites d'un champ multivalué. */
export function toutes(
  brut: string | undefined,
  table: Record<string, string>,
): string[] {
  if (!brut) return [];
  return brut
    .split("|")
    .map((v) => table[v.trim()])
    .filter((v): v is string => Boolean(v));
}

/* ================================================================== */
/* 9. Type de produit lisible                                          */
/* ================================================================== */

/**
 * Certains libellés de la taxonomie sont des intitulés de rayon, pas des noms
 * de produit : « Coton et lingette » ne se met pas au singulier dans une
 * phrase. Ces nœuds portent donc un libellé de prose dédié.
 */
const TYPE_PAR_NOEUD: Record<string, string> = {
  "/soin-visage/": "soin du visage",
  "/soin-cheveux/": "soin capillaire",
  "/soin-corps/": "soin du corps",
  "/maquillage/": "produit de maquillage",
  "/hygiene-bain/": "produit d'hygiène",
  "/bebe-maman/": "soin pour bébé",
  "/soin-homme/": "soin pour homme",
  "/parfum/": "parfum",
  "/creme-solaire/": "crème solaire",
  "/soin-visage/peau-a-problemes/": "soin pour peau à problèmes",
  "/soin-visage/soin-levres/": "soin des lèvres",
  "/soin-visage/contour-des-yeux/soin-cernes-poches-yeux/": "soin contour des yeux",
  "/soin-corps/soin-minceur-vergetures/": "soin minceur",
  "/hygiene-bain/coton-lingette/": "coton de soin",
  "/hygiene-bain/hygiene-bucco-dentaire/": "produit d'hygiène bucco-dentaire",
  "/maquillage/maquillage-teint/enlumineur-contouring/": "enlumineur",
  "/maquillage/maquillage-teint/bb-cc-creme/": "BB crème",
  "/maquillage/maquillage-teint/": "produit de teint",
  "/maquillage/maquillage-yeux/": "maquillage des yeux",
  "/maquillage/maquillage-levres/": "maquillage des lèvres",
  "/bebe-maman/soin-toilette-bebe/": "soin de toilette pour bébé",
  "/bebe-maman/soin-maman-grossesse/": "soin maman",
  "/bebe-maman/accessoire-bebe/": "accessoire pour bébé",
  "/bebe-maman/change-bebe/": "produit de change",
  "/creme-solaire/creme-solaire-visage/ecran-solaire-peau-sensible/": "écran solaire",
  "/creme-solaire/creme-solaire-visage/ecran-solaire-peau-grasse/": "écran solaire",
  "/soin-cheveux/appareil-coiffant/": "appareil coiffant",
  "/hygiene-bain/protection-hygienique/": "protection hygiénique",
  "/parfum/coffret-parfum/": "coffret de parfum",
};

/** Minuscule sur la première lettre uniquement : « Sérum vitamine C » garde son C. */
function debutMinuscule(texte: string): string {
  return texte.charAt(0).toLowerCase() + texte.slice(1);
}

export function typeDuProduit(noeud: NoeudTaxonomie | undefined, url: string): string {
  const dedie = TYPE_PAR_NOEUD[url];
  if (dedie) return dedie;
  return noeud ? debutMinuscule(noeud.nom) : "produit cosmétique";
}

/* ================================================================== */
/* 10. Contexte de rédaction                                           */
/* ================================================================== */

export interface Contexte {
  p: Produit;
  noeud?: NoeudTaxonomie;
  /** Libellé du type de produit, utilisable tel quel dans une phrase. */
  type: string;
  typeCap: string;
  genre: Genre;
  /** « ce » / « cette ». */
  dem: string;
  /** « du » / « de la » / « de l' » suivi du type. */
  duType: string;
  /** « un » / « une ». */
  det: string;
  /** Marque d'accord des participes : "" ou "e". */
  accord: string;
  marque: string;
  contenance: string;
  volume: Volume | null;
  prix: number;
  /** Coût par unité de contenance, null si non calculable. */
  coutUnitaire: number | null;
  nbCategorie: number;
  medianeCategorie: number;
  nbMarque: number;
  medianeMarque: number;
  inci: LectureInci;
  tier: Tier;
  /** Empreinte du slug, réutilisée pour tous les tirages de la fiche. */
  h: number;
}

export function contexte(p: Produit): Contexte {
  const noeud = getNoeud(p.categorie);
  const type = typeDuProduit(noeud, p.categorie);
  const genre = genreDuType(type);
  const volume = lireVolume(p.contenance);

  return {
    p,
    noeud,
    type,
    typeCap: majuscule(type),
    genre,
    dem: genre === "f" ? "cette" : "ce",
    duType: contracte(type, genre),
    det: genre === "f" ? "une" : "un",
    accord: genre === "f" ? "e" : "",
    marque: p.marque,
    contenance: p.contenance,
    volume,
    prix: p.prix,
    coutUnitaire: volume && volume.total >= 5 ? p.prix / volume.total : null,
    nbCategorie: volumeCategorie(p.categorie),
    medianeCategorie: medianeCategorie(p.categorie),
    nbMarque: p.marqueSlug ? volumeMarque(p.marqueSlug) : 0,
    medianeMarque: p.marqueSlug ? medianeMarque(p.marqueSlug) : 0,
    inci: lireInci(p.inci),
    tier: tierDuProduit(p),
    h: empreinte(p.slug),
  };
}

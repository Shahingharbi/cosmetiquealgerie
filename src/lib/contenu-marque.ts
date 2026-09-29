/**
 * Contenu éditorial des pages marque.
 *
 * 431 pages, une par marque ayant au moins un produit publiable. Le texte est
 * composé depuis ce que la donnée permet d'affirmer : volume réel, rayons
 * couverts, gammes détectées dans les noms, positionnement de prix constaté.
 *
 * Rien n'est inventé. On n'écrit ni date de fondation, ni pays d'origine, ni
 * histoire de marque : ces informations ne sont pas dans le catalogue, et les
 * fabriquer serait la meilleure façon de perdre la confiance qu'on cherche
 * précisément à installer.
 *
 * Le bloc anti-contrefaçon est obligatoire — c'est la première objection du
 * marché algérien — mais sa formulation varie d'une marque à l'autre pour ne
 * pas produire 431 pages au paragraphe identique.
 */

import "server-only";

import { getNoeud, getMarque, produitsDeLaMarque, taxonomie } from "@/lib/catalogue";
import type { Produit } from "@/types/catalogue";

export interface ContenuMarque {
  intro: string[];
  gammes: { titre: string; paragraphes: string[] } | undefined;
  authenticite: { titre: string; paragraphes: string[] };
  faq: { question: string; reponse: string }[];
  nbMots: number;
}

/* ------------------------------------------------------------------ */
/* Variation déterministe                                              */
/* ------------------------------------------------------------------ */

function empreinte(s: string): number {
  let h = 2166136261;
  for (let i = 0; i < s.length; i++) {
    h ^= s.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return Math.abs(h);
}

function choisir<T>(liste: T[], graine: string, decalage = 0): T {
  return liste[(empreinte(graine) + decalage) % liste.length];
}

function enumerer(mots: string[]): string {
  if (mots.length === 0) return "";
  if (mots.length === 1) return mots[0];
  return `${mots.slice(0, -1).join(", ")} et ${mots[mots.length - 1]}`;
}

function prixFr(n: number): string {
  return `${n.toLocaleString("fr-DZ")} DA`;
}

/* ------------------------------------------------------------------ */
/* Lecture des données                                                 */
/* ------------------------------------------------------------------ */

const MOTS_VIDES = new Set([
  "pour", "avec", "sans", "creme", "gel", "huile", "serum", "lait", "eau", "soin",
  "spray", "stick", "masque", "shampoing", "baume", "lotion", "mousse", "poudre",
  "visage", "corps", "cheveux", "peau", "peaux", "levres", "yeux", "mains",
  "anti", "ultra", "extra", "new", "the", "and", "les", "des", "aux",
]);

/**
 * Une gamme est un mot récurrent dans les noms d'une marque, qui n'est ni un
 * type de produit ni un mot outil : Effaclar, Sensibio, Cicaplast. Le seuil de
 * trois occurrences évite de prendre un adjectif isolé pour une ligne produit.
 */
function detecterGammes(produits: Produit[], marque: string): string[] {
  const motsMarque = new Set(
    marque
      .toLowerCase()
      .normalize("NFD")
      .replace(/\p{Diacritic}/gu, "")
      .split(/[^a-z0-9]+/)
      .filter(Boolean),
  );

  const compte = new Map<string, number>();
  for (const p of produits) {
    const vus = new Set<string>();
    for (const mot of p.nom
      .toLowerCase()
      .normalize("NFD")
      .replace(/\p{Diacritic}/gu, "")
      .split(/[^a-z0-9]+/)) {
      if (mot.length < 4 || /^\d+$/.test(mot)) continue;
      // Une contenance revient sur des dizaines de produits d'une même marque :
      // sans ce filtre, « 40ml » ressort comme une ligne de produits.
      if (/^\d+(ml|g|gr|cl|l|kg|mg|pcs|pieces)$/.test(mot)) continue;
      if (/^\d/.test(mot)) continue;
      if (motsMarque.has(mot) || MOTS_VIDES.has(mot) || vus.has(mot)) continue;
      vus.add(mot);
      compte.set(mot, (compte.get(mot) ?? 0) + 1);
    }
  }

  return [...compte.entries()]
    .filter(([, n]) => n >= 3)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 5)
    .map(([m]) => m.charAt(0).toUpperCase() + m.slice(1));
}

interface Profil {
  nom: string;
  slug: string;
  produits: Produit[];
  nb: number;
  rayons: { nom: string; url: string; nb: number }[];
  gammes: string[];
  prixMin: number;
  prixMax: number;
  prixMedian: number;
  multiSites: number;
}

function profiler(slug: string): Profil | undefined {
  const marque = getMarque(slug);
  if (!marque) return undefined;
  const produits = produitsDeLaMarque(slug);
  if (produits.length === 0) return undefined;

  const prix = produits.map((p) => p.prix).filter((n) => n > 0).sort((a, b) => a - b);

  const parRayon = new Map<string, number>();
  for (const p of produits) {
    parRayon.set(p.departement, (parRayon.get(p.departement) ?? 0) + 1);
  }
  const rayons = [...parRayon.entries()]
    .map(([dep, nb]) => {
      const d = taxonomie.find((t) => t.slug === dep);
      return { nom: d?.nom ?? dep, url: d?.url ?? `/${dep}/`, nb };
    })
    .sort((a, b) => b.nb - a.nb);

  return {
    nom: marque.nom,
    slug,
    produits,
    nb: produits.length,
    rayons,
    gammes: detecterGammes(produits, marque.nom),
    prixMin: prix[0] ?? 0,
    prixMax: prix[prix.length - 1] ?? 0,
    prixMedian: prix[Math.floor(prix.length / 2)] ?? 0,
    multiSites: produits.filter((p) => p.nbSites >= 2).length,
  };
}

/* ------------------------------------------------------------------ */
/* Rédaction                                                           */
/* ------------------------------------------------------------------ */

/**
 * Ouvertures de page marque.
 *
 * Elles annonçaient le nombre de références de la maison. Le propriétaire a
 * fait retirer ces compteurs du site : ils occupent la place d'un argument
 * sans rien dire de ce que l'on va trouver, et ils se lisent comme du texte
 * produit par une machine. Ce qui reste nomme la maison et ce qu'elle fait.
 */
const OUVERTURES = [
  (m: string) => `Les produits ${m} référencés ici sont disponibles en Algérie, avec leur contenance et leur prix en dinars.`,
  (m: string) => `${m} fait partie des maisons que nous suivons pour le marché algérien.`,
  (m: string) => `Voici la sélection ${m} que nous tenons en Algérie, présentée telle quelle : marque, contenance, prix.`,
  (m: string) => `${m} est référencée sur ce site, avec pour chaque produit son format exact et son prix en dinars.`,
];

const ANTICONTREFACON = [
  (m: string) =>
    `La contrefaçon touche en priorité les marques les plus demandées, et ${m} en fait partie. Nos références proviennent de pharmacies, parapharmacies et parfumeries identifiées, jamais d'import parallèle.`,
  (m: string) =>
    `Sur ${m}, la question de l'authenticité se pose systématiquement. Nous nous approvisionnons auprès de circuits établis et chaque fiche indique la contenance exacte, ce qui vous permet de recouper à la réception.`,
  (m: string) =>
    `Un produit ${m} vendu très en dessous du marché doit alerter. Nos approvisionnements passent par des circuits identifiés, et nous publions la contenance telle qu'elle figure sur l'emballage.`,
  (m: string) =>
    `Nous ne référençons ${m} que via des circuits traçables — pharmacie, parapharmacie, parfumerie. C'est la seule garantie sérieuse contre la contrefaçon sur ce type de marque.`,
];

const VERIFICATION = [
  "À la réception, trois éléments se vérifient en quelques secondes : la contenance imprimée, la qualité d'impression de l'étiquette, et la présence du numéro de lot.",
  "Le premier réflexe utile à la livraison consiste à comparer la contenance annoncée sur la fiche avec celle de l'emballage, puis à vérifier le numéro de lot.",
  "Un contrôle simple à la réception : contenance conforme, étiquette nette, numéro de lot présent. Ces trois points suffisent à écarter l'essentiel des copies.",
];

export function contenuMarque(slug: string): ContenuMarque | undefined {
  const p = profiler(slug);
  if (!p) return undefined;

  /* --- Introduction --- */
  const intro: string[] = [];
  const rayonsPrincipaux = p.rayons.slice(0, 3);

  let ouverture = choisir(OUVERTURES, p.slug)(p.nom);
  if (rayonsPrincipaux.length > 0) {
    const liste = rayonsPrincipaux.map((r) => `[[${r.nom.toLowerCase()}|${r.url}]]`);
    ouverture +=
      rayonsPrincipaux.length === 1
        ? ` L'ensemble se concentre sur ${liste[0]}.`
        : ` Elles se répartissent entre ${enumerer(liste)}.`;
  }
  intro.push(ouverture);

  // Ce qui faisait varier le prix, expliqué sans annoncer de montant. Une
  // fourchette et une médiane ne renseignent pas un acheteur : elles le
  // renvoient à une statistique de catalogue, là où il attend de comprendre
  // pourquoi deux produits de la même maison ne coûtent pas le même prix.
  intro.push(
    `Chez une même maison, l'écart de prix tient d'abord au format et à la ligne : un soin ciblé en petit contenant ne se compare pas à un produit d'usage quotidien en grand format, et un coffret encore moins. La concentration en actifs et le circuit de distribution font le reste.`,
  );

  /* --- Gammes, seulement si on en détecte --- */
  let gammes: ContenuMarque["gammes"];
  if (p.gammes.length >= 2) {
    gammes = {
      titre: `Les lignes ${p.nom}`,
      paragraphes: [
        `Plusieurs lignes se dégagent du catalogue : ${enumerer(p.gammes)}. ` +
          `Chacune répond à une problématique distincte — rester dans une même ligne évite de superposer des formules pensées pour des besoins opposés.`,
        `Si vous débutez avec ${p.nom}, commencez par une seule ligne et jugez-la sur trois à quatre semaines avant d'en ajouter une autre.`,
      ],
    };
  }

  /* --- Authenticité --- */
  const authenticite = {
    titre: "Authenticité et provenance",
    paragraphes: [choisir(ANTICONTREFACON, p.slug)(p.nom), choisir(VERIFICATION, p.slug, 2)],
  };

  /* --- FAQ --- */
  const faq: { question: string; reponse: string }[] = [];

  faq.push({
    question: `Quels produits ${p.nom} proposez-vous ?`,
    reponse:
      `La sélection porte principalement sur ${enumerer(rayonsPrincipaux.map((r) => r.nom.toLowerCase()))}. ` +
      "Chaque fiche indique la marque, la contenance exacte et le prix en dinars, ce qui vous permet de recouper avec l'emballage à la réception.",
  });

  faq.push({
    question: `Quel est le prix des produits ${p.nom} en Algérie ?`,
    reponse:
      "Le prix est affiché sur chaque fiche, en dinars, et se règle au livreur à la remise du colis. " +
      "Il varie selon le format et la ligne. Sur une marque connue, un tarif très inférieur au marché doit alerter : il signale un circuit dont l'origine n'est pas établie, pas une occasion.",
  });

  faq.push({
    question: `Les produits ${p.nom} sont-ils authentiques ?`,
    reponse:
      "Oui. Ils proviennent de pharmacies, parapharmacies et parfumeries identifiées. La contenance publiée correspond à celle de l'emballage, ce qui vous permet de vérifier à la réception.",
  });

  faq.push({
    question: "Livrez-vous partout en Algérie ?",
    reponse:
      "Oui, dans les 69 wilayas, avec règlement à la livraison, en dinars.",
  });

  if (p.gammes.length >= 2) {
    faq.push({
      question: `Quelle ligne ${p.nom} choisir ?`,
      reponse: `Les lignes les plus représentées sont ${enumerer(p.gammes)}. Le choix dépend de votre besoin principal ; mieux vaut rester dans une ligne cohérente que mélanger des formules conçues pour des problématiques différentes.`,
    });
  }

  const tous = [
    ...intro,
    ...(gammes?.paragraphes ?? []),
    ...authenticite.paragraphes,
    ...faq.flatMap((f) => [f.question, f.reponse]),
  ];

  return {
    intro,
    gammes,
    authenticite,
    faq,
    nbMots: tous.join(" ").split(/\s+/).filter(Boolean).length,
  };
}

/**
 * Descriptions des fiches produit.
 *
 * 22 505 fiches : aucune ne peut être écrite à la main, et un gabarit unique
 * serait du contenu dupliqué à l'échelle. Le texte est donc composé de deux
 * matières :
 *
 *  1. le savoir de la FAMILLE (nettoyant, mascara, eau de parfum, shampoing…),
 *     écrit à la main dans `src/lib/familles/` : à quoi sert le produit, le
 *     geste, le moment, les précautions, les questions que les gens posent ;
 *  2. les DONNÉES propres au produit : marque, contenance, prix, texture,
 *     zone, type de peau, SPF, composition, position de prix dans son rayon.
 *
 * Le plan suit les intentions de recherche réelles du marché algérien, pas un
 * plan de catalogue : « à quoi sert », « comment utiliser », « prix en
 * Algérie », « où acheter ». Une fiche qui ne répond pas à ces questions ne se
 * vend pas et ne se classe pas.
 *
 * L'empreinte du slug remplace tout tirage aléatoire : deux builds successifs
 * produisent exactement le même texte, donc Googlebot ne voit jamais une fiche
 * changer de formulation sans raison.
 *
 * Règle absolue : on n'écrit que ce que la donnée permet d'affirmer. Aucune
 * allégation thérapeutique, aucun bénéfice inventé, aucun vocabulaire de prix.
 */

import "server-only";

import { getNoeud, produitsDeLaMarque, produitsDuNoeud } from "@/lib/catalogue";
import { familleDuNoeud } from "@/lib/familles-index";
import { pyramideDuProduit } from "@/lib/fragrantica";
import { ficheRedigee } from "@/lib/redige";
import type { FicheRedigee } from "@/lib/redige/types";
import type { Famille } from "@/lib/familles-produits";
import type { Produit } from "@/types/catalogue";

export interface DescriptionProduit {
  accroche: string;
  blocs: { titre: string; paragraphes: string[] }[];
  faq: { question: string; reponse: string }[];
  /** Faits propres au produit, issus de sa note rédigée. Vide sinon. */
  faits: { libelle: string; valeur: string }[];
  /** Vrai quand le corps de la fiche vient d'une note écrite à la main. */
  redigee: boolean;
  nbMots: number;
}

/* ================================================================== */
/* Variation déterministe                                              */
/* ================================================================== */

function empreinte(s: string): number {
  let h = 2166136261;
  for (let i = 0; i < s.length; i++) {
    h ^= s.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return Math.abs(h);
}

function choisir<T>(liste: readonly T[], graine: string, decalage = 0): T {
  return liste[(empreinte(graine) + decalage) % liste.length];
}

/**
 * Prend `combien` éléments, à partir d'un rang qui dépend du produit.
 *
 * Deux shampoings de la même famille ne doivent pas afficher exactement les
 * mêmes phrases dans le même ordre : c'est le début du contenu dupliqué à
 * l'échelle, celui que Google appelle « scaled content abuse ».
 */
function piocher<T>(liste: readonly T[], graine: string, combien: number, decalage = 0): T[] {
  if (liste.length === 0) return [];
  const depart = (empreinte(graine) + decalage) % liste.length;
  const sortie: T[] = [];
  for (let i = 0; i < Math.min(combien, liste.length); i++) {
    sortie.push(liste[(depart + i) % liste.length]);
  }
  return sortie;
}

function enumerer(mots: string[]): string {
  if (mots.length === 0) return "";
  if (mots.length === 1) return mots[0];
  return `${mots.slice(0, -1).join(", ")} et ${mots[mots.length - 1]}`;
}

function prixFr(n: number): string {
  return `${n.toLocaleString("fr-DZ")} DA`;
}

/* ================================================================== */
/* Jetons des gabarits de famille                                      */
/* ================================================================== */

/**
 * Remplace les jetons d'un gabarit de famille.
 * Les familles sont écrites une fois pour toute une catégorie : ce sont ces
 * jetons qui les rendent propres à un produit.
 */
function remplir(gabarit: string, p: Produit, f: Famille, noeudNom: string): string {
  const feminin = f.genre === "f";
  const nature = f.nature[empreinte(p.slug) % f.nature.length];
  const majuscule = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);

  // Table exhaustive : tout jeton écrit dans une banque de contenu DOIT figurer
  // ici. Une fiche a été publiée avec « {Nom} se juge aussi sur peau » parce
  // que {Nom} manquait à l'appel — le garde-fou en fin de fonction empêche
  // désormais qu'un jeton inconnu atteigne la page.
  const valeurs: Record<string, string> = {
    nom: p.nom,
    Nom: p.nom,
    nature,
    Nature: majuscule(nature),
    natureArt: feminin ? `une ${nature}` : `un ${nature}`,
    NatureArt: majuscule(feminin ? `une ${nature}` : `un ${nature}`),
    zone: f.zone,
    ce: feminin ? "cette" : "ce",
    Ce: feminin ? "Cette" : "Ce",
    le: feminin ? "la" : "le",
    Le: feminin ? "La" : "Le",
    marque: p.marque || "la marque",
    contenance: p.contenance || "",
    prix: prixFr(p.prix),
    catNom: noeudNom,
    keyword: noeudNom.toLowerCase(),
    TYPE: nature,
    NOM: p.nom,
    MARQUE: p.marque || "la marque",
    PRIX: prixFr(p.prix),
    CONTENANCE: p.contenance || "",
  };

  const texte = gabarit.replace(/\{([A-Za-z_]+)\}/g, (tout, cle: string) =>
    cle in valeurs ? valeurs[cle] : tout,
  );

  // Garde-fou : plutôt que de publier un gabarit visible, on retire la phrase.
  // Une phrase manquante se remarque moins qu'un « {Nom} » en pleine page, et
  // le contrôle de longueur signalera la fiche si le texte devient trop court.
  if (/\{[A-Za-z_]+\}/.test(texte)) return "";

  // Une double espace trahit un jeton vide : on nettoie plutôt que de laisser
  // la trace du gabarit dans le texte publié.
  return texte.replace(/\s{2,}/g, " ").replace(/\s+([,.])/g, "$1").trim();
}

/* ================================================================== */
/* Lecture des attributs                                               */
/* ================================================================== */

const PEAUX: Record<string, string> = {
  sec: "sèches", seche: "sèches", gras: "grasses", grasse: "grasses",
  mixte: "mixtes", sensible: "sensibles", normal: "normales", normale: "normales",
  atopique: "atopiques", acneique: "à tendance acnéique",
};

const CHEVEUX: Record<string, string> = {
  sec: "secs", gras: "gras", boucle: "bouclés", colore: "colorés",
  abime: "abîmés", fin: "fins", crepu: "crépus",
};

const BESOINS: Record<string, string> = {
  "anti-chute": "limiter la chute",
  "anti-taches": "atténuer les taches pigmentaires",
  "anti-age": "cibler les signes de l'âge",
  "anti-acne": "traiter les imperfections",
  hydratation: "hydrater",
  eclat: "raviver l'éclat",
  apaisant: "apaiser les irritations",
  raffermissant: "raffermir",
  cicatrisant: "favoriser la réparation cutanée",
  matifiant: "matifier",
};

const TEXTURES: Record<string, string> = {
  creme: "en crème", gel: "en gel", huile: "en huile", serum: "en sérum",
  mousse: "en mousse", lait: "en lait", baume: "en baume", lotion: "en lotion",
  stick: "en stick", spray: "en spray", poudre: "en poudre",
};

function valeurs(champ: string | undefined): string[] {
  return (champ ?? "").split("|").map((v) => v.trim()).filter(Boolean);
}

function traduire(liste: string[], table: Record<string, string>): string[] {
  return liste.map((v) => table[v] ?? v.replace(/-/g, " "));
}

/** Actifs reconnaissables dans une liste INCI, avec ce qu'ils apportent. */
const ACTIFS: { motif: RegExp; nom: string; role: string }[] = [
  { motif: /niacinamide/i, nom: "la niacinamide", role: "régule le sébum et unifie le teint" },
  { motif: /hyaluron/i, nom: "l'acide hyaluronique", role: "retient l'eau dans les couches superficielles" },
  { motif: /glycerin/i, nom: "la glycérine", role: "limite la déshydratation" },
  { motif: /panthenol/i, nom: "le panthénol", role: "apaise et soutient la réparation" },
  { motif: /\bretinol|retinal\b/i, nom: "le rétinol", role: "agit sur le renouvellement cellulaire" },
  { motif: /salicylic/i, nom: "l'acide salicylique", role: "désincruste les pores" },
  { motif: /ceramide/i, nom: "les céramides", role: "renforcent la barrière cutanée" },
  { motif: /tocopherol|vitamin e/i, nom: "la vitamine E", role: "protège des agressions oxydatives" },
  { motif: /ascorbic|vitamin c/i, nom: "la vitamine C", role: "soutient l'éclat du teint" },
  { motif: /shea|butyrospermum/i, nom: "le beurre de karité", role: "nourrit les zones sèches" },
  { motif: /aloe/i, nom: "l'aloe vera", role: "apporte une sensation de fraîcheur" },
  { motif: /centella|madecassoside/i, nom: "la centella asiatica", role: "apaise les peaux réactives" },
  { motif: /zinc/i, nom: "le zinc", role: "aide à réguler les imperfections" },
  { motif: /urea|uree/i, nom: "l'urée", role: "assouplit les zones rugueuses" },
];

function actifsIdentifies(inci: string): { nom: string; role: string }[] {
  const trouves: { nom: string; role: string }[] = [];
  for (const a of ACTIFS) {
    if (a.motif.test(inci) && !trouves.some((t) => t.nom === a.nom)) {
      trouves.push({ nom: a.nom, role: a.role });
    }
    if (trouves.length >= 3) break;
  }
  return trouves;
}

/* ================================================================== */
/* Rédaction                                                           */
/* ================================================================== */

const OUVERTURES_MARQUE = [
  (n: string, m: string) => `${n} est une référence ${m}, disponible en Algérie et livrée dans les 69 wilayas.`,
  (n: string, m: string) => `Signé ${m}, ${n} figure à notre catalogue en version originale, livrable partout en Algérie.`,
  (n: string, m: string) => `${n}, de ${m}, fait partie des références que nous suivons pour le marché algérien.`,
];

const OUVERTURES_SANS_MARQUE = [
  (n: string) => `${n} figure à notre catalogue en version originale, livrable dans les 69 wilayas.`,
  (n: string) => `Nous référençons ${n} avec sa contenance, son prix en dinars et la livraison à domicile.`,
  (n: string) => `${n} fait partie des références que nous suivons pour le marché algérien.`,
];

/** Nom court : le nom complet répété quinze fois alourdit la lecture. */
function nomCourt(p: Produit): string {
  const sansMarque = p.marque
    ? p.nom.replace(new RegExp(`^${p.marque.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}\\s*[-–—]?\\s*`, "i"), "")
    : p.nom;
  const court = sansMarque.split(/\s[-–—]\s/)[0].trim();
  return court.length >= 6 ? court : p.nom;
}

/**
 * « de » suivi d'un nom, avec l'élision quand il faut.
 *
 * Sans cela les titres donnaient « Prix de Eau de parfum Magnolia Nobile ».
 * L'élision se déclenche sur voyelle et sur un h muet ; la liste des h
 * aspirés utiles ici est courte, on la traite en exception.
 */
const H_ASPIRE = /^(h(?:uile de haricot|aricot|enn[ée]|ublot))/i;

function deElide(nom: string): string {
  const premier = nom.trim();
  if (!premier) return "de";
  if (/^[aeiouyàâäéèêëîïôöùûü]/i.test(premier)) return `de l'${premier}`;
  if (/^h/i.test(premier) && !H_ASPIRE.test(premier)) return `de l'${premier}`;
  return `de ${premier}`;
}

export function decrireProduit(p: Produit): DescriptionProduit {
  const noeud = getNoeud(p.categorie);
  const famille = familleDuNoeud(p.categorie, p.departement);
  const court = nomCourt(p);
  const rayonAffiche = noeud?.nom ?? "cosmétique";

  // Une note écrite pour ce produit l'emporte sur tout le reste. Ce qui suit
  // dans cette fonction compose un texte à partir de la famille du produit et
  // de ses attributs : c'est correct pour la longue traîne, mais cela ne dit
  // rien du produit en propre. Sur un parfum, par exemple, cela ne donnait ni
  // la famille olfactive, ni les notes, ni la concentration.
  const note = ficheRedigee(p.slug);
  if (note) return decrireDepuisNote(p, note, court, rayonAffiche);

  const accroche = p.marque
    ? choisir(OUVERTURES_MARQUE, p.slug)(p.nom, p.marque)
    : choisir(OUVERTURES_SANS_MARQUE, p.slug)(p.nom);

  const blocs: DescriptionProduit["blocs"] = [];
  const faq: { question: string; reponse: string }[] = [];

  /* ---------- 1. À quoi sert ce produit ---------- */
  const role: string[] = [];
  if (famille) {
    // Deux phrases sur trois, à un rang qui dépend du produit : prendre les
    // trois donnerait le même paragraphe à tous les produits de la famille,
    // et 900 shampoings au texte identique, c'est du contenu dupliqué à
    // l'échelle. Le reste de l'unicité vient des données du produit.
    role.push(...piocher(famille.role, p.slug, 2).map((g) => remplir(g, p, famille, rayonAffiche)).filter(Boolean));
  }

  // Ce que la donnée du produit ajoute, et que la famille ne peut pas savoir.
  const precisions: string[] = [];
  const texture = p.texture ? TEXTURES[p.texture] : undefined;
  if (texture) precisions.push(`Sa texture est ${texture}`);
  const besoins = traduire(valeurs(p.besoin), BESOINS);
  if (besoins.length > 0) precisions.push(`la formule vise à ${enumerer(besoins)}`);
  if (p.spf) {
    precisions.push(`elle porte un indice ${p.spf.toUpperCase().replace("SPF", "SPF ")}`);
  }
  if (precisions.length > 0) {
    role.push(`${precisions.join(", ")}.`.replace(/^./, (c) => c.toUpperCase()));
  }

  const peaux = traduire(valeurs(p.type_peau), PEAUX);
  const cheveux = traduire(valeurs(p.type_cheveux), CHEVEUX);
  if (p.departement === "soin-cheveux" && cheveux.length > 0) {
    role.push(`Cette référence s'adresse aux cheveux ${enumerer(cheveux)}.`);
  } else if (peaux.length > 0) {
    role.push(`Cette référence s'adresse aux peaux ${enumerer(peaux)}.`);
  }
  if (p.contenance) {
    role.push(
      `Le format est de ${p.contenance}, tel qu'indiqué sur l'emballage. C'est le premier élément à recouper à la réception.`,
    );
  }
  blocs.push({ titre: `À quoi sert ${court} ?`, paragraphes: role });

  /* ---------- 2. Comment l'utiliser ---------- */
  const usage: string[] = [];
  if (famille) {
    usage.push(...piocher(famille.geste, p.slug, 2, 1).map((g) => remplir(g, p, famille, rayonAffiche)).filter(Boolean));
    usage.push(...piocher(famille.moment, p.slug, 1, 2).map((g) => remplir(g, p, famille, rayonAffiche)).filter(Boolean));
    if (famille.precaution) {
      usage.push(...piocher(famille.precaution, p.slug, 1, 3).map((g) => remplir(g, p, famille, rayonAffiche)).filter(Boolean));
    }
  }
  if (p.spf) {
    usage.push(
      "Un indice de protection ne dispense pas de renouveler l'application : comptez une nouvelle couche toutes les deux heures en exposition directe, et après chaque baignade.",
    );
  }
  if (valeurs(p.besoin).includes("anti-age") || valeurs(p.besoin).includes("anti-taches")) {
    usage.push(
      "Ce type de formule demande de la régularité. Les premiers effets visibles s'observent généralement après trois à quatre semaines d'application quotidienne, pas avant.",
    );
  }
  if (usage.length > 0) {
    blocs.push({ titre: `Comment utiliser ${court}`, paragraphes: usage });
  }

  /* ---------- 3. Prix en Algérie ---------- */
  //
  // Ce bloc comparait le prix du produit à la médiane de son rayon, et
  // annonçait le nombre de revendeurs qui le distribuent. Le propriétaire a
  // rejeté ces deux tournures : un acheteur ne se décide pas sur une médiane
  // statistique, et un décompte de revendeurs concurrents n'est pas un
  // argument de vente. Ce qui reste est ce qui sert réellement : le prix, le
  // format, et la façon dont on règle.
  const prixTexte: string[] = [
    `${p.nom} est proposé à ${prixFr(p.prix)}${p.contenance ? `, pour un format de ${p.contenance}` : ""}. ` +
      "Le règlement se fait à la livraison, en dinars, remis au livreur. Aucune avance, aucun paiement en ligne, aucune donnée bancaire saisie sur le site.",
    `Sur un produit de marque, un écart de prix très large par rapport au marché ne signale presque jamais une bonne opération : il signale un circuit dont l'origine n'est pas établie. Le prix affiché ici correspond à une référence sourcée en pharmacie, parapharmacie ou parfumerie${p.marque ? `, distribuée sous le nom ${p.marque}` : ""}.`,
  ];
  blocs.push({ titre: `Prix ${deElide(court)} en Algérie`, paragraphes: prixTexte });

  /* ---------- 4. Composition, seulement si on la connaît ---------- */
  if (p.inci) {
    const actifs = actifsIdentifies(p.inci);
    const comp: string[] = [];
    if (actifs.length > 0) {
      comp.push(
        `Parmi les ingrédients déclarés, on identifie ${enumerer(actifs.map((a) => a.nom))}. ` +
          actifs.map((a) => `${a.nom.charAt(0).toUpperCase()}${a.nom.slice(1)} ${a.role}`).join(" ; ") +
          ".",
      );
    }
    comp.push(
      "La liste INCI complète est reproduite ci-dessous, telle que communiquée par le fabricant. En cas de sensibilité connue à un ingrédient, vérifiez-la avant achat.",
    );
    blocs.push({ titre: "Composition", paragraphes: comp });
  }

  /* ---------- 5. Livraison et authenticité ---------- */
  const LIVRAISON = [
    "La livraison couvre les 69 wilayas, avec règlement à la réception, en dinars.",
    "Nous livrons dans les 69 wilayas et vous réglez au livreur, en dinars, une fois le colis entre vos mains.",
    "Livraison assurée sur les 69 wilayas, paiement à la réception. Vous pouvez ouvrir le colis et vérifier le produit avant de payer.",
  ];
  const AUTHENTICITE = [
    `${p.marque || "Cette référence"} provient d'un circuit identifié — pharmacie, parapharmacie ou parfumerie — et non d'un import parallèle.`,
    "Nous nous approvisionnons auprès de circuits établis, ce qui reste la meilleure garantie contre la contrefaçon sur ce type de référence.",
    "L'origine est tracée : nos références proviennent de pharmacies, parapharmacies et parfumeries identifiées.",
  ];
  const livraison = [choisir(LIVRAISON, p.slug), choisir(AUTHENTICITE, p.slug, 3)];

  // Ce que le catalogue sait de la marque : une information vraie, propre à
  // chaque marque, qui distingue deux fiches par ailleurs voisines.
  // Ce paragraphe annonçait le nombre de références de la marque et le nombre
  // de rayons où elle est présente. Deux compteurs, retirés du site à la
  // demande du propriétaire : ils ne servent pas l'acheteur. Le conseil de
  // regrouper une commande, lui, reste utile.
  if (p.marqueSlug && produitsDeLaMarque(p.marqueSlug).length >= 4) {
    livraison.push(
      `${p.marque} est référencée sur plusieurs produits du site. Regrouper vos achats d'une même maison sur une seule commande évite de multiplier les frais de livraison.`,
    );
  }

  blocs.push({
    titre: "Livraison et paiement à la livraison",
    paragraphes: livraison,
  });

  /* ---------- FAQ : les questions réellement tapées ---------- */
  faq.push({
    question: `Quel est le prix ${deElide(court)} en Algérie ?`,
    reponse:
      `${prixFr(p.prix)}${p.contenance ? `, pour ${p.contenance}` : ""}. ` +
      "Ce prix est celui affiché sur cette fiche et se règle au livreur, en dinars, à la remise du colis. " +
      `Sur une référence de marque, un tarif très inférieur au marché doit alerter : il signale le plus souvent un circuit dont l'origine n'est pas établie, pas une occasion.`,
  });

  faq.push({
    question: `Où acheter ${court} en Algérie ?`,
    reponse:
      "Sur cette page : vous ajoutez le produit au panier, vous renseignez votre nom, votre téléphone et votre wilaya, et nous vous appelons pour confirmer. La livraison couvre les 69 wilayas, du nord au grand sud, et le paiement se fait à la réception.",
  });

  if (famille) {
    for (const qr of piocher(famille.faq, p.slug, 3)) {
      const q = remplir(qr.q, p, famille, rayonAffiche);
      const r = remplir(qr.r, p, famille, rayonAffiche);
      if (q && r) faq.push({ question: q, reponse: r });
    }
  }

  if (p.departement === "soin-cheveux" && cheveux.length > 0) {
    faq.push({
      question: `${court} convient-il à mes cheveux ?`,
      reponse: `Cette référence s'adresse aux cheveux ${enumerer(cheveux)}. Si votre fibre ne correspond pas, une autre référence du rayon ${rayonAffiche.toLowerCase()} sera mieux adaptée : le résultat dépend davantage de l'adéquation au type de cheveu que du produit lui-même.`,
    });
  } else if (peaux.length > 0) {
    faq.push({
      question: `${court} convient-il à ma peau ?`,
      reponse: `Cette référence s'adresse aux peaux ${enumerer(peaux)}. Si votre type de peau diffère, une autre référence du rayon ${rayonAffiche.toLowerCase()} conviendra mieux : l'adéquation au type de peau compte plus que la notoriété d'une formule.`,
    });
  }

  faq.push({
    question: `${court} est-il authentique ?`,
    reponse:
      "Oui. Nos références proviennent de pharmacies, parapharmacies et parfumeries identifiées, jamais d'import parallèle. La contenance publiée correspond à celle de l'emballage : c'est le premier point à vérifier à la réception, avec la qualité d'impression de l'étiquette et le numéro de lot.",
  });

  faq.push(QUESTION_LIVRAISON);

  const tous = [
    accroche,
    ...blocs.flatMap((b) => [b.titre, ...b.paragraphes]),
    ...faq.flatMap((f) => [f.question, f.reponse]),
  ];

  // Meme sans note ecrite, un parfum dont la pyramide a ete relevee doit
  // l'afficher : c'est l'information qui manquait sur ces fiches, et elle vaut
  // pour les 22 000 produits, pas seulement pour ceux deja rediges.
  const pyramide = pyramideDuProduit(p.slug);
  const faitsOlfactifs = pyramide
    ? CHAMPS_OLFACTIFS.map(([champ, libelle]) => {
        const v = pyramide[champ];
        return v ? { libelle, valeur: v } : null;
      }).filter((x): x is { libelle: string; valeur: string } => x !== null)
    : [];

  return {
    accroche,
    blocs,
    faq,
    faits: faitsOlfactifs,
    redigee: false,
    nbMots: tous.join(" ").split(/\s+/).filter(Boolean).length,
  };
}

/* ================================================================== */
/* Rendu d'une note écrite à la main                                   */
/* ================================================================== */

/**
 * Réponse commune sur la livraison.
 *
 * Elle annonçait auparavant des délais précis par région — 24 à 48 h sur le
 * centre, 3 à 6 jours sur le grand sud. Ces chiffres n'ont jamais été
 * confirmés par le propriétaire ni par un transporteur : les publier serait
 * s'engager sur un service dont nous ne maîtrisons pas le calendrier, sur un
 * marché où le colis se paie à la remise. Le texte dit donc ce qui est vrai.
 */
const QUESTION_LIVRAISON = {
  question: "Comment se passent la livraison et le paiement ?",
  reponse:
    "La livraison couvre les 69 wilayas. Le délai dépend de votre commune et du transporteur qui la dessert : il est plus court sur le nord que sur les wilayas du sud, comme pour tout envoi en Algérie. Le règlement se fait au livreur, en dinars, à la remise du colis — aucune avance, aucune donnée bancaire sur le site.",
};

/** Libellés des champs de la pyramide olfactive, dans l'ordre de lecture. */
const CHAMPS_OLFACTIFS: [keyof NonNullable<FicheRedigee["olfactif"]>, string][] = [
  ["famille", "Famille olfactive"],
  ["concentration", "Concentration"],
  ["tete", "Notes de tête"],
  ["coeur", "Notes de cœur"],
  ["fond", "Notes de fond"],
  ["annee", "Année de sortie"],
  ["parfumeur", "Parfumeur"],
];

/**
 * Compose la fiche à partir d'une note rédigée pour ce produit précis.
 *
 * L'ordre des blocs suit l'ordre des questions que se pose un acheteur :
 * ce que c'est, ce qu'il sent ou contient, comment s'en servir, en quoi il
 * diffère de ses voisins de rayon, ce qu'il coûte et comment on le règle.
 *
 * Rien n'est complété par la famille du produit : mélanger une note écrite et
 * des phrases de gabarit produirait des redites, et parfois des contradictions
 * — la note peut décrire une texture que les attributs du catalogue ignorent.
 */
function decrireDepuisNote(
  p: Produit,
  note: FicheRedigee,
  court: string,
  rayonAffiche: string,
): DescriptionProduit {
  const blocs: DescriptionProduit["blocs"] = [];

  blocs.push({ titre: `${court} : ce qu'il faut savoir`, paragraphes: note.identite });

  // Les faits sont dédoublonnés sur le libellé ET sur la valeur.
  //
  // Deux sources se recouvrent : la pyramide olfactive porte déjà la famille
  // et la concentration, et les rédacteurs les répétaient souvent dans
  // `faits`. La contenance, elle, vient du catalogue et est affichée par la
  // page elle-même. Sans ce filtre, la fiche d'un parfum listait deux fois la
  // concentration, deux fois la famille et deux fois la contenance.
  const faits: { libelle: string; valeur: string }[] = [];
  const vus = new Set<string>();
  const cle = (s: string) =>
    s
      .toLowerCase()
      .normalize("NFD")
      .replace(/\p{Diacritic}/gu, "")
      .replace(/[^a-z0-9]+/g, "");

  // Déjà rendus ailleurs sur la page : la marque et la contenance ont leur
  // propre ligne, alimentée par le catalogue.
  for (const deja of ["marque", "contenance", "format"]) vus.add(deja);

  function ajouter(libelle: string, valeur: string) {
    const k = cle(libelle);
    if (!k || vus.has(k)) return;
    vus.add(k);
    faits.push({ libelle, valeur });
  }

  // La pyramide du redacteur d'abord, celle relevee sur Fragrantica ensuite.
  // `ajouter` dedoublonne sur le libelle : ce qui est deja renseigne n'est pas
  // ecrase, et ce qui manque est complete. Un redacteur peut connaitre le
  // produit sans connaitre sa pyramide, et inversement.
  for (const source of [note.olfactif, pyramideDuProduit(p.slug)]) {
    if (!source) continue;
    for (const [champ, libelle] of CHAMPS_OLFACTIFS) {
      const v = source[champ];
      if (v) ajouter(libelle, v);
    }
  }
  for (const f of note.faits ?? []) ajouter(f.libelle, f.valeur);

  if (note.usage && note.usage.length > 0) {
    blocs.push({ titre: `Comment utiliser ${court}`, paragraphes: note.usage });
  }
  if (note.positionnement && note.positionnement.length > 0) {
    blocs.push({ titre: `${court} face aux autres produits du rayon ${rayonAffiche.toLowerCase()}`, paragraphes: note.positionnement });
  }

  blocs.push({
    titre: `Prix ${deElide(court)} en Algérie`,
    paragraphes: [
      `${p.nom} est proposé à ${prixFr(p.prix)}${p.contenance ? `, pour un format de ${p.contenance}` : ""}. ` +
        "Le règlement se fait à la livraison, en dinars, remis au livreur. Aucune avance, aucun paiement en ligne, aucune donnée bancaire saisie sur le site.",
      `Sur un produit de marque, un écart de prix très large par rapport au marché ne signale presque jamais une bonne opération : il signale un circuit dont l'origine n'est pas établie. Le prix affiché ici correspond à une référence sourcée en pharmacie, parapharmacie ou parfumerie${p.marque ? `, distribuée sous le nom ${p.marque}` : ""}.`,
    ],
  });

  if (p.inci) {
    blocs.push({
      titre: "Composition",
      paragraphes: [
        "La liste INCI complète est reproduite sur cette page, telle que communiquée par le fabricant. En cas de sensibilité connue à un ingrédient, vérifiez-la avant de commander.",
      ],
    });
  }

  const faq = [...(note.faq ?? [])];
  faq.push({
    question: `${court} est-il authentique ?`,
    reponse:
      "Nos références proviennent de pharmacies, parapharmacies et parfumeries identifiées, jamais d'import parallèle. La contenance publiée correspond à celle de l'emballage : c'est le premier point à recouper à la réception, avec la qualité d'impression de l'étiquette et la présence du numéro de lot.",
  });
  faq.push(QUESTION_LIVRAISON);

  // Pas d'accroche séparée : elle répéterait le premier paragraphe de
  // l'identité, qui ouvre déjà le premier bloc. La page ne rend l'accroche
  // que lorsqu'elle n'est pas vide.
  const accroche = "";
  const tous = [
    ...note.identite,
    ...blocs.flatMap((b) => [b.titre, ...b.paragraphes]),
    ...faits.flatMap((f) => [f.libelle, f.valeur]),
    ...faq.flatMap((f) => [f.question, f.reponse]),
  ];

  return {
    accroche,
    blocs,
    faq,
    faits,
    redigee: true,
    nbMots: tous.join(" ").split(/\s+/).filter(Boolean).length,
  };
}

/**
 * Contenu éditorial et sélections de la page d'accueil.
 *
 * Module server-only : il lit le catalogue (10 Mo de JSON) pour calculer les
 * sélections une fois au build. Les composants clients ne l'importent donc
 * jamais — ils reçoivent leur texte en props depuis la page.
 *
 * Aucun visuel d'ambiance : toutes les images sont des packshots issus du
 * catalogue, associés à leur produit par la base du marchand source.
 */

import "server-only";

import {
  SITE_NOM,
  marques,
  produitsDeLaMarque,
  produitsDuNoeud,
  produitsPubliables,
  taxonomie,
  trierParPertinence,
  urlMarque,
} from "@/lib/catalogue";
import type { Produit } from "@/types/catalogue";
import { TEL_DZ_AFFICHE } from "@/lib/contact";
import type { ColonneFooter, LienSite, Vignette } from "@/types/site";

const nf = new Intl.NumberFormat("fr-FR");

/* ------------------------------------------------------------------ */
/* Sources                                                             */
/* ------------------------------------------------------------------ */

/** Rayons classés par volume réel de produits publiables, pas par ordre alphabétique. */
const RAYONS = taxonomie
  .map((dep) => ({ dep, nb: produitsDuNoeud(dep.url).length }))
  .sort((a, b) => b.nb - a.nb);

const NB_PRODUITS = produitsPubliables.length;
const NB_MARQUES = marques.length;

/**
 * Visuel de rang `rang` dans une liste, une fois celle-ci triée par pertinence.
 * Le rang permet de ne pas répéter le même packshot d'un bloc à l'autre.
 */
function visuel(liste: Produit[], rang = 0): string | undefined {
  const avecImage = trierParPertinence(liste).filter((p) => p.images.length > 0);
  return avecImage[rang]?.images[0] ?? avecImage[0]?.images[0];
}

/* ------------------------------------------------------------------ */
/* Chrome : bandeau et navigation                                      */
/* ------------------------------------------------------------------ */

/**
 * Bandeau de réassurance. Trois arguments, aucun lien : ils lèvent les freins
 * réels du marché algérien sans consommer de budget de liens sitewide.
 */
export const MESSAGES_BANDEAU: readonly string[] = [
  "Livraison dans les 69 wilayas",
  "Paiement à la livraison",
  // Le numéro figure dans le bandeau plutôt qu'un troisième argument de
  // réassurance : sur un marché où l'on règle en espèces à un livreur, un
  // numéro local joignable en un geste vaut plus qu'une phrase rassurante.
  `Commandez par téléphone : ${TEL_DZ_AFFICHE}`,
];

/** Les 9 rayons, dans l'ordre d'importance du catalogue. */
export const NAV_ITEMS: LienSite[] = RAYONS.map(({ dep }) => ({
  libelle: dep.nom,
  href: dep.url,
}));

/* ------------------------------------------------------------------ */
/* Hero                                                                */
/* ------------------------------------------------------------------ */

/**
 * Produit mis en avant dans le Hero.
 *
 * On prend le plus distribué du catalogue : présent chez plusieurs concurrents,
 * c'est le signal de rotation le plus fiable dont on dispose, et son packshot
 * est de fait le mieux référencé. Le lien pointe vers sa fiche, pas vers un
 * rayon : la première image du site doit être cliquable vers un produit réel.
 */
const PRODUIT_HERO = trierParPertinence(
  produitsPubliables.filter((p) => p.nbSites >= 3 && p.images.length > 0),
)[0];

/**
 * H1 de la page d'accueil, porté par le Hero.
 *
 * Il remplace un titre tournant qui affichait « Notre cosmétique est : » suivi
 * de trois mots superposés. Lu par un robot ou un lecteur d'écran, ce titre
 * donnait « Notre cosmétique est : authentiquesélectionnéelivrée en Algérie »,
 * et surtout il ne contenait pas le mot-clé de la page.
 *
 * Le mot-clé de la page d'accueil est « cosmétique » + « Algérie » : c'est
 * aussi le nom de domaine, et c'est la requête que porte tout le site. Les
 * trois familles principales suivent dans le même titre, car ce sont les
 * termes que l'internaute associe à la requête générique.
 */
export const HERO = {
  surtitre: "Soin · Maquillage · Parfum",
  titre: "Cosmétique original en Algérie",
  chapeau:
    "Une sélection de soin, de maquillage et de parfum dont nous pouvons établir l'origine, présentée avec sa marque, sa contenance et son prix en dinars. Ce que vous voyez sur la fiche est ce que le livreur vous remet.",
  ctaPrincipal: { libelle: "Découvrir le soin du visage", href: "/soin-visage/" },
  ctaSecondaire: { libelle: "Toutes les marques", href: "/marques/" },
  garanties: [
    "Livraison 69 wilayas",
    "Règlement au livreur",
    "Produits d'origine",
  ] as const,
  href: PRODUIT_HERO ? `/produit/${PRODUIT_HERO.slug}/` : "/soin-visage/",
  image: PRODUIT_HERO?.images[0],
  imageAlt: PRODUIT_HERO ? `${PRODUIT_HERO.marque} ${PRODUIT_HERO.nom}` : "",
  produitNom: PRODUIT_HERO?.nom ?? "",
  produitMarque: PRODUIT_HERO?.marque ?? "",
};

/* ------------------------------------------------------------------ */
/* Sélections produits                                                 */
/* ------------------------------------------------------------------ */

/**
 * Les plus demandés. `nbSites >= 2` désigne un produit référencé chez
 * plusieurs revendeurs algériens : 96,5 % du catalogue n'existe que sur un
 * seul site, le signal est donc rare et fiable. Deux visuels minimum pour que
 * le survol soit actif sur toute la rangée.
 */
const SOCLE = trierParPertinence(
  produitsPubliables.filter((p) => p.nbSites >= 2 && p.images.length >= 2),
);

export const ICONIQUES: Produit[] = SOCLE.slice(0, 8);

const DEJA_EN_AVANT = new Set(ICONIQUES.map((p) => p.slug));

/** Une référence par rayon : la sélection couvre tout le catalogue, pas un seul univers. */
export const NOUVEAUTES: Produit[] = RAYONS.map(({ dep }) =>
  trierParPertinence(produitsDuNoeud(dep.url)).find(
    (p) => !DEJA_EN_AVANT.has(p.slug) && p.images.length > 0,
  ),
)
  .filter((p): p is Produit => Boolean(p))
  .slice(0, 8);

/* ------------------------------------------------------------------ */
/* Marques phares                                                      */
/* ------------------------------------------------------------------ */

/**
 * Les maisons mises en avant.
 *
 * Elles sont désormais représentées par leur logo, pas par un packshot pris au
 * hasard dans leur catalogue : `RoutineCard` lit `id` pour aller chercher le
 * logo vérifié dans `lib/logos.ts`, et se rabat sur le nom en typographie
 * quand la maison n'en a pas. Le champ `image` n'est donc plus utilisé pour
 * ces cartes, mais il reste dans le type `Vignette`, partagé avec les rayons.
 *
 * Le critère de sélection est le nombre de produits réellement référencés : ce
 * sont les maisons sur lesquelles le site a de la profondeur, donc celles
 * qu'il est honnête de mettre en avant.
 */
export const ROUTINES: Vignette[] = marques
  .map((m) => ({ marque: m, nb: produitsDeLaMarque(m.slug).length }))
  .sort((a, b) => b.nb - a.nb)
  .slice(0, 12)
  .map(({ marque }) => ({
    id: marque.slug,
    title: marque.nom,
    image: "",
    href: urlMarque(marque.slug),
  }));

/* ------------------------------------------------------------------ */
/* Rayons                                                              */
/* ------------------------------------------------------------------ */

/**
 * Les 9 rayons.
 *
 * Le libellé ne porte plus le nombre de produits du rayon. Un compteur dans un
 * titre de vignette ne renseigne personne sur ce qu'il va trouver, et le
 * propriétaire a explicitement demandé que ces chiffres disparaissent du site.
 */
export const CATEGORIES: Vignette[] = RAYONS.map(({ dep }) => {
  const image = visuel(produitsDuNoeud(dep.url));
  return image ? { id: dep.slug, title: dep.nom, image, href: dep.url } : null;
}).filter((v): v is Vignette => v !== null);

/* ------------------------------------------------------------------ */
/* Bloc conseil                                                        */
/* ------------------------------------------------------------------ */

export const DIAGNOSTIC = {
  label: "Choisir son soin",
  headline: "Le bon produit, pour votre peau.",
  ctaLabel: "Voir le soin du visage",
  ctaHref: "/soin-visage/",
};

/* ------------------------------------------------------------------ */
/* Authenticité                                                        */
/* ------------------------------------------------------------------ */

/**
 * Remplace le bloc d'avis clients : nous n'en avons aucun. Sur ce marché, la
 * question qui précède l'achat n'est pas la note, c'est l'origine du produit.
 */
export const REVIEWS = {
  headline: "L'origine avant l'argument.",
  body: `Un cosmétique se juge d'abord sur ce qu'il est réellement. Nous référençons ce que nous pouvons rattacher à un circuit identifié — pharmacie, parapharmacie, parfumerie — et nous affichons la marque, la contenance et le prix tels quels. Ce qui ne passe pas ce filtre attend, et beaucoup de produits attendent encore. C'est plus lent à construire, et c'est la seule manière de vous laisser vérifier ce que vous recevez.`,
  linkLabel: "Notre méthode",
  linkHref: "/a-propos/",
  image: visuel(SOCLE, 12) ?? SOCLE[0].images[0],
  imageAlt: "Packshot d'un produit du catalogue",
};

/* ------------------------------------------------------------------ */
/* Exigence                                                            */
/* ------------------------------------------------------------------ */

export const PHILOSOPHY = {
  eyebrow: "Notre exigence",
  body: `Un catalogue n'est pas une liste. Chaque fiche de ce site porte un visuel du produit réel, sa contenance exacte et son prix en dinars — trois informations qui vous permettent de recouper avec ce que le livreur vous remet, avant de régler. Tant que nous ne les avons pas toutes les trois, la référence attend.`,
  claims: [
    {
      title: "Sourcer, vérifier, publier.",
      image: visuel(SOCLE, 8) ?? SOCLE[0].images[0],
    },
    {
      title: "Le prix en dinars, sans détour.",
      image: visuel(SOCLE, 9) ?? SOCLE[1].images[0],
    },
  ],
  gallery: RAYONS.slice(0, 4).map(({ dep }) => ({
    image: visuel(produitsDuNoeud(dep.url), 1) ?? "",
    label: dep.nom,
  })),
};

/* ------------------------------------------------------------------ */
/* Bandeau bas de page                                                 */
/* ------------------------------------------------------------------ */

/* ------------------------------------------------------------------ */
/* Corps éditorial de l'accueil                                        */
/* ------------------------------------------------------------------ */

/**
 * Texte de fond de la page d'accueil.
 *
 * Une page d'accueil qui n'est qu'une suite de carrousels ne se positionne sur
 * rien : elle ne contient aucune phrase à indexer. Ce bloc porte le vocabulaire
 * réellement tapé sur ce marché — cosmétique, parapharmacie, produit
 * d'origine, contrefaçon, livraison par wilaya, paiement à la livraison — dans
 * des paragraphes qui servent aussi à quelqu'un qui les lit.
 *
 * Les liens sont posés dans les phrases, vers les rayons : c'est la première
 * distribution de jus du site, et elle part d'ici.
 */
export const EDITORIAL_ACCUEIL: {
  titre: string;
  sections: { titre: string; paragraphes: string[] }[];
} = {
  titre: "Acheter ses cosmétiques en Algérie",
  sections: [
    {
      titre: "Un catalogue construit sur l'origine du produit",
      paragraphes: [
        "Le marché algérien du cosmétique a un défaut connu de tous ceux qui y achètent : on ne sait pas toujours ce que l'on reçoit. Le même flacon circule à des prix qui varient du simple au triple, et la différence ne tient pas au commerçant mais au circuit par lequel le produit est arrivé. Un sérum acheté au tiers de sa valeur habituelle n'est pas une bonne opération, c'est un produit dont personne ne peut établir la provenance.",
        "Nous avons construit ce catalogue dans l'autre sens. Une référence entre au site quand nous pouvons dire d'où elle vient, montrer son visuel réel et afficher sa contenance exacte. Ce qui ne passe pas ce filtre attend, et beaucoup de produits attendent encore. C'est un catalogue plus lent à construire, mais chaque fiche y répond de son contenu.",
        "Vous retrouvez cette exigence sur l'ensemble des rayons, du [[soin du visage|/soin-visage/]] au [[parfum|/parfum/]], en passant par le [[maquillage|/maquillage/]] et le [[soin des cheveux|/soin-cheveux/]].",
      ],
    },
    {
      titre: "Reconnaître un produit d'origine",
      paragraphes: [
        "La contrefaçon cosmétique vise en priorité ce qui se vend le plus : les crèmes de grandes maisons, les sérums à actifs, les parfums de créateurs. Elle se repère à quelques signes constants. Le texte de l'emballage comporte des fautes ou une traduction approximative. La liste INCI est absente, illisible ou trop courte pour le produit annoncé. La contenance affichée ne correspond à aucun format officiel de la marque. Le numéro de lot est effacé ou identique sur plusieurs exemplaires.",
        "Le prix reste le signal le plus parlant. Une marque tient ses tarifs, y compris à l'export. Un écart très large sur une référence connue signale un circuit parallèle bien plus souvent qu'une bonne négociation. C'est la raison pour laquelle nous affichons la marque et la contenance sur chaque fiche : cela vous permet de recouper avec l'emballage que vous recevez, avant de régler.",
        "Les maisons les plus exposées ont chacune leur page, où l'ensemble de leurs produits est regroupé. La liste complète est sur la page [[toutes les marques|/marques/]].",
      ],
    },
    {
      titre: "Livraison et paiement dans les 69 wilayas",
      paragraphes: [
        "La commande se passe en quelques champs : un prénom, un numéro de téléphone, une wilaya. Rien d'autre n'est demandé, et aucune donnée bancaire n'est saisie sur le site. Le règlement se fait au livreur, à la remise du colis, dans la monnaie du pays et au montant affiché sur la fiche.",
        "Les 69 wilayas sont desservies. Le délai dépend de la distance et du transporteur qui couvre votre commune ; il est plus court sur le nord que sur les wilayas du sud, comme pour tout envoi en Algérie. Le détail wilaya par wilaya est sur la page [[livraison|/livraison/]].",
      ],
    },
    {
      titre: "Par où commencer selon votre besoin",
      paragraphes: [
        "Une routine cohérente vaut mieux qu'une accumulation de produits. Pour le visage, trois gestes suffisent à tenir une peau : nettoyer, hydrater, protéger du soleil. Le reste — sérum, masque, exfoliant — vient s'ajouter une fois ces trois-là en place, et répond à un besoin identifié plutôt qu'à une envie.",
        "Pour les cheveux, le point de départ est l'état de la fibre, pas la promesse du flacon : un cheveu cassant ne demande pas le même soin qu'un cheveu gras à la racine. Le rayon [[soin des cheveux|/soin-cheveux/]] est organisé sur cette logique. Pour la peau exposée, en particulier sur le littoral et dans le sud, la [[crème solaire|/creme-solaire/]] reste le produit qui change le plus de choses à long terme, avant tout soin anti-âge.",
        "Le [[soin du corps|/soin-corps/]], l'[[hygiène et le bain|/hygiene-bain/]], le [[soin homme|/soin-homme/]] et les produits [[bébé et maman|/bebe-maman/]] complètent l'ensemble, avec la même règle d'entrée au catalogue.",
      ],
    },
  ],
};

/** Questions réellement posées avant un premier achat en ligne en Algérie. */
export const FAQ_ACCUEIL: { question: string; reponse: string }[] = [
  {
    question: "Comment se passe le paiement ?",
    reponse:
      "Le paiement se fait à la livraison, directement au livreur, en dinars. Aucune carte bancaire n'est demandée et aucune donnée de paiement n'est saisie sur le site. Le montant dû est celui affiché sur la fiche produit au moment de la commande.",
  },
  {
    question: "Livrez-vous dans toutes les wilayas ?",
    reponse:
      "Oui, les 69 wilayas sont desservies. Le délai varie selon la distance et le transporteur qui couvre votre commune. La page livraison détaille la couverture wilaya par wilaya.",
  },
  {
    question: "Comment savoir si un produit est original ?",
    reponse:
      "Chaque fiche indique la marque et la contenance exacte du produit. À la réception, ces deux informations doivent correspondre à l'emballage : même marque, même format, texte sans faute, liste INCI présente et lisible. Un produit qui ne correspond pas à sa fiche n'a pas à être accepté.",
  },
  {
    question: "Faut-il créer un compte pour commander ?",
    reponse:
      "Non. La commande se passe avec un prénom, un numéro de téléphone et une wilaya. Le numéro sert uniquement à confirmer la commande et à permettre au livreur de vous joindre.",
  },
  {
    question: "Puis-je voir le produit avant de payer ?",
    reponse:
      "Cela dépend du transporteur qui dessert votre commune, et c'est à confirmer avec lui à la remise du colis. En revanche, la fiche vous donne avant la commande tout ce qui permet de vérifier : marque, contenance, prix et visuel du produit.",
  },
  {
    question: "Vendez-vous des compléments alimentaires ou des médicaments ?",
    reponse:
      "Non. Le catalogue est strictement cosmétique et hygiène-beauté : soin, maquillage, parfum, hygiène corporelle et capillaire. Les formes orales, les compléments et le matériel médical n'y figurent pas.",
  },
  {
    question: "Les prix affichés sont-ils ceux que je paierai ?",
    reponse:
      "Oui. Le prix de la fiche est le prix du produit, en dinars. Les frais de livraison éventuels dépendent de votre wilaya et vous sont indiqués avant la validation de la commande.",
  },
];

/* ------------------------------------------------------------------ */
/* Pied de page                                                        */
/* ------------------------------------------------------------------ */

const COLONNES_FOOTER: ColonneFooter[] = [
  // Les 9 rayons uniquement, jamais leurs catégories : le mega menu les porte déjà.
  { id: "univers", titre: "Nos univers", liens: NAV_ITEMS },
  {
    id: "selections",
    titre: "Sélections",
    liens: [
      { libelle: "Toutes les marques", href: "/marques/" },
      { libelle: "K-Beauty", href: "/k-beauty/" },
      { libelle: "Cosmétique bio", href: "/bio/" },
      { libelle: "Peau sensible", href: "/peau-sensible/" },
    ],
  },
  {
    id: "confiance",
    titre: "Acheter en confiance",
    liens: [
      { libelle: "Livraison par wilaya", href: "/livraison/" },
      { libelle: "Paiement à la livraison", href: "/livraison/#paiement" },
      { libelle: "Produits authentiques", href: "/authenticite/" },
      { libelle: "Guides et conseils", href: "/guide/" },
      { libelle: "Contact", href: "/contact/" },
    ],
  },
  {
    id: "societe",
    titre: SITE_NOM,
    liens: [
      { libelle: "À propos", href: "/a-propos/" },
      { libelle: "Conditions générales de vente", href: "/cgv/" },
      { libelle: "Mentions légales", href: "/mentions-legales/" },
      {
        libelle: "Politique de confidentialité",
        href: "/politique-de-confidentialite/",
      },
    ],
  },
];

export const FOOTER = {
  colonnes: COLONNES_FOOTER,
  baseline:
    "Soin, parfum et hygiène livrés dans les 69 wilayas, réglés à la livraison. Produits originaux uniquement.",
};

/* ------------------------------------------------------------------ */
/* Chiffres de la page                                                 */
/* ------------------------------------------------------------------ */

/** Volumes réels, formatés une fois pour toutes les mentions de la home. */
export const CHIFFRES = {
  produits: nf.format(NB_PRODUITS),
  marques: nf.format(NB_MARQUES),
  rayons: String(RAYONS.length),
};

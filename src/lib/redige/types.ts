/**
 * Contenu rédigé à la main, page par page.
 *
 * Pourquoi ce dossier existe : la première version du site composait ses
 * textes par gabarit. Le résultat se lisait comme ce qu'il était — un moule
 * rempli de variables, avec des phrases qui annonçaient le nombre de
 * références ou la médiane des prix. Personne n'achète sur cette base, et
 * Google n'a aucune raison de préférer une page ainsi produite à celle d'un
 * concurrent qui a écrit la sienne.
 *
 * Règle du dossier : un fichier par page, un texte écrit pour cette page et
 * pour aucune autre. Aucune statistique de catalogue dans le corps du texte.
 * Aucune phrase interchangeable d'une page à l'autre.
 *
 * Le vocabulaire « pas cher », « promo », « discount », « solde » est
 * proscrit : le positionnement est le produit d'origine, jamais le prix bas.
 */

/** Un paragraphe peut porter des liens internes, insérés dans la phrase. */
export interface SectionRedigee {
  /** Titre de section, en H2 sur la page. Absent pour l'introduction. */
  titre?: string;
  paragraphes: string[];
}

export interface QuestionRedigee {
  question: string;
  reponse: string;
}

/** Contenu d'une page de taxonomie : département, catégorie ou sous-catégorie. */
export interface CategorieRedigee {
  /** URL du nœud, telle qu'elle figure dans la taxonomie. Clé d'entrée. */
  url: string;
  /**
   * Chapeau affiché sous le H1, avant la grille de produits. Deux ou trois
   * phrases qui situent le rayon et portent le mot-clé naturellement.
   */
  chapeau: string[];
  /** Sections de fond, sous la grille. Chacune avec son H2. */
  sections: SectionRedigee[];
  /** Questions réellement tapées sur ce sujet en Algérie. */
  faq: QuestionRedigee[];
}

/** Contenu d'une page marque. */
export interface MarqueRedigee {
  /** Slug de la marque, tel qu'il figure dans marques.json. */
  slug: string;
  chapeau: string[];
  sections: SectionRedigee[];
  faq: QuestionRedigee[];
}

/**
 * Note écrite pour un produit précis.
 *
 * Ce n'est pas une description générique de sa famille : c'est ce que l'on
 * sait de ce produit-là. Une fiche sans `identite` n'est pas retenue.
 */
export interface FicheRedigee {
  /** Slug du produit. Clé d'entrée. */
  slug: string;
  /** Ce qu'est ce produit, en propre. 50 à 110 mots. */
  identite: string[];
  /** Pyramide olfactive, pour un parfum uniquement. */
  olfactif?: {
    famille: string;
    tete?: string;
    coeur?: string;
    fond?: string;
    /** Eau de toilette, eau de parfum, extrait… */
    concentration?: string;
    annee?: string;
    parfumeur?: string;
  };
  /** Faits propres au produit, rendus en liste de définitions. */
  faits?: { libelle: string; valeur: string }[];
  /** Comment s'en servir, pour celui-ci. 40 à 90 mots. */
  usage?: string[];
  /** Ce qu'il apporte face aux autres de son rayon. 40 à 90 mots. */
  positionnement?: string[];
  /** Questions propres à ce produit, jamais des questions de rayon. */
  faq?: QuestionRedigee[];
}

/**
 * Forme du contenu d'une page « univers » (K-beauty, bio, peau sensible).
 *
 * Ces pages sont des têtes de silo transverses : elles traversent l'arbre au
 * lieu de le suivre. Elles captent une intention large — « cosmétique
 * coréenne algérie » — et redistribuent vers les catégories qui, elles,
 * vendent. Elles n'existent que si elles apportent un texte utile : une page
 * de liens sans contenu propre est exactement ce que Google ignore.
 */

export interface SectionHub {
  titre: string;
  paragraphes: string[];
}

export interface ContenuHub {
  intro: string[];
  sections: SectionHub[];
  faq: { question: string; reponse: string }[];
}

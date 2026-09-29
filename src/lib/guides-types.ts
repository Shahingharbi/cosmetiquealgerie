/**
 * Forme d'un guide.
 *
 * Les guides sont les pages « complémentaires » du cocon sémantique : elles
 * répondent à une question, sans vendre, et renvoient vers les catégories qui
 * vendent. Le sens du lien est unique — le guide pointe vers les rayons,
 * jamais l'inverse — pour ne pas mélanger les silos.
 *
 * Leur intérêt est double : capter des requêtes d'information que les pages
 * catégorie n'atteindront jamais, et donner au site une raison d'exister
 * au-delà de son catalogue.
 */

export interface SectionGuide {
  titre: string;
  paragraphes: string[];
}

export interface Guide {
  /** Dernier segment de l'URL : /guide/{slug}/ */
  slug: string;
  /** Balise title, ≤ 60 caractères de préférence. */
  titre: string;
  h1: string;
  description: string;
  /** Réponse immédiate, avant tout développement : 40 à 60 mots. */
  chapo: string;
  sections: SectionGuide[];
  faq: { question: string; reponse: string }[];
}

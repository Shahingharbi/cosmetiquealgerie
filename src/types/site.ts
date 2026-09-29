/**
 * Types du contenu éditorial du site (page d'accueil, chrome, pied de page).
 * Les types du catalogue produit vivent dans `catalogue.ts`.
 */

/**
 * Vignette carrée d'un carrousel : un visuel, un libellé, un lien.
 * Sert aussi bien aux rayons qu'aux marques — même gabarit, même carte.
 */
export interface Vignette {
  /** Clé de rendu, stable : slug du rayon ou de la marque. */
  id: string;
  title: string;
  /** URL absolue d'un packshot du catalogue. Aucun visuel d'ambiance. */
  image: string;
  href: string;
}

/** Un lien de navigation ou de pied de page. */
export interface LienSite {
  libelle: string;
  href: string;
}

/** Une colonne du pied de page. `id` sert d'identifiant d'accordéon mobile. */
export interface ColonneFooter {
  id: string;
  titre: string;
  liens: LienSite[];
}

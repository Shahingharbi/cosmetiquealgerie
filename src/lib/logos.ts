/**
 * Index des logos de marque retenus. FICHIER GÉNÉRÉ.
 *
 * Produit par pipeline/8-logos/installer_logos.mjs. Ne pas éditer à la main :
 * la prochaine régénération écraserait la modification.
 *
 * Critères d'entrée, tous obligatoires :
 *  - fichier sourcé sur Wikimedia Commons sous licence libre (domaine public
 *    ou Creative Commons) ; les licences non libres sont écartées au sourcing ;
 *  - logo vérifié visuellement comme appartenant à CETTE marque de cosmétique
 *    et non à une entreprise homonyme ;
 *  - aucune personne, aucun visage sur le visuel.
 *
 * Les verdicts, y compris les refus motivés, sont archivés dans
 * donnees/logos-sources/verdicts.json.
 *
 * Une marque absente de cet index s'affiche en typographie : c'est un rendu
 * prévu, pas un défaut. Voir components/LogoMarque.tsx.
 */

export interface LogoRetenu {
  src: string;
  largeur: number;
  hauteur: number;
}

export const LOGOS: Record<string, LogoRetenu> = {
  "aroma-zone": { src: "/logos-marques/aroma-zone.png", largeur: 400, hauteur: 200 },
  "avene": { src: "/logos-marques/avene.png", largeur: 400, hauteur: 200 },
  "babyliss": { src: "/logos-marques/babyliss.png", largeur: 400, hauteur: 200 },
  "bath-et-body-works": { src: "/logos-marques/bath-et-body-works.png", largeur: 400, hauteur: 200 },
  "benefit": { src: "/logos-marques/benefit.png", largeur: 400, hauteur: 200 },
  "bioderma": { src: "/logos-marques/bioderma.png", largeur: 400, hauteur: 200 },
  "caudalie": { src: "/logos-marques/caudalie.png", largeur: 400, hauteur: 200 },
  "cetaphil": { src: "/logos-marques/cetaphil.png", largeur: 400, hauteur: 200 },
  "clinique": { src: "/logos-marques/clinique.png", largeur: 400, hauteur: 200 },
  "colgate": { src: "/logos-marques/colgate.webp", largeur: 400, hauteur: 200 },
  "diadermine": { src: "/logos-marques/diadermine.jpg", largeur: 400, hauteur: 200 },
  "durex": { src: "/logos-marques/durex.png", largeur: 400, hauteur: 200 },
  "essence": { src: "/logos-marques/essence.jpg", largeur: 400, hauteur: 200 },
  "eucerin": { src: "/logos-marques/eucerin.png", largeur: 400, hauteur: 200 },
  "evoluderm": { src: "/logos-marques/evoluderm.png", largeur: 400, hauteur: 200 },
  "filorga": { src: "/logos-marques/filorga.jpg", largeur: 400, hauteur: 200 },
  "flormar": { src: "/logos-marques/flormar.png", largeur: 400, hauteur: 200 },
  "garnier": { src: "/logos-marques/garnier.png", largeur: 400, hauteur: 200 },
  "gillette": { src: "/logos-marques/gillette.png", largeur: 400, hauteur: 200 },
  "hudabeauty": { src: "/logos-marques/hudabeauty.png", largeur: 400, hauteur: 200 },
  "kiko-milano": { src: "/logos-marques/kiko-milano.png", largeur: 400, hauteur: 200 },
  "la-roche-posay": { src: "/logos-marques/la-roche-posay.png", largeur: 400, hauteur: 200 },
  "labello": { src: "/logos-marques/labello.png", largeur: 400, hauteur: 200 },
  "lancome": { src: "/logos-marques/lancome.jpg", largeur: 400, hauteur: 200 },
  "listerine": { src: "/logos-marques/listerine.png", largeur: 400, hauteur: 200 },
  "loreal-paris": { src: "/logos-marques/loreal-paris.png", largeur: 400, hauteur: 200 },
  "maybelline": { src: "/logos-marques/maybelline.png", largeur: 400, hauteur: 200 },
  "natura": { src: "/logos-marques/natura.webp", largeur: 400, hauteur: 200 },
  "neutrogena": { src: "/logos-marques/neutrogena.png", largeur: 400, hauteur: 200 },
  "nivea": { src: "/logos-marques/nivea.png", largeur: 400, hauteur: 200 },
  "nuxe": { src: "/logos-marques/nuxe.png", largeur: 400, hauteur: 200 },
  "nyx": { src: "/logos-marques/nyx.jpg", largeur: 400, hauteur: 200 },
  "oral-b": { src: "/logos-marques/oral-b.png", largeur: 400, hauteur: 200 },
  "rexona": { src: "/logos-marques/rexona.jpg", largeur: 400, hauteur: 200 },
  "rituals": { src: "/logos-marques/rituals.png", largeur: 400, hauteur: 200 },
  "sephora": { src: "/logos-marques/sephora.jpg", largeur: 400, hauteur: 200 },
  "sunsilk": { src: "/logos-marques/sunsilk.png", largeur: 400, hauteur: 200 },
  "vaseline": { src: "/logos-marques/vaseline.png", largeur: 400, hauteur: 200 },
  "vichy": { src: "/logos-marques/vichy.jpg", largeur: 400, hauteur: 200 },
  "victorias-secret": { src: "/logos-marques/victorias-secret.png", largeur: 400, hauteur: 200 },
  "yves-rocher": { src: "/logos-marques/yves-rocher.png", largeur: 400, hauteur: 200 },
};

export function logoMarque(slug: string): LogoRetenu | undefined {
  return LOGOS[slug];
}

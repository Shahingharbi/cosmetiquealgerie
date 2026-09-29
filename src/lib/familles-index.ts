/**
 * Quelle famille éditoriale décrit quel nœud de l'arbre.
 *
 * La table est écrite à la main, nœud par nœud. Un rapprochement automatique
 * par ressemblance de slugs a été essayé : il envoyait « soin-cheveux » vers
 * la famille « soin coréen » et « coloration » vers « masque cheveux ». Sur un
 * catalogue de 22 500 fiches, une erreur de famille produit des milliers de
 * pages qui racontent n'importe quoi. Une table explicite se relit et se
 * corrige ; une heuristique, non.
 *
 * Les nœuds de niveau 1 (les rayons) tombent sur une famille « rayon-… » :
 * environ 3 000 produits sont rangés directement au rayon parce que la donnée
 * du marchand ne permettait pas mieux, et leur texte doit rester vrai pour
 * tout le rayon.
 */

import { FAMILLES, type Famille } from "@/lib/familles-produits";
import { FAMILLES_BEBE_MAMAN } from "@/lib/familles/bebe-maman";
import { FAMILLES_HYGIENE } from "@/lib/familles/hygiene";
import { FAMILLES_HYGIENE_INTIME_EPILATION } from "@/lib/familles/hygiene-intime-epilation";
import { FAMILLES_MAQUILLAGE_LEVRES_ONGLES } from "@/lib/familles/maquillage-levres-ongles";
import { FAMILLES_MAQUILLAGE_TEINT } from "@/lib/familles/maquillage-teint";
import { FAMILLES_MAQUILLAGE_YEUX } from "@/lib/familles/maquillage-yeux";
import { FAMILLES_PARFUM } from "@/lib/familles/parfum";
import { FAMILLES_RAYONS } from "@/lib/familles/rayons";
import { FAMILLES_SOIN_HOMME } from "@/lib/familles/soin-homme";

/** Toutes les familles disponibles, quelle que soit leur origine. */
export const TOUTES_FAMILLES: Record<string, Famille> = {
  ...FAMILLES,
  ...FAMILLES_MAQUILLAGE_TEINT,
  ...FAMILLES_MAQUILLAGE_YEUX,
  ...FAMILLES_MAQUILLAGE_LEVRES_ONGLES,
  ...FAMILLES_PARFUM,
  ...FAMILLES_HYGIENE,
  ...FAMILLES_HYGIENE_INTIME_EPILATION,
  ...FAMILLES_BEBE_MAMAN,
  ...FAMILLES_SOIN_HOMME,
  ...FAMILLES_RAYONS,
};

/** Rayon (niveau 1) -> famille de repli. */
const PAR_RAYON: Record<string, string> = {
  "soin-visage": "rayon-soin-visage",
  "soin-corps": "rayon-soin-corps",
  "soin-cheveux": "rayon-soin-cheveux",
  maquillage: "rayon-maquillage",
  "hygiene-bain": "rayon-hygiene-bain",
  parfum: "rayon-parfum",
  "creme-solaire": "rayon-creme-solaire",
  "soin-homme": "rayon-soin-homme",
  "bebe-maman": "rayon-bebe-maman",
};

/** Catégorie ou sous-catégorie -> famille. */
const PAR_NOEUD: Record<string, string> = {
  /* ---- Soin du visage ---- */
  "nettoyant-visage": "nettoyant-visage",
  "gel-nettoyant-visage": "nettoyant-visage",
  "eau-micellaire": "eau-micellaire",
  "demaquillant-visage": "demaquillant",
  "huile-demaquillante-visage": "huile-demaquillante",
  "lotion-tonique-visage": "tonique",
  "creme-hydratante-visage": "creme-visage",
  "creme-de-jour-visage": "creme-visage",
  "creme-de-nuit-visage": "creme-nuit",
  "creme-peau-seche": "creme-visage",
  "creme-peau-normale": "creme-visage",
  "eau-thermale-visage": "eau-thermale",
  "serum-visage": "serum-visage",
  "serum-anti-age": "serum-anti-age",
  "serum-anti-imperfections": "serum-anti-imperfections",
  "serum-acide-hyaluronique": "serum-hyaluronique",
  "serum-vitamine-c": "serum-vitamine-c",
  "serum-retinol": "serum-retinol",
  "serum-niacinamide": "serum-niacinamide",
  "serum-collagene": "serum-collagene",
  "soin-anti-age-visage": "anti-age-visage",
  "soin-raffermissant-visage": "anti-age-visage",
  "creme-premieres-rides": "anti-age-visage",
  "contour-des-yeux": "contour-yeux",
  "soin-cernes-poches-yeux": "contour-yeux",
  "contour-des-yeux-anti-age": "contour-yeux",
  "masque-visage": "masque-visage",
  "gommage-visage": "gommage-visage",
  "peau-a-problemes": "anti-acne",
  "soin-anti-acne-visage": "anti-acne",
  "nettoyant-anti-imperfections": "anti-acne",
  "creme-anti-imperfections": "anti-acne",
  "masque-anti-imperfections": "anti-acne",
  "soin-anti-taches-visage": "anti-taches",
  "creme-eclaircissante-visage": "anti-taches",
  "soin-peau-sensible-rougeurs": "apaisant-rougeurs",
  "soin-peau-atopique-eczema": "apaisant-rougeurs",
  "creme-cicatrisante": "cicatrisant",
  "creme-reparatrice-visage": "cicatrisant",
  "soin-visage-coreen": "soin-coreen",
  "soin-levres": "baume-levres",
  "baume-a-levres": "baume-levres",

  /* ---- Crème solaire ---- */
  "creme-solaire": "solaire-visage",
  "creme-solaire-visage": "solaire-visage",
  "ecran-solaire-peau-sensible": "solaire-visage",
  "ecran-solaire-peau-grasse": "solaire-visage",
  "creme-solaire-corps": "solaire-corps",
  "spray-solaire": "solaire-corps",
  "creme-solaire-enfant": "solaire-enfant",
  "creme-solaire-spf-50": "solaire-corps",
  "creme-solaire-spf-30": "solaire-corps",
  "apres-soleil": "apres-soleil",
  autobronzant: "autobronzant",

  /* ---- Soin cheveux ---- */
  shampoing: "shampoing",
  "shampoing-antipelliculaire": "shampoing-antipelliculaire",
  "shampoing-cheveux-secs": "shampoing",
  "shampoing-sec": "shampoing-sec",
  "shampoing-sans-sulfate": "shampoing",
  "shampoing-keratine": "shampoing",
  "apres-shampoing": "apres-shampoing",
  "masque-cheveux": "masque-cheveux",
  "soin-anti-chute-cheveux": "anti-chute",
  "shampoing-anti-chute": "anti-chute",
  "huile-cheveux": "huile-cheveux",
  "serum-cheveux": "serum-cheveux",
  "creme-cheveux": "creme-cheveux",
  "coloration-cheveux": "coloration",
  "gel-coiffant-cheveux": "coiffant",
  "appareil-coiffant": "appareil-coiffant",

  /* ---- Soin du corps ---- */
  "lait-corps": "lait-corps",
  "creme-hydratante-corps": "creme-corps",
  "huile-corps": "huile-corps",
  "huile-vegetale": "huile-vegetale",
  "huile-essentielle": "huile-essentielle",
  "gommage-corps": "gommage-corps",
  "creme-mains": "creme-mains",
  "creme-pieds": "creme-pieds",
  deodorant: "deodorant",
  "anti-transpirant": "anti-transpirant",
  "deodorant-roll-on": "deodorant",
  "soin-minceur-vergetures": "minceur",

  /* ---- Maquillage ---- */
  "maquillage-teint": "fond-de-teint",
  "fond-de-teint": "fond-de-teint",
  "poudre-visage": "poudre-visage",
  "anti-cernes": "anti-cernes",
  blush: "blush",
  "enlumineur-contouring": "enlumineur",
  "base-de-teint": "base-de-teint",
  "bb-cc-creme": "bb-cc-creme",
  // Nœud fourre-tout : mascaras, crayons et fards s'y mêlent, le texte doit
  // rester celui du rayon plutôt que de parler mascara à une acheteuse de fard.
  "maquillage-yeux": "rayon-maquillage",
  mascara: "mascara",
  "eyeliner-khol": "eyeliner",
  "fard-a-paupieres": "fard-a-paupieres",
  "maquillage-sourcils": "sourcils",
  "maquillage-levres": "rouge-a-levres",
  "rouge-a-levres": "rouge-a-levres",
  "gloss-levres": "gloss",
  "vernis-a-ongles": "vernis-ongles",
  "palette-maquillage": "palette-maquillage",
  "pinceau-maquillage": "pinceau-maquillage",

  /* ---- Parfum ---- */
  "parfum-femme": "eau-de-parfum",
  "eau-de-parfum-femme": "eau-de-parfum",
  "eau-de-toilette-femme": "eau-de-toilette",
  // Le nœud homme mêle eaux de parfum et eaux de toilette : repli sur le rayon.
  "parfum-homme": "rayon-parfum",
  "brume-parfumee": "brume-parfumee",
  "eau-de-cologne": "eau-de-cologne",
  "coffret-parfum": "coffret-parfum",

  /* ---- Hygiène et bain ---- */
  "gel-douche": "gel-douche",
  savon: "savon",
  "hygiene-bucco-dentaire": "dentifrice",
  dentifrice: "dentifrice",
  "brosse-a-dents": "brosse-a-dents",
  "bain-de-bouche": "bain-de-bouche",
  "hygiene-intime": "hygiene-intime",
  "protection-hygienique": "protection-hygienique",
  epilation: "epilation",
  "coton-lingette": "coton-lingette",

  /* ---- Bébé et maman ---- */
  "soin-toilette-bebe": "soin-bebe",
  "change-bebe": "change-bebe",
  "soin-maman-grossesse": "soin-grossesse",
  "accessoire-bebe": "accessoire-bebe",

  /* ---- Soin homme ---- */
  "deodorant-homme": "deodorant-homme",
  "shampoing-homme": "shampoing-homme",
  "soin-visage-homme": "soin-visage-homme",
  "gel-douche-homme": "gel-douche-homme",
  "rasage-homme": "rasage-homme",
};

/**
 * Famille décrivant un produit, à partir de l'URL de son nœud et de son rayon.
 * Le dernier segment de l'URL identifie le nœud ; un rayon n'a qu'un segment.
 */
export function familleDuNoeud(urlNoeud: string, departement: string): Famille | undefined {
  const segments = urlNoeud.split("/").filter(Boolean);
  const dernier = segments[segments.length - 1];

  if (segments.length <= 1) {
    return TOUTES_FAMILLES[PAR_RAYON[departement] ?? ""];
  }
  const cle = PAR_NOEUD[dernier];
  if (cle && TOUTES_FAMILLES[cle]) return TOUTES_FAMILLES[cle];

  // Nœud non cartographié : le rayon reste vrai, c'est le pire des cas acceptable.
  return TOUTES_FAMILLES[PAR_RAYON[departement] ?? ""];
}

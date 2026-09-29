/**
 * Les 69 wilayas d'Algérie, dans l'ordre officiel des matricules.
 *
 * 1 à 58 : découpage de décembre 2019.
 * 59 à 69 : les onze wilayas créées par la réorganisation territoriale actée en
 * Conseil des ministres le 16 novembre 2025, inscrites dans la loi n° 26-06 du
 * 4 avril 2026. Les matricules 59 à 69 sont ceux du décret, pas un ordre
 * alphabétique — ne pas les réordonner.
 *
 * Le code est la valeur transmise par le formulaire de commande ; le nom n'est
 * qu'un libellé d'affichage. Aucune wilaya ne devient jamais une URL du site :
 * ce serait 69 pages sans contenu propre qui dilueraient le cocon.
 */

export interface Wilaya {
  /** Matricule officiel sur deux chiffres. Sert de valeur de formulaire. */
  code: string;
  nom: string;
}

export const WILAYAS: readonly Wilaya[] = [
  { code: "01", nom: "Adrar" },
  { code: "02", nom: "Chlef" },
  { code: "03", nom: "Laghouat" },
  { code: "04", nom: "Oum El Bouaghi" },
  { code: "05", nom: "Batna" },
  { code: "06", nom: "Béjaïa" },
  { code: "07", nom: "Biskra" },
  { code: "08", nom: "Béchar" },
  { code: "09", nom: "Blida" },
  { code: "10", nom: "Bouira" },
  { code: "11", nom: "Tamanrasset" },
  { code: "12", nom: "Tébessa" },
  { code: "13", nom: "Tlemcen" },
  { code: "14", nom: "Tiaret" },
  { code: "15", nom: "Tizi Ouzou" },
  { code: "16", nom: "Alger" },
  { code: "17", nom: "Djelfa" },
  { code: "18", nom: "Jijel" },
  { code: "19", nom: "Sétif" },
  { code: "20", nom: "Saïda" },
  { code: "21", nom: "Skikda" },
  { code: "22", nom: "Sidi Bel Abbès" },
  { code: "23", nom: "Annaba" },
  { code: "24", nom: "Guelma" },
  { code: "25", nom: "Constantine" },
  { code: "26", nom: "Médéa" },
  { code: "27", nom: "Mostaganem" },
  { code: "28", nom: "M'Sila" },
  { code: "29", nom: "Mascara" },
  { code: "30", nom: "Ouargla" },
  { code: "31", nom: "Oran" },
  { code: "32", nom: "El Bayadh" },
  { code: "33", nom: "Illizi" },
  { code: "34", nom: "Bordj Bou Arréridj" },
  { code: "35", nom: "Boumerdès" },
  { code: "36", nom: "El Tarf" },
  { code: "37", nom: "Tindouf" },
  { code: "38", nom: "Tissemsilt" },
  { code: "39", nom: "El Oued" },
  { code: "40", nom: "Khenchela" },
  { code: "41", nom: "Souk Ahras" },
  { code: "42", nom: "Tipaza" },
  { code: "43", nom: "Mila" },
  { code: "44", nom: "Aïn Defla" },
  { code: "45", nom: "Naâma" },
  { code: "46", nom: "Aïn Témouchent" },
  { code: "47", nom: "Ghardaïa" },
  { code: "48", nom: "Relizane" },
  { code: "49", nom: "Timimoun" },
  { code: "50", nom: "Bordj Badji Mokhtar" },
  { code: "51", nom: "Ouled Djellal" },
  { code: "52", nom: "Béni Abbès" },
  { code: "53", nom: "In Salah" },
  { code: "54", nom: "In Guezzam" },
  { code: "55", nom: "Touggourt" },
  { code: "56", nom: "Djanet" },
  { code: "57", nom: "El M'Ghair" },
  { code: "58", nom: "El Meniaa" },
  // Créations de 2025-2026.
  { code: "59", nom: "Aflou" },
  { code: "60", nom: "Barika" },
  { code: "61", nom: "El Kantara" },
  { code: "62", nom: "Bir El Ater" },
  { code: "63", nom: "El Aricha" },
  { code: "64", nom: "Ksar Chellala" },
  { code: "65", nom: "Aïn Oussera" },
  { code: "66", nom: "Messaad" },
  { code: "67", nom: "Ksar El Boukhari" },
  { code: "68", nom: "Bou Saâda" },
  { code: "69", nom: "El Abiodh Sidi Cheikh" },
];

const parCode = new Map<string, Wilaya>(WILAYAS.map((w) => [w.code, w]));

export function wilayaParCode(code: string): Wilaya | undefined {
  return parCode.get(code);
}

/** Le code reçu du formulaire vient du navigateur : il n'est jamais présumé valide. */
export function codeWilayaValide(code: string): boolean {
  return parCode.has(code);
}

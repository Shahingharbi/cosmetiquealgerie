/**
 * Garde-fou de déploiement : aucun médicament ne revient dans le catalogue.
 *
 * Lancé avant chaque build (script `prebuild`), donc aussi sur Vercel. S'il
 * trouve un produit interdit, le build échoue et rien n'est publié.
 *
 * Ce qu'il protège. Le 10/10/2026, 292 produits ont été retirés : médicaments
 * (Acretin, trétinoïne, hydroquinone, Minoxidil, Biafine…), dispositifs
 * médicaux et statuts incertains. La vente de médicaments est réservée aux
 * pharmacies en Algérie (loi 18-11). Une régénération du catalogue depuis
 * d'anciennes données, ou un nouveau scraping, pourrait les faire revenir
 * sans que personne le voie.
 *
 * Deux contrôles :
 *  1. aucun slug de data/produits-retires.json n'est présent dans le catalogue ;
 *  2. aucun nom de produit ne contient un médicament ou un principe actif
 *     pharmaceutique connu (liste ci-dessous, volontairement limitée aux
 *     termes sans ambiguïté pour ne pas bloquer un cosmétique).
 *
 * En cas d'échec : retirer le produit (pipeline/3-purge-classement/
 * retirer_medicaments.py), ou, si c'est un vrai cosmétique, affiner la liste.
 */

import { readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const APP = join(dirname(fileURLToPath(import.meta.url)), "..", "..");
const produits = JSON.parse(readFileSync(join(APP, "data", "produits.json"), "utf8"));
const retires = new Set(JSON.parse(readFileSync(join(APP, "data", "produits-retires.json"), "utf8")).slugs);

// Noms commerciaux et principes actifs sans ambiguïté possible avec un cosmétique.
const INTERDITS = [
  "acretin", "retacnyl", "effederm", "locacid", "differin", "epiduo", "isotrexin", "erylik", "erythrogel",
  "zindaclin", "dalacine", "fucidine", "fucicort", "diprosone", "diprosalic", "betneval", "dermoval",
  "locoid", "locapred", "mycoster", "pevaryl", "daktarin", "lamisil", "ketoderm", "nizoral", "zovirax",
  // Pas « biafine » : Cica Biafine et Biafine Soleil sont des cosmétiques ;
  // seule l'émulsion est un médicament, retirée par son slug.
  "flammazine", "betadine", "skinoren", "finacea", "rozex", "metrogel", "soolantra", "cutacnyl",
  "titanoreine", "xylocaine", "alostil", "regaine", "rogaine",
  "tretinoine", "tretinoin", "adapalene", "isotretinoine", "hydroquinone", "minoxidil", "clobetasol",
  "betamethasone", "hydrocortisone", "ketoconazole", "miconazole", "econazole", "terbinafine", "aciclovir",
  "metronidazole", "clindamycine", "erythromycine", "acide fusidique", "lidocaine", "peroxyde de benzoyle",
  "benzoyl peroxide", "diclofenac", "ketoprofene", "sulfadiazine", "ivermectine", "permethrine",
];

const sansAccents = (s) =>
  s.normalize("NFKD").replace(/[̀-ͯ]/g, "").toLowerCase();
const motif = new RegExp(`\\b(?:${INTERDITS.join("|")})\\b`);

let anomalies = 0;
for (const p of produits) {
  if (retires.has(p.slug)) {
    anomalies++;
    console.error(`  ✗ ${p.slug} : produit retiré le 10/10/2026, revenu dans le catalogue`);
    continue;
  }
  const m = sansAccents(`${p.nom} ${p.marque ?? ""}`).match(motif);
  if (m) {
    anomalies++;
    console.error(`  ✗ ${p.slug} : « ${m[0]} » dans « ${p.nom} »`);
  }
}

if (anomalies > 0) {
  console.error(
    `\nDéploiement refusé : ${anomalies} médicament(s) ou produit(s) retiré(s) dans le catalogue.\n` +
      "La vente de médicaments est réservée aux pharmacies.\n",
  );
  process.exit(1);
}

console.log(`Catalogue vérifié : ${produits.length} produits, aucun médicament ni produit retiré.`);

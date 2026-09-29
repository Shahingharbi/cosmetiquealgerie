/**
 * Garde-fou de déploiement : public/ ne contient que ce que le site utilise.
 *
 * Lancé automatiquement avant chaque build (script `prebuild` de package.json),
 * donc aussi sur Vercel. S'il échoue, le build échoue, et rien ne part en ligne.
 *
 * Ce qu'il protège : le pipeline d'images écrit TOUS les visuels normalisés
 * dans public/produits-web/, y compris ceux que le tri de provenance a rejetés
 * — des photos prises aux marchands concurrents. Tout fichier de public/ est
 * servi à une URL publique, qu'une page le référence ou non. Relancer le
 * pipeline sans refaire le tri aurait donc remis ces photos en ligne, sous
 * notre domaine, sans qu'aucune page ne le laisse voir.
 *
 * En cas d'échec : `python pipeline/11-deploiement/isoler_images.py --appliquer`
 * range les fichiers en trop hors du dépôt, sans rien supprimer.
 */

import { existsSync, readFileSync, readdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const APP = join(dirname(fileURLToPath(import.meta.url)), "..", "..");
const PUBLIC = join(APP, "public");

let erreurs = 0;

function echec(message) {
  console.error(`  ✗ ${message}`);
  erreurs++;
}

/* 1. Dossiers qui ne doivent jamais exister dans public/ ------------------ */

for (const interdit of ["produits", "produits-obf"]) {
  if (existsSync(join(PUBLIC, interdit))) {
    echec(
      `public/${interdit}/ est présent : ce sont les visuels BRUTS des marchands, ` +
        "avant tout tri. Ils ne doivent jamais être servis.",
    );
  }
}

/* 2. produits-web ne contient que des visuels référencés ------------------- */

const brut = JSON.parse(readFileSync(join(APP, "data", "produits.json"), "utf8"));
const produits = Array.isArray(brut) ? brut : brut.produits ?? [];

const references = new Set();
for (const p of produits) {
  for (const image of p.images ?? []) {
    if (image.startsWith("/produits-web/")) references.add(image.slice("/produits-web/".length));
  }
}

const dossier = join(PUBLIC, "produits-web");
const presents = existsSync(dossier) ? readdirSync(dossier) : [];
const enTrop = presents.filter((f) => !references.has(f));
const manquants = [...references].filter((f) => !presents.includes(f));

if (enTrop.length > 0) {
  echec(
    `${enTrop.length} visuel(s) dans public/produits-web/ ne sont référencés par aucun ` +
      `produit — probablement rejetés par le tri de provenance. Exemple : ${enTrop[0]}`,
  );
}

// Un visuel référencé mais absent donne une image cassée sur la fiche : c'est
// aussi un défaut de déploiement, pas seulement un défaut d'affichage.
if (manquants.length > 0) {
  echec(
    `${manquants.length} visuel(s) référencé(s) par data/produits.json sont absents ` +
      `de public/produits-web/. Exemple : ${manquants[0]}`,
  );
}

/* Bilan ------------------------------------------------------------------ */

if (erreurs > 0) {
  console.error(
    `\nDéploiement refusé : ${erreurs} anomalie(s) dans public/.\n` +
      "Correction : python pipeline/11-deploiement/isoler_images.py --appliquer\n",
  );
  process.exit(1);
}

console.log(`public/ vérifié : ${presents.length} visuels, tous référencés, aucun dossier brut.`);

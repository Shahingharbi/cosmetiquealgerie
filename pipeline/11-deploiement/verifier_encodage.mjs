/**
 * Garde-fou de déploiement : aucun texte mal encodé ne part en ligne.
 *
 * Lancé avant chaque build (script `prebuild` de package.json), donc aussi sur
 * Vercel. S'il trouve une anomalie, le build échoue et rien n'est publié.
 *
 * Ce qu'il protège. Le 30/09/2026, les 542 pages marque affichaient
 * « Awane en AlgÃ©rie » dans leur H1, leur title et leur description :
 * src/app/marques/[marque]/page.tsx avait été enregistré en Windows-1252 dès
 * juillet, et chaque accent écrit en dur dans le code était devenu deux
 * caractères. Le site compilait sans erreur, et Google indexait ces titres.
 *
 * Trois défauts sont cherchés :
 *  1. le double encodage (UTF-8 relu en Windows-1252) : « Ã© », « Ã¨ »,
 *     « Ã€ », « â€™ ». Un « Ã » ou un « Â » seul ne suffit pas : « Anti-Âge »
 *     est du français correct. Il faut le 2e caractère de la plage haute ;
 *  2. le caractère de remplacement U+FFFD, trace d'un décodage raté ;
 *  3. les caractères de contrôle, qu'un heredoc de shell glisse dans un
 *     fichier à la place de \b ou \d (piège vécu dans le pipeline Fragrantica).
 *
 * En cas d'échec : la réparation d'un double encodage consiste à réencoder
 * les séquences en Windows-1252 puis à les relire en UTF-8, séquence par
 * séquence — jamais sur le fichier entier, qui mélange souvent parties saines
 * et parties abîmées.
 */

import { readFileSync, readdirSync, statSync } from "node:fs";
import { dirname, extname, join, relative } from "node:path";
import { fileURLToPath } from "node:url";

const APP = join(dirname(fileURLToPath(import.meta.url)), "..", "..");

const RACINES = ["src", "data"];
const EXTENSIONS = new Set([".ts", ".tsx", ".js", ".mjs", ".json", ".css", ".md", ".txt", ".svg"]);
const FICHIERS_RACINE_PUBLIC = ["llms.txt", "robots.txt"];

// Ce qu'un octet de 0x80 à 0xBF devient une fois relu en Windows-1252.
const SUITES = " -¿€‚ƒ„…†‡ˆ‰Š‹ŒŽ‘’“”•–—˜™š›œžŸ";
const DOUBLE_ENCODAGE = new RegExp(`[ÂÃ][${SUITES}]|â€[${SUITES}]`, "g");
const REMPLACEMENT = /�/g;
// Tout caractère de contrôle sauf tabulation, saut de ligne et retour chariot.
// eslint-disable-next-line no-control-regex
const CONTROLE = /[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g;

function* parcourir(dossier) {
  for (const nom of readdirSync(dossier)) {
    const chemin = join(dossier, nom);
    if (statSync(chemin).isDirectory()) yield* parcourir(chemin);
    else if (EXTENSIONS.has(extname(nom))) yield chemin;
  }
}

const fichiers = [
  ...RACINES.flatMap((r) => [...parcourir(join(APP, r))]),
  ...FICHIERS_RACINE_PUBLIC.map((f) => join(APP, "public", f)).filter((f) => {
    try {
      return statSync(f).isFile();
    } catch {
      return false;
    }
  }),
];

let anomalies = 0;

for (const fichier of fichiers) {
  const texte = readFileSync(fichier, "utf8");
  const lignes = texte.split("\n");
  for (const [motif, libelle] of [
    [DOUBLE_ENCODAGE, "double encodage"],
    [REMPLACEMENT, "caractère de remplacement U+FFFD"],
    [CONTROLE, "caractère de contrôle"],
  ]) {
    motif.lastIndex = 0;
    if (!motif.test(texte)) continue;
    lignes.forEach((ligne, i) => {
      motif.lastIndex = 0;
      const m = motif.exec(ligne);
      if (!m) return;
      anomalies++;
      if (anomalies <= 20) {
        const debut = Math.max(0, m.index - 30);
        const extraitLigne = ligne.slice(debut, m.index + 30).replace(CONTROLE, "␣");
        console.error(`  ✗ ${relative(APP, fichier)}:${i + 1} — ${libelle} : « ${extraitLigne} »`);
      }
    });
  }
}

if (anomalies > 0) {
  console.error(
    `\nDéploiement refusé : ${anomalies} ligne(s) mal encodée(s)` +
      (anomalies > 20 ? " (20 premières affichées)" : "") +
      ".\nUn accent cassé dans le code s'affiche tel quel sur le site et dans Google.\n",
  );
  process.exit(1);
}

console.log(`Encodage vérifié : ${fichiers.length} fichiers, aucun accent cassé ni caractère de contrôle.`);

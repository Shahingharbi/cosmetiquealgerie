/**
 * IndexNow : signale des pages du site à Bing (30/10/2026).
 *
 * Pourquoi : depuis la mi-octobre Google ne montre presque plus le site, mais
 * ChatGPT continue d'envoyer ~130 visiteurs par jour. La recherche de ChatGPT
 * s'appuie surtout sur l'index de Bing : chaque page que Bing indexe est une
 * page que ChatGPT peut proposer. IndexNow est le moyen officiel de prévenir
 * Bing ; une soumission est partagée avec Yandex, Seznam et Naver. Aucun quota
 * commun avec l'Indexing API Google (celle partagée avec maisonnumidia).
 *
 * Preuve de propriété : le fichier public/<CLE>.txt, servi à la racine du site,
 * contient la clé. Le script vérifie qu'il est en ligne avant d'envoyer quoi
 * que ce soit : sans lui, IndexNow répond 403 et rien n'est pris en compte.
 *
 * Règle d'usage : n'envoyer que des pages NOUVELLES ou MODIFIÉES. Renvoyer sans
 * cesse les mêmes URL inchangées est mal vu par Bing. L'envoi complet du
 * sitemap a été fait une fois, le 30/10/2026.
 *
 * Usage :
 *   node pipeline/11-deploiement/indexnow.mjs               toutes les URL du sitemap en ligne
 *   node pipeline/11-deploiement/indexnow.mjs URL1 URL2 ... seulement ces URL
 *   ajouter --essai pour lister sans rien envoyer
 */

const SITE = "https://cosmetiquealgerie.com";
const CLE = "7e057c30c6563fa6fc55d6e015f0ff86";
const EMPLACEMENT_CLE = `${SITE}/${CLE}.txt`;
const POINT_ENVOI = "https://api.indexnow.org/indexnow";
const LOT = 10_000; // maximum accepté par IndexNow pour une requête

const args = process.argv.slice(2);
const essai = args.includes("--essai");
const urlsDonnees = args.filter((a) => a.startsWith("http"));

async function texte(url) {
  const r = await fetch(url, { redirect: "follow" });
  if (!r.ok) throw new Error(`${url} répond ${r.status}`);
  return r.text();
}

const locs = (xml) => [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1].trim());

async function urlsDuSitemap() {
  const urls = [];
  for (const enfant of locs(await texte(`${SITE}/sitemap.xml`))) {
    const liste = locs(await texte(enfant));
    console.log(`  ${liste.length.toString().padStart(5)}  ${enfant}`);
    urls.push(...liste);
  }
  return [...new Set(urls)];
}

const urls = urlsDonnees.length ? urlsDonnees : await urlsDuSitemap();
const etrangeres = urls.filter((u) => !u.startsWith(`${SITE}/`));
if (etrangeres.length) {
  console.error(`URL hors du domaine (IndexNow les refuserait) : ${etrangeres[0]}`);
  process.exit(1);
}
console.log(`${urls.length} URL à signaler`);
if (essai) process.exit(0);

const cleEnLigne = (await texte(EMPLACEMENT_CLE)).trim();
if (cleEnLigne !== CLE) {
  console.error(`${EMPLACEMENT_CLE} ne contient pas la clé : publier le site d'abord.`);
  process.exit(1);
}

for (let i = 0; i < urls.length; i += LOT) {
  const lot = urls.slice(i, i + LOT);
  const r = await fetch(POINT_ENVOI, {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=utf-8" },
    body: JSON.stringify({ host: new URL(SITE).host, key: CLE, keyLocation: EMPLACEMENT_CLE, urlList: lot }),
  });
  // 200 = reçu ; 202 = reçu, clé en cours de vérification. Tout le reste est un refus.
  console.log(`lot ${i / LOT + 1} : ${lot.length} URL -> ${r.status} ${await r.text()}`);
  if (r.status !== 200 && r.status !== 202) process.exit(1);
}

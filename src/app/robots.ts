import type { MetadataRoute } from "next";

import { SITE_URL, urlAbsolue } from "@/lib/catalogue";

/**
 * Zones sans valeur pour l'exploration : tunnel d'achat, espace client,
 * recherche interne.
 *
 * La ligne décisive est `/*?` : elle interdit toute URL portant un paramètre,
 * quel qu'il soit (tri, filtre, UTM). Les contrôles de tri et de filtre ne sont
 * de toute façon jamais des <a href>, donc jamais découvrables — cette ligne
 * est la deuxième couche, pour le cas où une URL à paramètre fuite par un lien
 * externe. C'est ce qui protège le budget d'exploration de l'explosion
 * combinatoire des facettes.
 */
const ZONES_INTERDITES = [
  "/api/",
  "/*?",
  "/panier",
  "/commande",
  "/compte",
  "/admin",
  "/recherche",
];

/**
 * Les robots des moteurs de réponse IA sont autorisés explicitement : le
 * catalogue (marque, contenance, prix en dinars, INCI) est une donnée factuelle
 * qu'on a intérêt à voir citée. Un groupe nommé remplaçant intégralement le
 * groupe `*`, on leur répète les mêmes interdictions.
 */
const ROBOTS_IA = [
  "GPTBot",
  "ChatGPT-User",
  "OAI-SearchBot",
  "Google-Extended",
  "PerplexityBot",
  "ClaudeBot",
  "Claude-Web",
  "Applebot-Extended",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/", disallow: ZONES_INTERDITES },
      ...ROBOTS_IA.map((userAgent) => ({
        userAgent,
        allow: "/",
        disallow: ZONES_INTERDITES,
      })),
    ],
    // Seul l'index est déclaré : les fichiers enfants s'activent ou se retirent
    // sans jamais toucher au robots.txt ni re-soumettre quoi que ce soit.
    // `/sitemap.xml` plutôt que `/sitemap-index.xml` : c'est l'adresse
    // conventionnelle, les deux servent le même index.
    sitemap: urlAbsolue("/sitemap.xml"),
    host: SITE_URL,
  };
}

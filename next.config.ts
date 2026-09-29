import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Une URL = une seule forme canonique. Toute la taxonomie porte un slash final.
  trailingSlash: true,

  /**
   * `/sitemap.xml` sert l'index des sitemaps, par réécriture.
   *
   * C'est l'adresse conventionnelle, et celle que lit le robot Google Indexing
   * API. Une route `app/sitemap.xml/route.ts` était la voie évidente, et elle
   * casse le build : Next réserve `/sitemap.xml` au fichier `app/sitemap.ts`
   * (« Conflicting route and metadata at /sitemap.xml »), même quand celui-ci
   * découpe en plusieurs fichiers via `generateSitemaps` et ne sert donc rien à
   * cette adresse. Une réécriture n'est pas une route : pas de conflit.
   *
   * `beforeFiles` : la réécriture passe avant la résolution des fichiers, pour
   * que l'adresse réservée par Next ne l'emporte jamais. Réponse 200 avec le
   * contenu de l'index — pas une redirection, que certains outils ne suivent
   * pas sur un sitemap.
   */
  async rewrites() {
    return {
      beforeFiles: [{ source: "/sitemap.xml", destination: "/sitemap-index.xml" }],
      afterFiles: [],
      fallback: [],
    };
  },

  /**
   * Chaque worker de build charge tout le catalogue en memoire. Windows Defender scanne chaque fichier ecrit : au-dela de 2 workers la
   * contention verrouille des fichiers (errno -4094). 2 workers passent
   * de maniere fiable, et le build reste tres en dessous des 45 minutes
   * autorisees par Vercel.
   */
  experimental: {
    cpus: 2,
  },

  images: {
    /**
     * Optimisation d'images desactivee, volontairement.
     *
     * Les visuels sont DEJA normalises en WebP par le pipeline
     * (pipeline/7-images), autour de 21 Ko en moyenne : l'optimiseur de Vercel
     * n'aurait presque rien a gagner dessus.
     *
     * Et il ferait courir un vrai risque. Le plan Hobby inclut 5 000
     * transformations par mois ; chaque couple image x largeur en consomme
     * une. Avec plus de 12 000 visuels et plusieurs largeurs chacun, le
     * premier passage de Googlebot epuise le quota en quelques heures. Au-dela,
     * Vercel repond 402 et le navigateur affiche le texte alternatif a la
     * place de l'image : le site perd ses visuels, sans prevenir.
     *
     * Servis tels quels, les fichiers partent du CDN comme n'importe quel
     * fichier statique : aucun quota, aucun cout, sur tous les plans.
     */
    unoptimized: true,

    /*
     * Plus aucun domaine distant n'est declare. Le site ne sert que ses propres
     * visuels : la liste precedente autorisait encore 14 domaines de
     * marchands concurrents, alors qu'aucune image n'en provient plus. La
     * laisser en place revenait a permettre de servir leurs photos par erreur.
     */
  },
};

export default nextConfig;

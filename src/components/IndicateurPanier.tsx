"use client";

import { usePanier } from "@/components/PanierProvider";

/**
 * Compteur d'articles, destiné au lien panier de l'en-tête.
 *
 * Ne rend RIEN tant que localStorage n'a pas été lu, et rien non plus quand le
 * panier est vide : le rendu serveur et le premier rendu client sont donc
 * identiques, et l'en-tête reste un Server Component intégral autour d'un îlot
 * minuscule.
 *
 * Intégration attendue dans Header.tsx, à l'intérieur du lien /panier/ :
 *   <span className="relative"><IconePanier /><IndicateurPanier /></span>
 * Penser à retirer l'`aria-label="Panier"` du lien, sinon il masque le compteur
 * pour les lecteurs d'écran.
 */
export default function IndicateurPanier({
  className = "absolute -right-2 -top-1.5",
}: {
  className?: string;
}) {
  const { pret, nombreArticles } = usePanier();

  if (!pret || nombreArticles === 0) return null;

  return (
    <span
      className={`grid min-w-[16px] place-items-center bg-[#141414] px-1 font-mono text-[10px] leading-[16px] text-white tabular-nums ${className}`}
    >
      {nombreArticles > 99 ? "99+" : nombreArticles}
      <span className="sr-only"> article{nombreArticles > 1 ? "s" : ""} dans le panier</span>
    </span>
  );
}

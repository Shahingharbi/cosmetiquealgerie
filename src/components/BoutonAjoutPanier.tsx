"use client";

import Link from "next/link";
import { useState } from "react";

import { SelecteurQuantite, usePanier } from "@/components/PanierProvider";
import type { Produit } from "@/types/catalogue";

/**
 * Ajout au panier depuis la fiche produit.
 *
 * Seul élément interactif de la fiche : le reste de la page — description,
 * caractéristiques, blocs de recommandation — reste rendu côté serveur, donc
 * crawlable.
 *
 * Le panier n'est lu qu'après hydratation : avant, `pret` vaut false et le
 * composant rend exactement le même balisage côté serveur et côté client.
 */
export default function BoutonAjoutPanier({ produit }: { produit: Produit }) {
  const { ajouter, articles, pret } = usePanier();
  const [quantite, setQuantite] = useState(1);
  const [confirme, setConfirme] = useState(false);

  const dejaLa = pret ? (articles.find((a) => a.slug === produit.slug)?.quantite ?? 0) : 0;

  function surAjout() {
    ajouter(produit.slug, quantite);
    setConfirme(true);
  }

  return (
    <section aria-labelledby="titre-achat" className="border-t border-[#e5e5e5] pt-6">
      <h2 id="titre-achat" className="sr-only">
        Ajouter au panier
      </h2>

      <div className="flex flex-wrap items-center gap-4">
        <SelecteurQuantite quantite={quantite} nom={produit.nom} onChange={setQuantite} />
        <button
          type="button"
          onClick={surAjout}
          className="flex-1 bg-[#141414] px-6 py-3 text-[13px] uppercase tracking-[0.06em] text-white transition-opacity hover:opacity-80"
        >
          Ajouter au panier
        </button>
      </div>

      {/* Une seule zone vivante : le lecteur d'écran annonce l'ajout sans que le
          focus ne quitte le bouton. */}
      <p aria-live="polite" className="mt-3 min-h-[1.25rem] text-[13px] text-[#4f4f4f]">
        {confirme ? (
          <>
            Ajouté au panier.{" "}
            <Link
              href="/panier/"
              prefetch={false}
              className="text-[#141414] underline underline-offset-4"
            >
              Voir le panier
            </Link>
          </>
        ) : dejaLa > 0 ? (
          <>
            Déjà {dejaLa} dans votre panier.{" "}
            <Link
              href="/panier/"
              prefetch={false}
              className="text-[#141414] underline underline-offset-4"
            >
              Voir le panier
            </Link>
          </>
        ) : (
          ""
        )}
      </p>

      <p className="mt-1 text-[13px] leading-[1.6] text-[#909090]">
        Paiement à la livraison, dans les 69 wilayas.
      </p>
    </section>
  );
}

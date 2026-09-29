import CarteProduit from "@/components/CarteProduit";
import type { Produit } from "@/types/catalogue";

interface Props {
  /** Produits réellement affichés, déjà triés et tronqués par la page appelante. */
  produits: Produit[];
  /** Total du nœud, pour annoncer la profondeur réelle du rayon. */
  total: number;
  /**
   * Cartes chargées sans lazy-load. La première rangée porte le LCP ;
   * au-delà, précharger coûte plus qu'il ne rapporte.
   */
  nbPrioritaires?: number;
}

/**
 * Grille de produits partagée par toutes les pages de listing.
 * Une simple <ul> : la pagination et le filtrage viendront plus tard, la grille
 * ne doit rien savoir de la façon dont la liste a été constituée.
 */
export default function GrilleProduits({ produits, total, nbPrioritaires = 4 }: Props) {
  if (produits.length === 0) {
    return (
      <p className="border border-[#e5e5e5] bg-white px-5 py-8 text-[14px] text-[#4f4f4f]">
        Aucun produit disponible dans cette sélection pour le moment.
      </p>
    );
  }

  const affiches = produits.length;
  const restants = total - affiches;

  return (
    <section aria-label="Produits">
      <p className="mb-6 font-mono text-[11px] uppercase tracking-[0.06em] text-[#4f4f4f]">
        {affiches === total
          ? `${affiches.toLocaleString("fr-DZ")} ${total > 1 ? "produits" : "produit"}`
          : `${affiches.toLocaleString("fr-DZ")} produits affichés sur ${total.toLocaleString("fr-DZ")}`}
      </p>

      <ul className="grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6 md:grid-cols-3 lg:grid-cols-4">
        {produits.map((produit, i) => (
          <li key={produit.slug}>
            <CarteProduit produit={produit} prioritaire={i < nbPrioritaires} />
          </li>
        ))}
      </ul>

      {restants > 0 && (
        <p className="mt-10 border-t border-[#e5e5e5] pt-5 text-[13px] text-[#4f4f4f]">
          {restants.toLocaleString("fr-DZ")} autres références de ce rayon sont référencées
          dans notre catalogue.
        </p>
      )}
    </section>
  );
}

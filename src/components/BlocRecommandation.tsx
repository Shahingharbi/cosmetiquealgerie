import CarteProduit from "@/components/CarteProduit";
import type { Reco } from "@/lib/recommandations";

interface Props {
  titre: string;
  recos: Reco[];
}

/**
 * Bloc de recommandations.
 *
 * Un bloc vide ne s'affiche pas du tout : un titre suivi de rien est du bruit
 * pour l'utilisateur et du boilerplate pour Google.
 */
export default function BlocRecommandation({ titre, recos }: Props) {
  if (recos.length === 0) return null;

  return (
    <section className="border-t border-[#e5e5e5] pt-8">
      <h2 className="font-mono text-[11px] uppercase tracking-[0.08em] text-[#4f4f4f]">
        {titre}
      </h2>
      <div className="mt-5 grid grid-cols-2 gap-x-4 gap-y-8 lg:grid-cols-4">
        {recos.map(({ produit }) => (
          <CarteProduit key={produit.slug} produit={produit} />
        ))}
      </div>
    </section>
  );
}

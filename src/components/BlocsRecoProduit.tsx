import BlocRecommandation from "@/components/BlocRecommandation";
import { recosFicheProduit } from "@/lib/recommandations";
import type { Produit } from "@/types/catalogue";

interface Props {
  produit: Produit;
}

/**
 * Les quatre blocs de recommandation d'une fiche produit.
 *
 * C'est le maillage interne de la fiche : chaque carte est un lien rendu côté
 * serveur, donc crawlable. Les plafonds (16 liens, dont 2 hors département)
 * sont appliqués par recosFicheProduit, pas ici — les respecter est une
 * contrainte de cocon, pas une préférence d'affichage.
 */
export default function BlocsRecoProduit({ produit }: Props) {
  const { routine, ensemble, gamme, alternatives } = recosFicheProduit(produit);

  if (
    routine.length === 0 &&
    ensemble.length === 0 &&
    gamme.length === 0 &&
    alternatives.length === 0
  ) {
    return null;
  }

  return (
    <div className="mt-16 space-y-12">
      <BlocRecommandation titre="Complétez votre routine" recos={routine} />
      <BlocRecommandation titre="Souvent achetés ensemble" recos={ensemble} />
      <BlocRecommandation titre="Même gamme, même marque" recos={gamme} />
      <BlocRecommandation titre="Alternatives" recos={alternatives} />
    </div>
  );
}

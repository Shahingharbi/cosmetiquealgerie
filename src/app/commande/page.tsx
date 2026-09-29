import type { Metadata } from "next";

import { FormulaireCommande } from "@/components/PanierProvider";
import { estPubliable, getProduit } from "@/lib/catalogue";
import { LIGNES_MAX, vueProduit, type ResolutionPanier } from "@/lib/panier";
import type { Produit } from "@/types/catalogue";

export const metadata: Metadata = {
  title: "Finaliser la commande",
  description:
    "Finalisez votre commande Cosmétique Algérie. Paiement à la livraison dans les 69 wilayas.",
  robots: { index: false, follow: false },
};

/**
 * Même résolution que sur /panier/, sans les suggestions : au moment de
 * saisir ses coordonnées, une distraction est une commande perdue.
 *
 * Le duplicata de garde-fou avec /panier/ est assumé : une action serveur est
 * un point d'entrée public, chacune valide sa propre entrée.
 */
async function resoudreCommande(slugs: string[]): Promise<ResolutionPanier> {
  "use server";

  const demandes: unknown[] = Array.isArray(slugs) ? slugs : [];
  const vus = new Set<string>();
  const trouves: Produit[] = [];
  for (const brut of demandes) {
    if (typeof brut !== "string" || vus.has(brut)) continue;
    vus.add(brut);
    const p = getProduit(brut);
    if (p && estPubliable(p)) trouves.push(p);
    if (trouves.length >= LIGNES_MAX) break;
  }

  return { produits: trouves.map(vueProduit), upsell: [] };
}

export default function PageCommande() {
  return (
    <div className="relative flex min-h-screen flex-col bg-[#f4f4f2]">

      <main id="contenu" className="flex-1 px-4 py-10 md:px-8 md:py-16">
        <div className="mx-auto max-w-[1120px]">
          <h1 className="text-[32px] leading-[1.1] text-[#141414] md:text-[44px]">
            Finaliser la commande
          </h1>
          <p className="mt-5 max-w-[62ch] text-[16px] leading-[1.6] text-[#4f4f4f]">
            Sept champs, dont un facultatif. Pas de compte, pas de mot de passe,
            et aucun paiement en ligne : vous réglez au livreur.
          </p>

          <FormulaireCommande resoudre={resoudreCommande} />
        </div>
      </main>
    </div>
  );
}

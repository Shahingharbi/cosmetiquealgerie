import type { Metadata } from "next";

import { ContenuPanier, type LienDepartement } from "@/components/PanierProvider";
import { estPubliable, getProduit, taxonomie } from "@/lib/catalogue";
import { LIGNES_MAX, vueProduit, type ResolutionPanier } from "@/lib/panier";
import { upsellPanier } from "@/lib/recommandations";
import type { Produit } from "@/types/catalogue";

const DEPARTEMENTS: LienDepartement[] = taxonomie.map((d) => ({ nom: d.nom, url: d.url }));

/**
 * Page transactionnelle : rien à indexer, mais `follow` pour ne pas couper le
 * jus vers les fiches produit liées depuis le panier.
 */
export const metadata: Metadata = {
  title: "Mon panier",
  description:
    "Votre panier Cosmétique Algérie. Paiement à la livraison dans les 69 wilayas.",
  robots: { index: false, follow: true },
};

/**
 * Action serveur : relit le catalogue à partir des seuls slugs stockés dans le
 * navigateur. C'est ce qui permet de ne jamais persister un prix côté client.
 *
 * Une action serveur est un point d'entrée public : ni le type ni la taille de
 * l'entrée ne sont présumés.
 */
async function resoudrePanier(slugs: string[]): Promise<ResolutionPanier> {
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

  return {
    produits: trouves.map(vueProduit),
    // Mêmes scores que la fiche produit : les compléments proposés ici sont de
    // vrais liens vers les fiches, donc du maillage, pas un simple encart.
    upsell: upsellPanier(trouves, 3).map((r) => vueProduit(r.produit)),
  };
}

export default function PagePanier() {
  return (
    <div className="relative flex min-h-screen flex-col bg-[#f4f4f2]">

      <main id="contenu" className="flex-1 px-4 py-10 md:px-8 md:py-16">
        <div className="mx-auto max-w-[1120px]">
          <h1 className="text-[32px] leading-[1.1] text-[#141414] md:text-[44px]">
            Mon panier
          </h1>

          <ContenuPanier resoudre={resoudrePanier} departements={DEPARTEMENTS} />
        </div>
      </main>
    </div>
  );
}

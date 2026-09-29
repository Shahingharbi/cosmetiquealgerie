import type { Metadata } from "next";

import { ConfirmationCommande, type LienDepartement } from "@/components/PanierProvider";
import { taxonomie } from "@/lib/catalogue";

const DEPARTEMENTS: LienDepartement[] = taxonomie.map((d) => ({ nom: d.nom, url: d.url }));

export const metadata: Metadata = {
  title: "Commande enregistrée",
  description:
    "Votre commande Cosmétique Algérie est enregistrée. Confirmation par téléphone, puis paiement à la livraison.",
  robots: { index: false, follow: false },
};

export default function PageMerci() {
  return (
    <div className="relative flex min-h-screen flex-col bg-[#f4f4f2]">

      <main id="contenu" className="flex-1 px-4 py-10 md:px-8 md:py-16">
        <div className="mx-auto max-w-[900px]">
          <h1 className="text-[32px] leading-[1.1] text-[#141414] md:text-[44px]">
            Merci, votre commande est enregistrée
          </h1>

          <ConfirmationCommande departements={DEPARTEMENTS} />
        </div>
      </main>
    </div>
  );
}

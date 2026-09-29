import type { Metadata } from "next";
import Link from "next/link";
import FilAriane from "@/components/FilAriane";
import { SITE_NOM, urlAbsolue } from "@/lib/catalogue";

/**
 * PLACEHOLDER À REMPLACER PAR LE PROPRIÉTAIRE AVANT MISE EN LIGNE.
 * Aucun numéro n'est inventé ici : tant que la valeur commence par "À
 * COMPLÉTER", le numéro est affiché en clair comme non renseigné et n'est
 * jamais transformé en lien wa.me (un lien vers un numéro faux serait pire
 * qu'une absence de lien).
 */
const WHATSAPP = "À COMPLÉTER — numéro WhatsApp au format +213 X XX XX XX XX";

/** PLACEHOLDER : adresse dérivée du domaine, à créer côté hébergeur mail. */
const EMAIL = "contact@cosmetiquealgerie.com";

const CANAUX = [
  {
    titre: "E-mail",
    detail: EMAIL,
    href: `mailto:${EMAIL}`,
    note: "Réponse sous 24 h ouvrées. Le canal à privilégier pour un suivi de commande ou une réclamation : la trace écrite reste.",
  },
  {
    titre: "WhatsApp",
    detail: WHATSAPP,
    href: null,
    note: "Pour une question rapide avant achat : disponibilité, contenance, conseil sur une routine.",
  },
];

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contacter Cosmétique Algérie par e-mail ou WhatsApp : question avant achat, suivi de commande, conseil produit. Réponse sous 24 h ouvrées.",
  alternates: { canonical: urlAbsolue("/contact/") },
};

export default function PageContact() {
  return (
    <div className="relative flex min-h-screen flex-col bg-[#f4f4f2]">

      <main className="flex-1 px-4 py-10 md:px-8 md:py-16">
        <div className="mx-auto max-w-[820px]">
          <FilAriane
            maillons={[
              { nom: "Accueil", url: "/" },
              { nom: "Contact", url: "/contact/" },
            ]}
          />

          <h1 className="mt-6 text-[32px] leading-[1.1] text-[#141414] md:text-[48px]">
            Contacter {SITE_NOM}
          </h1>
          <p className="mt-6 max-w-[62ch] text-[17px] leading-[1.6] text-[#4f4f4f] md:text-[19px]">
            Une question sur un produit, une commande en cours ou un colis reçu ?
            Deux canaux, tenus par la même équipe.
          </p>

          <ul className="mt-10 grid grid-cols-1 gap-px border border-[#e5e5e5] bg-[#e5e5e5] sm:grid-cols-2">
            {CANAUX.map((c) => (
              <li key={c.titre} className="bg-white p-6 md:p-8">
                <h2 className="font-mono text-[12px] uppercase tracking-[0.14em] text-[#909090]">
                  {c.titre}
                </h2>
                {c.href ? (
                  <p className="mt-4 text-[18px] leading-[1.3] text-[#141414]">
                    <a href={c.href} className="underline underline-offset-2">
                      {c.detail}
                    </a>
                  </p>
                ) : (
                  <p className="mt-4 text-[16px] leading-[1.3] text-[#141414]">
                    {c.detail}
                  </p>
                )}
                <p className="mt-3 text-[14px] leading-[1.55] text-[#4f4f4f]">
                  {c.note}
                </p>
              </li>
            ))}
          </ul>

          <section className="mt-12 border-t border-[#e5e5e5] pt-8">
            <h2 className="text-[22px] leading-[1.2] text-[#141414] md:text-[28px]">
              Horaires de réponse
            </h2>
            <p className="mt-4 text-[15px] leading-[1.65] text-[#4f4f4f]">
              Du samedi au jeudi, de 9 h à 18 h. Les messages reçus le vendredi
              ou un jour férié sont traités le jour ouvré suivant.
            </p>
          </section>

          <section className="mt-12 border-t border-[#e5e5e5] pt-8">
            <h2 className="text-[22px] leading-[1.2] text-[#141414] md:text-[28px]">
              Avant de nous écrire
            </h2>
            <div className="mt-4 flex flex-col gap-4 text-[15px] leading-[1.65] text-[#4f4f4f]">
              <p>
                Pour un suivi de commande, indiquez le numéro de commande et la
                wilaya de livraison : cela nous évite un aller-retour.
              </p>
              <p>
                Les délais par zone et les conditions de règlement sont détaillés
                sur la page{" "}
                <Link href="/livraison/" className="text-[#141414] underline">
                  livraison et paiement
                </Link>
                . La plupart des questions y trouvent déjà leur réponse.
              </p>
              <p>
                Pour une demande relative à vos données personnelles ou à une
                information légale, voir les{" "}
                <Link href="/mentions-legales/" className="text-[#141414] underline">
                  mentions légales
                </Link>
                .
              </p>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

import type { Metadata } from "next";
import Link from "next/link";

import FilAriane from "@/components/FilAriane";
import { SITE_NOM, marques, urlAbsolue } from "@/lib/catalogue";

/**
 * Page « Produits authentiques ».
 *
 * La contrefaçon est la première objection du marché algérien, avant même le
 * prix. Cette page dit ce que nous faisons et, surtout, ce que l'acheteur peut
 * vérifier lui-même — y compris ailleurs que chez nous. Une page qui ne donne
 * que des promesses ne rassure personne.
 */

export const metadata: Metadata = {
  title: { absolute: `Produits authentiques : notre engagement | ${SITE_NOM}` },
  description:
    "D'où viennent nos produits, comment nous vérifions leur origine, et comment contrôler vous-même l'authenticité d'un cosmétique à la réception.",
  alternates: { canonical: urlAbsolue("/authenticite/") },
};

const ENGAGEMENTS: { titre: string; paragraphes: string[] }[] = [
  {
    titre: "D'où viennent nos produits",
    paragraphes: [
      "Nos références proviennent de circuits identifiés : pharmacies, parapharmacies, parfumeries et distributeurs établis. Jamais d'import parallèle, jamais de lot d'origine inconnue.",
      "Un produit dont nous ne pouvons pas retracer la provenance n'entre pas au catalogue. C'est une règle simple, et c'est la seule qui protège réellement l'acheteur.",
    ],
  },
  {
    titre: "Ce que nous publions pour que vous puissiez vérifier",
    paragraphes: [
      "La contenance affichée sur chaque fiche est celle de l'emballage. C'est le premier point à recouper à la réception : une contenance qui ne correspond pas est le signal le plus fiable d'un produit douteux.",
      "Quand nous disposons de la composition INCI communiquée par le fabricant, nous la publions intégralement, sans la reformuler.",
      "Les prix sont affichés en dinars, sans frais caché. Un tarif anormalement bas sur une marque recherchée doit alerter, chez nous comme ailleurs.",
    ],
  },
  {
    titre: "Vérifier vous-même, en trois gestes",
    paragraphes: [
      "À la réception, comparez la contenance imprimée sur l'emballage avec celle annoncée sur la fiche. Un écart n'est jamais anodin.",
      "Regardez la qualité d'impression : une étiquette floue, un texte mal aligné, une faute d'orthographe sur le nom de la marque sont des signes classiques de contrefaçon.",
      "Cherchez le numéro de lot et la date de péremption, ainsi que le symbole PAO — ce petit pot ouvert avec un nombre de mois. Leur absence est un signal d'alerte.",
    ],
  },
  {
    titre: "Vous pouvez ouvrir le colis avant de payer",
    paragraphes: [
      "Le paiement se fait à la livraison. Vous pouvez donc ouvrir le colis, vérifier les produits et refuser la remise si quelque chose ne va pas. Rien ne vous est alors facturé.",
      "C'est la garantie la plus concrète que nous puissions offrir : vous ne payez qu'après avoir vu le produit.",
    ],
  },
  {
    titre: "Si vous avez un doute après l'achat",
    paragraphes: [
      "Signalez-le sous 48 heures, photos à l'appui. Nous vérifions l'origine du lot concerné et, si le doute est fondé, le produit est repris et remboursé intégralement.",
      "Nous préférons perdre une vente que garder un client persuadé d'avoir acheté une copie.",
    ],
  },
];

export default function PageAuthenticite() {
  return (
    <div className="relative flex min-h-screen flex-col bg-[#f4f4f2]">

      <main className="flex-1 px-4 py-10 md:px-8 md:py-16">
        <div className="mx-auto max-w-[840px]">
          <FilAriane
            maillons={[
              { nom: "Accueil", url: "/" },
              { nom: "Produits authentiques", url: "/authenticite/" },
            ]}
          />

          <h1 className="mt-6 text-[32px] leading-[1.1] text-[#141414] md:text-[44px]">
            Produits authentiques
          </h1>
          <p className="mt-6 max-w-[62ch] text-[17px] leading-[1.6] text-[#4f4f4f]">
            La contrefaçon est la première inquiétude quand on achète un
            cosmétique en ligne en Algérie. Voici d&apos;où viennent nos
            produits, et comment vérifier par vous-même — chez nous comme
            ailleurs.
          </p>

          {ENGAGEMENTS.map((e) => (
            <section key={e.titre} className="mt-12 border-t border-[#e5e5e5] pt-8">
              <h2 className="text-[20px] leading-[1.2] text-[#141414] md:text-[24px]">
                {e.titre}
              </h2>
              <div className="mt-4 flex flex-col gap-4 text-[15px] leading-[1.65] text-[#4f4f4f]">
                {e.paragraphes.map((p) => (
                  <p key={p.slice(0, 40)}>{p}</p>
                ))}
              </div>
            </section>
          ))}

          <section className="mt-12 border-t border-[#e5e5e5] pt-8">
            <h2 className="text-[20px] leading-[1.2] text-[#141414] md:text-[24px]">
              Les marques que nous suivons
            </h2>
            <p className="mt-4 text-[15px] leading-[1.65] text-[#4f4f4f]">
              {marques.length.toLocaleString("fr-DZ")} marques sont référencées
              au catalogue. Chaque page de marque indique le nombre de
              références suivies et les rayons concernés.
            </p>
            <Link
              href="/marques/"
              className="mt-5 inline-block border border-[#141414] px-5 py-2.5 text-[13px] uppercase tracking-[0.08em] text-[#141414] hover:bg-[#141414] hover:text-white"
            >
              Voir toutes les marques
            </Link>
          </section>

          <p className="mt-12 border-t border-[#e5e5e5] pt-8 text-[14px] leading-[1.65] text-[#4f4f4f]">
            Nos{" "}
            <Link href="/cgv/" className="text-[#141414] underline">
              conditions de vente
            </Link>{" "}
            détaillent la procédure de réclamation, et la page{" "}
            <Link href="/livraison/" className="text-[#141414] underline">
              livraison
            </Link>{" "}
            explique la vérification du colis avant paiement.
          </p>
        </div>
      </main>
    </div>
  );
}

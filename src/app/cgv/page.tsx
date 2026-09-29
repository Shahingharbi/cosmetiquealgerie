import type { Metadata } from "next";
import Link from "next/link";

import FilAriane from "@/components/FilAriane";
import { SITE_NOM, urlAbsolue } from "@/lib/catalogue";

/**
 * Conditions générales de vente.
 *
 * Rédigées à partir de ce que le site fait réellement : paiement à la
 * livraison, aucun compte client, aucune donnée bancaire, colis vérifiable
 * avant paiement. Rien n'y est promis que le site ne tienne.
 *
 * ⚠️ Les mentions entre crochets doivent être complétées par le propriétaire :
 * raison sociale, registre de commerce, NIF, adresse et téléphone. Elles sont
 * laissées visibles à dessein — une mention légale inventée est pire qu'une
 * mention manquante.
 */

const A_COMPLETER = "[à compléter]";

export const metadata: Metadata = {
  title: { absolute: `Conditions générales de vente | ${SITE_NOM}` },
  description:
    "Conditions générales de vente : commande, paiement à la livraison, délais, vérification du colis, retours et réclamations.",
  alternates: { canonical: urlAbsolue("/cgv/") },
};

interface Article {
  titre: string;
  paragraphes: string[];
}

const ARTICLES: Article[] = [
  {
    titre: "1. Objet et champ d'application",
    paragraphes: [
      `Les présentes conditions régissent les ventes conclues sur ${SITE_NOM}, site de vente en ligne de produits cosmétiques livrés en Algérie. Toute commande implique leur acceptation.`,
      "Elles s'appliquent aux ventes à des particuliers, pour un usage personnel. Les commandes à caractère professionnel ou de revente font l'objet d'un accord distinct.",
    ],
  },
  {
    titre: "2. Identité du vendeur",
    paragraphes: [
      `Dénomination : ${A_COMPLETER}. Registre de commerce : ${A_COMPLETER}. Numéro d'identification fiscale : ${A_COMPLETER}.`,
      `Adresse : ${A_COMPLETER}. Téléphone : ${A_COMPLETER}. Courriel : contact@cosmetiquealgerie.com.`,
    ],
  },
  {
    titre: "3. Produits",
    paragraphes: [
      "Les produits proposés sont des cosmétiques d'hygiène et de soin. Ils ne sont ni des médicaments, ni des dispositifs médicaux, et ne remplacent aucun traitement ni aucun avis médical.",
      "Les descriptions, compositions et contenances sont reproduites d'après les informations du fabricant. Les visuels sont indicatifs : un emballage peut évoluer sans que cela modifie le produit livré.",
      "L'offre est valable dans la limite des stocks disponibles. Si un produit devient indisponible après votre commande, nous vous en informons lors de l'appel de confirmation et la commande est ajustée ou annulée sans frais.",
    ],
  },
  {
    titre: "4. Prix",
    paragraphes: [
      "Les prix sont indiqués en dinars algériens, toutes taxes comprises. Les frais de livraison sont indiqués avant la validation de la commande et s'ajoutent au montant des produits.",
      "Le prix applicable est celui affiché au moment de la commande. Une modification ultérieure du tarif ne s'applique pas aux commandes déjà confirmées.",
    ],
  },
  {
    titre: "5. Commande et confirmation",
    paragraphes: [
      "La commande se passe sans création de compte. Vous indiquez vos nom, prénom, téléphone, wilaya, commune et adresse de livraison. Ces informations servent uniquement à vous joindre et à livrer.",
      "Toute commande fait l'objet d'un appel téléphonique de confirmation. Une commande qui ne peut être confirmée après plusieurs tentatives d'appel n'est pas expédiée.",
      "Nous nous réservons le droit de refuser une commande manifestement anormale, incomplète, ou émanant d'un client avec lequel un litige de livraison est en cours.",
    ],
  },
  {
    titre: "6. Paiement à la livraison",
    paragraphes: [
      "Le paiement se fait exclusivement à la livraison, en espèces, entre les mains du livreur. Aucun paiement en ligne n'est proposé, aucune donnée bancaire n'est demandée ni collectée.",
      "Aucune avance n'est exigée à la commande. Si un tiers vous réclame un versement préalable en notre nom, il ne s'agit pas de nous.",
    ],
  },
  {
    titre: "7. Livraison",
    paragraphes: [
      "La livraison couvre les 69 wilayas, à domicile ou en point de retrait selon la commune, par un transporteur partenaire.",
      "Les délais indicatifs sont de 24 à 48 h sur le centre, 48 à 72 h sur l'est et l'ouest, 2 à 4 jours sur les Hauts-Plateaux et 3 à 6 jours sur le sud. Ils courent à partir de la confirmation téléphonique, hors vendredis et jours fériés.",
      "Ces délais ne sont pas garantis : l'éloignement de la commune, les conditions de transport et les périodes de forte activité peuvent les allonger.",
      "En cas d'absence, le livreur effectue une seconde présentation. Passé ce délai, le colis nous est retourné et la commande est annulée.",
    ],
  },
  {
    titre: "8. Vérification du colis avant paiement",
    paragraphes: [
      "Vous pouvez ouvrir le colis et vérifier les produits avant de payer : nature des articles, contenance, état de l'emballage, date de péremption.",
      "Si le contenu ne correspond pas à votre commande ou si un produit est endommagé, refusez la remise. Rien ne vous est alors facturé.",
    ],
  },
  {
    titre: "9. Retours et réclamations",
    paragraphes: [
      "Pour des raisons d'hygiène, les produits cosmétiques ouverts, descellés ou utilisés ne sont pas repris, sauf défaut avéré du produit.",
      "Un produit reçu non conforme, endommagé, ou dont l'authenticité vous paraît douteuse est repris ou remplacé. Signalez-le sous 48 heures après réception, photos à l'appui, depuis la page contact.",
      "Le remboursement d'une commande déjà payée intervient sous 14 jours après acceptation de la réclamation, selon les modalités convenues avec vous.",
    ],
  },
  {
    titre: "10. Authenticité des produits",
    paragraphes: [
      "Nos références proviennent de circuits identifiés : pharmacies, parapharmacies et parfumeries. La contenance publiée sur chaque fiche correspond à celle de l'emballage, ce qui vous permet de recouper à la réception.",
      "Toute suspicion de contrefaçon signalée fait l'objet d'une vérification de notre part et, si elle est fondée, d'un remboursement intégral.",
    ],
  },
  {
    titre: "11. Données personnelles",
    paragraphes: [
      "Les informations collectées servent uniquement à traiter et livrer votre commande. Elles ne sont ni vendues, ni louées, ni transmises à des tiers autres que le transporteur chargé de la livraison.",
      "Le détail du traitement figure dans notre politique de confidentialité.",
    ],
  },
  {
    titre: "12. Droit applicable et litiges",
    paragraphes: [
      "Les présentes conditions sont soumises au droit algérien, notamment à la loi 18-05 relative au commerce électronique et à la loi 09-03 relative à la protection du consommateur.",
      "En cas de différend, une solution amiable sera recherchée en priorité. À défaut, le litige relève des juridictions algériennes compétentes.",
    ],
  },
];

export default function PageCgv() {
  return (
    <div className="relative flex min-h-screen flex-col bg-[#f4f4f2]">

      <main className="flex-1 px-4 py-10 md:px-8 md:py-16">
        <div className="mx-auto max-w-[840px]">
          <FilAriane
            maillons={[
              { nom: "Accueil", url: "/" },
              { nom: "Conditions générales de vente", url: "/cgv/" },
            ]}
          />

          <h1 className="mt-6 text-[32px] leading-[1.1] text-[#141414] md:text-[44px]">
            Conditions générales de vente
          </h1>
          <p className="mt-6 max-w-[62ch] text-[17px] leading-[1.6] text-[#4f4f4f]">
            Ces conditions décrivent exactement la façon dont nous vendons :
            paiement à la livraison, aucun compte à créer, aucune donnée
            bancaire, et un colis que vous pouvez ouvrir avant de payer.
          </p>

          {ARTICLES.map((a) => (
            <section key={a.titre} className="mt-12 border-t border-[#e5e5e5] pt-8">
              <h2 className="text-[20px] leading-[1.2] text-[#141414] md:text-[24px]">
                {a.titre}
              </h2>
              <div className="mt-4 flex flex-col gap-4 text-[15px] leading-[1.65] text-[#4f4f4f]">
                {a.paragraphes.map((p) => (
                  <p key={p.slice(0, 40)}>{p}</p>
                ))}
              </div>
            </section>
          ))}

          <p className="mt-12 border-t border-[#e5e5e5] pt-8 text-[14px] leading-[1.65] text-[#4f4f4f]">
            Une question avant d&apos;acheter ? La page{" "}
            <Link href="/livraison/" className="text-[#141414] underline">
              livraison
            </Link>{" "}
            détaille les délais par wilaya, et la page{" "}
            <Link href="/contact/" className="text-[#141414] underline">
              contact
            </Link>{" "}
            permet de nous joindre directement.
          </p>
        </div>
      </main>
    </div>
  );
}

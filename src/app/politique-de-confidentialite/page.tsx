import type { Metadata } from "next";
import Link from "next/link";

import FilAriane from "@/components/FilAriane";
import { SITE_NOM, urlAbsolue } from "@/lib/catalogue";

/**
 * Politique de confidentialité.
 *
 * Décrit le traitement réel, pas un traitement type : la commande part par
 * e-mail vers la boutique, le panier vit dans le navigateur du visiteur, et
 * aucune donnée bancaire n'existe puisque le paiement se fait en espèces à la
 * livraison. Ce texte doit être relu à chaque fois que la collecte change.
 */

const A_COMPLETER = "[à compléter]";

export const metadata: Metadata = {
  title: { absolute: `Politique de confidentialité | ${SITE_NOM}` },
  description:
    "Quelles données nous collectons, pourquoi, combien de temps nous les gardons, et comment demander leur suppression.",
  alternates: { canonical: urlAbsolue("/politique-de-confidentialite/") },
};

interface Section {
  titre: string;
  paragraphes: string[];
}

const SECTIONS: Section[] = [
  {
    titre: "Ce que nous collectons",
    paragraphes: [
      "Uniquement ce qu'il faut pour vous livrer : prénom, nom, numéro de téléphone, wilaya, commune, adresse de livraison, et le commentaire que vous ajoutez librement à votre commande.",
      "Nous ne demandons ni date de naissance, ni pièce d'identité, ni profession, ni situation familiale. Aucun compte client n'est créé, donc aucun mot de passe n'est stocké.",
      "Aucune donnée bancaire n'est collectée, pour une raison simple : le paiement se fait en espèces au livreur. Nous n'avons ni passerelle de paiement, ni numéro de carte à protéger.",
    ],
  },
  {
    titre: "Pourquoi nous les collectons",
    paragraphes: [
      "Pour vous appeler et confirmer la commande, préparer le colis, le confier au transporteur, et vous recontacter en cas de problème de livraison ou de réclamation.",
      "Ces informations ne servent à rien d'autre. Nous n'envoyons pas de prospection commerciale, et votre numéro n'alimente aucune liste de diffusion.",
    ],
  },
  {
    titre: "Qui y a accès",
    paragraphes: [
      "L'équipe qui traite les commandes, et le transporteur chargé de la livraison — il a besoin de votre nom, de votre téléphone et de votre adresse pour vous remettre le colis.",
      "Vos données ne sont ni vendues, ni louées, ni cédées à un tiers à des fins commerciales.",
      "La commande transite par un service d'envoi d'e-mails qui achemine le message vers notre boîte de réception. Ce service voit donc le contenu de la commande, sans en faire d'autre usage.",
    ],
  },
  {
    titre: "Combien de temps nous les gardons",
    paragraphes: [
      "Les commandes sont conservées le temps nécessaire au suivi, aux réclamations et aux obligations comptables. Au-delà, elles sont supprimées.",
      "Le panier, lui, ne quitte jamais votre navigateur : il est stocké localement sur votre appareil et disparaît si vous videz les données du site.",
    ],
  },
  {
    titre: "Cookies et mesure d'audience",
    paragraphes: [
      "Le site n'utilise pas de cookie publicitaire et ne fait pas de suivi entre sites.",
      "Le panier utilise le stockage local du navigateur, un mécanisme technique sans lequel il ne pourrait pas retenir vos articles d'une page à l'autre.",
      `Mesure d'audience : ${A_COMPLETER} — à préciser si un outil de statistiques est installé, avec son nom et sa finalité.`,
    ],
  },
  {
    titre: "Vos droits",
    paragraphes: [
      "Vous pouvez demander à consulter les informations que nous détenons sur vous, les faire corriger, ou en demander la suppression.",
      "Écrivez-nous à contact@cosmetiquealgerie.com en indiquant votre numéro de commande. Nous répondons sous quinze jours.",
      "Ces droits s'exercent dans le cadre de la loi 18-07 relative à la protection des personnes physiques dans le traitement des données à caractère personnel.",
    ],
  },
  {
    titre: "Sécurité",
    paragraphes: [
      "Le site est servi en HTTPS : les informations que vous saisissez circulent chiffrées.",
      "L'accès aux commandes est réservé aux personnes qui les traitent. En cas d'incident affectant vos données, les personnes concernées sont informées.",
    ],
  },
];

export default function PageConfidentialite() {
  return (
    <div className="relative flex min-h-screen flex-col bg-[#f4f4f2]">

      <main className="flex-1 px-4 py-10 md:px-8 md:py-16">
        <div className="mx-auto max-w-[840px]">
          <FilAriane
            maillons={[
              { nom: "Accueil", url: "/" },
              { nom: "Politique de confidentialité", url: "/politique-de-confidentialite/" },
            ]}
          />

          <h1 className="mt-6 text-[32px] leading-[1.1] text-[#141414] md:text-[44px]">
            Politique de confidentialité
          </h1>
          <p className="mt-6 max-w-[62ch] text-[17px] leading-[1.6] text-[#4f4f4f]">
            Nous collectons le strict nécessaire pour vous livrer : un nom, un
            téléphone et une adresse. Pas de compte, pas de mot de passe, et
            aucune donnée bancaire puisque vous payez en espèces au livreur.
          </p>

          {SECTIONS.map((s) => (
            <section key={s.titre} className="mt-12 border-t border-[#e5e5e5] pt-8">
              <h2 className="text-[20px] leading-[1.2] text-[#141414] md:text-[24px]">
                {s.titre}
              </h2>
              <div className="mt-4 flex flex-col gap-4 text-[15px] leading-[1.65] text-[#4f4f4f]">
                {s.paragraphes.map((p) => (
                  <p key={p.slice(0, 40)}>{p}</p>
                ))}
              </div>
            </section>
          ))}

          <p className="mt-12 border-t border-[#e5e5e5] pt-8 text-[14px] leading-[1.65] text-[#4f4f4f]">
            Voir aussi les{" "}
            <Link href="/cgv/" className="text-[#141414] underline">
              conditions générales de vente
            </Link>{" "}
            et les{" "}
            <Link href="/mentions-legales/" className="text-[#141414] underline">
              mentions légales
            </Link>
            .
          </p>
        </div>
      </main>
    </div>
  );
}

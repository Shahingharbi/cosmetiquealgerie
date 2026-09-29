import type { Metadata } from "next";
import Link from "next/link";
import FilAriane from "@/components/FilAriane";
import { SITE_NOM, SITE_URL, urlAbsolue } from "@/lib/catalogue";

/** PLACEHOLDER : adresse dérivée du domaine, à créer côté hébergeur mail. */
const EMAIL = "contact@cosmetiquealgerie.com";

/**
 * Toutes les informations que seul le propriétaire peut fournir sont rendues
 * par ce composant : elles restent visuellement identifiables tant qu'elles ne
 * sont pas remplies, plutôt que d'être inventées.
 */
function ACompleter({ libelle }: { libelle: string }) {
  return (
    <span className="inline-block border border-dashed border-[#909090] bg-white px-2 py-0.5 font-mono text-[12px] text-[#141414]">
      À COMPLÉTER — {libelle}
    </span>
  );
}

const EDITEUR: { terme: string; valeur: string }[] = [
  { terme: "Dénomination sociale", valeur: "raison sociale exacte" },
  { terme: "Forme juridique", valeur: "EURL, SARL, auto-entrepreneur…" },
  { terme: "Siège social", valeur: "adresse complète et wilaya" },
  { terme: "Registre du commerce (RC)", valeur: "numéro RC" },
  { terme: "Identifiant fiscal (NIF)", valeur: "numéro NIF" },
  { terme: "Article d'imposition", valeur: "numéro d'article" },
  { terme: "Téléphone", valeur: "numéro fixe ou mobile" },
  { terme: "Directeur de la publication", valeur: "nom et prénom" },
];

const HEBERGEUR: { terme: string; valeur: string }[] = [
  { terme: "Hébergeur", valeur: "raison sociale de l'hébergeur" },
  { terme: "Adresse", valeur: "adresse postale de l'hébergeur" },
  { terme: "Contact", valeur: "téléphone ou e-mail de l'hébergeur" },
];

export const metadata: Metadata = {
  title: "Mentions légales",
  description:
    "Mentions légales de Cosmétique Algérie : éditeur du site, hébergeur, propriété intellectuelle, données personnelles, cookies et droit applicable.",
  alternates: { canonical: urlAbsolue("/mentions-legales/") },
};

export default function PageMentionsLegales() {
  return (
    <div className="relative flex min-h-screen flex-col bg-[#f4f4f2]">

      <main className="flex-1 px-4 py-10 md:px-8 md:py-16">
        <div className="mx-auto max-w-[820px]">
          <FilAriane
            maillons={[
              { nom: "Accueil", url: "/" },
              { nom: "Mentions légales", url: "/mentions-legales/" },
            ]}
          />

          <h1 className="mt-6 text-[32px] leading-[1.1] text-[#141414] md:text-[48px]">
            Mentions légales
          </h1>
          <p className="mt-6 max-w-[62ch] text-[15px] leading-[1.6] text-[#4f4f4f]">
            Informations relatives au site {SITE_URL.replace("https://", "")},
            exploité sous la marque {SITE_NOM}. Les champs marqués « À COMPLÉTER »
            doivent être renseignés par l&apos;exploitant avant la mise en ligne
            publique.
          </p>

          <section className="mt-12 border-t border-[#e5e5e5] pt-8">
            <h2 className="text-[22px] leading-[1.2] text-[#141414] md:text-[28px]">
              1. Éditeur du site
            </h2>
            <dl className="mt-5 flex flex-col gap-3">
              {EDITEUR.map((l) => (
                <div key={l.terme} className="flex flex-col gap-1 sm:flex-row sm:gap-4">
                  <dt className="w-[240px] shrink-0 text-[14px] text-[#141414]">
                    {l.terme}
                  </dt>
                  <dd className="text-[14px] text-[#4f4f4f]">
                    <ACompleter libelle={l.valeur} />
                  </dd>
                </div>
              ))}
              <div className="flex flex-col gap-1 sm:flex-row sm:gap-4">
                <dt className="w-[240px] shrink-0 text-[14px] text-[#141414]">
                  E-mail
                </dt>
                <dd className="text-[14px] text-[#4f4f4f]">
                  <a href={`mailto:${EMAIL}`} className="text-[#141414] underline">
                    {EMAIL}
                  </a>
                </dd>
              </div>
            </dl>
          </section>

          <section className="mt-12 border-t border-[#e5e5e5] pt-8">
            <h2 className="text-[22px] leading-[1.2] text-[#141414] md:text-[28px]">
              2. Hébergement
            </h2>
            <dl className="mt-5 flex flex-col gap-3">
              {HEBERGEUR.map((l) => (
                <div key={l.terme} className="flex flex-col gap-1 sm:flex-row sm:gap-4">
                  <dt className="w-[240px] shrink-0 text-[14px] text-[#141414]">
                    {l.terme}
                  </dt>
                  <dd className="text-[14px] text-[#4f4f4f]">
                    <ACompleter libelle={l.valeur} />
                  </dd>
                </div>
              ))}
            </dl>
          </section>

          <section className="mt-12 border-t border-[#e5e5e5] pt-8">
            <h2 className="text-[22px] leading-[1.2] text-[#141414] md:text-[28px]">
              3. Propriété intellectuelle
            </h2>
            <div className="mt-4 flex flex-col gap-4 text-[15px] leading-[1.65] text-[#4f4f4f]">
              <p>
                La structure du site, ses textes descriptifs, son arborescence et
                sa charte graphique sont la propriété de l&apos;éditeur. Toute
                reproduction, même partielle, sans autorisation écrite préalable
                est interdite.
              </p>
              <p>
                Les marques, dénominations commerciales, logotypes et visuels de
                produits appartiennent à leurs titulaires respectifs. Ils sont
                utilisés à seule fin d&apos;identifier les articles proposés à la
                vente. Tout titulaire de droits peut demander le retrait
                d&apos;un visuel en écrivant à {EMAIL}.
              </p>
            </div>
          </section>

          <section className="mt-12 border-t border-[#e5e5e5] pt-8">
            <h2 className="text-[22px] leading-[1.2] text-[#141414] md:text-[28px]">
              4. Prix, disponibilité et commandes
            </h2>
            <div className="mt-4 flex flex-col gap-4 text-[15px] leading-[1.65] text-[#4f4f4f]">
              <p>
                Les prix sont indiqués en dinars algériens (DZD), toutes taxes
                comprises, hors frais de livraison. Ils peuvent varier sans
                préavis et sont ceux en vigueur au moment de la confirmation de
                la commande.
              </p>
              <p>
                Les informations produits — contenance, composition, visuels —
                proviennent des fournisseurs et des fabricants. Malgré nos
                contrôles, une erreur reste possible : en cas d&apos;écart, seule
                la notice figurant sur l&apos;emballage fait foi.
              </p>
              <p>
                Les modalités de règlement et de livraison sont détaillées sur la
                page{" "}
                <Link href="/livraison/" className="text-[#141414] underline">
                  livraison
                </Link>
                .
              </p>
            </div>
          </section>

          <section className="mt-12 border-t border-[#e5e5e5] pt-8">
            <h2 className="text-[22px] leading-[1.2] text-[#141414] md:text-[28px]">
              5. Données personnelles
            </h2>
            <div className="mt-4 flex flex-col gap-4 text-[15px] leading-[1.65] text-[#4f4f4f]">
              <p>
                Les données collectées lors d&apos;une commande — nom, téléphone,
                adresse de livraison — servent exclusivement au traitement et à
                l&apos;acheminement de cette commande. Elles sont transmises au
                transporteur pour la seule exécution de la livraison, et ne sont
                ni vendues, ni louées à des tiers.
              </p>
              <p>
                Conformément à la loi n° 18-07 du 10 juin 2018 relative à la
                protection des personnes physiques dans le traitement des données
                à caractère personnel, vous disposez d&apos;un droit
                d&apos;accès, de rectification et de suppression de vos données.
                Exercez-le en écrivant à {EMAIL}.
              </p>
              <p>
                Durée de conservation :{" "}
                <ACompleter libelle="durée retenue, ex. 3 ans après le dernier achat" />
              </p>
            </div>
          </section>

          <section className="mt-12 border-t border-[#e5e5e5] pt-8">
            <h2 className="text-[22px] leading-[1.2] text-[#141414] md:text-[28px]">
              6. Cookies et mesure d&apos;audience
            </h2>
            <div className="mt-4 flex flex-col gap-4 text-[15px] leading-[1.65] text-[#4f4f4f]">
              <p>
                Le site utilise des cookies techniques nécessaires à son
                fonctionnement, notamment à la conservation du panier. Ces
                cookies ne nécessitent pas de consentement préalable.
              </p>
              <p>
                Outils de mesure d&apos;audience et de publicité effectivement
                déployés :{" "}
                <ACompleter libelle="lister les outils, ex. Google Analytics, Meta Pixel, ou « aucun »" />
              </p>
              <p>
                Vous pouvez à tout moment refuser ou supprimer les cookies depuis
                les réglages de votre navigateur ; certaines fonctions du site
                peuvent alors ne plus opérer.
              </p>
            </div>
          </section>

          <section className="mt-12 border-t border-[#e5e5e5] pt-8">
            <h2 className="text-[22px] leading-[1.2] text-[#141414] md:text-[28px]">
              7. Responsabilité
            </h2>
            <div className="mt-4 flex flex-col gap-4 text-[15px] leading-[1.65] text-[#4f4f4f]">
              <p>
                Les produits vendus sont des produits cosmétiques et
                d&apos;hygiène. Ils ne constituent pas des médicaments et ne
                remplacent pas un avis médical. En cas de réaction cutanée,
                cessez l&apos;utilisation et consultez un professionnel de santé.
              </p>
              <p>
                L&apos;éditeur ne saurait être tenu responsable d&apos;une
                interruption temporaire du site, ni de l&apos;usage fait des
                produits en dehors des conditions d&apos;emploi indiquées par le
                fabricant.
              </p>
            </div>
          </section>

          <section className="mt-12 border-t border-[#e5e5e5] pt-8">
            <h2 className="text-[22px] leading-[1.2] text-[#141414] md:text-[28px]">
              8. Droit applicable
            </h2>
            <div className="mt-4 flex flex-col gap-4 text-[15px] leading-[1.65] text-[#4f4f4f]">
              <p>
                Les présentes mentions sont régies par le droit algérien. Tout
                litige relève de la compétence des tribunaux de{" "}
                <ACompleter libelle="wilaya du siège social" />.
              </p>
              <p>
                Dernière mise à jour :{" "}
                <ACompleter libelle="date de publication de cette version" />
              </p>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

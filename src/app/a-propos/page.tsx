import type { Metadata } from "next";
import Link from "next/link";
import FilAriane from "@/components/FilAriane";
import {
  SITE_NOM,
  marques,
  produitsPubliables,
  taxonomie,
  urlAbsolue,
} from "@/lib/catalogue";

const nf = new Intl.NumberFormat("fr-FR");

export const metadata: Metadata = {
  title: "À propos",
  description:
    "Qui nous sommes, comment nous constituons notre sélection de produits cosmétiques et ce que nous garantissons sur l'authenticité des références vendues en Algérie.",
  alternates: { canonical: urlAbsolue("/a-propos/") },
};

export default function PageAPropos() {
  const nbProduits = produitsPubliables.length;

  return (
    <div className="relative flex min-h-screen flex-col bg-[#f4f4f2]">

      <main className="flex-1 px-4 py-10 md:px-8 md:py-16">
        <div className="mx-auto max-w-[820px]">
          <FilAriane
            maillons={[
              { nom: "Accueil", url: "/" },
              { nom: "À propos", url: "/a-propos/" },
            ]}
          />

          <h1 className="mt-6 text-[32px] leading-[1.1] text-[#141414] md:text-[48px]">
            À propos de {SITE_NOM}
          </h1>
          <p className="mt-6 text-[17px] leading-[1.6] text-[#4f4f4f] md:text-[19px]">
            {SITE_NOM} est une boutique en ligne algérienne dédiée aux produits
            de soin, d&apos;hygiène, de maquillage et de parfumerie. Nous
            rassemblons en un seul catalogue des gammes habituellement
            dispersées entre pharmacies, parapharmacies et boutiques
            spécialisées.
          </p>

          <section className="mt-12 border-t border-[#e5e5e5] pt-8">
            <h2 className="text-[22px] leading-[1.2] text-[#141414] md:text-[28px]">
              Qui nous sommes
            </h2>
            <div className="mt-4 flex flex-col gap-4 text-[15px] leading-[1.65] text-[#4f4f4f]">
              <p>
                Nous sommes une équipe algérienne qui travaille sur un constat
                simple : l&apos;offre cosmétique existe dans le pays, mais elle
                est illisible. Les mêmes références circulent sous des noms
                différents, les contenances sont rarement précisées, et le prix
                n&apos;est presque jamais affiché avant le contact.
              </p>
              <p>
                Notre travail consiste à structurer cette offre : normaliser les
                intitulés, rattacher chaque produit à sa marque réelle, extraire
                la contenance, et classer l&apos;ensemble dans une arborescence
                de {taxonomie.length} rayons pensée pour l&apos;usage — un
                besoin, une page.
              </p>
            </div>
          </section>

          <section className="mt-12 border-t border-[#e5e5e5] pt-8">
            <h2 className="text-[22px] leading-[1.2] text-[#141414] md:text-[28px]">
              Notre sélection
            </h2>
            <div className="mt-4 flex flex-col gap-4 text-[15px] leading-[1.65] text-[#4f4f4f]">
              <p>
                Le catalogue compte {nf.format(nbProduits)} références issues de{" "}
                {nf.format(marques.length)} marques, des laboratoires
                dermatologiques européens aux maisons de K-Beauty coréennes, en
                passant par les marques grand public et les produits d&apos;
                hygiène du quotidien.
              </p>
              <p>
                Une référence n&apos;est mise en ligne que si nous disposons à la
                fois d&apos;un visuel du produit et d&apos;un prix. Une fiche
                sans image ni tarif n&apos;aide personne à décider : nous
                préférons ne pas la publier plutôt que d&apos;allonger
                artificiellement le catalogue.
              </p>
              <p>
                Le classement à l&apos;intérieur d&apos;un rayon suit la demande
                réelle observée sur le marché algérien, et non un budget
                publicitaire. Nous n&apos;acceptons pas de mise en avant payée.
              </p>
            </div>
          </section>

          <section className="mt-12 border-t border-[#e5e5e5] pt-8">
            <h2 className="text-[22px] leading-[1.2] text-[#141414] md:text-[28px]">
              Notre engagement sur l&apos;authenticité
            </h2>
            <div className="mt-4 flex flex-col gap-4 text-[15px] leading-[1.65] text-[#4f4f4f]">
              <p>
                La contrefaçon cosmétique est un problème réel en Algérie,
                particulièrement sur les parfums et les soins dermatologiques.
                Nous nous approvisionnons uniquement auprès de circuits
                identifiés et vérifiables, et nous refusons les lots dont
                l&apos;origine ne peut être documentée.
              </p>
              <p>
                Concrètement : nous contrôlons les emballages, les codes-barres,
                les numéros de lot et les dates de péremption avant expédition.
                Le paiement se fait à la livraison, ce qui vous laisse la
                possibilité de vérifier le colis avant de régler.
              </p>
              <p>
                Si un produit reçu vous paraît non conforme, écrivez-nous depuis
                la page{" "}
                <Link href="/contact/" className="text-[#141414] underline">
                  contact
                </Link>{" "}
                : nous reprenons le produit et remboursons.
              </p>
            </div>
          </section>

          <nav aria-label="Pages liées" className="mt-12 border-t border-[#e5e5e5] pt-8">
            <ul className="flex flex-wrap gap-x-6 gap-y-2 text-[14px]">
              <li>
                <Link href="/livraison/" className="text-[#141414] underline">
                  Livraison et paiement
                </Link>
              </li>
              <li>
                <Link href="/contact/" className="text-[#141414] underline">
                  Nous contacter
                </Link>
              </li>
              <li>
                <Link href="/mentions-legales/" className="text-[#141414] underline">
                  Mentions légales
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </main>
    </div>
  );
}

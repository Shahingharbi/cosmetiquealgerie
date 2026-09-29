import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import FilAriane from "@/components/FilAriane";
import GrilleProduits from "@/components/GrilleProduits";
import LiensPagination from "@/components/LiensPagination";
import {
  filArianeNoeud,
  getNoeud,
  produitsDuNoeud,
  trierParPertinence,
  urlAbsolue,
} from "@/lib/catalogue";
import { nbPages, tranche, urlPage } from "@/lib/pagination";

/**
 * Pages 2 et suivantes d'un listing, communes aux trois niveaux de l'arbre.
 *
 * Elles existent pour une seule raison : donner un lien interne à chaque
 * produit. Sans elles, tout produit au-delà du 48e rang de sa catégorie
 * n'était atteignable que par le sitemap.
 *
 * Choix éditoriaux, volontaires :
 *  - le texte de la catégorie n'est PAS répété ici : ce serait le même
 *    contenu sur des dizaines d'URL, exactement ce que Google sanctionne ;
 *  - ces pages sont en `noindex, follow` et absentes du sitemap. On veut que
 *    Googlebot les traverse pour atteindre les fiches, pas qu'il indexe des
 *    listes nues. Le risque d'effondrement du crawl, déjà vécu sur le site
 *    précédent, vient précisément de ce genre de pages à faible valeur ;
 *  - le canonique pointe sur la page elle-même, jamais sur la page 1 :
 *    canoniser vers la page 1 ferait disparaître les liens des pages
 *    suivantes, donc ruinerait l'objectif.
 *
 * Le segment d'URL est `p`, pas `page` : `page` est le nom réservé par Next
 * pour ses fichiers de route, et l'utiliser comme segment a fait servir une
 * 404 à la place de `/soin-visage/`. Ne pas y revenir.
 */

function analyser(urlNoeud: string, numero: string) {
  const noeud = getNoeud(urlNoeud);
  const page = Number(numero);
  // Une page inexistante doit répondre 404, sans quoi la pagination devient un
  // piège à crawl : /page/99999/ renverrait indéfiniment une page vide.
  if (!noeud || !Number.isInteger(page) || page < 2) return null;

  const tous = trierParPertinence(produitsDuNoeud(noeud.url));
  const total = nbPages(tous.length);
  if (page > total) return null;

  return { noeud, page, total, produits: tranche(tous, page), nbProduits: tous.length };
}

export function metadonneesPage(urlNoeud: string, numero: string): Metadata {
  const data = analyser(urlNoeud, numero);
  if (!data) return {};
  const { noeud, page, total } = data;

  return {
    title: { absolute: `${noeud.h1} — page ${page} sur ${total}` },
    description: `${noeud.h1} : page ${page} de notre sélection, avec prix en dinars et livraison dans les 69 wilayas.`,
    alternates: { canonical: urlAbsolue(urlPage(noeud.url, page)) },
    robots: { index: false, follow: true },
  };
}

export default function VueNoeudPaginee({
  urlNoeud,
  numero,
}: {
  urlNoeud: string;
  numero: string;
}) {
  const data = analyser(urlNoeud, numero);
  if (!data) notFound();
  const { noeud, page, total, produits, nbProduits } = data;

  const fil = [...filArianeNoeud(noeud.url), { nom: `Page ${page}`, url: urlPage(noeud.url, page) }];

  return (
    <main className="mx-auto w-full max-w-[1400px] px-4 pb-24 pt-6 sm:px-6 lg:px-10">
      <FilAriane maillons={fil} />

      <header className="mt-6">
        <h1 className="text-[28px] leading-[1.1] tracking-tight text-[#141414] md:text-[38px]">
          {noeud.h1}
          <span className="text-[#909090]"> — page {page}</span>
        </h1>
        <p className="mt-4 max-w-[70ch] text-[15px] leading-[1.6] text-[#4f4f4f]">
          Suite de notre sélection : {nbProduits.toLocaleString("fr-DZ")} références au total.{" "}
          <Link href={noeud.url} className="text-[#141414] underline underline-offset-4">
            Revenir à la première page
          </Link>
          .
        </p>
      </header>

      <div className="mt-10">
        <GrilleProduits produits={produits} total={produits.length} />
      </div>

      <LiensPagination urlNoeud={noeud.url} courante={page} total={total} />
    </main>
  );
}

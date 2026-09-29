import Link from "next/link";
import {
  SITE_NOM,
  SITE_URL,
  formatPrix,
  urlAbsolue,
  urlProduit,
} from "@/lib/catalogue";
import { categorieRedigee } from "@/lib/redige";
import type { NoeudTaxonomie, Produit } from "@/types/catalogue";

/**
 * En-tête d'un nœud de taxonomie : H1, texte d'introduction, liens enfants.
 *
 * Le fichier porte aussi les deux générateurs de texte SEO du nœud
 * (`descriptionNoeud` pour la meta, `jsonLdCollection` pour le balisage) :
 * ils dérivent des mêmes agrégats que l'introduction, les garder ensemble
 * évite qu'un chiffre affiché contredise un chiffre balisé.
 */

/** Un lien vers un nœud enfant, avec son volume réel de références. */
export interface LienEnfant {
  nom: string;
  url: string;
  nb: number;
}

interface Props {
  noeud: NoeudTaxonomie;
  /** Tous les produits publiables du nœud, pas seulement ceux affichés. */
  produits: Produit[];
  enfants: LienEnfant[];
  /** Forme au singulier ; le pluriel est ajouté selon le nombre d'enfants. */
  libelleEnfant: "catégorie" | "sous-catégorie";
}

/* ------------------------------------------------------------------ */
/* Agrégats                                                            */
/* ------------------------------------------------------------------ */

function formatNombre(n: number): string {
  return n.toLocaleString("fr-DZ");
}

function marquesDominantes(produits: Produit[], combien: number) {
  const compte = new Map<string, number>();
  for (const p of produits) {
    if (!p.marque) continue;
    compte.set(p.marque, (compte.get(p.marque) ?? 0) + 1);
  }
  return [...compte.entries()]
    .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0], "fr"))
    .slice(0, combien)
    .map(([nom, nb]) => ({ nom, nb }));
}

function nombreDeMarques(produits: Produit[]): number {
  const vues = new Set<string>();
  for (const p of produits) if (p.marque) vues.add(p.marque);
  return vues.size;
}

function statsPrix(produits: Produit[]): { min: number; max: number; median: number } {
  if (produits.length === 0) return { min: 0, max: 0, median: 0 };
  const prix = produits.map((p) => p.prix).sort((a, b) => a - b);
  return {
    min: prix[0],
    max: prix[prix.length - 1],
    median: prix[Math.floor(prix.length / 2)],
  };
}

/**
 * Empreinte stable d'une URL. Sert à choisir une tournure de phrase par nœud :
 * 134 pages de catégorie qui ouvriraient toutes sur la même phrase seraient
 * lues comme un gabarit, donc comme du contenu dupliqué.
 */
function empreinte(texte: string): number {
  let h = 0;
  for (let i = 0; i < texte.length; i++) h = (h * 31 + texte.charCodeAt(i)) >>> 0;
  return h;
}

/** Élision de « de » devant voyelle ou h muet : « d'hygiène et bain ». */
function de(nom: string): string {
  const minuscule = nom.charAt(0).toLowerCase() + nom.slice(1);
  return /^[aàâäeéèêëiîïoôöuùûüyh]/i.test(minuscule) ? `d'${minuscule}` : `de ${minuscule}`;
}

function enumerer(noms: string[]): string {
  if (noms.length === 0) return "";
  if (noms.length === 1) return noms[0];
  return `${noms.slice(0, -1).join(", ")} et ${noms[noms.length - 1]}`;
}

/* ------------------------------------------------------------------ */
/* Textes                                                              */
/* ------------------------------------------------------------------ */

/**
 * Meta description du nœud, 150-160 caractères visés.
 * Les mentions livraison et paiement à la livraison sont obligatoires :
 * ce sont les deux objections décisives du e-commerce algérien.
 */
export function descriptionNoeud(noeud: NoeudTaxonomie, produits: Produit[]): string {
  const LIVRAISON = "Livraison dans les 69 wilayas et paiement a la livraison.".replace(
    "a la livraison",
    "à la livraison",
  );
  const tops = marquesDominantes(produits, 3).map((t) => t.nom);

  // La description s'ouvrait sur « X references disponibles ». Un compteur
  // occupe la surface de clic la plus visible du resultat de recherche sans
  // rien dire de ce qu'on va trouver, et le proprietaire a demande que ces
  // chiffres disparaissent du site. Le nom du rayon et les maisons presentes
  // rendent bien davantage : ce sont les termes que l'internaute reconnait.
  const debut = `${noeud.h1} : soins originaux, prix en dinars.`;

  const clauseMarques = [""];
  for (const k of [1, 2, 3]) {
    if (tops.length >= k) clauseMarques.push(`${tops.slice(0, k).join(", ")} et d'autres maisons.`);
  }

  const clauseFin = ["", "Commande en ligne.", "Produits d'origine, commande en ligne."];

  // On cherche la combinaison la plus proche de 160 sans la depasser : une
  // description tronquee par Google perd sa fin, une description courte perd
  // de la surface de clic.
  let meilleure = `${debut} ${LIVRAISON}`;
  for (const m of clauseMarques) {
    for (const f of clauseFin) {
      const candidat = [debut, m, f, LIVRAISON].filter(Boolean).join(" ");
      if (candidat.length <= 160 && candidat.length > meilleure.length) meilleure = candidat;
    }
  }
  return meilleure;
}

/**
 * CollectionPage + ItemList des produits réellement affichés.
 * Renvoie une chaîne déjà échappée, prête pour un `<script type="application/ld+json">`.
 */
export function jsonLdCollection(
  noeud: NoeudTaxonomie,
  description: string,
  affiches: Produit[],
  total: number,
): string {
  const url = urlAbsolue(noeud.url);
  const donnees = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${url}#collection`,
    url,
    name: noeud.h1,
    description,
    inLanguage: "fr",
    isPartOf: { "@type": "WebSite", name: SITE_NOM, url: SITE_URL },
    mainEntity: {
      "@type": "ItemList",
      name: noeud.h1,
      numberOfItems: total,
      itemListOrder: "https://schema.org/ItemListOrderDescending",
      itemListElement: affiches.map((p, i) => ({
        "@type": "ListItem",
        position: i + 1,
        url: urlAbsolue(urlProduit(p)),
        name: p.nom,
      })),
    },
  };
  return JSON.stringify(donnees).replace(/</g, "\\u003c");
}

/* ------------------------------------------------------------------ */
/* Composant                                                           */
/* ------------------------------------------------------------------ */

export default function EnteteCategorie({ noeud, produits, enfants, libelleEnfant }: Props) {
  const libelleEnfants = enfants.length > 1 ? `${libelleEnfant}s` : libelleEnfant;

  // Le chapeau vient du contenu écrit à la main pour ce rayon, et de nulle
  // part ailleurs. Le générateur de repli a été supprimé : il composait ses
  // phrases à partir des agrégats du nœud — « X références pour Y marques »,
  // « les prix s'échelonnent de A à B, médiane à C » — et c'est précisément le
  // rendu que le propriétaire a rejeté. Mieux vaut une page sans chapeau,
  // défaut visible en une seconde, qu'une page remplie de statistiques.
  const paragraphes = categorieRedigee(noeud.url)?.chapeau ?? [];

  return (
    <header className="mb-10">
      <h1 className="text-[28px] leading-[1.15] text-[#141414] sm:text-[34px]">
        {noeud.h1}
      </h1>

      <div className="mt-4 max-w-[68ch] space-y-3.5">
        {paragraphes.map((t, i) => (
          <p key={i} className="text-[15px] leading-[1.65] text-[#4f4f4f]">
            {t}
          </p>
        ))}
      </div>

      {enfants.length > 0 && (
        <nav aria-label={`Les ${libelleEnfants} de ${noeud.nom}`} className="mt-8">
          <h2 className="font-mono text-[11px] uppercase tracking-[0.08em] text-[#909090]">
            {enfants.length > 1 ? `Les ${libelleEnfants}` : `La ${libelleEnfants}`}
          </h2>
          <ul className="mt-3 flex flex-wrap gap-2">
            {enfants.map((enfant) => (
              <li key={enfant.url}>
                <Link
                  href={enfant.url}
                  className="inline-flex items-baseline gap-2 border border-[#e5e5e5] bg-white px-4 py-2.5 text-[14px] text-[#141414] transition-colors hover:border-[#141414]"
                >
                  {enfant.nom}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}

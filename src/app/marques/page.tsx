import type { Metadata } from "next";
import Link from "next/link";
import FilAriane from "@/components/FilAriane";
import {
  SITE_NOM,
  SITE_URL,
  marques,
  produitsDeLaMarque,
  urlAbsolue,
  urlMarque,
} from "@/lib/catalogue";

const CHEMIN = "/marques/";

interface EntreeMarque {
  slug: string;
  nom: string;
  /** Recompté sur les produits réellement publiés, pas sur marques.json. */
  nbPublies: number;
}

/**
 * Une marque dont aucun produit n'est publiable (pas de visuel ou pas de prix)
 * n'apparaît pas : 7 marques sur 431 sont dans ce cas, et les lister créerait
 * autant de liens vers des pages vides.
 */
const entrees: EntreeMarque[] = marques
  .map((m) => ({ slug: m.slug, nom: m.nom, nbPublies: produitsDeLaMarque(m.slug).length }))
  .filter((e) => e.nbPublies > 0)
  .sort((a, b) => a.nom.localeCompare(b.nom, "fr"));

const totalProduits = entrees.reduce((somme, e) => somme + e.nbPublies, 0);

/** Table des initiales accentuées : Nuxe et Écrinal doivent tomber dans la même logique A-Z. */
const INITIALES_SANS_ACCENT: Record<string, string> = {
  "À": "A", "Á": "A", "Â": "A", "Ä": "A", "Ã": "A", "Å": "A",
  "Ç": "C",
  "È": "E", "É": "E", "Ê": "E", "Ë": "E",
  "Ì": "I", "Í": "I", "Î": "I", "Ï": "I",
  "Ñ": "N",
  "Ò": "O", "Ó": "O", "Ô": "O", "Ö": "O", "Õ": "O",
  "Ù": "U", "Ú": "U", "Û": "U", "Ü": "U",
  "Ý": "Y",
};

/** Initiale de classement. Chiffres et symboles vont dans le groupe « # ». */
function initiale(nom: string): string {
  const brut = nom.charAt(0).toUpperCase();
  const c = INITIALES_SANS_ACCENT[brut] ?? brut;
  return c >= "A" && c <= "Z" ? c : "#";
}

const groupes: Array<{ lettre: string; marques: EntreeMarque[] }> = (() => {
  const index = new Map<string, EntreeMarque[]>();
  for (const e of entrees) {
    const lettre = initiale(e.nom);
    const liste = index.get(lettre);
    if (liste) liste.push(e);
    else index.set(lettre, [e]);
  }
  return [...index.entries()]
    .map(([lettre, liste]) => ({ lettre, marques: liste }))
    .sort((a, b) => {
      if (a.lettre === "#") return -1;
      if (b.lettre === "#") return 1;
      return a.lettre.localeCompare(b.lettre, "fr");
    });
})();

const description = `Toutes les maisons de cosmétique référencées sur ${SITE_NOM}, classées de A à Z : soin, maquillage, parfum et hygiène d'origine. Livraison dans les 69 wilayas, paiement à la livraison.`;

export const metadata: Metadata = {
  title: { absolute: `Marques de cosmétiques en Algérie | ${SITE_NOM}` },
  description,
  alternates: { canonical: urlAbsolue(CHEMIN) },
  openGraph: {
    title: `Marques de cosmétiques en Algérie | ${SITE_NOM}`,
    description,
    url: urlAbsolue(CHEMIN),
    type: "website",
  },
};

export default function PageMarques() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${urlAbsolue(CHEMIN)}#page`,
    url: urlAbsolue(CHEMIN),
    name: "Toutes les marques",
    description,
    inLanguage: "fr",
    isPartOf: { "@type": "WebSite", name: SITE_NOM, url: SITE_URL },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="mx-auto w-full max-w-[1440px] px-4 pb-24 pt-8 md:px-8">
        <FilAriane
          maillons={[
            { nom: "Accueil", url: "/" },
            { nom: "Marques", url: CHEMIN },
          ]}
        />

        <header className="mt-8 max-w-[720px]">
          <h1 className="text-[32px] font-[400] leading-[1.1] text-[#141414] md:text-[44px]">
            Toutes les marques
          </h1>
          <p className="mt-4 max-w-[62ch] text-[15px] leading-[1.6] text-[#4f4f4f]">
            Laboratoires dermatologiques, maisons de parfum, marques de maquillage et
            gammes d&apos;hygiène : toutes les maisons référencées sur {SITE_NOM} sont
            réunies ici, classées de A à Z. Chaque page de marque regroupe ses produits
            disponibles en Algérie, avec la contenance et le prix en dinars, et indique
            les rayons dans lesquels elle est la mieux représentée.
          </p>
        </header>

        <nav
          aria-label="Navigation par lettre"
          className="mt-10 border-y border-black/10 py-4"
        >
          <ul className="flex flex-wrap gap-x-3 gap-y-2">
            {groupes.map((g) => (
              <li key={g.lettre}>
                <a
                  href={`#lettre-${g.lettre === "#" ? "0-9" : g.lettre}`}
                  className="flex min-h-11 min-w-11 items-center justify-center font-mono text-[13px] uppercase tracking-[0.08em] text-[#4f4f4f] hover:bg-[#141414] hover:text-white"
                >
                  {g.lettre}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="mt-12 flex flex-col gap-12">
          {groupes.map((g) => (
            <section
              key={g.lettre}
              id={`lettre-${g.lettre === "#" ? "0-9" : g.lettre}`}
              aria-labelledby={`titre-lettre-${g.lettre === "#" ? "0-9" : g.lettre}`}
              className="scroll-mt-6"
            >
              <h2
                id={`titre-lettre-${g.lettre === "#" ? "0-9" : g.lettre}`}
                className="border-b border-black/10 pb-2 font-mono text-[13px] uppercase tracking-[0.12em] text-[#141414]"
              >
                {g.lettre === "#" ? "0-9" : g.lettre}
              </h2>
              <ul className="mt-5 grid grid-cols-1 gap-x-8 gap-y-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {g.marques.map((m) => (
                  <li key={m.slug}>
                    <Link
                      href={urlMarque(m.slug)}
                      className="flex items-baseline justify-between gap-3 border-b border-black/5 py-1.5 text-[14px] text-[#141414] hover:underline"
                    >
                      <span>{m.nom}</span>
                      <span className="font-mono text-[11px] text-[#909090]">
                        {m.nbPublies}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </main>
    </>
  );
}

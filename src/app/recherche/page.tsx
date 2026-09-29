import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import BarreRecherche from "@/components/BarreRecherche";
import { formatPrix, taxonomie } from "@/lib/catalogue";
import { rechercher } from "@/lib/recherche";

/**
 * Page de résultats.
 *
 * Rendue côté serveur à partir du paramètre `q` : la recherche fonctionne donc
 * sans JavaScript, et chaque résultat est un lien réel. La page est en
 * noindex — elle n'a rien à faire dans l'index, mais ses liens restent suivis.
 */

export const metadata: Metadata = {
  title: "Recherche",
  robots: { index: false, follow: true },
};

interface Props {
  searchParams: Promise<{ q?: string }>;
}

export default async function PageRecherche({ searchParams }: Props) {
  const { q = "" } = await searchParams;
  const requete = q.trim();
  const res = requete ? rechercher(requete, 48) : null;

  return (
    <div className="relative flex min-h-screen flex-col bg-[#f4f4f2]">

      <main id="contenu" className="mx-auto w-full max-w-[1400px] flex-1 px-4 pb-24 pt-8 sm:px-6 lg:px-10">
        <h1 className="text-[22px] leading-[1.2] tracking-tight text-[#141414] lg:text-[26px]">
          {requete ? `Résultats pour « ${requete} »` : "Rechercher"}
        </h1>

        {/* Même barre que l'en-tête : formulaire GET doublé de suggestions
            après hydratation, donc utilisable sans JavaScript. */}
        <BarreRecherche className="mt-6 max-w-[560px]" taille="large" valeurInitiale={requete} />

        {!requete && (
          <div className="mt-12">
            <p className="max-w-[70ch] text-[14px] leading-[1.65] text-[#4f4f4f]">
              Saisissez un nom de produit, une marque ou un besoin. Vous pouvez aussi
              partir d&apos;un rayon.
            </p>
            <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-3">
              {taxonomie.map((dep) => (
                <li key={dep.slug}>
                  <Link href={dep.url} className="text-[14px] text-[#141414] underline underline-offset-4 hover:opacity-60">
                    {dep.nom}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}

        {res && res.total === 0 && (
          <div className="mt-12">
            <p className="max-w-[70ch] text-[14px] leading-[1.65] text-[#4f4f4f]">
              Aucun résultat pour cette recherche. Essayez un terme plus court, ou le
              nom de la marque seule : l&apos;orthographe exacte des noms varie d&apos;un
              fabricant à l&apos;autre, et une recherche trop précise passe à côté.
            </p>
            <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-3">
              {taxonomie.map((dep) => (
                <li key={dep.slug}>
                  <Link href={dep.url} className="text-[14px] text-[#141414] underline underline-offset-4 hover:opacity-60">
                    {dep.nom}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}

        {res && res.total > 0 && (
          <>
            {(res.marques.length > 0 || res.rayons.length > 0) && (
              <div className="mt-8 flex flex-wrap gap-2">
                {res.marques.map((m) => (
                  <Link
                    key={m.url}
                    href={m.url}
                    className="border border-[#141414] px-3 py-1.5 text-[12px] uppercase tracking-[0.06em] text-[#141414] hover:bg-[#141414] hover:text-white"
                  >
                    {m.nom} · {m.nb}
                  </Link>
                ))}
                {res.rayons.map((r) => (
                  <Link
                    key={r.url}
                    href={r.url}
                    className="border border-[#909090] px-3 py-1.5 text-[12px] uppercase tracking-[0.06em] text-[#4f4f4f] hover:border-[#141414] hover:text-[#141414]"
                  >
                    {r.nom}
                  </Link>
                ))}
              </div>
            )}

            <p className="mt-6 font-mono text-[11px] uppercase tracking-[0.08em] text-[#909090]">
              {res.total} résultat{res.total > 1 ? "s" : ""}
              {res.total > res.produits.length && ` · ${res.produits.length} affichés`}
            </p>

            <ul className="mt-6 grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-3 lg:grid-cols-4">
              {res.produits.map((p, i) => (
                <li key={p.slug}>
                  <Link href={p.url} className="group block">
                    <div className="relative aspect-square overflow-hidden bg-white">
                      {p.image ? (
                        <Image
                          src={p.image}
                          alt={p.nom}
                          fill
                          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                          priority={i < 4}
                          unoptimized={!p.image.startsWith("/")}
                          className="object-contain"
                        />
                      ) : (
                        <div className="flex h-full items-center justify-center bg-[#f3efe9]">
                          <span className="px-4 text-center font-mono text-[10px] uppercase tracking-[0.08em] text-[#909090]">
                            {p.marque || "Cosmétique Algérie"}
                          </span>
                        </div>
                      )}
                    </div>
                    <div className="pt-3">
                      {p.marque && (
                        <p className="font-mono text-[11px] uppercase tracking-[0.06em] text-[#909090]">
                          {p.marque}
                        </p>
                      )}
                      <h2 className="mt-1 line-clamp-2 text-[14px] leading-[1.35] text-[#141414] group-hover:underline">
                        {p.nom}
                      </h2>
                      <p className="mt-1.5 flex items-baseline gap-2">
                        <span className="text-[14px] font-medium text-[#141414]">
                          {formatPrix(p.prix)}
                        </span>
                        {p.contenance && (
                          <span className="font-mono text-[11px] text-[#909090]">
                            {p.contenance}
                          </span>
                        )}
                      </p>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </>
        )}
      </main>
    </div>
  );
}

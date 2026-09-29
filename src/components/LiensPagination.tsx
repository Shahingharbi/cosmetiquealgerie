import Link from "next/link";

import { numerosAffiches, urlPage } from "@/lib/pagination";

interface Props {
  urlNoeud: string;
  courante: number;
  total: number;
}

/**
 * Barre de pagination.
 *
 * Ce sont de vrais liens `<a>`, rendus côté serveur : c'est par eux que
 * Googlebot atteint les produits au-delà de la première page. Un bouton
 * « charger plus » en JavaScript ne remplirait pas ce rôle.
 */
export default function LiensPagination({ urlNoeud, courante, total }: Props) {
  if (total <= 1) return null;

  const numeros = numerosAffiches(courante, total);
  const base =
    "inline-flex h-11 min-w-11 items-center justify-center border px-3 text-[14px] transition-colors";

  return (
    <nav aria-label="Pagination" className="mt-12 border-t border-[#e5e5e5] pt-8">
      <ul className="flex flex-wrap items-center gap-2">
        {courante > 1 && (
          <li>
            <Link
              href={urlPage(urlNoeud, courante - 1)}
              rel="prev"
              className={`${base} border-[#141414] text-[#141414] hover:bg-[#141414] hover:text-white`}
            >
              Précédent
            </Link>
          </li>
        )}

        {numeros.map((n, i) =>
          n === "…" ? (
            <li key={`trou-${i}`} aria-hidden className="px-1 text-[#909090]">
              …
            </li>
          ) : (
            <li key={n}>
              {n === courante ? (
                <span aria-current="page" className={`${base} border-[#141414] bg-[#141414] text-white`}>
                  {n}
                </span>
              ) : (
                <Link
                  href={urlPage(urlNoeud, n)}
                  className={`${base} border-[#e5e5e5] text-[#141414] hover:border-[#141414]`}
                >
                  {n}
                </Link>
              )}
            </li>
          ),
        )}

        {courante < total && (
          <li>
            <Link
              href={urlPage(urlNoeud, courante + 1)}
              rel="next"
              className={`${base} border-[#141414] text-[#141414] hover:bg-[#141414] hover:text-white`}
            >
              Suivant
            </Link>
          </li>
        )}
      </ul>

      <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.06em] text-[#909090]">
        Page {courante} sur {total}
      </p>
    </nav>
  );
}

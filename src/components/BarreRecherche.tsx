"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useId, useRef, useState } from "react";

/**
 * Barre de recherche avec suggestions.
 *
 * Trois partis pris, à conserver si le composant évolue :
 *
 *  1. C'est un vrai <form method="get" action="/recherche/">. Sans JavaScript,
 *     ou avant hydratation, la saisie et la validation fonctionnent comme
 *     avant. Les suggestions sont un confort ajouté par-dessus, jamais le seul
 *     chemin vers les résultats.
 *  2. Les suggestions viennent d'une route serveur, pas d'un index téléchargé.
 *     Le catalogue pèse près de huit mégaoctets ; l'envoyer au navigateur pour
 *     économiser une requête serait un mauvais calcul sur un trafic mobile.
 *  3. La navigation au clavier est complète (flèches, Entrée, Échap) et le
 *     motif ARIA combobox est respecté. Une liste de suggestions au clavier
 *     inaccessible n'est pas une fonctionnalité, c'est un piège.
 *
 * Le délai d'attente avant requête évite d'envoyer une requête par frappe :
 * sur un réseau algérien, six requêtes pour « cerave » coûteraient plus cher
 * que le gain.
 */

const DELAI_MS = 180;
const MIN_CARACTERES = 2;

interface Suggestion {
  nom: string;
  marque: string;
  prix: number;
  contenance: string;
  image: string | null;
  url: string;
}

interface Lien {
  nom: string;
  url: string;
}

interface Reponse {
  produits: Suggestion[];
  marques: Lien[];
  rayons: Lien[];
  total: number;
}

const VIDE: Reponse = { produits: [], marques: [], rayons: [], total: 0 };

function prixFr(n: number): string {
  return `${n.toLocaleString("fr-DZ")} DA`;
}

export default function BarreRecherche({
  className = "",
  taille = "compacte",
  valeurInitiale = "",
}: {
  className?: string;
  taille?: "compacte" | "large";
  valeurInitiale?: string;
}) {
  const router = useRouter();
  const idListe = useId();
  const [q, setQ] = useState(valeurInitiale);
  const [res, setRes] = useState<Reponse>(VIDE);
  const [ouvert, setOuvert] = useState(false);
  const [actif, setActif] = useState(-1);
  const conteneur = useRef<HTMLDivElement>(null);

  // Interroge le serveur après une pause de frappe. La requête précédente est
  // annulée : sans cela, une réponse lente d'une frappe antérieure peut
  // écraser une réponse plus récente.
  useEffect(() => {
    const requete = q.trim();
    if (requete.length < MIN_CARACTERES) {
      setRes(VIDE);
      return;
    }

    const controleur = new AbortController();
    const minuteur = window.setTimeout(() => {
      // La barre oblique finale est obligatoire : `trailingSlash: true` est
      // actif dans next.config, donc l'URL sans barre répond 308 et le
      // navigateur paie un aller-retour de plus à chaque frappe.
      fetch(`/api/suggestions/?q=${encodeURIComponent(requete)}`, {
        signal: controleur.signal,
      })
        .then((r) => (r.ok ? r.json() : VIDE))
        .then((d: Reponse) => {
          setRes(d);
          setActif(-1);
        })
        .catch(() => {
          /* requête annulée ou réseau indisponible : on garde l'état courant */
        });
    }, DELAI_MS);

    return () => {
      window.clearTimeout(minuteur);
      controleur.abort();
    };
  }, [q]);

  // Referme la liste sur un clic à l'extérieur.
  useEffect(() => {
    function auClic(e: MouseEvent) {
      if (!conteneur.current?.contains(e.target as Node)) setOuvert(false);
    }
    document.addEventListener("mousedown", auClic);
    return () => document.removeEventListener("mousedown", auClic);
  }, []);

  const liens: Lien[] = [...res.marques, ...res.rayons];
  const entrees: string[] = [
    ...res.produits.map((p) => p.url),
    ...liens.map((l) => l.url),
  ];
  const visible = ouvert && q.trim().length >= MIN_CARACTERES && entrees.length > 0;

  function auClavier(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Escape") {
      setOuvert(false);
      return;
    }
    if (!visible) return;

    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActif((i) => (i + 1) % entrees.length);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActif((i) => (i <= 0 ? entrees.length - 1 : i - 1));
    } else if (e.key === "Enter" && actif >= 0) {
      // Seulement quand une suggestion est sélectionnée : sinon on laisse le
      // formulaire partir vers la page de résultats, comportement attendu.
      e.preventDefault();
      setOuvert(false);
      router.push(entrees[actif]);
    }
  }

  const grand = taille === "large";

  return (
    <div ref={conteneur} className={`relative ${className}`}>
      <form
        action="/recherche/"
        method="get"
        role="search"
        className="flex items-stretch border border-[#141414] bg-[#f4f4f2]"
      >
        <label htmlFor={`${idListe}-champ`} className="sr-only">
          Rechercher un produit ou une marque
        </label>
        <input
          id={`${idListe}-champ`}
          type="search"
          name="q"
          value={q}
          onChange={(e) => {
            setQ(e.target.value);
            setOuvert(true);
          }}
          onFocus={() => setOuvert(true)}
          onKeyDown={auClavier}
          autoComplete="off"
          placeholder="Rechercher un produit, une marque"
          role="combobox"
          aria-expanded={visible}
          aria-controls={idListe}
          aria-autocomplete="list"
          aria-activedescendant={actif >= 0 ? `${idListe}-${actif}` : undefined}
          className={`w-full bg-transparent outline-none placeholder:text-[#909090] ${
            grand ? "px-4 py-3 text-[14px]" : "px-3 py-2 text-[13px] lg:w-[260px]"
          }`}
        />
        <button
          type="submit"
          aria-label="Lancer la recherche"
          className={`grid place-items-center bg-[#141414] text-white ${
            grand ? "px-5 text-[12px] uppercase tracking-[0.08em]" : "min-h-[44px] w-11"
          }`}
        >
          {grand ? (
            "Chercher"
          ) : (
            <svg
              viewBox="0 0 24 24"
              width="16"
              height="16"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              aria-hidden="true"
            >
              <circle cx="11" cy="11" r="7" />
              <path d="M20 20l-3.5-3.5" />
            </svg>
          )}
        </button>
      </form>

      {visible && (
        <div
          id={idListe}
          role="listbox"
          aria-label="Suggestions"
          className="absolute left-0 right-0 top-[calc(100%+4px)] z-50 max-h-[70vh] overflow-y-auto border border-[#141414] bg-white shadow-[0_18px_40px_-24px_rgba(0,0,0,0.45)]"
        >
          {res.produits.map((p, i) => (
            <a
              key={p.url}
              id={`${idListe}-${i}`}
              href={p.url}
              role="option"
              aria-selected={actif === i}
              onMouseEnter={() => setActif(i)}
              className={`flex items-center gap-3 border-b border-[#f0f0f0] px-3 py-2.5 text-left ${
                actif === i ? "bg-[#f4f4f2]" : "bg-white"
              }`}
            >
              <span className="relative block h-11 w-11 shrink-0 overflow-hidden border border-[#e5e5e5] bg-[#f4f4f2]">
                {p.image ? (
                  <Image
                    src={p.image}
                    alt=""
                    aria-hidden
                    fill
                    sizes="44px"
                    className="object-contain p-1"
                  />
                ) : (
                  <span
                    aria-hidden
                    className="grid h-full w-full place-items-center font-mono text-[9px] uppercase text-[#909090]"
                  >
                    {p.marque ? p.marque.slice(0, 3) : "—"}
                  </span>
                )}
              </span>
              <span className="min-w-0 flex-1">
                <span className="block truncate text-[13px] leading-[1.35] text-[#141414]">
                  {p.nom}
                </span>
                <span className="mt-0.5 block font-mono text-[10px] uppercase tracking-[0.06em] text-[#909090]">
                  {[p.marque, p.contenance].filter(Boolean).join(" · ")}
                </span>
              </span>
              <span className="shrink-0 text-[12px] text-[#141414]">{prixFr(p.prix)}</span>
            </a>
          ))}

          {liens.map((l, j) => {
            const i = res.produits.length + j;
            return (
              <a
                key={l.url}
                id={`${idListe}-${i}`}
                href={l.url}
                role="option"
                aria-selected={actif === i}
                onMouseEnter={() => setActif(i)}
                className={`block border-b border-[#f0f0f0] px-3 py-2.5 text-[13px] text-[#141414] ${
                  actif === i ? "bg-[#f4f4f2]" : "bg-white"
                }`}
              >
                <span className="font-mono text-[10px] uppercase tracking-[0.06em] text-[#909090]">
                  {j < res.marques.length ? "Marque" : "Rayon"}
                </span>
                <span className="ml-2">{l.nom}</span>
              </a>
            );
          })}

          {res.total > res.produits.length && (
            <a
              href={`/recherche/?q=${encodeURIComponent(q.trim())}`}
              className="block px-3 py-2.5 text-[12px] uppercase tracking-[0.06em] text-[#141414] underline underline-offset-4"
            >
              Voir tous les résultats
            </a>
          )}
        </div>
      )}
    </div>
  );
}

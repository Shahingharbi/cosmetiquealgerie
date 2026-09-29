import Link from "next/link";
import BarreRecherche from "@/components/BarreRecherche";
import { TEL_DZ_AFFICHE, TEL_DZ_LIEN } from "@/lib/contact";
import IndicateurPanier from "@/components/IndicateurPanier";
import BandeauInfo from "@/components/BandeauInfo";
import LogoCosmetiqueAlgerie from "@/components/LogoCosmetiqueAlgerie";
import MegaMenu from "@/components/MegaMenu";

function IconeMenu() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="22"
      height="22"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      aria-hidden="true"
    >
      <path d="M3 6h18M3 12h18M3 18h18" />
    </svg>
  );
}

function IconePanier({ size = 20 }: { size?: number }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M4 7h16l-1.2 12.2a1 1 0 01-1 .8H6.2a1 1 0 01-1-.8L4 7z" />
      <path d="M8.5 10V6.5a3.5 3.5 0 017 0V10" />
    </svg>
  );
}

/**
 * En-tête du site.
 *
 * Server Component intégral : le bandeau, le mega menu et les liens
 * utilitaires sont dans le HTML de la première réponse, sur toutes les pages.
 * L'ouverture du tiroir mobile passe par une case à cocher masquée + un
 * <label> — aucun état React, donc aucun lien retiré du DOM.
 *
 * Le bandeau d'information est monté ici : le layout n'a qu'à poser <Header />.
 */
export function Header() {
  return (
    <>
      <BandeauInfo />

      <header className="sticky top-0 z-40 border-b border-[#141414] bg-[#f4f4f2] text-[#141414]">
        {/* Passe-plat clavier : obligatoire avec une navigation de ~160 liens. */}
        <a
          href="#contenu"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-2 focus:z-50 focus:bg-[#141414] focus:px-4 focus:py-2 focus:text-[13px] focus:text-white"
        >
          Aller au contenu
        </a>

        {/* État d'ouverture du tiroir mobile. */}
        {/* Masquée mais focusable : elle redevient visible au clavier, sinon le
            tiroir n'aurait aucun indicateur de focus. */}
        <input
          type="checkbox"
          id="ca-tiroir"
          className="peer sr-only accent-[#141414] focus-visible:not-sr-only focus-visible:absolute focus-visible:left-3 focus-visible:top-4 focus-visible:z-50 focus-visible:h-6 focus-visible:w-6 lg:hidden"
          aria-label="Ouvrir le menu de navigation"
        />

        <div className="mx-auto flex h-14 max-w-[1280px] items-center gap-3 px-4 lg:h-16 lg:px-8">
          <label
            htmlFor="ca-tiroir"
            aria-hidden="true"
            className="-ml-3 grid h-12 w-12 shrink-0 cursor-pointer place-items-center lg:hidden"
          >
            <IconeMenu />
          </label>

          <Link href="/" prefetch={false} className="shrink-0" aria-label="Cosmétique Algérie, accueil">
            <LogoCosmetiqueAlgerie
              variante="horizontal"
              titre=""
              className="h-[18px] w-auto text-[#141414] lg:h-5"
            />
          </Link>

          {/* Recherche : reste un formulaire GET, donc fonctionnel sans
              JavaScript ; les suggestions se greffent par-dessus après
              hydratation. La page de résultats est en noindex, follow. */}
          <BarreRecherche className="ml-auto hidden lg:block" />

          <nav
            aria-label="Navigation utilitaire"
            className="ml-auto flex items-center gap-4 text-[12px] uppercase tracking-[0.06em] lg:ml-6 lg:gap-5"
          >
            <Link href="/marques/" prefetch={false} className="hidden hover:opacity-60 lg:inline">
              Marques
            </Link>
            <Link href="/guide/" prefetch={false} className="hidden hover:opacity-60 lg:inline">
              Guides
            </Link>
            <Link href="/livraison/" prefetch={false} className="hidden hover:opacity-60 lg:inline">
              Livraison
            </Link>
            {/* Numéro local, cliquable. Sur un marché où l'on paie à la
                livraison, pouvoir appeler un vrai numéro algérien avant de
                commander lève plus d'objections qu'un argumentaire. */}
            <a
              href={TEL_DZ_LIEN}
              className="hidden items-center gap-1.5 font-medium hover:opacity-60 xl:inline-flex"
            >
              <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92Z" />
              </svg>
              {TEL_DZ_AFFICHE}
            </a>
            {/* Pas d'aria-label ici : il masquerait le compteur d'articles
                aux lecteurs d'écran, qui est justement l'information utile. */}
            <Link
              href="/panier/"
              prefetch={false}
              rel="nofollow"
              className="relative grid h-11 w-11 place-items-center hover:opacity-60 lg:h-auto lg:w-auto"
            >
              <IconePanier />
              <IndicateurPanier />
            </Link>
          </nav>
        </div>

        {/* Recherche mobile, sur sa propre rangée.
            Elle remplace l'icône loupe qui renvoyait vers /recherche/ : le
            trafic est très majoritairement mobile et la recherche est le
            premier geste sur un catalogue de cette taille. Lui demander une
            navigation de page entière avant de pouvoir taper coûtait un
            aller-retour réseau pour rien. */}
        <div className="border-t border-[#141414]/10 px-4 pb-3 pt-2 lg:hidden">
          <BarreRecherche />
        </div>

        {/* Un seul balisage de navigation dans le document : tiroir plein écran
            en dessous de 1024 px, barre horizontale au-dessus. Toujours rendu,
            jamais démonté — masqué en CSS quand il est fermé. */}
        <div className="invisible absolute inset-x-0 top-full max-h-[calc(100dvh-7.5rem)] -translate-x-full overflow-y-auto border-t border-[#141414] bg-[#f4f4f2] transition-transform duration-200 peer-checked:visible peer-checked:translate-x-0 lg:visible lg:static lg:max-h-none lg:translate-x-0 lg:overflow-visible lg:transition-none">
          <div className="flex items-center justify-between px-4 py-3 lg:hidden">
            <span className="font-mono text-[11px] uppercase tracking-[0.08em] text-[#141414]/60">
              Nos univers
            </span>
            <label
              htmlFor="ca-tiroir"
              className="flex min-h-[44px] min-w-[44px] cursor-pointer items-center justify-end text-[12px] uppercase tracking-[0.06em] underline underline-offset-4"
            >
              Fermer
            </label>
          </div>

          <MegaMenu />

          {/* Seule entrée non départementale du tiroir : les 431 marques ne
              descendent pas dans le menu mobile, elles passent par /marques/.
              Guides et pages institutionnelles restent au footer. */}
          <div className="border-t border-[#141414]/10 px-4 py-5 lg:hidden">
            <Link
              href="/marques/"
              prefetch={false}
              className="flex min-h-[44px] items-center text-[13px] uppercase tracking-[0.06em]"
            >
              Toutes les marques
            </Link>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;

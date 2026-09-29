import Link from "next/link";

import LogoCosmetiqueAlgerie from "@/components/LogoCosmetiqueAlgerie";
import { produitsDuNoeud, taxonomie } from "@/lib/catalogue";

const nf = new Intl.NumberFormat("fr-FR");

/**
 * 404.
 *
 * Elle renvoie vers les 9 rayons plutôt que vers l'accueil seul : c'est autant
 * une porte de sortie pour le visiteur qu'un point de relance pour un robot
 * arrivé sur une URL morte (backlink ancien, coquille dans un lien).
 */
export default function PageIntrouvable() {
  const rayons = taxonomie.map((dep) => ({
    dep,
    nb: produitsDuNoeud(dep.url).length,
  }));

  return (
    <div className="flex min-h-screen flex-col bg-[#f4f4f2]">
      <header className="border-b border-[#e5e5e5] px-4 py-5 md:px-8">
        <div className="mx-auto max-w-[1440px]">
          <Link href="/" aria-label="Cosmétique Algérie, accueil">
            <LogoCosmetiqueAlgerie className="h-4 w-auto text-[#141414]" />
          </Link>
        </div>
      </header>

      <main className="flex-1 px-4 py-14 md:px-8 md:py-20">
        <div className="mx-auto max-w-[1440px]">
          <p className="font-mono text-[12px] uppercase tracking-[0.14em] text-[#909090]">
            Erreur 404
          </p>
          <h1 className="mt-5 max-w-[20ch] text-[32px] leading-[1.08] text-[#141414] md:text-[52px]">
            Cette page n&apos;existe pas
          </h1>
          <p className="mt-6 max-w-[60ch] text-[16px] leading-[1.55] text-[#4f4f4f]">
            L&apos;adresse demandée est erronée, ou la référence qu&apos;elle
            désignait n&apos;est plus en ligne. Le catalogue reste accessible par
            ses 9 rayons.
          </p>

          <nav aria-labelledby="rayons-404" className="mt-12">
            <h2
              id="rayons-404"
              className="font-mono text-[12px] uppercase tracking-[0.14em] text-[#909090]"
            >
              Les 9 rayons
            </h2>
            <ul className="mt-6 grid grid-cols-1 gap-px border border-[#e5e5e5] bg-[#e5e5e5] sm:grid-cols-2 lg:grid-cols-3">
              {rayons.map(({ dep, nb }) => (
                <li key={dep.slug}>
                  <Link
                    href={dep.url}
                    className="flex items-baseline justify-between gap-3 bg-white px-5 py-5 transition-colors hover:bg-[#f3efe9]"
                  >
                    <span className="text-[16px] text-[#141414]">{dep.nom}</span>
                    <span className="font-mono text-[11px] text-[#909090]">
                      {nf.format(nb)}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="mt-10 flex flex-wrap gap-3">
            <Link href="/" className="ca-btn-primary">
              Retour à l&apos;accueil
            </Link>
            <Link
              href="/marques/"
              className="inline-flex items-center justify-center border border-[#141414] px-6 py-4 text-[13px] font-medium uppercase tracking-[0.05em] text-[#141414] transition-colors hover:bg-[#141414] hover:text-white"
            >
              Toutes les marques
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}

import Image from "next/image";
import Link from "next/link";
import { HERO } from "@/lib/site-data";

/**
 * Ouverture de la page d'accueil.
 *
 * Trois défauts de la version précédente sont corrigés ici, et il vaut la
 * peine de dire lesquels pour ne pas les réintroduire :
 *
 *  1. Le titre d'ouverture était un H2, posé au-dessus du H1 qui venait plus
 *     bas dans la page. La hiérarchie des titres était donc fausse dès la
 *     première balise. Le H1 est désormais ici, en tête du document, et il
 *     porte le mot-clé de la page.
 *  2. Le texte n'était pas sélectionnable : un lien en `absolute inset-0`
 *     couvrait toute la section et la colonne de texte portait
 *     `pointer-events-none` pour le laisser cliquable. Résultat, le texte se
 *     comportait comme une image. Le visuel est maintenant dans sa propre
 *     colonne, lui seul est cliquable, et le texte est du texte.
 *  3. Le packshot servait de fond en `object-contain` sur toute la largeur :
 *     il flottait au milieu d'un aplat, sans cadre, et se retrouvait sous le
 *     texte en mobile. Il a désormais son cadre, avec un fond distinct.
 *
 * Aucune image d'ambiance, aucun mannequin : le seul visuel est le packshot
 * d'un produit réel du catalogue, qui pointe vers sa fiche.
 */
export function Hero() {
  return (
    <section className="border-b border-[#e5e5e5] bg-[#f3efe9]">
      <div className="mx-auto grid w-full max-w-[1440px] items-center gap-10 px-4 py-14 sm:px-6 md:grid-cols-[minmax(0,1fr)_minmax(0,0.85fr)] md:gap-14 md:py-20 lg:px-10 lg:py-24">
        <div className="max-w-[34rem]">
          <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-[#4f4f4f]">
            {HERO.surtitre}
          </p>

          <h1 className="mt-5 text-[32px] font-[400] leading-[1.08] tracking-[-0.015em] text-[#141414] sm:text-[42px] md:text-[48px] lg:text-[56px]">
            {HERO.titre}
          </h1>

          <p className="mt-6 max-w-[46ch] text-[15px] leading-[1.6] text-[#4f4f4f] md:text-[16px]">
            {HERO.chapeau}
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <Link
              href={HERO.ctaPrincipal.href}
              className="inline-flex min-h-[48px] items-center justify-center border border-[#141414] bg-[#141414] px-7 text-[13px] uppercase tracking-[0.08em] text-white transition-colors hover:bg-[#2e2e2e]"
            >
              {HERO.ctaPrincipal.libelle}
            </Link>
            <Link
              href={HERO.ctaSecondaire.href}
              className="inline-flex min-h-[48px] items-center justify-center border border-[#141414] px-7 text-[13px] uppercase tracking-[0.08em] text-[#141414] transition-colors hover:bg-[#141414] hover:text-white"
            >
              {HERO.ctaSecondaire.libelle}
            </Link>
          </div>

          <ul className="mt-9 flex flex-wrap gap-x-7 gap-y-2 font-mono text-[11px] uppercase tracking-[0.08em] text-[#4f4f4f]">
            {HERO.garanties.map((g) => (
              <li key={g}>{g}</li>
            ))}
          </ul>
        </div>

        {HERO.image && (
          <Link
            href={HERO.href}
            className="group relative block aspect-[4/5] w-full max-w-[26rem] justify-self-center overflow-hidden border border-[#e5e5e5] bg-white md:justify-self-end"
          >
            <Image
              src={HERO.image}
              alt={HERO.imageAlt}
              fill
              priority
              sizes="(max-width: 767px) 88vw, 26rem"
              className="object-contain p-8 transition-transform duration-500 group-hover:scale-[1.03] md:p-10"
            />
            {HERO.produitMarque && (
              <span className="absolute inset-x-0 bottom-0 bg-white/92 px-5 py-3 font-mono text-[11px] uppercase tracking-[0.08em] text-[#4f4f4f]">
                {HERO.produitMarque}
              </span>
            )}
          </Link>
        )}
      </div>
    </section>
  );
}

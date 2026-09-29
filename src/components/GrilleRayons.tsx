import Image from "next/image";
import Link from "next/link";
import type { Vignette } from "@/types/site";

/**
 * Les neuf rayons, en grille et non en carrousel.
 *
 * Un carrousel masque la moitié de ses vignettes derrière un défilement : les
 * liens sont dans le HTML, donc crawlables, mais un visiteur mobile ne voit
 * jamais les rayons du fond. Or ce bloc est la principale distribution de
 * liens de la page d'accueil vers les têtes de silo. Une grille les montre
 * tous, d'un coup, sans interaction.
 */
export default function GrilleRayons({
  titre,
  rayons,
}: {
  titre: string;
  rayons: Vignette[];
}) {
  if (rayons.length === 0) return null;

  return (
    <section className="w-full px-4 py-12 sm:px-6 md:py-16 lg:px-10">
      <h2 className="text-[26px] font-[400] leading-none text-[#141414] md:text-[36px]">
        {titre}
      </h2>
      <ul className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 md:mt-10 md:gap-4 lg:grid-cols-5">
        {rayons.map((r) => (
          <li key={r.id}>
            <Link
              href={r.href}
              className="group block border border-[#e5e5e5] bg-white transition-colors hover:border-[#141414]"
            >
              <div className="relative aspect-square overflow-hidden bg-[#f4f4f2]">
                <Image
                  src={r.image}
                  alt=""
                  aria-hidden
                  fill
                  sizes="(max-width: 639px) 46vw, (max-width: 1023px) 30vw, 18vw"
                  className="object-contain p-5 transition-transform duration-500 group-hover:scale-[1.04]"
                />
              </div>
              <span className="block px-4 py-3.5 text-[14px] leading-[1.3] text-[#141414]">
                {r.title}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}

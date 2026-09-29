import Image from "next/image";
import Link from "next/link";
import { REVIEWS } from "@/lib/site-data";

/**
 * Bloc authenticité.
 *
 * Prend la place du bloc d'avis clients : nous n'en avons aucun, et sur ce
 * marché la question qui précède l'achat est l'origine du produit.
 * Le visuel est un packshot du catalogue, jamais une image d'ambiance.
 */
export function Reviews() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 bg-white w-full">
      <div className="flex flex-col justify-center gap-6 md:gap-8 px-6 md:px-16 py-14 md:py-24">
        <h2 className="font-[400] text-[36px] md:text-[64px] leading-[1.05] tracking-[-0.01em] text-[#141414]">
          {REVIEWS.headline}
        </h2>
        <p className="max-w-[520px] text-[15px] md:text-[17px] leading-[1.55] text-[#141414]">
          {REVIEWS.body}
        </p>
        <Link
          href={REVIEWS.linkHref}
          className="inline-flex min-h-11 items-center self-start text-[13px] uppercase tracking-[0.1em] text-[#141414] underline underline-offset-4 transition-opacity hover:opacity-70"
        >
          {REVIEWS.linkLabel}
        </Link>
      </div>
      <div className="relative min-h-[320px] md:min-h-[560px] overflow-hidden bg-[#f3efe9]">
        <Image
          src={REVIEWS.image}
          alt={REVIEWS.imageAlt}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-contain p-10 md:p-16"
        />
      </div>
    </section>
  );
}

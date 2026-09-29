import Link from "next/link";
import { DIAGNOSTIC } from "@/lib/site-data";

/**
 * Panneau typographique pleine largeur, en aplat d'encre.
 * Aucune vidéo ni image de fond : le contraste vient de la couleur seule.
 */
export function DiagnosticCTA() {
  return (
    <section className="relative w-full py-12 md:py-16">
      <div className="relative w-full overflow-hidden bg-[#141414] max-md:!aspect-auto max-md:min-h-[320px]" style={{ aspectRatio: "16/9", maxHeight: 700 }}>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center gap-6 md:gap-8 px-6 text-white">
          <p className="text-[13px] md:text-[15px] tracking-[0.08em] uppercase font-[500]">
            {DIAGNOSTIC.label}
          </p>
          <h2 className="font-[400] leading-[0.98] tracking-[-0.02em] text-[44px] sm:text-[64px] md:text-[96px] lg:text-[128px] max-w-[1100px]">
            {DIAGNOSTIC.headline}
          </h2>
          <Link
            href={DIAGNOSTIC.ctaHref}
            className="inline-flex items-center justify-center bg-white text-[#141414] hover:bg-white/90 transition-colors uppercase tracking-[0.06em] text-[12px] md:text-[13px] font-[500] px-6 py-4"
          >
            {DIAGNOSTIC.ctaLabel}
          </Link>
        </div>
      </div>
    </section>
  );
}

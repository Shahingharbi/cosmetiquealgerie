import Image from "next/image";
import { PHILOSOPHY } from "@/lib/site-data";

export function Philosophy() {
  return (
    <section className="bg-white px-4 md:px-16 pt-10 md:pt-16 pb-16 md:pb-24">
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
        <div className="md:col-span-5 flex flex-col justify-center gap-5 md:gap-7">
          {/* H2 et non H4 : cette section est un enfant direct du H1 de la
              page. Sauter deux niveaux de titre casse la hiérarchie. */}
          <h2 className="text-[13px] font-[500] uppercase tracking-[0.12em] text-[#909090]">
            {PHILOSOPHY.eyebrow}
          </h2>
          <p className="text-[18px] md:text-[24px] leading-[1.4] text-[#141414] font-[400] max-w-[520px]">
            {PHILOSOPHY.body}
          </p>
        </div>
        <div className="md:col-span-7 grid grid-cols-2 gap-3 md:gap-5">
          {PHILOSOPHY.claims.map((claim, i) => (
            <div key={i} className="relative aspect-[4/5] overflow-hidden bg-[#d4d4d4]">
              <Image
                src={claim.image}
                alt={claim.title}
                fill
                sizes="(max-width: 768px) 45vw, 25vw"
                className="object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 p-4 md:p-6 text-white bg-gradient-to-t from-black/60 via-black/25 to-transparent">
                <p className="text-[14px] md:text-[18px] font-[400] leading-[1.25]">
                  {claim.title}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="md:col-span-12 grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-5 mt-6 md:mt-10">
          {PHILOSOPHY.gallery.map((g, i) => (
            <div key={i} className="relative aspect-[4/5] overflow-hidden bg-[#f3efe9]">
              <Image
                src={g.image}
                alt={g.label}
                fill
                sizes="(max-width: 768px) 45vw, 22vw"
                className="object-cover"
              />
              <span className="absolute left-3 bottom-3 text-[11px] uppercase tracking-[0.14em] bg-white/90 px-2 py-1 text-[#141414]">
                {g.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

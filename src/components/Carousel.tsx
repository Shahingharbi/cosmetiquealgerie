"use client";
import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ChevronLeftIcon, ChevronRightIcon } from "@/components/icons";
import { cn } from "@/lib/utils";

interface CarouselProps {
  eyebrow: string;
  viewAllLabel?: string;
  viewAllHref?: string;
  children: React.ReactNode;
  /** min width of each slide, e.g. "min-w-[70vw] md:min-w-[320px]" */
  slideClass?: string;
  className?: string;
}

export function Carousel({
  eyebrow,
  viewAllLabel,
  viewAllHref,
  children,
  slideClass = "min-w-[70vw] md:min-w-[320px]",
  className,
}: CarouselProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);

  const updateArrows = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    setCanPrev(el.scrollLeft > 4);
    setCanNext(el.scrollLeft + el.clientWidth < el.scrollWidth - 4);
  }, []);

  useEffect(() => {
    updateArrows();
    const el = trackRef.current;
    if (!el) return;
    el.addEventListener("scroll", updateArrows, { passive: true });
    window.addEventListener("resize", updateArrows);
    return () => {
      el.removeEventListener("scroll", updateArrows);
      window.removeEventListener("resize", updateArrows);
    };
  }, [updateArrows]);

  const step = (dir: 1 | -1) => {
    const el = trackRef.current;
    if (!el) return;
    const first = el.firstElementChild as HTMLElement | null;
    const w = first ? first.getBoundingClientRect().width + 12 : el.clientWidth * 0.9;
    el.scrollBy({ left: dir * w, behavior: "smooth" });
  };

  return (
    <section className={cn("relative w-full py-12 md:py-16", className)}>
      <div className="flex items-end justify-between px-4 md:px-10 mb-8 md:mb-10">
        {/* H2 et non H3 : ces sections sont des enfants directs du H1 de la
            page. Un H3 sans H2 parent casse la hiérarchie des titres. */}
        <h2 className="text-[26px] md:text-[36px] font-[400] leading-none text-[#141414]">
          {eyebrow}
        </h2>
        {viewAllLabel && (
          <Link
            href={viewAllHref ?? "#"}
            className="inline-flex min-h-11 items-center text-[13px] uppercase tracking-[0.08em] text-[#141414] underline underline-offset-4 transition-opacity hover:opacity-70 md:text-[14px]"
          >
            {viewAllLabel}
          </Link>
        )}
      </div>
      <div className="relative">
        <div
          ref={trackRef}
          className="ca-scrollbar-hide flex gap-3 md:gap-4 overflow-x-auto scroll-smooth snap-x snap-mandatory px-4 md:px-10 pb-4"
        >
          {Array.isArray(children)
            ? children.map((c, i) => (
                <div key={i} className={cn("snap-start", slideClass)}>
                  {c}
                </div>
              ))
            : (
              <div className={cn("snap-start", slideClass)}>{children}</div>
            )}
        </div>
        <button
          type="button"
          aria-label="Précédent"
          onClick={() => step(-1)}
          className={cn(
            "hidden md:flex absolute left-3 top-1/2 -translate-y-1/2 h-11 w-11 rounded-full items-center justify-center bg-white shadow-[0_4px_20px_-6px_rgba(0,0,0,0.15)] text-[#141414] transition-opacity",
            canPrev ? "opacity-100" : "opacity-0 pointer-events-none",
          )}
        >
          <ChevronLeftIcon size={18} />
        </button>
        <button
          type="button"
          aria-label="Suivant"
          onClick={() => step(1)}
          className={cn(
            "hidden md:flex absolute right-3 top-1/2 -translate-y-1/2 h-11 w-11 rounded-full items-center justify-center bg-white shadow-[0_4px_20px_-6px_rgba(0,0,0,0.15)] text-[#141414] transition-opacity",
            canNext ? "opacity-100" : "opacity-0 pointer-events-none",
          )}
        >
          <ChevronRightIcon size={18} />
        </button>
      </div>
    </section>
  );
}

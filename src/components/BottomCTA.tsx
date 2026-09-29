"use client";
import Link from "next/link";
import { useState } from "react";
import { CloseIcon } from "@/components/icons";

interface Props {
  text: string;
  ctaLabel: string;
  ctaHref: string;
}

/** Barre fixe de bas de page, refermable. Le texte arrive en props : la donnée est server-only. */
export function BottomCTA({ text, ctaLabel, ctaHref }: Props) {
  const [dismissed, setDismissed] = useState(false);
  if (dismissed) return null;
  return (
    <div className="fixed bottom-0 inset-x-0 z-40 bg-white border-t border-black/5 shadow-[0_-4px_20px_-8px_rgba(0,0,0,0.08)]">
      <div className="max-w-[1440px] mx-auto px-4 md:px-10 py-4 md:py-5 flex items-center gap-4 md:gap-8">
        <p className="flex-1 text-[13px] md:text-[15px] text-[#141414]">{text}</p>
        <Link
          href={ctaHref}
          className="ca-btn-primary shrink-0 whitespace-nowrap text-[11px] md:text-[13px] px-4 md:px-6 py-3 md:py-4"
        >
          {ctaLabel}
        </Link>
        <button
          aria-label="Fermer"
          className="shrink-0 h-8 w-8 flex items-center justify-center bg-[#141414] text-white hover:bg-black transition-colors"
          onClick={() => setDismissed(true)}
        >
          <CloseIcon size={14} />
        </button>
      </div>
    </div>
  );
}

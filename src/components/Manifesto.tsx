"use client";
import { useEffect, useState } from "react";

const INTERVAL = 2400;

interface Props {
  prefix: string;
  words: string[];
}

/**
 * H1 de l'accueil.
 *
 * Les mots tournent visuellement mais restent tous dans le DOM : le titre
 * complet, mot-clé compris, est lisible par un robot sans exécuter le script.
 * Le texte arrive en props — la donnée est calculée côté serveur.
 */
export function Manifesto({ prefix, words }: Props) {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = window.setInterval(
      () => setI((v) => (v + 1) % words.length),
      INTERVAL,
    );
    return () => window.clearInterval(t);
  }, [words.length]);
  return (
    <section className="px-4 pt-16 md:py-20 text-center">
      <h1 className="mx-auto max-w-[1100px] font-[400] text-[#141414] leading-[1.02] tracking-[-0.01em] text-[48px] sm:text-[64px] md:text-[88px] lg:text-[112px]">
        <span>{prefix}&nbsp;</span>
        <span className="relative inline-block align-baseline">
          {words.map((w, idx) => (
            <span
              key={idx}
              className="inline-block transition-all duration-[500ms] ease-out italic"
              style={{
                opacity: i === idx ? 1 : 0,
                transform: `translateY(${i === idx ? "0" : "-6px"})`,
                position: idx === 0 ? "relative" : "absolute",
                left: idx === 0 ? undefined : 0,
                top: idx === 0 ? undefined : 0,
                whiteSpace: "nowrap",
              }}
            >
              {w}
            </span>
          ))}
        </span>
      </h1>
    </section>
  );
}

import Link from "next/link";
import type { ReactNode } from "react";

/**
 * Rend un paragraphe éditorial en transformant les marqueurs `[[ancre|url]]`
 * en liens réels.
 *
 * Les liens sont écrits dans le corps du texte plutôt que regroupés en fin de
 * page : une ancre entourée de sa phrase transmet un contexte sémantique que
 * ne donne pas une liste « voir aussi », et c'est ce qui fait circuler le jus
 * à l'intérieur du silo. Le rendu est serveur, donc toujours crawlable.
 */

const MARQUEUR = /\[\[([^|\]]+)\|([^\]]+)\]\]/g;

function enrichir(texte: string): ReactNode[] {
  const morceaux: ReactNode[] = [];
  let curseur = 0;
  let n = 0;

  for (const m of texte.matchAll(MARQUEUR)) {
    const [complet, ancre, url] = m;
    const debut = m.index ?? 0;
    if (debut > curseur) morceaux.push(texte.slice(curseur, debut));
    morceaux.push(
      <Link
        key={`${url}-${n++}`}
        href={url}
        className="underline decoration-[#909090] underline-offset-[3px] hover:decoration-[#141414]"
      >
        {ancre}
      </Link>,
    );
    curseur = debut + complet.length;
  }

  if (curseur < texte.length) morceaux.push(texte.slice(curseur));
  return morceaux;
}

interface Props {
  titre?: string;
  paragraphes: string[];
  /** Niveau de titre, pour ne pas casser la hiérarchie Hn de la page. */
  niveau?: 2 | 3;
  className?: string;
}

export default function TexteEditorial({
  titre,
  paragraphes,
  niveau = 2,
  className = "",
}: Props) {
  if (paragraphes.length === 0) return null;
  const Titre = niveau === 2 ? "h2" : "h3";

  return (
    <section className={className}>
      {titre && (
        <Titre className="text-[18px] leading-[1.3] tracking-tight text-[#141414] lg:text-[20px]">
          {titre}
        </Titre>
      )}
      <div className={titre ? "mt-4 space-y-4" : "space-y-4"}>
        {paragraphes.map((p, i) => (
          <p key={i} className="max-w-[70ch] text-[14px] leading-[1.65] text-[#4f4f4f]">
            {enrichir(p)}
          </p>
        ))}
      </div>
    </section>
  );
}

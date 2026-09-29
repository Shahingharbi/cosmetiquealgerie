"use client";

import Image from "next/image";
import { useState } from "react";

interface Props {
  /** URLs des visuels, la première est l'image principale. Peut être vide. */
  images: string[];
  /** Nom du produit, sert de texte alternatif. */
  nom: string;
  /** Affiché à la place du visuel quand il n'y en a pas encore. */
  marque?: string;
}

/** Au-delà, les miniatures deviennent illisibles et alourdissent la page. */
const MAX_VISUELS = 8;

/**
 * Galerie de la fiche produit.
 *
 * Client uniquement pour le changement de visuel : le HTML rendu côté serveur
 * contient déjà l'image principale et toutes les miniatures, donc rien n'est
 * perdu si le JS ne s'exécute pas.
 * Les conteneurs ont des dimensions fixes (carré pour la principale, 72 px pour
 * les miniatures) : aucun décalage de mise en page au chargement.
 */
export default function GalerieProduit({ images, nom, marque }: Props) {
  const visuels = images.slice(0, MAX_VISUELS);
  const [actif, setActif] = useState(0);
  const principale = visuels[actif] ?? visuels[0];

  // Pas encore de visuel : un cadre tenu, aux mêmes dimensions, plutôt qu'un
  // trou dans la page. Le cadre annonce ce qu'il manque au lieu de le cacher.
  if (!principale) {
    return (
      <div className="flex aspect-square w-full flex-col items-center justify-center gap-2 border border-[#e5e5e5] bg-[#f3efe9] px-6 text-center">
        {marque && (
          <span className="font-mono text-[12px] uppercase tracking-[0.12em] text-[#141414]">
            {marque}
          </span>
        )}
        <span className="max-w-[28ch] text-[14px] leading-[1.5] text-[#4f4f4f]">
          Visuel en cours de préparation. Le produit est disponible et livrable.
        </span>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-3">
      <div className="relative aspect-square w-full overflow-hidden bg-white">
        <Image
          src={principale}
          alt={nom}
          fill
          sizes="(max-width: 1024px) 100vw, 560px"
          priority
          className="object-contain"
        />
      </div>

      {visuels.length > 1 && (
        <ul className="flex flex-wrap gap-2">
          {visuels.map((src, i) => {
            const selectionne = i === actif;
            return (
              <li key={`${src}-${i}`}>
                <button
                  type="button"
                  onClick={() => setActif(i)}
                  aria-label={`Afficher le visuel ${i + 1} sur ${visuels.length}`}
                  aria-current={selectionne}
                  className={`block border bg-white p-1 transition-colors ${
                    selectionne
                      ? "border-[#141414]"
                      : "border-[#e5e5e5] hover:border-[#909090]"
                  }`}
                >
                  <span className="relative block h-[64px] w-[64px]">
                    <Image
                      src={src}
                      alt=""
                      aria-hidden
                      fill
                      sizes="64px"
                      loading="lazy"
                      className="object-contain"
                    />
                  </span>
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}

/**
 * Registre des guides publiés.
 *
 * Un guide n'existe que s'il est ici : pas de découverte automatique de
 * fichiers, pour que la liste des pages publiées se lise d'un coup d'œil.
 */

import { GUIDE_ACTIFS } from "@/lib/guides/actifs";
import { GUIDE_CHUTE_CHEVEUX } from "@/lib/guides/chute-cheveux";
import { GUIDE_CONTREFACON } from "@/lib/guides/contrefacon";
import { GUIDE_CREME_SOLAIRE } from "@/lib/guides/creme-solaire";
import { GUIDE_FOND_DE_TEINT } from "@/lib/guides/fond-de-teint";
import { GUIDE_PEAU_GRASSE } from "@/lib/guides/peau-grasse";
import type { Guide } from "@/lib/guides-types";

/** Ordre d'affichage sur /guide/ : du plus large au plus spécifique. */
export const GUIDES: Guide[] = [
  GUIDE_CREME_SOLAIRE,
  GUIDE_ACTIFS,
  GUIDE_PEAU_GRASSE,
  GUIDE_CHUTE_CHEVEUX,
  GUIDE_FOND_DE_TEINT,
  GUIDE_CONTREFACON,
];

export function getGuide(slug: string): Guide | undefined {
  return GUIDES.find((g) => g.slug === slug);
}

export function urlGuide(slug: string): string {
  return `/guide/${slug}/`;
}

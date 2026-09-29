import Image from "next/image";
import { logoMarque } from "@/lib/logos";

/**
 * Logo d'une maison, avec repli typographique.
 *
 * Deux choses à savoir avant de toucher à ce composant.
 *
 * 1. Toutes les marques n'ont pas de logo. Seuls sont affichés les fichiers
 *    sourcés sous licence libre puis vérifiés visuellement un par un : le logo
 *    doit appartenir à cette marque de cosmétique et à aucune entreprise
 *    homonyme. Une recherche « Garnier logo » rapporte une librairie de 1929,
 *    « Vichy » rapporte la ville. Un faux logo sur un site dont tout
 *    l'argument est l'authenticité ferait plus de mal que pas de logo.
 *
 * 2. Le repli n'est pas une image manquante : c'est le nom de la maison posé
 *    en typographie. Rendu ainsi sur toute une grille, l'ensemble reste
 *    cohérent, et rien ne signale au visiteur qu'il manque quelque chose.
 */
export default function LogoMarque({
  slug,
  nom,
  className = "",
}: {
  slug: string;
  nom: string;
  className?: string;
}) {
  const logo = logoMarque(slug);

  if (!logo) {
    return (
      <span
        className={`flex items-center justify-center px-4 text-center text-[15px] uppercase leading-[1.2] tracking-[0.08em] text-[#141414] ${className}`}
      >
        {nom}
      </span>
    );
  }

  return (
    <Image
      src={logo.src}
      alt={nom}
      width={logo.largeur}
      height={logo.hauteur}
      className={`h-full w-full object-contain ${className}`}
      sizes="(max-width: 767px) 40vw, 200px"
    />
  );
}

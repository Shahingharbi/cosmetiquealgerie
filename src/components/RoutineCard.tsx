import Link from "next/link";
import LogoMarque from "@/components/LogoMarque";
import type { Vignette } from "@/types/site";
import { cn } from "@/lib/utils";

/**
 * Carte d'une maison référencée.
 *
 * Elle affichait auparavant un packshot pris au hasard dans le catalogue de la
 * marque, recadré en `object-cover`. Le produit s'en trouvait rogné, et une
 * rangée de flacons sans rapport entre eux ne disait rien de qui était
 * référencé. Le logo dit la même chose en une fraction du temps de lecture,
 * et c'est ce que le visiteur cherche dans ce bloc : reconnaître des maisons
 * qu'il connaît déjà.
 *
 * `id` porte le slug de la marque, qui sert de clé dans l'index des logos.
 */
export function RoutineCard({
  routine,
  className,
}: {
  routine: Vignette;
  className?: string;
}) {
  return (
    <Link
      href={routine.href}
      className={cn(
        "group flex h-full flex-col border border-[#e5e5e5] bg-white transition-colors hover:border-[#141414]",
        className,
      )}
    >
      <div className="relative flex aspect-[3/2] items-center justify-center p-6">
        <LogoMarque
          slug={routine.id}
          nom={routine.title}
          className="transition-transform duration-500 group-hover:scale-[1.04]"
        />
      </div>
      <p className="border-t border-[#e5e5e5] px-4 py-3 text-center font-mono text-[11px] uppercase tracking-[0.08em] text-[#4f4f4f]">
        {routine.title}
      </p>
    </Link>
  );
}

export default RoutineCard;

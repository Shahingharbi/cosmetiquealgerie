import Image from "next/image";
import Link from "next/link";
import { formatPrix, urlProduit } from "@/lib/catalogue";
import type { Produit } from "@/types/catalogue";

interface Props {
  produit: Produit;
  /** Charge l'image sans lazy-load. À réserver aux premières cartes de la grille (LCP). */
  prioritaire?: boolean;
}

/**
 * Carte produit.
 *
 * Le survol révèle une seconde image quand elle existe — seuls ~24 % des
 * produits en ont deux, donc l'effet est conditionnel : sans seconde image on
 * n'affiche rien de plus, plutôt qu'un placeholder ou une image dupliquée.
 * Les dimensions sont fixes (ratio 1:1) pour ne pas générer de CLS.
 *
 * Une partie des visuels est encore servie par les sites sources, dont
 * certains ne répondent pas. `unoptimized` sur ces URL évite que le
 * redimensionnement côté serveur bloque le rendu de toute la grille : l'image
 * échoue seule, dans son cadre, sans casser la page.
 */
export default function CarteProduit({ produit, prioritaire = false }: Props) {
  const principale = produit.images[0];
  const survol = produit.images[1];
  const aSurvol = Boolean(survol);
  const local = (src: string) => src.startsWith("/");

  return (
    <article className="group">
      <Link href={urlProduit(produit)} className="block">
        <div className="relative aspect-square overflow-hidden bg-white">
          {principale ? (
            <>
              <Image
                src={principale}
                alt={produit.nom}
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                priority={prioritaire}
                loading={prioritaire ? undefined : "lazy"}
                unoptimized={!local(principale)}
                className={
                  aSurvol
                    ? "object-contain transition-opacity duration-300 group-hover:opacity-0"
                    : "object-contain"
                }
              />
              {aSurvol && (
                <Image
                  src={survol}
                  alt=""
                  aria-hidden
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  loading="lazy"
                  unoptimized={!local(survol)}
                  className="object-contain opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                />
              )}
            </>
          ) : (
            /* Pas de visuel : on assume un cadre vide tenu par la typographie,
               plutôt qu'une icône générique qui signale un manque. */
            <div className="flex h-full items-center justify-center bg-[#f3efe9]">
              <span className="px-4 text-center font-mono text-[10px] uppercase tracking-[0.08em] text-[#909090]">
                {produit.marque || "Cosmétique Algérie"}
              </span>
            </div>
          )}
        </div>

        <div className="pt-3">
          {produit.marque && (
            <p className="font-mono text-[11px] uppercase tracking-[0.06em] text-[#909090]">
              {produit.marque}
            </p>
          )}
          <h3 className="mt-1 line-clamp-2 text-[14px] leading-[1.35] text-[#141414] group-hover:underline">
            {produit.nom}
          </h3>
          {/* Point médian entre prix et contenance : sans lui, Google lisait
              « 2 400 DA100ml » dans ses extraits, et pouvait prendre la
              contenance pour le prix. */}
          <p className="mt-1.5 flex items-baseline gap-2">
            <span className="text-[14px] font-medium text-[#141414]">
              {formatPrix(produit.prix)}
            </span>
            {produit.contenance && (
              <>
                <span aria-hidden="true" className="text-[11px] text-[#909090]">
                  ·
                </span>
                <span className="font-mono text-[11px] text-[#909090]">
                  {produit.contenance}
                </span>
              </>
            )}
          </p>
        </div>
      </Link>
    </article>
  );
}

import Link from "next/link";
import { TEL_DZ_AFFICHE, TEL_DZ_LIEN, WHATSAPP_LIEN } from "@/lib/contact";
import LogoCosmetiqueAlgerie from "@/components/LogoCosmetiqueAlgerie";
import { SITE_NOM } from "@/lib/catalogue";
import { FOOTER } from "@/lib/site-data";

/**
 * Modèle du footer : `FOOTER.colonnes`, dans `lib/site-data`.
 *
 * Volontairement pauvre : 22 liens. Pas les wilayas (la livraison vit
 * entièrement dans /livraison/, en tableau sans liens), pas les 431 marques,
 * pas les catégories de niveau 2 et 3 — elles sont déjà dans le mega menu et
 * les répéter ne ferait que doubler le boilerplate.
 */
const COLONNES = FOOTER.colonnes;

function ChevronBas() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="14"
      height="14"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="transition-transform duration-200"
    >
      <polyline points="6 9 12 15 18 9" />
    </svg>
  );
}

/**
 * Pied de page.
 *
 * Server Component, aucun JavaScript : les colonnes deviennent des accordéons
 * en dessous de 1024 px grâce au même motif case à cocher + <label> que la
 * navigation. Le contenu replié reste dans le HTML servi, donc crawlable.
 */
export function Footer() {
  const annee = new Date().getFullYear();

  return (
    <footer className="mt-24 border-t border-[#141414] bg-[#f4f4f2] text-[#141414]">
      <div className="mx-auto max-w-[1280px] px-4 py-10 lg:px-8 lg:py-14">
        <div className="lg:grid lg:grid-cols-4 lg:gap-12">
          {COLONNES.map((colonne) => (
            <div
              key={colonne.id}
              className="border-b border-[#141414]/10 py-3 lg:border-0 lg:py-0"
            >
              <input
                type="checkbox"
                id={`ca-footer-${colonne.id}`}
                className="peer sr-only lg:hidden"
                aria-label={`Afficher la rubrique ${colonne.titre}`}
              />

              <label
                htmlFor={`ca-footer-${colonne.id}`}
                className="flex cursor-pointer items-center justify-between font-mono text-[11px] uppercase tracking-[0.08em] text-[#141414]/60 peer-checked:[&_svg]:rotate-180 lg:cursor-default"
              >
                {colonne.titre}
                <span className="lg:hidden">
                  <ChevronBas />
                </span>
              </label>

              <ul className="max-h-0 overflow-hidden transition-[max-height] duration-300 peer-checked:max-h-[600px] lg:mt-4 lg:max-h-none lg:overflow-visible">
                {colonne.liens.map((lien) => (
                  <li key={`${colonne.id}-${lien.href}`}>
                    <Link
                      href={lien.href}
                      prefetch={false}
                      className="block py-3 text-[14px] leading-[1.6] hover:underline lg:py-1.5"
                    >
                      {lien.libelle}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col gap-6 border-t border-[#141414]/10 pt-8 lg:mt-14 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <LogoCosmetiqueAlgerie
              variante="compact"
              titre=""
              className="h-10 w-auto text-[#141414]"
            />
            <p className="mt-3 max-w-[420px] text-[12px] leading-[1.6] text-[#4f4f4f]">
              {FOOTER.baseline}
            </p>

            {/* Coordonnées en clair. Un site de vente à distance qui ne montre
                pas de numéro joignable demande une confiance qu'il ne donne
                pas, a fortiori quand le règlement se fait en espèces à la
                remise du colis. */}
            <p className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-1 text-[13px] text-[#141414]">
              <a href={TEL_DZ_LIEN} className="font-medium underline underline-offset-2 hover:opacity-60">
                {TEL_DZ_AFFICHE}
              </a>
              <a
                href={WHATSAPP_LIEN}
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-2 hover:opacity-60"
              >
                WhatsApp
              </a>
            </p>
          </div>

          <p className="font-mono text-[11px] uppercase tracking-[0.08em] text-[#909090]">
            © {annee} {SITE_NOM}
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

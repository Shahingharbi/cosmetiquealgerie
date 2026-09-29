import { TEL_DZ_AFFICHE, TEL_DZ_LIEN } from "@/lib/contact";
import { MESSAGES_BANDEAU } from "@/lib/site-data";

/**
 * Bandeau d'information.
 *
 * Monté une seule fois, par le Header : aucune page ne doit le poser en plus.
 *
 * Trois arguments de réassurance, statiques et sans lien : ils lèvent les
 * freins réels du marché algérien (peur de la contrefaçon, refus du paiement
 * en ligne, couverture logistique) sans consommer de budget de liens sitewide.
 * Aucune rotation animée : le message serait alors dépendant du JavaScript, et
 * un texte qui bouge sous le doigt est une gêne sur mobile.
 *
 * Aucun vocabulaire de prix : ce site se positionne sur l'authenticité, pas
 * sur la remise.
 */

const MESSAGES = MESSAGES_BANDEAU;

export function BandeauInfo() {
  return (
    <div className="bg-[#141414] text-white">
      <p className="mx-auto flex max-w-[1280px] flex-wrap items-center justify-center px-4 py-2 text-center font-mono text-[12px] uppercase leading-[1.5] tracking-[0.08em] lg:px-8">
        {MESSAGES.map((message, index) => (
          <span
            key={message}
            className={
              // Trois arguments ne tiennent pas sur une ligne à 320 px. On
              // masque le deuxième, pas le troisième : le troisième porte le
              // numéro de téléphone, et c'est sur mobile qu'un numéro sert le
              // plus — il suffit d'appuyer dessus pour appeler.
              index === 1 ? "hidden sm:inline" : undefined
            }
          >
            {index > 0 && (
              <span aria-hidden="true" className="mx-3 text-white/40 sm:mx-4">
                ·
              </span>
            )}
            {/* Le message qui porte le numéro devient un lien d'appel : sur
                mobile, un numéro qu'il faut recopier à la main n'est pas
                composé. */}
            {message.includes(TEL_DZ_AFFICHE) ? (
              <a href={TEL_DZ_LIEN} className="underline underline-offset-2 hover:opacity-70">
                {message}
              </a>
            ) : (
              message
            )}
          </span>
        ))}
      </p>
    </div>
  );
}

export default BandeauInfo;

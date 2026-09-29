import { TEL_DZ_AFFICHE, TEL_DZ_LIEN, whatsappAvecMessage } from "@/lib/contact";

/**
 * Appeler ou écrire, juste sous le bouton d'ajout au panier.
 *
 * Pourquoi à cet endroit précis : c'est là que l'hésitation se joue. Le
 * visiteur a le prix sous les yeux, il va payer à la livraison à un inconnu, et
 * la question qui le retient — « c'est bien l'original ? », « vous livrez chez
 * moi ? », « c'est quelle contenance exactement ? » — n'a nulle part où aller
 * si le seul contact est une page « Contact » en pied de page. Un numéro local
 * et un WhatsApp à portée de pouce transforment cette hésitation en
 * conversation au lieu d'un abandon.
 *
 * Le message WhatsApp est pré-rempli avec le nom du produit : le vendeur sait
 * de quoi on parle sans avoir à le demander, et le visiteur n'a rien à taper.
 */
export default function ContactAchat({ nomProduit }: { nomProduit: string }) {
  const message = `Bonjour, je souhaite des informations sur : ${nomProduit}`;

  return (
    <div className="border border-[#e5e5e5] bg-white px-4 py-4">
      <p className="text-[13px] leading-[1.5] text-[#4f4f4f]">
        Une question sur ce produit, sa disponibilité ou la livraison ?
      </p>

      <div className="mt-3 flex flex-wrap gap-2">
        <a
          href={TEL_DZ_LIEN}
          className="inline-flex min-h-[44px] flex-1 items-center justify-center gap-2 border border-[#141414] px-4 text-[14px] font-medium text-[#141414] transition-colors hover:bg-[#141414] hover:text-white"
        >
          <svg
            viewBox="0 0 24 24"
            width="16"
            height="16"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92Z" />
          </svg>
          {TEL_DZ_AFFICHE}
        </a>

        <a
          href={whatsappAvecMessage(message)}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-[44px] flex-1 items-center justify-center gap-2 border border-[#25D366] bg-[#25D366] px-4 text-[14px] font-medium text-white transition-opacity hover:opacity-90"
        >
          <svg viewBox="0 0 32 32" width="17" height="17" fill="currentColor" aria-hidden="true">
            <path d="M16.003 2.667C8.636 2.667 2.667 8.636 2.667 16c0 2.356.627 4.665 1.817 6.687L2.667 29.333l6.84-1.793A13.278 13.278 0 0016.003 29.333C23.364 29.333 29.333 23.364 29.333 16S23.364 2.667 16.003 2.667zm0 24.267c-2.027 0-4.012-.546-5.747-1.58l-.413-.245-4.058 1.063 1.083-3.948-.27-.427A10.907 10.907 0 015.067 16C5.067 9.965 9.965 5.067 16.003 5.067S26.933 9.965 26.933 16c0 6.038-4.896 10.934-10.93 10.934zm6.135-8.179c-.336-.168-1.988-.981-2.296-1.093-.308-.112-.532-.168-.756.168-.224.336-.868 1.093-1.064 1.317-.196.224-.392.252-.728.084-.336-.168-1.419-.523-2.703-1.668-.999-.891-1.673-1.991-1.869-2.327-.196-.336-.021-.518.147-.685.151-.15.336-.392.504-.588.168-.196.224-.336.336-.56.112-.224.056-.42-.028-.588-.084-.168-.756-1.823-1.036-2.495-.273-.655-.551-.566-.756-.577l-.644-.011c-.224 0-.588.084-.896.42-.308.336-1.176 1.149-1.176 2.804s1.204 3.252 1.372 3.476c.168.224 2.37 3.619 5.742 5.075.802.346 1.428.553 1.916.708.805.256 1.537.22 2.116.133.645-.096 1.988-.813 2.268-1.597.28-.784.28-1.456.196-1.597-.084-.14-.308-.224-.644-.392z" />
          </svg>
          WhatsApp
        </a>
      </div>
    </div>
  );
}

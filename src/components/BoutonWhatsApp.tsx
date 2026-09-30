import { WHATSAPP_LIEN } from "@/lib/contact";

export function LogoWhatsApp({ taille = 26 }: { taille?: number }) {
  return (
    <svg viewBox="0 0 32 32" width={taille} height={taille} fill="currentColor" aria-hidden="true">
      <path d="M16.003 2.667C8.636 2.667 2.667 8.636 2.667 16c0 2.356.627 4.665 1.817 6.687L2.667 29.333l6.84-1.793A13.278 13.278 0 0016.003 29.333C23.364 29.333 29.333 23.364 29.333 16S23.364 2.667 16.003 2.667zm0 24.267c-2.027 0-4.012-.546-5.747-1.58l-.413-.245-4.058 1.063 1.083-3.948-.27-.427A10.907 10.907 0 015.067 16C5.067 9.965 9.965 5.067 16.003 5.067S26.933 9.965 26.933 16c0 6.038-4.896 10.934-10.93 10.934zm6.135-8.179c-.336-.168-1.988-.981-2.296-1.093-.308-.112-.532-.168-.756.168-.224.336-.868 1.093-1.064 1.317-.196.224-.392.252-.728.084-.336-.168-1.419-.523-2.703-1.668-.999-.891-1.673-1.991-1.869-2.327-.196-.336-.021-.518.147-.685.151-.15.336-.392.504-.588.168-.196.224-.336.336-.56.112-.224.056-.42-.028-.588-.084-.168-.756-1.823-1.036-2.495-.273-.655-.551-.566-.756-.577l-.644-.011c-.224 0-.588.084-.896.42-.308.336-1.176 1.149-1.176 2.804s1.204 3.252 1.372 3.476c.168.224 2.37 3.619 5.742 5.075.802.346 1.428.553 1.916.708.805.256 1.537.22 2.116.133.645-.096 1.988-.813 2.268-1.597.28-.784.28-1.456.196-1.597-.084-.14-.308-.224-.644-.392z" />
    </svg>
  );
}

/**
 * Bouton WhatsApp flottant, présent sur toutes les pages.
 *
 * Sur ce marché, la conversation d'achat se fait sur WhatsApp : une question
 * sur une contenance, une disponibilité ou un délai se pose là, pas par
 * formulaire. Le bouton reste donc visible en permanence plutôt que d'être
 * relégué à une page contact que personne n'ouvre.
 *
 * Placement à droite et non à gauche : le pouce d'un droitier l'atteint sans
 * traverser l'écran, et il ne recouvre pas le fil d'Ariane ni le début des
 * titres. Il est remonté sur mobile pour ne pas masquer le bouton d'ajout au
 * panier des fiches produit, qui est l'action que l'on veut voir aboutir.
 *
 * `aria-label` explicite : l'icône seule ne dit rien à un lecteur d'écran.
 */
export default function BoutonWhatsApp() {
  return (
    <a
      href={WHATSAPP_LIEN}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Nous écrire sur WhatsApp"
      className="fixed bottom-20 right-4 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_6px_24px_-6px_rgba(0,0,0,0.45)] transition-transform hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#141414] sm:bottom-6 sm:right-6"
    >
      <LogoWhatsApp />
    </a>
  );
}

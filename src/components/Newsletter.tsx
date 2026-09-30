"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useId, useState, type FormEvent } from "react";
import { CloseIcon } from "@/components/icons";

/**
 * Lettre d'information : le formulaire, et la fenêtre qui le propose.
 *
 * Trois emplacements, une seule logique d'envoi :
 *  - le pied de page, sur toutes les pages ;
 *  - la page de remerciement, après une commande ;
 *  - une fenêtre discrète, en bas d'écran, qui ne s'impose jamais (voir
 *    `FenetreNewsletter`).
 *
 * L'inscription part vers /api/newsletter, côté serveur : aucune clé de
 * service tiers dans le navigateur.
 */

type Source = "fenetre" | "pied" | "commande";
type Etat = "repos" | "envoi" | "ok" | "erreur";

/*
 * Mémoire du visiteur, dans son navigateur :
 *  - "inscrit"          : la fenêtre ne reparaît jamais ;
 *  - "ferme:<horodatage>" : refermée, elle se tait pendant PAUSE_JOURS.
 */
const CLE = "ca-newsletter";
const EVENEMENT_INSCRIT = "ca-newsletter-inscrit";
const PAUSE_JOURS = 30;

function lire(): string | null {
  try {
    return window.localStorage.getItem(CLE);
  } catch {
    return null;
  }
}

function ecrire(valeur: string): void {
  try {
    window.localStorage.setItem(CLE, valeur);
  } catch {
    // Navigation privée ou stockage bloqué : la fenêtre reparaîtra, sans plus.
  }
}

/** L'événement porte la source : la fenêtre ne se referme pas sur sa propre inscription. */
function marquerInscrit(source: Source): void {
  ecrire("inscrit");
  window.dispatchEvent(new CustomEvent<Source>(EVENEMENT_INSCRIT, { detail: source }));
}

/* ------------------------------------------------------------------ */
/* Formulaire                                                          */
/* ------------------------------------------------------------------ */

interface PropsFormulaire {
  source: Source;
  /** Fond sombre (fenêtre) ou clair (pied de page, remerciement). */
  sombre?: boolean;
  /** Libellé du bouton. */
  bouton?: string;
  /** Appelé une fois l'inscription confirmée par le serveur. */
  onInscrit?: () => void;
}

export function FormulaireNewsletter({
  source,
  sombre = false,
  bouton = "S'inscrire",
  onInscrit,
}: PropsFormulaire) {
  const id = useId();
  const [email, setEmail] = useState("");
  const [etat, setEtat] = useState<Etat>("repos");
  const [message, setMessage] = useState("");

  async function soumettre(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const donnees = new FormData(e.currentTarget);
    const adresse = email.trim();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(adresse)) {
      setEtat("erreur");
      setMessage("Cette adresse e-mail semble incomplète.");
      return;
    }

    setEtat("envoi");
    setMessage("");
    try {
      const reponse = await fetch("/api/newsletter/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: adresse, source, site_web: donnees.get("site_web") ?? "" }),
      });
      if (reponse.ok) {
        setEtat("ok");
        marquerInscrit(source);
        onInscrit?.();
        return;
      }
      setEtat("erreur");
      setMessage(
        reponse.status === 400
          ? "Cette adresse e-mail n'est pas valide."
          : "L'inscription n'a pas abouti. Réessayez dans un instant.",
      );
    } catch {
      setEtat("erreur");
      setMessage("Connexion interrompue. Réessayez dans un instant.");
    }
  }

  const texte = sombre ? "text-[#f4f4f2]" : "text-[#141414]";
  const discret = sombre ? "text-[#f4f4f2]/60" : "text-[#909090]";

  if (etat === "ok") {
    return (
      <p role="status" className={`text-[15px] leading-[1.6] ${texte}`}>
        C&apos;est noté. Les prochaines nouveautés arriveront à{" "}
        <span className="font-medium" data-clarity-mask="True">
          {email.trim()}
        </span>
        .
      </p>
    );
  }

  return (
    <form onSubmit={soumettre} noValidate data-clarity-mask="True">
      {/* Champ et bouton sur une seule ligne, même sur mobile : empilés, ils
          doublaient la hauteur de la fenêtre. */}
      <div className="flex">
        <label htmlFor={`${id}-email`} className="sr-only">
          Adresse e-mail
        </label>
        {/* 16 px minimum : en dessous, Safari sur iPhone zoome sur le champ au toucher. */}
        <input
          id={`${id}-email`}
          type="email"
          name="email"
          inputMode="email"
          autoComplete="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Votre e-mail"
          aria-invalid={etat === "erreur"}
          aria-describedby={message ? `${id}-message` : undefined}
          className={
            sombre
              ? "h-12 min-w-0 flex-1 border border-[#f4f4f2]/35 bg-transparent px-4 text-[16px] text-[#f4f4f2] placeholder:text-[#f4f4f2]/50 focus:border-[#f4f4f2] focus:outline-none"
              : "h-12 min-w-0 flex-1 border border-[#141414] bg-white px-4 text-[16px] text-[#141414] placeholder:text-[#909090] focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#141414]"
          }
        />
        {/* Champ piège : invisible, hors tabulation. Seul un robot le remplit. */}
        <input
          type="text"
          name="site_web"
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
          className="absolute -left-[9999px] h-px w-px opacity-0"
        />
        <button
          type="submit"
          disabled={etat === "envoi"}
          className={
            sombre
              ? "h-12 shrink-0 bg-[#f4f4f2] px-4 text-[12px] uppercase tracking-[0.06em] text-[#141414] transition-opacity hover:opacity-85 disabled:opacity-50 sm:px-6 sm:text-[13px]"
              : "h-12 shrink-0 bg-[#141414] px-4 text-[12px] uppercase tracking-[0.06em] text-white transition-opacity hover:opacity-80 disabled:opacity-50 sm:px-6 sm:text-[13px]"
          }
        >
          {etat === "envoi" ? "Envoi…" : bouton}
        </button>
      </div>

      {message && (
        <p id={`${id}-message`} role="alert" className={`mt-2 text-[13px] ${sombre ? "text-[#ffb4a8]" : "text-[#b3261e]"}`}>
          {message}
        </p>
      )}

      <p className={`mt-3 text-[12px] leading-[1.5] ${discret}`}>
        <span className="sm:hidden">Désinscription en un clic ·</span>
        <span className="hidden sm:inline">
          Désinscription en un clic, dans chaque e-mail. Votre adresse ne sert qu&apos;à la
          lettre :
        </span>{" "}
        <Link href="/politique-de-confidentialite/" prefetch={false} className="underline underline-offset-2">
          confidentialité
        </Link>
      </p>
    </form>
  );
}

/* ------------------------------------------------------------------ */
/* Encart (pied de page, remerciement)                                 */
/* ------------------------------------------------------------------ */

export function EncartNewsletter({
  source,
  titre,
  className = "",
}: {
  source: Source;
  titre: string;
  className?: string;
}) {
  const pathname = usePathname() ?? "/";
  // La page de remerciement porte déjà son propre encart : pas de doublon
  // avec celui du pied de page, juste en dessous.
  if (source === "pied" && pathname.startsWith("/commande/merci")) return null;

  return (
    <div
      className={`grid gap-5 lg:grid-cols-[minmax(0,1fr)_minmax(0,460px)] lg:items-end lg:gap-12 ${className}`}
    >
      <div>
        <p className="font-mono text-[11px] uppercase tracking-[0.08em] text-[#909090]">La lettre</p>
        <p className="mt-2 text-balance text-[22px] leading-[1.2] text-[#141414] lg:text-[26px]">{titre}</p>
        <p className="mt-2 max-w-[52ch] text-[14px] leading-[1.6] text-[#4f4f4f]">
          Arrivages, retours en stock, conseils de routine et offres réservées aux inscrits.
        </p>
      </div>
      <FormulaireNewsletter source={source} />
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Fenêtre discrète                                                    */
/* ------------------------------------------------------------------ */

/** Pages où la fenêtre ne doit jamais interrompre : l'achat et les pages légales. */
const EXCLUES = ["/panier", "/commande", "/politique-de-confidentialite", "/mentions-legales", "/cgv"];

/** Délai avant l'apparition : plus long sur la première page vue. */
const DELAI_PREMIERE_PAGE_MS = 40_000;
const DELAI_PAGES_SUIVANTES_MS = 12_000;

/**
 * Proposition d'inscription, en bas d'écran.
 *
 * « Sans forcer », concrètement :
 *  - jamais à l'arrivée : 40 s sur la première page, ou 12 s dès la deuxième.
 *    Google pénalise, sur mobile, les fenêtres qui masquent le contenu dès
 *    l'arrivée depuis ses résultats ;
 *  - une carte en bas d'écran, pas un voile sur la page : on peut continuer à
 *    lire et à défiler sans y toucher ;
 *  - jamais pendant l'achat (panier, commande) ni sur les pages légales ;
 *  - refermée, elle se tait 30 jours ; inscrit, elle ne revient jamais ;
 *  - une fois par session au plus.
 */
export function FenetreNewsletter() {
  const pathname = usePathname() ?? "/";
  const [visible, setVisible] = useState(false);

  const exclue = EXCLUES.some((p) => pathname.startsWith(p));

  const fermer = useCallback(() => {
    ecrire(`ferme:${Date.now()}`);
    setVisible(false);
  }, []);

  // Une inscription faite ailleurs (pied de page) referme la fenêtre. La
  // sienne propre, non : le visiteur doit d'abord lire la confirmation.
  useEffect(() => {
    const surInscription = (e: Event) => {
      if ((e as CustomEvent<Source>).detail !== "fenetre") setVisible(false);
    };
    window.addEventListener(EVENEMENT_INSCRIT, surInscription);
    return () => window.removeEventListener(EVENEMENT_INSCRIT, surInscription);
  }, []);

  // Après une inscription depuis la fenêtre : confirmation lisible, puis retrait.
  const [inscrite, setInscrite] = useState(false);
  useEffect(() => {
    if (!inscrite) return;
    const minuteur = setTimeout(() => setVisible(false), 4000);
    return () => clearTimeout(minuteur);
  }, [inscrite]);

  useEffect(() => {
    if (exclue || visible) return;

    const etat = lire();
    if (etat === "inscrit") return;
    if (etat?.startsWith("ferme:")) {
      const depuis = Date.now() - Number(etat.slice(6));
      if (depuis < PAUSE_JOURS * 24 * 3600 * 1000) return;
    }

    let pages = 1;
    try {
      if (window.sessionStorage.getItem(`${CLE}-vue`)) return;
      pages = Number(window.sessionStorage.getItem(`${CLE}-pages`) ?? "0") + 1;
      window.sessionStorage.setItem(`${CLE}-pages`, String(pages));
    } catch {
      // Stockage de session indisponible : on garde le délai le plus long.
    }

    let minuteur: ReturnType<typeof setTimeout>;
    const tenter = () => {
      // On attend un moment calme : onglet visible, menu mobile fermé, aucun
      // champ en cours de saisie (recherche, formulaire).
      const menuOuvert = (document.getElementById("ca-tiroir") as HTMLInputElement | null)?.checked;
      const saisie = document.activeElement?.matches("input, textarea, select");
      if (document.visibilityState !== "visible" || menuOuvert || saisie) {
        minuteur = setTimeout(tenter, 10_000);
        return;
      }
      try {
        window.sessionStorage.setItem(`${CLE}-vue`, "1");
      } catch {
        // Sans stockage de session, la fenêtre pourrait revenir à la page suivante : tant pis.
      }
      setVisible(true);
    };
    minuteur = setTimeout(tenter, pages >= 2 ? DELAI_PAGES_SUIVANTES_MS : DELAI_PREMIERE_PAGE_MS);
    return () => clearTimeout(minuteur);
  }, [pathname, exclue, visible]);

  // Échap referme, comme toute fenêtre.
  useEffect(() => {
    if (!visible) return;
    const echap = (e: KeyboardEvent) => {
      if (e.key === "Escape") fermer();
    };
    window.addEventListener("keydown", echap);
    return () => window.removeEventListener("keydown", echap);
  }, [visible, fermer]);

  if (!visible || exclue) return null;

  // Entrée en glissé (`ca-glisse-haut`, globals.css), désactivée si le
  // visiteur a demandé à réduire les animations.
  return (
    <div
      role="dialog"
      aria-modal="false"
      aria-labelledby="ca-lettre-titre"
      className="fixed inset-x-3 bottom-3 z-[60] bg-[#141414] p-5 text-[#f4f4f2] shadow-[0_18px_48px_-12px_rgba(0,0,0,0.55)] motion-safe:animate-[ca-glisse-haut_500ms_ease-out] sm:inset-x-auto sm:bottom-6 sm:left-6 sm:w-[400px] sm:p-7"
    >
      <button
        type="button"
        onClick={fermer}
        aria-label="Fermer"
        className="absolute right-2 top-2 flex h-10 w-10 items-center justify-center text-[#f4f4f2]/70 transition-colors hover:text-[#f4f4f2] sm:right-3 sm:top-3"
      >
        <CloseIcon size={14} />
      </button>

      {/* Sur mobile, la carte ne doit pas dépasser un gros tiers de l'écran :
          texte raccourci, pas de « Non merci » (la croix suffit). */}
      <p className="font-mono text-[11px] uppercase tracking-[0.1em] text-[#f4f4f2]/55">
        La lettre Cosmétique Algérie
      </p>
      {/* Trait d'union insécable (U+2011) : « avant-première » ne se coupe pas. */}
      <p id="ca-lettre-titre" className="mt-2 pr-8 text-[20px] leading-[1.15] sm:mt-3 sm:text-[24px]">
        Les nouveautés, en avant‑première.
      </p>
      <p className="mt-2 text-[13px] leading-[1.55] text-[#f4f4f2]/75 sm:mt-3 sm:text-[14px] sm:leading-[1.6]">
        <span className="sm:hidden">Arrivages et offres réservées aux inscrits.</span>
        <span className="hidden sm:inline">
          Arrivages, retours en stock et offres réservées aux inscrits, directement dans votre
          boîte mail.
        </span>
      </p>

      <div className="mt-4 sm:mt-5">
        <FormulaireNewsletter
          source="fenetre"
          sombre
          bouton="Je m'inscris"
          onInscrit={() => setInscrite(true)}
        />
      </div>

      {!inscrite && (
        <button
          type="button"
          onClick={fermer}
          className="mt-3 hidden text-[12px] text-[#f4f4f2]/55 underline underline-offset-2 hover:text-[#f4f4f2] sm:inline-block"
        >
          Non merci
        </button>
      )}
    </div>
  );
}

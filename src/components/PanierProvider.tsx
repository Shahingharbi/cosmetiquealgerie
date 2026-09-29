"use client";

/**
 * Frontière client du panier.
 *
 * Un seul fichier "use client" pour toute la fonctionnalité : le contexte, le
 * hook, et les trois îlots montés par les pages transactionnelles
 * (/panier/, /commande/, /commande/merci/). Les pages elles-mêmes restent des
 * Server Components — elles exportent les métadonnées `noindex` et fournissent
 * l'action serveur qui relit le catalogue.
 *
 * Hydratation : le panier est un store EXTERNE (localStorage), pas un état
 * React. `useSyncExternalStore` en donne l'instantané serveur — toujours le
 * même objet vide — au rendu serveur comme au premier rendu client. Aucun
 * mismatch d'hydratation n'est donc possible, et aucun composant d'ici ne doit
 * dériver son premier rendu du stockage.
 */

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  useSyncExternalStore,
  type FormEvent,
  type ReactNode,
} from "react";

import {
  CLE_PANIER,
  QUANTITE_MAX,
  ajouterArticle,
  changerQuantiteArticle,
  ecrirePanier,
  enregistrerCommande,
  formatPrixDA,
  formaterTelephone,
  genererNumeroCommande,
  lireDerniereCommande,
  lirePanier,
  nombreArticles as compterArticles,
  normaliserTelephone,
  retirerArticle,
  telephoneValide,
  totalPanier,
  type ArticlePanier,
  type Commande,
  type LignePanier,
  type ResolutionPanier,
  type ResoudrePanier,
} from "@/lib/panier";
import { TEL_DZ_AFFICHE, TEL_DZ_LIEN } from "@/lib/contact";
import { envoyerCommande, lienWhatsApp, whatsappConfigure } from "@/lib/envoi-commande";
import { WILAYAS, codeWilayaValide, wilayaParCode } from "@/lib/wilayas";

/* ================================================================== */
/* Store externe                                                       */
/* ================================================================== */

interface EtatPanier {
  articles: ArticlePanier[];
  /** false tant que localStorage n'a pas été lu. */
  pret: boolean;
}

/**
 * Instantané servi au rendu serveur ET au premier rendu client. La référence
 * est constante : c'est ce qui rend le mismatch d'hydratation impossible.
 */
const ETAT_INITIAL: EtatPanier = { articles: [], pret: false };

let etat: EtatPanier = ETAT_INITIAL;
const abonnes = new Set<() => void>();

function instantane(): EtatPanier {
  return etat;
}

function instantaneServeur(): EtatPanier {
  return ETAT_INITIAL;
}

function publier(articles: ArticlePanier[]): void {
  etat = { articles, pret: true };
  for (const alerter of abonnes) alerter();
}

function surStockage(evenement: StorageEvent): void {
  // key === null : le stockage a été vidé en bloc.
  if (evenement.key !== null && evenement.key !== CLE_PANIER) return;
  publier(lirePanier());
}

function sabonner(alerter: () => void): () => void {
  const premier = abonnes.size === 0;
  abonnes.add(alerter);
  if (premier) {
    // Deux onglets ouverts sur le site partagent le même panier.
    window.addEventListener("storage", surStockage);
    // Première lecture du stockage : elle a lieu après l'hydratation, donc
    // sans jamais contredire le HTML rendu par le serveur.
    publier(lirePanier());
  }
  return () => {
    abonnes.delete(alerter);
    if (abonnes.size === 0) window.removeEventListener("storage", surStockage);
  };
}

/**
 * Toute écriture passe par ici : localStorage d'abord, abonnés ensuite.
 * `lirePanier()` en repli couvre le cas — théorique — d'une mutation demandée
 * avant que le store n'ait été chargé.
 */
function muter(transformation: (articles: ArticlePanier[]) => ArticlePanier[]): void {
  const base = etat.pret ? etat.articles : lirePanier();
  const suivant = transformation(base);
  ecrirePanier(suivant);
  publier(suivant);
}

/* ================================================================== */
/* Contexte                                                            */
/* ================================================================== */

interface ValeurPanier {
  articles: ArticlePanier[];
  /** false tant que localStorage n'a pas été lu. Voir la note d'hydratation. */
  pret: boolean;
  nombreArticles: number;
  ajouter: (slug: string, quantite?: number) => void;
  retirer: (slug: string) => void;
  changerQuantite: (slug: string, quantite: number) => void;
  vider: () => void;
  /** Ne conserve que les slugs encore connus du catalogue. */
  synchroniser: (slugsValides: string[]) => void;
}

const ContextePanier = createContext<ValeurPanier | null>(null);

export function usePanier(): ValeurPanier {
  const valeur = useContext(ContextePanier);
  if (!valeur) throw new Error("usePanier doit être utilisé dans <PanierProvider>.");
  return valeur;
}

export function PanierProvider({ children }: { children: ReactNode }) {
  const { articles, pret } = useSyncExternalStore(sabonner, instantane, instantaneServeur);

  const valeur = useMemo<ValeurPanier>(
    () => ({
      articles,
      pret,
      nombreArticles: compterArticles(articles),
      ajouter: (slug, quantite = 1) => muter((l) => ajouterArticle(l, slug, quantite)),
      retirer: (slug) => muter((l) => retirerArticle(l, slug)),
      changerQuantite: (slug, quantite) => muter((l) => changerQuantiteArticle(l, slug, quantite)),
      vider: () => muter(() => []),
      synchroniser: (slugsValides) => {
        const valides = new Set(slugsValides);
        muter((l) => l.filter((a) => valides.has(a.slug)));
      },
    }),
    [articles, pret],
  );

  return <ContextePanier.Provider value={valeur}>{children}</ContextePanier.Provider>;
}

/* ================================================================== */
/* Résolution des articles contre le catalogue                         */
/* ================================================================== */

/** Les slugs ne contiennent que [a-z0-9-] : la virgule ne peut pas y apparaître. */
const SEPARATEUR = ",";

interface EtatResolution {
  /** Clé des slugs à laquelle correspond la résolution détenue. */
  cle: string;
  resolution: ResolutionPanier | null;
  erreur: boolean;
}

/** Référence constante : évite de recréer un objet à chaque rendu de panier vide. */
const RESOLUTION_VIDE: ResolutionPanier = { produits: [], upsell: [] };

/**
 * Relit les données produit à chaque changement de composition du panier.
 * Une variation de quantité ne déclenche aucun appel : la clé ne porte que les
 * slugs.
 */
function useResolution(resoudre: ResoudrePanier, articles: ArticlePanier[], pret: boolean) {
  const cle = articles.map((a) => a.slug).join(SEPARATEUR);
  const [etat, setEtat] = useState<EtatResolution>({ cle: "", resolution: null, erreur: false });

  // L'identité d'une action serveur peut changer entre deux rendus ; la mettre
  // en dépendance d'effet ferait boucler la résolution.
  const refResoudre = useRef(resoudre);
  useEffect(() => {
    refResoudre.current = resoudre;
  }, [resoudre]);

  useEffect(() => {
    if (!pret || cle.length === 0) return;
    const slugs = cle.split(SEPARATEUR);
    let obsolete = false;
    refResoudre.current(slugs).then(
      (r) => {
        if (!obsolete) setEtat({ cle, resolution: r, erreur: false });
      },
      () => {
        if (!obsolete) setEtat((e) => ({ ...e, erreur: true }));
      },
    );
    return () => {
      obsolete = true;
    };
  }, [cle, pret]);

  // Panier vide : la réponse est connue sans aller-retour serveur.
  if (cle.length === 0) return { resolution: RESOLUTION_VIDE, aJour: true, erreur: false };

  return {
    resolution: etat.resolution,
    /** La résolution correspond bien au panier courant (pas un reliquat en cours de rafraîchissement). */
    aJour: etat.cle === cle,
    erreur: etat.erreur,
  };
}

/** Recompose les lignes affichables : données serveur + quantités locales. */
function useLignes(resolution: ResolutionPanier | null, articles: ArticlePanier[]): LignePanier[] {
  return useMemo(() => {
    if (!resolution) return [];
    const quantites = new Map(articles.map((a) => [a.slug, a.quantite]));
    return resolution.produits
      .map((produit) => ({ produit, quantite: quantites.get(produit.slug) ?? 0 }))
      .filter((l) => l.quantite > 0);
  }, [resolution, articles]);
}

/* ================================================================== */
/* Fragments d'interface partagés                                      */
/* ================================================================== */

const BOUTON_PLEIN =
  "inline-flex items-center justify-center bg-[#141414] px-6 py-3 text-[13px] uppercase tracking-[0.06em] text-white transition-opacity hover:opacity-80 disabled:opacity-40";
const BOUTON_CONTOUR =
  "inline-flex items-center justify-center border border-[#141414] px-6 py-3 text-[13px] uppercase tracking-[0.06em] text-[#141414] transition-colors hover:bg-[#141414] hover:text-white";
const LIBELLE_MONO = "font-mono text-[11px] uppercase tracking-[0.08em] text-[#909090]";

export interface LienDepartement {
  nom: string;
  url: string;
}

function ListeDepartements({ departements }: { departements: LienDepartement[] }) {
  return (
    <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-3">
      {departements.map((d) => (
        <li key={d.url}>
          <Link
            href={d.url}
            prefetch={false}
            className="text-[14px] text-[#141414] underline underline-offset-4 hover:opacity-60"
          >
            {d.nom}
          </Link>
        </li>
      ))}
    </ul>
  );
}

function Vignette({ src, alt }: { src: string; alt: string }) {
  if (!src) return <div className="h-20 w-20 shrink-0 bg-[#f4f4f2]" />;
  return (
    <div className="relative h-20 w-20 shrink-0 overflow-hidden bg-white">
      <Image src={src} alt={alt} fill sizes="80px" className="object-contain" />
    </div>
  );
}

/** Réutilisé par le bouton d'ajout de la fiche produit. */
export function SelecteurQuantite({
  quantite,
  nom,
  onChange,
}: {
  quantite: number;
  nom: string;
  onChange: (q: number) => void;
}) {
  return (
    <div className="inline-flex items-stretch border border-[#141414]">
      <button
        type="button"
        onClick={() => onChange(quantite - 1)}
        disabled={quantite <= 1}
        aria-label={`Diminuer la quantité de ${nom}`}
        className="grid h-11 w-11 place-items-center text-[16px] leading-none text-[#141414] disabled:opacity-30"
      >
        −
      </button>
      <span
        aria-live="polite"
        className="grid h-11 w-10 place-items-center border-x border-[#141414] text-[13px] tabular-nums text-[#141414]"
      >
        {quantite}
      </span>
      <button
        type="button"
        onClick={() => onChange(quantite + 1)}
        disabled={quantite >= QUANTITE_MAX}
        aria-label={`Augmenter la quantité de ${nom}`}
        className="grid h-11 w-11 place-items-center text-[16px] leading-none text-[#141414] disabled:opacity-30"
      >
        +
      </button>
    </div>
  );
}

function MessageAttente({ texte }: { texte: string }) {
  return (
    <p className="mt-10 text-[15px] text-[#4f4f4f]" role="status">
      {texte}
    </p>
  );
}

/** Mention de réassurance. Le paiement en ligne n'existe pas sur ce marché. */
function MentionPaiement() {
  return (
    <div className="border border-[#141414] bg-white px-5 py-4">
      <p className={LIBELLE_MONO}>Paiement à la livraison</p>
      <p className="mt-2 text-[14px] leading-[1.6] text-[#4f4f4f]">
        Vous réglez en espèces au livreur, à la réception du colis. Aucun
        paiement n&apos;est demandé maintenant : ni carte bancaire, ni virement.
      </p>
    </div>
  );
}

/* ================================================================== */
/* Îlot 1 — page /panier/                                              */
/* ================================================================== */

export function ContenuPanier({
  resoudre,
  departements,
}: {
  resoudre: ResoudrePanier;
  departements: LienDepartement[];
}) {
  const { articles, pret, changerQuantite, retirer, vider, ajouter, synchroniser } = usePanier();
  const { resolution, aJour, erreur } = useResolution(resoudre, articles, pret);
  const lignes = useLignes(resolution, articles);
  const total = totalPanier(lignes);
  const quantiteTotale = lignes.reduce((n, l) => n + l.quantite, 0);

  // Un produit dépublié entre deux visites disparaît du catalogue : on nettoie
  // le panier plutôt que d'afficher une ligne fantôme.
  useEffect(() => {
    if (!aJour || !resolution) return;
    if (resolution.produits.length === articles.length) return;
    synchroniser(resolution.produits.map((p) => p.slug));
  }, [aJour, resolution, articles.length, synchroniser]);

  if (!pret) return <MessageAttente texte="Chargement du panier…" />;

  if (articles.length === 0) {
    return (
      <section className="mt-10">
        <p className="text-[17px] leading-[1.6] text-[#4f4f4f]">
          Votre panier est vide.
        </p>
        <p className="mt-3 max-w-[62ch] text-[15px] leading-[1.65] text-[#4f4f4f]">
          Parcourez nos univers pour composer votre routine. La commande se règle
          à la livraison, dans les 69 wilayas.
        </p>
        <h2 className={`mt-10 ${LIBELLE_MONO}`}>Nos univers</h2>
        <ListeDepartements departements={departements} />
      </section>
    );
  }

  if (!resolution) {
    return erreur ? (
      <MessageAttente texte="Le panier n'a pas pu être chargé. Rechargez la page pour réessayer." />
    ) : (
      <MessageAttente texte="Chargement du panier…" />
    );
  }

  return (
    <div className="mt-10 grid gap-12 lg:grid-cols-[minmax(0,1fr)_320px] lg:gap-16">
      <section aria-labelledby="titre-articles">
        <h2 id="titre-articles" className="sr-only">
          Articles du panier
        </h2>

        <ul className="border-t border-[#e5e5e5]">
          {lignes.map(({ produit, quantite }) => (
            <li
              key={produit.slug}
              className="flex gap-4 border-b border-[#e5e5e5] py-5 sm:gap-6"
            >
              <Link href={produit.url} prefetch={false} aria-label={produit.nom}>
                <Vignette src={produit.image} alt={produit.nom} />
              </Link>

              <div className="flex min-w-0 flex-1 flex-col gap-3">
                <div className="flex flex-wrap items-start justify-between gap-x-6 gap-y-1">
                  <div className="min-w-0">
                    {produit.marque && (
                      <p className="font-mono text-[11px] uppercase tracking-[0.06em] text-[#909090]">
                        {produit.marque}
                      </p>
                    )}
                    <h3 className="mt-1 text-[15px] leading-[1.35] text-[#141414]">
                      <Link href={produit.url} prefetch={false} className="hover:underline">
                        {produit.nom}
                      </Link>
                    </h3>
                    {produit.contenance && (
                      <p className="mt-1 font-mono text-[11px] text-[#909090]">
                        {produit.contenance}
                      </p>
                    )}
                  </div>
                  <p className="text-[15px] font-medium whitespace-nowrap text-[#141414]">
                    {formatPrixDA(produit.prix * quantite)}
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
                  <SelecteurQuantite
                    quantite={quantite}
                    nom={produit.nom}
                    onChange={(q) => changerQuantite(produit.slug, q)}
                  />
                  <span className="text-[13px] text-[#909090]">
                    {formatPrixDA(produit.prix)} l&apos;unité
                  </span>
                  <button
                    type="button"
                    onClick={() => retirer(produit.slug)}
                    className="ml-auto text-[13px] text-[#4f4f4f] underline underline-offset-4 hover:text-[#141414]"
                  >
                    Retirer
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>

        <button
          type="button"
          onClick={vider}
          className="mt-5 text-[13px] text-[#909090] underline underline-offset-4 hover:text-[#141414]"
        >
          Vider le panier
        </button>

        {resolution.upsell.length > 0 && (
          <section aria-labelledby="titre-upsell" className="mt-14 border-t border-[#e5e5e5] pt-8">
            <h2 id="titre-upsell" className="text-[20px] leading-[1.2] text-[#141414]">
              Complétez votre commande
            </h2>
            <ul className="mt-6 grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-2 lg:grid-cols-3">
              {resolution.upsell.map((p) => (
                <li key={p.slug} className="flex gap-4">
                  <Link href={p.url} prefetch={false} aria-label={p.nom}>
                    <Vignette src={p.image} alt={p.nom} />
                  </Link>
                  <div className="min-w-0 flex-1">
                    {p.marque && (
                      <p className="font-mono text-[11px] uppercase tracking-[0.06em] text-[#909090]">
                        {p.marque}
                      </p>
                    )}
                    <h3 className="mt-1 line-clamp-2 text-[14px] leading-[1.35] text-[#141414]">
                      <Link href={p.url} prefetch={false} className="hover:underline">
                        {p.nom}
                      </Link>
                    </h3>
                    <p className="mt-1 text-[13px] font-medium text-[#141414]">
                      {formatPrixDA(p.prix)}
                    </p>
                    <button
                      type="button"
                      onClick={() => ajouter(p.slug)}
                      className="mt-2 text-[12px] uppercase tracking-[0.06em] text-[#141414] underline underline-offset-4 hover:opacity-60"
                    >
                      Ajouter
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </section>
        )}
      </section>

      <aside aria-labelledby="titre-total" className="lg:sticky lg:top-24 lg:self-start">
        <h2 id="titre-total" className={LIBELLE_MONO}>
          Récapitulatif
        </h2>
        <dl className="mt-4 border-t border-[#141414] pt-4">
          <div className="flex items-baseline justify-between">
            <dt className="text-[14px] text-[#4f4f4f]">
              Sous-total ({quantiteTotale} article{quantiteTotale > 1 ? "s" : ""})
            </dt>
            <dd className="text-[18px] font-medium text-[#141414]">{formatPrixDA(total)}</dd>
          </div>
          <div className="mt-3 flex items-baseline justify-between">
            <dt className="text-[14px] text-[#4f4f4f]">Livraison</dt>
            <dd className="text-[13px] text-[#909090]">Calculée selon la wilaya</dd>
          </div>
        </dl>

        <Link href="/commande/" prefetch={false} className={`${BOUTON_PLEIN} mt-6 w-full`}>
          Commander
        </Link>

        <div className="mt-6">
          <MentionPaiement />
        </div>
      </aside>
    </div>
  );
}

/* ================================================================== */
/* Îlot 2 — page /commande/                                            */
/* ================================================================== */

type Champ = "prenom" | "nom" | "telephone" | "wilaya" | "commune" | "adresse" | "commentaire";

type Valeurs = Record<Champ, string>;

const VALEURS_VIDES: Valeurs = {
  prenom: "",
  nom: "",
  telephone: "",
  wilaya: "",
  commune: "",
  adresse: "",
  commentaire: "",
};

function valider(v: Valeurs): Partial<Record<Champ, string>> {
  const e: Partial<Record<Champ, string>> = {};
  if (v.prenom.trim().length < 2) e.prenom = "Indiquez votre prénom.";
  if (v.nom.trim().length < 2) e.nom = "Indiquez votre nom.";
  if (!telephoneValide(v.telephone)) {
    e.telephone = "Numéro invalide. Attendu : 10 chiffres commençant par 0, ex. 05 12 34 56 78.";
  }
  if (!codeWilayaValide(v.wilaya)) e.wilaya = "Choisissez votre wilaya.";
  if (v.commune.trim().length < 2) e.commune = "Indiquez votre commune.";
  if (v.adresse.trim().length < 5) e.adresse = "Indiquez une adresse de livraison complète.";
  return e;
}

function ChampTexte({
  id,
  libelle,
  valeur,
  erreur,
  onChange,
  type = "text",
  inputMode,
  autoComplete,
  aide,
}: {
  id: Champ;
  libelle: string;
  valeur: string;
  erreur?: string;
  onChange: (v: string) => void;
  type?: string;
  inputMode?: "text" | "tel";
  autoComplete?: string;
  aide?: string;
}) {
  const idAide = aide ? `${id}-aide` : undefined;
  const idErreur = erreur ? `${id}-erreur` : undefined;
  const decrit = [idAide, idErreur].filter(Boolean).join(" ") || undefined;

  return (
    <p className="flex flex-col gap-1.5">
      <label htmlFor={id} className={LIBELLE_MONO}>
        {libelle}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        inputMode={inputMode}
        autoComplete={autoComplete}
        value={valeur}
        onChange={(e) => onChange(e.target.value)}
        aria-invalid={erreur ? true : undefined}
        aria-describedby={decrit}
        className={`border bg-white px-3 py-2.5 text-[15px] text-[#141414] outline-none placeholder:text-[#909090] focus:border-[#141414] ${
          erreur ? "border-[#b3261e]" : "border-[#e5e5e5]"
        }`}
      />
      {aide && (
        <span id={idAide} className="text-[12px] text-[#909090]">
          {aide}
        </span>
      )}
      {erreur && (
        <span id={idErreur} className="text-[12px] text-[#b3261e]">
          {erreur}
        </span>
      )}
    </p>
  );
}

export function FormulaireCommande({ resoudre }: { resoudre: ResoudrePanier }) {
  const router = useRouter();
  const { articles, pret, vider } = usePanier();
  const { resolution, erreur: erreurChargement } = useResolution(resoudre, articles, pret);
  const lignes = useLignes(resolution, articles);
  const total = totalPanier(lignes);

  const [valeurs, setValeurs] = useState<Valeurs>(VALEURS_VIDES);
  const [erreurs, setErreurs] = useState<Partial<Record<Champ, string>>>({});
  const [envoi, setEnvoi] = useState(false);
  const [erreurEnvoi, setErreurEnvoi] = useState<string | null>(null);
  // Lien WhatsApp pre-rempli, propose quand le courriel n'est pas parti.
  const [secoursWhatsApp, setSecoursWhatsApp] = useState<string | null>(null);
  /** Champ leurre : invisible pour un humain, rempli par les robots. */
  const piege = useRef<HTMLInputElement>(null);

  const majChamp = (champ: Champ) => (v: string) => {
    setValeurs((precedent) => ({ ...precedent, [champ]: v }));
    setErreurs((precedent) => {
      if (!precedent[champ]) return precedent;
      const suivant = { ...precedent };
      delete suivant[champ];
      return suivant;
    });
  };

  async function soumettre(evenement: FormEvent<HTMLFormElement>) {
    evenement.preventDefault();
    if (envoi) return;
    setErreurEnvoi(null);

    const trouvees = valider(valeurs);
    setErreurs(trouvees);
    const premier = (Object.keys(trouvees) as Champ[])[0];
    if (premier) {
      document.getElementById(premier)?.focus();
      return;
    }
    if (lignes.length === 0) return;

    setEnvoi(true);
    const wilaya = wilayaParCode(valeurs.wilaya);
    const commande: Commande = {
      numero: genererNumeroCommande(),
      dateIso: new Date().toISOString(),
      client: {
        prenom: valeurs.prenom.trim(),
        nom: valeurs.nom.trim(),
        telephone: normaliserTelephone(valeurs.telephone),
        wilayaCode: valeurs.wilaya,
        wilayaNom: wilaya?.nom ?? "",
        commune: valeurs.commune.trim(),
        adresse: valeurs.adresse.trim(),
        commentaire: valeurs.commentaire.trim(),
      },
      lignes: lignes.map(({ produit, quantite }) => ({
        slug: produit.slug,
        nom: produit.nom,
        marque: produit.marque,
        contenance: produit.contenance,
        prixUnitaire: produit.prix,
        quantite,
      })),
      total,
      paiement: "livraison",
    };

    /* La commande part par EmailJS, depuis le navigateur du client. Un robot
     * qui a rempli le champ leurre voit l'écran de confirmation mais n'envoie
     * rien : inutile de lui signaler qu'il a été repéré. */
    const robot = (piege.current?.value ?? "").trim() !== "";
    const resultat = robot ? { envoye: true } : await envoyerCommande(commande);

    if (!resultat.envoye) {
      // Le panier reste intact : le client peut réessayer sans rien ressaisir.
      // Et s'il existe un canal de secours, on le lui donne immédiatement,
      // pré-rempli : une commande perdue à cette étape est une vente perdue.
      setEnvoi(false);
      setErreurEnvoi(resultat.motif ?? "La commande n'a pas pu être transmise.");
      setSecoursWhatsApp(whatsappConfigure ? (lienWhatsApp(commande) ?? null) : null);
      return;
    }

    memoriserCommande(commande);
    vider();
    router.push("/commande/merci/");
  }

  if (!pret) return <MessageAttente texte="Chargement…" />;

  // Le panier est vidé avant la redirection : sans ce garde, l'écran « panier
  // vide » clignoterait une fraction de seconde sur le chemin de succès.
  if (envoi) return <MessageAttente texte="Enregistrement de la commande…" />;

  if (articles.length === 0) {
    return (
      <section className="mt-10">
        <p className="text-[17px] leading-[1.6] text-[#4f4f4f]">
          Votre panier est vide : il n&apos;y a rien à commander.
        </p>
        <Link href="/panier/" prefetch={false} className={`${BOUTON_CONTOUR} mt-6`}>
          Retour au panier
        </Link>
      </section>
    );
  }

  if (!resolution) {
    return erreurChargement ? (
      <MessageAttente texte="La commande n'a pas pu être chargée. Rechargez la page pour réessayer." />
    ) : (
      <MessageAttente texte="Chargement…" />
    );
  }

  return (
    <div className="mt-10 grid gap-12 lg:grid-cols-[minmax(0,1fr)_340px] lg:gap-16">
      <form onSubmit={soumettre} noValidate>
        <fieldset className="border-0 p-0">
          <legend className="text-[20px] leading-[1.2] text-[#141414]">
            Vos coordonnées
          </legend>
          <p className="mt-2 max-w-[56ch] text-[14px] leading-[1.6] text-[#4f4f4f]">
            Aucun compte à créer. Ces informations servent uniquement à vous
            appeler pour confirmer et à livrer le colis.
          </p>

          <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2">
            <ChampTexte
              id="prenom"
              libelle="Prénom"
              valeur={valeurs.prenom}
              erreur={erreurs.prenom}
              onChange={majChamp("prenom")}
              autoComplete="given-name"
            />
            <ChampTexte
              id="nom"
              libelle="Nom"
              valeur={valeurs.nom}
              erreur={erreurs.nom}
              onChange={majChamp("nom")}
              autoComplete="family-name"
            />
          </div>

          <div className="mt-5">
            <ChampTexte
              id="telephone"
              libelle="Téléphone"
              type="tel"
              inputMode="tel"
              valeur={valeurs.telephone}
              erreur={erreurs.telephone}
              onChange={majChamp("telephone")}
              autoComplete="tel-national"
              aide="Format 0X XX XX XX XX. Le livreur vous appelle sur ce numéro."
            />
          </div>
        </fieldset>

        <fieldset className="mt-12 border-0 p-0">
          <legend className="text-[20px] leading-[1.2] text-[#141414]">Livraison</legend>

          <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2">
            <p className="flex flex-col gap-1.5">
              <label htmlFor="wilaya" className={LIBELLE_MONO}>
                Wilaya
              </label>
              <select
                id="wilaya"
                name="wilaya"
                value={valeurs.wilaya}
                onChange={(e) => majChamp("wilaya")(e.target.value)}
                aria-invalid={erreurs.wilaya ? true : undefined}
                aria-describedby={erreurs.wilaya ? "wilaya-erreur" : undefined}
                className={`appearance-none border bg-white px-3 py-2.5 text-[15px] text-[#141414] outline-none focus:border-[#141414] ${
                  erreurs.wilaya ? "border-[#b3261e]" : "border-[#e5e5e5]"
                }`}
              >
                <option value="">Choisir une wilaya</option>
                {WILAYAS.map((w) => (
                  <option key={w.code} value={w.code}>
                    {w.code} — {w.nom}
                  </option>
                ))}
              </select>
              {erreurs.wilaya && (
                <span id="wilaya-erreur" className="text-[12px] text-[#b3261e]">
                  {erreurs.wilaya}
                </span>
              )}
            </p>

            <ChampTexte
              id="commune"
              libelle="Commune"
              valeur={valeurs.commune}
              erreur={erreurs.commune}
              onChange={majChamp("commune")}
              autoComplete="address-level2"
            />
          </div>

          <div className="mt-5">
            <ChampTexte
              id="adresse"
              libelle="Adresse"
              valeur={valeurs.adresse}
              erreur={erreurs.adresse}
              onChange={majChamp("adresse")}
              autoComplete="street-address"
              aide="Rue, numéro, cité, point de repère."
            />
          </div>

          <p className="mt-5 flex flex-col gap-1.5">
            <label htmlFor="commentaire" className={LIBELLE_MONO}>
              Commentaire (facultatif)
            </label>
            <textarea
              id="commentaire"
              name="commentaire"
              rows={3}
              value={valeurs.commentaire}
              onChange={(e) => majChamp("commentaire")(e.target.value)}
              className="border border-[#e5e5e5] bg-white px-3 py-2.5 text-[15px] text-[#141414] outline-none focus:border-[#141414]"
            />
          </p>
        </fieldset>

        <div className="mt-10">
          <MentionPaiement />
        </div>

        {/* Leurre : hors du flux visuel et du parcours clavier, jamais rempli
            par un humain. Sans `hidden`, que les robots savent détecter. */}
        <input
          ref={piege}
          type="text"
          name="site_web"
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
          className="pointer-events-none absolute left-[-9999px] h-0 w-0 opacity-0"
        />

        {erreurEnvoi && (
          <div
            role="alert"
            className="mt-8 border border-[#b3261e] bg-white px-4 py-3 text-[14px] leading-[1.6] text-[#b3261e]"
          >
            <p>
              {erreurEnvoi}{" "}
              {!secoursWhatsApp && (
                <>
                  <Link href="/contact/" prefetch={false} className="underline">
                    Nous contacter
                  </Link>
                  .
                </>
              )}
            </p>

            {/* Canal de secours. Il n'apparaît que si un numéro est configuré,
                et il porte la commande complète : le client n'a rien à
                ressaisir, il n'a qu'à envoyer. */}
            {secoursWhatsApp && (
              <a
                href={secoursWhatsApp}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex min-h-[48px] items-center justify-center border border-[#141414] bg-[#141414] px-6 text-[13px] uppercase tracking-[0.08em] text-white transition-colors hover:bg-[#2e2e2e]"
              >
                Confirmer sur WhatsApp
              </a>
            )}
          </div>
        )}

        <button type="submit" disabled={envoi} className={`${BOUTON_PLEIN} mt-8 w-full sm:w-auto`}>
          {envoi ? "Envoi…" : "Confirmer la commande"}
        </button>

        <p className="mt-4 text-[13px] leading-[1.6] text-[#909090]">
          Nous vous appelons pour confirmer avant expédition. Vous payez au
          livreur, après avoir vérifié le colis. Une question avant de valider ?{" "}
          <a href={TEL_DZ_LIEN} className="font-medium text-[#141414] underline underline-offset-2">
            {TEL_DZ_AFFICHE}
          </a>
          .
        </p>
      </form>

      <aside aria-labelledby="titre-recap" className="lg:sticky lg:top-24 lg:self-start">
        <h2 id="titre-recap" className={LIBELLE_MONO}>
          Votre commande
        </h2>

        <ul className="mt-4 border-t border-[#141414]">
          {lignes.map(({ produit, quantite }) => (
            <li key={produit.slug} className="flex gap-3 border-b border-[#e5e5e5] py-4">
              <Vignette src={produit.image} alt={produit.nom} />
              <div className="min-w-0 flex-1">
                {produit.marque && (
                  <p className="font-mono text-[11px] uppercase tracking-[0.06em] text-[#909090]">
                    {produit.marque}
                  </p>
                )}
                <p className="mt-1 line-clamp-2 text-[13px] leading-[1.35] text-[#141414]">
                  {produit.nom}
                </p>
                <p className="mt-1 text-[12px] text-[#909090]">
                  {quantite} × {formatPrixDA(produit.prix)}
                </p>
              </div>
              <p className="text-[13px] font-medium whitespace-nowrap text-[#141414]">
                {formatPrixDA(produit.prix * quantite)}
              </p>
            </li>
          ))}
        </ul>

        <dl className="mt-4">
          <div className="flex items-baseline justify-between">
            <dt className="text-[14px] text-[#4f4f4f]">Total produits</dt>
            <dd className="text-[18px] font-medium text-[#141414]">{formatPrixDA(total)}</dd>
          </div>
          <div className="mt-3 flex items-baseline justify-between">
            <dt className="text-[14px] text-[#4f4f4f]">Livraison</dt>
            <dd className="text-[13px] text-[#909090]">Communiquée à la confirmation</dd>
          </div>
        </dl>

        <Link
          href="/panier/"
          prefetch={false}
          className="mt-6 inline-block text-[13px] text-[#4f4f4f] underline underline-offset-4 hover:text-[#141414]"
        >
          Modifier le panier
        </Link>
      </aside>
    </div>
  );
}

/* ================================================================== */
/* Îlot 3 — page /commande/merci/                                      */
/* ================================================================== */

/**
 * La dernière commande est elle aussi un store externe.
 *
 * `undefined` = jamais lue. Le cache est indispensable : après un
 * `router.push` la page /merci/ est montée sans rechargement, et une lecture
 * non mémorisée renverrait une nouvelle référence à chaque rendu.
 */
let commandeCache: Commande | null | undefined;
const abonnesCommande = new Set<() => void>();

function instantaneCommande(): Commande | null {
  if (commandeCache === undefined) commandeCache = lireDerniereCommande();
  return commandeCache;
}

function instantaneCommandeServeur(): Commande | null {
  return null;
}

function sabonnerCommande(alerter: () => void): () => void {
  abonnesCommande.add(alerter);
  return () => {
    abonnesCommande.delete(alerter);
  };
}

/** Écrit la commande et rafraîchit le cache, sinon /merci/ afficherait la précédente. */
function memoriserCommande(commande: Commande): void {
  enregistrerCommande(commande);
  commandeCache = commande;
  for (const alerter of abonnesCommande) alerter();
}

export function ConfirmationCommande({ departements }: { departements: LienDepartement[] }) {
  const commande = useSyncExternalStore(
    sabonnerCommande,
    instantaneCommande,
    instantaneCommandeServeur,
  );

  return (
    <section className="mt-8">
      <p className="max-w-[62ch] text-[17px] leading-[1.6] text-[#4f4f4f]">
        Votre commande est enregistrée. Nous vous appelons pour la confirmer
        avant expédition — gardez votre téléphone à portée.
      </p>

      {commande && (
        <dl className="mt-8 grid grid-cols-1 gap-px border border-[#e5e5e5] bg-[#e5e5e5] sm:grid-cols-3">
          <div className="bg-white px-5 py-4">
            <dt className={LIBELLE_MONO}>Numéro de commande</dt>
            <dd className="mt-2 font-mono text-[16px] text-[#141414]">{commande.numero}</dd>
          </div>
          <div className="bg-white px-5 py-4">
            <dt className={LIBELLE_MONO}>Total à régler</dt>
            <dd className="mt-2 text-[16px] text-[#141414]">
              {formatPrixDA(commande.total)}
              <span className="ml-1 text-[13px] text-[#909090]">+ livraison</span>
            </dd>
          </div>
          <div className="bg-white px-5 py-4">
            <dt className={LIBELLE_MONO}>Livraison</dt>
            <dd className="mt-2 text-[16px] text-[#141414]">
              {commande.client.commune}
              {commande.client.wilayaNom ? `, ${commande.client.wilayaNom}` : ""}
            </dd>
          </div>
        </dl>
      )}

      {commande && (
        <p className="mt-4 text-[13px] text-[#909090]">
          Appel de confirmation au {formaterTelephone(commande.client.telephone)}.
        </p>
      )}

      <div className="mt-10 max-w-[62ch]">
        <MentionPaiement />
      </div>

      <section aria-labelledby="titre-suite" className="mt-12 border-t border-[#e5e5e5] pt-8">
        <h2 id="titre-suite" className="text-[20px] leading-[1.2] text-[#141414]">
          Et ensuite
        </h2>
        <ol className="mt-4 flex max-w-[62ch] list-decimal flex-col gap-3 pl-5 text-[15px] leading-[1.65] text-[#4f4f4f]">
          <li>Un conseiller vous appelle pour confirmer la commande et l&apos;adresse.</li>
          <li>
            Le colis part ensuite vers votre wilaya. Les délais indicatifs par
            zone sont détaillés sur la page{" "}
            <Link href="/livraison/" prefetch={false} className="text-[#141414] underline">
              livraison
            </Link>
            .
          </li>
          <li>
            Vous ouvrez le colis, vérifiez les produits, puis réglez en espèces
            au livreur.
          </li>
        </ol>
      </section>

      <section aria-labelledby="titre-continuer" className="mt-12 border-t border-[#e5e5e5] pt-8">
        <h2 id="titre-continuer" className="text-[20px] leading-[1.2] text-[#141414]">
          Continuer vos achats
        </h2>
        <ListeDepartements departements={departements} />
      </section>
    </section>
  );
}

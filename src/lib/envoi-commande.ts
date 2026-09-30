/**
 * Transmission des commandes.
 *
 * Le navigateur ne fait plus qu'une chose : poster la commande à notre propre
 * route `/api/commande`. Tout le reste — e-mail au vendeur, tableur, alerte
 * WhatsApp — se passe côté serveur.
 *
 * Ce que ce changement corrige, et pourquoi il comptait :
 *
 *  - un lien `wa.me` n'envoie rien tout seul, WhatsApp impose au client
 *    d'appuyer sur « envoyer ». Celui qui abandonne à cet instant est une
 *    commande perdue dont on n'apprend jamais l'existence ;
 *  - les identifiants EmailJS partaient dans le code envoyé au navigateur,
 *    donc publics. Les secrets vivent désormais sur le serveur, sans préfixe
 *    `NEXT_PUBLIC_`.
 *
 * Règle de conception inchangée, et non négociable : une commande n'est
 * confirmée au client que si elle est réellement partie. Un « merci » affiché
 * sur une commande jamais reçue, c'est une vente perdue et un client qui
 * attend un appel qui ne viendra pas.
 *
 * Le lien WhatsApp manuel reste, mais uniquement comme filet de dernier
 * recours : il n'apparaît que si la route serveur n'a rien pu faire.
 */

import type { Commande } from "@/lib/panier";

const ROUTE = "/api/commande/";
const DELAI_MS = 20000;
const ESSAIS = 2;

export interface ResultatEnvoi {
  envoye: boolean;
  /** Message destiné au client, jamais un détail technique. */
  motif?: string;
}

/**
 * Envoie la commande. Deux tentatives : une coupure réseau d'une seconde sur
 * un mobile algérien ne doit pas coûter une vente.
 */
export async function envoyerCommande(commande: Commande): Promise<ResultatEnvoi> {
  for (let essai = 1; essai <= ESSAIS; essai++) {
    const abandon = new AbortController();
    const minuteur = setTimeout(() => abandon.abort(), DELAI_MS);
    try {
      const reponse = await fetch(ROUTE, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        signal: abandon.signal,
        body: JSON.stringify(commande),
      });
      clearTimeout(minuteur);

      if (reponse.ok) return { envoye: true };

      // 400 : la commande elle-même est refusée, réessayer n'y changera rien.
      if (reponse.status === 400) break;
      // 503 : aucun canal de réception n'est configuré côté serveur. C'est un
      // défaut de déploiement, pas un incident réseau.
      if (reponse.status === 503) {
        return {
          envoye: false,
          motif:
            "La prise de commande en ligne n'est pas encore active. Appelez-nous pour valider votre commande, nous la prenons directement.",
        };
      }
    } catch {
      clearTimeout(minuteur);
    }
    if (essai < ESSAIS) await new Promise((r) => setTimeout(r, 1500));
  }

  return {
    envoye: false,
    motif:
      "Votre commande n'a pas pu être transmise. Votre panier est conservé : réessayez, ou envoyez-la-nous directement avec le bouton ci-dessous.",
  };
}

/* ------------------------------------------------------------------ */
/* Filet de dernier recours : WhatsApp manuel                          */
/* ------------------------------------------------------------------ */

/**
 * Numéro WhatsApp du vendeur, chiffres uniquement, indicatif compris.
 *
 * Celui-ci est public par nature : il sert à construire un lien que le CLIENT
 * ouvre lui-même. Il n'a rien à voir avec `CALLMEBOT_PHONE`, qui reste côté
 * serveur et sert à l'envoi automatique.
 */
const WHATSAPP = (process.env.NEXT_PUBLIC_WHATSAPP ?? "").replace(/\D/g, "");

/** Vrai si le filet de dernier recours est utilisable. */
export const whatsappConfigure = WHATSAPP.length >= 8;

/**
 * Lien WhatsApp pré-rempli avec la commande complète.
 *
 * Deux usages :
 *  - « secours » : la route serveur a échoué, et une action manuelle du client
 *    vaut mieux qu'une commande perdue ;
 *  - « confirmation » : la commande est déjà reçue, et le client qui préfère
 *    WhatsApp peut la confirmer là, sur la page de remerciement. C'est une
 *    facilité offerte, jamais une étape : la commande n'en dépend pas.
 */
export function lienWhatsApp(
  commande: Commande,
  objet: "secours" | "confirmation" = "secours",
): string | undefined {
  if (!whatsappConfigure) return undefined;

  const { client } = commande;
  // La marque et la contenance ne sont ajoutées que si le nom ne les porte pas
  // déjà : la plupart des noms du catalogue commencent par leur marque et
  // finissent par leur format, et les préfixer sans vérifier donnait
  // « Dior Dior Sauvage (100ml) ».
  const lignes = commande.lignes
    .map((l) => {
      const marque =
        l.marque && !l.nom.toLowerCase().includes(l.marque.toLowerCase()) ? `${l.marque} ` : "";
      const contenance =
        l.contenance && !l.nom.toLowerCase().includes(l.contenance.toLowerCase())
          ? ` (${l.contenance})`
          : "";
      const montant = (l.prixUnitaire * l.quantite).toLocaleString("fr-DZ");
      return `• ${marque}${l.nom}${contenance} x${l.quantite} = ${montant} DA`;
    })
    .join("\n");

  const entete =
    objet === "confirmation"
      ? `Bonjour, je confirme ma commande ${commande.numero} passée sur cosmetiquealgerie.com.`
      : `Nouvelle commande ${commande.numero}`;
  const texte =
    `${entete}\n\n` +
    `Nom : ${`${client.prenom} ${client.nom}`.trim()}\n` +
    `Téléphone : ${client.telephone}\n` +
    `Wilaya : ${client.wilayaCode} — ${client.wilayaNom}\n` +
    (client.commune ? `Commune : ${client.commune}\n` : "") +
    (client.adresse ? `Adresse : ${client.adresse}\n` : "") +
    `\nCommande :\n${lignes}\n\n` +
    `Total : ${commande.total.toLocaleString("fr-DZ")} DA\n` +
    `Paiement : à la livraison` +
    (client.commentaire ? `\n\nMessage : ${client.commentaire}` : "");

  return `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(texte)}`;
}

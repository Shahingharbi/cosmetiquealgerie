/**
 * Réassurance de la fiche produit.
 *
 * Les trois freins à l'achat en cosmétique en Algérie sont, dans l'ordre :
 * la contrefaçon, l'acheminement hors des grandes villes, et le paiement en
 * ligne. Le bloc répond aux trois, sans superlatif ni argument de prix.
 * Composant serveur : le texte est dans le HTML, donc indexable.
 */

const GARANTIES: { titre: string; texte: string }[] = [
  {
    titre: "Produits originaux",
    texte:
      "Références issues de circuits d'approvisionnement identifiés, vendues dans leur conditionnement d'origine.",
  },
  {
    titre: "Livraison dans les 69 wilayas",
    texte:
      "Expédition à domicile ou en point de retrait, sur l'ensemble du territoire algérien.",
  },
  {
    titre: "Paiement à la livraison",
    texte: "Le règlement se fait à la réception de la commande, en dinars.",
  },
];

export default function BlocAuthenticite() {
  return (
    <section
      aria-labelledby="titre-garanties"
      className="border-t border-[#e5e5e5] pt-6"
    >
      <h2
        id="titre-garanties"
        className="font-mono text-[11px] uppercase tracking-[0.08em] text-[#909090]"
      >
        Nos engagements
      </h2>
      <ul className="mt-4 space-y-4">
        {GARANTIES.map((g) => (
          <li key={g.titre}>
            <p className="text-[14px] font-medium text-[#141414]">{g.titre}</p>
            <p className="mt-1 text-[13px] leading-[1.5] text-[#4f4f4f]">
              {g.texte}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}

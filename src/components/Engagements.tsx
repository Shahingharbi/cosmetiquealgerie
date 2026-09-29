const ENGAGEMENTS = [
  {
    titre: "Produits originaux",
    texte:
      "Chaque référence provient d'un circuit d'approvisionnement identifié. Marque, contenance et provenance sont affichées sur la fiche, sans reformulation marketing.",
  },
  {
    titre: "Livraison 69 wilayas",
    texte:
      "Le catalogue est livrable sur l'ensemble du territoire algérien, du littoral au Grand Sud, avec un délai indicatif annoncé avant la commande.",
  },
  {
    titre: "Paiement à la livraison",
    texte:
      "Vous réglez au livreur, à réception du colis. Aucune carte bancaire n'est demandée au moment de la commande.",
  },
  {
    titre: "Conseil avant l'achat",
    texte:
      "Une question sur une texture, un actif ou une routine ? Notre équipe répond par e-mail et par WhatsApp avant que vous ne commandiez.",
  },
];

/**
 * Bloc d'engagements de la page d'accueil.
 * Volontairement sans illustration : le catalogue ne dispose que de packshots,
 * et une image d'ambiance générique affaiblirait la crédibilité du propos.
 */
export function Engagements() {
  return (
    <section
      aria-labelledby="engagements-titre"
      className="bg-white px-4 md:px-8 py-14 md:py-20"
    >
      <div className="mx-auto max-w-[1440px]">
        <h2
          id="engagements-titre"
          className="font-mono text-[12px] uppercase tracking-[0.14em] text-[#909090]"
        >
          Nos engagements
        </h2>

        <ul className="mt-8 grid grid-cols-1 gap-px border border-[#e5e5e5] bg-[#e5e5e5] sm:grid-cols-2 lg:grid-cols-4">
          {ENGAGEMENTS.map((e, i) => (
            <li key={e.titre} className="bg-white p-6 md:p-8">
              <span className="font-mono text-[12px] text-[#909090]">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-4 text-[18px] leading-[1.25] text-[#141414]">
                {e.titre}
              </h3>
              <p className="mt-3 text-[14px] leading-[1.55] text-[#4f4f4f]">
                {e.texte}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

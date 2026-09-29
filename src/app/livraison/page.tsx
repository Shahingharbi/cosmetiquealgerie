import type { Metadata } from "next";
import Link from "next/link";
import FilAriane from "@/components/FilAriane";
import { urlAbsolue } from "@/lib/catalogue";
import { WILAYAS } from "@/lib/wilayas";

type ZoneId = "centre" | "est" | "ouest" | "hauts" | "sud";

const ZONES: Record<ZoneId, { nom: string; delai: string }> = {
  centre: { nom: "Centre", delai: "24 à 48 h" },
  est: { nom: "Est", delai: "48 à 72 h" },
  ouest: { nom: "Ouest", delai: "48 à 72 h" },
  hauts: { nom: "Hauts-Plateaux", delai: "2 à 4 jours" },
  sud: { nom: "Sud", delai: "3 à 6 jours" },
};

/**
 * Zone de rattachement par matricule.
 *
 * Les noms viennent de `lib/wilayas.ts`, liste partagée avec le formulaire de
 * commande : une seconde liste ici avait déjà divergé (arrêtée à 58 alors que
 * le site en annonce 69).
 *
 * Les wilayas 59 à 69 prennent la zone de la wilaya dont elles ont été
 * détachées : les grilles des transporteurs suivent ce découpage.
 *
 * Les wilayas restent du texte brut : une wilaya ne doit jamais devenir une
 * URL du site, sinon on crée autant de pages sans contenu propre, qui diluent
 * le cocon.
 */
const ZONE_PAR_CODE: Record<string, ZoneId> = {
  "01": "sud", "02": "centre", "03": "hauts", "04": "est", "05": "est",
  "06": "centre", "07": "sud", "08": "sud", "09": "centre", "10": "centre",
  "11": "sud", "12": "est", "13": "ouest", "14": "hauts", "15": "centre",
  "16": "centre", "17": "hauts", "18": "est", "19": "est", "20": "hauts",
  "21": "est", "22": "ouest", "23": "est", "24": "est", "25": "est",
  "26": "centre", "27": "ouest", "28": "hauts", "29": "ouest", "30": "sud",
  "31": "ouest", "32": "hauts", "33": "sud", "34": "est", "35": "centre",
  "36": "est", "37": "sud", "38": "hauts", "39": "sud", "40": "est",
  "41": "est", "42": "centre", "43": "est", "44": "centre", "45": "hauts",
  "46": "ouest", "47": "sud", "48": "ouest", "49": "sud", "50": "sud",
  "51": "sud", "52": "sud", "53": "sud", "54": "sud", "55": "sud",
  "56": "sud", "57": "sud", "58": "sud",
  "59": "hauts", // Aflou, détachée de Laghouat
  "60": "est", // Barika, détachée de Batna
  "61": "sud", // El Kantara, détachée de Biskra
  "62": "est", // Bir El Ater, détachée de Tébessa
  "63": "ouest", // El Aricha, détachée de Tlemcen
  "64": "hauts", // Ksar Chellala, détachée de Tiaret
  "65": "hauts", // Aïn Oussera, détachée de Djelfa
  "66": "hauts", // Messaad, détachée de Djelfa
  "67": "centre", // Ksar El Boukhari, détachée de Médéa
  "68": "hauts", // Bou Saâda, détachée de M'Sila
  "69": "hauts", // El Abiodh Sidi Cheikh, détachée d'El Bayadh
};

const LIGNES_WILAYAS = WILAYAS.map((w) => {
  const zone = ZONE_PAR_CODE[w.code];
  // Échoue au build plutôt que d'afficher une ligne sans zone.
  if (!zone) throw new Error(`Wilaya ${w.code} (${w.nom}) sans zone de livraison`);
  return { ...w, zone };
});

/** PLACEHOLDER : grille tarifaire à arrêter avec le transporteur. */
const FRAIS = "À COMPLÉTER — montant des frais de livraison par zone";

export const metadata: Metadata = {
  title: "Livraison en Algérie",
  description:
    "Livraison dans les 69 wilayas d'Algérie, paiement à la livraison. Délais indicatifs par zone, conditions de réception et vérification du colis.",
  alternates: { canonical: urlAbsolue("/livraison/") },
};

export default function PageLivraison() {
  return (
    <div className="relative flex min-h-screen flex-col bg-[#f4f4f2]">

      <main className="flex-1 px-4 py-10 md:px-8 md:py-16">
        <div className="mx-auto max-w-[900px]">
          <FilAriane
            maillons={[
              { nom: "Accueil", url: "/" },
              { nom: "Livraison", url: "/livraison/" },
            ]}
          />

          <h1 className="mt-6 text-[32px] leading-[1.1] text-[#141414] md:text-[48px]">
            Livraison en Algérie
          </h1>
          <p className="mt-6 max-w-[62ch] text-[17px] leading-[1.6] text-[#4f4f4f] md:text-[19px]">
            Nous livrons les 69 wilayas, à domicile ou en point de retrait selon
            la commune. Le règlement se fait au livreur, à la réception.
          </p>

          <section className="mt-12 border-t border-[#e5e5e5] pt-8">
            <h2 className="text-[22px] leading-[1.2] text-[#141414] md:text-[28px]">
              Paiement à la livraison
            </h2>
            <div className="mt-4 flex flex-col gap-4 text-[15px] leading-[1.65] text-[#4f4f4f]">
              <p>
                Aucun paiement n&apos;est demandé au moment de la commande. Vous
                réglez en espèces au livreur lorsque le colis vous est remis. Ni
                carte bancaire, ni virement préalable.
              </p>
              <p>
                Vous pouvez ouvrir le colis et vérifier les produits — emballage,
                contenance, date de péremption — avant de payer. Si le contenu ne
                correspond pas à la commande, refusez la remise : rien ne vous
                est facturé.
              </p>
              <p className="border border-dashed border-[#909090] bg-white px-4 py-3 font-mono text-[13px] text-[#141414]">
                {FRAIS}
              </p>
            </div>
          </section>

          <section className="mt-12 border-t border-[#e5e5e5] pt-8">
            <h2 className="text-[22px] leading-[1.2] text-[#141414] md:text-[28px]">
              Délais indicatifs
            </h2>
            <div className="mt-4 flex flex-col gap-4 text-[15px] leading-[1.65] text-[#4f4f4f]">
              <p>
                Les délais courent à partir de la confirmation de la commande par
                téléphone, hors vendredis et jours fériés. Ils sont indicatifs :
                l&apos;éloignement de la commune et les conditions de transport
                peuvent les allonger.
              </p>
            </div>

            <dl className="mt-6 grid grid-cols-1 gap-px border border-[#e5e5e5] bg-[#e5e5e5] sm:grid-cols-3 lg:grid-cols-5">
              {(Object.keys(ZONES) as ZoneId[]).map((id) => (
                <div key={id} className="bg-white px-4 py-5">
                  <dt className="font-mono text-[11px] uppercase tracking-[0.12em] text-[#909090]">
                    {ZONES[id].nom}
                  </dt>
                  <dd className="mt-2 text-[16px] text-[#141414]">
                    {ZONES[id].delai}
                  </dd>
                </div>
              ))}
            </dl>
          </section>

          <section className="mt-12 border-t border-[#e5e5e5] pt-8">
            <h2 className="text-[22px] leading-[1.2] text-[#141414] md:text-[28px]">
              Les wilayas desservies
            </h2>
            <p className="mt-4 text-[15px] leading-[1.65] text-[#4f4f4f]">
              Toutes les wilayas sont livrées. Le tableau ci-dessous donne la
              zone de rattachement et le délai correspondant.
            </p>

            <div className="mt-6 overflow-x-auto border border-[#e5e5e5] bg-white">
              <table className="w-full border-collapse text-left text-[14px]">
                <caption className="sr-only">
                  Wilayas desservies, zone de rattachement et délai indicatif de
                  livraison
                </caption>
                <thead>
                  <tr className="border-b border-[#e5e5e5]">
                    <th scope="col" className="px-4 py-3 font-mono text-[11px] uppercase tracking-[0.12em] text-[#909090]">
                      Code
                    </th>
                    <th scope="col" className="px-4 py-3 font-mono text-[11px] uppercase tracking-[0.12em] text-[#909090]">
                      Wilaya
                    </th>
                    <th scope="col" className="px-4 py-3 font-mono text-[11px] uppercase tracking-[0.12em] text-[#909090]">
                      Zone
                    </th>
                    <th scope="col" className="px-4 py-3 font-mono text-[11px] uppercase tracking-[0.12em] text-[#909090]">
                      Délai indicatif
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {LIGNES_WILAYAS.map(({ code, nom, zone }) => (
                    <tr key={code} className="border-b border-[#f0f0ee] last:border-b-0">
                      <td className="px-4 py-2.5 font-mono text-[12px] text-[#909090]">
                        {code}
                      </td>
                      <td className="px-4 py-2.5 text-[#141414]">{nom}</td>
                      <td className="px-4 py-2.5 text-[#4f4f4f]">
                        {ZONES[zone].nom}
                      </td>
                      <td className="px-4 py-2.5 text-[#4f4f4f]">
                        {ZONES[zone].delai}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section className="mt-12 border-t border-[#e5e5e5] pt-8">
            <h2 className="text-[22px] leading-[1.2] text-[#141414] md:text-[28px]">
              Réception et retour
            </h2>
            <div className="mt-4 flex flex-col gap-4 text-[15px] leading-[1.65] text-[#4f4f4f]">
              <p>
                Le livreur vous appelle avant de se présenter. En cas
                d&apos;absence, une seconde présentation est effectuée ; passé ce
                délai, le colis nous est retourné.
              </p>
              <p>
                Un produit reçu endommagé, non conforme ou dont l&apos;origine
                vous paraît douteuse est repris. Signalez-le sous 48 h depuis la
                page{" "}
                <Link href="/contact/" className="text-[#141414] underline">
                  contact
                </Link>
                , photos à l&apos;appui.
              </p>
              <p>
                Pour des raisons d&apos;hygiène, les produits ouverts ou
                descellés ne peuvent être repris, sauf défaut avéré.
              </p>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

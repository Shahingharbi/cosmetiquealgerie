import type { Metadata } from "next";
import Script from "next/script";
import BoutonWhatsApp from "@/components/BoutonWhatsApp";
import { FenetreNewsletter } from "@/components/Newsletter";
import { newsletterActive } from "@/lib/newsletter";
import { Inter, Space_Mono } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { PanierProvider } from "@/components/PanierProvider";
import { SITE_NOM, SITE_URL } from "@/lib/catalogue";

/**
 * Polices libres (SIL OFL 1.1), self-hébergées par Next au build :
 * aucune requête externe au runtime, aucun CLS.
 */
const inter = Inter({
  subsets: ["latin", "latin-ext"],
  variable: "--font-sans-var",
  display: "swap",
});

const spaceMono = Space_Mono({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "700"],
  variable: "--font-mono-var",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NOM} — Soin, cheveux, maquillage et parfum`,
    template: `%s | ${SITE_NOM}`,
  },
  description:
    "Soin du visage, cheveux, maquillage et parfum d'origine, avec marque, contenance et prix en dinars. Livraison dans les 69 wilayas, règlement au livreur.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "fr_DZ",
    siteName: SITE_NOM,
    url: SITE_URL,
  },
  robots: { index: true, follow: true },
};

/**
 * Microsoft Clarity : cartes de chaleur et enregistrements de sessions.
 *
 * Chargé en `lazyOnload`, c'est-à-dire une fois la page chargée et le
 * navigateur au repos : le trafic est presque entièrement mobile, et un script
 * d'analyse qui s'exécute pendant l'hydratation dégrade l'INP, un signal de
 * classement. Il manque au pire les toutes premières secondes d'une visite.
 *
 * Seulement sur le déploiement de production Vercel : ni le serveur local ni
 * les aperçus ne doivent polluer les statistiques.
 *
 * Le formulaire de commande est masqué dans les enregistrements
 * (`data-clarity-mask` dans PanierProvider) : nom, téléphone et adresse des
 * clients n'ont pas à partir chez un tiers.
 */
const CLARITY_ID = "yqcl0p4e3f";
const CLARITY_ACTIF = process.env.VERCEL_ENV === "production";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`h-full antialiased ${inter.variable} ${spaceMono.variable}`}
    >
      <body className="min-h-full flex flex-col bg-[#f4f4f2] text-black">
        {/* `children` reste un Server Component : seul le provider franchit la
            frontière client, le reste de l'arbre est rendu côté serveur.

            L'en-tête et le pied de page vivent ICI, pas dans les pages : ils
            étaient montés page par page, et les rayons, catégories et fiches
            produit les avaient tout simplement oubliés — ces pages
            s'affichaient sans menu ni navigation. Au gabarit, l'oubli devient
            impossible. */}
        <PanierProvider>
          <Header />
          <div className="flex flex-1 flex-col">{children}</div>
          <Footer />
          <BoutonWhatsApp />
          {newsletterActive && <FenetreNewsletter />}
        </PanierProvider>
        {CLARITY_ACTIF && (
          // Surtout pas id="clarity" : un élément HTML dont l'id est « clarity »
          // devient window.clarity pour le navigateur, et le code de Clarity,
          // qui appelle window.clarity(...), plantait sur cette balise sans rien
          // enregistrer (constaté le 30/09/2026 : aucune session pendant 4 h).
          <Script id="ms-clarity-init" strategy="lazyOnload">
            {`(function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);})(window,document,"clarity","script","${CLARITY_ID}");`}
          </Script>
        )}
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import BoutonWhatsApp from "@/components/BoutonWhatsApp";
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
        </PanierProvider>
      </body>
    </html>
  );
}

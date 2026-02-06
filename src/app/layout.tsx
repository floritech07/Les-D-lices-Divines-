import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Les Délices Divines - Restaurant Gastronomique Premium à Cotonou",
  description: "Découvrez Les Délices Divines, restaurant gastronomique premium à Cotonou. Cuisine raffinée, plats signatures et expérience divine. Commandez facilement via WhatsApp.",
  keywords: ["restaurant Cotonou", "gastronomie", "restaurant premium", "cuisine raffinée", "Les Délices Divines", "commande en ligne", "WhatsApp"],
  authors: [{ name: "Les Délices Divines" }],
  openGraph: {
    title: "Les Délices Divines - Quand la gastronomie devient divine",
    description: "L'excellence gastronomique à portée de main. Découvrez nos plats signatures et commandez simplement via WhatsApp.",
    type: "website",
    locale: "fr_FR",
    siteName: "Les Délices Divines"
  },
  twitter: {
    card: "summary_large_image",
    title: "Les Délices Divines - Restaurant Gastronomique Premium",
    description: "L'excellence gastronomique à portée de main. Commandez maintenant sur WhatsApp."
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}

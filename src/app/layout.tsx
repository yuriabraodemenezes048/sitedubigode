import type { Metadata, Viewport } from "next";
import { Fredoka, Nunito } from "next/font/google";
import { site } from "@/lib/site";
import { SmoothScroll } from "@/components/layout/smooth-scroll";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { CookieBanner } from "@/components/layout/cookie-banner";
import { WhatsappFab } from "@/components/layout/whatsapp-fab";
import "./globals.css";

const fredoka = Fredoka({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-fredoka",
  weight: ["400", "500", "600", "700"],
});

const nunito = Nunito({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-nunito",
  weight: ["400", "600", "700", "800", "900"],
});

export const viewport: Viewport = {
  themeColor: "#FFC02E",
  width: "device-width",
  initialScale: 1,
  colorScheme: "light",
};

// Em produção usa o domínio real; na Vercel (antes do domínio custom) usa a
// URL do deploy; localmente cai no site.url. Garante OG/canonical corretos.
const baseUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : site.url);

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: `${site.name} — Drinks que transformam qualquer rolê`,
    template: `%s · ${site.name}`,
  },
  description: site.description,
  applicationName: site.name,
  keywords: [
    "open bar",
    "bar para casamento",
    "drinks para eventos",
    "coquetéis autorais",
    "bartender para festa",
    "open bar Rio de Janeiro",
    "drinks du bigode",
  ],
  authors: [{ name: site.name }],
  creator: site.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: site.url,
    siteName: site.name,
    title: `${site.name} — Não servimos drinks. Criamos experiências.`,
    description: site.description,
    images: [
      {
        url: "/images/nossos-drinks.jpg",
        width: 1200,
        height: 630,
        alt: "Coquetéis autorais Drinks du Bigode",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — Não servimos drinks. Criamos experiências.`,
    description: site.description,
    images: ["/images/nossos-drinks.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  category: "food & beverage",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${site.url}/#business`,
  name: site.name,
  description: site.description,
  url: site.url,
  image: `${site.url}/images/nossos-drinks.jpg`,
  logo: `${site.url}/images/logo.jpg`,
  telephone: `+${site.contact.whatsapp}`,
  email: site.contact.email,
  priceRange: "$$$",
  areaServed: { "@type": "State", name: "Rio de Janeiro" },
  address: {
    "@type": "PostalAddress",
    addressLocality: site.city,
    addressRegion: site.region,
    addressCountry: site.country,
  },
  sameAs: [site.contact.instagram],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "214",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${fredoka.variable} ${nunito.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <a
          href="#conteudo"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-ink focus:px-5 focus:py-3 focus:text-sm focus:font-semibold focus:text-paper"
        >
          Pular para o conteúdo
        </a>
        <SmoothScroll>
          <Header />
          <main id="conteudo">{children}</main>
          <Footer />
        </SmoothScroll>
        <WhatsappFab />
        <CookieBanner />
      </body>
    </html>
  );
}

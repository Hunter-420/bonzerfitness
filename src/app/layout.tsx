import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { OwnerContactModal } from "@/components/ui/OwnerContactModal";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

const BASE_URL = "https://bonzerfitness.laganiforum.com";
const OG_IMAGE = "https://scontent.fktm8-1.fna.fbcdn.net/v/t39.30808-6/512687149_23904078959246301_6734344825210624971_n.jpg?stp=dst-jpg_tt6&cstp=mx552x829&ctp=s552x829&_nc_cat=101&ccb=1-7&_nc_sid=0b6b33&_nc_ohc=w2FUPXTJ0m0Q7kNvwHgp-xQ&_nc_oc=Adr0pDCfzu8CNVsY1m";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Best Gym in Pokhara | Bonzer Fitness & Health Club",
    template: "%s | Bonzer Fitness & Health Club",
  },
  description:
    "Bonzer Fitness & Health Club — the best gym in Pokhara at Hospital Chowk. Modern equipment, certified personal trainers, affordable membership plans, and a motivating community.",
  keywords: [
    "best gym in Pokhara",
    "gym in Pokhara",
    "fitness center Pokhara",
    "Bonzer Fitness",
    "personal trainer Pokhara",
    "gym membership Pokhara",
    "workout gym Pokhara",
    "fitness club Pokhara",
    "Hospital Chowk gym",
    "top rated gym Pokhara",
  ],
  authors: [{ name: "Bonzer Fitness & Health Club" }],
  creator: "Bonzer Fitness & Health Club",
  publisher: "Bonzer Fitness & Health Club",
  alternates: {
    canonical: BASE_URL,
  },
  openGraph: {
    title: "Best Gym in Pokhara | Bonzer Fitness & Health Club",
    description:
      "Bonzer Fitness & Health Club — modern gym in Pokhara with expert trainers, premium equipment, flexible memberships. Rated 4.9/5 by 100+ members.",
    url: BASE_URL,
    siteName: "Bonzer Fitness & Health Club",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Bonzer Fitness & Health Club – Best Gym in Pokhara",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Gym in Pokhara | Bonzer Fitness & Health Club",
    description:
      "Modern gym with certified trainers, premium equipment & affordable plans. Rated 4.9★ in Pokhara.",
    images: [OG_IMAGE],
    site: "@bonzerfitness",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "",
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": ["HealthClub", "LocalBusiness"],
  "@id": `${BASE_URL}/#gym`,
  name: "Bonzer Fitness & Health Club",
  description:
    "Bonzer Fitness & Health Club is the best gym in Pokhara, offering certified personal training, modern cardio and strength equipment, flexible memberships, and a welcoming fitness community.",
  url: BASE_URL,
  telephone: "+977-9856038995",
  email: "info@bonzerfitness.com.np",
  image: OG_IMAGE,
  logo: `${BASE_URL}/logo.png`,
  priceRange: "Rs. 3,500 – Rs. 32,000",
  currenciesAccepted: "NPR",
  paymentAccepted: "Cash, Mobile Payment",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Hospital Chowk",
    addressLocality: "Pokhara",
    addressRegion: "Gandaki Province",
    postalCode: "33700",
    addressCountry: "NP",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 28.2145403,
    longitude: 84.0013674,
  },
  hasMap: "https://www.google.com/maps/place/Bonzer+Fitness+%26+Health+Club/@28.2145403,83.9987871,17z",
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "05:30",
      closes: "20:00",
    },
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "100",
    bestRating: "5",
    worstRating: "1",
  },
  sameAs: [
    "https://www.facebook.com/BonzerFitness",
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${BASE_URL}/#website`,
  url: BASE_URL,
  name: "Bonzer Fitness & Health Club",
  description: "Best gym in Pokhara offering modern fitness facilities and expert personal training.",
  publisher: {
    "@id": `${BASE_URL}/#gym`,
  },
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${BASE_URL}/blog?q={search_term_string}`,
    },
    "query-input": "required name=search_term_string",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased scroll-smooth`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://images.unsplash.com" />
        <link rel="preconnect" href="https://scontent.fktm8-1.fna.fbcdn.net" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://maps.google.com" />
      </head>
      <body className="min-h-full flex flex-col bg-white dark:bg-brand-charcoal text-gray-900 dark:text-gray-100">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <OwnerContactModal />
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://bonzerfitness.laganiforum.com"),
  title: {
    default: "Bonzer Fitness & Health Club | Best Gym in Pokhara",
    template: "%s | Bonzer Fitness & Health Club",
  },
  description: "Join Bonzer Fitness & Health Club in Pokhara, Nepal. Experience world-class facilities, expert personal training, and a supportive community.",
  keywords: ["gym in pokhara", "fitness club pokhara", "best gym pokhara", "personal training pokhara", "bonzer fitness"],
  openGraph: {
    title: "Bonzer Fitness & Health Club",
    description: "Join Bonzer Fitness & Health Club in Pokhara, Nepal. Experience world-class facilities, expert personal training, and a supportive community.",
    url: "https://bonzerfitness.laganiforum.com",
    siteName: "Bonzer Fitness & Health Club",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://scontent.fktm8-1.fna.fbcdn.net/v/t39.30808-6/512687149_23904078959246301_6734344825210624971_n.jpg?stp=dst-jpg_tt6&cstp=mx552x829&ctp=s552x829&_nc_cat=101&ccb=1-7&_nc_sid=0b6b33&_nc_ohc=w2FUPXTJ0m0Q7kNvwHgp-xQ&_nc_oc=Adr0pDCfzu8CNVsY1m",
        width: 1200,
        height: 630,
        alt: "Bonzer Fitness & Health Club",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bonzer Fitness & Health Club",
    description: "Join Bonzer Fitness & Health Club in Pokhara, Nepal.",
    images: ["https://scontent.fktm8-1.fna.fbcdn.net/v/t39.30808-6/512687149_23904078959246301_6734344825210624971_n.jpg?stp=dst-jpg_tt6&cstp=mx552x829&ctp=s552x829&_nc_cat=101&ccb=1-7&_nc_sid=0b6b33&_nc_ohc=w2FUPXTJ0m0Q7kNvwHgp-xQ&_nc_oc=Adr0pDCfzu8CNVsY1m"],
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased scroll-smooth`}>
      <body className="min-h-full flex flex-col bg-white dark:bg-brand-charcoal text-gray-900 dark:text-gray-100">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": ["GymOrBuilding", "LocalBusiness", "HealthAndBeautyBusiness"],
              "name": "Bonzer Fitness & Health Club",
              "image": "https://bonzerfitness.laganiforum.com/og-image.jpg",
              "@id": "https://bonzerfitness.laganiforum.com",
              "url": "https://bonzerfitness.laganiforum.com",
              "telephone": "+977 985-6038995",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Hospital Chowk",
                "addressLocality": "Pokhara",
                "postalCode": "33700",
                "addressCountry": "NP"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 28.2145403,
                "longitude": 84.0013674
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.9",
                "reviewCount": "77"
              },
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                  "Sunday",
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday"
                ],
                "opens": "05:30",
                "closes": "20:00"
              }
            })
          }}
        />
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

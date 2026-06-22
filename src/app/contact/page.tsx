import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Bonzer Fitness & Health Club | Get in Touch – Pokhara Gym",
  description:
    "Contact Bonzer Fitness & Health Club at Hospital Chowk, Pokhara. Phone: +977-9856038995. Open daily 5:30 AM – 8:00 PM. Get directions, WhatsApp us, or visit us today.",
  keywords: [
    "contact Bonzer Fitness Pokhara",
    "gym contact Pokhara",
    "fitness center contact Pokhara",
    "gym phone number Pokhara",
    "gym opening hours Pokhara",
    "gym address Pokhara Hospital Chowk",
    "Bonzer Fitness location",
  ],
  alternates: {
    canonical: "https://bonzerfitness.laganiforum.com/contact",
  },
  openGraph: {
    title: "Contact Bonzer Fitness & Health Club | Pokhara",
    description:
      "Visit us at Hospital Chowk, Pokhara or call +977-9856038995. Open daily 5:30 AM – 8:00 PM.",
    url: "https://bonzerfitness.laganiforum.com/contact",
  },
  twitter: {
    card: "summary",
    title: "Contact Bonzer Fitness & Health Club | Pokhara",
    description: "Hospital Chowk, Pokhara | +977-9856038995 | Open 5:30 AM – 8:00 PM daily",
  },
};

const contactSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://bonzerfitness.laganiforum.com/#gym",
  name: "Bonzer Fitness & Health Club",
  telephone: "+977-9856038995",
  email: "info@bonzerfitness.com.np",
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
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "05:30",
      closes: "20:00",
    },
  ],
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+977-9856038995",
    contactType: "customer service",
    areaServed: "NP",
    availableLanguage: ["English", "Nepali"],
  },
  hasMap: "https://www.google.com/maps/place/Bonzer+Fitness+%26+Health+Club/@28.2145403,83.9987871,17z",
};

export default function ContactPage() {
  return (
    <div className="py-16 md:py-24 bg-brand-light dark:bg-gray-900 min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white mb-6 uppercase tracking-tight">
            Contact <span className="text-brand-teal">Bonzer Fitness</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            We&apos;d love to hear from you. Visit us at Hospital Chowk, Pokhara, give us a call, or send us a WhatsApp message — we&apos;re here to help you start your fitness journey.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Details */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Get In Touch</h2>

            <address className="not-italic space-y-6">
              {/* Address */}
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <svg className="h-6 w-6 text-brand-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white">Location</h3>
                  <a
                    href="https://www.google.com/maps/place/Bonzer+Fitness+%26+Health+Club/@28.2145403,83.9987871,17z"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 dark:text-gray-400 mt-1 hover:text-brand-teal transition-colors"
                    aria-label="Open Bonzer Fitness location in Google Maps"
                  >
                    Hospital Chowk, Pokhara 33700, Gandaki Province, Nepal
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <svg className="h-6 w-6 text-brand-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white">Phone</h3>
                  <a href="tel:+9779856038995" className="text-gray-600 dark:text-gray-400 mt-1 hover:text-brand-teal transition-colors">
                    +977-9856038995
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <svg className="h-6 w-6 text-brand-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white">Email</h3>
                  <a href="mailto:info@bonzerfitness.com.np" className="text-gray-600 dark:text-gray-400 mt-1 hover:text-brand-teal transition-colors">
                    info@bonzerfitness.com.np
                  </a>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <svg className="h-6 w-6 text-brand-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white">Opening Hours</h3>
                  <p className="text-gray-600 dark:text-gray-400 mt-1">Monday – Sunday: <strong>5:30 AM – 8:00 PM</strong></p>
                  <p className="text-sm text-gray-500 dark:text-gray-500 mt-1">Open every day including public holidays</p>
                </div>
              </div>
            </address>

            <div className="mt-10">
              <Button
                href="https://api.whatsapp.com/send?phone=9779856038995&text=Hello!%20I%20would%20like%20to%20know%20more%20about%20Bonzer%20Fitness."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex justify-center items-center"
                aria-label="Contact Bonzer Fitness on WhatsApp"
              >
                <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                Message Us on WhatsApp
              </Button>
            </div>
          </div>

          {/* Map Embed */}
          <div className="flex flex-col h-full">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Find Us on the Map</h2>
            <div className="bg-gray-200 dark:bg-gray-800 rounded-2xl overflow-hidden shadow-xl flex-grow min-h-[350px]">
              <iframe
                src="https://maps.google.com/maps?q=28.2145403,84.0013674&t=&z=17&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "350px" }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Bonzer Fitness & Health Club location at Hospital Chowk, Pokhara"
                aria-label="Google Maps showing Bonzer Fitness & Health Club at Hospital Chowk, Pokhara"
              />
            </div>
            <div className="mt-6 flex flex-col sm:flex-row gap-4">
              <Button
                href="https://www.google.com/maps/dir//28.2145403,84.0013674"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex justify-center items-center"
                aria-label="Get directions to Bonzer Fitness & Health Club in Pokhara"
              >
                <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Get Directions
              </Button>
              <Button href="/membership" variant="secondary" className="flex-1">
                View Memberships
              </Button>
            </div>
          </div>
        </div>

        {/* Internal Links */}
        <div className="mt-12 text-center text-gray-600 dark:text-gray-400">
          <p>
            Have questions?{" "}
            <Link href="/faq" className="text-brand-teal hover:underline font-semibold">Check our FAQ</Link>
            {" "}or{" "}
            <Link href="/membership" className="text-brand-teal hover:underline font-semibold">view membership plans</Link>.
          </p>
        </div>

      </div>
    </div>
  );
}

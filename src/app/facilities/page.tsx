import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Gym Facilities in Pokhara | Cardio, Strength & More – Bonzer Fitness",
  description:
    "Explore the modern gym facilities at Bonzer Fitness & Health Club, Pokhara. Dedicated strength training area, premium cardio zone, free parking, and clean changing rooms.",
  keywords: [
    "gym facilities in Pokhara",
    "modern gym facilities Pokhara",
    "cardio area Pokhara gym",
    "strength training area Pokhara",
    "locker room gym Pokhara",
    "spacious gym Pokhara",
    "premium gym equipment Pokhara",
    "Bonzer Fitness facilities",
  ],
  alternates: {
    canonical: "https://bonzerfitness.laganiforum.com/facilities",
  },
  openGraph: {
    title: "Gym Facilities in Pokhara | Bonzer Fitness & Health Club",
    description:
      "9,000 sq.ft of premium fitness space in Pokhara — strength area, cardio zone, free parking, and clean changing rooms.",
    url: "https://bonzerfitness.laganiforum.com/facilities",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gym Facilities in Pokhara | Bonzer Fitness",
    description: "9,000 sq.ft of premium fitness space — strength, cardio, parking & more.",
  },
};

const facilities = [
  {
    title: "Strength Training Area",
    description:
      "Our dedicated strength training floor is fully equipped for serious muscle building and strength development. With power racks, squat stands, Smith machines, an extensive dumbbell set up to 50kg, barbells, weight plates, and adjustable benches — everything you need to build real strength is right here.",
    imageUrl: "https://scontent.fktm8-1.fna.fbcdn.net/v/t1.6435-9/58629896_2195397353874441_3831453154105360384_n.jpg?stp=dst-jpg_tt6&cstp=mx960x640&ctp=s960x640&_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_ohc=jM1ytJTiZjUQ7kNvwEudqgl&_nc_oc=AdrJ29dv6UfgYkuB4Sz4ILXiIcVHmtDPmiT19jYJM1rZSR6e6hxueJSxybn0G3MwCrGBWBlh8UsqzZDbJzN1UGib&_nc_zt=23&_nc_ht=scontent.fktm8-1.fna&_nc_gid=c3t9MIR2FkIBRCXgCYOk2A&_nc_ss=7b2a8&oh=00_Af9C77ydtE8hwft39vUjQQs8O652wCIMjrROZwN-RyR53A&oe=6A5FB783",
    imageAlt: "Strength training area with free weights and power racks at Bonzer Fitness gym Pokhara",
    features: ["Dumbbells up to 50kg", "Power racks & squat stands", "Smith machines", "Barbells & weight plates", "Adjustable benches"],
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
      </svg>
    ),
  },
  {
    title: "Cardio Zone",
    description:
      "Our premium cardio zone features modern treadmills, elliptical cross-trainers, stationary bikes, rowing machines, and stair climbers. Whether you're warming up, burning fat, or building cardiovascular endurance — this dedicated cardio area provides everything you need for an effective, high-energy session.",
    imageUrl: "https://scontent.fktm8-1.fna.fbcdn.net/v/t1.6435-9/58755016_2195397333874443_6546090502012272640_n.jpg?stp=dst-jpg_tt6&cstp=mx960x640&ctp=s960x640&_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_ohc=q-69PJCcf9sQ7kNvwE2mj1L&_nc_oc=AdorRYN_OTjo3gNLcshWfJDzqyEO9DT55ZVd-DTKo32v7S9AcVCk7eHCIEseHEbXD6u7fTg8Fba_YnKwAwN8Abgt&_nc_zt=23&_nc_ht=scontent.fktm8-1.fna&_nc_gid=MtJE5_P624FxIUHYJXi5vg&_nc_ss=7b2a8&oh=00_Af_Av9LZvTZvgMUmnc82NpqStjbINEd72FX1Y_i7Dp8rrQ&oe=6A5FBF3D",
    imageAlt: "Cardio zone with treadmills and elliptical machines at Bonzer Fitness Health Club Pokhara",
    features: ["Modern treadmills", "Elliptical cross-trainers", "Stationary bikes", "Rowing machines", "Stair climbers"],
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
  {
    title: "Free Parking",
    description:
      "We understand that convenience matters. Bonzer Fitness & Health Club provides spacious, secure, and well-lit free parking right outside the gym for all members. No more circling the block — just park and train.",
    imageUrl: "https://images.unsplash.com/photo-1506521781263-d8422e82f27a?q=80&w=1470&auto=format&fit=crop",
    imageAlt: "Free spacious parking area available for all Bonzer Fitness gym members in Pokhara",
    features: ["Free for all members", "Spacious & secure", "Bike parking available", "Well-lit at night"],
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2zm7 4h-3v10h2V13h1a3 3 0 000-6z" />
      </svg>
    ),
  },
  {
    title: "Changing Rooms & Lockers",
    description:
      "Our clean, spacious changing rooms provide a comfortable and hygienic space to prepare before and freshen up after your workout. With secure lockers and separate male and female facilities, we maintain the highest standards of hygiene and cleanliness.",
    imageUrl: "https://images.unsplash.com/photo-1583416750470-965b2707b355?q=80&w=1470&auto=format&fit=crop",
    imageAlt: "Clean and hygienic changing rooms with secure lockers at Bonzer Fitness Pokhara",
    features: ["Secure lockers", "Separate male/female rooms", "Hot showers", "Hygienic & daily sanitised"],
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
  },
];

export default function FacilitiesPage() {
  return (
    <div className="min-h-screen bg-brand-light dark:bg-[#1A1D20]">
      {/* Hero Banner */}
      <div className="relative py-28 bg-brand-charcoal overflow-hidden">
        <div className="absolute inset-0 opacity-10" aria-hidden="true">
          <div className="absolute top-0 left-0 w-96 h-96 rounded-full bg-brand-teal blur-3xl -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-brand-teal blur-3xl translate-x-1/2 translate-y-1/2" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block bg-brand-teal/20 text-brand-teal text-sm font-bold px-4 py-1.5 rounded-full uppercase tracking-widest mb-5">
            World-Class Facilities
          </span>
          <h1 className="text-5xl md:text-6xl font-black text-white mb-6 tracking-tight">
            Gym Facilities <span className="text-brand-teal">in Pokhara</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            9,000 sq. ft. of premium fitness space at Hospital Chowk, maintained to the highest standards of hygiene and safety — everything you need to train effectively.
          </p>
        </div>
      </div>

      {/* Facilities Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <section aria-label="Gym facilities list">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-4">
            What&apos;s Included at Bonzer Fitness
          </h2>
          <p className="text-center text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-16">
            Every membership gives you full access to all of our premium facilities — no extra charges.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {facilities.map((facility) => (
              <article key={facility.title} className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow">
                <div className="relative h-56 w-full">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={facility.imageUrl}
                    alt={facility.imageAlt}
                    loading="lazy"
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-brand-teal">{facility.icon}</span>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">{facility.title}</h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">{facility.description}</p>
                  <ul className="space-y-1" aria-label={`${facility.title} features`}>
                    {facility.features.map((f) => (
                      <li key={f} className="text-sm text-gray-500 dark:text-gray-400 flex items-center gap-2">
                        <svg className="h-4 w-4 text-brand-teal flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* CTA + Internal Links */}
        <div className="mt-16 text-center space-y-4">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Ready to Experience It?</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
            Check our <Link href="/membership" className="text-brand-teal hover:underline font-semibold">membership plans</Link>, view our{" "}
            <Link href="/gallery" className="text-brand-teal hover:underline font-semibold">photo gallery</Link>, or{" "}
            <Link href="/equipment" className="text-brand-teal hover:underline font-semibold">see our full equipment list</Link>.
          </p>
          <div className="flex justify-center gap-4 flex-wrap pt-4">
            <Button href="/membership" size="lg">Join Now</Button>
            <Button href="/contact" variant="secondary" size="lg">Contact Us</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

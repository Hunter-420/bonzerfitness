import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gym Membership in Pokhara | Affordable Plans – Bonzer Fitness",
  description:
    "Explore affordable gym membership plans at Bonzer Fitness & Health Club, Pokhara. Monthly, quarterly, and yearly packages with no hidden fees. Join today!",
  keywords: [
    "gym membership in Pokhara",
    "affordable gym membership Pokhara",
    "monthly gym membership Pokhara",
    "gym fees Pokhara",
    "gym packages Pokhara",
    "membership plans Bonzer Fitness",
    "join a gym Pokhara",
    "Bonzer Fitness membership",
  ],
  alternates: {
    canonical: "https://bonzerfitness.laganiforum.com/membership",
  },
  openGraph: {
    title: "Gym Membership Plans in Pokhara | Bonzer Fitness & Health Club",
    description:
      "Monthly, quarterly and yearly gym memberships starting from Rs. 3,500. No hidden fees. Join Bonzer Fitness today.",
    url: "https://bonzerfitness.laganiforum.com/membership",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gym Membership in Pokhara | Bonzer Fitness",
    description: "Flexible membership plans from Rs. 3,500/month. No hidden fees. Join Bonzer Fitness & Health Club.",
  },
};

const membershipSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Bonzer Fitness Gym Membership",
  description: "Flexible gym membership plans at Bonzer Fitness & Health Club, Pokhara",
  brand: {
    "@type": "Brand",
    name: "Bonzer Fitness & Health Club",
  },
  offers: [
    {
      "@type": "Offer",
      name: "Monthly Membership",
      price: "3500",
      priceCurrency: "NPR",
      availability: "https://schema.org/InStock",
      url: "https://bonzerfitness.laganiforum.com/membership",
    },
    {
      "@type": "Offer",
      name: "Quarterly Membership",
      price: "9500",
      priceCurrency: "NPR",
      availability: "https://schema.org/InStock",
      url: "https://bonzerfitness.laganiforum.com/membership",
    },
    {
      "@type": "Offer",
      name: "Yearly Membership",
      price: "32000",
      priceCurrency: "NPR",
      availability: "https://schema.org/InStock",
      url: "https://bonzerfitness.laganiforum.com/membership",
    },
  ],
};

const plans = [
  {
    name: "Monthly",
    price: "Rs. 3,500",
    period: "/mo",
    highlight: false,
    features: [
      "Full gym access (5:30 AM – 8:00 PM)",
      "Cardio & strength areas",
      "Secure locker room access",
      "General trainer guidance",
      "Free parking",
    ],
    waLink: "https://api.whatsapp.com/send?phone=9779856038995&text=Hello!%20I%20am%20interested%20in%20the%20Monthly%20Membership%20plan%20at%20Bonzer%20Fitness.",
  },
  {
    name: "Quarterly",
    price: "Rs. 9,500",
    period: "/3 mo",
    highlight: true,
    badge: "Most Popular",
    features: [
      "All Monthly benefits",
      "1 Free Personal Training Session",
      "Diet & nutrition consultation",
      "Save Rs. 1,000 vs monthly",
      "Priority machine access",
    ],
    waLink: "https://api.whatsapp.com/send?phone=9779856038995&text=Hello!%20I%20am%20interested%20in%20the%20Quarterly%20Membership%20plan%20at%20Bonzer%20Fitness.",
  },
  {
    name: "Yearly",
    price: "Rs. 32,000",
    period: "/yr",
    highlight: false,
    features: [
      "All Quarterly benefits",
      "2 Months Free (Save Rs. 10,000)",
      "Exclusive Bonzer Merchandise",
      "4 Personal Training Sessions",
      "Dedicated trainer support",
    ],
    waLink: "https://api.whatsapp.com/send?phone=9779856038995&text=Hello!%20I%20am%20interested%20in%20the%20Yearly%20Membership%20plan%20at%20Bonzer%20Fitness.",
  },
];

export default function MembershipPage() {
  return (
    <div className="py-16 md:py-24 bg-brand-light dark:bg-gray-900 min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(membershipSchema) }}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white mb-6 uppercase tracking-tight">
            Gym Membership <span className="text-brand-teal">in Pokhara</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Affordable gym membership plans with no hidden fees. Choose the plan that fits your fitness journey and get access to Pokhara&apos;s best gym facilities, expert trainers, and a motivating community.
          </p>
        </div>

        {/* Membership Plans */}
        <section aria-label="Membership pricing plans">
          <h2 className="sr-only">Membership Pricing Plans</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`rounded-2xl shadow-lg p-8 relative ${
                  plan.highlight
                    ? "bg-brand-charcoal text-white shadow-xl md:scale-105"
                    : "bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700"
                }`}
              >
                {plan.badge && (
                  <div className="absolute top-0 right-0 bg-brand-teal text-white text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-2xl uppercase tracking-wider">
                    {plan.badge}
                  </div>
                )}
                <h3 className={`text-2xl font-bold mb-4 ${plan.highlight ? "text-white" : "text-gray-900 dark:text-white"}`}>
                  {plan.name} Membership
                </h3>
                <p className="text-4xl font-black text-brand-teal mb-6">
                  {plan.price}
                  <span className={`text-lg font-normal ${plan.highlight ? "text-gray-400" : "text-gray-500 dark:text-gray-400"}`}>
                    {plan.period}
                  </span>
                </p>
                <ul className="space-y-3 mb-8" aria-label={`${plan.name} plan features`}>
                  {plan.features.map((feature) => (
                    <li key={feature} className={`flex items-center ${plan.highlight ? "text-gray-200" : "text-gray-700 dark:text-gray-300"}`}>
                      <svg className="h-5 w-5 text-brand-teal mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button
                  href={plan.waLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant={plan.highlight ? "primary" : "primary"}
                  className="w-full"
                  aria-label={`Join ${plan.name} membership at Bonzer Fitness`}
                >
                  Join Now – {plan.name}
                </Button>
              </div>
            ))}
          </div>
        </section>

        {/* No Hidden Fees */}
        <div className="mt-16 bg-white dark:bg-gray-800 rounded-2xl p-8 text-center border border-gray-100 dark:border-gray-700">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">No Hidden Fees. Ever.</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-6">
            The price you see is the price you pay. There are no joining fees, no cancellation fees, and no surprises. Just straightforward, affordable gym membership in Pokhara.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button href="/faq" variant="secondary">Read Membership FAQ</Button>
            <Button href="/contact">Contact Us</Button>
          </div>
        </div>

        {/* Internal Links */}
        <div className="mt-12 text-center text-gray-600 dark:text-gray-400">
          <p>
            Want to see what&apos;s included?{" "}
            <Link href="/facilities" className="text-brand-teal hover:underline font-semibold">Explore our facilities</Link>
            {" "}&amp;{" "}
            <Link href="/personal-training" className="text-brand-teal hover:underline font-semibold">learn about personal training</Link>.
          </p>
        </div>

      </div>
    </div>
  );
}

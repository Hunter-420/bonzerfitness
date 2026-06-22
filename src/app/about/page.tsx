import React from "react";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "About Bonzer Fitness & Health Club | Trusted Gym in Pokhara",
  description:
    "Discover the story behind Bonzer Fitness & Health Club — Pokhara's most trusted and professional fitness center. Our mission, certified trainers, and welcoming community await you.",
  keywords: [
    "about Bonzer Fitness",
    "fitness club in Pokhara",
    "trusted gym Pokhara",
    "professional fitness center Pokhara",
    "established gym Pokhara",
    "fitness community Pokhara",
    "certified trainers Pokhara",
  ],
  alternates: {
    canonical: "https://bonzerfitness.laganiforum.com/about",
  },
  openGraph: {
    title: "About Bonzer Fitness & Health Club | Trusted Gym in Pokhara",
    description:
      "Meet the team and story behind Pokhara's most trusted gym. Modern facilities, certified trainers, and a supportive fitness community.",
    url: "https://bonzerfitness.laganiforum.com/about",
    images: [
      {
        url: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=1470&auto=format&fit=crop",
        width: 1200,
        height: 630,
        alt: "Bonzer Fitness & Health Club team and gym environment in Pokhara",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Bonzer Fitness & Health Club",
    description: "Pokhara's most trusted gym — modern facilities, expert trainers, welcoming community.",
  },
};

export default function AboutPage() {
  return (
    <div className="py-16 md:py-24 bg-white dark:bg-brand-charcoal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white mb-6 uppercase tracking-tight">
            About Bonzer Fitness <span className="text-brand-teal">&amp; Health Club</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            We are Pokhara&apos;s most trusted professional fitness center — dedicated to helping every member achieve their health and strength goals in a supportive, ego-free environment.
          </p>
        </div>

        {/* Mission Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
          <div className="relative h-96 rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=1470&auto=format&fit=crop"
              alt="Members training at Bonzer Fitness & Health Club Pokhara"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Our Mission</h2>
            <p className="text-gray-700 dark:text-gray-300 text-lg mb-6 leading-relaxed">
              At <strong>Bonzer Fitness &amp; Health Club</strong>, our mission is to empower individuals in Pokhara to lead healthier, stronger, and more confident lives. We believe that fitness is for everyone — regardless of age, experience, or body type.
            </p>
            <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
              Located at Hospital Chowk, Pokhara, we provide a welcoming, ego-free environment equipped with premium gym equipment, expert certified trainers, and a community that genuinely cares about your personal fitness journey.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button href="/membership">View Membership Plans</Button>
              <Button href="/contact" variant="secondary">Contact Us</Button>
            </div>
          </div>
        </div>

        {/* Why We Stand Out */}
        <div className="bg-brand-light dark:bg-gray-900 rounded-3xl p-8 md:p-12 mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-4">
            Why Bonzer Fitness Stands Out
          </h2>
          <p className="text-center text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-12">
            As the leading fitness club in Pokhara, here is what makes our gym the top choice for beginners and experienced athletes alike.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="bg-brand-teal text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold" aria-hidden="true">1</div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Supportive Community</h3>
              <p className="text-gray-600 dark:text-gray-400">Leave your ego at the door. Our fitness community is built on encouragement, respect, and mutual motivation.</p>
            </div>
            <div>
              <div className="bg-brand-teal text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold" aria-hidden="true">2</div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Certified Expert Trainers</h3>
              <p className="text-gray-600 dark:text-gray-400">Our certified personal trainers guide you with proper form, personalized workout plans, and consistent motivation.</p>
            </div>
            <div>
              <div className="bg-brand-teal text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold" aria-hidden="true">3</div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Premium Modern Equipment</h3>
              <p className="text-gray-600 dark:text-gray-400">We invest in top-tier imported gym machinery — from free weights to cardio equipment — so you can train without compromise.</p>
            </div>
          </div>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center mb-16">
          {[
            { value: "100+", label: "Happy Members" },
            { value: "4.9★", label: "Google Rating" },
            { value: "5+", label: "Years in Pokhara" },
            { value: "9,000", label: "Sq. Ft. of Space" },
          ].map((stat) => (
            <div key={stat.label} className="bg-brand-light dark:bg-gray-900 rounded-2xl p-6">
              <div className="text-4xl font-black text-brand-teal mb-2">{stat.value}</div>
              <div className="text-gray-600 dark:text-gray-400 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Internal Links CTA */}
        <div className="text-center space-y-4">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Ready to Get Started?</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
            Explore our <Link href="/facilities" className="text-brand-teal hover:underline font-semibold">world-class facilities</Link>, check out our <Link href="/membership" className="text-brand-teal hover:underline font-semibold">membership plans</Link>, or learn about our <Link href="/personal-training" className="text-brand-teal hover:underline font-semibold">personal training programs</Link>.
          </p>
          <div className="flex justify-center gap-4 flex-wrap pt-4">
            <Button href="/membership" size="lg">Join Now</Button>
            <Button href="/reviews" variant="secondary" size="lg">Read Member Reviews</Button>
          </div>
        </div>

      </div>
    </div>
  );
}

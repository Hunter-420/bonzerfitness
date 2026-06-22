import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Personal Trainer in Pokhara | One-on-One Training – Bonzer Fitness",
  description:
    "Work with certified personal trainers at Bonzer Fitness & Health Club, Pokhara. Custom workout plans, weight loss coaching, muscle building, and one-on-one guidance.",
  keywords: [
    "personal trainer in Pokhara",
    "personal fitness trainer Pokhara",
    "weight loss coach Pokhara",
    "muscle building coach Pokhara",
    "one-on-one training Pokhara",
    "gym trainer Pokhara",
    "certified personal trainer Pokhara",
    "fitness coach Pokhara",
  ],
  alternates: {
    canonical: "https://bonzerfitness.laganiforum.com/personal-training",
  },
  openGraph: {
    title: "Personal Trainer in Pokhara | Bonzer Fitness & Health Club",
    description:
      "Certified personal trainers in Pokhara offering customized workout plans, weight loss coaching, and muscle-building programs.",
    url: "https://bonzerfitness.laganiforum.com/personal-training",
  },
  twitter: {
    card: "summary_large_image",
    title: "Personal Trainer in Pokhara | Bonzer Fitness",
    description: "Certified personal trainers offering custom plans, weight loss coaching & one-on-one training in Pokhara.",
  },
};

const benefits = [
  {
    title: "Customized Workout Plans",
    description:
      "Every body is different. Your personal trainer will design a workout program specifically tailored to your body type, goals, fitness level, and schedule — whether you want to lose weight, build muscle, or improve endurance.",
  },
  {
    title: "Proper Form & Injury Prevention",
    description:
      "One of the biggest risks for beginners and experienced athletes alike is incorrect technique. Your trainer will teach you the safest, most effective form for every exercise, dramatically reducing your risk of injury.",
  },
  {
    title: "Accountability & Motivation",
    description:
      "Consistency is the key to results. Having a dedicated trainer means you have someone holding you accountable, pushing you past mental barriers, and celebrating your milestones with you.",
  },
  {
    title: "Nutrition & Diet Guidance",
    description:
      "Exercise alone isn't enough. Our trainers provide basic nutrition advice and diet planning to complement your training, helping you fuel your workouts and recover faster.",
  },
];

export default function PersonalTrainingPage() {
  return (
    <div className="py-16 md:py-24 bg-white dark:bg-brand-charcoal min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white mb-6 uppercase tracking-tight">
            Personal Trainer <span className="text-brand-teal">in Pokhara</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Accelerate your results with certified personal training at Bonzer Fitness &amp; Health Club. Whether your goal is weight loss, muscle building, or general fitness — our expert trainers deliver real, measurable results.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-20">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
              Why Choose a Personal Trainer?
            </h2>
            <div className="space-y-8">
              {benefits.map((benefit) => (
                <div key={benefit.title} className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <svg className="h-6 w-6 text-brand-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{benefit.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Button href="/contact" size="lg" aria-label="Book a free personal training consultation">
                Book a Free Consultation
              </Button>
              <Button href="/membership" variant="secondary" size="lg">
                View Membership Plans
              </Button>
            </div>
          </div>
          <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=1470&auto=format&fit=crop"
              alt="Certified personal trainer coaching a client at Bonzer Fitness gym in Pokhara"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>

        {/* Who It's For */}
        <div className="bg-brand-light dark:bg-gray-900 rounded-3xl p-8 md:p-12 mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-4">
            Who Is Personal Training For?
          </h2>
          <p className="text-center text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-10">
            Personal training at Bonzer Fitness in Pokhara is suitable for all fitness levels.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "Complete Beginners", desc: "New to the gym? A personal trainer will safely introduce you to equipment and create a beginner-friendly workout plan." },
              { title: "Weight Loss Goals", desc: "Struggling to lose weight? Our weight loss coach will design a fat-burning program combining cardio and strength training." },
              { title: "Muscle Building", desc: "Want to build muscle? Our strength and hypertrophy specialists will design a progressive overload program for maximum gains." },
            ].map((item) => (
              <div key={item.title} className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{item.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Internal Links */}
        <div className="text-center text-gray-600 dark:text-gray-400">
          <p>
            Explore our{" "}
            <Link href="/facilities" className="text-brand-teal hover:underline font-semibold">gym facilities</Link>
            , check our{" "}
            <Link href="/membership" className="text-brand-teal hover:underline font-semibold">membership prices</Link>
            , or{" "}
            <Link href="/reviews" className="text-brand-teal hover:underline font-semibold">read what members say</Link>.
          </p>
        </div>

      </div>
    </div>
  );
}

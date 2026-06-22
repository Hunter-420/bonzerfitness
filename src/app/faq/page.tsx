import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gym FAQ Pokhara | Common Questions – Bonzer Fitness & Health Club",
  description:
    "Answers to frequently asked questions about Bonzer Fitness & Health Club in Pokhara. Membership costs, opening hours, personal training, trial passes, and more.",
  keywords: [
    "gym FAQ Pokhara",
    "Bonzer Fitness questions",
    "beginner gym questions Pokhara",
    "gym membership FAQ",
    "fitness questions Pokhara",
    "workout questions gym",
    "gym trial pass Pokhara",
  ],
  alternates: {
    canonical: "https://bonzerfitness.laganiforum.com/faq",
  },
  openGraph: {
    title: "Gym FAQ Pokhara | Bonzer Fitness & Health Club",
    description: "Got questions about our gym? Find answers on hours, membership, personal training, trial passes, and more.",
    url: "https://bonzerfitness.laganiforum.com/faq",
  },
  twitter: {
    card: "summary",
    title: "Gym FAQ | Bonzer Fitness Pokhara",
    description: "Answers to common questions about gym membership, opening hours, personal training and more.",
  },
};

const faqs = [
  {
    question: "What are Bonzer Fitness opening hours?",
    answer: "Bonzer Fitness & Health Club is open every day from 5:30 AM to 8:00 PM, including weekends and public holidays. We want to ensure you can always fit a workout into your schedule.",
  },
  {
    question: "How much does a gym membership cost in Pokhara at Bonzer Fitness?",
    answer: "Our gym membership plans start at Rs. 3,500 per month. We also offer a quarterly plan at Rs. 9,500 (3 months) and an annual plan at Rs. 32,000 (which saves you 2 months of fees). There are no joining fees or hidden charges.",
  },
  {
    question: "Do you offer personal training in Pokhara?",
    answer: "Yes! We have certified personal trainers available for one-on-one sessions. You can book individual personal training sessions or get personal training included in our quarterly and yearly membership packages. Our trainers specialize in weight loss, muscle building, and beginner fitness.",
  },
  {
    question: "Is there a free trial pass available?",
    answer: "Yes, we offer a 1-day free trial pass for local residents who want to experience the gym before committing to a membership. Simply bring a valid ID to the front desk at Hospital Chowk, Pokhara.",
  },
  {
    question: "Do you have locker and changing room facilities?",
    answer: "Yes. Bonzer Fitness provides secure lockers and clean, separate changing rooms for male and female members. Lockers are available for use during your workout session.",
  },
  {
    question: "Is Bonzer Fitness suitable for beginners?",
    answer: "Absolutely. Bonzer Fitness & Health Club is one of the most beginner-friendly gyms in Pokhara. Our certified trainers provide general guidance to all members, and our supportive community ensures you never feel out of place, no matter your experience level.",
  },
  {
    question: "Is free parking available at the gym?",
    answer: "Yes. We provide free, spacious, and secure parking directly outside the gym for all members. Bicycle parking is also available.",
  },
  {
    question: "Where is Bonzer Fitness located?",
    answer: "Bonzer Fitness & Health Club is located at Hospital Chowk, Pokhara 33700, Gandaki Province, Nepal. You can get directions directly from our Contact page.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function FAQPage() {
  return (
    <div className="py-16 md:py-24 bg-white dark:bg-brand-charcoal min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white mb-6 uppercase tracking-tight">
            Gym <span className="text-brand-teal">FAQ</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Have questions about joining Bonzer Fitness &amp; Health Club in Pokhara? Find answers to the most common questions below.
          </p>
        </div>

        {/* FAQ Items */}
        <section aria-label="Frequently Asked Questions">
          <h2 className="sr-only">Frequently Asked Questions about Bonzer Fitness Pokhara</h2>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-brand-light dark:bg-gray-900 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-800">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{faq.question}</h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Still Have Questions */}
        <div className="mt-16 bg-brand-light dark:bg-gray-900 rounded-2xl p-8 text-center border border-gray-100 dark:border-gray-800">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Still Have Questions?</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Contact us directly and we&apos;ll be happy to help you get started on your fitness journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/contact" aria-label="Contact Bonzer Fitness team">Contact Us</Button>
            <Button href="/membership" variant="secondary">View Membership Plans</Button>
          </div>
        </div>

        {/* Internal Links */}
        <div className="mt-10 text-center text-gray-600 dark:text-gray-400">
          <p>
            Ready to join?{" "}
            <Link href="/membership" className="text-brand-teal hover:underline font-semibold">See our gym membership plans</Link>
            {" "}or{" "}
            <Link href="/personal-training" className="text-brand-teal hover:underline font-semibold">learn about personal training</Link>.
          </p>
        </div>

      </div>
    </div>
  );
}

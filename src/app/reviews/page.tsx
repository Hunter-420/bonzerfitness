import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { ReviewCard } from "@/components/ui/ReviewCard";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gym Reviews Pokhara | Why Members Choose Bonzer Fitness",
  description:
    "Read honest member reviews and testimonials for Bonzer Fitness & Health Club in Pokhara. Rated 4.9/5 on Google by 100+ satisfied members.",
  keywords: [
    "gym reviews Pokhara",
    "Bonzer Fitness reviews",
    "member testimonials Pokhara gym",
    "best rated gym Pokhara",
    "4.9 star gym Pokhara",
    "fitness center reviews",
    "customer reviews Bonzer Fitness",
  ],
  alternates: {
    canonical: "https://bonzerfitness.laganiforum.com/reviews",
  },
  openGraph: {
    title: "Gym Reviews Pokhara | Bonzer Fitness & Health Club",
    description: "Rated 4.9/5 by 100+ members. Read honest reviews of Bonzer Fitness & Health Club — Pokhara's best gym.",
    url: "https://bonzerfitness.laganiforum.com/reviews",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gym Reviews Pokhara | Bonzer Fitness",
    description: "Rated 4.9/5 by 100+ members. See why Bonzer Fitness is the top-rated gym in Pokhara.",
  },
};

const reviews = [
  { name: "Ramesh Thapa", rating: 5, date: "2 weeks ago", text: "Best gym in Pokhara! The equipment is brand new and the trainers are very helpful. Highly recommend for anyone serious about fitness.", datePublished: "2026-06-08" },
  { name: "Sita Gurung", rating: 5, date: "1 month ago", text: "Very clean and well-maintained facility. The environment is so motivating, and the staff treats you like family.", datePublished: "2026-05-22" },
  { name: "Nabin Shrestha", rating: 5, date: "3 months ago", text: "I've been going here for a year. Transformed my body with their personal training program. Bonzer is unmatched in Pokhara.", datePublished: "2026-03-22" },
  { name: "Pooja Sharma", rating: 5, date: "4 months ago", text: "Love the cardio section! It's spacious and I never have to wait for a machine. The changing rooms are always spotless.", datePublished: "2026-02-22" },
  { name: "Anil KC", rating: 4, date: "5 months ago", text: "Great vibe, solid equipment. Can get a bit crowded around 6 PM, but otherwise perfect.", datePublished: "2026-01-22" },
  { name: "Bikash Tamang", rating: 5, date: "6 months ago", text: "Joined for the free weights, stayed for the community. Everyone is super supportive and the trainers genuinely care.", datePublished: "2025-12-22" },
];

const reviewSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Bonzer Fitness & Health Club",
  "@id": "https://bonzerfitness.laganiforum.com/#gym",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "100",
    bestRating: "5",
    worstRating: "1",
  },
  review: reviews.map((r) => ({
    "@type": "Review",
    author: {
      "@type": "Person",
      name: r.name,
    },
    reviewRating: {
      "@type": "Rating",
      ratingValue: r.rating,
      bestRating: "5",
    },
    reviewBody: r.text,
    datePublished: r.datePublished,
  })),
};

export default function ReviewsPage() {
  return (
    <div className="py-16 md:py-24 bg-brand-light dark:bg-gray-900 min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white mb-6 uppercase tracking-tight">
            Gym Reviews <span className="text-brand-teal">Pokhara</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
            Don&apos;t just take our word for it. See why Bonzer Fitness &amp; Health Club is the top-rated gym in Pokhara — rated <strong>4.9/5</strong> by over 100 real members on Google.
          </p>
          <div className="flex justify-center items-center gap-4">
            <div className="text-center">
              <span className="text-5xl font-black text-gray-900 dark:text-white">4.9</span>
              <div className="flex text-brand-teal justify-center mt-1" aria-label="Rating: 5 out of 5 stars">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} className="w-5 h-5 fill-current" viewBox="0 0 20 20" aria-hidden="true">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Based on 100+ Google Reviews</p>
            </div>
          </div>
        </div>

        {/* Reviews Grid */}
        <section aria-label="Member reviews and testimonials">
          <h2 className="sr-only">Member Testimonials</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviews.map((review) => (
              <ReviewCard
                key={review.name}
                name={review.name}
                rating={review.rating}
                date={review.date}
                text={review.text}
              />
            ))}
          </div>
        </section>

        {/* Leave a Review */}
        <div className="mt-16 text-center bg-white dark:bg-gray-800 rounded-2xl p-8 border border-gray-100 dark:border-gray-700">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Share Your Experience</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-xl mx-auto mb-6">
            Are you a Bonzer Fitness member? Leave a review on Google to help other fitness enthusiasts in Pokhara find the right gym.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              href="https://www.google.com/maps/place/Bonzer+Fitness+%26+Health+Club/@28.2145403,83.9987871,17z"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Leave a Google review for Bonzer Fitness & Health Club"
            >
              Leave a Google Review
            </Button>
            <Button href="/membership" variant="secondary">
              Join Our Community
            </Button>
          </div>
        </div>

        {/* Internal Links */}
        <div className="mt-12 text-center text-gray-600 dark:text-gray-400">
          <p>
            Convinced?{" "}
            <Link href="/membership" className="text-brand-teal hover:underline font-semibold">View our membership plans</Link>
            {" "}or{" "}
            <Link href="/contact" className="text-brand-teal hover:underline font-semibold">contact us today</Link>.
          </p>
        </div>

      </div>
    </div>
  );
}

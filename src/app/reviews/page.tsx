import React from "react";
import { ReviewCard } from "@/components/ui/ReviewCard";
import { Button } from "@/components/ui/Button";

export const metadata = {
  title: "Reviews & Testimonials",
  description: "Read what our members say about Bonzer Fitness & Health Club in Pokhara.",
};

export default function ReviewsPage() {
  return (
    <div className="py-16 md:py-24 bg-brand-light dark:bg-gray-900 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white mb-6 uppercase tracking-tight">Member Reviews</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Discover why we are the top-rated fitness club in Pokhara.
          </p>
          <div className="mt-8 flex justify-center items-center space-x-2">
            <span className="text-5xl font-black text-gray-900 dark:text-white">4.9</span>
            <div className="flex flex-col items-start">
              <div className="flex text-brand-orange">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} className="w-5 h-5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                ))}
              </div>
              <span className="text-sm text-gray-500">Based on 100+ Google Reviews</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ReviewCard name="Ramesh Thapa" rating={5} date="2 weeks ago" text="Best gym in Pokhara! The equipment is brand new and the trainers are very helpful. Highly recommend for anyone serious about fitness." />
          <ReviewCard name="Sita Gurung" rating={5} date="1 month ago" text="Very clean and well-maintained facility. The environment is so motivating, and the staff treats you like family." />
          <ReviewCard name="Nabin Shrestha" rating={5} date="3 months ago" text="I've been going here for a year. Transformed my body with their personal training program. Bonzer is unmatched in Pokhara." />
          <ReviewCard name="Pooja Sharma" rating={5} date="4 months ago" text="Love the cardio section! It's spacious and I never have to wait for a machine. The changing rooms are always spotless." />
          <ReviewCard name="Anil KC" rating={4} date="5 months ago" text="Great vibe, solid equipment. Can get a bit crowded around 6 PM, but otherwise perfect." />
          <ReviewCard name="Bikash Tamang" rating={5} date="6 months ago" text="Joined for the free weights, stayed for the community. Everyone is super supportive and the trainers genuinely care." />
        </div>

        <div className="mt-16 text-center">
          <Button href="https://www.google.com/maps/place/Bonzer+Fitness+%26+Health+Club/@28.2145403,83.9987871,17z/data=!3m1!4b1!4m6!3m5!1s0x3995958eaff77429:0x915628f0483f61ac!8m2!3d28.2145403!4d84.0013674!16s%2Fg%2F11h75jpt4x?entry=ttu&g_ep=EgoyMDI2MDYxNi4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer">
            Leave a Review on Google
          </Button>
        </div>
      </div>
    </div>
  );
}

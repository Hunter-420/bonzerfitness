import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/Button";

export const metadata = {
  title: "Transformation Stories",
  description: "Real results from real members at Bonzer Fitness & Health Club in Pokhara.",
};

export default function TransformationStoriesPage() {
  return (
    <div className="py-16 md:py-24 bg-brand-light dark:bg-gray-900 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white mb-6 uppercase tracking-tight">Transformation Stories</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            See the incredible results our members have achieved through hard work, dedication, and our expert coaching.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Story 1 */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-xl border border-gray-100 dark:border-gray-700">
            <div className="flex h-64 relative">
              <div className="w-1/2 relative">
                <Image 
                  src="https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=1469&auto=format&fit=crop" 
                  alt="Before" 
                  fill 
                  className="object-cover"
                />
                <div className="absolute top-4 left-4 bg-black/60 text-white px-3 py-1 rounded text-sm font-bold uppercase">Before</div>
              </div>
              <div className="w-1/2 relative">
                <Image 
                  src="https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=1470&auto=format&fit=crop" 
                  alt="After" 
                  fill 
                  className="object-cover"
                />
                <div className="absolute top-4 right-4 bg-brand-orange text-white px-3 py-1 rounded text-sm font-bold uppercase">After</div>
              </div>
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Prakash M. - 15kg Weight Loss</h3>
              <p className="text-brand-orange font-bold mb-4">6 Month Program</p>
              <p className="text-gray-600 dark:text-gray-400 italic">
                "I tried every diet and home workout, but nothing stuck until I joined Bonzer. The community here is incredible, and my personal trainer gave me a realistic plan I could actually follow."
              </p>
            </div>
          </div>

          {/* Story 2 */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-xl border border-gray-100 dark:border-gray-700">
            <div className="flex h-64 relative">
              <div className="w-1/2 relative">
                <Image 
                  src="https://images.unsplash.com/photo-1574680096145-d05b474e2155?q=80&w=1469&auto=format&fit=crop" 
                  alt="Before" 
                  fill 
                  className="object-cover"
                />
                <div className="absolute top-4 left-4 bg-black/60 text-white px-3 py-1 rounded text-sm font-bold uppercase">Before</div>
              </div>
              <div className="w-1/2 relative">
                <Image 
                  src="https://images.unsplash.com/photo-1605296867304-46d5465a13f1?q=80&w=1470&auto=format&fit=crop" 
                  alt="After" 
                  fill 
                  className="object-cover"
                />
                <div className="absolute top-4 right-4 bg-brand-orange text-white px-3 py-1 rounded text-sm font-bold uppercase">After</div>
              </div>
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Anjali G. - Muscle Gain & Tone</h3>
              <p className="text-brand-orange font-bold mb-4">1 Year Transformation</p>
              <p className="text-gray-600 dark:text-gray-400 italic">
                "I was intimidated by the free weights area before. The trainers taught me proper form, and now lifting heavy is my favorite part of the day. I feel stronger than ever."
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Ready to write your own success story?</h2>
          <Button href="/membership" size="lg">Start Today</Button>
        </div>
      </div>
    </div>
  );
}

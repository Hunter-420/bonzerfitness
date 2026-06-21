import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/Button";

export const metadata = {
  title: "Personal Training",
  description: "Achieve your goals faster with our certified personal trainers at Bonzer Fitness & Health Club.",
};

export default function PersonalTrainingPage() {
  return (
    <div className="py-16 md:py-24 bg-white dark:bg-brand-charcoal min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white mb-6 uppercase tracking-tight">Personal Training</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Get personalized guidance, custom workout plans, and the motivation you need to reach your full potential.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Why Choose a Personal Trainer?</h2>
            <ul className="space-y-6">
              <li className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <svg className="h-6 w-6 text-brand-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                </div>
                <div className="ml-4">
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white">Customized Plans</h4>
                  <p className="text-gray-600 dark:text-gray-400 mt-1">Workouts tailored specifically to your body type, goals, and fitness level.</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <svg className="h-6 w-6 text-brand-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                </div>
                <div className="ml-4">
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white">Proper Form & Injury Prevention</h4>
                  <p className="text-gray-600 dark:text-gray-400 mt-1">Learn the correct techniques to maximize results and minimize the risk of injury.</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <svg className="h-6 w-6 text-brand-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                </div>
                <div className="ml-4">
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white">Accountability & Motivation</h4>
                  <p className="text-gray-600 dark:text-gray-400 mt-1">We push you further than you'd push yourself and keep you on track.</p>
                </div>
              </li>
            </ul>
            <div className="mt-10">
              <Button href="/contact" size="lg">Book a Free Consultation</Button>
            </div>
          </div>
          <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
            <Image 
              src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=1470&auto=format&fit=crop"
              alt="Personal Trainer helping client"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

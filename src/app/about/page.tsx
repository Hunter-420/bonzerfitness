import React from "react";
import Image from "next/image";

export const metadata = {
  title: "About Us",
  description: "Learn about Bonzer Fitness & Health Club's mission, history, and our supportive environment in Pokhara.",
};

export default function AboutPage() {
  return (
    <div className="py-16 md:py-24 bg-white dark:bg-brand-charcoal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white mb-6 uppercase tracking-tight">About Bonzer Fitness</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            We are dedicated to providing the best fitness experience in Pokhara.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
          <div className="relative h-96 rounded-2xl overflow-hidden shadow-xl">
            <Image 
              src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=1470&auto=format&fit=crop"
              alt="Bonzer Fitness Team"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Our Mission</h2>
            <p className="text-gray-700 dark:text-gray-300 text-lg mb-6 leading-relaxed">
              At Bonzer Fitness & Health Club, our mission is to empower individuals in Pokhara to lead healthier, stronger, and more confident lives. We believe that fitness is for everyone, regardless of age or experience level.
            </p>
            <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
              We strive to provide a welcoming, ego-free environment equipped with the latest technology, expert guidance, and a community that supports your personal goals.
            </p>
          </div>
        </div>

        <div className="bg-brand-light dark:bg-gray-900 rounded-3xl p-8 md:p-12">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">Why We Stand Out</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="bg-brand-orange text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">1</div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Supportive Environment</h3>
              <p className="text-gray-600 dark:text-gray-400">Leave your ego at the door. Our community is built on encouragement and mutual respect.</p>
            </div>
            <div>
              <div className="bg-brand-orange text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">2</div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Expert Trainers</h3>
              <p className="text-gray-600 dark:text-gray-400">Our certified professionals are here to guide you, ensure proper form, and maximize your results.</p>
            </div>
            <div>
              <div className="bg-brand-orange text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">3</div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Premium Equipment</h3>
              <p className="text-gray-600 dark:text-gray-400">We invest in top-tier machinery so you can focus entirely on your workout without compromises.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

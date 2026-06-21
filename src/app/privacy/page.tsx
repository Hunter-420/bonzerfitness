import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Bonzer Fitness & Health Club",
  description: "Privacy Policy for Bonzer Fitness & Health Club in Pokhara.",
};

export default function PrivacyPage() {
  return (
    <div className="py-20 bg-brand-light dark:bg-gray-900 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-black text-brand-charcoal dark:text-white mb-8">Privacy Policy</h1>
        
        <div className="prose dark:prose-invert max-w-none text-gray-700 dark:text-gray-300">
          <p className="mb-4">Last updated: June 2026</p>
          
          <h2 className="text-2xl font-bold mt-8 mb-4">1. Information We Collect</h2>
          <p className="mb-4">
            We collect information you provide directly to us, such as when you create an account, subscribe to our newsletter, fill out a form, or communicate with us. This may include your name, email address, phone number, and any other information you choose to provide.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">2. How We Use Your Information</h2>
          <p className="mb-4">
            We use the information we collect to provide, maintain, and improve our services, communicate with you, and personalize your experience at Bonzer Fitness & Health Club.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">3. Contact Us</h2>
          <p className="mb-4">
            If you have any questions about this Privacy Policy, please contact us at info@bonzerfitness.com.np or visit us at Hospital Chowk, Pokhara.
          </p>
        </div>
      </div>
    </div>
  );
}

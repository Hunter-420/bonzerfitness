import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | Bonzer Fitness & Health Club",
  description: "Terms of Service for Bonzer Fitness & Health Club in Pokhara.",
};

export default function TermsPage() {
  return (
    <div className="py-20 bg-brand-light dark:bg-gray-900 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-black text-brand-charcoal dark:text-white mb-8">Terms of Service</h1>
        
        <div className="prose dark:prose-invert max-w-none text-gray-700 dark:text-gray-300">
          <p className="mb-4">Last updated: June 2026</p>
          
          <h2 className="text-2xl font-bold mt-8 mb-4">1. Acceptance of Terms</h2>
          <p className="mb-4">
            By accessing or using the services provided by Bonzer Fitness & Health Club, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">2. Gym Rules and Safety</h2>
          <p className="mb-4">
            All members and guests must adhere to the gym rules posted in the facility. This includes wearing proper gym attire, racking weights after use, and following instructions from staff and trainers to ensure a safe environment for everyone.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">3. Memberships and Payments</h2>
          <p className="mb-4">
            Memberships are non-transferable and non-refundable unless otherwise stated. Bonzer Fitness reserves the right to modify membership pricing and benefits with proper notice.
          </p>
          
          <h2 className="text-2xl font-bold mt-8 mb-4">4. Contact Information</h2>
          <p className="mb-4">
            If you have any questions or concerns regarding these Terms, please contact us at info@bonzerfitness.com.np or speak with a representative at our front desk.
          </p>
        </div>
      </div>
    </div>
  );
}

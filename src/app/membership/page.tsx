import React from "react";
import { Button } from "@/components/ui/Button";

export const metadata = {
  title: "Membership Plans",
  description: "Explore our flexible membership plans at Bonzer Fitness & Health Club in Pokhara. Monthly, quarterly, and yearly options available.",
};

export default function MembershipPage() {
  return (
    <div className="py-16 md:py-24 bg-brand-light dark:bg-gray-900 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white mb-6 uppercase tracking-tight">Membership Plans</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Choose the plan that fits your fitness journey. No hidden fees, just results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Monthly Plan */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 border border-gray-100 dark:border-gray-700">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Monthly</h3>
            <p className="text-4xl font-black text-brand-orange mb-6">Rs. 3,500<span className="text-lg font-normal text-gray-500 dark:text-gray-400">/mo</span></p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center text-gray-700 dark:text-gray-300"><svg className="h-5 w-5 text-brand-orange mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>Full gym access</li>
              <li className="flex items-center text-gray-700 dark:text-gray-300"><svg className="h-5 w-5 text-brand-orange mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>Locker room access</li>
              <li className="flex items-center text-gray-700 dark:text-gray-300"><svg className="h-5 w-5 text-brand-orange mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>General guidance</li>
            </ul>
            <Button href="https://wa.me/9779856038995?text=Hello!%20I%20am%20interested%20in%20joining%20the%20Monthly%20Membership%20plan." target="_blank" className="w-full">Join Now</Button>
          </div>

          {/* Quarterly Plan */}
          <div className="bg-brand-charcoal text-white rounded-2xl shadow-xl p-8 transform scale-105 relative">
            <div className="absolute top-0 right-0 bg-brand-orange text-white text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-2xl uppercase tracking-wider">Most Popular</div>
            <h3 className="text-2xl font-bold mb-4">Quarterly</h3>
            <p className="text-4xl font-black text-brand-orange mb-6">Rs. 9,500<span className="text-lg font-normal text-gray-400">/3 mo</span></p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center"><svg className="h-5 w-5 text-brand-orange mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>All Monthly benefits</li>
              <li className="flex items-center"><svg className="h-5 w-5 text-brand-orange mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>1 Free Personal Training Session</li>
              <li className="flex items-center"><svg className="h-5 w-5 text-brand-orange mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>Diet consultation</li>
            </ul>
            <Button href="https://wa.me/9779856038995?text=Hello!%20I%20am%20interested%20in%20joining%20the%20Quarterly%20Membership%20plan." target="_blank" variant="primary" className="w-full">Join Now</Button>
          </div>

          {/* Yearly Plan */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 border border-gray-100 dark:border-gray-700">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Yearly</h3>
            <p className="text-4xl font-black text-brand-orange mb-6">Rs. 32,000<span className="text-lg font-normal text-gray-500 dark:text-gray-400">/yr</span></p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center text-gray-700 dark:text-gray-300"><svg className="h-5 w-5 text-brand-orange mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>All Quarterly benefits</li>
              <li className="flex items-center text-gray-700 dark:text-gray-300"><svg className="h-5 w-5 text-brand-orange mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>2 Months Free (Save Rs. 10,000)</li>
              <li className="flex items-center text-gray-700 dark:text-gray-300"><svg className="h-5 w-5 text-brand-orange mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>Bonzer Merchandise</li>
            </ul>
            <Button href="https://wa.me/9779856038995?text=Hello!%20I%20am%20interested%20in%20joining%20the%20Yearly%20Membership%20plan." target="_blank" className="w-full">Join Now</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

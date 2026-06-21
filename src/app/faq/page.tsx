import React from "react";

export const metadata = {
  title: "Frequently Asked Questions",
  description: "Find answers to common questions about Bonzer Fitness & Health Club in Pokhara.",
};

export default function FAQPage() {
  const faqs = [
    { question: "What are your opening hours?", answer: "We are open from 5:00 AM to 9:00 PM every day of the week, including weekends and public holidays." },
    { question: "Do you offer personal training?", answer: "Yes, we have certified personal trainers available. You can book individual sessions or purchase a personal training package for better value." },
    { question: "Is there a joining fee?", answer: "No, there are no hidden joining or cancellation fees. You only pay for your selected membership plan." },
    { question: "Do you have locker facilities?", answer: "Yes, we provide secure day lockers for all members. You just need to bring your own padlock." },
    { question: "Can I try the gym before joining?", answer: "Yes, we offer a 1-day free trial pass for local residents. Please bring a valid ID to claim your pass at the front desk." },
    { question: "Are group classes included in the membership?", answer: "Basic group fitness classes (like Zumba and Aerobics) are included. Premium classes may require a small additional fee." },
  ];

  return (
    <div className="py-16 md:py-24 bg-white dark:bg-brand-charcoal min-h-screen">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white mb-6 uppercase tracking-tight">FAQ</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Got questions? We've got answers.
          </p>
        </div>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-brand-light dark:bg-gray-900 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-800">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{faq.question}</h3>
              <p className="text-gray-600 dark:text-gray-400">{faq.answer}</p>
            </div>
          ))}
        </div>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": faqs.map(faq => ({
                "@type": "Question",
                "name": faq.question,
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": faq.answer
                }
              }))
            })
          }}
        />
      </div>
    </div>
  );
}

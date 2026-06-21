import React from "react";

interface FacilityCardProps {
  title: string;
  description: string;
  imageUrl: string;
  icon: React.ReactNode;
  features?: string[];
}

export function FacilityCard({ title, description, imageUrl, icon, features = [] }: FacilityCardProps) {
  return (
    <div className="group relative rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 bg-white dark:bg-[#2C3135] border border-gray-100 dark:border-gray-700 hover:-translate-y-2">
      {/* Image */}
      <div className="relative h-64 w-full overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={imageUrl}
          alt={title}
          referrerPolicy="no-referrer"
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#2C3135]/80 via-[#2C3135]/20 to-transparent" />
        {/* Icon badge */}
        <div className="absolute top-4 left-4 w-12 h-12 rounded-2xl bg-brand-teal/90 backdrop-blur-sm flex items-center justify-center text-white shadow-lg">
          {icon}
        </div>
        {/* Title overlay on image */}
        <div className="absolute bottom-4 left-4 right-4">
          <h3 className="text-2xl font-black text-white tracking-tight drop-shadow-md">{title}</h3>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4">{description}</p>
        {features.length > 0 && (
          <ul className="space-y-2">
            {features.map((f, i) => (
              <li key={i} className="flex items-center text-sm text-gray-700 dark:text-gray-200">
                <span className="w-5 h-5 rounded-full bg-brand-teal/15 flex items-center justify-center mr-3 flex-shrink-0">
                  <svg className="w-3 h-3 text-brand-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                {f}
              </li>
            ))}
          </ul>
        )}
        {/* Bottom accent bar */}
        <div className="mt-6 h-1 w-12 rounded-full bg-brand-teal group-hover:w-full transition-all duration-500" />
      </div>
    </div>
  );
}

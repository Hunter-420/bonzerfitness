import React from "react";
import Image from "next/image";

export const metadata = {
  title: "Our Equipment",
  description: "Explore the premium equipment available at Bonzer Fitness & Health Club in Pokhara.",
};

export default function EquipmentPage() {
  return (
    <div className="py-16 md:py-24 bg-brand-light dark:bg-gray-900 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white mb-6 uppercase tracking-tight">Premium Equipment</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            We source the best equipment globally to ensure you have the tools needed for peak performance.
          </p>
        </div>

        <div className="space-y-20">
          {/* Strength Equipment */}
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2 relative h-80 rounded-2xl overflow-hidden shadow-xl">
              <Image 
                src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1470&auto=format&fit=crop"
                alt="Strength Equipment"
                fill
                className="object-cover"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Strength & Resistance</h2>
              <p className="text-gray-600 dark:text-gray-400 mb-6">Our strength area is equipped with state-of-the-art plate-loaded machines, cable cross-overs, and a comprehensive range of free weights to target every muscle group safely and effectively.</p>
              <ul className="grid grid-cols-2 gap-4 text-gray-700 dark:text-gray-300 font-medium">
                <li>• Olympic Barbells</li>
                <li>• Dumbbells up to 50kg</li>
                <li>• Power Racks</li>
                <li>• Leg Press Machines</li>
              </ul>
            </div>
          </div>

          {/* Cardio Equipment */}
          <div className="flex flex-col md:flex-row-reverse gap-12 items-center">
            <div className="md:w-1/2 relative h-80 rounded-2xl overflow-hidden shadow-xl">
              <Image 
                src="https://images.unsplash.com/photo-1538805060514-97d9cc17730c?q=80&w=1374&auto=format&fit=crop"
                alt="Cardio Equipment"
                fill
                className="object-cover"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Cardio Machines</h2>
              <p className="text-gray-600 dark:text-gray-400 mb-6">Elevate your heart rate on our premium cardio machines. Featuring interactive screens, tracking metrics, and smooth mechanics to make your cardio sessions enjoyable and productive.</p>
              <ul className="grid grid-cols-2 gap-4 text-gray-700 dark:text-gray-300 font-medium">
                <li>• Treadmills</li>
                <li>• Ellipticals</li>
                <li>• Rowing Machines</li>
                <li>• Stair Climbers</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

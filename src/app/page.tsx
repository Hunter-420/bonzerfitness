import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { ReviewCard } from "@/components/ui/ReviewCard";
import { FacilityCard } from "@/components/ui/FacilityCard";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best Gym in Pokhara | Bonzer Fitness & Health Club (Hospital Chowk)",
  description: "Join Bonzer Fitness & Health Club – one of the best gyms in Pokhara. Modern equipment, expert trainers, beginner-friendly environment. Call now.",
};

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative w-full h-[90vh] flex items-center justify-center bg-brand-charcoal overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1470&auto=format&fit=crop"
            alt="Bonzer Fitness Gym Interior"
            fill
            className="object-cover opacity-40"
            priority
          />
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tight">
            TRANSFORM YOUR BODY <span className="text-brand-teal">IN POKHARA</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-10 font-medium max-w-2xl mx-auto">
            Experience world-class equipment, expert training, and a community that pushes you to be your best.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button href="/membership" size="lg" className="w-full sm:w-auto text-lg px-8 py-4">
              Start Your Journey
            </Button>
            <Button href="/contact" variant="outline" size="lg" className="w-full sm:w-auto text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-brand-charcoal focus:ring-white">
              Get Directions
            </Button>
          </div>
          
          <div className="mt-12 flex items-center justify-center space-x-2">
            <div className="flex text-brand-teal">
              {[1, 2, 3, 4, 5].map((star) => (
                <svg key={star} className="w-6 h-6 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
              ))}
            </div>
            <span className="text-white font-medium">Rated 4.9/5 by 100+ members</span>
          </div>
        </div>
      </section>

      {/* Facilities Section */}
      <section className="py-20 bg-brand-light dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-gray-900 dark:text-white mb-4 uppercase">Our Facilities</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">Everything you need to reach your fitness goals under one roof.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FacilityCard 
              title="Strength Area" 
              description="Free weights, squat racks, and premium resistance machines for building muscle."
              imageUrl="https://scontent.fktm8-1.fna.fbcdn.net/v/t1.6435-9/58629896_2195397353874441_3831453154105360384_n.jpg?stp=dst-jpg_tt6&cstp=mx960x640&ctp=s960x640&_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_ohc=jM1ytJTiZjUQ7kNvwEudqgl&_nc_oc=AdrJ29dv6UfgYkuB4Sz4ILXiIcVHmtDPmiT19jYJM1rZSR6e6hxueJSxybn0G3MwCrGBWBlh8UsqzZDbJzN1UGib&_nc_zt=23&_nc_ht=scontent.fktm8-1.fna&_nc_gid=c3t9MIR2FkIBRCXgCYOk2A&_nc_ss=7b2a8&oh=00_Af9C77ydtE8hwft39vUjQQs8O652wCIMjrROZwN-RyR53A&oe=6A5FB783"
              icon={<svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" /></svg>}
              features={["Dumbbells up to 50kg", "Power racks", "Smith machines"]}
            />
            <FacilityCard 
              title="Cardio Zone" 
              description="Premium treadmills, ellipticals, and bikes to keep your heart pumping."
              imageUrl="https://scontent.fktm8-1.fna.fbcdn.net/v/t1.6435-9/58755016_2195397333874443_6546090502012272640_n.jpg?stp=dst-jpg_tt6&cstp=mx960x640&ctp=s960x640&_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_ohc=q-69PJCcf9sQ7kNvwE2mj1L&_nc_oc=AdorRYN_OTjo3gNLcshWfJDzqyEO9DT55ZVd-DTKo32v7S9AcVCk7eHCIEseHEbXD6u7fTg8Fba_YnKwAwN8Abgt&_nc_zt=23&_nc_ht=scontent.fktm8-1.fna&_nc_gid=MtJE5_P624FxIUHYJXi5vg&_nc_ss=7b2a8&oh=00_Af_Av9LZvTZvgMUmnc82NpqStjbINEd72FX1Y_i7Dp8rrQ&oe=6A5FBF3D"
              icon={<svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>}
              features={["Modern treadmills", "Ellipticals", "Stationary bikes"]}
            />
            <FacilityCard 
              title="Free Parking" 
              description="Hassle-free parking available right outside the gym for all members."
              imageUrl="https://images.unsplash.com/photo-1506521781263-d8422e82f27a?q=80&w=1470&auto=format&fit=crop"
              icon={<svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2zm7 4h-3v10h2V13h1a3 3 0 000-6z" /></svg>}
              features={["Spacious", "Secure", "Free for members"]}
            />
          </div>
          <div className="text-center mt-12">
            <Button href="/facilities" variant="secondary">View All Facilities</Button>
          </div>
        </div>
      </section>

      {/* About Snippet */}
      <section className="py-20 bg-white dark:bg-brand-charcoal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <div className="relative h-96 w-full rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=1470&auto=format&fit=crop"
                  alt="Personal Training at Bonzer Fitness"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-4xl font-black text-gray-900 dark:text-white mb-6 uppercase">Why Choose Bonzer?</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                Located in the heart of Pokhara, Bonzer Fitness & Health Club is more than just a gym. We are a community dedicated to helping you achieve your physical and mental peak.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  "Certified, experienced personal trainers",
                  "Top-of-the-line imported equipment",
                  "Hygienic and spacious workout environment",
                  "Flexible membership plans"
                ].map((item, i) => (
                  <li key={i} className="flex items-center text-gray-700 dark:text-gray-200">
                    <svg className="h-6 w-6 text-brand-teal mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
              <Button href="/about">Learn More About Us</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Snippet */}
      <section className="py-20 bg-brand-light dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-gray-900 dark:text-white mb-4 uppercase">Success Stories</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">Don't just take our word for it. Hear from our amazing members.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ReviewCard
              name="Ramesh Thapa"
              rating={5}
              date="2 weeks ago"
              text="Best gym in Pokhara! The equipment is brand new and the trainers are very helpful. Highly recommend for anyone serious about fitness."
            />
            <ReviewCard
              name="Sita Gurung"
              rating={5}
              date="1 month ago"
              text="Very clean and well-maintained facility. The environment is so motivating, and the staff treats you like family."
            />
            <ReviewCard
              name="Nabin Shrestha"
              rating={5}
              date="3 months ago"
              text="I've been going here for a year. Transformed my body with their personal training program. Bonzer is unmatched in Pokhara."
            />
          </div>
          <div className="text-center mt-12">
            <Button href="/reviews" variant="outline" className="border-brand-teal text-brand-teal hover:bg-brand-teal hover:text-white">Read All Reviews</Button>
          </div>
        </div>
      </section>

      {/* CTA Section / Membership Plans */}
      <section className="py-20 bg-brand-light dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white mb-6 uppercase tracking-tight">Ready to get started?</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Choose the plan that fits your fitness journey. No hidden fees, just results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Monthly Plan */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 border border-gray-100 dark:border-gray-700">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Monthly</h3>
              <p className="text-4xl font-black text-brand-teal mb-6">Rs. 3,500<span className="text-lg font-normal text-gray-500 dark:text-gray-400">/mo</span></p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center text-gray-700 dark:text-gray-300"><svg className="h-5 w-5 text-brand-teal mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>Full gym access</li>
                <li className="flex items-center text-gray-700 dark:text-gray-300"><svg className="h-5 w-5 text-brand-teal mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>Locker room access</li>
                <li className="flex items-center text-gray-700 dark:text-gray-300"><svg className="h-5 w-5 text-brand-teal mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>General guidance</li>
              </ul>
              <Button href="https://wa.me/9779856038995?text=Hello!%20I%20am%20interested%20in%20joining%20the%20Monthly%20Membership%20plan." target="_blank" className="w-full">Join Now</Button>
            </div>

            {/* Quarterly Plan */}
            <div className="bg-brand-charcoal text-white rounded-2xl shadow-xl p-8 transform md:scale-105 relative">
              <div className="absolute top-0 right-0 bg-brand-teal text-white text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-2xl uppercase tracking-wider">Most Popular</div>
              <h3 className="text-2xl font-bold mb-4">Quarterly</h3>
              <p className="text-4xl font-black text-brand-teal mb-6">Rs. 9,500<span className="text-lg font-normal text-gray-400">/3 mo</span></p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center"><svg className="h-5 w-5 text-brand-teal mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>All Monthly benefits</li>
                <li className="flex items-center"><svg className="h-5 w-5 text-brand-teal mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>1 Free Personal Training Session</li>
                <li className="flex items-center"><svg className="h-5 w-5 text-brand-teal mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>Diet consultation</li>
              </ul>
              <Button href="https://wa.me/9779856038995?text=Hello!%20I%20am%20interested%20in%20joining%20the%20Quarterly%20Membership%20plan." target="_blank" variant="primary" className="w-full">Join Now</Button>
            </div>

            {/* Yearly Plan */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 border border-gray-100 dark:border-gray-700">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Yearly</h3>
              <p className="text-4xl font-black text-brand-teal mb-6">Rs. 32,000<span className="text-lg font-normal text-gray-500 dark:text-gray-400">/yr</span></p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center text-gray-700 dark:text-gray-300"><svg className="h-5 w-5 text-brand-teal mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>All Quarterly benefits</li>
                <li className="flex items-center text-gray-700 dark:text-gray-300"><svg className="h-5 w-5 text-brand-teal mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>2 Months Free (Save Rs. 10,000)</li>
                <li className="flex items-center text-gray-700 dark:text-gray-300"><svg className="h-5 w-5 text-brand-teal mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>Bonzer Merchandise</li>
              </ul>
              <Button href="https://wa.me/9779856038995?text=Hello!%20I%20am%20interested%20in%20joining%20the%20Yearly%20Membership%20plan." target="_blank" className="w-full">Join Now</Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

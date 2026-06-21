import React from "react";
import { FacilityCard } from "@/components/ui/FacilityCard";

export const metadata = {
  title: "Our Facilities | Bonzer Fitness & Health Club",
  description: "Discover the world-class facilities at Bonzer Fitness & Health Club in Pokhara. Strength, cardio, parking, and changing rooms.",
};

const StrengthIcon = () => (
  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
  </svg>
);

const CardioIcon = () => (
  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
  </svg>
);

const ParkingIcon = () => (
  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2zm7 4h-3v10h2V13h1a3 3 0 000-6z" />
  </svg>
);

const ChangingRoomIcon = () => (
  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
  </svg>
);

export default function FacilitiesPage() {
  return (
    <div className="min-h-screen bg-brand-light dark:bg-[#1A1D20]">
      {/* Hero Banner */}
      <div className="relative py-28 bg-brand-charcoal overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 rounded-full bg-brand-teal blur-3xl -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-brand-teal blur-3xl translate-x-1/2 translate-y-1/2" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block bg-brand-teal/20 text-brand-teal text-sm font-bold px-4 py-1.5 rounded-full uppercase tracking-widest mb-5">
            World-Class Facilities
          </span>
          <h1 className="text-5xl md:text-6xl font-black text-white mb-6 tracking-tight">
            Everything You Need<br />
            <span className="text-brand-teal">Under One Roof</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            9,000 sq. ft. of premium fitness space maintained to the highest standards of hygiene and safety.
          </p>
        </div>
      </div>

      {/* Cards Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <FacilityCard
            title="Strength Training Area"
            description="Fully equipped with power racks, Smith machines, benches, and an extensive dumbbell set up to 50kg — everything you need to build serious muscle and strength."
            imageUrl="https://scontent.fktm8-1.fna.fbcdn.net/v/t1.6435-9/58629896_2195397353874441_3831453154105360384_n.jpg?stp=dst-jpg_tt6&cstp=mx960x640&ctp=s960x640&_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_ohc=jM1ytJTiZjUQ7kNvwEudqgl&_nc_oc=AdrJ29dv6UfgYkuB4Sz4ILXiIcVHmtDPmiT19jYJM1rZSR6e6hxueJSxybn0G3MwCrGBWBlh8UsqzZDbJzN1UGib&_nc_zt=23&_nc_ht=scontent.fktm8-1.fna&_nc_gid=c3t9MIR2FkIBRCXgCYOk2A&_nc_ss=7b2a8&oh=00_Af9C77ydtE8hwft39vUjQQs8O652wCIMjrROZwN-RyR53A&oe=6A5FB783"
            icon={<StrengthIcon />}
            features={["Dumbbells up to 50kg", "Power racks & squat stands", "Smith machines", "Barbells & weight plates", "Adjustable benches"]}
          />
          <FacilityCard
            title="Cardio Zone"
            description="Premium treadmills, cross-trainers, exercise bikes and rowing machines to keep your heart pumping and your endurance building every session."
            imageUrl="https://scontent.fktm8-1.fna.fbcdn.net/v/t1.6435-9/58755016_2195397333874443_6546090502012272640_n.jpg?stp=dst-jpg_tt6&cstp=mx960x640&ctp=s960x640&_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_ohc=q-69PJCcf9sQ7kNvwE2mj1L&_nc_oc=AdorRYN_OTjo3gNLcshWfJDzqyEO9DT55ZVd-DTKo32v7S9AcVCk7eHCIEseHEbXD6u7fTg8Fba_YnKwAwN8Abgt&_nc_zt=23&_nc_ht=scontent.fktm8-1.fna&_nc_gid=MtJE5_P624FxIUHYJXi5vg&_nc_ss=7b2a8&oh=00_Af_Av9LZvTZvgMUmnc82NpqStjbINEd72FX1Y_i7Dp8rrQ&oe=6A5FBF3D"
            icon={<CardioIcon />}
            features={["Modern treadmills", "Elliptical cross-trainers", "Stationary bikes", "Rowing machines", "Stair climbers"]}
          />
          <FacilityCard
            title="Free Parking"
            description="Hassle-free parking available right outside the gym. No need to worry about parking — just focus on your workout. Secure and spacious for all members."
            imageUrl="https://images.unsplash.com/photo-1506521781263-d8422e82f27a?q=80&w=1470&auto=format&fit=crop"
            icon={<ParkingIcon />}
            features={["Free for all members", "Spacious & secure", "Bike parking available", "24/7 accessible", "Well-lit at night"]}
          />
          <FacilityCard
            title="Changing Rooms"
            description="Clean, spacious changing rooms with secure lockers and hot showers. Refresh and change comfortably before or after your workout in a hygienic environment."
            imageUrl="https://images.unsplash.com/photo-1583416750470-965b2707b355?q=80&w=1470&auto=format&fit=crop"
            icon={<ChangingRoomIcon />}
            features={["Secure lockers", "Hot showers", "Separate male/female rooms", "Hygienic & clean", "Daily sanitised"]}
          />
        </div>
      </div>
    </div>
  );
}

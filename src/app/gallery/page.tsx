import React from "react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gym Photos Pokhara | Gallery – Bonzer Fitness & Health Club",
  description:
    "Explore the Bonzer Fitness & Health Club photo gallery. See the strength training area, cardio zone, workout floor, and modern gym equipment in Pokhara.",
  keywords: [
    "gym photos Pokhara",
    "Bonzer Fitness gallery",
    "fitness center gallery Pokhara",
    "gym interior Pokhara",
    "cardio section photos",
    "weight training area Pokhara",
    "gym images Pokhara",
  ],
  alternates: {
    canonical: "https://bonzerfitness.laganiforum.com/gallery",
  },
  openGraph: {
    title: "Gym Photos Pokhara | Bonzer Fitness & Health Club Gallery",
    description: "Take a virtual tour of Bonzer Fitness & Health Club — Pokhara's best gym. View our strength area, cardio zone, and gym floor.",
    url: "https://bonzerfitness.laganiforum.com/gallery",
    images: [
      {
        url: "https://scontent.fktm8-1.fna.fbcdn.net/v/t1.6435-9/58629896_2195397353874441_3831453154105360384_n.jpg?stp=dst-jpg_tt6&cstp=mx960x640&ctp=s960x640&_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_ohc=jM1ytJTiZjUQ7kNvwEudqgl&_nc_oc=AdrJ29dv6UfgYkuB4Sz4ILXiIcVHmtDPmiT19jYJM1rZSR6e6hxueJSxybn0G3MwCrGBWBlh8UsqzZDbJzN1UGib&_nc_zt=23&_nc_ht=scontent.fktm8-1.fna",
        width: 960,
        height: 640,
        alt: "Strength training floor at Bonzer Fitness & Health Club Pokhara",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gym Photos Pokhara | Bonzer Fitness Gallery",
    description: "Take a virtual tour of Bonzer Fitness — Pokhara's best gym. Strength area, cardio zone, and more.",
  },
};

const images = [
  {
    src: "https://scontent.fktm8-1.fna.fbcdn.net/v/t1.6435-9/58629896_2195397353874441_3831453154105360384_n.jpg?stp=dst-jpg_tt6&cstp=mx960x640&ctp=s960x640&_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_ohc=jM1ytJTiZjUQ7kNvwEudqgl&_nc_oc=AdrJ29dv6UfgYkuB4Sz4ILXiIcVHmtDPmiT19jYJM1rZSR6e6hxueJSxybn0G3MwCrGBWBlh8UsqzZDbJzN1UGib&_nc_zt=23&_nc_ht=scontent.fktm8-1.fna&_nc_gid=c3t9MIR2FkIBRCXgCYOk2A&_nc_ss=7b2a8&oh=00_Af9C77ydtE8hwft39vUjQQs8O652wCIMjrROZwN-RyR53A&oe=6A5FB783",
    alt: "Strength training floor with dumbbells and power racks at Bonzer Fitness Pokhara",
    label: "Strength Floor",
  },
  {
    src: "https://scontent.fktm8-1.fna.fbcdn.net/v/t1.6435-9/58755016_2195397333874443_6546090502012272640_n.jpg?stp=dst-jpg_tt6&cstp=mx960x640&ctp=s960x640&_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_ohc=q-69PJCcf9sQ7kNvwE2mj1L&_nc_oc=AdorRYN_OTjo3gNLcshWfJDzqyEO9DT55ZVd-DTKo32v7S9AcVCk7eHCIEseHEbXD6u7fTg8Fba_YnKwAwN8Abgt&_nc_zt=23&_nc_ht=scontent.fktm8-1.fna&_nc_gid=MtJE5_P624FxIUHYJXi5vg&_nc_ss=7b2a8&oh=00_Af_Av9LZvTZvgMUmnc82NpqStjbINEd72FX1Y_i7Dp8rrQ&oe=6A5FBF3D",
    alt: "Modern cardio zone with treadmills and elliptical machines at Bonzer Fitness Health Club Pokhara",
    label: "Cardio Zone",
  },
  {
    src: "https://scontent.fktm8-1.fna.fbcdn.net/v/t1.6435-9/58543530_2195397280541115_8897443607464640512_n.jpg?stp=dst-jpg_tt6&cstp=mx960x640&ctp=s960x640&_nc_cat=103&ccb=1-7&_nc_sid=833d8c&_nc_ohc=7MfSZZlJhGAQ7kNvwGMoMg5&_nc_oc=Ados4BI0eeF-BKrUfDp1U7UIgpM0vbGEu7oadOhf5B8I1-m6LgaEa_8csPty72t7zi09ObLLLEZFAMF3tRp15733&_nc_zt=23&_nc_ht=scontent.fktm8-1.fna&_nc_gid=Ks1qATwaPN3ifLy5R8v1OQ&_nc_ss=7b2a8&oh=00_Af8d9g-8lJjkJe7AuxMNHf3N_NWvbPTkq0mAbX1xNEf0wA&oe=6A5FC03A",
    alt: "Premium gym equipment area at Bonzer Fitness gym in Pokhara Nepal",
    label: "Equipment Area",
  },
  {
    src: "https://scontent.fktm8-1.fna.fbcdn.net/v/t1.6435-9/59211482_2195397213874455_1869793460895088640_n.jpg?stp=dst-jpg_tt6&cstp=mx960x640&ctp=s960x640&_nc_cat=111&ccb=1-7&_nc_sid=833d8c&_nc_ohc=3sXtm1Y2_0MQ7kNvwENdTxt&_nc_oc=AdpH6hRCFGhoC00aSaeHgGf8zb1X_TAKzi-I9r4DIqkARk9os6z4qTgYId5XSIvJMnJ-MtXgO_ZK8mxoc59-wyqn&_nc_zt=23&_nc_ht=scontent.fktm8-1.fna&_nc_gid=SoQ7r3x0k6YSDA6rgFEXyw&_nc_ss=7b2a8&oh=00_Af-XtrR3D4pOI3Tv7fdyyuJcVavFfTPdCzERiagnKlpFxg&oe=6A5F9EA2",
    alt: "Free weights section with dumbbells and barbells at Bonzer Fitness Club Pokhara",
    label: "Free Weights",
  },
  {
    src: "https://scontent.fktm8-1.fna.fbcdn.net/v/t1.6435-9/58383134_2195397147207795_2648514956290424832_n.jpg?stp=dst-jpg_tt6&cstp=mx960x640&ctp=s960x640&_nc_cat=104&ccb=1-7&_nc_sid=833d8c&_nc_ohc=rwwwzJIiC9YQ7kNvwH7yQI2&_nc_oc=AdqcDAzGPMtOajOzQM0XGCFXyYONU7khyu8eChC7EaW34lO2peNdlogchYlhMMkGPFJpRBy0vn39lDcZOtyQO1oA&_nc_zt=23&_nc_ht=scontent.fktm8-1.fna&_nc_gid=crXpf3wgCntGN-iVdn_p5A&_nc_ss=7b2a8&oh=00_Af-UmCFmrI-E3XT8t-TTvoXCLrWlFI6Jxq7gQg6Gvd8gsA&oe=6A5F9539",
    alt: "Spacious main workout gym floor at Bonzer Fitness & Health Club Hospital Chowk Pokhara",
    label: "Gym Floor",
  },
  {
    src: "https://scontent.fktm8-1.fna.fbcdn.net/v/t1.6435-9/59321393_2195397133874463_5845387250757533696_n.jpg?stp=dst-jpg_tt6&cstp=mx960x640&ctp=s960x640&_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_ohc=yfEfK4lYqYcQ7kNvwFLNJrs&_nc_oc=AdpRxNsDAtnHQmfDuHrnvzVuiMjjIIsRM9qjCBZpISXAKMBUfbpk55SP02FJrxZ9twQFZkh6Gu_diJgBMBTAhRdu&_nc_zt=23&_nc_ht=scontent.fktm8-1.fna&_nc_gid=6_6A9Bu33RfyxW6ay1nNqA&_nc_ss=7b2a8&oh=00_Af__Hl7V-gQDeiCqsVjIIck2rClJmTCrzkKz9SciT8uztw&oe=6A5F982B",
    alt: "Training zone and workout area at Bonzer Fitness & Health Club Pokhara",
    label: "Training Zone",
  },
  {
    src: "https://scontent.fktm8-1.fna.fbcdn.net/v/t1.6435-9/58662341_2195397077207802_5053524113214144512_n.jpg?stp=dst-jpg_tt6&cstp=mx960x680&ctp=s960x680&_nc_cat=107&ccb=1-7&_nc_sid=833d8c&_nc_ohc=6DAUULGZw-gQ7kNvwFPGYy2&_nc_oc=Adov1K9BztuUBnOsZ3Zf0qVzfi9lXL0brr9PvC9VVE20BdP0uHqcF442IW-WgYf4Ud0hikG6B-jNbQNfxuoE8rYh&_nc_zt=23&_nc_ht=scontent.fktm8-1.fna&_nc_gid=vTT5yl4sn-sxTdFU13_hnA&_nc_ss=7b2a8&oh=00_Af92zhRgyxMyh6hExeQXC1U7qMJGk4VDohQUlPDQVPotKw&oe=6A5FC397",
    alt: "Members working out in the dedicated exercise area at Bonzer Fitness Pokhara",
    label: "Workout Area",
  },
];

const imageObjectSchema = {
  "@context": "https://schema.org",
  "@type": "ImageGallery",
  name: "Bonzer Fitness & Health Club – Gym Photos Pokhara",
  description: "Photo gallery of Bonzer Fitness & Health Club gym facilities in Pokhara, Nepal.",
  url: "https://bonzerfitness.laganiforum.com/gallery",
  image: images.map((img) => ({
    "@type": "ImageObject",
    url: img.src,
    description: img.alt,
    name: img.label,
  })),
};

export default function GalleryPage() {
  return (
    <div className="min-h-screen bg-brand-light dark:bg-[#1A1D20]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(imageObjectSchema) }}
      />

      {/* Hero Header */}
      <div className="relative py-28 bg-brand-charcoal overflow-hidden">
        <div className="absolute inset-0 opacity-10" aria-hidden="true">
          <div className="absolute top-0 left-0 w-96 h-96 rounded-full bg-brand-teal blur-3xl -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-brand-teal blur-3xl translate-x-1/2 translate-y-1/2" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block bg-brand-teal/20 text-brand-teal text-sm font-bold px-4 py-1.5 rounded-full uppercase tracking-widest mb-5">
            Photo Gallery
          </span>
          <h1 className="text-5xl md:text-6xl font-black text-white mb-6 tracking-tight">
            Inside <span className="text-brand-teal">Bonzer Fitness</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Take a virtual tour of Pokhara&apos;s best fitness facility. See our strength floor, cardio zone, and premium workout spaces before you visit.
          </p>
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <section aria-label="Bonzer Fitness gym photo gallery">
          <h2 className="sr-only">Bonzer Fitness Gym Photo Gallery – Pokhara</h2>

          {/* Featured large image */}
          <div className="relative rounded-3xl overflow-hidden h-[400px] md:h-[500px] mb-6 group shadow-2xl">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={images[0].src}
              alt={images[0].alt}
              referrerPolicy="no-referrer"
              loading="eager"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal/60 to-transparent" aria-hidden="true" />
            <div className="absolute bottom-6 left-6">
              <span className="bg-brand-teal text-white text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider">
                {images[0].label}
              </span>
            </div>
          </div>

          {/* Grid of remaining images */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {images.slice(1).map((image, index) => (
              <figure
                key={index}
                className={`relative rounded-2xl overflow-hidden group shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 ${
                  index === 0 ? "md:col-span-2 h-72" : "h-56"
                }`}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={image.src}
                  alt={image.alt}
                  referrerPolicy="no-referrer"
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-brand-charcoal/0 group-hover:bg-brand-charcoal/40 transition-colors duration-300" aria-hidden="true" />
                <figcaption className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="bg-brand-teal/90 backdrop-blur-sm text-white text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider">
                    {image.label}
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        {/* Internal Links CTA */}
        <div className="mt-16 text-center space-y-4">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Like What You See?</h2>
          <p className="text-gray-600 dark:text-gray-400">
            Explore our{" "}
            <Link href="/facilities" className="text-brand-teal hover:underline font-semibold">full facilities</Link>
            {" "}or{" "}
            <Link href="/membership" className="text-brand-teal hover:underline font-semibold">join as a member</Link>{" "}today.
          </p>
        </div>
      </div>
    </div>
  );
}

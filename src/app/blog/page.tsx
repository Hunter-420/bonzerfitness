import Link from 'next/link';
import { getSortedPostsData } from '@/lib/blog';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Fitness Blog Pokhara | Gym Tips & Workout Guides – Bonzer Fitness",
  description:
    "Read expert fitness tips, workout guides, and gym advice from Bonzer Fitness & Health Club in Pokhara. Articles on weight loss, muscle building, personal training, and more.",
  keywords: [
    "fitness blog Pokhara",
    "gym tips Pokhara",
    "workout guides Nepal",
    "weight loss tips Pokhara",
    "muscle building guide",
    "beginner gym guide Pokhara",
    "Bonzer Fitness blog",
  ],
  alternates: {
    canonical: "https://bonzerfitness.laganiforum.com/blog",
  },
  openGraph: {
    title: "Fitness Blog | Gym Tips & Workout Guides – Bonzer Fitness Pokhara",
    description: "Expert fitness tips, workout plans, and gym advice from Pokhara's top fitness club.",
    url: "https://bonzerfitness.laganiforum.com/blog",
  },
  twitter: {
    card: "summary",
    title: "Fitness Blog | Bonzer Fitness Pokhara",
    description: "Expert gym tips, workout guides, and fitness advice from Pokhara's best gym.",
  },
};

export default function BlogPage() {
  const allPostsData = getSortedPostsData();

  return (
    <div className="min-h-screen bg-brand-light dark:bg-gray-900">
      <div className="container mx-auto px-4 py-16 pt-32">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            Fitness Blog <span className="text-brand-teal">Pokhara</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-4">
            Expert gym tips, workout guides, and health advice from the certified trainers at Bonzer Fitness &amp; Health Club in Pokhara.
          </p>
          <p className="text-gray-500 dark:text-gray-400 mb-12">
            Looking for more?{" "}
            <Link href="/faq" className="text-brand-teal hover:underline font-semibold">Read our FAQ</Link>
            {" "}or{" "}
            <Link href="/personal-training" className="text-brand-teal hover:underline font-semibold">learn about personal training</Link>.
          </p>

          <section aria-label="Blog articles">
            <h2 className="sr-only">Latest Fitness Articles</h2>
            <div className="grid gap-8">
              {allPostsData.map(({ slug, title, date, description }) => (
                <article key={slug} className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow">
                  <Link href={`/blog/${slug}`} className="block">
                    <h2 className="text-2xl font-bold text-brand-teal mb-2 hover:opacity-80 transition-opacity">
                      {title}
                    </h2>
                    <time
                      dateTime={date}
                      className="text-sm text-gray-500 dark:text-gray-400 mb-4 block"
                    >
                      {new Date(date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </time>
                    <p className="text-gray-700 dark:text-gray-300">
                      {description}
                    </p>
                    <div className="mt-4 font-semibold text-brand-teal hover:opacity-80 transition-opacity" aria-label={`Read more about ${title}`}>
                      Read more &rarr;
                    </div>
                  </Link>
                </article>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

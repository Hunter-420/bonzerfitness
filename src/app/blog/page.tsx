import Link from 'next/link';
import { getSortedPostsData } from '@/lib/blog';

export const metadata = {
  title: 'Blog | Bonzer Fitness & Health Club',
  description: 'Read the latest fitness tips, gym news, and health advice from Bonzer Fitness in Pokhara.',
};

export default function BlogPage() {
  const allPostsData = getSortedPostsData();

  return (
    <div className="min-h-screen bg-brand-light dark:bg-gray-900">
      <div className="container mx-auto px-4 py-16 pt-32">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">Fitness Blog</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-12">
            Insights, tips, and news to fuel your fitness journey.
          </p>

          <div className="grid gap-8">
            {allPostsData.map(({ slug, title, date, description }) => (
              <article key={slug} className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow">
                <Link href={`/blog/${slug}`} className="block">
                  <h2 className="text-2xl font-bold text-brand-orange mb-2 hover:opacity-80 transition-opacity">
                    {title}
                  </h2>
                  <div className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                    {new Date(date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </div>
                  <p className="text-gray-700 dark:text-gray-300">
                    {description}
                  </p>
                  <div className="mt-4 font-semibold text-brand-orange hover:opacity-80 transition-opacity">
                    Read more &rarr;
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

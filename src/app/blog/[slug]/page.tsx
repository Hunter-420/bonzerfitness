import { getPostData, getSortedPostsData } from '@/lib/blog';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { SocialShare } from '@/components/ui/SocialShare';
import type { Metadata } from 'next';

const BASE_URL = 'https://bonzerfitness.laganiforum.com';

export async function generateStaticParams() {
  const posts = getSortedPostsData();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  try {
    const postData = await getPostData(slug);
    return {
      title: `${postData.title} | Bonzer Fitness Blog`,
      description: postData.description,
      alternates: {
        canonical: `${BASE_URL}/blog/${slug}`,
      },
      openGraph: {
        title: `${postData.title} | Bonzer Fitness Blog`,
        description: postData.description,
        url: `${BASE_URL}/blog/${slug}`,
        type: 'article',
        publishedTime: postData.date,
        authors: ['Bonzer Fitness & Health Club'],
        siteName: 'Bonzer Fitness & Health Club',
      },
      twitter: {
        card: 'summary_large_image',
        title: `${postData.title} | Bonzer Fitness Blog`,
        description: postData.description,
      },
    };
  } catch {
    return {
      title: 'Post Not Found | Bonzer Fitness Blog',
    };
  }
}

function estimateReadingTime(content: string): number {
  const wordsPerMinute = 200;
  const words = content.replace(/<[^>]*>/g, '').split(/\s+/).length;
  return Math.ceil(words / wordsPerMinute);
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  let postData;

  try {
    postData = await getPostData(slug);
  } catch {
    notFound();
  }

  const readingTime = estimateReadingTime(postData.content);

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: postData.title,
    description: postData.description,
    author: {
      '@type': 'Organization',
      name: 'Bonzer Fitness & Health Club',
      url: BASE_URL,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Bonzer Fitness & Health Club',
      logo: {
        '@type': 'ImageObject',
        url: `${BASE_URL}/logo.png`,
      },
    },
    datePublished: postData.date,
    dateModified: postData.date,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${BASE_URL}/blog/${slug}`,
    },
    url: `${BASE_URL}/blog/${slug}`,
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: `${BASE_URL}/blog` },
      { '@type': 'ListItem', position: 3, name: postData.title, item: `${BASE_URL}/blog/${slug}` },
    ],
  };

  return (
    <div className="min-h-screen bg-white dark:bg-brand-charcoal">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <div className="container mx-auto px-4 py-16 pt-32">
        <div className="max-w-3xl mx-auto">

          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
              <li><Link href="/" className="hover:text-brand-teal transition-colors">Home</Link></li>
              <li aria-hidden="true">/</li>
              <li><Link href="/blog" className="hover:text-brand-teal transition-colors">Blog</Link></li>
              <li aria-hidden="true">/</li>
              <li className="text-gray-900 dark:text-white truncate max-w-xs">{postData.title}</li>
            </ol>
          </nav>

          <article className="prose lg:prose-xl dark:prose-invert max-w-none">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-brand-charcoal dark:text-white">
              {postData.title}
            </h1>

            {/* Meta info */}
            <div className="flex flex-wrap items-center gap-4 text-gray-500 dark:text-gray-400 mb-8 pb-8 border-b border-gray-200 dark:border-gray-800 not-prose">
              <time dateTime={postData.date} className="text-sm">
                {new Date(postData.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </time>
              <span className="text-sm">·</span>
              <span className="text-sm">{readingTime} min read</span>
              <span className="text-sm">·</span>
              <span className="text-sm text-brand-teal font-medium">Bonzer Fitness & Health Club</span>
            </div>

            <div
              className="mt-8 text-gray-800 dark:text-gray-200"
              dangerouslySetInnerHTML={{ __html: postData.content }}
            />
          </article>

          {/* Social Share */}
          <SocialShare url={`${BASE_URL}/blog/${slug}`} title={postData.title} />

          {/* CTA Box */}
          <div className="mt-12 bg-brand-light dark:bg-gray-900 rounded-2xl p-8 border border-gray-100 dark:border-gray-800">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
              Ready to Start Your Fitness Journey?
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Join Bonzer Fitness &amp; Health Club in Pokhara — rated 4.9/5 by 100+ members. View our membership plans or contact us today.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/membership"
                className="inline-block bg-brand-teal text-white font-bold px-6 py-3 rounded-lg hover:bg-brand-teal-dark transition-colors"
              >
                View Membership Plans
              </Link>
              <Link
                href="/contact"
                className="inline-block border border-brand-teal text-brand-teal font-bold px-6 py-3 rounded-lg hover:bg-brand-teal hover:text-white transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>

          {/* Related Links */}
          <div className="mt-8 text-center text-gray-600 dark:text-gray-400">
            <p>
              <Link href="/blog" className="text-brand-teal hover:underline font-semibold">&larr; Back to all articles</Link>
              {" "}·{" "}
              <Link href="/personal-training" className="text-brand-teal hover:underline font-semibold">Personal Training</Link>
              {" "}·{" "}
              <Link href="/faq" className="text-brand-teal hover:underline font-semibold">FAQ</Link>
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}

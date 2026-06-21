import { getPostData, getSortedPostsData } from '@/lib/blog';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { SocialShare } from '@/components/ui/SocialShare';

export async function generateStaticParams() {
  const posts = getSortedPostsData();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  try {
    const postData = await getPostData(slug);
    return {
      title: `${postData.title} | Bonzer Fitness Blog`,
      description: postData.description,
    };
  } catch (error) {
    return {
      title: 'Post Not Found | Bonzer Fitness Blog',
    };
  }
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  let postData;
  
  try {
    postData = await getPostData(slug);
  } catch (error) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-16 pt-32">
      <div className="max-w-3xl mx-auto">
        <Link href="/blog" className="text-brand-teal hover:opacity-80 transition-opacity mb-8 inline-block">
          &larr; Back to all posts
        </Link>
        <article className="prose lg:prose-xl dark:prose-invert">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-brand-charcoal dark:text-white">
            {postData.title}
          </h1>
          <div className="text-gray-500 dark:text-gray-400 mb-8 pb-8 border-b border-gray-200 dark:border-gray-800">
            {new Date(postData.date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}
          </div>
          <div 
            className="mt-8 text-gray-800 dark:text-gray-200"
            dangerouslySetInnerHTML={{ __html: postData.content }} 
          />
          <SocialShare url={`https://bonzerfitness.laganiforum.com/blog/${slug}`} title={postData.title} />
        </article>
      </div>
    </div>
  );
}

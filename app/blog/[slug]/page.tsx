import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getAllBlogSlugs, getBlogPost } from '@/lib/blog';
import { markdownToHtml } from '@/lib/markdown';

export async function generateStaticParams() {
  return getAllBlogSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = getBlogPost(params.slug);
  if (!post) return { title: 'Post Not Found' };

  return {
    title: post.title,
    description: post.metaDescription || post.excerpt,
    keywords: post.keywords.join(', '),
  };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getBlogPost(params.slug);

  if (!post) {
    notFound();
  }

  const htmlContent = markdownToHtml(post.content);

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center">
        {post.featuredImage && (
          <Image
            src={post.featuredImage}
            alt={post.title}
            fill
            className="object-cover brightness-50"
          />
        )}
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <h1 className="text-5xl font-bold mb-4">{post.title}</h1>
          <div className="flex items-center space-x-4 text-white/90">
            <span>{post.author}</span>
            <span>•</span>
            <time>{new Date(post.date).toLocaleDateString('en-AU', { year: 'numeric', month: 'long', day: 'numeric' })}</time>
          </div>
        </div>
      </section>

      {/* Content */}
      <article className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
          </div>

          {/* Keywords */}
          {post.keywords.length > 0 && (
            <div className="mt-12 pt-8 border-t border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Tags:</h3>
              <div className="flex flex-wrap gap-2">
                {post.keywords.map((keyword) => (
                  <span key={keyword} className="bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm">
                    {keyword}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* CTA */}
          <div className="mt-12 bg-primary-600 rounded-lg p-8 text-center text-white">
            <h3 className="text-2xl font-bold mb-4">Need Professional Pet Grooming?</h3>
            <p className="text-primary-100 mb-6">
              Let Brisbane's expert groomers take care of your pet
            </p>
            <a href="tel:1300VETGROOM" className="bg-white hover:bg-gray-100 text-primary-600 px-8 py-3 rounded-lg font-bold transition inline-block">
              Call 1300 VET GROOM
            </a>
          </div>

          {/* Back to Blog */}
          <div className="mt-8 text-center">
            <Link href="/blog" className="text-primary-600 hover:text-primary-700 font-semibold">
              ← Back to Blog
            </Link>
          </div>
        </div>
      </article>
    </>
  );
}

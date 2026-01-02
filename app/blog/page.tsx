import { Metadata } from 'next';
import { getAllBlogPosts } from '@/lib/blog';
import BlogCard from '@/components/BlogCard';

export const metadata: Metadata = {
  title: 'Pet Grooming Blog - Tips, Advice & News',
  description: 'Expert pet grooming tips, advice, and news from Brisbane\'s leading pet groomers. Learn how to care for your pets between grooming sessions.',
};

export default function BlogPage() {
  const posts = getAllBlogPosts();

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-800 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-5xl font-bold mb-6">Pet Grooming Blog</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Expert tips, advice, and insights from Brisbane's professional pet groomers
          </p>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {posts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-xl text-gray-600">No blog posts yet. Check back soon for expert grooming tips and advice!</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <BlogCard key={post.slug} post={post} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Need Professional Pet Grooming?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Book your appointment with Brisbane's trusted pet groomers
          </p>
          <a href="tel:1300VETGROOM" className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 rounded-lg font-bold transition inline-block">
            Call 1300 VET GROOM
          </a>
        </div>
      </section>
    </>
  );
}

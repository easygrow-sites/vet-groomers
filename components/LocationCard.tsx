import Link from 'next/link';

interface LocationCardProps {
  name: string;
  slug: string;
}

export default function LocationCard({ name, slug }: LocationCardProps) {
  return (
    <Link href={`/locations/${slug}`} className="block bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200 group">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition">{name}</h3>
          <p className="text-gray-600">Professional Pet Grooming Services</p>
        </div>
        <svg className="w-8 h-8 text-primary-600 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </div>
    </Link>
  );
}

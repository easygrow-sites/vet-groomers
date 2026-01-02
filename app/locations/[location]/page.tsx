import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getAllLocationSlugs, getLocation } from '@/lib/locations';
import { getAllServices } from '@/lib/services';
import ServiceCard from '@/components/ServiceCard';
import { getServiceImage } from '@/lib/images';

export async function generateStaticParams() {
  return getAllLocationSlugs().map((slug) => ({ location: slug }));
}

export async function generateMetadata({ params }: { params: { location: string } }): Promise<Metadata> {
  const location = getLocation(params.location);
  if (!location) return { title: 'Location Not Found' };

  return {
    title: `Pet Grooming ${location.name} | Vet Groomers Brisbane`,
    description: `Professional pet grooming services in ${location.name}. Expert dog and cat grooming, mobile services, and specialized care. Fast response times. Call 1300 VET GROOM.`,
    keywords: `pet grooming ${location.name}, dog grooming ${location.name}, cat grooming ${location.name}, mobile grooming ${location.name}`,
  };
}

export default function LocationPage({ params }: { params: { location: string } }) {
  const location = getLocation(params.location);
  const services = getAllServices();

  if (!location) {
    notFound();
  }

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-800 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <h1 className="text-5xl font-bold mb-4">Pet Grooming in {location.name}</h1>
          <p className="text-xl mb-8">
            Professional pet grooming services for {location.name} residents. Fast, reliable, and affordable.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="tel:1300VETGROOM" className="bg-white hover:bg-gray-100 text-primary-600 px-8 py-3 rounded-lg font-bold transition text-center">
              Call 1300 VET GROOM
            </a>
            <Link href="/contact" className="bg-primary-700 hover:bg-primary-800 text-white px-8 py-3 rounded-lg font-bold transition text-center">
              Request Free Quote
            </Link>
          </div>
        </div>
      </section>

      {/* Local Services */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Pet Grooming Services in {location.name}
            </h2>
            <p className="text-xl text-gray-600">
              We offer comprehensive grooming services for pets in {location.name} and surrounding areas
            </p>
          </div>

          <div className="prose max-w-none mb-12">
            <p className="text-lg text-gray-600">
              Vet Groomers is proud to serve pet owners in {location.name} with professional grooming services.
              Our experienced team of certified groomers brings over 15 years of expertise to every appointment.
              Whether you have a dog, cat, or other furry companion, we provide personalized care tailored to your pet's needs.
            </p>
            <p className="text-lg text-gray-600 mt-4">
              Located in the heart of Brisbane with mobile services extending throughout {location.name}, we make pet
              grooming convenient and stress-free. Our team understands the local community and is committed to providing
              exceptional service to every {location.name} resident.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.slice(0, 6).map((service) => (
              <ServiceCard
                key={service.slug}
                name={service.name}
                slug={service.slug}
                description={service.description}
                image={getServiceImage(service.slug)}
              />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/services" className="inline-block bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 rounded-lg font-semibold transition">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us for Location */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why {location.name} Residents Choose Vet Groomers
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="text-primary-600 text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Fast Response Times</h3>
              <p className="text-gray-600">
                We understand {location.name} residents need quick, reliable service. Our mobile grooming team
                can reach your location within 30 minutes for urgent requests.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="text-primary-600 text-4xl mb-4">🏆</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Local Expertise</h3>
              <p className="text-gray-600">
                Serving {location.name} for years, we understand the specific needs of pets in this area and
                have built lasting relationships with the community.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="text-primary-600 text-4xl mb-4">💰</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Competitive Pricing</h3>
              <p className="text-gray-600">
                We offer transparent, competitive pricing with no hidden fees. {location.name} residents
                receive quality service at fair rates.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service + Location Links */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Popular Services in {location.name}
            </h2>
            <p className="text-xl text-gray-600">
              Click to learn more about each service available in {location.name}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map((service) => (
              <Link
                key={service.slug}
                href={`/${service.slug}-in-${location.slug}`}
                className="block bg-white p-6 rounded-lg shadow hover:shadow-xl transition border border-gray-200 group"
              >
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-primary-600">
                  {service.name} in {location.name}
                </h3>
                <p className="text-gray-600 text-sm line-clamp-2">{service.description}</p>
                <span className="text-primary-600 font-semibold text-sm mt-2 inline-block">Learn More →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-primary-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              What {location.name} Clients Say
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex text-yellow-400 mb-4">
                {'★'.repeat(5)}
              </div>
              <p className="text-gray-600 mb-4">
                "Best grooming service in {location.name}! My golden retriever always looks amazing and
                the staff are so gentle and professional."
              </p>
              <p className="font-semibold text-gray-900">- Sarah M., {location.name}</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex text-yellow-400 mb-4">
                {'★'.repeat(5)}
              </div>
              <p className="text-gray-600 mb-4">
                "Mobile grooming service is a game changer! They came right to my house in {location.name}.
                So convenient and my cat was much less stressed."
              </p>
              <p className="font-semibold text-gray-900">- Michael T., {location.name}</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex text-yellow-400 mb-4">
                {'★'.repeat(5)}
              </div>
              <p className="text-gray-600 mb-4">
                "Excellent service! Been using them for 2 years here in {location.name}. Always professional,
                punctual, and my dogs love them."
              </p>
              <p className="font-semibold text-gray-900">- Emma L., {location.name}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Local CTA */}
      <section className="bg-primary-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Book Your {location.name} Pet Grooming Today
          </h2>
          <p className="text-xl text-primary-100 mb-8">
            Professional grooming services for {location.name} residents. Call now for same-day appointments!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:1300VETGROOM" className="bg-white hover:bg-gray-100 text-primary-600 px-8 py-3 rounded-lg font-bold transition">
              Call 1300 VET GROOM
            </a>
            <Link href="/contact" className="bg-primary-700 hover:bg-primary-800 text-white px-8 py-3 rounded-lg font-bold transition">
              Request Free Quote
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

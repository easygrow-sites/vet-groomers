import Image from 'next/image';
import Link from 'next/link';
import { getAllServices } from '@/lib/services';
import { getAllLocations } from '@/lib/locations';
import ServiceCard from '@/components/ServiceCard';
import { getServiceImage, heroImages } from '@/lib/images';

export default function HomePage() {
  const services = getAllServices();
  const locations = getAllLocations();

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center">
        <Image
          src={heroImages.homepage}
          alt="Professional Pet Grooming Brisbane"
          fill
          className="object-cover brightness-50"
          priority
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Brisbane's Premier<br />Pet Grooming Experts
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl">
            Professional grooming services for dogs and cats. Expert care, affordable rates, and convenient mobile options available.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="tel:1300VETGROOM" className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-lg font-bold text-lg transition text-center">
              Call 1300 VET GROOM
            </a>
            <Link href="/contact" className="bg-white hover:bg-gray-100 text-gray-900 px-8 py-4 rounded-lg font-bold text-lg transition text-center">
              Get Free Quote
            </Link>
          </div>
        </div>
      </section>

      {/* Trust Signals */}
      <section className="bg-primary-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-primary-600 mb-2">15+</div>
              <div className="text-gray-700">Years Experience</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary-600 mb-2">50+</div>
              <div className="text-gray-700">Service Areas</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary-600 mb-2">10k+</div>
              <div className="text-gray-700">Happy Pets</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary-600 mb-2">24/7</div>
              <div className="text-gray-700">Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Pet Grooming Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive grooming services for all breeds and sizes. From basic baths to full show preparation.
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

      {/* Service Areas */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Serving Brisbane & Surrounding Areas</h2>
            <p className="text-xl text-gray-600">
              Professional pet grooming services across {locations.length}+ locations in Brisbane
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {locations.slice(0, 15).map((location) => (
              <Link
                key={location.slug}
                href={`/locations/${location.slug}`}
                className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition text-center"
              >
                <span className="font-semibold text-gray-900 hover:text-primary-600">
                  {location.name}
                </span>
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/locations" className="text-primary-600 hover:text-primary-700 font-semibold text-lg">
              View All Service Areas →
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Vet Groomers?</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-primary-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Certified Professionals</h3>
              <p className="text-gray-600">
                All our groomers are certified and experienced with all breeds and temperaments.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-primary-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Fast Service</h3>
              <p className="text-gray-600">
                Same-day appointments available. We respect your time and your pet's comfort.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-primary-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">100% Satisfaction</h3>
              <p className="text-gray-600">
                Your pet's happiness is guaranteed. We don't stop until they look and feel great.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Ready to Pamper Your Pet?
          </h2>
          <p className="text-xl text-primary-100 mb-8">
            Book your grooming appointment today. Professional service, competitive rates.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:1300VETGROOM" className="bg-white hover:bg-gray-100 text-primary-600 px-8 py-4 rounded-lg font-bold text-lg transition">
              Call 1300 VET GROOM
            </a>
            <Link href="/contact" className="bg-primary-700 hover:bg-primary-800 text-white px-8 py-4 rounded-lg font-bold text-lg transition">
              Request Free Quote
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

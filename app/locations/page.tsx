import { Metadata } from 'next';
import { getAllLocations } from '@/lib/locations';
import LocationCard from '@/components/LocationCard';

export const metadata: Metadata = {
  title: 'Service Areas - Pet Grooming Across Brisbane',
  description: 'Vet Groomers serves 50+ locations across Brisbane. Find professional pet grooming services in your suburb. Mobile grooming available.',
};

export default function LocationsPage() {
  const locations = getAllLocations();

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-800 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-5xl font-bold mb-6">Our Service Areas</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Professional pet grooming services across {locations.length}+ locations in Brisbane and surrounding areas. Find your suburb below.
          </p>
        </div>
      </section>

      {/* Locations Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Where We Serve</h2>
            <p className="text-xl text-gray-600">
              Click on your suburb to learn more about our services in your area
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {locations.map((location) => (
              <LocationCard key={location.slug} name={location.name} slug={location.slug} />
            ))}
          </div>
        </div>
      </section>

      {/* Coverage Area Info */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Full Brisbane Coverage</h2>
            <p className="text-xl text-gray-600 mb-8">
              We provide professional pet grooming services throughout the greater Brisbane area
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="text-primary-600 text-5xl font-bold mb-2">{locations.length}+</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Service Locations</h3>
              <p className="text-gray-600">We serve suburbs across all of Brisbane</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="text-primary-600 text-5xl font-bold mb-2">24/7</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Availability</h3>
              <p className="text-gray-600">Emergency grooming services available</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="text-primary-600 text-5xl font-bold mb-2">30min</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Response Time</h3>
              <p className="text-gray-600">Fast mobile grooming service</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile Service */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-primary-600 rounded-2xl p-12 text-center text-white">
            <h2 className="text-4xl font-bold mb-4">Mobile Grooming Available</h2>
            <p className="text-xl text-primary-100 mb-8 max-w-3xl mx-auto">
              Can't see your suburb? We offer mobile pet grooming services that come to you. Contact us to check if we can service your area.
            </p>
            <a href="tel:1300VETGROOM" className="bg-white hover:bg-gray-100 text-primary-600 px-8 py-3 rounded-lg font-bold transition inline-block">
              Call 1300 VET GROOM
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Book Your Pet Grooming Today
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Professional grooming services available in your area
          </p>
          <a href="/contact" className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 rounded-lg font-bold transition inline-block">
            Request Free Quote
          </a>
        </div>
      </section>
    </>
  );
}

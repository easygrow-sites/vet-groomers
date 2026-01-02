import { Metadata } from 'next';
import Image from 'next/image';
import { getAllServices } from '@/lib/services';
import ServiceCard from '@/components/ServiceCard';
import { getServiceImage } from '@/lib/images';

export const metadata: Metadata = {
  title: 'Pet Grooming Services Brisbane - Dog & Cat Grooming',
  description: 'Comprehensive pet grooming services in Brisbane. Dog grooming, cat grooming, mobile services, de-shedding, nail clipping, and more. Book your appointment today!',
};

export default function ServicesPage() {
  const services = getAllServices();

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-800 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-5xl font-bold mb-6">Our Pet Grooming Services</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Professional grooming services for all breeds and sizes. From basic baths to show preparation, we provide expert care for your furry family members.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <ServiceCard
                key={service.slug}
                name={service.name}
                slug={service.slug}
                description={service.description}
                image={getServiceImage(service.slug)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Services */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Our Grooming Services?</h2>
            <p className="text-xl text-gray-600">Professional care you can trust</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Certified Groomers</h3>
              <p className="text-gray-600">All staff are professionally trained and certified</p>
            </div>
            <div className="text-center">
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Quality Products</h3>
              <p className="text-gray-600">Premium shampoos and grooming products</p>
            </div>
            <div className="text-center">
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Flexible Scheduling</h3>
              <p className="text-gray-600">Same-day appointments available</p>
            </div>
            <div className="text-center">
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Satisfaction Guaranteed</h3>
              <p className="text-gray-600">100% happiness guarantee or your money back</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Ready to Book Your Pet's Grooming?
          </h2>
          <p className="text-xl text-primary-100 mb-8">
            Contact us today for a free quote or to schedule an appointment
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:1300VETGROOM" className="bg-white hover:bg-gray-100 text-primary-600 px-8 py-3 rounded-lg font-bold transition">
              Call 1300 VET GROOM
            </a>
            <a href="/contact" className="bg-primary-700 hover:bg-primary-800 text-white px-8 py-3 rounded-lg font-bold transition">
              Request Free Quote
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

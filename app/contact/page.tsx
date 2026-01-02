import Image from 'next/image';
import { Metadata } from 'next';
import ContactForm from '@/components/ContactForm';
import { heroImages } from '@/lib/images';

export const metadata: Metadata = {
  title: 'Contact Us - Get Your Free Pet Grooming Quote',
  description: 'Contact Vet Groomers Brisbane for professional pet grooming services. Call 1300 VET GROOM or request a free quote online. Serving 50+ locations across Brisbane.',
};

export default function ContactPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[300px] flex items-center">
        <Image
          src={heroImages.contact}
          alt="Contact Vet Groomers Brisbane"
          fill
          className="object-cover brightness-50"
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <h1 className="text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl">Get in touch for a free quote or book your appointment</p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Get In Touch</h2>
              <p className="text-lg text-gray-600 mb-8">
                Ready to book a grooming appointment for your pet? Contact us today and experience the difference professional care makes.
              </p>

              <div className="space-y-6 mb-8">
                <div className="flex items-start">
                  <div className="bg-primary-100 p-3 rounded-lg mr-4">
                    <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Phone</h3>
                    <a href="tel:1300VETGROOM" className="text-primary-600 hover:text-primary-700 text-lg font-semibold">
                      1300 VET GROOM
                    </a>
                    <p className="text-gray-600 text-sm">Available 7 days a week, 7am - 7pm</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-primary-100 p-3 rounded-lg mr-4">
                    <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                    <a href="mailto:info@vetgroomers.com.au" className="text-primary-600 hover:text-primary-700">
                      info@vetgroomers.com.au
                    </a>
                    <p className="text-gray-600 text-sm">We respond within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-primary-100 p-3 rounded-lg mr-4">
                    <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Service Area</h3>
                    <p className="text-gray-600">
                      Serving Brisbane CBD and 50+ surrounding suburbs
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-primary-100 p-3 rounded-lg mr-4">
                    <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Business Hours</h3>
                    <p className="text-gray-600">Monday - Friday: 7am - 7pm</p>
                    <p className="text-gray-600">Saturday: 8am - 6pm</p>
                    <p className="text-gray-600">Sunday: 9am - 5pm</p>
                  </div>
                </div>
              </div>

              {/* Why Contact Us */}
              <div className="bg-primary-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Why Choose Vet Groomers?</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-primary-600 mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">Certified professional groomers</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-primary-600 mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">15+ years experience</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-primary-600 mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">Mobile grooming available</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-primary-600 mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">Competitive pricing</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-primary-600 mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">100% satisfaction guarantee</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Request a Free Quote</h2>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas CTA */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Serving All Brisbane Suburbs
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Professional pet grooming services available in your area
          </p>
          <a href="/locations" className="inline-block bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 rounded-lg font-semibold transition">
            View All Service Areas
          </a>
        </div>
      </section>
    </>
  );
}

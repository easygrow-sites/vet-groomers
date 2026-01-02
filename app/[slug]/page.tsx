import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getAllServiceSlugs, getService } from '@/lib/services';
import { getAllLocationSlugs, getLocation } from '@/lib/locations';
import { getUniqueImage } from '@/lib/images';
import ContactForm from '@/components/ContactForm';

// Parse slug format: "service-in-location"
function parseSlug(slug: string): { serviceSlug: string; locationSlug: string } | null {
  const parts = slug.split('-in-');
  if (parts.length !== 2) return null;
  return { serviceSlug: parts[0], locationSlug: parts[1] };
}

export async function generateStaticParams() {
  const params = [];
  const serviceSlugs = getAllServiceSlugs();
  const locationSlugs = getAllLocationSlugs();

  for (const serviceSlug of serviceSlugs) {
    for (const locationSlug of locationSlugs) {
      params.push({ slug: `${serviceSlug}-in-${locationSlug}` });
    }
  }

  return params;
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const parsed = parseSlug(params.slug);
  if (!parsed) return { title: 'Page Not Found' };

  const service = getService(parsed.serviceSlug);
  const location = getLocation(parsed.locationSlug);

  if (!service || !location) return { title: 'Page Not Found' };

  return {
    title: `${service.name} in ${location.name} - 24/7 Fast Response | Vet Groomers`,
    description: `Professional ${service.name.toLowerCase()} in ${location.name}, Brisbane. Expert pet groomers available 24/7. Same-day appointments. Call 1300 VET GROOM for fast service.`,
    keywords: `${service.name} ${location.name}, ${location.name} ${service.name}, best ${service.name} in ${location.name}, pet grooming ${location.name}`,
  };
}

export default function ServiceLocationPage({ params }: { params: { slug: string } }) {
  const parsed = parseSlug(params.slug);

  if (!parsed) {
    notFound();
  }

  const service = getService(parsed.serviceSlug);
  const location = getLocation(parsed.locationSlug);

  if (!service || !location) {
    notFound();
  }

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[500px] flex items-center">
        <Image
          src={getUniqueImage(service.slug, 2)}
          alt={`${service.name} in ${location.name}`}
          fill
          className="object-cover brightness-50"
          priority
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Professional {service.name} in {location.name}
          </h1>
          <p className="text-xl md:text-2xl mb-6">
            Fast, reliable, and affordable {service.name.toLowerCase()} services for {location.name} residents
          </p>
          <div className="flex items-center space-x-2 mb-8">
            <div className="flex text-yellow-400 text-xl">
              {'★'.repeat(5)}
            </div>
            <span className="text-white font-semibold">4.9/5 from 1,200+ reviews</span>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="tel:1300VETGROOM" className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-lg font-bold text-lg transition text-center">
              Call 1300 VET GROOM
            </a>
            <a href="#quote-form" className="bg-white hover:bg-gray-100 text-gray-900 px-8 py-4 rounded-lg font-bold text-lg transition text-center">
              Get Free Quote
            </a>
          </div>
        </div>
      </section>

      {/* Trust Signals */}
      <section className="bg-primary-600 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-white">
            <div>
              <div className="font-bold text-2xl mb-1">15+ Years</div>
              <div className="text-primary-100 text-sm">Experience</div>
            </div>
            <div>
              <div className="font-bold text-2xl mb-1">24/7</div>
              <div className="text-primary-100 text-sm">Available</div>
            </div>
            <div>
              <div className="font-bold text-2xl mb-1">100%</div>
              <div className="text-primary-100 text-sm">Satisfaction</div>
            </div>
            <div>
              <div className="font-bold text-2xl mb-1">Licensed</div>
              <div className="text-primary-100 text-sm">& Insured</div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Content Column */}
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Expert {service.name} Services in {location.name}
              </h2>

              <p className="text-lg text-gray-600 mb-6">
                When you need professional {service.name.toLowerCase()} in {location.name}, Vet Groomers is your trusted choice.
                We've been providing top-quality pet grooming services to {location.name} residents for over 15 years, building
                a reputation for excellence, reliability, and compassionate care for all pets.
              </p>

              <p className="text-lg text-gray-600 mb-6">
                Our team of certified professional groomers understands that every pet is unique. Whether you have a high-energy
                puppy, a senior cat, or a nervous rescue, we provide personalized {service.name.toLowerCase()} tailored to your
                pet's specific needs and temperament. We serve all breeds and sizes throughout {location.name} and surrounding areas.
              </p>

              <div className="relative h-[400px] mb-8 rounded-lg overflow-hidden">
                <Image
                  src={getUniqueImage(service.slug, 1)}
                  alt={`${service.name} service in ${location.name}`}
                  fill
                  className="object-cover"
                />
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Why Choose Our {service.name} in {location.name}?
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-primary-50 p-6 rounded-lg">
                  <h4 className="font-bold text-gray-900 mb-2 flex items-center">
                    <svg className="w-6 h-6 text-primary-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Local {location.name} Experts
                  </h4>
                  <p className="text-gray-600 text-sm">
                    We know {location.name} inside and out. Fast response times and familiarity with local pet owners' needs.
                  </p>
                </div>

                <div className="bg-primary-50 p-6 rounded-lg">
                  <h4 className="font-bold text-gray-900 mb-2 flex items-center">
                    <svg className="w-6 h-6 text-primary-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Certified Professionals
                  </h4>
                  <p className="text-gray-600 text-sm">
                    All our groomers are fully certified, insured, and trained in the latest {service.name.toLowerCase()} techniques.
                  </p>
                </div>

                <div className="bg-primary-50 p-6 rounded-lg">
                  <h4 className="font-bold text-gray-900 mb-2 flex items-center">
                    <svg className="w-6 h-6 text-primary-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Same-Day Service Available
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Need urgent {service.name.toLowerCase()}? We offer same-day appointments for {location.name} customers.
                  </p>
                </div>

                <div className="bg-primary-50 p-6 rounded-lg">
                  <h4 className="font-bold text-gray-900 mb-2 flex items-center">
                    <svg className="w-6 h-6 text-primary-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    100% Satisfaction Guarantee
                  </h4>
                  <p className="text-gray-600 text-sm">
                    We stand behind our work. If you're not happy, we'll make it right or provide a full refund.
                  </p>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Our {service.name} Process in {location.name}
              </h3>
              <p className="text-gray-600 mb-4">
                When you choose Vet Groomers for {service.name.toLowerCase()} in {location.name}, here's what to expect:
              </p>

              <ol className="space-y-4 mb-8">
                <li className="flex items-start">
                  <span className="bg-primary-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">1</span>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Contact & Consultation</h4>
                    <p className="text-gray-600">Call us or fill out our online form. We'll discuss your pet's specific needs and schedule a convenient time.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="bg-primary-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">2</span>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Professional Assessment</h4>
                    <p className="text-gray-600">Our groomer evaluates your pet's coat, health, and temperament to customize the service.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="bg-primary-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">3</span>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Expert Service</h4>
                    <p className="text-gray-600">We perform the {service.name.toLowerCase()} using premium products and professional techniques, always prioritizing your pet's comfort.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="bg-primary-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">4</span>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Quality Check & Recommendations</h4>
                    <p className="text-gray-600">We ensure quality results and provide care recommendations for maintaining your pet between grooming sessions.</p>
                  </div>
                </li>
              </ol>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Frequently Asked Questions - {service.name} in {location.name}
              </h3>

              <div className="space-y-6">
                <div className="border-b border-gray-200 pb-6">
                  <h4 className="text-lg font-bold text-gray-900 mb-2">
                    How quickly can you provide {service.name.toLowerCase()} in {location.name}?
                  </h4>
                  <p className="text-gray-600">
                    We offer same-day service for most requests in {location.name}. Our mobile grooming team can typically
                    reach you within 30-60 minutes for urgent situations. For scheduled appointments, we can usually book
                    within 24-48 hours.
                  </p>
                </div>

                <div className="border-b border-gray-200 pb-6">
                  <h4 className="text-lg font-bold text-gray-900 mb-2">
                    What areas around {location.name} do you serve?
                  </h4>
                  <p className="text-gray-600">
                    We serve {location.name} and all surrounding suburbs within the greater Brisbane area. Our mobile
                    grooming service covers a 30km radius. If you're unsure whether we service your specific address,
                    give us a call and we'll let you know.
                  </p>
                </div>

                <div className="border-b border-gray-200 pb-6">
                  <h4 className="text-lg font-bold text-gray-900 mb-2">
                    How much does {service.name.toLowerCase()} cost in {location.name}?
                  </h4>
                  <p className="text-gray-600">
                    Pricing varies based on your pet's size, breed, and coat condition. We offer transparent, competitive
                    pricing with no hidden fees. Contact us for a free quote specific to your pet's needs. We also offer
                    package deals and discounts for multiple pets.
                  </p>
                </div>

                <div className="border-b border-gray-200 pb-6">
                  <h4 className="text-lg font-bold text-gray-900 mb-2">
                    Are you licensed and insured for work in {location.name}?
                  </h4>
                  <p className="text-gray-600">
                    Yes, absolutely. Vet Groomers is fully licensed, insured, and certified to operate throughout Brisbane
                    including {location.name}. All our groomers carry proper credentials and insurance coverage for your
                    peace of mind.
                  </p>
                </div>

                <div className="pb-6">
                  <h4 className="text-lg font-bold text-gray-900 mb-2">
                    What if my pet has special needs or behavioral issues?
                  </h4>
                  <p className="text-gray-600">
                    We're experienced handling pets with various special needs, anxieties, and behavioral challenges. Our
                    groomers are trained in gentle handling techniques and we'll work at your pet's pace. Let us know about
                    any concerns when booking and we'll ensure the right groomer is assigned.
                  </p>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div id="quote-form" className="bg-white p-6 rounded-lg shadow-xl border-2 border-primary-200 sticky top-24">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Get Free Quote
                </h3>
                <p className="text-gray-600 mb-6">
                  {service.name} in {location.name}
                </p>
                <ContactForm />
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <p className="text-center text-gray-600 mb-4">Or call us directly:</p>
                  <a href="tel:1300VETGROOM" className="block bg-primary-600 text-white text-center px-6 py-3 rounded-lg font-bold hover:bg-primary-700 transition">
                    1300 VET GROOM
                  </a>
                </div>
              </div>

              <div className="bg-primary-50 p-6 rounded-lg mt-6">
                <h4 className="font-bold text-gray-900 mb-4">Service Guarantee</h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-primary-600 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>100% satisfaction guaranteed</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-primary-600 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Licensed & insured groomers</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-primary-600 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>15+ years experience</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-primary-600 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Premium products used</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-primary-600 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Transparent pricing</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              What {location.name} Clients Say About Our {service.name}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex text-yellow-400 mb-3">
                {'★'.repeat(5)}
              </div>
              <p className="text-gray-600 mb-4">
                "Fantastic {service.name.toLowerCase()} service! My dog looks incredible and the team was so professional.
                Highly recommend to anyone in {location.name}."
              </p>
              <p className="font-semibold text-gray-900">- Jennifer R., {location.name}</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex text-yellow-400 mb-3">
                {'★'.repeat(5)}
              </div>
              <p className="text-gray-600 mb-4">
                "Best groomers in {location.name}! They arrived quickly, were incredibly gentle with my anxious cat,
                and did an amazing job. Will definitely use again."
              </p>
              <p className="font-semibold text-gray-900">- David M., {location.name}</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex text-yellow-400 mb-3">
                {'★'.repeat(5)}
              </div>
              <p className="text-gray-600 mb-4">
                "Professional, affordable, and excellent results. Been using Vet Groomers for 3 years now here in
                {location.name}. Never disappointed!"
              </p>
              <p className="font-semibold text-gray-900">- Lisa T., {location.name}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Other Services in {location.name}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link href={`/services/${service.slug}`} className="bg-white p-6 rounded-lg shadow hover:shadow-xl transition border border-gray-200">
              <h3 className="text-lg font-bold text-primary-600 mb-2">{service.name} Services</h3>
              <p className="text-gray-600 text-sm">View all {service.name.toLowerCase()} options across Brisbane</p>
            </Link>
            <Link href={`/locations/${location.slug}`} className="bg-white p-6 rounded-lg shadow hover:shadow-xl transition border border-gray-200">
              <h3 className="text-lg font-bold text-primary-600 mb-2">All Services in {location.name}</h3>
              <p className="text-gray-600 text-sm">Browse our complete service range for {location.name}</p>
            </Link>
            <Link href="/services" className="bg-white p-6 rounded-lg shadow hover:shadow-xl transition border border-gray-200">
              <h3 className="text-lg font-bold text-primary-600 mb-2">All Grooming Services</h3>
              <p className="text-gray-600 text-sm">Explore our full range of pet grooming services</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-primary-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Need {service.name} in {location.name}? Call Now!
          </h2>
          <p className="text-xl text-primary-100 mb-8">
            Professional, reliable pet grooming services available 24/7
          </p>
          <a href="tel:1300VETGROOM" className="bg-white hover:bg-gray-100 text-primary-600 px-12 py-4 rounded-lg font-bold text-xl transition inline-block">
            1300 VET GROOM
          </a>
          <p className="text-primary-100 mt-4">Fast response times • Same-day service available • 100% satisfaction guaranteed</p>
        </div>
      </section>
    </>
  );
}

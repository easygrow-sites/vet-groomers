import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import { heroImages } from '@/lib/images';

export const metadata: Metadata = {
  title: 'About Us - Brisbane Pet Grooming Experts',
  description: 'Learn about Vet Groomers Brisbane. Over 15 years of professional pet grooming experience. Certified groomers, modern facilities, and compassionate care.',
};

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center">
        <Image
          src={heroImages.about}
          alt="About Vet Groomers Brisbane"
          fill
          className="object-cover brightness-50"
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <h1 className="text-5xl font-bold mb-4">About Vet Groomers</h1>
          <p className="text-xl">Brisbane's Most Trusted Pet Grooming Service Since 2010</p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-lg text-gray-600 mb-4">
                Vet Groomers was founded in 2010 with a simple mission: to provide the highest quality pet grooming services in Brisbane. What started as a small grooming salon has grown into one of Brisbane's most trusted pet care providers, serving over 50 suburbs across the greater Brisbane area.
              </p>
              <p className="text-lg text-gray-600 mb-4">
                Our team of certified professional groomers has over 15 years of combined experience working with all breeds, sizes, and temperaments. We understand that every pet is unique and deserves individualized care and attention.
              </p>
              <p className="text-lg text-gray-600">
                Today, we're proud to have groomed over 10,000 happy pets and built lasting relationships with pet owners throughout Brisbane. Our commitment to excellence, safety, and compassionate care has made us the go-to choice for pet grooming in the area.
              </p>
            </div>
            <div className="relative h-[500px]">
              <Image
                src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=1200"
                alt="Vet Groomers Team"
                fill
                className="object-cover rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600">The principles that guide everything we do</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="text-primary-600 text-4xl mb-4">❤️</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Compassionate Care</h3>
              <p className="text-gray-600">
                We treat every pet as if they were our own, with patience, kindness, and understanding. Your pet's comfort and wellbeing is our top priority.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="text-primary-600 text-4xl mb-4">✓</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Professional Excellence</h3>
              <p className="text-gray-600">
                Our groomers are certified professionals who stay updated on the latest grooming techniques, breed standards, and pet care best practices.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="text-primary-600 text-4xl mb-4">🔒</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Safety First</h3>
              <p className="text-gray-600">
                We maintain the highest safety standards with sanitized equipment, secure facilities, and careful handling procedures for every pet.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Certifications & Qualifications</h2>
            <p className="text-xl text-gray-600">Fully licensed, insured, and certified</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-primary-50 p-6 rounded-lg text-center">
              <h4 className="font-bold text-gray-900 mb-2">Certified Pet Groomers</h4>
              <p className="text-gray-600 text-sm">National Pet Grooming Association</p>
            </div>
            <div className="bg-primary-50 p-6 rounded-lg text-center">
              <h4 className="font-bold text-gray-900 mb-2">Fully Insured</h4>
              <p className="text-gray-600 text-sm">Public Liability Insurance</p>
            </div>
            <div className="bg-primary-50 p-6 rounded-lg text-center">
              <h4 className="font-bold text-gray-900 mb-2">First Aid Certified</h4>
              <p className="text-gray-600 text-sm">Pet First Aid & CPR</p>
            </div>
            <div className="bg-primary-50 p-6 rounded-lg text-center">
              <h4 className="font-bold text-gray-900 mb-2">Licensed Business</h4>
              <p className="text-gray-600 text-sm">Queensland Business License</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-600">Experienced groomers who love what they do</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative h-64">
                <Image
                  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=800"
                  alt="Sarah Johnson - Head Groomer"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-1">Sarah Johnson</h3>
                <p className="text-primary-600 font-semibold mb-3">Head Groomer</p>
                <p className="text-gray-600">
                  15+ years experience specializing in breed-specific cuts and show dog preparation.
                </p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative h-64">
                <Image
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800"
                  alt="Michael Chen - Senior Groomer"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-1">Michael Chen</h3>
                <p className="text-primary-600 font-semibold mb-3">Senior Groomer</p>
                <p className="text-gray-600">
                  Expert in cat grooming and handling nervous or senior pets with special needs.
                </p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative h-64">
                <Image
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800"
                  alt="Emma Williams - Mobile Groomer"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-1">Emma Williams</h3>
                <p className="text-primary-600 font-semibold mb-3">Mobile Grooming Specialist</p>
                <p className="text-gray-600">
                  10 years experience providing convenient mobile grooming services across Brisbane.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Experience the Vet Groomers Difference
          </h2>
          <p className="text-xl text-primary-100 mb-8">
            Join thousands of happy pet owners who trust us with their furry family members
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:1300VETGROOM" className="bg-white hover:bg-gray-100 text-primary-600 px-8 py-3 rounded-lg font-bold transition">
              Call 1300 VET GROOM
            </a>
            <Link href="/contact" className="bg-primary-700 hover:bg-primary-800 text-white px-8 py-3 rounded-lg font-bold transition">
              Book Appointment
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getAllServiceSlugs, getService } from '@/lib/services';
import { getAllLocations } from '@/lib/locations';
import { getUniqueImage } from '@/lib/images';

export async function generateStaticParams() {
  return getAllServiceSlugs().map((slug) => ({ service: slug }));
}

export async function generateMetadata({ params }: { params: { service: string } }): Promise<Metadata> {
  const service = getService(params.service);
  if (!service) return { title: 'Service Not Found' };

  return {
    title: `${service.name} Brisbane | Professional Pet Grooming`,
    description: `Expert ${service.name.toLowerCase()} services in Brisbane. ${service.description.substring(0, 150)}`,
  };
}

export default function ServicePage({ params }: { params: { service: string } }) {
  const service = getService(params.service);
  const locations = getAllLocations();

  if (!service) {
    notFound();
  }

  const serviceContent = getServiceContent(service.slug, service.name);

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center">
        <Image
          src={getUniqueImage(service.slug, 0)}
          alt={service.name}
          fill
          className="object-cover brightness-50"
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <h1 className="text-5xl font-bold mb-4">{service.name} in Brisbane</h1>
          <p className="text-xl">{service.description}</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content Area */}
            <div className="lg:col-span-2">
              <div className="prose max-w-none">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Professional {service.name} Services</h2>
                <p className="text-lg text-gray-600 mb-6">{serviceContent.intro}</p>

                <div className="relative h-[400px] mb-8 rounded-lg overflow-hidden">
                  <Image
                    src={getUniqueImage(service.slug, 1)}
                    alt={`${service.name} service`}
                    fill
                    className="object-cover"
                  />
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-4">What's Included</h3>
                <ul className="space-y-3 mb-8">
                  {serviceContent.included.map((item: string, idx: number) => (
                    <li key={idx} className="flex items-start">
                      <svg className="w-6 h-6 text-primary-600 mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>

                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Process</h3>
                <p className="text-gray-600 mb-6">{serviceContent.process}</p>

                <h3 className="text-2xl font-bold text-gray-900 mb-4">Why Choose Our {service.name}?</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  {serviceContent.benefits.map((benefit: { title: string; description: string }, idx: number) => (
                    <div key={idx} className="bg-primary-50 p-6 rounded-lg">
                      <h4 className="font-bold text-gray-900 mb-2">{benefit.title}</h4>
                      <p className="text-gray-600">{benefit.description}</p>
                    </div>
                  ))}
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h3>
                <div className="space-y-6">
                  {serviceContent.faqs.map((faq: { question: string; answer: string }, idx: number) => (
                    <div key={idx} className="border-b border-gray-200 pb-6">
                      <h4 className="text-lg font-bold text-gray-900 mb-2">{faq.question}</h4>
                      <p className="text-gray-600">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-primary-600 text-white p-8 rounded-lg shadow-lg mb-8 sticky top-24">
                <h3 className="text-2xl font-bold mb-4">Book This Service</h3>
                <p className="mb-6">Get professional {service.name.toLowerCase()} for your pet today.</p>
                <a href="tel:1300VETGROOM" className="block bg-white text-primary-600 text-center px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition mb-4">
                  Call 1300 VET GROOM
                </a>
                <Link href="/contact" className="block bg-primary-700 text-white text-center px-6 py-3 rounded-lg font-bold hover:bg-primary-800 transition">
                  Request Free Quote
                </Link>
                <div className="mt-6 pt-6 border-t border-primary-500">
                  <p className="text-sm text-primary-100 mb-2">✓ Same-day appointments available</p>
                  <p className="text-sm text-primary-100 mb-2">✓ Mobile service options</p>
                  <p className="text-sm text-primary-100 mb-2">✓ 100% satisfaction guaranteed</p>
                  <p className="text-sm text-primary-100">✓ Certified professional groomers</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              {service.name} Available Across Brisbane
            </h2>
            <p className="text-xl text-gray-600">
              We provide {service.name.toLowerCase()} services in {locations.length}+ locations
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {locations.slice(0, 15).map((location) => (
              <Link
                key={location.slug}
                href={`/${service.slug}-in-${location.slug}`}
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
              View All Locations →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Ready for Professional {service.name}?
          </h2>
          <p className="text-xl text-primary-100 mb-8">
            Contact us today to book your appointment
          </p>
          <a href="tel:1300VETGROOM" className="bg-white hover:bg-gray-100 text-primary-600 px-8 py-3 rounded-lg font-bold transition inline-block">
            Call 1300 VET GROOM
          </a>
        </div>
      </section>
    </>
  );
}

// Service-specific content generator
function getServiceContent(slug: string, name: string) {
  const contentMap: Record<string, any> = {
    'dog-grooming': {
      intro: 'Our comprehensive dog grooming service includes everything your canine companion needs to look and feel their best. From small puppies to large breeds, our experienced groomers handle every dog with care and expertise. We use premium products and proven techniques to ensure your dog has a comfortable, stress-free grooming experience.',
      included: [
        'Full bath with premium dog shampoo and conditioner',
        'Thorough brushing and de-matting',
        'Breed-specific haircut or trim',
        'Nail trimming and filing',
        'Ear cleaning and plucking',
        'Teeth brushing',
        'Cologne and finishing spray',
        'Bow or bandana (optional)'
      ],
      process: 'We start with a consultation to understand your preferences and your dog\'s specific needs. Our grooming process includes a relaxing bath, careful brushing and de-matting, precise cutting and styling according to breed standards or your preferences, nail care, ear cleaning, and finishing touches. Throughout the process, we prioritize your dog\'s comfort and safety.',
      benefits: [
        { title: 'Expert Breed Knowledge', description: 'Our groomers are trained in breed-specific cuts and styling requirements.' },
        { title: 'Gentle Handling', description: 'We use positive reinforcement and patience with nervous or energetic dogs.' },
        { title: 'Premium Products', description: 'All-natural, hypoallergenic shampoos and conditioners safe for sensitive skin.' },
        { title: 'Health Checks', description: 'We alert you to any skin issues, lumps, or concerns we notice during grooming.' }
      ],
      faqs: [
        { question: 'How long does dog grooming take?', answer: 'Most full grooming sessions take 2-3 hours depending on your dog\'s size, coat condition, and temperament. We never rush the process to ensure quality results.' },
        { question: 'How often should I groom my dog?', answer: 'This depends on breed and lifestyle. Most dogs benefit from professional grooming every 6-8 weeks, but some breeds require more frequent visits.' },
        { question: 'What if my dog is nervous or aggressive?', answer: 'Our groomers are experienced with anxious and difficult dogs. We use calming techniques and work at your dog\'s pace. For severely anxious dogs, we can discuss sedation-free anxiety management strategies.' },
        { question: 'Do you groom large breed dogs?', answer: 'Yes! We have equipment and facilities designed to safely handle dogs of all sizes, from Chihuahuas to Great Danes.' },
        { question: 'Can I stay with my dog during grooming?', answer: 'While we understand the desire, dogs typically behave better and remain calmer when owners are not present. We have viewing areas where you can check in if needed.' }
      ]
    },
    'cat-grooming': {
      intro: 'Cat grooming requires specialized skills and patience. Our experienced feline groomers understand cat behavior and use gentle, stress-reducing techniques to make grooming a positive experience. Whether your cat has long fur that needs regular maintenance or is a senior cat who can no longer groom themselves effectively, we provide compassionate, professional care.',
      included: [
        'Gentle bath with cat-safe shampoo',
        'Careful brushing and de-matting',
        'Lion cut or sanitary trim (if needed)',
        'Nail trimming',
        'Ear cleaning',
        'Eye cleaning',
        'Brush out and fluff dry',
        'Flea treatment (optional)'
      ],
      process: 'Cat grooming requires a calm, patient approach. We work in a quiet environment and use techniques specifically designed for felines. Our process includes gentle handling, minimal restraint, and lots of breaks if your cat needs them. We can perform full grooming or specific services like lion cuts for matted long-hair cats.',
      benefits: [
        { title: 'Feline Specialists', description: 'Our groomers are trained specifically in feline behavior and handling techniques.' },
        { title: 'Stress-Free Environment', description: 'Quiet, calm grooming area separated from dogs to reduce stress.' },
        { title: 'Mat Removal Expertise', description: 'Gentle mat removal without causing pain or skin irritation.' },
        { title: 'Senior Cat Care', description: 'Special accommodations for elderly cats who need help with grooming.' }
      ],
      faqs: [
        { question: 'Do cats really need professional grooming?', answer: 'Yes! Long-haired cats especially benefit from professional grooming to prevent mats and hairballs. Senior cats often can\'t groom themselves as effectively and need assistance.' },
        { question: 'Will grooming stress my cat?', answer: 'We use specialized techniques to minimize stress. Most cats adjust well, especially with regular visits. We work at your cat\'s pace and provide breaks as needed.' },
        { question: 'What is a lion cut?', answer: 'A lion cut involves shaving the body while leaving fur on the head, legs, and tail tip. It\'s ideal for long-haired cats with severe matting or to reduce shedding and hairballs.' },
        { question: 'How do you handle difficult cats?', answer: 'Our groomers are experienced with fearful and aggressive cats. We use minimal restraint techniques and can stop services if your cat is too stressed, recommending alternative approaches.' },
        { question: 'Should I sedate my cat before grooming?', answer: 'Generally, no. Most cats do fine without sedation. If you feel your cat may need it, consult your veterinarian first. We work with unsedated cats using gentle handling techniques.' }
      ]
    },
    'mobile-pet-grooming': {
      intro: 'Our mobile pet grooming service brings the salon to your doorstep. Perfect for busy pet owners, anxious pets, or households with multiple animals, our fully-equipped mobile grooming van provides all the services of our salon in the comfort and convenience of your location. Your pet receives one-on-one attention in a familiar environment.',
      included: [
        'Complete mobile grooming salon at your location',
        'Full grooming service in our van',
        'All equipment and products provided',
        'One-on-one groomer attention',
        'No travel stress for your pet',
        'Convenient scheduling',
        'Same services as in-salon grooming',
        'Immediate return to home comfort'
      ],
      process: 'We arrive at your location at the scheduled time with our fully-equipped mobile grooming van. Your pet is groomed start-to-finish in the van by a single groomer, providing personalized attention. The entire grooming happens while you\'re at home, and your freshly groomed pet is returned to your door. No kennels, no waiting, no travel stress.',
      benefits: [
        { title: 'Ultimate Convenience', description: 'No need to transport your pet or adjust your schedule around drop-off and pick-up times.' },
        { title: 'Reduced Stress', description: 'Pets stay in their familiar environment and avoid the anxiety of car rides and waiting areas.' },
        { title: 'Personalized Service', description: 'Your pet receives exclusive one-on-one attention from start to finish.' },
        { title: 'Multi-Pet Discount', description: 'Save money when booking multiple pets from the same household.' }
      ],
      faqs: [
        { question: 'What areas do you serve?', answer: 'Our mobile grooming service covers all of Brisbane and surrounding suburbs within a 30km radius of the CBD.' },
        { question: 'How long does mobile grooming take?', answer: 'Similar to salon grooming, most appointments take 1.5-3 hours depending on your pet\'s size and services needed. We complete everything in one visit.' },
        { question: 'What if I\'m not home?', answer: 'You don\'t need to be home! Many clients leave for work while we groom. We\'ll text you when we arrive and when we\'re finished.' },
        { question: 'Is mobile grooming more expensive?', answer: 'There is a small travel fee compared to in-salon grooming, but many clients find the convenience and reduced pet stress worth the difference.' },
        { question: 'Do you have power and water?', answer: 'Yes! Our mobile units are completely self-contained with their own water supply, electricity, and drainage systems.' }
      ]
    }
  };

  // Default content for services not specifically mapped
  const defaultContent = {
    intro: `Professional ${name.toLowerCase()} services in Brisbane. Our experienced groomers provide expert care using premium products and proven techniques. We understand every pet is unique and tailor our services to meet your pet's specific needs and your preferences.`,
    included: [
      `Complete ${name.toLowerCase()} service`,
      'Thorough health check during service',
      'Premium quality products',
      'Experienced professional groomer',
      'Clean, sanitized equipment',
      'Gentle, stress-free handling',
      'Detailed consultation',
      'After-care advice'
    ],
    process: `Our ${name.toLowerCase()} service begins with a consultation to understand your pet's needs. We use gentle handling techniques and premium products throughout the process. Our groomers take their time to ensure quality results and your pet's comfort. We complete the service with finishing touches and provide you with care recommendations.`,
    benefits: [
      { title: 'Professional Expertise', description: `Years of experience providing ${name.toLowerCase()} services for pets of all breeds and sizes.` },
      { title: 'Quality Products', description: 'We use only premium, pet-safe products that are gentle and effective.' },
      { title: 'Personalized Care', description: 'Every service is tailored to your pet\'s individual needs and temperament.' },
      { title: 'Satisfaction Guaranteed', description: 'We stand behind our work with a 100% satisfaction guarantee.' }
    ],
    faqs: [
      { question: `How often should my pet receive ${name.toLowerCase()}?`, answer: `The frequency depends on your pet's breed, lifestyle, and individual needs. We can provide personalized recommendations based on your pet's specific situation.` },
      { question: `Is ${name.toLowerCase()} safe for all pets?`, answer: 'Yes, our services are safe for healthy pets of all ages. If your pet has specific health conditions, please let us know so we can take appropriate precautions.' },
      { question: 'How long does the service take?', answer: 'Service time varies depending on your pet\'s size and coat condition. We\'ll provide an estimated timeframe when you book your appointment.' },
      { question: 'What should I do to prepare my pet?', answer: 'No special preparation is needed. Just bring your pet to us! If your pet has specific needs or concerns, let us know when booking.' },
      { question: 'What if my pet is anxious?', answer: 'Our groomers are experienced with anxious pets and use calming techniques. We work at your pet\'s pace and never force a stressed animal to continue.' }
    ]
  };

  return contentMap[slug] || defaultContent;
}

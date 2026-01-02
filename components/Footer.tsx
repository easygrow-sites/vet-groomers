import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Vet Groomers</h3>
            <p className="text-gray-400 mb-4">
              Brisbane's trusted pet grooming experts. Professional care for your furry family members since 2010.
            </p>
            <a href="tel:1300VETGROOM" className="text-primary-400 hover:text-primary-300 font-semibold">
              1300 VET GROOM
            </a>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-400 hover:text-white transition">Home</Link></li>
              <li><Link href="/about" className="text-gray-400 hover:text-white transition">About Us</Link></li>
              <li><Link href="/services" className="text-gray-400 hover:text-white transition">Services</Link></li>
              <li><Link href="/locations" className="text-gray-400 hover:text-white transition">Service Areas</Link></li>
              <li><Link href="/blog" className="text-gray-400 hover:text-white transition">Blog</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-white transition">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Popular Services</h4>
            <ul className="space-y-2">
              <li><Link href="/services/dog-grooming" className="text-gray-400 hover:text-white transition">Dog Grooming</Link></li>
              <li><Link href="/services/cat-grooming" className="text-gray-400 hover:text-white transition">Cat Grooming</Link></li>
              <li><Link href="/services/mobile-pet-grooming" className="text-gray-400 hover:text-white transition">Mobile Grooming</Link></li>
              <li><Link href="/services/de-shedding-treatment" className="text-gray-400 hover:text-white transition">De-Shedding</Link></li>
              <li><Link href="/services/puppy-first-grooming" className="text-gray-400 hover:text-white transition">Puppy Grooming</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Service Areas</h4>
            <ul className="space-y-2">
              <li><Link href="/locations/brisbane-cbd" className="text-gray-400 hover:text-white transition">Brisbane CBD</Link></li>
              <li><Link href="/locations/fortitude-valley" className="text-gray-400 hover:text-white transition">Fortitude Valley</Link></li>
              <li><Link href="/locations/south-bank" className="text-gray-400 hover:text-white transition">South Bank</Link></li>
              <li><Link href="/locations/paddington" className="text-gray-400 hover:text-white transition">Paddington</Link></li>
              <li><Link href="/locations" className="text-gray-400 hover:text-white transition">View All Areas</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {currentYear} Vet Groomers Brisbane. All rights reserved.</p>
          <p className="mt-2">ABN: 12 345 678 910 | Licensed & Insured</p>
        </div>
      </div>
    </footer>
  );
}

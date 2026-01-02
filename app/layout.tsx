import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'Vet Groomers Brisbane | Professional Pet Grooming Services',
    template: '%s | Vet Groomers Brisbane'
  },
  description: 'Professional pet grooming services in Brisbane. Expert dog and cat grooming, mobile services, and specialized care. Book your appointment today!',
  keywords: 'pet grooming Brisbane, dog grooming Brisbane, cat grooming Brisbane, mobile pet grooming, professional pet groomers',
  openGraph: {
    type: 'website',
    locale: 'en_AU',
    siteName: 'Vet Groomers Brisbane',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}

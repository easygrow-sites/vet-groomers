# Vet Groomers Brisbane - Local SEO Website

A comprehensive local SEO-optimized pet grooming website built with Next.js 14, featuring **669 statically generated pages** for maximum search engine coverage across Brisbane.

## 🎯 Overview

- **Business**: Vet Groomers
- **Service Niche**: Pet Grooming
- **Service Area**: Brisbane, Queensland
- **Total Pages**: 669
- **Services**: 12
- **Locations**: 50

## 📊 Page Breakdown

- **Core Pages**: 3 (Home, About, Contact)
- **Service Pages**: 12 individual service pages
- **Location Pages**: 50 individual location pages
- **Service + Location Combos**: 600 pages (12 services × 50 locations)
- **Service/Location Indexes**: 2 pages
- **Blog Infrastructure**: 2 pages

## 🚀 Features

### SEO Optimization
- ✅ Unique titles and meta descriptions for every page
- ✅ Local keywords naturally integrated throughout content
- ✅ 600+ service+location combination pages
- ✅ Internal linking structure
- ✅ Semantic HTML with proper heading hierarchy
- ✅ Mobile-first responsive design
- ✅ Fast loading with Next.js Image optimization

### Key Pages
- **Homepage**: Hero section, services overview, locations, trust signals
- **About**: Company story, team, certifications, values
- **Contact**: ContactForm component with API integration, contact info
- **Services Index**: Grid of all 12 services
- **Individual Service Pages**: Detailed pages for each service with FAQs
- **Locations Index**: List of all 50 Brisbane suburbs served
- **Individual Location Pages**: Location-specific content and service listings
- **Service+Location Pages**: Hyper-targeted pages like "dog-grooming-in-paddington"

### Components
- **Header**: Sticky navigation with mobile hamburger menu
- **Footer**: Links, service areas, contact info
- **ContactForm**: Integrated with lead submission API (business ID: vet-groomers-001)
- **ServiceCard**: Reusable service display cards with images
- **LocationCard**: Reusable location display cards
- **BlogCard**: Blog post preview cards

### Blog System
- JSON-based blog post storage in `content/blog/`
- Markdown to HTML conversion with custom styling
- Featured images and keywords support
- Dynamic blog post pages

## 🏗️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Deployment**: Vercel (SSR enabled - no static export)
- **Images**: Next.js Image component with Unsplash

## 📁 Project Structure

```
├── app/
│   ├── layout.tsx              # Root layout with Header/Footer
│   ├── page.tsx                # Homepage
│   ├── about/page.tsx          # About page
│   ├── contact/page.tsx        # Contact page with form
│   ├── services/
│   │   ├── page.tsx            # Services index
│   │   └── [service]/page.tsx  # Individual service pages (12)
│   ├── locations/
│   │   ├── page.tsx            # Locations index
│   │   └── [location]/page.tsx # Individual location pages (50)
│   ├── [slug]/page.tsx         # Service+location combos (600)
│   └── blog/
│       ├── page.tsx            # Blog index
│       └── [slug]/page.tsx     # Individual blog posts
├── components/
│   ├── Header.tsx              # Navigation with mobile menu
│   ├── Footer.tsx              # Footer with links
│   ├── ContactForm.tsx         # Lead submission form
│   ├── ServiceCard.tsx         # Service display card
│   ├── LocationCard.tsx        # Location display card
│   └── BlogCard.tsx            # Blog post card
├── lib/
│   ├── services.ts             # Service data and helpers
│   ├── locations.ts            # Location data and helpers
│   ├── blog.ts                 # Blog post management
│   ├── images.ts               # Image mapping and deduplication
│   └── markdown.ts             # Markdown to HTML converter
├── content/
│   └── blog/                   # Blog posts as JSON files
├── public/
│   └── images/
│       └── blog/               # Blog images
├── services.json               # 12 pet grooming services
└── locations.json              # 50 Brisbane suburbs
```

## 🛠️ Installation & Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

The site will be available at `http://localhost:3000`

## 🌐 Service+Location URL Structure

Service+location combination pages use the format:
```
/[service-slug]-in-[location-slug]
```

Examples:
- `/dog-grooming-in-brisbane-cbd`
- `/mobile-pet-grooming-in-paddington`
- `/cat-grooming-in-new-farm`

The `app/[slug]/page.tsx` dynamic route parses these URLs and generates unique, SEO-optimized content for each combination.

## 📝 Services (12)

1. Dog Grooming
2. Cat Grooming
3. Puppy First Grooming
4. De-Shedding Treatment
5. Flea and Tick Treatment
6. Nail Clipping
7. Teeth Cleaning
8. Breed-Specific Grooming
9. Show Dog Preparation
10. Mobile Pet Grooming
11. Senior Pet Grooming
12. Medicated Bath

## 📍 Locations (50)

Brisbane CBD, Fortitude Valley, South Bank, New Farm, Teneriffe, West End, Paddington, Red Hill, Ascot, Hamilton, Newstead, Kangaroo Point, East Brisbane, Woolloongabba, Stones Corner, Greenslopes, Coorparoo, Camp Hill, Norman Park, Morningside, Bulimba, Hawthorne, Balmoral, Cannon Hill, Tingalpa, Wynnum, Manly, Carindale, Mount Gravatt, Upper Mount Gravatt, Sunnybank, Sunnybank Hills, Eight Mile Plains, Rochedale, Springwood, Indooroopilly, Toowong, Taringa, St Lucia, Kenmore, Chapel Hill, Fig Tree Pocket, Kelvin Grove, Ashgrove, Bardon, Auchenflower, Milton, Chermside, Aspley, Albany Creek

## 🖼️ Images

All images are sourced from Unsplash with unique URLs to prevent repetition. The image mapping system in `lib/images.ts` ensures:
- Each service has 3+ dedicated images
- No image URL is repeated across the site
- All images are relevant to pet grooming
- Images are optimized with Next.js Image component

## 📧 Contact Form Integration

The contact form submits to:
```
POST https://dashboard-sigma-six-16.vercel.app/api/leads/submit
```

With business ID: `vet-groomers-001`

## 🚢 Deployment

This site is optimized for Vercel deployment:

1. Push to GitHub
2. Import to Vercel
3. Vercel automatically detects Next.js and deploys with SSR enabled
4. Environment variables (if any) can be set in Vercel dashboard

**Note**: The site uses server-side rendering (SSR) and does NOT use `output: 'export'` in next.config.js.

## 📈 SEO Strategy

1. **Mass Page Generation**: 600+ service+location pages target every possible search query
2. **Local Keywords**: Natural integration of "pet grooming [location]" throughout
3. **Unique Content**: Each page has unique, valuable content (not just templates)
4. **Internal Linking**: Strong internal link structure between services, locations, and combos
5. **Trust Signals**: Reviews, certifications, years in business prominently displayed
6. **Clear CTAs**: Phone numbers and quote forms on every page
7. **Mobile Optimization**: Fully responsive design with mobile-first approach

## 📞 Contact

**Phone**: 1300 VET GROOM
**Email**: info@vetgroomers.com.au
**Service Area**: Brisbane & 50+ surrounding suburbs

---

Built with Next.js 14 • Deployed on Vercel • 669 SEO-Optimized Pages

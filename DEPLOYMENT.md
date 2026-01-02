# Deployment Guide - Vet Groomers Brisbane

## Quick Deploy to Vercel

### Option 1: Vercel CLI (Recommended)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Follow prompts to link/create project
# Vercel will automatically detect Next.js and configure correctly
```

### Option 2: GitHub + Vercel Dashboard
1. Push this code to a GitHub repository
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repository
5. Vercel auto-detects Next.js settings
6. Click "Deploy"

## Build Verification

Before deploying, test the build locally:

```bash
# Install dependencies
npm install

# Build the site
npm run build

# This will generate all 669 static pages
# Look for output showing:
# - Route (app)
# - ● (lambda) for dynamic routes
# - ○ (static) for static routes
```

## Expected Build Output

You should see routes like:
```
○ /
○ /about
○ /contact
○ /services
○ /locations
○ /blog
● /services/[service]              (12 pages)
● /locations/[location]            (50 pages)
● /[slug]                          (600 pages)
```

Total: **669 pages**

## Post-Deployment Checklist

1. ✅ Verify homepage loads correctly
2. ✅ Test contact form submission
3. ✅ Check a few service pages (e.g., /services/dog-grooming)
4. ✅ Check a few location pages (e.g., /locations/brisbane-cbd)
5. ✅ Test service+location combo pages (e.g., /dog-grooming-in-paddington)
6. ✅ Verify images load correctly
7. ✅ Test mobile menu functionality
8. ✅ Check phone number links work (tel: links)
9. ✅ Test on mobile devices

## Environment Variables

No environment variables are required for basic functionality.

If you need to customize the API endpoint or business ID:
- Edit `components/ContactForm.tsx`
- Update `BUSINESS_ID` and `API_ENDPOINT` constants

## Custom Domain Setup (Optional)

1. In Vercel dashboard, go to Project Settings → Domains
2. Add your custom domain (e.g., vetgroomers.com.au)
3. Follow DNS configuration instructions
4. Wait for SSL certificate to provision (automatic)

## Performance Optimization

The site is already optimized with:
- ✅ Next.js Image component for automatic image optimization
- ✅ Static page generation for fast loading
- ✅ Minimal JavaScript bundle
- ✅ Tailwind CSS purging (only used classes included)
- ✅ Mobile-first responsive design

## Monitoring

After deployment, monitor:
- **Vercel Analytics**: Built-in analytics in Vercel dashboard
- **Google Search Console**: Submit sitemap after adding domain
- **PageSpeed Insights**: Test performance scores

## Updating Content

### Adding Blog Posts
1. Create new JSON file in `content/blog/`
2. Follow this structure:
```json
{
  "slug": "post-url-slug",
  "title": "Post Title",
  "excerpt": "Short preview...",
  "content": "Full markdown content...",
  "date": "2026-01-02",
  "author": "Author Name",
  "featuredImage": "https://images.unsplash.com/...",
  "images": [],
  "keywords": ["keyword1", "keyword2"],
  "metaDescription": "SEO description..."
}
```
3. Redeploy to Vercel (or it will auto-deploy if GitHub integration is set up)

### Adding Services
1. Edit `services.json`
2. Add new service with name, slug, description
3. Add images to `lib/images.ts` serviceImages map
4. Redeploy

### Adding Locations
1. Edit `locations.json`
2. Add new location with name, slug
3. Redeploy

## Troubleshooting

### Build fails with TypeScript errors
- Run `npm run build` locally to see errors
- Fix any type errors in the code
- Commit and redeploy

### Images not loading
- Verify image URLs are accessible
- Check `next.config.js` has correct image domains
- Ensure images.unsplash.com is allowed

### Contact form not working
- Check API endpoint is correct in `ContactForm.tsx`
- Verify CORS settings on API endpoint
- Check browser console for errors

## Support

For deployment issues:
- Vercel Documentation: https://vercel.com/docs
- Next.js Documentation: https://nextjs.org/docs

---

Ready to deploy! 🚀

# ⚡ SEO Quick Reference Checklist

## Before Deployment ☑️

### 1. Update URLs
- [ ] Replace `portfolio.example.com` with your actual domain in:
  - index.html (canonical, og:url)
  - sitemap.xml
  - robots.txt
  - Helmet schema

### 2. Update Social Links
- [ ] Update LinkedIn URL in schema
- [ ] Update GitHub URL in schema
- [ ] Update Twitter URL in schema

### 3. Add OG Image
- [ ] Create a 1200x630px image for social sharing
- [ ] Save as `/public/og-image.jpg`
- [ ] Update og:image path in index.html

### 4. Verify Contact Info
- [ ] Email: Update if different
- [ ] Phone: Update if different
- [ ] Location: Update if different

### 5. Test Before Deploying
- [ ] Run: `npm install react-helmet-async`
- [ ] Run: `npm run build`
- [ ] Check for build errors
- [ ] Run: `npm run preview` to test production build

## On Page SEO Elements Included ✓

```
✓ Primary Keywords in:
  - Page Title
  - Meta Description
  - H1 Tag
  - First paragraph
  - Alt tags

✓ Meta Tags:
  - Title (60-70 chars)
  - Description (150-160 chars)
  - Keywords (5-6 target keywords)
  - Author
  - Robots directive

✓ Open Graph:
  - og:title
  - og:description
  - og:image
  - og:type
  - og:url

✓ Twitter Cards:
  - twitter:card
  - twitter:title
  - twitter:description
  - twitter:image

✓ Structured Data:
  - Person Schema
  - JSON-LD format

✓ Images:
  - Descriptive alt text
  - Title attribute
  - Proper file naming

✓ Links:
  - Internal linking (sections)
  - External links (projects)
  - rel="noopener noreferrer"

✓ Mobile:
  - Responsive design
  - Viewport meta tag
  - Touch-friendly

✓ Performance:
  - Vite optimization
  - CSS/JS minification
```

## Monthly SEO Tasks 📅

1. **Monitor Rankings**
   - Use Google Search Console
   - Track keyword rankings

2. **Check Analytics**
   - Google Analytics 4
   - Traffic sources
   - User behavior

3. **Update Content**
   - Add new projects
   - Update skills
   - Refresh meta descriptions

4. **Test Performance**
   - PageSpeed Insights
   - Mobile-Friendly Test
   - Lighthouse Audit

5. **Fix Issues**
   - Address search console errors
   - Fix broken links
   - Update outdated content

## Deployment Checklist 🚀

- [ ] `npm run build` - no errors
- [ ] Preview locally - looks good
- [ ] Update robots.txt domain
- [ ] Update sitemap.xml domain
- [ ] Submit sitemap to Google Search Console
- [ ] Verify domain in Google Search Console
- [ ] Add Google Analytics
- [ ] Set up Bing Webmaster Tools
- [ ] Test with SEO tools
- [ ] Deploy to production

## Performance Targets 📊

- **Page Load Time**: < 3 seconds
- **Lighthouse Score**: > 90
- **Core Web Vitals**: All Green
- **Mobile Score**: > 95

## Useful Commands

```bash
# Install dependencies
npm install react-helmet-async

# Development
npm run dev

# Build production
npm run build

# Preview production build locally
npm run preview

# Check for lint issues
npm run lint
```

## SEO Tools Integration

### Add to index.html before </head>:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>

<!-- Verification Tags -->
<meta name="google-site-verification" content="YOUR_VERIFICATION_CODE" />
<meta name="msvalidate.01" content="YOUR_VERIFICATION_CODE" />

<!-- Favicon for brand visibility -->
<link rel="icon" type="image/svg+xml" href="/vite.svg" />
```

---
✨ Your portfolio is now SEO optimized! Ready for search engines! 🎯

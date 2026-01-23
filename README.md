# Zimax Networks Corporate Website

Corporate presence website for Zimax Networks LC, built according to the design specification in `zimax-net-site-design-layout-architecture-v1.md`.

## Overview

This is the corporate umbrella site for Zimax Networks, providing:
- Corporate trust anchor and procurement-ready presence
- Product routing to SecAI Radar, ctxeco, and openContextGraph
- Legal and security posture pages
- Press kit and brand assets
- Contact and partnership information

## Tech Stack

- **Next.js 16** (App Router)
- **TypeScript**
- **Tailwind CSS 4**
- **React 19**

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

```bash
npm run build
```

### Production

```bash
npm start
```

## Project Structure

```
zimax-web/
├── app/                    # Next.js App Router pages
│   ├── api/               # API routes (contact form)
│   ├── company/           # Company pages
│   ├── contact/           # Contact page
│   ├── legal/             # Legal pages (terms, privacy, etc.)
│   ├── press/             # Press kit pages
│   ├── products/          # Product pages
│   ├── resources/        # Resources and blog
│   ├── security/          # Security pages
│   ├── solutions/         # Solutions pages
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   ├── sitemap.ts         # Sitemap generation
│   └── robots.ts          # Robots.txt
├── components/            # Reusable React components
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── ProductCard.tsx
│   ├── Badge.tsx
│   ├── CTASection.tsx
│   └── FAQAccordion.tsx
└── public/                # Static assets
```

## Phase A Pages (Implemented)

All Phase A pages from the specification are implemented:

- ✅ Home (`/`)
- ✅ Products hub (`/products`)
- ✅ Product pages (SecAI Radar, ctxeco, openContextGraph)
- ✅ Security (`/security`, `/security/disclosure`)
- ✅ Legal (`/legal/*` - terms, privacy, acceptable-use, open-source)
- ✅ Press (`/press`, `/press/brand-kit`, `/press/media-inquiries`)
- ✅ Contact (`/contact`)

## Contact Form

The contact form at `/contact` submits to `/api/contact` with the following features:

- ✅ **Email Integration**: Configured to use Resend (recommended) or other email services
- ✅ **Rate Limiting**: 5 requests per 15 minutes per IP address
- ✅ **Validation**: Zod schema validation for all form fields
- ✅ **Error Handling**: Graceful fallback if email service is unavailable

### Setup Email Service

1. Copy `.env.example` to `.env.local`
2. Get a Resend API key from [resend.com](https://resend.com)
3. Add to `.env.local`:
   ```
   RESEND_API_KEY=re_xxxxxxxxxxxxx
   CONTACT_EMAIL=info@zimax.net
   ```

The form will automatically send emails when `RESEND_API_KEY` is configured. Without it, submissions are logged to the console (useful for development).

### Alternative Email Services

The code is structured to easily add support for:
- Azure Communication Services
- SendGrid
- Other SMTP services

See `/lib/email.ts` for implementation details.

## SEO

- Sitemap automatically generated at `/sitemap.xml`
- Robots.txt at `/robots.txt`
- Page-level metadata for all pages
- Semantic HTML structure

## Deployment

This site is designed to be deployed to:
- **Vercel** (recommended for Next.js - API routes work natively)
- **Azure Static Web Apps** (API routes require Azure Functions)
- **Azure App Service** (full Next.js support)
- **Other Node.js hosting** (API routes work natively)

### Vercel Deployment

1. Push code to GitHub
2. Import project in Vercel
3. Add environment variables (RESEND_API_KEY, etc.)
4. Deploy automatically on push

### Azure Static Web Apps

For Azure Static Web Apps, API routes need to be converted to Azure Functions or use a separate API service. The contact form can alternatively use a third-party form service like Formspree or Netlify Forms.

1. Build the site: `npm run build`
2. Deploy using Azure Static Web Apps CLI or GitHub Actions
3. Configure custom domain (zimax.net)
4. Set environment variables in Azure Portal

## Environment Variables

Create a `.env.local` file (see `.env.example` for template):

```bash
# Required for email functionality
RESEND_API_KEY=re_xxxxxxxxxxxxx
CONTACT_EMAIL=info@zimax.net

# Optional
NEXT_PUBLIC_SITE_URL=https://zimax.net
```

## Brand Assets

Brand assets should be placed in `/public/brand/`:
- Logos: `/public/brand/logos/`
- Screenshots: `/public/brand/screenshots/`
- Diagrams: `/public/brand/diagrams/`

See `/public/brand/README.md` for guidelines.

## Next Steps

- [x] Set up email service integration (Resend)
- [x] Add rate limiting to contact form
- [x] Create brand assets directory structure
- [x] Add deployment configuration
- [ ] Add blog post content (MDX support ready)
- [ ] Add actual brand assets (logos, screenshots)
- [ ] Configure analytics (GA4 or privacy-first alternative)
- [ ] Set up Azure Front Door for WAF + CDN (optional)
- [ ] Add Phase B pages (Solutions detail pages, blog posts)

## License

Copyright © 2026 Zimax Networks LC. All rights reserved.

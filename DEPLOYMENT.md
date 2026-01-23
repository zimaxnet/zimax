# Deployment Guide

## Quick Start

1. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   # Edit .env.local with your values
   ```

2. **Get Resend API key** (for contact form emails)
   - Sign up at [resend.com](https://resend.com)
   - Create an API key
   - Add to `.env.local`: `RESEND_API_KEY=re_xxxxxxxxxxxxx`

3. **Test locally**
   ```bash
   npm run dev
   # Visit http://localhost:3000
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

## Deployment Options

### Option 1: Vercel (Recommended)

Vercel provides the best Next.js experience with native API route support.

1. Push code to GitHub
2. Import project in [Vercel](https://vercel.com)
3. Add environment variables in Vercel dashboard
4. Deploy automatically on push

**Pros:**
- Zero configuration
- Automatic HTTPS
- Global CDN
- API routes work natively
- Preview deployments for PRs

### Option 2: Azure Static Web Apps

For Azure integration, but requires Azure Functions for API routes.

1. Create Azure Static Web App resource
2. Connect GitHub repository
3. Configure build settings:
   - App location: `/`
   - Output location: `out` (if using static export)
   - API location: (leave empty or configure Azure Functions)
4. Set environment variables in Azure Portal
5. Configure custom domain (zimax.net)

**Note:** For API routes, you'll need to either:
- Convert `/api/contact` to an Azure Function
- Use a third-party form service (Formspree, Netlify Forms)
- Use Azure Communication Services directly

### Option 3: Azure App Service

Full Next.js support with API routes.

1. Create Azure App Service (Node.js)
2. Configure deployment from GitHub
3. Set environment variables
4. Configure custom domain

**Pros:**
- Full Next.js support
- API routes work natively
- Easy Azure integration

### Option 4: Other Platforms

- **Netlify**: Similar to Vercel, good Next.js support
- **Railway**: Easy deployment, good for Node.js apps
- **Render**: Simple deployment, supports Next.js

## Environment Variables

Required for production:

```bash
# Email service (required for contact form)
RESEND_API_KEY=re_xxxxxxxxxxxxx
CONTACT_EMAIL=info@zimax.net

# Optional
NEXT_PUBLIC_SITE_URL=https://zimax.net
RESEND_FROM_EMAIL=noreply@zimax.net
```

## Custom Domain Setup

### DNS Configuration

For `zimax.net`:

1. **A Record** (if using static hosting):
   - Name: `@`
   - Value: [hosting provider IP]

2. **CNAME Record** (recommended for most platforms):
   - Name: `@` or `www`
   - Value: [hosting provider domain]

3. **Verify domain** in hosting provider dashboard

### SSL Certificate

Most modern hosting providers (Vercel, Azure, Netlify) automatically provision SSL certificates via Let's Encrypt.

## Post-Deployment Checklist

- [ ] Verify all pages load correctly
- [ ] Test contact form submission
- [ ] Check email delivery
- [ ] Verify sitemap.xml is accessible
- [ ] Check robots.txt
- [ ] Test mobile responsiveness
- [ ] Verify analytics (if configured)
- [ ] Set up monitoring/error tracking
- [ ] Configure backup strategy

## Monitoring

Consider setting up:
- **Error tracking**: Sentry, LogRocket
- **Analytics**: Google Analytics, Plausible, or privacy-first alternative
- **Uptime monitoring**: UptimeRobot, Pingdom
- **Performance**: Lighthouse CI, WebPageTest

## Troubleshooting

### Contact form not sending emails
- Check `RESEND_API_KEY` is set correctly
- Verify Resend account is active
- Check email service logs
- Ensure domain is verified in Resend (for custom from addresses)

### Build errors
- Clear `.next` directory: `rm -rf .next`
- Reinstall dependencies: `rm -rf node_modules && npm install`
- Check TypeScript errors: `npm run build`

### API routes not working
- Ensure platform supports Next.js API routes (Vercel, Azure App Service)
- For static hosting, convert to serverless functions or use third-party service

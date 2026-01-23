# Azure Static Web App Setup Guide

This guide walks you through setting up the Zimax Networks website on Azure Static Web Apps.

## Prerequisites

- Azure subscription: `23f4e2c5-0667-4514-8e2e-f02ca7880c95`
- Resource group: `zimax-rg` (already exists)
- DNS zone: `zimax.net` (already configured)
- GitHub repository with the code

## Step 1: Create Static Web App in Azure Portal

1. **Navigate to Azure Portal:**
   - Go to: https://portal.azure.com/#@zimax.net
   - Resource Group: https://portal.azure.com/#@zimax.net/resource/subscriptions/23f4e2c5-0667-4514-8e2e-f02ca7880c95/resourceGroups/zimax-rg/overview

2. **Create Static Web App:**
   - Click "Create a resource"
   - Search for "Static Web App"
   - Click "Create"

3. **Configure Basic Settings:**
   - **Subscription:** Select your subscription
   - **Resource Group:** `zimax-rg`
   - **Name:** `zimax-web`
   - **Plan type:** Standard (required for custom domains) or Free (for testing)
   - **Region:** Choose closest to your users (e.g., East US 2)
   - **SKU:** Standard or Free

4. **Configure Deployment:**
   - **Source:** GitHub
   - **Organization:** Your GitHub organization/username
   - **Repository:** Your repository name
   - **Branch:** `main`
   - **Build Presets:** Custom
   - **App location:** `/`
   - **Api location:** (leave empty - we'll handle API separately)
   - **Output location:** `out`

5. **Review and Create:**
   - Review settings
   - Click "Create"
   - Wait for deployment (2-3 minutes)

## Step 2: Configure Environment Variables

1. **Navigate to Static Web App:**
   - Go to your Static Web App resource in Azure Portal

2. **Add Application Settings:**
   - Go to "Configuration" → "Application settings"
   - Click "+ Add"
   - Add the following settings:

   | Name | Value |
   |------|-------|
   | `RESEND_API_KEY` | `re_VSYFgBpC_C1Z6WjNQrALBnFRFQPBdu2Br` |
   | `CONTACT_EMAIL` | `info@zimax.net` |
   | `RESEND_FROM_EMAIL` | `noreply@zimax.net` |
   | `NEXT_PUBLIC_SITE_URL` | `https://zimax.net` |

3. **Save** the configuration

## Step 3: Get Deployment Token

1. **Go to Deployment:**
   - In your Static Web App, go to "Deployment" → "Deployment tokens"

2. **Copy the token:**
   - Copy the "Deployment token" value

3. **Add to GitHub Secrets:**
   - Go to your GitHub repository
   - Settings → Secrets and variables → Actions
   - Click "New repository secret"
   - Name: `AZURE_STATIC_WEB_APPS_API_TOKEN`
   - Value: (paste the token)
   - Click "Add secret"

## Step 4: Configure Custom Domain

1. **Add Custom Domain:**
   - In Static Web App, go to "Custom domains"
   - Click "+ Add"
   - Enter: `zimax.net`
   - Click "Next"

2. **Verify Domain:**
   - Azure will show DNS verification records
   - You'll need to add a TXT record to your DNS zone

3. **Update DNS Zone:**
   - Go to DNS zone: https://portal.azure.com/#@zimax.net/resource/subscriptions/23f4e2c5-0667-4514-8e2e-f02ca7880c95/resourceGroups/dns-rg/providers/Microsoft.Network/dnszones/zimax.net/resourceOverviewId
   - Add the TXT record shown in Azure Portal
   - Wait for verification (can take a few minutes)

4. **Complete Domain Setup:**
   - Once verified, Azure will provide CNAME records
   - Add the CNAME record to your DNS zone
   - SSL certificate will be automatically provisioned

## Step 5: Update Next.js Config for Static Export

Since Azure Static Web Apps requires static files, we need to update the build configuration:

1. **Update `next.config.ts`:**
   ```typescript
   const nextConfig: NextConfig = {
     output: 'export',
     images: { unoptimized: true },
   };
   ```

2. **Handle API Routes:**
   - Option A: Convert `/api/contact` to Azure Function (see below)
   - Option B: Use Azure Communication Services directly
   - Option C: Use a third-party form service

## Step 6: Set Up Azure Function for Contact API (Optional)

If you want to keep the contact form API route:

1. **Create Azure Function:**
   - In your Static Web App, go to "Functions"
   - Create a new function or use the API folder structure

2. **Deploy Function:**
   - The function should handle the contact form POST requests
   - Use the same Resend integration

## Step 7: Update GitHub Actions Workflow

The workflow file `azure-static-web-apps.yml` is already configured. Ensure:

1. **Workflow is enabled:**
   - Go to GitHub repository → Actions
   - Ensure workflows are enabled

2. **First deployment:**
   - Push to `main` branch
   - GitHub Actions will automatically deploy

## Step 8: Verify Deployment

1. **Check default URL:**
   - Your Static Web App will have a default URL like: `https://zimax-web-xxxxx.azurestaticapps.net`
   - Visit this URL to verify the site works

2. **Test custom domain:**
   - Once DNS is configured, visit `https://zimax.net`
   - Verify SSL certificate is active (should show lock icon)

3. **Test contact form:**
   - Submit a test message
   - Check that email is received at `info@zimax.net`

## Troubleshooting

### Build fails in GitHub Actions
- Check Actions logs
- Verify `output: 'export'` in next.config.ts
- Ensure all dependencies are in package.json

### Custom domain not working
- Verify DNS records are correct
- Check domain verification status
- Ensure CNAME record points to correct Static Web App URL

### API routes return 404
- Static export doesn't support API routes
- Convert to Azure Functions or use alternative service

### Environment variables not working
- Ensure variables are set in Azure Portal
- Restart the Static Web App after adding variables
- Check variable names match exactly (case-sensitive)

## Next Steps

- [ ] Monitor deployment in GitHub Actions
- [ ] Test all pages on the live site
- [ ] Verify email delivery from contact form
- [ ] Set up monitoring and alerts
- [ ] Configure backup strategy

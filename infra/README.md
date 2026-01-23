# Azure Infrastructure Deployment

This directory contains infrastructure-as-code for deploying the Zimax Networks website to Azure Static Web Apps.

## Prerequisites

- Azure CLI installed and configured
- Access to Azure subscription: `23f4e2c5-0667-4514-8e2e-f02ca7880c95`
- Resource group: `zimax-rg`
- DNS zone: `zimax.net` (already configured)

## Quick Deploy

### Option 1: Using Azure Portal (Recommended for first-time setup)

1. **Create Static Web App in Azure Portal:**
   - Go to: https://portal.azure.com/#@zimax.net
   - Navigate to: Create a resource → Static Web App
   - Or use direct link to create in `zimax-rg`:
     https://portal.azure.com/#@zimax.net/resource/subscriptions/23f4e2c5-0667-4514-8e2e-f02ca7880c95/resourceGroups/zimax-rg/overview

2. **Configuration:**
   - **Name:** `zimax-web`
   - **Resource Group:** `zimax-rg`
   - **Region:** Choose closest to your users (e.g., East US)
   - **SKU:** Standard (for custom domains) or Free (for testing)
   - **Source:** GitHub (connect your repository)
   - **Build Details:**
     - App location: `/`
     - Output location: `out`
     - API location: (leave empty)

3. **Get Deployment Token:**
   - After creation, go to Settings → Deployment tokens
   - Copy the deployment token
   - Add to GitHub repository secrets as `AZURE_STATIC_WEB_APPS_API_TOKEN`

4. **Configure Custom Domain:**
   - Go to Custom domains
   - Add `zimax.net`
   - Follow DNS verification steps
   - Update DNS records in DNS zone: https://portal.azure.com/#@zimax.net/resource/subscriptions/23f4e2c5-0667-4514-8e2e-f02ca7880c95/resourceGroups/dns-rg/providers/Microsoft.Network/dnszones/zimax.net/resourceOverviewId

### Option 2: Using Azure CLI

```bash
# Make script executable
chmod +x infra/deploy.sh

# Run deployment script
./infra/deploy.sh
```

### Option 3: Using Bicep directly

```bash
az deployment group create \
  --resource-group zimax-rg \
  --template-file infra/azure-static-web-app.bicep \
  --parameters staticWebAppName=zimax-web location=eastus sku=Standard
```

## Environment Variables

After deployment, configure environment variables in Azure Portal:

1. Go to Static Web App → Configuration → Application settings
2. Add the following:
   - `RESEND_API_KEY` = `re_VSYFgBpC_C1Z6WjNQrALBnFRFQPBdu2Br`
   - `CONTACT_EMAIL` = `info@zimax.net`
   - `RESEND_FROM_EMAIL` = `noreply@zimax.net`
   - `NEXT_PUBLIC_SITE_URL` = `https://zimax.net`

## Custom Domain Setup

The DNS zone is already configured. After adding the custom domain in Azure:

1. Azure will provide DNS verification records
2. Add the TXT record to the DNS zone
3. Once verified, Azure will provide CNAME records
4. Add the CNAME record pointing to the Static Web App

## Build Configuration

The site needs to be built with static export for Azure Static Web Apps. Update `next.config.ts`:

```typescript
const nextConfig: NextConfig = {
  output: 'export',
  images: { unoptimized: true },
};
```

**Note:** This disables API routes. For the contact form, you'll need to:
- Use Azure Functions for the API route, OR
- Use a third-party form service, OR
- Use Azure Communication Services directly

## Monitoring

- Application Insights is included in the Bicep template
- View logs in Azure Portal → Static Web App → Monitoring
- Set up alerts for errors and availability

## Troubleshooting

### Build fails
- Check GitHub Actions logs
- Verify `output: 'export'` in next.config.ts
- Ensure all dependencies are in package.json

### Custom domain not working
- Verify DNS records are correct
- Check domain verification status in Azure Portal
- Ensure SSL certificate is provisioned (automatic)

### API routes not working
- Static export doesn't support API routes
- Convert to Azure Functions or use alternative service

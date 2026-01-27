# Next Steps: Deploy SWA Free Tier with zimax.net Apex Domain

## ✅ What's Done
- DNS documentation and diagnostic scripts committed and pushed
- GitHub Actions workflow is configured and will trigger on push
- Code is ready for deployment

## 🚀 Step 1: Create Static Web App (Free Tier)

You have two options:

### Option A: Using the Deployment Script (Recommended)
```bash
cd zimax-web
chmod +x infra/deploy.sh
./infra/deploy.sh
```

This will:
- Create the SWA on Free tier
- Set up the resource group
- Output the deployment token for GitHub

### Option B: Using Azure CLI Directly
```bash
az staticwebapp create \
  --name zimax-web \
  --resource-group zimax-rg \
  --location eastus2 \
  --sku Free
```

**Note**: Free tier supports 2 custom domains with automatic SSL, which is perfect for zimax.net!

## 🔑 Step 2: Get Deployment Token

After creating the SWA, get the deployment token:

```bash
az staticwebapp secrets list \
  --name zimax-web \
  --resource-group zimax-rg \
  --query "properties.apiKey" \
  -o tsv
```

## 🔐 Step 3: Add Token to GitHub Secrets

1. Go to: https://github.com/zimaxnet/zimax/settings/secrets/actions
2. Click **"New repository secret"**
3. Name: `AZURE_STATIC_WEB_APPS_API_TOKEN`
4. Value: (paste the token from Step 2)
5. Click **"Add secret"**

## 🌐 Step 4: Add Custom Domain (Apex Domain)

**CRITICAL**: Use Azure Portal, NOT CLI, and select "Custom domain on Azure DNS"

1. Go to Azure Portal: https://portal.azure.com
2. Navigate to: **Static Web Apps** → **zimax-web** → **Custom domains**
3. Click **+ Add**
4. **Select "Custom domain on Azure DNS"** ⚠️ (NOT "Other custom domain")
5. In **DNS zone**, select **zimax.net** (from `dns-rg`)
6. Click **Add**

**What happens automatically:**
- Azure creates TXT validation record
- Azure creates ALIAS record (points apex to SWA)
- Azure validates domain (1-2 minutes, apex can take 5-15 minutes)
- Azure provisions SSL certificate (24-48 hours)

## ✅ Step 5: Set as Default Domain (Optional)

1. In **Custom domains**, find `zimax.net`
2. Click the **⋮** menu
3. Select **Set as default**

This makes `https://zimax.net` the primary URL.

## 📊 Step 6: Verify Deployment

### Check GitHub Actions
- Go to: https://github.com/zimaxnet/zimax/actions
- The workflow should trigger automatically after push
- Monitor the build and deploy job

### Check DNS Status
```bash
./scripts/check-zimax-net-dns.sh
```

### Check SWA Status
```bash
az staticwebapp hostname list \
  --name zimax-web \
  --resource-group zimax-rg \
  --output table
```

### Test the Site
- Default URL: `https://<swa-name>.<region>.azurestaticapps.net`
- Custom domain: `https://zimax.net` (after validation completes)

## ⏱️ Timeline

- **SWA Creation**: 2-3 minutes
- **First Deployment**: 5-10 minutes (via GitHub Actions)
- **Domain Validation**: 1-15 minutes (apex domains take longer)
- **SSL Certificate**: 24-48 hours after validation

## 🐛 Troubleshooting

### If GitHub Actions Fails
- Check that `AZURE_STATIC_WEB_APPS_API_TOKEN` secret is set correctly
- Verify the SWA exists: `az staticwebapp show --name zimax-web --resource-group zimax-rg`
- Check build logs in GitHub Actions

### If Domain Validation Stuck
- Wait 15-30 minutes (apex domains take longer)
- Verify DNS zone is in same subscription
- Remove and re-add domain using "Custom domain on Azure DNS"
- Check Azure Portal for error messages

### If DNS Not Resolving
- Wait for DNS propagation (1-24 hours, usually 1-2 hours)
- Clear DNS cache: `sudo dscacheutil -flushcache` (macOS)
- Use different resolver: `dig @8.8.8.8 zimax.net`

## 📚 Documentation

- **Full DNS Setup Guide**: `DNS-APEX-DOMAIN-SETUP.md`
- **Troubleshooting Guide**: `DNS-TROUBLESHOOTING-SUMMARY.md`
- **Diagnostic Script**: `scripts/check-zimax-net-dns.sh`
- **Azure Setup Guide**: `infra/azure-setup-guide.md`

## 🎯 Quick Checklist

- [ ] Create Static Web App (Free tier)
- [ ] Get deployment token
- [ ] Add token to GitHub Secrets
- [ ] Push triggers GitHub Actions (already done ✅)
- [ ] Add custom domain via Portal ("Custom domain on Azure DNS")
- [ ] Wait for domain validation (1-15 minutes)
- [ ] Set as default domain (optional)
- [ ] Wait for SSL certificate (24-48 hours)
- [ ] Test https://zimax.net

## 💡 Key Points

1. **Free tier is perfect** - Supports 2 custom domains with auto SSL
2. **Use "Custom domain on Azure DNS"** - Required for ALIAS records at apex
3. **Don't skip readiness checks** - They ensure proper configuration
4. **DNSSEC is compatible** - Your DS records won't interfere
5. **Let Azure manage DNS** - Automatic ALIAS record creation

Good luck with the deployment! 🚀

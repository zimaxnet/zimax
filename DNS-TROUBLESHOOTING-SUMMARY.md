# DNS Troubleshooting Summary for zimax.net

## Current Status (as of check)

### ✅ What's Working
- **DNS Zone**: `zimax.net` exists in Azure DNS (`dns-rg`)
- **Name Servers**: Properly configured (ns1-09.azure-dns.com, etc.)
- **DNSSEC**: DS records added ✅ (helps with DNS security)

### ❌ What's Missing
- **Static Web App**: `zimax-web` doesn't exist (needs to be created)
- **Custom Domain**: `zimax.net` not configured on any SWA
- **ALIAS Record**: Not created (requires SWA + "Custom domain on Azure DNS")

### ⚠️ Observations
- External DNS shows validation tokens in TXT records (from previous attempts)
- No A records for apex domain (expected - should use ALIAS instead)
- Azure DNS zone shows no TXT records for apex (may have been cleaned up)

## The Core Issue

You mentioned you **deleted the SWA check readiness for DNS to use apex domain**. This readiness check is important because:

1. **It validates the DNS setup** before attempting to bind the domain
2. **It ensures Azure can create the ALIAS record** (requires "Custom domain on Azure DNS")
3. **It prevents configuration errors** that cause validation to fail

**The readiness check should NOT be skipped** - it's a safety mechanism.

## Why Apex Domains Are Difficult

### The Technical Challenge
- **RFC 1034**: Apex domains cannot have CNAME records
- **Traditional solution**: Use A records with IP addresses (not ideal for SWA)
- **Azure solution**: ALIAS records (Azure DNS-specific, works like CNAME for apex)

### Why ALIAS Records Are Required
- ALIAS records can be used at apex domains
- They point directly to Azure resources (SWA, App Service, etc.)
- They're automatically managed by Azure
- **They can only be created via "Custom domain on Azure DNS"** - not manually

## Solution: Proper Setup Process

### Step 1: Create Static Web App
```bash
az staticwebapp create \
  --name zimax-web \
  --resource-group zimax-rg \
  --location eastus2 \
  --sku Standard
```

**Why Standard SKU?**
- Required for custom domains
- Free tier also supports custom domains, but Standard has better features

### Step 2: Add Custom Domain (CRITICAL STEP)

**DO THIS VIA AZURE PORTAL** (not CLI):

1. Go to: **Static Web Apps** → **zimax-web** → **Custom domains**
2. Click **+ Add**
3. **Select "Custom domain on Azure DNS"** ⚠️ (NOT "Other custom domain")
4. Select **zimax.net** DNS zone from dropdown
5. Click **Add**

**What happens automatically:**
- Azure creates TXT validation record
- Azure creates ALIAS record pointing to SWA
- Azure validates domain ownership
- Azure provisions SSL certificate (24-48 hours)

### Step 3: Wait for Validation
- **Domain validation**: 1-2 minutes (usually)
- **Apex domains**: Can take 5-15 minutes
- **Status**: Check in Azure Portal

### Step 4: Set as Default (Optional)
- In Custom domains, click **⋮** next to `zimax.net`
- Select **Set as default**
- Makes `https://zimax.net` the primary URL

## Why "Custom domain on Azure DNS" is Required

### The Key Difference

**"Custom domain on Azure DNS"** ✅:
- Azure has write access to DNS zone
- Azure creates ALIAS record automatically
- No manual DNS configuration
- Works for apex domains
- Automatic SSL provisioning

**"Other custom domain"** ❌:
- You must manually configure DNS
- Cannot create ALIAS records manually
- Must use A records with IPs (not ideal)
- More complex, error-prone
- Doesn't work well for apex domains

## DNSSEC Compatibility

✅ **Your DS records are fine!**
- DNSSEC doesn't interfere with ALIAS records
- DNSSEC validates DNS responses, not record types
- Both can coexist without issues

## Common Mistakes to Avoid

1. ❌ **Skipping readiness checks** - They prevent configuration errors
2. ❌ **Using "Other custom domain"** - Can't create ALIAS records manually
3. ❌ **Trying to create ALIAS via CLI** - Only Azure can create them
4. ❌ **Using CNAME at apex** - Not allowed by DNS standards
5. ❌ **Manual DNS configuration** - Let Azure manage it

## Troubleshooting Steps

### If Validation Stuck
1. Wait 15-30 minutes (apex domains take longer)
2. Verify DNS zone is in same subscription
3. Remove domain and re-add using "Custom domain on Azure DNS"
4. Check Azure Portal for error messages

### If DNS Not Resolving
1. Wait for DNS propagation (1-24 hours, usually 1-2 hours)
2. Clear DNS cache: `sudo dscacheutil -flushcache` (macOS)
3. Use different DNS resolver: `dig @8.8.8.8 zimax.net`
4. Verify nameservers are correct at domain registrar

### If Certificate Not Provisioning
1. Verify domain status is "Ready" (not "Validating")
2. Wait full 48 hours after validation
3. Check certificate status in Azure Portal
4. SSL provisioning happens automatically after validation

## Quick Reference Commands

### Check Current Status
```bash
./scripts/check-zimax-net-dns.sh
```

### Create Static Web App
```bash
az staticwebapp create \
  --name zimax-web \
  --resource-group zimax-rg \
  --location eastus2 \
  --sku Standard
```

### Check Custom Domains
```bash
az staticwebapp hostname list \
  --name zimax-web \
  --resource-group zimax-rg \
  --output table
```

### Check DNS Resolution
```bash
dig zimax.net A
dig zimax.net TXT
dig zimax.net NS
```

## Next Steps

1. ✅ **Create Static Web App** (if it doesn't exist)
2. ✅ **Add custom domain via Portal** using "Custom domain on Azure DNS"
3. ✅ **Wait for validation** (1-15 minutes)
4. ✅ **Set as default** (optional)
5. ✅ **Wait for SSL** (24-48 hours)
6. ✅ **Test** https://zimax.net

## Documentation

- **Full Setup Guide**: `DNS-APEX-DOMAIN-SETUP.md`
- **Status Check Script**: `scripts/check-zimax-net-dns.sh`
- **Azure Docs**: [Apex Domain with Azure DNS](https://learn.microsoft.com/en-us/azure/static-web-apps/apex-domain-azure-dns)

## Key Takeaway

**The readiness check you deleted is important** - it ensures proper configuration. When you re-add the domain using "Custom domain on Azure DNS", Azure will:
- Run the readiness check automatically
- Create the proper ALIAS record
- Validate everything correctly
- Provision SSL automatically

Don't skip steps - let Azure handle the DNS configuration automatically!

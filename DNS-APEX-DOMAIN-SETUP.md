# DNS Setup for zimax.net Apex Domain with Azure Static Web Apps

## Current Situation

- **Domain**: `zimax.net` (apex/root domain)
- **DNS Zone**: Azure DNS (`dns-rg` resource group)
- **DNSSEC**: DS records added ✅ (helps with DNS security and validation)
- **Challenge**: Apex domains cannot use CNAME records (RFC 1034)
- **Solution**: Azure DNS ALIAS records (works like CNAME but for apex domains)

## Understanding Apex Domain Limitations

### The Problem
- **CNAME at apex is not allowed** by DNS standards (RFC 1034)
- Apex domains (`zimax.net`) can only have A, AAAA, NS, SOA, MX, TXT records
- Subdomains (`www.zimax.net`) can use CNAME records

### The Solution: Azure DNS ALIAS Records
Azure DNS supports **ALIAS records** which:
- Work like CNAME but can be used at apex domains
- Point directly to Azure resources (Static Web Apps, App Services, etc.)
- Are automatically managed by Azure
- Support apex domains natively

## Proper Setup Process

### Step 1: Create Static Web App (if needed)

If `zimax-web` doesn't exist, create it:

```bash
az staticwebapp create \
  --name zimax-web \
  --resource-group zimax-rg \
  --location eastus2 \
  --sku Standard
```

**Note**: Standard SKU is required for custom domains.

### Step 2: Add Custom Domain Using Azure DNS (CRITICAL)

**IMPORTANT**: You MUST use **"Custom domain on Azure DNS"** option, NOT manual DNS configuration.

#### Via Azure Portal:
1. Go to **Static Web Apps** → **zimax-web** → **Custom domains**
2. Click **+ Add**
3. **Select "Custom domain on Azure DNS"** (NOT "Other custom domain")
4. Select the **zimax.net** DNS zone from the dropdown
5. Click **Add**

#### What Azure Does Automatically:
- Creates a **TXT record** for domain validation
- Creates an **ALIAS record** pointing to the SWA's default hostname
- Validates the domain ownership
- Provisions a free SSL certificate
- All within 1-2 minutes

### Step 3: Set as Default Domain (Optional)

1. In **Custom domains**, find `zimax.net`
2. Click the **⋮** menu
3. Select **Set as default**

This makes `https://zimax.net` the primary URL.

## Why "Custom domain on Azure DNS" is Required

When you use **"Custom domain on Azure DNS"**:
- Azure has write access to your DNS zone
- Azure creates the ALIAS record automatically
- Azure manages the record lifecycle
- No manual DNS configuration needed

When you use **"Other custom domain"**:
- You must manually create DNS records
- You cannot create ALIAS records manually (Azure-only feature)
- You must use A records with IP addresses (not ideal for SWA)
- More complex and error-prone

## DNS Records Created by Azure

When you add `zimax.net` via "Custom domain on Azure DNS", Azure creates:

### 1. TXT Record (Validation)
```
Name: @
Type: TXT
Value: _<validation-token>
TTL: 3600
```
Used to validate domain ownership.

### 2. ALIAS Record (Traffic Routing)
```
Name: @
Type: ALIAS (Azure-specific)
Target: <swa-default-hostname>.azurestaticapps.net
```
Points the apex domain to your Static Web App.

**Note**: ALIAS records are Azure DNS-specific and cannot be created manually via CLI or Portal. They're only created when using "Custom domain on Azure DNS".

## DNSSEC (DS Records) Compatibility

✅ **DNSSEC is fully compatible** with Azure Static Web Apps:
- DS records don't interfere with ALIAS records
- DNSSEC validates DNS responses, not DNS record types
- Your DS records will continue to work correctly

## Troubleshooting

### Issue: "Validation stuck" or "Validating" status

**Solutions**:
1. **Wait 5-15 minutes** - Apex domain validation can take longer
2. **Verify DNS zone is in same subscription** - Required for "Custom domain on Azure DNS"
3. **Remove and re-add** - If stuck for >30 minutes:
   - Remove the hostname from SWA
   - Wait 2-3 minutes
   - Add again using "Custom domain on Azure DNS"

### Issue: "Readiness check failed"

If you deleted a readiness check:
- The readiness check validates DNS configuration
- **Don't skip it** - it ensures proper setup
- Re-add the domain using "Custom domain on Azure DNS" to restore proper validation

### Issue: DNS not resolving

**Check**:
```bash
# Check if ALIAS record exists (Azure-managed, may not show in CLI)
az network dns record-set list --resource-group dns-rg --zone-name zimax.net

# Check external DNS resolution
dig zimax.net A
dig zimax.net TXT

# Check SWA hostname
az staticwebapp hostname list --name zimax-web --resource-group zimax-rg
```

**Common causes**:
- DNS propagation delay (can take 24-48 hours, usually 1-2 hours)
- DNS caching (clear cache or use different resolver)
- Domain not properly delegated to Azure DNS nameservers

### Issue: Certificate not provisioning

**Timeline**:
- Domain validation: 1-2 minutes (with "Custom domain on Azure DNS")
- SSL certificate provisioning: 24-48 hours after validation
- Status shows "Ready" when certificate is bound

**If stuck**:
- Verify domain status is "Ready" (not "Validating")
- Wait the full 48 hours
- Check Azure Portal for certificate status

## Verification Commands

### Check Static Web App
```bash
az staticwebapp show \
  --name zimax-web \
  --resource-group zimax-rg \
  --query "{name:name, defaultHostname:defaultHostname, sku:sku.name}"
```

### Check Custom Domains
```bash
az staticwebapp hostname list \
  --name zimax-web \
  --resource-group zimax-rg \
  --output table
```

### Check DNS Zone
```bash
az network dns zone show \
  --resource-group dns-rg \
  --name zimax.net \
  --query "{name:name, nameServers:nameServers}"
```

### Check DNS Resolution
```bash
# External DNS check
dig +short zimax.net A
dig +short zimax.net TXT

# Check nameservers
dig +short NS zimax.net
```

## Best Practices

1. **Always use "Custom domain on Azure DNS"** for apex domains
2. **Don't manually create DNS records** when using Azure DNS integration
3. **Wait for validation** - don't skip readiness checks
4. **Monitor status** in Azure Portal for validation progress
5. **Keep DNSSEC enabled** - it doesn't interfere with SWA

## Next Steps

1. **Recreate Static Web App** (if deleted):
   ```bash
   az staticwebapp create --name zimax-web --resource-group zimax-rg --location eastus2 --sku Standard
   ```

2. **Add Custom Domain via Portal**:
   - Use "Custom domain on Azure DNS"
   - Select zimax.net zone
   - Wait for validation

3. **Set as Default** (optional):
   - Set zimax.net as default domain

4. **Monitor**:
   - Check validation status
   - Wait for SSL certificate (24-48 hours)
   - Test https://zimax.net

## References

- [Azure Static Web Apps - Apex Domain with Azure DNS](https://learn.microsoft.com/en-us/azure/static-web-apps/apex-domain-azure-dns)
- [Azure DNS ALIAS Records](https://learn.microsoft.com/en-us/azure/dns/dns-alias)
- [DNSSEC in Azure DNS](https://learn.microsoft.com/en-us/azure/dns/dnssec-overview)

# Bind zimax.net on Free Tier (SSL + default domain)

Free tier supports **2 custom domains** and **managed SSL**. Use **"Custom domain on Azure DNS"** so Azure creates the TXT/ALIAS records and provisions the certificate for you.

## 1. Add custom domain (Azure DNS)

1. Open [Azure Portal](https://portal.azure.com) → **Static Web Apps** → **zimax-web** (resource group **zimax-rg**).
2. Under **Settings**, select **Custom domains**.
3. Click **+ Add** and choose **Custom domain on Azure DNS** (not "Other custom domain").
4. In **DNS zone**, select the **zimax.net** zone (must be in the same subscription; yours is in **dns-rg**).
5. Click **Add**.

Azure will create the required TXT and ALIAS records in the zimax.net zone and run validation. This usually takes 1–2 minutes. When **Status** is **Ready**, the free managed certificate is bound.

- [Apex domain with Azure DNS](https://learn.microsoft.com/en-us/azure/static-web-apps/apex-domain-azure-dns)

## 2. Set zimax.net as default

1. On the **Custom domains** blade, find the row for **zimax.net**.
2. Open the **⋮** menu for that row.
3. Select **Set as default**.

The default hostname for the app will be **https://zimax.net**.

## 3. If validation is stuck

- Confirm the **zimax.net** DNS zone is in the same subscription and that you selected **Custom domain on Azure DNS** (so Azure can write records).
- Wait 5–15 minutes; apex can take longer.
- If it stays in “Validating”, remove the hostname and add it again using **Custom domain on Azure DNS**.

## GitHub secret

After creating the SWA, set the deployment token in the GitHub repo:

**Settings** → **Secrets and variables** → **Actions** → **AZURE_STATIC_WEB_APPS_API_TOKEN** = value printed by `./infra/deploy.sh`.

Then push to **main** to deploy. The site will be at the default hostname until zimax.net is set as default; after that it will be at **https://zimax.net**.

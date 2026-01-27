# Fix Deployment Token Issue

## Problem
GitHub Actions workflow failing with:
```
No matching Static Web App was found or the api key was invalid.
```

## Solution: Connect SWA to GitHub via Portal

The Static Web App was created via Bicep/CLI, but it needs to be connected to GitHub through the Azure Portal for the deployment token to work properly.

### Steps:

1. **Go to Azure Portal:**
   https://portal.azure.com/#@zimax.net/resource/subscriptions/23f4e2c5-0667-4514-8e2e-f02ca7880c95/resourceGroups/zimax-rg/providers/Microsoft.Web/staticSites/zimax-web

2. **Navigate to:** Settings → **Deployment center**

3. **Connect to GitHub:**
   - Click **"Disconnect"** if there's an existing connection
   - Click **"Connect"**
   - Select **GitHub**
   - Authorize Azure to access your GitHub account
   - Select:
     - **Organization:** zimaxnet
     - **Repository:** zimax
     - **Branch:** main
   - **Build Presets:** Custom
   - **App location:** `/`
   - **Output location:** `out`
   - **API location:** (empty)
   - Click **"Save"**

4. **Get New Deployment Token:**
   After connecting, get the deployment token:
   ```bash
   az staticwebapp secrets list \
     --name zimax-web \
     --resource-group zimax-rg \
     --query "properties.apiKey" \
     -o tsv
   ```

5. **Update GitHub Secret:**
   ```bash
   gh secret set AZURE_STATIC_WEB_APPS_API_TOKEN --body "<new-token>"
   ```

6. **Trigger Workflow:**
   - Push a change, or
   - Manually trigger: `gh workflow run "Azure Static Web Apps CI/CD"`

## Alternative: Use Portal to Create SWA

If the above doesn't work, you can:
1. Delete the current SWA
2. Create a new one via Portal with GitHub connection
3. Azure will automatically create the workflow file

## Current Token (may need refresh after connecting)
```
ebd839553af7f6228a0a6ddd1709484c3834ee8b66ea2d6394496c7d1981971406-83556e5d-4b15-4b93-8ebf-4cd9c789db0800f1818090589e0f
```

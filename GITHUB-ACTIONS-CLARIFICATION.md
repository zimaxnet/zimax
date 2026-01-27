# GitHub Actions Workflow Clarification

## Current Workflow Behavior

The GitHub Actions workflow (`.github/workflows/azure-static-web-apps.yml`) **deploys TO an existing Static Web App** - it does **NOT create** the SWA.

### What the Workflow Does:
1. ✅ Builds the Next.js app
2. ✅ Deploys to an existing SWA using `AZURE_STATIC_WEB_APPS_API_TOKEN`

### What the Workflow Requires:
1. ❌ **SWA must exist first** (created via Portal, CLI, or Bicep)
2. ❌ **Deployment token** must be in GitHub Secrets as `AZURE_STATIC_WEB_APPS_API_TOKEN`

## Two Approaches

### Approach 1: Create SWA First, Then Deploy (Recommended)

**Steps:**
1. Create SWA using one of these methods:
   ```bash
   # Option A: Using the deploy script
   ./infra/deploy.sh
   
   # Option B: Using Azure CLI directly
   az staticwebapp create \
     --name zimax-web \
     --resource-group zimax-rg \
     --location eastus2 \
     --sku Free
   ```

2. Get the deployment token:
   ```bash
   az staticwebapp secrets list \
     --name zimax-web \
     --resource-group zimax-rg \
     --query "properties.apiKey" \
     -o tsv
   ```

3. Add token to GitHub Secrets:
   - Go to: https://github.com/zimaxnet/zimax/settings/secrets/actions
   - Add secret: `AZURE_STATIC_WEB_APPS_API_TOKEN`
   - Value: (token from step 2)

4. Push to trigger workflow (already done ✅)

5. Workflow will deploy automatically

### Approach 2: Create SWA via Azure Portal with GitHub Connection

**Steps:**
1. Go to Azure Portal → Create Static Web App
2. During creation, connect to GitHub:
   - **Source:** GitHub
   - **Organization:** zimaxnet
   - **Repository:** zimax
   - **Branch:** main
3. Azure will:
   - Create the SWA
   - Create a workflow file (may conflict with existing one)
   - Set up deployment automatically

**⚠️ Note:** If Azure creates its own workflow file, you may need to:
- Delete the Azure-generated workflow, OR
- Delete your existing workflow and use Azure's, OR
- Manually merge the configurations

## Current Status

✅ **Workflow file exists** and is configured  
❌ **SWA doesn't exist yet** (needs to be created)  
❌ **Deployment token not in GitHub Secrets** (needs to be added)

## Recommended Next Steps

1. **Create the SWA** (Free tier):
   ```bash
   cd zimax-web
   ./infra/deploy.sh
   ```

2. **Get and add the deployment token** to GitHub Secrets

3. **Add custom domain** via Azure Portal:
   - Use "Custom domain on Azure DNS"
   - Select zimax.net DNS zone

4. **Monitor GitHub Actions** - workflow should deploy automatically

## Why This Approach?

- ✅ You control the workflow configuration
- ✅ No conflicts with Azure-generated workflows
- ✅ Consistent with your existing setup
- ✅ Free tier supports 2 custom domains with auto SSL

## Alternative: Let Azure Create Everything

If you prefer Azure to handle everything:

1. **Delete** the existing workflow file (`.github/workflows/azure-static-web-apps.yml`)
2. **Create SWA via Portal** with GitHub connection
3. Azure will create its own workflow
4. Then add custom domain manually

**Trade-off:** Less control over workflow configuration, but simpler initial setup.

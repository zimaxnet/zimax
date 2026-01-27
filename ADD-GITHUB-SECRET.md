# Add Deployment Token to GitHub Secrets

## Quick Steps

1. **Copy this deployment token:**
   ```
   ebd839553af7f6228a0a6ddd1709484c3834ee8b66ea2d6394496c7d1981971406-83556e5d-4b15-4b93-8ebf-4cd9c789db0800f1818090589e0f
   ```

2. **Go to GitHub Secrets:**
   https://github.com/zimaxnet/zimax/settings/secrets/actions

3. **Click "New repository secret"**

4. **Enter:**
   - **Name:** `AZURE_STATIC_WEB_APPS_API_TOKEN`
   - **Value:** (paste the token from step 1)

5. **Click "Add secret"**

## Verify It's Added

After adding, you should see `AZURE_STATIC_WEB_APPS_API_TOKEN` in your secrets list.

## What Happens Next

Once the secret is added:
- The GitHub Actions workflow will be able to deploy
- Next push to `main` will trigger automatic deployment
- Or manually trigger: Actions → "Azure Static Web Apps CI/CD" → "Run workflow"

## Static Web App Details

- **Name:** zimax-web
- **Resource Group:** zimax-rg
- **SKU:** Free
- **Default URL:** https://delightful-rock-090589e0f.6.azurestaticapps.net
- **Status:** ✅ Created and ready

## Next Steps After Adding Secret

1. ✅ Add token to GitHub Secrets (this step)
2. Configure custom domain `zimax.net` via Azure Portal
3. Push to trigger deployment (or workflow will auto-deploy on next push)

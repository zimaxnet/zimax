# Deployment Issues & Solutions

## Current Issue: Node.js Version Mismatch

### Problem
Azure Static Web Apps deploy action uses Oryx builder which detected Node.js 18.20.8, but:
- Next.js 16.1.4 requires Node.js >=20.9.0
- Resend 6.8.0 requires Node.js >=20

### Solution Applied
1. **Enabled Static Export:** Updated `next.config.ts` to use `output: 'export'`
   - This generates static HTML files in the `out` directory
   - Required for Azure Static Web Apps

2. **Updated Workflow:** 
   - Changed `output_location` from `.next` to `out`
   - Added `skip_app_build: true` to use pre-built files
   - Build happens in GitHub Actions with Node.js 20, then uploads to Azure

### Impact
- ✅ Site will deploy successfully
- ⚠️ API routes (`/api/contact`) will not work with static export
- **Alternative for Contact Form:**
  - Option 1: Convert to Azure Function
  - Option 2: Use Azure Communication Services directly
  - Option 3: Use third-party form service (Formspree, Netlify Forms)

## Next Steps

1. **Test Deployment:** Push changes and verify deployment succeeds
2. **Contact Form Solution:** Implement one of the alternatives above
3. **Verify Site:** Check that all pages load correctly

## Notes

The contact form API route needs to be handled separately for Azure Static Web Apps. The form UI will still work, but submissions will need an alternative backend.

# API Routes

## Note: Static Export Limitation

This API route (`/api/contact`) is disabled for static export builds (required for Azure Static Web Apps).

## Alternatives for Contact Form

### Option 1: Azure Function (Recommended)
Convert this route to an Azure Function:
- Create Azure Function in the Static Web App
- Move contact form logic to the function
- Update contact form to call the function endpoint

### Option 2: Azure Communication Services
Use Azure Communication Services directly from the client:
- Client-side form submission
- Direct API call to Azure Communication Services
- No server-side code needed

### Option 3: Third-Party Form Service
Use a service like:
- Formspree
- Netlify Forms
- FormBackend

### Option 4: Client-Side Submission
Submit directly to Resend API from the client (with API key in environment variable).

## Current Status

The API route code is preserved in `app/api.disabled/` for reference. It can be:
- Converted to Azure Function
- Used if deploying to a platform that supports API routes (Vercel, Azure App Service)
- Referenced when implementing one of the alternatives above

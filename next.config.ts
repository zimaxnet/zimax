import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // For Azure Static Web Apps, API routes will be handled by Azure Functions
  // For Vercel or other platforms, API routes work natively
  // If you need static export, uncomment below and remove API routes:
  // output: 'export',
  // images: { unoptimized: true },
};

export default nextConfig;

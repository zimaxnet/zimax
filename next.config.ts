import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Azure Static Web Apps requires static export
  // API routes will need to be converted to Azure Functions or use alternative service
  output: 'export',
  images: { unoptimized: true },
  // Skip API routes in static export
  skipTrailingSlashRedirect: true,
};

export default nextConfig;

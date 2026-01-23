import { MetadataRoute } from 'next';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://zimax.net';

  const routes = [
    '',
    '/products',
    '/products/secai-radar',
    '/products/ctxeco',
    '/products/opencontextgraph',
    '/solutions',
    '/resources',
    '/resources/blog',
    '/security',
    '/security/disclosure',
    '/company',
    '/company/about',
    '/company/leadership',
    '/press',
    '/press/brand-kit',
    '/press/media-inquiries',
    '/contact',
    '/legal',
    '/legal/terms',
    '/legal/privacy',
    '/legal/acceptable-use',
    '/legal/open-source',
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1 : 0.8,
  }));
}

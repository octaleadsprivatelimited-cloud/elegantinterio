import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const defaultSiteUrl = 'https://elegantinterio.com';
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, '') || defaultSiteUrl;

  const urls: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/interior-design-hyderabad`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.95,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/portfolio`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/gallery`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/reviews`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    // Service pages
    {
      url: `${baseUrl}/residential-design`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/commercial-design`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/space-planning`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/color-consultation`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/furniture-selection`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/renovation-services`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    // Blog posts
    {
      url: `${baseUrl}/blog/modern-interior-design-trends-2024`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/blog/perfect-color-palette-home`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/blog/small-space-design-maximizing-functionality`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/blog/sustainable-interior-design-practices`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    // Legal pages
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms-of-service`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ];

  // Only include URLs that actually exist in the app
  const existingPaths = new Set([
    '/',
    '/about',
    '/services',
    '/portfolio',
    '/gallery',
    '/reviews',
    '/blog',
    '/contact',
    '/residential-design',
    '/commercial-design',
    '/space-planning',
    '/color-consultation',
    '/furniture-selection',
    '/renovation-services',
    '/interior-design-hyderabad',
    '/blog/modern-interior-design-trends-2024',
    '/blog/perfect-color-palette-home',
    '/blog/small-space-design-maximizing-functionality',
    '/blog/sustainable-interior-design-practices',
    '/privacy-policy',
    '/terms-of-service',
  ]);

  const filtered = urls.filter((entry) => {
    try {
      const path = new URL(entry.url).pathname;
      return existingPaths.has(path);
    } catch {
      return true;
    }
  });

  return filtered;
}

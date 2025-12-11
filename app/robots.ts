import { MetadataRoute } from 'next';

const defaultSiteUrl = 'https://elegantinterio.com';
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, '') || defaultSiteUrl;

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/private/', '/admin/', '/api/'],
    },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}

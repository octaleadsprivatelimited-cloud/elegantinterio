import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

const inter = Inter({ subsets: ['latin'] });

const defaultSiteUrl = 'https://elegantinterio.com';
const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, '') ||
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : defaultSiteUrl);

export const metadata: Metadata = {
  title: {
    default: 'Elegant Interio | Bespoke Interior Designers in Hyderabad',
    template: '%s | Elegant Interio',
  },
  description:
    'Elegant Interio delivers bespoke residential and commercial interiors across Hyderabad. Visit our studio at Road Number 14, Alkapur Township, Puppalguda, Manikonda, Telangana 500089 or book a consultation online.',
  authors: [{ name: 'Elegant Interio' }],
  creator: 'Elegant Interio',
  publisher: 'Elegant Interio',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    title: 'Elegant Interio | Bespoke Interior Designers in Hyderabad',
    description:
      'From luxury residences to smart commercial spaces, Elegant Interio crafts personalised interiors across Hyderabad and the greater Telangana region.',
    siteName: 'Elegant Interio',
    images: [
      {
        url: `${siteUrl}/images/slider-1.jpg`,
        width: 1200,
        height: 630,
        alt: 'Elegant Interio interior design showcase',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Elegant Interio | Bespoke Interior Designers in Hyderabad',
    description: 'Luxury home and commercial interiors crafted for modern lifestyles by Elegant Interio.',
    images: [`${siteUrl}/images/slider-1.jpg`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/icon.png', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-icon.png' },
    ],
    shortcut: ['/favicon.ico'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#121212" />
        {/* JSON-LD structured data for Organization and Website */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'Elegant Interio',
              url: siteUrl,
              email: 'info@elegantinterio.com',
              logo: `${siteUrl}/logo-white.png`,
              sameAs: [
                'https://maps.app.goo.gl/7X88wqtGi7tdbJWP6'
              ],
              address: {
                '@type': 'PostalAddress',
                streetAddress: 'Road Number 14, Alkapur Township, Puppalguda',
                addressRegion: 'Telangana',
                postalCode: '500089',
                addressCountry: 'IN',
              },
              contactPoint: [
                {
                  '@type': 'ContactPoint',
                  contactType: 'customer service',
                  email: 'info@elegantinterio.com',
                  telephone: '+91 90103 53837',
                  areaServed: 'IN',
                  availableLanguage: ['English', 'Hindi', 'Telugu'],
                },
              ],
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebSite',
              url: siteUrl,
              name: 'Elegant Interio',
              potentialAction: {
                '@type': 'SearchAction',
                target: `${siteUrl}/search?q={search_term_string}`,
                'query-input': 'required name=search_term_string',
              },
            }),
          }}
        />
      </head>
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}

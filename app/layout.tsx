import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

const inter = Inter({ subsets: ['latin'] });

const defaultSiteUrl = 'https://elegantinterio.com';
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, '') || defaultSiteUrl;

export const metadata: Metadata = {
  title: {
    default: 'Elegant Interio | Best Interior Designers in Hyderabad, Telangana | Luxury Home & Office Interiors',
    template: '%s | Elegant Interio - Interior Designers Hyderabad',
  },
  description:
    'Elegant Interio is Hyderabad\'s leading interior design company offering luxury residential & commercial interior design services. Award-winning designers in Alkapur Township, Puppalguda, Manikonda. Free consultation. 60+ projects completed. Call +91 90103 53837.',
  keywords: [
    'interior designers Hyderabad',
    'interior design Hyderabad',
    'best interior designers in Hyderabad',
    'luxury interior designers Telangana',
    'residential interior design Hyderabad',
    'commercial interior design Hyderabad',
    'interior design company Hyderabad',
    'home interior designers Hyderabad',
    'office interior design Hyderabad',
    'interior decorators Hyderabad',
    'modern interior design Hyderabad',
    'turnkey interior solutions Hyderabad',
    'interior design services Hyderabad',
    'Alkapur Township interior designers',
    'Puppalguda interior design',
    'Manikonda interior designers',
    'HITEC City interior design',
    'Gachibowli interior designers',
    'Banjara Hills interior design',
    'Jubilee Hills interior designers',
    'Kondapur interior design',
    'Madhapur interior designers',
    'Begumpet interior design',
    'Secunderabad interior designers',
    'Ameerpet interior design',
    'Kukatpally interior designers',
    'Miyapur interior design',
    'luxury home interiors Hyderabad',
    'apartment interior design Hyderabad',
    'villa interior design Hyderabad',
    '3D interior design Hyderabad',
    'turnkey interior contractors Hyderabad',
    'interior design studio Hyderabad',
    'top interior designers Hyderabad',
    'affordable interior design Hyderabad',
    'premium interior design Hyderabad',
    'Elegant Interio',
    'Elegant Interio Hyderabad',
  ],
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
    locale: 'en_IN',
    url: siteUrl,
    title: 'Elegant Interio | Best Interior Designers in Hyderabad, Telangana | Luxury Interiors',
    description:
      'Hyderabad\'s premier interior design company. Luxury residential & commercial interiors in Alkapur Township, Puppalguda, Manikonda. Award-winning designs. 60+ projects. Free consultation. Call +91 90103 53837.',
    siteName: 'Elegant Interio - Interior Designers Hyderabad',
    images: [
      {
        url: `${siteUrl}/logo-white.png`,
        width: 1200,
        height: 630,
        alt: 'Elegant Interio - Best Interior Designers in Hyderabad, Telangana',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Elegant Interio | Best Interior Designers in Hyderabad, Telangana',
    description: 'Luxury residential & commercial interior design services in Hyderabad. Award-winning designers. 60+ projects. Free consultation.',
    images: [`${siteUrl}/logo-white.png`],
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
  verification: {
    google: 'your-google-verification-code',
  },
  category: 'Interior Design',
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
              '@type': 'InteriorDesignBusiness',
              name: 'Elegant Interio',
              alternateName: 'Elegant Interio Interior Designers',
              url: siteUrl,
              logo: `${siteUrl}/logo-white.png`,
              image: `${siteUrl}/logo-white.png`,
              description: 'Hyderabad\'s leading interior design company offering luxury residential and commercial interior design services. Award-winning designers with 60+ completed projects.',
              email: 'info@elegantinterio.com',
              telephone: '+91 90103 53837',
              priceRange: '$$',
              address: {
                '@type': 'PostalAddress',
                streetAddress: 'Road Number 14, Alkapur Township, Puppalguda',
                addressLocality: 'Manikonda',
                addressRegion: 'Telangana',
                postalCode: '500089',
                addressCountry: 'IN',
              },
              geo: {
                '@type': 'GeoCoordinates',
                latitude: '17.4065',
                longitude: '78.3242',
              },
              areaServed: [
                {
                  '@type': 'City',
                  name: 'Hyderabad',
                  addressRegion: 'Telangana',
                  addressCountry: 'IN',
                },
                {
                  '@type': 'State',
                  name: 'Telangana',
                  addressCountry: 'IN',
                },
              ],
              serviceArea: {
                '@type': 'GeoCircle',
                geoMidpoint: {
                  '@type': 'GeoCoordinates',
                  latitude: '17.4065',
                  longitude: '78.3242',
                },
                geoRadius: {
                  '@type': 'Distance',
                  name: '50 km',
                },
              },
              hasOfferCatalog: {
                '@type': 'OfferCatalog',
                name: 'Interior Design Services',
                itemListElement: [
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Service',
                      name: 'Residential Interior Design',
                      description: 'Luxury home interior design services in Hyderabad',
                    },
                  },
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Service',
                      name: 'Commercial Interior Design',
                      description: 'Office and commercial space interior design in Hyderabad',
                    },
                  },
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Service',
                      name: 'Space Planning',
                      description: 'Professional space planning and layout design services',
                    },
                  },
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Service',
                      name: 'Color Consultation',
                      description: 'Expert color consultation and palette selection',
                    },
                  },
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Service',
                      name: 'Furniture Selection',
                      description: 'Curated furniture selection and procurement services',
                    },
                  },
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Service',
                      name: 'Renovation Services',
                      description: 'Complete renovation and remodeling services',
                    },
                  },
                ],
              },
              contactPoint: [
                {
                  '@type': 'ContactPoint',
                  contactType: 'customer service',
                  email: 'info@elegantinterio.com',
                  telephone: '+91 90103 53837',
                  areaServed: ['IN', 'Telangana', 'Hyderabad'],
                  availableLanguage: ['English', 'Hindi', 'Telugu'],
                },
                {
                  '@type': 'ContactPoint',
                  contactType: 'sales',
                  telephone: '+91 90103 53837',
                  areaServed: ['IN', 'Telangana', 'Hyderabad'],
                  availableLanguage: ['English', 'Hindi', 'Telugu'],
                },
              ],
              sameAs: [
                'https://maps.app.goo.gl/7X88wqtGi7tdbJWP6',
              ],
              aggregateRating: {
                '@type': 'AggregateRating',
                ratingValue: '5.0',
                reviewCount: '60',
                bestRating: '5',
                worstRating: '1',
              },
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'LocalBusiness',
              name: 'Elegant Interio',
              image: `${siteUrl}/logo-white.png`,
              '@id': siteUrl,
              url: siteUrl,
              telephone: '+91 90103 53837',
              priceRange: '$$',
              address: {
                '@type': 'PostalAddress',
                streetAddress: 'Road Number 14, Alkapur Township, Puppalguda',
                addressLocality: 'Manikonda',
                addressRegion: 'Telangana',
                postalCode: '500089',
                addressCountry: 'IN',
              },
              geo: {
                '@type': 'GeoCoordinates',
                latitude: '17.4065',
                longitude: '78.3242',
              },
              openingHoursSpecification: [
                {
                  '@type': 'OpeningHoursSpecification',
                  dayOfWeek: [
                    'Monday',
                    'Tuesday',
                    'Wednesday',
                    'Thursday',
                    'Friday',
                  ],
                  opens: '09:00',
                  closes: '18:00',
                },
                {
                  '@type': 'OpeningHoursSpecification',
                  dayOfWeek: 'Saturday',
                  opens: '10:00',
                  closes: '16:00',
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

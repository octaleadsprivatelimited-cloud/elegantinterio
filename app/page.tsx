import { Metadata } from 'next';
import Hero from '@/components/sections/Hero';
import AboutPreview from '@/components/sections/AboutPreview';
import Services from '@/components/sections/Services';
import Portfolio from '@/components/sections/Portfolio';
import Testimonials from '@/components/sections/Testimonials';
import Process from '@/components/sections/Process';
// import Stats from '@/components/sections/Stats';

export const metadata: Metadata = {
  title: 'Best Interior Designers in Hyderabad | Luxury Home & Office Interiors | Elegant Interio',
  description:
    'Elegant Interio is Hyderabad\'s #1 interior design company. Award-winning luxury residential & commercial interior designers in Alkapur Township, Puppalguda, Manikonda. 60+ projects. 3D design. Turnkey solutions. Free consultation. Call +91 90103 53837.',
  keywords: [
    'interior designers Hyderabad',
    'best interior designers in Hyderabad',
    'luxury interior designers Hyderabad',
    'interior design company Hyderabad',
    'residential interior design Hyderabad',
    'commercial interior design Hyderabad',
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
    'luxury home interiors Hyderabad',
    'apartment interior design Hyderabad',
    'villa interior design Hyderabad',
    '3D interior design Hyderabad',
    'top interior designers Hyderabad',
    'affordable interior design Hyderabad',
    'premium interior design Hyderabad',
    'interior design studio Hyderabad',
    'Elegant Interio',
    'Elegant Interio Hyderabad',
    'interior design Telangana',
    'luxury interiors Telangana',
  ],
  openGraph: {
    title: 'Best Interior Designers in Hyderabad | Luxury Home & Office Interiors | Elegant Interio',
    description:
      'Hyderabad\'s premier interior design company. Award-winning luxury residential & commercial interiors in Alkapur Township, Puppalguda. 60+ projects. Free consultation. Call +91 90103 53837.',
    type: 'website',
    locale: 'en_IN',
    url: 'https://elegantinterio.com',
    images: [
      {
        url: 'https://elegantinterio.com/logo-white.png',
        width: 1200,
        height: 630,
        alt: 'Elegant Interio - Best Interior Designers in Hyderabad',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Interior Designers in Hyderabad | Elegant Interio',
    description: 'Award-winning luxury residential & commercial interior design in Hyderabad. 60+ projects. Free consultation.',
    images: ['https://elegantinterio.com/logo-white.png'],
  },
  alternates: {
    canonical: 'https://elegantinterio.com',
  },
};

export default function Home() {
  return (
    <>
      <Hero />
      <AboutPreview />
      <Services />
      <Portfolio />
      <Process />
      <Testimonials />
    </>
  );
}

import { Metadata } from 'next';
import Hero from '@/components/sections/Hero';
import AboutPreview from '@/components/sections/AboutPreview';
import Services from '@/components/sections/Services';
import Portfolio from '@/components/sections/Portfolio';
import Testimonials from '@/components/sections/Testimonials';
import Process from '@/components/sections/Process';
// import Stats from '@/components/sections/Stats';

export const metadata: Metadata = {
  title: 'Elegant Interio | Luxury Interior Designers in Hyderabad',
  description:
    'Elegant Interio crafts bespoke residential and commercial interiors across Hyderabad. Visit our studio in Alkapur Township, Puppalguda to explore 3D designs, premium finishes, and turnkey delivery.',
  keywords: [
    'Elegant Interio',
    'interior designers Hyderabad',
    'luxury home interiors Telangana',
    'commercial interior design Hyderabad',
    'turnkey interior contractors Hyderabad',
    'Alkapur Township interior design studio',
  ],
  openGraph: {
    title: 'Elegant Interio | Luxury Interior Designers in Hyderabad',
    description:
      'Schedule a consultation with Elegant Interio for bespoke residential and commercial interior design solutions in Hyderabad, Telangana.',
    type: 'website',
    locale: 'en_IN',
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

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Interior Design Gallery | Elegant Interio Hyderabad | Design Inspiration',
  description:
    'Browse Elegant Interio\'s interior design gallery featuring luxury residential, commercial, and office interiors in Hyderabad. Get inspired by our award-winning designs.',
  keywords: [
    'interior design gallery Hyderabad',
    'interior design photos Hyderabad',
    'interior design images Hyderabad',
    'residential interior gallery Hyderabad',
    'commercial interior gallery Hyderabad',
    'office interior gallery Hyderabad',
    'home interior photos Hyderabad',
    'interior design inspiration Hyderabad',
    'luxury interior photos Hyderabad',
    'modern interior gallery Hyderabad',
    'interior design showcase Hyderabad',
    'interior design pictures Hyderabad',
    'Elegant Interio gallery',
  ],
  openGraph: {
    title: 'Interior Design Gallery | Elegant Interio Hyderabad',
    description: 'Browse our interior design gallery featuring luxury residential & commercial interiors in Hyderabad.',
    type: 'website',
    locale: 'en_IN',
    images: [{ url: 'https://elegantinterio.com/logo-white.png', alt: 'Interior Design Gallery Hyderabad' }],
  },
  alternates: {
    canonical: 'https://elegantinterio.com/gallery',
  },
};

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Interior Design Gallery | Elegant Interio Hyderabad',
  description:
    'Browse Elegant Interio’s visual gallery featuring residential retreats, modern offices, and hospitality interiors crafted across Hyderabad and Telangana.',
  keywords: [
    'Elegant Interio gallery',
    'Hyderabad interior design gallery',
    'luxury interior photos Telangana',
    'residential interior inspiration Hyderabad',
    'commercial interior gallery Hyderabad',
  ],
  openGraph: {
    title: 'Elegant Interio Gallery | Interior Design Inspiration',
    description:
      'Get inspired by Elegant Interio’s latest interior design projects across Hyderabad—from premium homes to stylish commercial environments.',
    type: 'website',
    locale: 'en_IN',
  },
};

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

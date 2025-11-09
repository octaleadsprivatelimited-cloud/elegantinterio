import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Elegant Interio Portfolio | Luxury Interiors in Hyderabad',
  description:
    'Explore Elegant Interio’s portfolio of bespoke residential, commercial, and hospitality interiors across Hyderabad. Discover how we blend aesthetics with functionality.',
  keywords: [
    'Elegant Interio portfolio',
    'Hyderabad interior design projects',
    'luxury interiors gallery Telangana',
    'residential interior case studies Hyderabad',
    'commercial interior portfolio Hyderabad',
  ],
  openGraph: {
    title: 'Elegant Interio Portfolio | Signature Interior Design Projects',
    description:
      'Browse the latest Elegant Interio projects—from bespoke homes to flagship commercial spaces in Hyderabad.',
    type: 'website',
    locale: 'en_IN',
  },
};

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Elegant Interio Blog | Interior Design Tips & Trends',
  description:
    'Stay updated with Elegant Interio’s insights on luxury interiors, colour theory, space optimisation, and project management for homes and commercial spaces in Hyderabad.',
  keywords: [
    'Elegant Interio blog',
    'interior design tips Hyderabad',
    'luxury interior trends Telangana',
    'space planning advice Hyderabad',
    'colour palette ideas Elegant Interio',
  ],
  openGraph: {
    title: 'Elegant Interio Blog | Inspiration for Hyderabad Interiors',
    description:
      'Read expert guidance from Elegant Interio’s design team on creating functional, stylish interiors for homes and businesses.',
    type: 'website',
    locale: 'en_IN',
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

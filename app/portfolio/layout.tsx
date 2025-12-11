import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Elegant Interio Portfolio | Interior Design Projects in Hyderabad | Our Work',
  description:
    'Explore Elegant Interio\'s portfolio of 60+ luxury interior design projects in Hyderabad. Residential, commercial, office, villa, apartment interiors. Award-winning designs.',
  keywords: [
    'Elegant Interio portfolio',
    'interior design projects Hyderabad',
    'interior design portfolio Hyderabad',
    'residential interior projects Hyderabad',
    'commercial interior projects Hyderabad',
    'office interior projects Hyderabad',
    'villa interior design projects',
    'apartment interior projects Hyderabad',
    'luxury interior projects Hyderabad',
    'interior design case studies Hyderabad',
    'interior design gallery Hyderabad',
    'completed projects Hyderabad',
    'interior design work Hyderabad',
    'best interior design projects Hyderabad',
  ],
  openGraph: {
    title: 'Elegant Interio Portfolio | Interior Design Projects in Hyderabad',
    description: 'Explore 60+ luxury interior design projects in Hyderabad. Residential, commercial & office interiors.',
    type: 'website',
    locale: 'en_IN',
    images: [{ url: 'https://elegantinterio.com/logo-white.png', alt: 'Elegant Interio Portfolio' }],
  },
  alternates: {
    canonical: 'https://elegantinterio.com/portfolio',
  },
};

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

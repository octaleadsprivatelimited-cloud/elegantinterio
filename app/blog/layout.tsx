import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Interior Design Blog | Design Tips, Trends & Ideas | Elegant Interio Hyderabad',
  description:
    'Read Elegant Interio\'s interior design blog for expert tips, latest trends, color ideas, space planning advice, and design inspiration for homes and offices in Hyderabad.',
  keywords: [
    'interior design blog Hyderabad',
    'interior design tips Hyderabad',
    'interior design trends Hyderabad',
    'home design ideas Hyderabad',
    'office design tips Hyderabad',
    'interior design inspiration Hyderabad',
    'color scheme ideas',
    'space planning tips',
    'interior design advice',
    'home decoration ideas',
    'modern interior design trends',
    'luxury interior design ideas',
    'interior design guide',
    'Elegant Interio blog',
  ],
  openGraph: {
    title: 'Interior Design Blog | Elegant Interio Hyderabad',
    description: 'Expert interior design tips, trends, and inspiration for homes and offices in Hyderabad.',
    type: 'website',
    locale: 'en_IN',
    images: [{ url: 'https://elegantinterio.com/logo-white.png', alt: 'Interior Design Blog' }],
  },
  alternates: {
    canonical: 'https://elegantinterio.com/blog',
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

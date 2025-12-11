import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Client Reviews & Testimonials | Elegant Interio Hyderabad | 5 Star Ratings',
  description:
    'Read verified client reviews and testimonials for Elegant Interio - Hyderabad\'s best interior designers. 5-star ratings. 60+ satisfied clients. Real customer feedback.',
  keywords: [
    'Elegant Interio reviews',
    'interior design reviews Hyderabad',
    'interior designer testimonials Hyderabad',
    'customer reviews interior design Hyderabad',
    'Elegant Interio testimonials',
    'interior design feedback Hyderabad',
    'interior design ratings Hyderabad',
    'best interior designers reviews Hyderabad',
    'client testimonials Hyderabad',
    'interior design company reviews Hyderabad',
    '5 star interior designers Hyderabad',
    'interior design customer feedback',
  ],
  openGraph: {
    title: 'Client Reviews & Testimonials | Elegant Interio Hyderabad',
    description: 'Read verified 5-star reviews from satisfied clients. 60+ happy customers in Hyderabad.',
    type: 'website',
    locale: 'en_IN',
    images: [{ url: 'https://elegantinterio.com/logo-white.png', alt: 'Elegant Interio Reviews' }],
  },
  alternates: {
    canonical: 'https://elegantinterio.com/reviews',
  },
};

export default function ReviewsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Client Reviews | Elegant Interio Testimonials',
  description:
    'Explore verified testimonials for Elegant Interio. Discover how our Hyderabad interior design studio delivers bespoke residential and commercial spaces that clients love.',
  keywords: [
    'Elegant Interio reviews',
    'Hyderabad interior design testimonials',
    'customer feedback Elegant Interio',
    'luxury interior design ratings Telangana',
  ],
  openGraph: {
    title: 'Elegant Interio Reviews | Client Success Stories',
    description:
      'See why homeowners and businesses across Hyderabad trust Elegant Interio for bespoke interior design solutions.',
    type: 'website',
    locale: 'en_IN',
  },
};

export default function ReviewsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Elegant Interio Landing Page | Book Your Hyderabad Design Consultation',
  description:
    'Claim a complimentary interior design consultation with Elegant Interio. Our Hyderabad studio delivers bespoke 3D designs, curated materials, and turnkey execution in as little as 45 days.',
  keywords: [
    'book interior design consultation Hyderabad',
    'Elegant Interio free visit',
    'Hyderabad 3D interior design',
    'turnkey interiors Telangana',
    'luxury interior designers Hyderabad',
  ],
  openGraph: {
    title: 'Elegant Interio | Schedule Your Free Interior Design Consultation',
    description:
      'Partner with Elegant Interio for personalised interior design services in Hyderabad. Schedule a consultation to explore concepts, budgets, and timelines.',
    type: 'website',
    locale: 'en_IN',
  },
};

export default function LandingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

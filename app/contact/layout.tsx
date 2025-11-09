import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Elegant Interio | Interior Design Studio in Hyderabad',
  description:
    'Connect with Elegant Interio for bespoke interior design consultations. Visit our studio at Road Number 14, Alkapur Township, Puppalguda, Manikonda, Telangana 500089 or email info@elegantinterio.com.',
  keywords: [
    'Elegant Interio contact',
    'interior design consultation Hyderabad',
    'Alkapur Township interior design studio',
    'hyderabad interior design appointment',
    'info@elegantinterio.com',
  ],
  openGraph: {
    title: 'Contact Elegant Interio | Schedule Your Interior Design Consultation',
    description:
      'Book a consultation with Elegant Interio’s design team in Hyderabad. Email info@elegantinterio.com or plan a visit to our Alkapur Township studio.',
    type: 'website',
    locale: 'en_IN',
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

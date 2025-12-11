import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Elegant Interio | Interior Design Studio Hyderabad | Free Consultation',
  description:
    'Contact Elegant Interio for free interior design consultation in Hyderabad. Visit our studio at Road Number 14, Alkapur Township, Puppalguda, Manikonda, Telangana 500089. Call +91 90103 53837 or email info@elegantinterio.com.',
  keywords: [
    'contact Elegant Interio',
    'interior design consultation Hyderabad',
    'interior design studio Hyderabad',
    'Alkapur Township interior design studio',
    'Puppalguda interior design',
    'Manikonda interior designers',
    'interior design appointment Hyderabad',
    'free consultation Hyderabad',
    'interior design quote Hyderabad',
    'info@elegantinterio.com',
    'Elegant Interio phone number',
    'interior designers contact Hyderabad',
    'book consultation Hyderabad',
    'interior design studio address Hyderabad',
  ],
  openGraph: {
    title: 'Contact Elegant Interio | Interior Design Studio Hyderabad',
    description: 'Book a free consultation with Elegant Interio. Visit our studio in Alkapur Township, Puppalguda or call +91 90103 53837.',
    type: 'website',
    locale: 'en_IN',
    images: [{ url: 'https://elegantinterio.com/logo-white.png', alt: 'Contact Elegant Interio' }],
  },
  alternates: {
    canonical: 'https://elegantinterio.com/contact',
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

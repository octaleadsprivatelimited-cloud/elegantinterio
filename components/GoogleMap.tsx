'use client';

import Link from 'next/link';
import { MapPin } from 'lucide-react';

const mapSrc =
  'https://www.google.com/maps?q=Road+Number+14,+Alkapur+Township,+Puppalguda,+Telangana+500089&output=embed';

const GoogleMap = () => {
  return (
    <div className="w-full space-y-6">
      <div className="w-full h-80 min-h-[320px] rounded-2xl overflow-hidden border border-gray-200 shadow-lg">
        <iframe
          src={mapSrc}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Elegant Interio studio location"
        />
      </div>
      <div className="rounded-2xl border border-gray-200 bg-gray-50 p-6 shadow-lg">
        <h3 className="text-xl font-semibold text-gray-900 mb-3">Elegant Interio Studio</h3>
        <div className="flex items-start text-gray-700">
          <MapPin className="w-5 h-5 text-accent mt-1 mr-3 flex-shrink-0" />
          <div>
            <p>Road Number 14, Alkapur Township</p>
            <p>Puppalguda, Manikonda</p>
            <p>Telangana 500089</p>
            <Link
              href="https://maps.app.goo.gl/7X88wqtGi7tdbJWP6"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex items-center text-accent hover:text-accent/80 font-medium"
            >
              View directions on Google Maps
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GoogleMap;

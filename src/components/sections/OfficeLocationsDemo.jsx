import { useState } from 'react';
import Container from '../ui/Container';
import SectionHeading from '../ui/SectionHeading';
import Image from 'next/image';
import { trackOfficeInteraction, trackEmailClick } from '../../lib/gtag';

const OfficeLocationsDemo = () => {
  const [selectedOffice, setSelectedOffice] = useState(0);

  const offices = [
    {
      city: 'Zürich',
      country: 'Switzerland',
      address: 'Hungerbergstrasse 26, 8046 Zürich, Switzerland',
      description: 'Our European headquarters in the vibrant Affoltern district',
      email: 'hello@labelladder.com',
      flag: '/images/icons/switzerland.png',
      mapEmbed: 'https://www.openstreetmap.org/export/embed.html?bbox=8.4950%2C47.4170%2C8.5050%2C47.4220&layer=mapnik&marker=47.4196%2C8.4993',
      coordinates: { lat: 47.4196, lng: 8.4993 },
      timezone: 'CET (UTC+1)',
      workingHours: [
        'Monday - Friday: 9:00 - 18:00',
        'Saturday: By appointment',
        'Sunday: Closed'
      ],
      services: ['Data Strategy', 'Client Relations', 'Quality Assurance'],
      bgGradient: 'from-red-500 to-white'
    },
    {
      city: 'Windhoek',
      country: 'Namibia',
      address: '8 Bell Street, Windhoek, Namibia',
      description: 'Our data processing center with skilled local talent in the city center',
      email: 'hello@labelladder.com',
      flag: '/images/icons/namibia.png',
      mapEmbed: 'https://www.openstreetmap.org/export/embed.html?bbox=17.0830%2C-22.5830%2C17.0890%2C-22.5780&layer=mapnik&marker=-22.5806%2C17.0859',
      coordinates: { lat: -22.5806, lng: 17.0859 },
      timezone: 'CAT (UTC+2)',
      workingHours: [
        'Monday - Friday: 8:00 - 17:00',
        'Saturday: 9:00 - 13:00',
        'Sunday: Closed'
      ],
      services: ['Data Annotation', 'Processing', 'Label Ladder Academy'],
      bgGradient: 'from-blue-500 via-red-500 to-green-500'
    }
  ];

  const handleOfficeSelect = (index) => {
    setSelectedOffice(index);
    const officeName = offices[index].city.toLowerCase();
    trackOfficeInteraction(officeName);
  };

  const handleEmailClick = (office) => {
    trackEmailClick();
  };

  const createGoogleMapsUrl = (address) => {
    return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
  };

  const createAppleMapsUrl = (address) => {
    return `https://maps.apple.com/?q=${encodeURIComponent(address)}`;
  };

  return (
    <section className="py-16 bg-gray-50">
      <Container>
        <SectionHeading
          title="Our Global Offices"
          subtitle="Swiss-Namibian partnership with offices strategically located to serve our clients worldwide"
          centered
        />

        {/* Office Selector Tabs */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-white rounded-lg p-1 shadow-md">
            {offices.map((office, index) => (
              <button
                key={index}
                onClick={() => handleOfficeSelect(index)}
                className={`flex items-center px-6 py-3 rounded-md transition-all duration-300 ${selectedOffice === index
                    ? 'bg-primary text-white shadow-md'
                    : 'text-gray-600 hover:text-primary hover:bg-gray-50'
                  }`}
              >
                <div className="w-6 h-4 rounded-sm overflow-hidden mr-3">
                  <Image
                    src={office.flag}
                    alt={`${office.country} flag`}
                    width={24}
                    height={16}
                    className="object-cover"
                  />
                </div>
                <span className="font-medium">{office.city}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Selected Office Details */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Map Section */}
          <div className="order-2 lg:order-1">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              {/* Interactive Map */}
              <div className="relative h-80">
                <iframe
                  src={offices[selectedOffice].mapEmbed}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  title={`${offices[selectedOffice].city} Office Location`}
                  className="rounded-t-xl"
                />

                {/* Map Overlay with Office Info */}
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="bg-white/95 backdrop-blur-sm rounded-lg p-4 shadow-lg">
                    <div className="flex items-center mb-2">
                      <div className="w-8 h-6 rounded-sm overflow-hidden mr-3">
                        <Image
                          src={offices[selectedOffice].flag}
                          alt={`${offices[selectedOffice].country} flag`}
                          width={32}
                          height={24}
                          className="object-cover"
                        />
                      </div>
                      <h4 className="font-bold text-primary">
                        {offices[selectedOffice].city}, {offices[selectedOffice].country}
                      </h4>
                    </div>
                    <p className="text-sm text-gray-600 mb-3">
                      {offices[selectedOffice].address}
                    </p>
                    <div className="flex gap-2">
                      <a
                        href={createGoogleMapsUrl(offices[selectedOffice].address)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs bg-primary text-white px-3 py-1 rounded-full hover:bg-primary/90 transition-colors"
                      >
                        Google Maps
                      </a>
                      <a
                        href={createAppleMapsUrl(offices[selectedOffice].address)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs bg-gray-600 text-white px-3 py-1 rounded-full hover:bg-gray-700 transition-colors"
                      >
                        Apple Maps
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Office Information */}
          <div className="order-1 lg:order-2">
            <div className="bg-white rounded-xl shadow-lg p-8">
              {/* Office Header */}
              <div className="mb-6">
                <div className="flex items-center mb-4">
                  <div className={`w-12 h-8 rounded-md bg-gradient-to-r ${offices[selectedOffice].bgGradient} mr-4 shadow-sm`}></div>
                  <div>
                    <h3 className="text-2xl font-bold text-primary">
                      {offices[selectedOffice].city}
                    </h3>
                    <p className="text-gray-600">{offices[selectedOffice].country}</p>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  {offices[selectedOffice].description}
                </p>
              </div>

              {/* Contact Information */}
              <div className="space-y-4 mb-6">
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-secondary mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="text-gray-700">{offices[selectedOffice].address}</span>
                </div>

                <div className="flex items-center">
                  <svg className="w-5 h-5 text-secondary mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <a href={`mailto:${offices[selectedOffice].email}`}
                    onClick={handleEmailClick}
                    className="text-gray-700 hover:text-secondary transition-colors">
                    {offices[selectedOffice].email}
                  </a>
                </div>

                <div className="flex items-center">
                  <svg className="w-5 h-5 text-secondary mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-gray-700">{offices[selectedOffice].timezone}</span>
                </div>
              </div>

              {/* Working Hours */}
              <div className="mb-6">
                <h4 className="font-semibold text-primary mb-3">Working Hours</h4>
                <div className="space-y-1">
                  {offices[selectedOffice].workingHours.map((hours, index) => (
                    <p key={index} className="text-sm text-gray-600">{hours}</p>
                  ))}
                </div>
              </div>

              {/* Services */}
              <div>
                <h4 className="font-semibold text-primary mb-3">Key Services</h4>
                <div className="flex flex-wrap gap-2">
                  {offices[selectedOffice].services.map((service, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-sm font-medium"
                    >
                      {service}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-primary mb-4">
              Ready to Visit or Schedule a Meeting?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Whether you're in Europe or Africa, we're here to help with your data needs.
              Contact us to schedule an in-person meeting or virtual consultation.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="/contact/"
                className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors font-medium"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                Schedule Meeting
              </a>
              <a
                href="mailto:hello@labelladder.com"
                onClick={handleEmailClick}
                className="inline-flex items-center px-6 py-3 bg-secondary text-white rounded-lg hover:bg-secondary/90 transition-colors font-medium"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Send Email
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default OfficeLocationsDemo;
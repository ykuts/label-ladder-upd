import { useEffect } from 'react';
import Layout from '../components/layout/Layout';
import Container from '../components/ui/Container';
import SectionHeading from '../components/ui/SectionHeading';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import Image from 'next/image';
import { trackServiceInquiry } from '../lib/gtag';

export default function Services() {

  useEffect(() => {
    trackServiceInquiry('services_page_view');
  }, []);


  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Data Annotation and Processing Services",
    "description": "Comprehensive data annotation and processing services for machine learning and AI applications",
    "provider": {
      "@type": "Organization",
      "name": "Label Ladder"
    },
    "serviceType": "Data Processing Services",
    "areaServed": "Global",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Data Annotation Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Text Annotation Services",
            "description": "Character recognition, transcription, article qualification, content moderation",
            "offers": {
              "@type": "Offer",
              "priceRange": "$0.005-$5",
              "priceCurrency": "USD"
            }
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Image Annotation Services",
            "description": "Image tagging, labeling, shape recognition, image segmentation",
            "offers": {
              "@type": "Offer",
              "priceRange": "$0.02-$5",
              "priceCurrency": "USD"
            }
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Video Annotation Services",
            "description": "Video transcription and sequencing services",
            "offers": {
              "@type": "Offer",
              "priceRange": "$2-$15",
              "priceCurrency": "USD"
            }
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Audio Processing Services",
            "description": "Speech-to-text conversion and sentiment analysis",
            "offers": {
              "@type": "Offer",
              "priceRange": "$0.02-$5",
              "priceCurrency": "USD"
            }
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Data Processing Services",
            "description": "Data entry, validation, cleansing, and migration services"
          }
        }
      ]
    }
  };

  // Text Annotation Services
  const textServices = [
    {
      name: "Character recognition",
      description: "Converting printed or handwritten characters into machine-encoded text",
      price: "$0.005–$0.02 per character or $0.50–$2 per page",
      moq: "5,000 characters or 500 pages"
    },
    {
      name: "Transcription",
      description: "Converting spoken language into written text",
      price: "$1–$5 per minute",
      moq: "100 minutes"
    },
    {
      name: "Article qualification",
      description: "Classifying or scoring articles based on predefined criteria or relevance",
      price: "$0.50–$2 per article",
      moq: "500 articles"
    },
    {
      name: "Content moderation",
      description: "Reviewing and filtering content to ensure compliance with guidelines or policies",
      price: "$0.01–$0.10 per item or $10–$25 per hour",
      moq: "10,000 items or 40 hours"
    }
  ];

  // Image Annotation Services
  const imageServices = [
    {
      name: "Image annotation",
      description: "Tagging objects, attributes, or areas within images for machine learning",
      price: "$0.05–$0.50 per image or per object",
      moq: "1,000 images"
    },
    {
      name: "Image labelling",
      description: "Assigning labels or categories to whole images",
      price: "$0.02–$0.10 per image",
      moq: "2,000 images"
    },
    {
      name: "Shape recognition",
      description: "Identifying and tagging geometric shapes or object outlines in images",
      price: "$0.10–$1 per object",
      moq: "1,000 objects"
    },
    {
      name: "Image segmentation",
      description: "Pixel-level annotation dividing an image into meaningful parts or regions",
      price: "$0.50–$5 per image",
      moq: "500 images"
    }
  ];

  // Video Annotation Services
  const videoServices = [
    {
      name: "Transcription",
      description: "Converting video audio into written text",
      price: "$2–$6 per minute",
      moq: "100 minutes"
    },
    {
      name: "Sequencing",
      description: "Labelling or ordering actions, events, or scenes over time in video",
      price: "$5–$15 per minute",
      moq: "50 minutes"
    }
  ];

  // Audio Annotation Services
  const audioServices = [
    {
      name: "Speech-to-text",
      description: "Automatically or manually converting spoken words into text format",
      price: "$1–$5 per minute",
      moq: "100 minutes"
    },
    {
      name: "Sentiment analysis",
      description: "Classifying text or audio based on emotional tone (positive, negative, neutral)",
      price: "$0.02–$0.10 per item",
      moq: "5,000 items"
    }
  ];

  // Data Processing Services
  const dataProcessingServices = [
    {
      title: "Data Entry",
      subtitle: "Data Entry Tasks",
      description: "We manually or automatically input, update, or maintain data in a digital format — usually into databases, spreadsheets, CRMs, or other software systems.",
      tasks: [
        "Typing handwritten information in a spreadsheet",
        "Transferring data from PDFs or scans into a database",
        "Inputting survey responses or invoices into a system",
        "Transferring data from one system to another (e.g., Excel to Jira)"
      ]
    },
    {
      title: "Data Validation",
      subtitle: "Data Validation Tasks",
      description: "We ensure that the data collected, entered, or processed is correct, usable, and meaningful — whether it comes from humans or machines.",
      tasks: [
        "Format checks: Make sure the data is of the correct format",
        "Range checks: Make sure the data is within its determined limits",
        "Consistency checks: Make sure the data points are aligned semantically and structurally",
        "Completeness checks: Make sure that all required fields are present"
      ]
    },
    {
      title: "Data Cleansing",
      subtitle: "Data Cleansing Tasks",
      description: "Our teams' work improves the quality, reliability, and usability of data by correcting or removing inaccurate, incomplete, duplicated, or irrelevant data within a dataset.",
      tasks: [
        "Removing duplicates: Make sure an entry doesn't appear twice in a dataset",
        "Fixing typos: Make sure typos are fixed and noise is removed from the data",
        "Standardizing data: Make sure the data uses the same format and unit measures",
        "Eliminating outliers or errors: Remove unusable and incorrect data"
      ]
    },
    {
      title: "Data Migration",
      subtitle: "Data Migration Process",
      description: "Data migration is the process of moving data between systems (computing environments, storage system or format) while preserving data integrity and ensuring compatibility with the destination system.",
      tasks: [
        "Extract data from the source system",
        "Transform data into the format of the new system",
        "Cleaning and validating the data",
        "Entering the data into the new system",
        "Testing the data integrity in the new system"
      ]
    }
  ];

  // Service Type Cards
  const serviceTypes = [
    {
      title: "Text Annotation",
      description: "Converting text into structured, machine-readable formats through recognition, transcription, and qualification.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8 text-primary">
          <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2" />
          <line x1="7" y1="8" x2="17" y2="8" stroke="currentColor" strokeWidth="2" />
          <line x1="7" y1="12" x2="17" y2="12" stroke="currentColor" strokeWidth="2" />
          <line x1="7" y1="16" x2="13" y2="16" stroke="currentColor" strokeWidth="2" />
        </svg>
      ),
      href: "#text",
    },
    {
      title: "Image Annotation",
      description: "Adding metadata to images through tagging, labeling, segmentation and object recognition.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8 text-primary">
          <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2" />
          <circle cx="8.5" cy="8.5" r="1.5" fill="currentColor" />
          <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" stroke="currentColor" strokeWidth="2" />
        </svg>
      ),
      href: "#image",
    },
    {
      title: "Video Annotation",
      description: "Enhancing video content with metadata through transcription and sequential labeling.",
      icon: (
        <svg viewBox="0 0 122.88 111.34" className="w-8 h-8 text-primary"> <title>video</title> <path fill="currentColor" d="M23.59,0h75.7a23.68,23.68,0,0,1,23.59,23.59V87.75A23.56,23.56,0,0,1,116,104.41l-.22.2a23.53,23.53,0,0,1-16.44,6.73H23.59a23.53,23.53,0,0,1-16.66-6.93l-.2-.22A23.46,23.46,0,0,1,0,87.75V23.59A23.66,23.66,0,0,1,23.59,0ZM54,47.73,79.25,65.36a3.79,3.79,0,0,1,.14,6.3L54.22,89.05a3.75,3.75,0,0,1-2.4.87A3.79,3.79,0,0,1,48,86.13V50.82h0A3.77,3.77,0,0,1,54,47.73ZM7.35,26.47h14L30.41,7.35H23.59A16.29,16.29,0,0,0,7.35,23.59v2.88ZM37.05,7.35,28,26.47H53.36L62.43,7.38v0Zm32,0L59.92,26.47h24.7L93.7,7.35Zm31.32,0L91.26,26.47h24.27V23.59a16.32,16.32,0,0,0-15.2-16.21Zm15.2,26.68H7.35V87.75A16.21,16.21,0,0,0,12,99.05l.17.16A16.19,16.19,0,0,0,23.59,104h75.7a16.21,16.21,0,0,0,11.3-4.6l.16-.18a16.17,16.17,0,0,0,4.78-11.46V34.06Z" /> </svg>
      ),
      href: "#video",
    },
    {
      title: "Audio Annotation",
      description: "Converting audio to text and analyzing tone through speech recognition and sentiment analysis.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8 text-primary">
          <path d="M12 2a3 3 0 0 0-3 3v6a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" stroke="currentColor" strokeWidth="2" />
          <path d="M19 10v1a7 7 0 0 1-14 0v-1" stroke="currentColor" strokeWidth="2" />
          <line x1="12" y1="19" x2="12" y2="22" stroke="currentColor" strokeWidth="2" />
          <line x1="8" y1="22" x2="16" y2="22" stroke="currentColor" strokeWidth="2" />
        </svg>
      ),
      href: "#audio",
    },
    {
      title: "Data Processing",
      description: "Transforming raw data into useful formats through entry, validation, cleansing, and migration.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8 text-primary">
          <rect x="8" y="2" width="8" height="4" rx="1" stroke="currentColor" strokeWidth="2" />
          <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" stroke="currentColor" strokeWidth="2" />
          <line x1="9" y1="12" x2="15" y2="12" stroke="currentColor" strokeWidth="2" />
          <line x1="9" y1="16" x2="15" y2="16" stroke="currentColor" strokeWidth="2" />
          <line x1="9" y1="8" x2="15" y2="8" stroke="currentColor" strokeWidth="2" />
        </svg>
      ),
      href: "#processing",
    }
  ];

  // Component for displaying services as cards on mobile
  const ServiceCards = ({ services, sectionTitle }) => (
    <div className="lg:hidden space-y-4">
      <h3 className="text-xl font-bold text-primary mb-4">{sectionTitle}</h3>
      {services.map((service, index) => (
        <div key={`mobile-${index}`} className="bg-white p-4 rounded-lg border shadow-sm">
          <h4 className="font-bold text-primary text-lg mb-2">{service.name}</h4>
          <p className="text-gray-600 text-sm mb-3 leading-relaxed">{service.description}</p>
          {/* <div className="mt-3 pt-3 border-t border-gray-200 space-y-2">
            <div className="flex justify-between items-start">
              <span className="font-medium text-sm text-gray-700">Price:</span>
              <span className="text-sm text-gray-600 text-right flex-1 ml-2">{service.price}</span>
            </div>
            <div className="flex justify-between items-start">
              <span className="font-medium text-sm text-gray-700">MOQ:</span>
              <span className="text-sm text-gray-600 text-right flex-1 ml-2">{service.moq}</span>
            </div>
          </div> */}
        </div>
      ))}
    </div>
  );

  // Component for displaying tables on desktop
  const ServiceTable = ({ services, headers }) => (
    <div className="hidden lg:block overflow-x-auto">
      <table className="w-full bg-white rounded-lg shadow-md">
        <thead className="bg-primary text-white">
          <tr>
            {headers.map((header, index) => (
              <th key={index} className="px-4 py-3 text-left text-sm font-medium">{header}</th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {services.map((service, index) => (
            <tr key={`desktop-${index}`} className="hover:bg-gray-50 transition-colors">
              <td className="px-4 py-3 font-medium text-primary text-sm">{service.name}</td>
              <td className="px-4 py-3 text-gray-600 text-sm">{service.description}</td>
              {/* <td className="px-4 py-3 text-gray-600 text-sm">{service.price}</td>
              <td className="px-4 py-3 text-gray-600 text-sm">{service.moq}</td> */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  const tableHeaders = ['SERVICE', 'DESCRIPTION'];
  /* , 'UNIT PRICE', 'MOQ' */

  return (
    <Layout
      Layout
      title="Data Annotation Services - Complete Price List & Service Guide 2024"
      description="Professional data annotation services with transparent pricing. Text annotation from $0.005/char, image annotation from $0.05/image, video transcription from $2/min. High-quality, scalable solutions for AI and ML projects."
      keywords="data annotation pricing, text annotation cost, image labeling price, video transcription rates, audio processing services, data entry prices, data validation cost, data cleaning services, machine learning annotation"
      image="https://labelladder.com/images/og/services-og.jpg"
      structuredData={structuredData}
    >
      {/* Hero Section */}
      <section className="relative py-20 bg-primary text-white" id='services'>
        <Container>
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              General Data Annotation Services
            </h1>
            <p className="text-xl mb-8 text-accent">
              Enterprise-scale data annotation powered by our 1,000-strong team in Namibia. 
              Cost-effective, high-quality annotation for all data types.
              High-quality data annotation and processing services to transform your raw data into valuable assets.
            </p>
          </div>
        </Container>
      </section>      

      {/* Services Overview */}
      <section className="py-16">
        <Container>
          <SectionHeading
            title="Data Annotation & Processing Services"
            subtitle="We provide a comprehensive range of data services to meet your specific needs."
            centered
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {serviceTypes.map((service, index) => (
              <Card
                key={index}
                title={service.title}
                description={service.description}
                icon={service.icon}
                href={service.href}
                variant="feature"
              />
            ))}
          </div>
        </Container>
      </section>

      {/* Text Annotation Section */}
      <section id="annotation" className="relative py-16 bg-cover bg-center bg-no-repeat overflow-hidden" style={{ backgroundImage: "url('/images/services/text.png')" }}>
        {/* Background overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/100 to-white/80"></div>

        <Container>
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left side - Content */}
            <div>
              <div className="mb-8">
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Text Annotation Services</h2>
                <p className="text-lg text-gray-600">Converting printed or spoken language into structured, machine-readable formats.</p>
              </div>

              {/* Mobile Cards */}
              <ServiceCards services={textServices} sectionTitle="" />

              {/* Desktop Table */}
              <ServiceTable services={textServices} headers={tableHeaders} />
            </div>

            {/* Right side - Background image space */}
            <div className="hidden lg:block">
              {/* This space is left for the background image */}
            </div>
          </div>
        </Container>
      </section>

      {/* Image Annotation Section */}
      <section id="image" className="relative py-16 bg-cover bg-center bg-no-repeat overflow-hidden" style={{ backgroundImage: "url('/images/services/image.png')" }}>
        {/* Background overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/80 to-white/100"></div>

        <Container>
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Content side */}
            <div className="order-1 lg:order-2">
              <div className="mb-8">
                <SectionHeading
                  title="Image Annotation Services"
                  subtitle="Adding metadata to images to make them recognizable and processable by machine learning systems."
                />
              </div>

              {/* Mobile Cards */}
              <ServiceCards services={imageServices} sectionTitle="" />

              {/* Desktop Table */}
              <div className="hidden lg:block overflow-x-auto">
                <table className="w-full bg-white rounded-lg shadow-md">
                  <thead className="bg-primary text-white">
                    <tr>
                      <th className="px-6 py-4 text-left">Service</th>
                      <th className="px-6 py-4 text-left">Description</th>
                      {/* <th className="px-6 py-4 text-left">Price Range</th>
                      <th className="px-6 py-4 text-left">Min. Order Quantity</th> */}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {imageServices.map((service, index) => (
                      <tr key={`image-${index}`} className="hover:bg-gray-50 transition-colors">
                        <td className="px-6 py-4 font-medium text-primary">{service.name}</td>
                        <td className="px-6 py-4 text-gray-600">{service.description}</td>
                        {/* <td className="px-6 py-4 text-gray-600">{service.price}</td>
                        <td className="px-6 py-4 text-gray-600">{service.moq}</td> */}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Background image space */}
            <div className="hidden lg:block order-2 lg:order-1">
              {/* This space is left for the background image */}
            </div>
          </div>
        </Container>
      </section>

      {/* Video Annotation Section */}
      <section id="video" className="relative py-16 bg-cover bg-center bg-no-repeat overflow-hidden" style={{ backgroundImage: "url('/images/services/video.png')" }}>
        {/* Background overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/100 to-white/80"></div>

        <Container>
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Content side */}
            <div>
              <div className="mb-8">
                <SectionHeading
                  title="Video Annotation Services"
                  subtitle="Enhancing video content with metadata for better analysis and understanding."
                />
              </div>

              {/* Mobile Cards */}
              <ServiceCards services={videoServices} sectionTitle="" />

              {/* Desktop Table */}
              <div className="hidden lg:block overflow-x-auto">
                <table className="w-full bg-white rounded-lg shadow-md">
                  <thead className="bg-primary text-white">
                    <tr>
                      <th className="px-6 py-4 text-left">Service</th>
                      <th className="px-6 py-4 text-left">Description</th>
                      {/* <th className="px-6 py-4 text-left">Price Range</th>
                      <th className="px-6 py-4 text-left">Min. Order Quantity</th> */}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {videoServices.map((service, index) => (
                      <tr key={`video-${index}`} className="hover:bg-gray-50 transition-colors">
                        <td className="px-6 py-4 font-medium text-primary">{service.name}</td>
                        <td className="px-6 py-4 text-gray-600">{service.description}</td>
                        {/* <td className="px-6 py-4 text-gray-600">{service.price}</td>
                        <td className="px-6 py-4 text-gray-600">{service.moq}</td> */}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Background image space */}
            <div className="hidden lg:block">
              {/* This space is left for the background image */}
            </div>
          </div>
        </Container>
      </section>

      {/* Audio Annotation Section */}
      <section id="audio" className="relative py-16 bg-cover bg-center bg-no-repeat overflow-hidden" style={{ backgroundImage: "url('/images/services/audio.png')" }}>
        {/* Background overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/80 to-white/100"></div>

        <Container>
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Content side */}
            <div className="order-1 lg:order-2">
              <div className="mb-8">
                <SectionHeading
                  title="Audio Annotation Services"
                  subtitle="Converting audio content to structured formats and analyzing tone for better insights."
                />
              </div>

              {/* Mobile Cards */}
              <ServiceCards services={audioServices} sectionTitle="" />

              {/* Desktop Table */}
              <div className="hidden lg:block overflow-x-auto">
                <table className="w-full bg-white rounded-lg shadow-md">
                  <thead className="bg-primary text-white">
                    <tr>
                      <th className="px-6 py-4 text-left">Service</th>
                      <th className="px-6 py-4 text-left">Description</th>
                      {/* <th className="px-6 py-4 text-left">Price Range</th>
                      <th className="px-6 py-4 text-left">Min. Order Quantity</th> */}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {audioServices.map((service, index) => (
                      <tr key={`audio-${index}`} className="hover:bg-gray-50 transition-colors">
                        <td className="px-6 py-4 font-medium text-primary">{service.name}</td>
                        <td className="px-6 py-4 text-gray-600">{service.description}</td>
                        {/* <td className="px-6 py-4 text-gray-600">{service.price}</td>
                        <td className="px-6 py-4 text-gray-600">{service.moq}</td> */}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Background image space */}
            <div className="hidden lg:block order-2 lg:order-1">
              {/* This space is left for the background image */}
            </div>
          </div>
        </Container>
      </section>

      {/* Data Processing Section */}
      <section id="processing" className="relative py-16 bg-cover bg-center bg-no-repeat overflow-hidden" style={{ backgroundImage: "url('/images/services/entry.png')" }}>
        {/* Background overlay */}
        <div className="absolute inset-0 bg-white/80"></div>

        <Container>
          <div className="relative z-10">
            <SectionHeading
              title="Data Processing Services"
              subtitle="Transforming raw data into clean, structured, and usable formats for better decision-making."
              centered
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
              {dataProcessingServices.map((service, index) => (
                <div key={`processing-${index}`} className="bg-white p-8 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold text-primary mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>

                  <h4 className="font-semibold text-secondary mb-2">
                    {service.subtitle}
                  </h4>
                  <ul className="space-y-2 text-gray-600">
                    {service.tasks.map((task, i) => (
                      <li key={`task-${index}-${i}`} className="flex items-start">
                        <div className="flex-shrink-0 w-8 h-8 bg-secondary text-white rounded-full flex items-center justify-center font-bold text-sm mr-4">
                          {i + 1}
                        </div>
                        <span className="text-gray-600">{task}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Custom Solutions */}
      <section className="py-16">
        <Container>
          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <SectionHeading
                  title="Custom Solutions"
                  subtitle="Don't see exactly what you need? We can help."
                />
                <p className="text-gray-600 mb-6">
                  Every business has unique data challenges. Our team can work with you to develop custom data annotation and processing solutions tailored to your specific requirements.
                </p>
                <p className="text-gray-600 mb-8">
                  Whether you need a combination of services, specialized domain expertise, or a completely unique workflow, we can design a solution that meets your needs.
                </p>
                <Button href="/contact/" variant="primary" size="lg">
                  Request Custom Quote
                </Button>
              </div>
              <div className="relative h-full rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/images/services/сustom-solutions.png"
                  alt="Custom Data Solutions"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to transform your data?
            </h2>
            <p className="text-xl mb-8 text-accent">
              Contact us today to discuss your data annotation and processing needs and get a customized quote.
            </p>
            <Button href="/contact/" variant="white" size="lg">
              Start Your Project
            </Button>
          </div>
        </Container>
      </section>
    </Layout>
  );
}
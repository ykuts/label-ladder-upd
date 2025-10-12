import { useEffect } from 'react';
import Layout from '../components/layout/Layout';
import Container from '../components/ui/Container';
import SectionHeading from '../components/ui/SectionHeading';
import Button from '../components/ui/Button';
import { trackServiceInquiry } from '../lib/gtag';

export default function Services() {
  useEffect(() => {
    trackServiceInquiry('services_page_view');
  }, []);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Data Annotation Services",
    "description": "Complete data annotation services from large-scale general projects to specialized medical expertise",
    "provider": {
      "@type": "Organization",
      "name": "Label Ladder"
    },
    "serviceType": "Data Processing Services",
    "areaServed": "Global"
  };

  return (
    <Layout
      title="Data Annotation Services - General & Expert Solutions"
      description="Complete data annotation services: General large-scale projects with 1,000-strong team and expert medical specialization. Swiss precision meets Namibian talent."
      keywords="data annotation services, general data labeling, medical data annotation, large scale annotation, expert annotation services, Swiss Namibian partnership"
      image="https://labelladder.com/images/og/services-og.jpg"
      structuredData={structuredData}
    >
      {/* Hero Section */}
      <section className="relative py-20 bg-primary text-white">
        <Container>
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our Services
            </h1>
            <p className="text-xl mb-8 text-accent">
              From large-scale general annotation to specialized medical expertise - 
              we deliver the complete spectrum of data annotation services.
            </p>
          </div>
        </Container>
      </section>

      {/* General Services Section */}
      <section id="general" className="py-16 bg-gray-50">
        <Container>
          <SectionHeading
            title="General Data Annotation Services"
            subtitle="High-volume, cost-effective annotation services powered by our 1,000-strong team in Namibia."
            centered
          />

          <div className="bg-white rounded-xl p-8 shadow-md mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-8">
              <div>
                <h3 className="text-2xl font-bold text-primary mb-4">Built for Scale</h3>
                <p className="text-gray-600 mb-4">
                  Our core strength lies in handling large-volume annotation projects efficiently and cost-effectively.
                  With 1,000 trained annotators in Namibia, we can scale to meet enterprise demands while maintaining
                  Swiss quality standards.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-primary/5 rounded-lg">
                    <div className="text-2xl font-bold text-primary">1M+</div>
                    <div className="text-sm text-gray-600">Items processed monthly</div>
                  </div>
                  <div className="text-center p-4 bg-primary/5 rounded-lg">
                    <div className="text-2xl font-bold text-primary">48h</div>
                    <div className="text-sm text-gray-600">Average turnaround</div>
                  </div>
                </div>
              </div>

              <div className="bg-primary/5 p-6 rounded-xl">
                <h4 className="font-bold text-primary mb-4">Why Our General Services Excel:</h4>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <div className="w-2 h-2 rounded-full bg-secondary mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-sm">Native English speakers for linguistic accuracy</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 rounded-full bg-secondary mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-sm">Swiss quality management and oversight</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 rounded-full bg-secondary mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-sm">Scalable workforce for urgent deadlines</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 rounded-full bg-secondary mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-sm">Competitive pricing through local talent</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Expert Services Section */}
      <section id="expert" className="py-16 bg-white">
        <Container>
          <SectionHeading
            title="Expert & Specialist Annotation Services"
            subtitle="Specialized teams with deep domain knowledge for complex annotation challenges."
            centered
          />

          {/* Medical & Healthcare Focus */}
          <div className="bg-gradient-to-br from-secondary/10 to-primary/10 rounded-xl p-8 mb-8">
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary mb-4">
                <svg viewBox="0 0 24 24" fill="none" className="w-12 h-12 text-white">
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3 className="text-3xl font-bold text-primary mb-2">Medical & Healthcare</h3>
              <p className="text-lg text-gray-600">Our primary area of specialization</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <h4 className="font-bold text-primary mb-3">Radiology & Medical Imaging</h4>
                <p className="text-gray-600 text-sm mb-4">Expert annotation of X-rays, MRIs, CT scans with clinical accuracy</p>
                <ul className="text-xs text-gray-500 space-y-1">
                  <li>• DICOM format support</li>
                  <li>• Clinical validation</li>
                  <li>• Radiologist oversight</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <h4 className="font-bold text-primary mb-3">Pathology & Lab Data</h4>
                <p className="text-gray-600 text-sm mb-4">Precise annotation of histopathology images and diagnostic data</p>
                <ul className="text-xs text-gray-500 space-y-1">
                  <li>• Cellular identification</li>
                  <li>• Tissue classification</li>
                  <li>• Diagnostic labeling</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <h4 className="font-bold text-primary mb-3">Clinical Documentation</h4>
                <p className="text-gray-600 text-sm mb-4">Structured annotation of medical records and clinical notes</p>
                <ul className="text-xs text-gray-500 space-y-1">
                  <li>• HIPAA compliance</li>
                  <li>• Medical terminology</li>
                  <li>• Data standardization</li>
                </ul>
              </div>
            </div>

            <div className="mt-8 text-center">
              <Button href="/contact/" variant="primary" size="lg">
                Discuss Medical Annotation Needs
              </Button>
            </div>
          </div>

          {/* Future Specializations */}
          {/* <div className="bg-gray-50 rounded-xl p-6">
            <h4 className="text-xl font-bold text-primary text-center mb-4">Developing Specializations</h4>
            <div className="flex flex-wrap justify-center gap-4">
              <span className="bg-white px-4 py-2 rounded-lg text-sm border border-gray-200">
                <span className="font-medium text-primary">Agriculture & Environmental</span>
                <span className="text-xs text-gray-500 ml-2">• Crop monitoring • Satellite imagery</span>
              </span>
              <span className="bg-white px-4 py-2 rounded-lg text-sm border border-gray-200">
                <span className="font-medium text-primary">Geospatial Analysis</span>
                <span className="text-xs text-gray-500 ml-2">• GIS data • Mapping</span>
              </span>
            </div>
          </div> */}
        </Container>
      </section>

      {/* Services Overview - Two Main Categories */}
      <section className="py-16">
        <Container>
          <SectionHeading
            title="Choose Your Service Level"
            subtitle="Whether you need volume or expertise, we have the right solution for your project."
            centered
          />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12">
            {/* General Data Annotation */}
            <div className="bg-gradient-to-br from-primary to-primary/90 text-white rounded-xl p-8 hover:shadow-xl transition-all duration-300">
              <div className="text-center mb-6">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-white/20 mb-6">
                  <svg viewBox="0 0 24 24" fill="none" className="w-12 h-12 text-white">
                    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                </div>
                <h3 className="text-3xl font-bold mb-3 text-white">General Data Annotation</h3>
                <p className="text-accent text-lg mb-6">For Large-Scale Projects</p>
              </div>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <div className="w-3 h-3 rounded-full bg-secondary mt-2 mr-4 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Enterprise Volume Capacity</h4>
                    <p className="text-accent text-sm">1,000+ trained annotators ready to scale</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-3 h-3 rounded-full bg-secondary mt-2 mr-4 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Full Data Types Coverage</h4>
                    <p className="text-accent text-sm">Text, Image, Video, Audio annotation</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-3 h-3 rounded-full bg-secondary mt-2 mr-4 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Native English Speakers</h4>
                    <p className="text-accent text-sm">Linguistic accuracy for global projects</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-3 h-3 rounded-full bg-secondary mt-2 mr-4 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Cost-Effective Pricing</h4>
                    <p className="text-accent text-sm">Competitive rates through local talent</p>
                  </div>
                </div>
              </div>
              
              <Button href="/general-services/" variant="white" size="lg" className="w-full mb-4">
                View General Services Details
              </Button>
              <Button href="/contact/" variant="outline" className="w-full text-white border-white hover:bg-white/10" size="md">
                Get Quote for General Project
              </Button>
            </div>

            {/* Expert & Specialist Annotation */}
            <div className="bg-gradient-to-br from-secondary to-secondary/90 text-white rounded-xl p-8 hover:shadow-xl transition-all duration-300">
              <div className="text-center mb-6">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-white/20 mb-6">
                  <svg viewBox="0 0 24 24" fill="none" className="w-12 h-12 text-white">
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="text-3xl font-bold mb-3">Expert & Specialist Annotation</h3>
                <p className="text-white/90 text-lg mb-6">For Medical & Complex Domains</p>
              </div>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <div className="w-3 h-3 rounded-full bg-white mt-2 mr-4 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Medical Specialization</h4>
                    <p className="text-white/80 text-sm">Radiology, Pathology, Clinical data</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-3 h-3 rounded-full bg-white mt-2 mr-4 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Expert-Led Teams</h4>
                    <p className="text-white/80 text-sm">Domain knowledge and clinical oversight</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-3 h-3 rounded-full bg-white mt-2 mr-4 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Compliance & Accuracy</h4>
                    <p className="text-white/80 text-sm">HIPAA compliance and clinical validation</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-3 h-3 rounded-full bg-white mt-2 mr-4 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Swiss Quality Standards</h4>
                    <p className="text-white/80 text-sm">Zero tolerance for errors in critical data</p>
                  </div>
                </div>
              </div>
              
              <Button href="/expert-services/" variant="white" size="lg" className="w-full mb-4">
                View Expert Services Details
              </Button>
              <Button href="/contact/" variant="outline" className="w-full text-white border-white hover:bg-white/10" size="md">
                Discuss Medical Project
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              Not Sure Which Service You Need?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Our team can help you determine the right approach for your project. 
              Whether it&lsquo;s volume or expertise you need, we&lsquo;ll guide you to the best solution.
            </p>
            <Button href="/contact/" variant="primary" size="lg">
              Get Consultation
            </Button>
          </div>
        </Container>
      </section>
    </Layout>
  );
}
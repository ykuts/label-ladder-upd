import { useEffect } from 'react';
import Layout from '../components/layout/Layout';
import Container from '../components/ui/Container';
import SectionHeading from '../components/ui/SectionHeading';
import Button from '../components/ui/Button';
import Image from 'next/image';
import { trackServiceInquiry } from '../lib/gtag';

export default function Medical() {
  useEffect(() => {
    trackServiceInquiry('medical_page_view');
  }, []);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "MedicalService",
    "name": "Medical Data Annotation Services",
    "description": "Expert medical data annotation services for healthcare AI applications including radiology, pathology, and clinical documentation",
    "provider": {
      "@type": "Organization",
      "name": "Label Ladder"
    },
    "areaServed": "Global",
    "serviceType": "Medical Data Processing Services"
  };

  const medicalServices = [
    {
      title: "Radiology & Medical Imaging",
      description: "Expert annotation of medical images with clinical accuracy and radiologist oversight.",
      image: "/images/medical/radiology.jpg",
      capabilities: [
        "X-ray image annotation and pathology identification",
        "MRI scan segmentation and anatomical labeling", 
        "CT scan analysis and organ identification",
        "DICOM format processing and metadata extraction",
        "Multi-planar reconstruction annotation",
        "3D volume rendering and measurement"
      ],
      compliance: ["DICOM standards", "HIPAA compliance", "Clinical validation"],
      useCases: [
        "AI diagnostic tools development",
        "Computer-aided detection systems",
        "Medical imaging research datasets",
        "Radiologist training platforms"
      ]
    },
    {
      title: "Pathology & Laboratory Data",
      description: "Precise annotation of histopathology images and laboratory diagnostics with cellular-level accuracy.",
      image: "/images/medical/pathology.jpg", 
      capabilities: [
        "Histopathology slide annotation and cell identification",
        "Cancer detection and tumor classification",
        "Tissue type identification and grading",
        "Microscopy image segmentation",
        "Laboratory result interpretation and coding",
        "Biomarker identification and quantification"
      ],
      compliance: ["Lab quality standards", "Medical terminology", "Diagnostic accuracy"],
      useCases: [
        "Cancer detection algorithms",
        "Pathology education tools",
        "Drug discovery research",
        "Digital pathology platforms"
      ]
    },
    {
      title: "Clinical Documentation & EHR",
      description: "Structured annotation of medical records, clinical notes, and patient data with medical expertise.",
      image: "/images/medical/clinical.jpg",
      capabilities: [
        "Electronic Health Record (EHR) data extraction",
        "Clinical note annotation and ICD coding", 
        "Medical terminology standardization",
        "Patient journey mapping and timeline creation",
        "Medication and dosage information extraction",
        "Symptom and diagnosis correlation analysis"
      ],
      compliance: ["HIPAA compliance", "Medical coding standards", "Data de-identification"],
      useCases: [
        "Clinical decision support systems",
        "Population health analytics",
        "Medical research databases",
        "Healthcare quality metrics"
      ]
    }
  ];

  const whyChooseMedical = [
    {
      title: "Clinical Expertise",
      description: "Our Namibian team includes healthcare professionals with medical background and specialized training.",
      icon: "👨‍⚕️"
    },
    {
      title: "Regulatory Compliance", 
      description: "Full compliance with HIPAA, GDPR, and international medical data handling standards.",
      icon: "🛡️"
    },
    {
      title: "Quality Assurance",
      description: "Multi-layer validation including clinical oversight and expert review processes.",
      icon: "✅"
    },
    {
      title: "Swiss Precision",
      description: "Swiss quality management standards applied to medical data with zero-tolerance for errors.",
      icon: "🇨🇭"
    }
  ];

  return (
    <Layout
      title="Medical Data Annotation Services - Healthcare AI Solutions"
      description="Expert medical data annotation for healthcare AI. Radiology, pathology, clinical documentation with HIPAA compliance and clinical accuracy. Specialized teams in Namibia with medical expertise."
      keywords="medical data annotation, healthcare AI, radiology annotation, pathology labeling, clinical data processing, HIPAA compliant, medical imaging annotation, electronic health records"
      image="https://labelladder.com/images/og/medical-og.jpg"
      structuredData={structuredData}
    >
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary to-secondary text-white">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-white/20 mb-6">
              <svg viewBox="0 0 24 24" fill="none" className="w-12 h-12 text-white">
                <path d="M22 12h-4l-3 9L9 3l-3 9H2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Medical Data Annotation Services
            </h1>
            <p className="text-xl mb-8 text-white/90 max-w-3xl mx-auto">
              Expert annotation of medical data with clinical accuracy. Our specialized Namibian teams 
              combine medical expertise with Swiss precision for healthcare AI applications.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button href="#services" variant="white" size="lg">
                View Medical Services
              </Button>
              <Button href="/contact" variant="outline" className="text-white border-white hover:bg-white/10" size="lg">
                Discuss Your Project
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Why Choose Our Medical Services */}
      <section className="py-16 bg-gray-50">
        <Container>
          <SectionHeading
            title="Why Choose Our Medical Annotation Services"
            subtitle="Combining medical expertise with world-class data processing capabilities"
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {whyChooseMedical.map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md text-center hover:shadow-lg transition-all duration-300">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-lg font-bold text-primary mb-3">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Medical Services Detailed */}
      <section id="services" className="py-16">
        <Container>
          <SectionHeading
            title="Our Medical Annotation Capabilities"
            subtitle="Comprehensive healthcare data annotation services with clinical expertise"
            centered
          />
          
          {medicalServices.map((service, index) => (
            <div key={index} className={`mb-16 ${index % 2 === 0 ? '' : ''}`}>
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                  {/* Content */}
                  <div className={`p-8 lg:p-12 ${index % 2 === 0 ? 'order-1' : 'order-2'}`}>
                    <h3 className="text-2xl md:text-3xl font-bold text-primary mb-4">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-6 text-lg">
                      {service.description}
                    </p>
                    
                    {/* Capabilities */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-primary mb-3">Key Capabilities:</h4>
                      <ul className="space-y-2">
                        {service.capabilities.slice(0, 4).map((capability, i) => (
                          <li key={i} className="flex items-start">
                            <div className="w-2 h-2 rounded-full bg-secondary mt-2 mr-3 flex-shrink-0"></div>
                            <span className="text-gray-600 text-sm">{capability}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    {/* Compliance badges */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {service.compliance.map((item, i) => (
                        <span key={i} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium">
                          {item}
                        </span>
                      ))}
                    </div>
                    
                    <Button href="/contact" variant="primary" size="md">
                      Get Started
                    </Button>
                  </div>
                  
                  {/* Image placeholder */}
                  <div className={`bg-gradient-to-br from-primary/5 to-secondary/5 flex items-center justify-center p-12 ${index % 2 === 0 ? 'order-2' : 'order-1'}`}>
                    <div className="text-center">
                      <div className="w-32 h-32 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg viewBox="0 0 24 24" fill="none" className="w-16 h-16 text-primary">
                          <path d="M22 12h-4l-3 9L9 3l-3 9H2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      <h4 className="text-lg font-semibold text-primary">{service.title}</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Advance Your Healthcare AI?
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Partner with us for medical data annotation that meets the highest standards of accuracy, 
              compliance, and clinical expertise.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button href="/contact" variant="white" size="lg">
                Start Your Medical Project
              </Button>
              <Button href="/services" variant="outline" className="text-white border-white hover:bg-white/10" size="lg">
                View All Services
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </Layout>
  );
}
import Container from '../ui/Container';
import SectionHeading from '../ui/SectionHeading';
import Button from '../ui/Button';
import Image from 'next/image';

const ExpertAnnotationSection = () => {
  const medicalServices = [
    {
      title: "Radiology & Medical Imaging",
      description: "Expert annotation of X-rays, MRIs, CT scans, and other medical images with clinical accuracy",
      features: ["DICOM format support", "Clinical validation", "Radiologist oversight"],
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8 text-white">
          <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2"/>
          <path d="M12 1v6m0 6v6m11-7h-6m-6 0H1" stroke="currentColor" strokeWidth="2"/>
        </svg>
      )
    },
    {
      title: "Pathology & Lab Data",
      description: "Precise annotation of histopathology images, lab results, and diagnostic data",
      features: ["Cellular identification", "Tissue classification", "Diagnostic labeling"],
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8 text-white">
          <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" stroke="currentColor" strokeWidth="2"/>
        </svg>
      )
    },
    {
      title: "Clinical Documentation",
      description: "Structured annotation of medical records, patient data, and clinical notes",
      features: ["HIPAA compliance", "Medical terminology", "Data standardization"],
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8 text-white">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" stroke="currentColor" strokeWidth="2"/>
          <polyline points="14,2 14,8 20,8" stroke="currentColor" strokeWidth="2"/>
          <line x1="16" y1="13" x2="8" y2="13" stroke="currentColor" strokeWidth="2"/>
          <line x1="16" y1="17" x2="8" y2="17" stroke="currentColor" strokeWidth="2"/>
          <polyline points="10,9 9,9 8,9" stroke="currentColor" strokeWidth="2"/>
        </svg>
      )
    }
  ];

  const futureSpecializations = [
    {
      name: "Agriculture & Environmental",
      status: "Developing",
      description: "Crop monitoring, satellite imagery analysis"
    },
    {
      name: "Geospatial Analysis", 
      status: "Developing",
      description: "Geographic information systems and mapping data"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <Container>
        <SectionHeading
          title="Expert-Led Annotation for Complex Domains"
          subtitle="On top of our robust foundation, we build dedicated teams of Namibian experts for projects requiring deep domain knowledge."
          centered
        />

        {/* Medical & Healthcare - Primary Focus */}
        <div className="mt-12 mb-16">
          <div className="bg-secondary rounded-xl p-8 text-white mb-8">
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/20 mb-4">
                <svg viewBox="0 0 24 24" fill="none" className="w-10 h-10 text-white">
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-2">Medical & Healthcare Annotation</h3>
              <p className="text-white text-lg">Our primary area of expertise with specialized training and clinical oversight</p>
            </div>
          </div>

          {/* Medical Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {medicalServices.map((service, index) => (
              <div key={index} className="bg-white border-2 border-primary/10 rounded-lg p-6 hover:border-primary/30 hover:shadow-lg transition-all duration-300">
                {/* Icon */}
                <div className="mb-4 flex justify-center">
                  <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center">
                    {service.icon}
                  </div>
                </div>
                
                <h4 className="text-xl font-bold text-primary mb-3 text-center">{service.title}</h4>
                <p className="text-gray-600 text-center mb-4 text-sm">
                  {service.description}
                </p>
                
                {/* Features */}
                <div className="border-t border-gray-100 pt-4">
                  <ul className="space-y-1">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-sm text-gray-600">
                        <div className="w-4 h-4 rounded-full bg-secondary/20 flex items-center justify-center mr-2 flex-shrink-0">
                          <div className="w-1.5 h-1.5 rounded-full bg-secondary"></div>
                        </div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>        

        {/* CTA */}
        <div className="mt-12 text-center">
          <Button href="/contact" variant="primary" size="lg">
            Discuss Your Specialized Needs
          </Button>
        </div>
      </Container>
    </section>
  );
};

export default ExpertAnnotationSection;
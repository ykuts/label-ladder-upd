import Container from '../ui/Container';
import Button from '../ui/Button';
import SectionHeading from '../ui/SectionHeading';

const WhyChooseSection = () => {
  const features = [
    {
      title: "SCALE & CAPACITY",
      description: "Our 1,000-strong Swiss-Namibian team handles enterprise-volume projects with Swiss quality standards and native English proficiency.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8 text-white">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" stroke="currentColor" strokeWidth="2"/>
          <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="2"/>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" stroke="currentColor" strokeWidth="2"/>
          <path d="M16 3.13a4 4 0 0 1 0 7.75" stroke="currentColor" strokeWidth="2"/>
        </svg>
      )
    },
    {
      title: "MEDICAL EXPERTISE", 
      description: "Specialized teams for healthcare annotation including radiology, pathology, and clinical documentation with expert oversight.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8 text-white">
          <path d="M22 12h-4l-3 9L9 3l-3 9H2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      title: "SOCIAL IMPACT MISSION",
      description: "Training 1,000 Namibians by 2027 in digital skills, supported by Namibian government ministries for sustainable economic development.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8 text-white">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" stroke="currentColor" strokeWidth="2"/>
        </svg>
      )
    },
    {
      title: "SWISS-NAMIBIAN EXCELLENCE",
      description: "Combining Swiss precision in quality management with Namibian talent and agility for globally competitive solutions.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8 text-white">
          <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" stroke="currentColor" strokeWidth="2"/>
        </svg>
      )
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <Container>
        <SectionHeading
          title="Why Choose Label Ladder"
          subtitle="We combine scale with specialization - from high-volume general annotation to expert-led medical services."
          centered
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {features.map((feature, index) => (
            <div key={index} className="group">
              <div className="p-8 bg-gray-50 rounded-xl hover:shadow-xl border-l-4 border-primary hover:border-secondary transition-all duration-300">
                {/* Icon */}
                <div className="mb-4 flex justify-start">
                  <div className="w-14 h-14 rounded-full bg-primary group-hover:bg-secondary flex items-center justify-center transition-colors duration-300">
                    {feature.icon}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-primary mb-4 group-hover:text-secondary transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        {/* Call to Action */}
        <div className="mt-12 bg-primary rounded-xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">
            Ready to Experience the Full Spectrum?
          </h3>
          <p className="text-accent mb-6 max-w-2xl mx-auto">
            Whether you need large-scale general annotation or specialized expert-led annotation,
            we have the right solution for your project.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button href="/services#general" variant="white" size="md">
              General Annotation
            </Button>
            <Button href="/services#expert" variant="secondary" size="md">
              Expert-Led Annotation
            </Button>
            <Button href="/contact" variant="outline" className="text-white border-white hover:bg-white/10" size="md">
              Get Started
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default WhyChooseSection;
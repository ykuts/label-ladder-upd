import Container from '../ui/Container';
import Button from '../ui/Button';
import SectionHeading from '../ui/SectionHeading';

const AboutSection = () => {
  const features = [
    {
      title: "SCALE & CAPACITY",
      description: "Our 1,000-strong team in Namibia handles enterprise-volume projects with Swiss quality standards and native English proficiency."
    },
    {
      title: "MEDICAL EXPERTISE", 
      description: "Specialized teams for healthcare annotation including radiology, pathology, and clinical documentation with expert oversight."
    },
    {
      title: "SOCIAL IMPACT MISSION",
      description: "Training 1,000 Namibians by 2027 in digital skills, supported by Namibian government ministries for sustainable economic development."
    },
    {
      title: "SWISS-NAMIBIAN EXCELLENCE",
      description: "Combining Swiss precision in quality management with Namibian talent and agility for globally competitive solutions."
    }
  ];

  return (
    <section className="py-16 md:py-24">
      <Container>
        <SectionHeading
          title="Why Choose Label Ladder"
          subtitle="We are a Swiss-Namibian company combining scale with specialization - from high-volume general annotation to expert-led medical services."
          centered
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {features.map((feature, index) => (
            <div key={index} className="group">
              <div className="p-8 bg-white rounded-xl shadow-md hover:shadow-xl border-t-4 border-primary transition-all duration-300">
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
        <div className="mt-12 bg-gray-50 rounded-xl p-8 text-center">
          <h3 className="text-2xl font-bold text-primary mb-4">
            Ready to Experience the Full Spectrum?
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Whether you need large-scale general annotation or specialized medical expertise, 
            we have the right solution for your project.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button href="/services#general" variant="primary" size="md">
              General Annotation
            </Button>
            <Button href="/services#expert" variant="outline" size="md">
              Expert Services
            </Button>
            <Button href="/about" variant="secondary" size="md">
              Learn More About Us
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default AboutSection;
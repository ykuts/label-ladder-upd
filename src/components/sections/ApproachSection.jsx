import Container from '../ui/Container';
import Button from '../ui/Button';
import SectionHeading from '../ui/SectionHeading';

const ApproachSection = () => {
  const steps = [
    {
      number: 1,
      title: "NEEDS ASSESSMENT",
      description: "We start by understanding your data, models, and business goals. Our in-house data professionals work with your team to identify the real purpose of the dataset."
    },
    {
      number: 2,
      title: "CUSTOM ANNOTATION DESIGN",
      description: "We don't apply a one-size-fits-all approach. We design annotation workflows tailored to your use case and quality control protocols aligned with your accuracy targets."
    },
    {
      number: 3,
      title: "FUTURE-PROOFED DATA ARCHITECTURE",
      description: "We think ahead. Our approach ensures your labelled data integrates seamlessly into ML/AI pipelines and supports model retraining and versioning."
    },
    {
      number: 4,
      title: "HUMAN IN THE LOOP, ALWAYS",
      description: "Our workforce is trained beyond basic labelling – they are skilled in domain-specific annotation and continuously improving through feedback loops."
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <Container>
        <SectionHeading
          title="Our Approach"
          subtitle="We follow a thoughtful approach to designing a solution that fits your needs."
          centered
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
          {steps.map((step, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary text-white font-bold text-lg mr-4 flex-shrink-0">
                  {step.number}
                </div>
                <h3 className="text-xl font-bold text-primary">{step.title}</h3>
              </div>
              <p className="text-gray-600 ml-16">
                {step.description}
              </p>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button href="/approach/" variant="primary" size="lg">
            Learn More About Our Approach
          </Button>
        </div>
      </Container>
    </section>
  );
};

export default ApproachSection;
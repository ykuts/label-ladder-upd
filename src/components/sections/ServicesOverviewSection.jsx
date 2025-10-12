import Container from '../ui/Container';
import Button from '../ui/Button';
import SectionHeading from '../ui/SectionHeading';

const ServicesOverviewSection = () => {
  const annotationServices = [
    { title: 'Text', description: 'Character recognition, transcription, article qualification, content moderation' },
    { title: 'Image', description: 'Image annotation, labelling, shape recognition, image segmentation' },
    { title: 'Video', description: 'Transcription, sequencing' },
    { title: 'Audio', description: 'Speech-to-text, sentiment analysis' }
  ];

  const processingServices = [
    { title: 'Data Entry', description: 'Manual or automatic input, update, or maintenance of data in a digital format' },
    { title: 'Data Validation', description: 'Format checks, range checks, consistency checks, completeness checks' },
    { title: 'Data Cleansing', description: 'Removing duplicates, fixing typos, standardizing data, eliminating outliers' },
    { title: 'Data Migration', description: 'Extract, transform, clean, validate, and enter data into new systems' }
  ];

  return (
    <section className="py-16 md:py-24">
      <Container>
        <SectionHeading
          title="Data Annotation & Processing Services"
          subtitle="High-quality data annotation and processing services to transform your raw data into valuable assets."
          centered
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
            <h3 className="text-2xl font-bold text-primary mb-4">Data Annotation</h3>
            <div className="space-y-4">
              {annotationServices.map((service, index) => (
                <div key={index} className={index < annotationServices.length - 1 ? "border-b pb-4" : ""}>
                  <h4 className="text-lg font-semibold text-secondary mb-2">{service.title}</h4>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              ))}
            </div>
            <div className="mt-6">
              <Button href="/services#annotation" variant="outline" size="md" className="w-full sm:w-auto">
                View Annotation Services
              </Button>
            </div>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
            <h3 className="text-2xl font-bold text-primary mb-4">Data Processing</h3>
            <div className="space-y-4">
              {processingServices.map((service, index) => (
                <div key={index} className={index < processingServices.length - 1 ? "border-b pb-4" : ""}>
                  <h4 className="text-lg font-semibold text-secondary mb-2">{service.title}</h4>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              ))}
            </div>
            <div className="mt-6">
              <Button href="/services#processing" variant="outline" size="md" className="w-full sm:w-auto">
                View Processing Services
              </Button>
            </div>
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <Button href="/services/" variant="primary" size="lg">
            View All Services
          </Button>
        </div>
      </Container>
    </section>
  );
};

export default ServicesOverviewSection;
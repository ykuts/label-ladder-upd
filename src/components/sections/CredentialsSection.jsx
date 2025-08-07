import Container from '../ui/Container';
import Button from '../ui/Button';
import SectionHeading from '../ui/SectionHeading';
import Image from 'next/image';

const CredentialsSection = () => {
  const cases = [
    {
      company: "Adaire",
      project: "Project Management Data Migration",
      who: "Adaire is a software development company based in Namibia and serving clients across Germany and Switzerland.",
      what: "Adaire was transitioning to a new project management tool and required manual data migration services.",
      how: "Project data was downloaded from Azure DevOps, adjusted to the correct format, then manually imported into Jira.",
      logo: "/images/credentials/adaire.png",
      industry: "Software Development",
      duration: "2 weeks",
      dataVolume: "5,000+ records"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <Container>
        <SectionHeading
          title="Credentials"
          subtitle="See how we've helped other organizations solve their data challenges."
          centered
        />

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mt-12">
          {cases.map((caseStudy, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
              {/* Header with Logo and Company Info */}
              <div className="p-6 border-b border-gray-100">
                <div className="flex items-center mb-4">
                  <div className="h-12 w-12 relative mr-4 flex-shrink-0">
                    <Image 
                      src={caseStudy.logo} 
                      alt={`${caseStudy.company} Logo`} 
                      fill
                      className="object-contain rounded-lg"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-primary transition-colors">
                      {caseStudy.company}
                    </h3>
                    <p className="text-sm text-gray-500">{caseStudy.industry}</p>
                  </div>
                </div>
                <h4 className="font-semibold text-secondary mb-2">{caseStudy.project}</h4>
              </div>

              {/* Project Details */}
              <div className="p-6">
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="text-left">
                    <div className="text-lg font-bold text-primary">{caseStudy.duration}</div>
                    <div className="text-xs text-gray-500">Duration</div>
                  </div>
                  <div className="text-left">
                    <div className="text-lg font-bold text-primary">{caseStudy.dataVolume}</div>
                    <div className="text-xs text-gray-500">Data Volume</div>
                  </div>
                </div>
                
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {caseStudy.what}
                </p>
                
              </div>
            </div>
          ))}
        </div>
        
                
        <div className="mt-12 text-center">
          <Button href="/credentials" variant="primary" size="lg">
            View All Case Studies
          </Button>
        </div>
      </Container>
    </section>
  );
};

export default CredentialsSection;

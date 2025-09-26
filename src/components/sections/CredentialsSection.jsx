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
      dataVolume: "5,000+ records",
      challenge: "Transitioning to a new project management tool.",
      solution: "Delivered manual data migration with accuracy checks.",
      outcome: "Smooth adoption with zero data loss."
    },
    {
      company: "Digital Divine Data",
      project: "Autonomous Driving Annotation",
      who: "Digital Divine Data (DDD) is a specialized data annotation company focusing on AI training datasets.",
      what: "DDD collaborated with Label Ladder on the annotation of images for an autonomous driving project, requiring precise object detection and classification for vehicle AI systems.",
      how: "Our expert annotation team provided detailed labeling of road scenes, vehicles, pedestrians, and traffic infrastructure to support autonomous driving algorithm development.",
      logo: "/images/credentials/ddd.webp",
      industry: "Data Annotation",
      duration: "2 weeks",
      dataVolume: "200+ Records",
      challenge: "Needed to merge tools into one unified workflow.",
      solution: "Assisted with setup, integration, and testing.",
      outcome: "Faster onboarding and improved collaboration."
    },
    {
      company: "Ambulanzpartner",
      project: "Healthcare Data Processing",
      who: "Ambulanzpartner provides emergency medical services and healthcare solutions.",
      what: "Label Ladder assisted Ambulanzpartner in processing and annotating healthcare data to improve patient care.",
      how: "Our team ensured high-quality annotations and data processing to meet the specific needs of healthcare applications.",
      logo: "/images/credentials/ambulanzpartner.webp",
      industry: "Healthcare",
      duration: "2 weeks",
      dataVolume: "10,000+ records",
      challenge: "Large amounts of patient data with inconsistent records.",
      solution: "Cleaned, validated, and standardized datasets.",
      outcome: "Reliable reporting and better decision-making."
    },

    {
      company: "Impact Tank",
      project: "Data Pipeline Setup",
      who: "Impact Tank is a Namibian-Swiss impact venture builder focused on social impact through data-driven solutions and community development in Africa.",
      what: "Impact Tank required a robust data pipeline to support their wildlife conservation project, enabling efficient data collection, processing, and analysis for environmental impact monitoring.",
      how: "Label Ladder's team designed and implemented a comprehensive data pipeline architecture for wildlife conservation data, including automated data ingestion, processing workflows, and analytics capabilities.",
      logo: "/images/credentials/impact-tank-logo.png",
      industry: "Social Impact/Conservation",
      duration: "6 weeks",
      dataVolume: "Environmental monitoring data streams",
      challenge: "Need for scalable data infrastructure to support wildlife conservation efforts and impact measurement.",
      solution: "Implemented automated data pipeline with real-time processing and analytics capabilities.",
      outcome: "Enhanced conservation monitoring and data-driven decision making for community impact projects."
    } ,
    /* {
      company: "Nedbank",
      project: "Client Data Validation & Migration",
      who: "Nedbank is one of the four largest banks in southern Africa, serving 7 million retail and wholesale clients.",
      what: "A new version of their retail client banking & payment application was developed. All migrated client data had to be cleansed.",
      how: "Label Ladder's team was trained as subject matter experts and used TestFlight to test the mobile iOS application.",
      logo: "/images/credentials/nedbank-logo.jpg",
      industry: "Banking & Finance",
      duration: "6 weeks",
      dataVolume: "7M+ client records"
    } */
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
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {caseStudy.what}
                </p>
              </div>

              {/* Project Details */}
              <div className="p-6">
                <div className="grid grid-cols-2 gap-4 mb-4">
                  {/* <div className="text-left">
                    <div className="text-lg font-bold text-primary">{caseStudy.duration}</div>
                    <div className="text-xs text-gray-500">Duration</div>
                  </div> */}

                  <div className="text-left">
                    <div className="text-lg font-bold text-primary">Challenge</div>
                    <div className="text-xs text-gray-500">{caseStudy.challenge}</div>
                  </div>
                  <div className="text-left">
                    <div className="text-lg font-bold text-primary">Solution</div>
                    <div className="text-xs text-gray-500">{caseStudy.solution}</div>
                  </div>
                  {/* <div className="text-left">
                    <div className="text-lg font-bold text-primary">Outcome</div>
                    <div className="text-xs text-gray-500">{caseStudy.outcome}</div>
                  </div> */}
                </div>
                
                
                
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

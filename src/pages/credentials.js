import Layout from '@/components/layout/Layout';
import Container from '../components/ui/Container';
import SectionHeading from '../components/ui/SectionHeading';
import Button from '../components/ui/Button';
import Image from 'next/image';

export default function Cases() {
const structuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Label Ladder Case Studies and Credentials",
    "description": "Real client success stories and case studies from Label Ladder's data annotation and processing projects",
    "mainEntity": [
      {
        "@type": "Article",
        "headline": "Adaire Project Management Data Migration Case Study",
        "description": "How Label Ladder helped Adaire migrate project data from Azure DevOps to Jira",
        "author": {
          "@type": "Organization",
          "name": "Label Ladder"
        }
      }
      
    ]
  };

  // Case studies data
  const caseStudies = [
    {
      company: "Adaire",
      project: "Project Management Data Migration",
      description: "Manual data migration for a software development company transitioning to a new project management tool.",
      who: "Adaire is a software development company based in Namibia and serving clients across Germany and Switzerland. Their flagship outsourcing services are used by some of Europe's largest private and public organizations.",
      what: "Adaire was transitioning to a new project management tool and required manual data migration services to ensure accuracy and proper structuring within their new tool.",
      how: "Project data including owner, status, categories, label, and other fields task data was downloaded from Azure DevOps, adjusted to the correct format, then manually imported into Jira.",
      image: "/images/credentials/adaire.png",
      logo: "/images/credentials/adaire.png"
    },
    {
      company: "Digital Divine Data",
      project: "Autonomous Driving Annotation",
      description: "Annotation of images for an autonomous driving project.",
      who: "Digital Divine Data (DDD) is a specialized data annotation company focusing on AI training datasets.",
      what: "DDD collaborated with Label Ladder on the annotation of images for an autonomous driving project, requiring precise object detection and classification for vehicle AI systems.",
      how: "Our expert annotation team provided detailed labeling of road scenes, vehicles, pedestrians, and traffic infrastructure to support autonomous driving algorithm development.",
      image: "/images/credentials/ddd.webp",
      logo: "/images/credentials/ddd.webp"
    },
    {
      company: "Ambulanzpartner",
      project: "Healthcare Data Processing",
      description: "Data processing and annotation for healthcare applications.",
      who: "Ambulanzpartner provides emergency medical services and healthcare solutions.",
      what: "Label Ladder assisted Ambulanzpartner in processing and annotating healthcare data to improve patient care.",
      how: "Our team ensured high-quality annotations and data processing to meet the specific needs of healthcare applications.",
      image: "/images/credentials/ambulanzpartner.webp",
      logo: "/images/credentials/ambulanzpartner.webp"
    },

    {
      company: "Impact Tank",
      project: "Data Pipeline Setup",
      description: "Designed and implemented data pipeline for a wildlife conservation project.",
      who: "Impact Tank is a Namibian-Swiss impact venture builder focused on social impact through data-driven solutions and community development in Africa.",
      what: "Impact Tank required a robust data pipeline to support their wildlife conservation project, enabling efficient data collection, processing, and analysis for environmental impact monitoring.",
      how: "Label Ladder's team designed and implemented a comprehensive data pipeline architecture for wildlife conservation data, including automated data ingestion, processing workflows, and analytics capabilities.",
      image: "/images/credentials/impact-tank-logo.png",
      logo: "/images/credentials/impact-tank-logo.png"
    },
    /* {
      company: "Nedbank",
      project: "Client Data Validation & Migration",
      description: "Data cleansing and feature testing for one of southern Africa's largest banks' new retail client application.",
      who: "Nedbank is one of the four largest banks in southern Africa, serving 7 million retail and wholesale clients across Namibia alone through its banking services and digital platforms.",
      what: "A new version of their retail client banking & payment application was developed. All migrated client data had to be cleansed, and all features of the application tested to ensure readiness for launch.",
      how: "Label Ladder's team was trained as subject matter experts and used TestFlight to test the mobile iOS application. All bugs or issues were logged and corrected by the bank's development team. User data was verified and cleaned, and dormant accounts were either verified or deleted.",
      image: "/images/credentials/nedbank.jpg",
      logo: "/images/credentials/nedbank-logo.jpg"
    }, */
    /* {
      company: "Allyship",
      project: "Database Setup",
      description: "Establishing a scalable database schema for a Zürich-based web accessibility company.",
      who: "Allyship is a Zürich-based company tackling web accessibility issues, generating accessibility reports on websites, and helping them become more accessible.",
      what: "Label Ladder helped Allyship establish a database schema set it up with Postgres on Supabase. The already existing accessibility reports will then use real data from the new database in the backend.",
      how: "A clear understanding of Allyship's needs was crucial to build a scalable and durable database, to handle the large amounts of data required to identify accessibility issues and devise tailored solutions to remediate them, using AI.",
      image: "/images/cases/allyship.jpg",
      logo: "/images/cases/allyship-logo.png"
    } */
  ];

  // Testimonials data
  const testimonials = [
    {
      quote: "Label Ladder's team was able to quickly understand our requirements and deliver high-quality data migration services that helped us transition to a new project management system smoothly.",
      author: "Michael Weber",
      position: "CTO at Adaire",
      company: "Adaire"
    },
    /* {
      quote: "The quality and attention to detail in their data validation process exceeded our expectations. Their team's expertise was invaluable in ensuring our new banking application launched without issues.",
      author: "Sarah Ngombe",
      position: "Head of Digital Banking",
      company: "Nedbank Namibia"
    }, */
    /* {
      quote: "Working with Label Ladder helped us establish a robust database foundation for our accessibility tool. Their understanding of both technical requirements and the purpose of our data was impressive.",
      author: "Lisa Müller",
      position: "Founder",
      company: "Allyship"
    } */
  ];

  return (
    <Layout 
      title="Client Case Studies & Success Stories - Label Ladder Credentials"
      description="Explore Label Ladder's proven track record with real client case studies. See how we've helped Adaire, Nedbank, and other companies with data migration, validation, and processing projects achieving 98% accuracy."
      keywords="Label Ladder case studies, data annotation success stories, client testimonials, Adaire case study, Nedbank data migration, data processing results, client credentials, project portfolio"
      image="https://labelladder.com/images/og/credentials-og.jpg"
      structuredData={structuredData}
      >
      {/* Hero Section */}
      <section className="relative py-20 bg-primary text-white">
        <Container>
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our Case Studies
            </h1>
            <p className="text-xl mb-8 text-accent">
              See how we&apos;ve helped organizations transform their data and streamline their operations.
            </p>
          </div>
        </Container>
      </section>

      {/* Case Studies Overview */}
      <section className="py-16">
        <Container>
          <SectionHeading
            title="Success Stories"
            subtitle="Real results for real clients across industries and data needs."
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            {caseStudies.map((caseStudy, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg">
                <div className="relative h-48">
                  <Image 
                    src={caseStudy.image} 
                    alt={`${caseStudy.company} Case Study`} 
                    fill
                    className="object-contain"
                  />
                  <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/70 to-transparent">
                    <div className="flex items-center">
                      <div className="relative h-10 w-10 bg-white rounded-full overflow-hidden mr-3 flex-shrink-0">
                        <Image 
                          src={caseStudy.logo} 
                          alt={caseStudy.company} 
                          fill
                          className="object-contain p-1"
                        />
                      </div>
                      {/* <h3 className="text-lg font-bold text-white">{caseStudy.company}</h3> */}
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="text-primary font-semibold mb-3">{caseStudy.project}</h4>
                  <p className="text-gray-600 mb-4">{caseStudy.description}</p>
                  <a 
                    href={`#case-${index}`} 
                    className="text-secondary font-medium hover:underline inline-flex items-center"
                  >
                    View Case Study
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>
      
      {/* Detailed Case Studies */}
      {caseStudies.map((caseStudy, index) => (
        <section 
          key={index} 
          id={`case-${index}`} 
          className={`py-16 ${index % 2 === 0 ? 'bg-gray-50' : ''}`}
        >
          <Container>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className={index % 2 === 0 ? 'md:order-1' : 'md:order-2'}>
                <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
                  <Image 
                    src={caseStudy.image} 
                    alt={`${caseStudy.company} Case Study`} 
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              
              <div className={index % 2 === 0 ? 'md:order-2' : 'md:order-1'}>
                <div className="flex items-center mb-4">
                  <div className="relative h-12 w-12 bg-white rounded-full overflow-hidden border border-gray-200 mr-4 flex-shrink-0">
                    <Image 
                      src={caseStudy.logo} 
                      alt={caseStudy.company} 
                      fill
                      className="object-contain p-1"
                    />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-primary">{caseStudy.company}</h2>
                    <p className="text-secondary font-medium">{caseStudy.project}</p>
                  </div>
                </div>
                
                <div className="space-y-6 mt-6">
                  <div>
                    <h3 className="text-lg font-semibold text-primary mb-2">WHO</h3>
                    <p className="text-gray-600">{caseStudy.who}</p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-primary mb-2">WHAT</h3>
                    <p className="text-gray-600">{caseStudy.what}</p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-primary mb-2">HOW</h3>
                    <p className="text-gray-600">{caseStudy.how}</p>
                  </div>
                </div>
                
                <div className="mt-8">
                  <Button href="/contact" variant="outline">
                    Get Similar Results
                  </Button>
                </div>
              </div>
            </div>
          </Container>
        </section>
      ))}
      
      {/* Testimonials Section */}
      {/* <section className="py-16 bg-primary text-white">
        <Container>
          <SectionHeading
            title="Client Testimonials"
            subtitle="Don't just take our word for it - here's what our clients have to say."
            centered
            className="text-white"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                <svg className="h-8 w-8 text-accent mb-4" fill="currentColor" viewBox="0 0 32 32">
                  <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                </svg>
                
                <p className="text-accent mb-6">{testimonial.quote}</p>
                
                <div className="flex items-center">
                  <div className="mr-3">
                    <div className="h-10 w-10 rounded-full bg-secondary flex items-center justify-center text-white font-bold">
                      {testimonial.author.split(' ').map(name => name[0]).join('')}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">{testimonial.author}</h4>
                    <p className="text-accent text-sm">{testimonial.position}, {testimonial.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section> */}
      
      {/* Results & Metrics */}
      <section className="py-16">
        <Container>
          <SectionHeading
            title="Results That Matter"
            subtitle="Our data services deliver measurable business impact."
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="text-4xl font-bold text-primary mb-2">98%</div>
              <div className="text-xl font-semibold text-secondary mb-2">Data Accuracy</div>
              <p className="text-gray-600">Our quality control process ensures near-perfect data accuracy across all projects.</p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="text-4xl font-bold text-primary mb-2">45%</div>
              <div className="text-xl font-semibold text-secondary mb-2">Cost Reduction</div>
              <p className="text-gray-600">Clients typically see significant cost savings compared to in-house data operations.</p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="text-4xl font-bold text-primary mb-2">3x</div>
              <div className="text-xl font-semibold text-secondary mb-2">Faster Delivery</div>
              <p className="text-gray-600">Our specialized teams deliver results up to three times faster than traditional methods.</p>
            </div>
          </div>
        </Container>
      </section>
      
      {/* Industries Served */}
      <section className="py-16 bg-gray-50">
        <Container>
          <SectionHeading
            title="Industries We Serve"
            subtitle="We work across sectors to deliver data solutions tailored to specific industry needs."
            centered
          />
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mt-12">
            {['Finance', 'Healthcare', 'E-commerce', 'Software', 'Automotive', 'Manufacturing', 'Logistics', 'Insurance', 'Legal', 'Real Estate', 'Education', 'Energy'].map((industry, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-md text-center">
                <div className="h-20 flex items-center justify-center">
                  <span className="text-4xl text-primary">
                    {/* Placeholder for industry icons */}
                    {getIndustryIcon(industry)}
                  </span>
                </div>
                <h3 className="font-semibold text-xl lg:text-xl text-primary">{industry}</h3>
              </div>
            ))}
          </div>
        </Container>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to become our next success story?
            </h2>
            <p className="text-xl mb-8 text-accent">
              Contact us today to discuss how we can help transform your data challenges into business advantages.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button href="/contact" variant="white" size="lg">
                Contact Us
              </Button>
              <Button href="/services" variant="outline" className="text-white border-white hover:bg-white/10" size="lg">
                View Services
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </Layout>
  );
}

// Helper function to get industry icons
function getIndustryIcon(industry) {
  const industryIconMap = {
    'Finance': (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" className="w-12 h-12 text-primary" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z" /> </svg>

    ),
    'Healthcare': (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 text-primary">
<path d="M8.00006 16.1556C8.0567 17.1333 8.65299 19.2845 10.585 20.0667M11.5527 1.89444L5.91936 13.1613C3.65925 17.6816 6.94624 23 12 23C17.0538 23 20.3408 17.6815 18.0807 13.1613L12.4472 1.89443C12.2629 1.52591 11.737 1.52591 11.5527 1.89444Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
</svg>

    ),
    'E-commerce': (
      <svg viewBox="0 0 24 24" fill="none" className="w-12 h-12 text-primary">
        <circle cx="8" cy="21" r="1" stroke="currentColor" strokeWidth="2"/>
        <circle cx="19" cy="21" r="1" stroke="currentColor" strokeWidth="2"/>
        <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" stroke="currentColor" strokeWidth="2"/>
      </svg>
    ),
    'Software': (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-12 h-12 text-primary">
  <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25" />
</svg>

    ),
    'Automotive': (
      <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 512 512" 
    className="w-12 h-12 text-primary"
    fill="currentColor"
  >
    <path d="M135.2 117.4L109.1 192l293.8 0-26.1-74.6C372.3 104.6 360.2 96 346.6 96L165.4 96c-13.6 0-25.7 8.6-30.2 21.4zM39.6 196.8L74.8 96.3C88.3 57.8 124.6 32 165.4 32l181.2 0c40.8 0 77.1 25.8 90.6 64.3l35.2 100.5c23.2 9.6 39.6 32.5 39.6 59.2l0 144 0 48c0 17.7-14.3 32-32 32l-32 0c-17.7 0-32-14.3-32-32l0-48L96 400l0 48c0 17.7-14.3 32-32 32l-32 0c-17.7 0-32-14.3-32-32l0-48L0 256c0-26.7 16.4-49.6 39.6-59.2zM128 288a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm288 32a32 32 0 1 0 0-64 32 32 0 1 0 0 64z"/>
  </svg>
    ),
    'Manufacturing': (
      <svg 
        viewBox="0 0 490 490" 
        className="w-12 h-12 text-primary"
        fill="currentColor"
      >
        <g>
          <path d="M5.891,97.03h74.772c3.253,0,5.891-2.637,5.891-5.89V68.562c0-3.253-2.638-5.891-5.891-5.891H5.891C2.638,62.671,0,65.309,0,68.562v22.579C0,94.394,2.638,97.03,5.891,97.03z"/>
          <path d="M486.663,157.581c-2.081-1.36-4.708-1.578-6.986-0.578L358.099,210.39v-46.645c0-2.486-1.255-4.805-3.337-6.164c-2.082-1.36-4.709-1.578-6.986-0.578l-121.577,53.388v-46.646c0-2.486-1.256-4.805-3.337-6.164c-2.083-1.361-4.709-1.577-6.986-0.578L86.554,213.79v-90.01c0-3.252-2.638-5.89-5.891-5.89H5.891c-3.253,0-5.891,2.638-5.891,5.89v289.583c0,7.714,6.253,13.966,13.965,13.966h468.673c4.066,0,7.362-3.296,7.362-7.362V163.745C490,161.259,488.745,158.94,486.663,157.581z M176.466,338.115c0,3.811-3.09,6.901-6.902,6.901h-33.358c-3.812,0-6.901-3.091-6.901-6.901V282.9c0-3.812,3.09-6.901,6.901-6.901h33.358c3.813,0,6.902,3.09,6.902,6.901V338.115z M308.366,338.115c0,3.811-3.09,6.901-6.901,6.901h-33.358c-3.811,0-6.902-3.091-6.902-6.901V282.9c0-3.812,3.091-6.901,6.902-6.901h33.358c3.811,0,6.901,3.09,6.901,6.901V338.115z M440.268,338.115c0,3.811-3.089,6.901-6.9,6.901h-33.359c-3.811,0-6.901-3.091-6.901-6.901V282.9c0-3.812,3.091-6.901,6.901-6.901h33.359c3.811,0,6.9,3.09,6.9,6.901V338.115z"/>
        </g>
      </svg>
    ),
    'Logistics': (
      <svg 
    viewBox="0 0 612.001 612" 
    className="w-12 h-12 text-primary"
    fill="currentColor"
  >
    <g>
      <path d="M604.131,440.17h-19.12V333.237c0-12.512-3.776-24.787-10.78-35.173l-47.92-70.975
        c-11.725-17.311-31.238-27.698-52.169-27.698h-74.28c-8.734,0-15.737,7.082-15.737,15.738v225.043H262.475
        c11.567,9.992,19.514,23.92,21.796,39.658H412.53c4.563-31.238,31.475-55.396,63.972-55.396c32.498,0,59.33,24.158,63.895,55.396
        h63.735c4.328,0,7.869-3.541,7.869-7.869V448.04C612,443.713,608.46,440.17,604.131,440.17z M525.76,312.227h-98.044
        c-4.327,0-7.868-3.463-7.868-7.869v-54.372c0-4.328,3.541-7.869,7.868-7.869h59.724c2.597,0,4.957,1.259,6.452,3.305l38.32,54.451
        C535.831,305.067,532.133,312.227,525.76,312.227z M476.502,440.17c-27.068,0-48.943,21.953-48.943,49.021
        c0,26.99,21.875,48.943,48.943,48.943c26.989,0,48.943-21.953,48.943-48.943C525.445,462.125,503.491,440.17,476.502,440.17z
         M476.502,513.665c-13.535,0-24.472-11.016-24.472-24.471c0-13.535,10.937-24.473,24.472-24.473
        c13.533,0,24.472,10.938,24.472,24.473C500.974,502.649,490.036,513.665,476.502,513.665z M68.434,440.17
        c-4.328,0-7.869,3.543-7.869,7.869v23.922c0,4.328,3.541,7.869,7.869,7.869h87.971c2.282-15.738,10.229-29.666,21.718-39.658
        H68.434V440.17z M220.298,440.17c-26.989,0-48.943,21.953-48.943,49.021c0,26.99,21.954,48.943,48.943,48.943
        c27.068,0,48.943-21.953,48.943-48.943C269.242,462.125,247.367,440.17,220.298,440.17z M220.298,513.665
        c-13.534,0-24.471-11.016-24.471-24.471c0-13.535,10.937-24.473,24.471-24.473c13.534,0,24.472,10.938,24.472,24.473
        C244.77,502.649,233.832,513.665,220.298,513.665z M338.014,150.605h-91.198c4.485,13.298,6.846,27.54,6.846,42.255
        c0,74.28-60.431,134.711-134.711,134.711c-13.535,0-26.675-2.045-39.029-5.744v86.949c0,4.328,3.541,7.869,7.869,7.869h265.96
        c4.329,0,7.869-3.541,7.869-7.869V174.211C361.619,161.149,351.075,150.605,338.014,150.605z M118.969,73.866
        C53.264,73.866,0,127.129,0,192.834s53.264,118.969,118.969,118.969s118.97-53.264,118.97-118.969S184.674,73.866,118.969,73.866z
         M118.969,284.73c-50.752,0-91.896-41.143-91.896-91.896c0-50.753,41.144-91.896,91.896-91.896
        c50.753,0,91.896,41.144,91.896,91.896C210.865,243.587,169.722,284.73,118.969,284.73z M154.066,212.242
        c-1.014,0-2.052-0.131-3.082-0.407L112.641,201.5c-5.148-1.391-8.729-6.062-8.729-11.396v-59.015
        c0-6.516,5.287-11.803,11.803-11.803c6.516,0,11.803,5.287,11.803,11.803v49.971l29.614,7.983
        c6.294,1.698,10.02,8.177,8.322,14.469C164.033,208.776,159.269,212.242,154.066,212.242z"/>
    </g>
  </svg>
    ),
    'Insurance': (
      <svg 
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg" 
    className="w-12 h-12 text-primary"
  >
    <path 
      d="M11.9999 3C17.1853 3 21.4982 6.94668 21.9999 12C21.3942 11.8436 20.6267 11.8417 19.9013 11.9104C17.9748 12.0926 16.369 13.1073 16.1075 14.2782M11.9999 3C6.81459 3 2.55104 6.94668 2.04932 12M11.9999 3L11.9999 2M2.08044 12C2.68621 11.8436 3.45373 11.8417 4.17906 11.9104C6.10563 12.0926 7.71142 13.1073 7.97291 14.2782M7.99994 14C8.54905 12.8348 10.2583 12 11.9999 12M11.9999 12C13.7416 12 15.4508 12.8348 15.9999 14M11.9999 12L11.9999 19.5C11.9999 20.8807 10.8807 22 9.49994 22C8.11923 22 6.99994 20.8807 6.99994 19.5V19M12.1676 3C14.5452 5.62038 15.9999 9.13579 15.9999 13.0001M11.8322 3C9.45459 5.62037 7.99995 9.13572 7.99995 13" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
  </svg>
    ),
    'Legal': (
      <svg 
        viewBox="0 0 501 512.22" 
        className="w-12 h-12 text-primary"
        fill="currentColor"
      >
        <path d="M265.57 75.41v262.38h128.51c1.35 0 2.47 1.11 2.47 2.47v6.76h90.44c7.73 0 14.01 6.27 14.01 14.01 0 2.98-.94 5.76-2.53 8.03-10.33 17.27-15.64 39.18-15.64 61.21 0 21.87 5.24 43.54 15.98 60.5 4.11 6.52 2.15 15.15-4.38 19.26-2.32 1.46-4.9 2.15-7.44 2.15l-414.61.04c-19.82 0-37.53-10.86-50.47-26.54C8.46 469.39 0 447.44 0 427.51c0-19.92 8.35-40.49 21.69-55.69 13.01-14.81 30.85-24.8 50.69-24.8h36.41v-6.76c0-1.36 1.11-2.47 2.47-2.47h128.51V75.53c-11.19-3.88-20.06-12.74-23.96-23.93h-81.25v12.36c0 1.35-1.12 2.47-2.47 2.47h-20.85c-1.36 0-2.47-1.12-2.47-2.47V51.6H88.1c-1.58 0-2.87-1.11-2.87-2.47V28.28c0-1.36 1.29-2.47 2.87-2.47h127.8C221.26 10.77 235.62 0 252.5 0c16.87 0 31.23 10.77 36.59 25.81h128.14c1.58 0 2.88 1.11 2.88 2.47v20.85c0 1.36-1.3 2.47-2.88 2.47h-23.3v12.36c0 1.35-1.11 2.47-2.47 2.47h-20.85c-1.36 0-2.47-1.12-2.47-2.47V51.6h-78.96a38.985 38.985 0 0 1-23.61 23.81zm193.99 393.38H334.33c-4.05 0-7.34-3.28-7.34-7.33 0-4.05 3.29-7.34 7.34-7.34h122.26c-.92-6.1-1.49-12.27-1.69-18.46H331.73c-4.05 0-7.34-3.29-7.34-7.34s3.29-7.34 7.34-7.34h123.34c.31-5.31.87-10.62 1.7-15.86h-89.98c-4.05 0-7.34-3.29-7.34-7.34s3.29-7.33 7.34-7.33h93.01c1.36-5.26 2.98-10.41 4.88-15.41H72.38c-11.22 0-21.72 6.11-29.67 15.17-9.03 10.29-14.69 24.07-14.69 37.3 0 13.68 5.97 28.94 15.46 40.43 7.92 9.6 18.16 16.26 28.9 16.26h392.08c-1.92-5-3.56-10.15-4.9-15.41zM388.38 80.45l82.65 146.03a7.656 7.656 0 0 1 1 3.96h.07c.01.19.02.37.02.55 0 34.78-40.95 62.99-91.44 62.99-49.94 0-90.54-27.6-91.41-61.86a7.663 7.663 0 0 1 1.1-6.17l84.52-145.83c2.12-3.68 6.83-4.93 10.5-2.8 1.33.76 2.34 1.86 2.99 3.13zm.32 31.76v110.36h62.45L388.7 112.21zm-14.74 110.36V112.38L310.1 222.57h63.86zM128.23 80.45l82.65 146.03a7.55 7.55 0 0 1 .99 3.96h.08c0 .19.01.37.01.55 0 34.78-40.94 62.99-91.44 62.99-49.94 0-90.53-27.6-91.41-61.86a7.5 7.5 0 0 1-.22-1.85c0-1.6.48-3.08 1.32-4.32l84.52-145.83a7.688 7.688 0 0 1 10.51-2.8c1.32.76 2.33 1.86 2.99 3.13zm.31 31.76v110.36H191l-62.46-110.36zm-14.73 110.36V112.38L49.95 222.57h63.86zM252.5 21.91c9.34 0 16.92 7.58 16.92 16.93 0 9.34-7.58 16.92-16.92 16.92-9.35 0-16.93-7.58-16.93-16.92 0-9.35 7.58-16.93 16.93-16.93z"/>
      </svg>
    ),
    'Real Estate': (
      <svg 
    viewBox="0 0 512.001 512.001" 
    className="w-12 h-12 text-primary"
    fill="currentColor"
  >
    <g>
      <g>
        <path d="M507.111,255.326l-50.763-50.763V94.609c0-9.22-7.475-16.696-16.696-16.696H372.87c-9.22,0-16.696,7.475-16.696,16.696
          v9.78L267.805,16.02c-6.519-6.519-17.091-6.519-23.611,0C238.116,22.099,13.778,246.436,4.89,255.325
          c-6.52,6.519-6.52,17.091,0,23.611c6.519,6.519,17.091,6.519,23.611,0l27.152-27.15v232.389c0,9.22,7.475,16.696,16.696,16.696
          h367.304c9.22,0,16.696-7.475,16.696-16.696V251.785l27.152,27.152c6.52,6.52,17.091,6.52,23.611,0
          C513.631,272.418,513.631,261.846,507.111,255.326z M422.957,467.479H89.044V218.394L256.001,51.437
          c8.681,8.681,158.347,158.347,166.957,166.957V467.479z M422.957,171.172l-33.391-33.391v-26.476h33.391V171.172z"/>
      </g>
    </g>
    <g>
      <g>
        <circle cx="205.914" cy="261.566" r="16.696"/>
      </g>
    </g>
    <g>
      <g>
        <path d="M373.545,355.5l-16.696-16.697c-3.131-3.131-7.377-4.89-11.805-4.89h-22.261v-22.261c0-4.429-1.759-8.675-4.891-11.805
          l-29.065-29.066c0.377-3.129,0.564-6.185,0.564-9.215c0-46.03-37.448-83.478-83.478-83.478s-83.478,37.448-83.478,83.478
          s37.448,83.478,83.478,83.478c3.031,0,6.088-0.186,9.216-0.564l84.717,84.717c3.131,3.131,7.378,4.89,11.806,4.89h50.087
          c9.22,0,16.696-7.475,16.696-16.696v-50.087C378.435,362.876,376.676,358.63,373.545,355.5z M345.044,400.696h-26.476
          l-85.956-85.956c-4.063-4.061-9.926-5.749-15.527-4.471c-4.067,0.93-7.721,1.383-11.172,1.383
          c-27.618,0-50.087-22.469-50.087-50.087c0-27.618,22.469-50.087,50.087-50.087c27.618,0,50.087,22.469,50.087,50.087
          c0,3.45-0.452,7.106-1.382,11.173c-1.28,5.6,0.408,11.464,4.471,15.526l30.303,30.304v32.041c0,9.22,7.475,16.696,16.696,16.696
          h32.041l6.915,6.915V400.696z"/>
      </g>
    </g>
  </svg>
    ),
    'Education': (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-12 h-12 text-primary">
  <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
</svg>

    ),
    'Energy': (
      <svg viewBox="0 0 24 24" fill="none" className="w-12 h-12 text-primary">
        <polygon points="13,2 3,14 12,14 11,22 21,10 12,10" fill="currentColor" stroke="currentColor" strokeWidth="2"/>
      </svg>
    )
  };
  
  return industryIconMap[industry] || (
    <svg viewBox="0 0 24 24" fill="none" className="w-12 h-12 text-primary">
      <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2"/>
      <path d="M9 9h6v6H9z" stroke="currentColor" strokeWidth="2"/>
    </svg>
  );
}

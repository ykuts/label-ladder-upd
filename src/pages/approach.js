import Layout from '../components/layout/Layout';
import Container from '../components/ui/Container';
import SectionHeading from '../components/ui/SectionHeading';
import Button from '../components/ui/Button';
import Image from 'next/image';
import ProcessDesignSection from '@/components/sections/ProcessDesignSection';

export default function Approach() {
const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Label Ladder's Data Annotation Approach - Human-in-the-Loop Methodology",
    "description": "Learn about our comprehensive 4-step approach to data annotation: needs assessment, custom design, future-proofed architecture, and human-in-the-loop quality assurance.",
    "author": {
      "@type": "Organization",
      "name": "Label Ladder"
    },
    "publisher": {
      "@type": "Organization", 
      "name": "Label Ladder",
      "logo": "https://labelladder.com/images/logo.png"
    },
    "mainEntityOfPage": "https://labelladder.com/approach",
    "articleSection": "Methodology",
    "keywords": ["data annotation methodology", "human-in-the-loop", "data quality assurance", "annotation workflow"],
    "about": [
      {
        "@type": "Thing",
        "name": "Data Annotation Process"
      },
      {
        "@type": "Thing", 
        "name": "Quality Control"
      }
    ]
  };

  const approachSteps = [
    {
      title: "Needs Assessment",
      subtitle: "We don't just accept data — we interrogate it.",
      description: "Every engagement starts with a deep-dive assessment led by our cross-functional team of data scientists and annotation architects.",
      actions: [
        "Use Case Discovery: Map out model objectives and business value to guide data strategy",
        "Data Audit & Profiling: Identify gaps, anomalies, and schema inconsistencies",
        "Label Strategy Definition: Co-create a label set, ontology, and annotation policy tailored to your domain"
      ],
      teamWork: [
        "Our Swiss team leads structured assessments and defines annotation KPIs and data readiness benchmarks",
        "Our Namibian team conducts dataset exploration, metadata mapping, and prepares datasets for pipeline ingestion"
      ],
      image: "/images/approach/assessment.png"
    },
    {
      title: "Custom Annotation Design",
      subtitle: "Once the goals are clear, we design an annotation workflow that reflects both the complexity of the task and the structure of your data.",
      description: "",
      actions: [
        "Workflow Design: Design end-to-end annotation pipelines (task creation, labelling, validation, QA, and approval) using flexible platforms",
        "Quality Controls: Implement multi-layered quality checks including consensus scoring, gold standard tasks and blind reviews",
        "Scalability: Configure the pipeline to integrate with your infrastructure for task dispatching and cloud storage sync"
      ],
      teamWork: [
        "Our Swiss team sets up control and measurement systems using annotation benchmarks",
        "Our Namibian team operationalizes the workflow, ensuring flexibility for daily QA feedback loops"
      ],
      image: "/images/approach/customDesign.png"
    },
    {
      title: "Future-Proofed Data Architecture",
      subtitle: "Data labelling is an investment. We ensure it continues to yield returns by embedding reusability, traceability, and extensibility into the output.",
      description: "",
      actions: [
        "Standardized Output Formats: Deliver in ML-ready formats like COCO, JSONL, TFRecord, or Pascal VOC",
        "Version Control: Track dataset iterations and changes using tools like DVC or Git-based systems",
        "Retraining Readiness: Design feedback loops for future annotation cycles and model fine-tuning"
      ],
      teamWork: [
        "Our Swiss team defines output architecture, schema governance, and compliance-ready data documentation",
        "Our Namibian team ensures versioning, traceability, and consistent data delivery through managed pipelines"
      ],
      image: "/images/approach/architecture.png"
    },
    {
      title: "Human in the Loop",
      subtitle: "We believe annotation is not a mechanical task — it's a cognitive skill.",
      description: "Our Human-in-the-Loop (HITL) model enables contextual, high-quality annotations.",
      actions: [
        "Domain-Specific Training: Annotators are trained in the nuances of the industry (legal, medical, retail, etc.)",
        "Human-AI Collaboration: Combine pre-annotations, model suggestions, and manual corrections",
        "Feedback-Driven Improvement: Use performance reviews and disagreement analysis to continuously raise annotation quality"
      ],
      teamWork: [
        "Our Swiss team sets review policies and manages continuous learning from model outcomes",
        "Our Namibian team executes annotation with quality-first discipline, escalating ambiguities and refining work"
      ],
      image: "/images/approach/human.png"
    }
  ];

  return (
    <Layout 
      title="Our Data Annotation Approach - Human-in-the-Loop Methodology"
      description="Discover Label Ladder's proven 4-step approach to data annotation: comprehensive needs assessment, custom workflow design, future-proofed architecture, and human-in-the-loop quality assurance for superior results."
      keywords="data annotation approach, human-in-the-loop annotation, data annotation methodology, annotation workflow design, data quality control, custom annotation solutions, Swiss data annotation process"
      image="https://labelladder.com/images/og/approach-og.jpg"
      type="article"
      article={true}
      structuredData={structuredData}
      >
      {/* Hero Section */}
      <section className="relative py-20 bg-primary text-white">
        <Container>
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our Approach
            </h1>
            <p className="text-xl mb-8 text-accent">
              We follow a thoughtful approach to designing a solution that fits your needs
            </p>
          </div>
        </Container>
      </section>

      {/* Introduction Section */}
      <section className="py-16">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeading
                title="Strategic Groundwork for Successful Annotation"
                subtitle="Designing the Process"
              />
              <p className="text-gray-600 mb-6">
                We believe that successful data annotation and processing starts with a deep understanding of the problem space and a carefully designed workflow.
              </p>
              <p className="text-gray-600 mb-6">
                Our approach ensures that the final outcome is not just &quot;labelled data&quot;, but a strategic data asset that powers long-term machine learning and operational success.
              </p>
              <p className="text-gray-600">
                By thinking ahead and planning for integration, future updates, and long-term use, we build data solutions that continue to deliver value well beyond the initial project.
              </p>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
              <Image 
                src="/images/approach/customDesign.png" 
                alt="Label Ladder Approach" 
                fill
                className="object-cover"
              />
            </div>
          </div>
        </Container>
      </section>

        {/* Process Design Section */}
        <ProcessDesignSection />
      
      {/* Approach Steps Section */}
      {approachSteps.map((step, index) => (
        <section 
          key={index} 
          className={`py-16 ${index % 2 === 1 ? 'bg-cover bg-right bg-no-repeat overflow-hidden relative' : 'bg-cover bg-center bg-no-repeat overflow-hidden relative'}`}
          id={step.title.toLowerCase().replace(/\s+/g, '-')}
          style={{
        backgroundImage:  `url(${step.image})`
      }}
        >
          {/* Background overlay */}
      <div className={`absolute inset-0 ${index % 2 === 1 ? 'bg-gradient-to-r from-white/80 to-white/100' : 'bg-gradient-to-r from-white/100 to-white/80'}`} ></div>
          <Container>
            <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 ">
              <div className={`order-2 ${index % 2 === 0 ? 'md:order-1' : 'md:order-2'}`}>
                <SectionHeading
                  title={step.title}
                  subtitle={step.subtitle}
                />
                
                {step.description && (
                  <p className="text-gray-600 mb-6">{step.description}</p>
                )}
                
                <div className="mt-8">
                  <h3 className="text-lg font-bold text-primary mb-4">WHAT WE DO:</h3>
                  <ul className="space-y-4">
                    {step.actions.map((action, i) => {
                      const [actionTitle, actionDesc] = action.split(':');
                      return (
                        <li key={i} className="flex">
                          <div>
                            <span className="font-semibold text-primary">{actionTitle}:</span>
                            <span className="text-gray-600">{actionDesc}</span>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </div>
                
                <div className="mt-8">
                  <h3 className="text-lg font-bold text-primary mb-4">HOW WE DO IT:</h3>
                  <ul className="space-y-3">
                    {/* {step.teamWork.map((work, i) => ( */}
                      <li key={0} className="flex items-start">
                        <Image
                          src="/images/icons/switzerland.png"
                            alt="Switzerland Flag"
                            width={48}
                            height={48}
                            className="mr-3"
                        />
                        {/* <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-secondary text-white font-bold text-sm mr-3 mt-0.5">{i+1}</span> */}
                        <span className="text-gray-600">{step.teamWork[0]}</span>
                      </li>
                      <li key={1} className="flex items-start">
                        <Image
                          src="/images/icons/namibia.png"
                            alt="Switzerland Flag"
                            width={48}
                            height={48}
                            className="mr-3"
                        />
                        {/* <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-secondary text-white font-bold text-sm mr-3 mt-0.5">{i+1}</span> */}
                        <span className="text-gray-600">{step.teamWork[1]}</span>
                      </li>
                    
                  </ul>
                </div>
              </div>
              
              <div className={`order-2 ${index % 2 === 0 ? 'md:order-2' : 'md:order-1'}`}>
                <div >
                  <Image 
                    src={step.image} 
                    alt={`${step.title} Process`} 
                    fill
                    className="object-cover hidden"
                  />
                </div>
              </div>
            </div>
          </Container>
        </section>
      ))}

      {/* <HumanInTheLoopSection /> */}
      
      {/* Results Section */}
      <section className="py-16 bg-primary text-white">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              The Results
            </h2>
            <p className="text-xl mb-8 text-accent">
              Not just &quot;labelled data&quot;, but a strategic data asset that powers long-term machine learning and operational success.
            </p>
            <Button href="/contact/" variant="white" size="lg">
              Start Your Project
            </Button>
          </div>
        </Container>
      </section>
    </Layout>
  );
}
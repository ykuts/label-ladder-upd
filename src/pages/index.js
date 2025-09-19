import Layout from '../components/layout/Layout';
import HeroSection from '../components/sections/HeroSection';
import ChallengeSection from '../components/sections/ChallengeSection';
import SolutionSection from '../components/sections/SolutionSection';
import ApproachSection from '../components/sections/ApproachSection';
import ServicesOverviewSection from '../components/sections/ServicesOverviewSection';
import CTASection from '../components/sections/CTASection';
import CredentialsSection from '../components/sections/CredentialsSection';
import FoundationSection from '../components/sections/FoundationSection';
import ExpertAnnotationSection from '../components/sections/ExpertAnnotationSection';
import WhyChooseSection from '../components/sections/WhyChooseSection';

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Label Ladder",
    "url": "https://labelladder.com",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://labelladder.com/?s={search_term_string}",
      "query-input": "required name=search_term_string"
    },
    "mainEntity": {
      "@type": "Organization",
      "name": "Label Ladder",
      "slogan": "High-Quality Data Annotation. From Scale to Specialization.",
      "description": "Swiss-Namibian company providing data annotation services from large-scale general projects to specialized medical expertise",
      "foundingDate": "2018",
      "numberOfEmployees": "1000",
      "location": [
        {
          "@type": "Place",
          "name": "Zürich, Switzerland"
        },
        {
          "@type": "Place",
          "name": "Windhoek, Namibia"
        }
      ],
      "serviceArea": {
        "@type": "Place",
        "name": "Worldwide"
      },
      "hasOfferCatalog": [
        {
          "@type": "OfferCatalog",
          "name": "General Data Annotation Services",
          "description": "Large-scale annotation services powered by 1,000-strong team"
        },
        {
          "@type": "OfferCatalog",
          "name": "Medical & Healthcare Annotation",
          "description": "Specialized medical data annotation with clinical expertise"
        }
      ],
      "knowsAbout": [
        "Data Annotation",
        "Medical Data Processing",
        "Healthcare AI",
        "Radiology Annotation",
        "Pathology Labeling",
        "Clinical Documentation",
        "Machine Learning",
        "Computer Vision"
      ]
    }
  };

  return (
    <Layout
      title="Professional Data Annotation: From Scale to Medical Specialization"
      description="Expert data annotation services combining 1,000-strong Namibian team for large-scale projects with specialized medical expertise for healthcare AI. Swiss precision meets social impact."
      keywords="data annotation services, medical data annotation, healthcare AI, large scale data labeling, radiology annotation, pathology labeling, clinical data processing, Swiss Namibian partnership, native English speakers"
      image="https://labelladder.com/images/og/homepage-medical-og.jpg"
      structuredData={structuredData}
    >
      <HeroSection />
      <FoundationSection />
      <ExpertAnnotationSection />
      <ChallengeSection />
      <SolutionSection />
      <WhyChooseSection />
      <ApproachSection />
      {/* <ServicesOverviewSection /> */}
      <CredentialsSection />
      <CTASection />
    </Layout>
  );
}
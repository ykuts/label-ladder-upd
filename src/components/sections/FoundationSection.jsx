import Container from '../ui/Container';
import SectionHeading from '../ui/SectionHeading';
import Image from 'next/image';

const FoundationSection = () => {
  const stats = [
    {
      number: "1,000",
      label: "Skilled Annotators",
      description: "Trained professionals in Namibia delivering quality data annotation"
    },
    {
      number: "98%",
      label: "Data Accuracy",
      description: "Consistent quality through rigorous training and quality control"
    },
    {
      number: "45%",
      label: "Cost Reduction",
      description: "Significant savings compared to in-house data operations"
    },
    {
      number: "3x",
      label: "Faster Delivery",
      description: "Accelerated timelines through optimized workflows"
    }
  ];

  const capabilities = [
    {
      title: "Large-Scale Projects",
      description: "Handle enterprise-volume annotation projects with our extensive workforce",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8 text-white">
          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" stroke="currentColor" strokeWidth="2"/>
          <polyline points="3.27,6.96 12,12.01 20.73,6.96" stroke="currentColor" strokeWidth="2"/>
          <line x1="12" y1="22.08" x2="12" y2="12" stroke="currentColor" strokeWidth="2"/>
        </svg>
      )
    },
    {
      title: "Native English Speakers",
      description: "Our Namibian team includes native English speakers ensuring linguistic accuracy",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8 text-white">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10z" stroke="currentColor" strokeWidth="2"/>
          <path d="M8 10h.01M12 10h.01M16 10h.01" stroke="currentColor" strokeWidth="2"/>
        </svg>
      )
    },
    {
      title: "Social Impact",
      description: "Creating meaningful employment opportunities and digital skills development in Namibia",
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
      title: "Swiss Quality Standards",
      description: "Combining Namibian talent with Swiss precision and quality management",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8 text-white">
          <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <Container>
        <SectionHeading
          title="Our Foundation"
          subtitle="Scale and Social Impact: Our 1,000 Skilled Annotators"
          centered
        />
        
        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                {stat.number}
              </div>
              <div className="text-lg font-semibold text-secondary mb-2">
                {stat.label}
              </div>
              <p className="text-gray-600 text-sm">
                {stat.description}
              </p>
            </div>
          ))}
        </div>

        {/* Capabilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {capabilities.map((capability, index) => (
            <div 
              key={index} 
              className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border-t-4 border-primary group"
            >
              {/* Icon */}
              <div className="mb-4 flex justify-center">
                <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                  {capability.icon}
                </div>
              </div>
              
              <h3 className="text-lg font-bold text-primary mb-3 text-center">{capability.title}</h3>
              <p className="text-gray-600 text-center text-sm leading-relaxed">
                {capability.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom text about Label Ladder Academy */}
        <div className="mt-12 bg-primary text-white p-8 rounded-xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">Label Ladder Academy</h3>
              <p className="text-accent mb-4">
                Our project is supported by the Namibian Ministry of Education, Innovation, Youth, Sports, Arts and Culture.
              </p>
              <p className="text-accent">
                Through our Label Ladder Academy program, we guarantee our employees a pathway 
                to growth and employability in a globally competitive industry.
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">1,000</div>
              <div className="text-xl text-secondary font-semibold mb-2">Namibians Trained by 2027</div>
              <p className="text-accent text-sm">Supporting economic development and youth employment</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default FoundationSection;
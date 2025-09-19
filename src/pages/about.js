import Layout from '../components/layout/Layout';
import Container from '../components/ui/Container';
import Button from '../components/ui/Button';
import SectionHeading from '../components/ui/SectionHeading';
import Image from 'next/image';

export default function About() {
    // Structured data for SEO
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "AboutPage",
        "mainEntity": {
            "@type": "Organization",
            "name": "Label Ladder",
            "foundingDate": "2018",
            "founders": [
                {
                    "@type": "Person",
                    "name": "Lorenzo Olivi",
                    "jobTitle": "Co-founder & CEO"
                },
                {
                    "@type": "Person",
                    "name": "Marion Schleifer",
                    "jobTitle": "Co-founder & CTO"
                }
            ],
            "mission": "We provide end-to-end data processing and annotation services to transform data into powerful assets that drive smarter decisions, streamlined operations, and real competitive edge.",
            "numberOfEmployees": "50-100",
            "location": [
                {
                    "@type": "Place",
                    "name": "Zürich, Switzerland"
                },
                {
                    "@type": "Place",
                    "name": "Windhoek, Namibia"
                }
            ]
        }
    };

    // Team data
    const team = [
        {
            name: 'Marion Schleifer',
            role: 'Co-founder & CEO',
            image: '/images/team/marion.png',
        },
        {
            name: 'Lorenzo Olivi',
            role: 'Business Development',
            image: '/images/team/lorenzo.png',
        },
        {
            name: 'Natasha Bassingthwaighte',
            role: 'Project Oversight',
            image: '/images/team/natasha.png',
        },
        {
            name: 'Klaudia Iita',
            role: 'Operations',
            image: '/images/team/klaudia.png',
        },
        {
            name: 'Elzine Mushambi',
            role: 'Co-founder & Advisor',
            image: '/images/team/elzine.png',
        },
    ];

    const labelers = [
        { name: 'Lavinia', image: '/images/team/lavinia.png' },
        { name: 'Paulus', image: '/images/team/paulus.png' },
        { name: 'Lucien', image: '/images/team/lucien.png' },
        { name: 'Marizungiruaije', image: '/images/team/marizungiruaije.png' },
        { name: 'Racheal', image: '/images/team/racheal.png' },
        { name: 'Almando', image: '/images/team/almando.png' },
        { name: 'Silver', image: '/images/team/silver.png' },
        { name: 'Elvino', image: '/images/team/elvino.png' },
    ];
    return (
        <Layout
            title="About Label Ladder - Swiss-Namibian Data Annotation Company"
            description="Learn about Label Ladder's mission to combine Swiss precision with Namibian talent. Founded by Lorenzo Olivi and Marion Schleifer, we're training 1,000 Namibians in digital skills while providing world-class data annotation services."
            keywords="Label Ladder company, data annotation team, Swiss Namibian partnership, Lorenzo Olivi, Marion Schleifer, Label Ladder Academy, digital skills training, data annotation experts"
            image="https://labelladder.com/images/og/about-og.jpg"
            structuredData={structuredData}
        >
            {/* Hero Section */}
            <section className="relative py-20 bg-primary text-white" id='mission'>
                <Container>
                    <div className="max-w-3xl">
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                            Our Mission
                        </h1>
                        <p className="text-xl mb-8 text-accent">
                            Behind every smart model is smarter data preparation
                        </p>
                    </div>
                </Container>
            </section>

            {/* About Section */}
            <section className="py-16" id="about">
                <Container>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div>
                            <SectionHeading
                                title="About Us"
                                subtitle="Label Ladder is a Swiss-Namibian company with offices in Zürich and Windhoek."
                            />
                            <p className="text-gray-600 mb-6">
                                We provide <strong>end-to-end data processing and annotation services</strong> — not just to label your data, but to transform it into a powerful asset that drives smarter decisions, streamlined operations, and real competitive edge.
                            </p>
                            <p className="text-gray-600 mb-6">
                                Whether you&rsquo;re training AI models or managing complex datasets, our solutions are built to <strong>reduce operational costs, enhance data quality and usability</strong>, and enable <strong>faster, insight-driven decisions.</strong>
                            </p>
                            <p className="text-gray-600 mb-6">
                                We combine Swiss precision and data excellence with Namibian talent and agility to deliver high-quality, scalable data solutions that are both globally competitive and locally grounded.
                            </p>
                            <p className="text-gray-600">
                                Let us help you unlock the full potential of your data — with <strong>precision, purpose, and long-term impact.</strong>
                            </p>
                        </div>
                        <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
                            <Image
                                src="/images/about/office.jpg"
                                alt="Label Ladder Office"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                </Container>
            </section>

            {/* Working With Us Section */}
            <section className="py-16 bg-gray-50">
                <Container>
                    <SectionHeading
                        title="Working with Us"
                        subtitle="Our commitment to quality and expertise are what sets us apart."
                        centered
                    />
                    <div className="flex justify-center">
                        <div className="md:w-3/4 grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* High-Quality Data Services */}
                            <div className="border-2 border-blue-900 rounded-lg p-6">
                                <div className="flex items-center mb-4">
                                    <div className="w-12 mr-4">
                                        <Image
                                            src="/images/icons/quality.png"
                                            alt="High-Quality Data Services"
                                            width={48}
                                            height={48}
                                            className="w-full text-blue-900"
                                        />
                                    </div>
                                    <h3 className="text-blue-900 text-xl font-bold">HIGH-QUALITY DATA SERVICES</h3>
                                </div>
                                <p className="text-blue-900 font-medium mb-2">Quality <span className="font-bold">control processes</span> for in-house data labelers ensure</p>
                                <p className="text-blue-900 mb-2"><span className="font-bold">accurate</span> and <span className="font-bold">high-quality processed data</span>, avoiding common crowdsourcing inconsistency issues</p>
                            </div>
                            {/* Cost-Effective Service */}
                            <div className="border-2 border-blue-900 rounded-lg p-6">
                                <div className="flex items-center mb-4">
                                    <div className="w-12 mr-4">
                                        <Image
                                            src="/images/icons/cost.png"
                                            alt="Cost-Effective Service"
                                            width={48}
                                            height={48}
                                            className="w-full text-blue-900"
                                        />
                                    </div>
                                    <h3 className="text-blue-900 text-xl font-bold">COST-EFFECTIVE SERVICE</h3>
                                </div>
                                <p className="text-blue-900 font-medium mb-2">Leveraging a specialized external provider <span className="font-bold">reduces the overhead costs</span> associated with hiring, training, and maintaining an in-house team, allowing <span className="font-bold">focus on core business</span> activities for greater overall productivity</p>
                            </div>
                            {/* Skilled Talent Pool */}
                            <div className="border-2 border-blue-900 rounded-lg p-6">
                                <div className="flex items-center mb-4">
                                    <div className="w-12 mr-4">
                                        <Image
                                            src="/images/icons/talent.png"
                                            alt="Skilled Talent Pool"
                                            width={48}
                                            height={48}
                                            className="w-full text-blue-900"
                                        />
                                    </div>
                                    <h3 className="text-blue-900 text-xl font-bold">SKILLED TALENT POOL</h3>
                                </div>
                                <p className="text-blue-900 font-medium mb-2">A group of <span className="font-bold">trained and experienced annotators</span> facilitating transformation of raw data to enable the proper functioning of machine-learning systems</p>
                            </div>
                            {/* A Venture Built on Impact */}
                            <div className="border-2 border-blue-900 rounded-lg p-6">
                                <div className="flex items-center mb-4">
                                    <div className="w-12 mr-4">
                                        <Image
                                            src="/images/icons/impact.png"
                                            alt="A Venture Built on Impact"
                                            width={48}
                                            height={48}
                                            className="w-full text-blue-900"
                                        />
                                    </div>
                                    <h3 className="text-blue-900 text-xl font-bold">A VENTURE BUILT ON IMPACT</h3>
                                </div>
                                <p className="text-blue-900 font-medium mb-2">Label Ladder is based on empowerment, where <span className="font-bold">1&rsquo;000 Namibians</span> are trained with digital skills, supporting <span className="font-bold">economic development</span> and <span className="font-bold">youth employment</span></p>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>

            {/* Our Impact Section */}
            <section className="py-16 bg-gray-50">
                <Container>
                    <SectionHeading
                        title="Our Impact"
                        subtitle="We are on a mission to upskill 1,000 Namibians by 2027, providing them with the necessary tools and knowledge to work in the data and AI industries."
                        centered
                    />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-12">
                        <div className="order-2 md:order-1">
                            <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
                                <Image
                                    src="/images/about/impact.jpg"
                                    alt="Label Ladder Academy"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>
                        <div className="order-1 md:order-2">
                            {/* <h3 className="text-2xl font-bold text-primary mb-6">
                Label Ladder Academy
              </h3> */}
                            <p className="text-gray-600 mb-6">
                                Our project is supported by the Namibian <strong>Ministry of Education, Innovation, Youth, Sports, Arts and Culture</strong>.
                            </p>
                            <p className="text-gray-600 mb-6">
                                Through our <strong>Label Ladder Academy</strong> program, we guarantee our employees a pathway to growth and employability in a <strong>globally competitive industry</strong>.
                            </p>
                        </div>
                        <div className="order-4 md:order-3">
                            <h4 className="text-xl font-bold text-primary mb-4 mt-8">
                                Core Teachings of the Academy:
                            </h4>
                            <ul className="space-y-3 text-gray-600">
                                <li className="flex items-start">
                                    {/* <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-primary text-white font-bold text-sm mr-3 mt-0.5">1</span> */}
                                    <div className="flex-shrink-0 w-8 h-8 bg-secondary text-white rounded-full flex items-center justify-center font-bold text-sm mr-4">
                                        1
                                    </div>
                                    <span><strong>Intro to Data Work:</strong> Learn the basics of data annotation, digital tools, and working in tech</span>
                                </li>
                                <li className="flex items-start">
                                    {/* <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-primary text-white font-bold text-sm mr-3 mt-0.5">2</span> */}
                                    <div className="flex-shrink-0 w-8 h-8 bg-secondary text-white rounded-full flex items-center justify-center font-bold text-sm mr-4">
                                        2
                                    </div>
                                    <span><strong>Annotation Skills Training:</strong> Get hands-on with real data — images, text, audio, and video — using industry tools</span>
                                </li>
                                <li className="flex items-start">
                                    {/* <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-primary text-white font-bold text-sm mr-3 mt-0.5">3</span> */}
                                    <div className="flex-shrink-0 w-8 h-8 bg-secondary text-white rounded-full flex items-center justify-center font-bold text-sm mr-4">
                                        3
                                    </div>
                                    <span><strong>Quality & Review Certification:</strong> Train to become a quality checker or team lead with advanced annotation skills</span>
                                </li>
                                <li className="flex items-start">
                                    {/* <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-primary text-white font-bold text-sm mr-3 mt-0.5">4</span> */}
                                    <div className="flex-shrink-0 w-8 h-8 bg-secondary text-white rounded-full flex items-center justify-center font-bold text-sm mr-4">
                                        4
                                    </div>
                                    <span><strong>Project & Tech Skills:</strong> Learn how to manage data projects, use dashboards, and communicate with global teams</span>
                                </li>
                                <li className="flex items-start">
                                    {/* <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-primary text-white font-bold text-sm mr-3 mt-0.5">5</span> */}
                                    <div className="flex-shrink-0 w-8 h-8 bg-secondary text-white rounded-full flex items-center justify-center font-bold text-sm mr-4">
                                        5
                                    </div>
                                    <span><strong>Workplace Readiness & Soft Skills:</strong> Build confidence in communication, teamwork, time management, and professionalism</span>
                                </li>
                            </ul>
                        </div>
                        <div className="order-3 md:order-4">
                            <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">

                                <div className="flex items-center justify-center h-full bg-white">
                                    {/* <!-- Book with ladder icon (SVG) --> */}
                                    <div className="mr-4">
                                        <Image
                                            src="/images/icons/academy.png"
                                            alt="Label Ladder Academy"
                                            width={200}
                                            height={200}
                                            className="object-cover"
                                        />
                                    </div>

                                    {/* <!-- Text "Label Ladder Academy" --> */}
                                    <div className="text-primary font-bold">
                                        <div className="text-3xl leading-tight">Label</div>
                                        <div className="text-3xl leading-tight">Ladder</div>
                                        <div className="text-3xl leading-tight">Academy</div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </Container>
            </section>


            {/* Team Section */}
            <section className="py-16" id="team">
                <Container>
                    <SectionHeading
                        title="Meet the Team"
                        subtitle="Well-rounded leaders and technologists, driven by a mission to empower our clients' data."
                        centered
                    />

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 mt-12">
                        {team.map((member, index) => (
                            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                                <div className="relative aspect-square">
                                    <Image
                                        src={member.image}
                                        alt={member.name}
                                        fill
                                        className="object-contain"
                                        sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 12.5vw"

                                    />
                                </div>
                                <div className="p-4 text-center">
                                    <h3 className="text-xl font-bold text-primary">{member.name}</h3>
                                    <p className="text-gray-600">{member.role}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-16">
                        <SectionHeading
                            title="Our Labelers"
                            subtitle="A dynamic and diverse group of data labelers and processors to deliver our mission."
                            centered
                        />

                        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4 mt-12">
                            {labelers.map((labeler, index) => (
                                <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                                    <div className="relative aspect-square">
                                        <Image
                                            src={labeler.image}
                                            alt={labeler.name}
                                            fill
                                            className="object-contain"
                                            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 12.5vw"
                                        />
                                    </div>
                                    <div className="p-2 text-center">
                                        <h4 className="font-medium text-primary">{labeler.name}</h4>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </Container>
            </section>

            {/* CTA Section */}
            <section className="py-16 bg-primary text-white">
                <Container>
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">
                            Ready to work with us?
                        </h2>
                        <p className="text-xl mb-8 text-accent">
                            Contact us today to learn more about how Label Ladder can help with your data annotation and processing needs.
                        </p>
                        <Button href="/contact" variant="white" size="lg">
                            Get in Touch
                        </Button>
                    </div>
                </Container>
            </section>
        </Layout>
    );
}
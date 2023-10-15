import Head from 'next/head';

// Quality-specific content
// Structured Quality Commitment Content
const qualityContent = {
    title: "Uncompromised Quality in Manufacturing",
    description: "Our dedication to quality is unmatched. From initial concept to final product, we ensure each step meets our rigorous quality standards.",
    commitmentSections: [
        {
            title: "Our Standard of Excellence",
            content: `At Hash Machinery Systems, our commitment to quality is not just an assertion; it's a standard that we live by. It's ingrained in every aspect of our operations, ensuring that each piece of machinery we design, and every part that we manufacture, stands up to rigorous criteria and surpasses our customers’ expectations.`
        },
        {
            title: "Innovation and Precision in Production",
            content: `From the conceptual beginnings to the final touches, our process is a journey of meticulousness. We begin by embracing innovative designs, fortified by advanced technology, ensuring that precision isn't just achieved; it's a consistent outcome. Our raw materials are sourced from industry leaders, guaranteeing durability and performance in every component we produce.`
        },
        {
            title: "Rigorous Quality Assurance",
            content: `But we don't stop at the production line. Each product undergoes thorough testing, challenging them under various conditions to confirm their resilience and reliability. This meticulous quality assurance process signifies our full confidence in the products that bear our name, ensuring they not only meet the industry standards but redefine them.`
        },
        {
            title: "Investment in Our People",
            content: `Moreover, our commitment transcends the tangible products. We invest in our people, the custodians of our quality promise. Through continuous training and development, our skilled workforce stays ahead of the latest industry trends and standards, driving innovation and maintaining our reputation as leaders in manufacturing excellence.`
        },
        {
            title: "Certifications and Compliance",
            content: `Beyond compliance, our certifications are a testament to our high standards. We adhere to specific international/national quality standards/certifications, affirming our relentless pursuit of quality. For us, these aren't just accolades; they are a reminder of our responsibility towards our clientele and the trust they place in our products and practices.`
        },
        {
            title: "Transparency and Partnership",
            content: `In our promise of transparency, we welcome client inspections and audits, embracing an open-door policy that fortifies trust and fosters long-term partnerships. We believe in accountability and ensure that we are reachable and responsive, solidifying client confidence in our commitment to not just delivering solutions but embodying quality.`
        },
        {
            title: "Our Lasting Commitment",
            content: `At Hash Machinery Systems, quality is our identity. It's the promise we keep with every product we ship and every service we provide. It’s not just about what we create; it's about the lasting impressions and the enduring relationships we build. Because when it comes to quality, there are no shortcuts, and we are dedicated to upholding this truth for generations to come.`
        },
    ],
    // ... (other sections like how quality is maintained, standards or certifications, etc.)
};


export const metadata = {
    title: 'Quality Policy - Hash Machinery Systems',
    description: qualityContent.description,
};

export default function Quality() {
    return (
        <>
            <Head>
                <title>{metadata.title}</title>
                <meta name="description" content={metadata.description}/>
            </Head>

            {/* Main Quality Section */}
            <section className="relative">
                <div className="max-w-6xl mx-auto px-4 sm:px-6">
                    <div className="pt-32 pb-12 md:pt-40 md:pb-20">

                        {/* Header */}
                        <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
                            <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Quality Assurance</h1>
                            <p className="text-xl text-gray-400">{qualityContent.description}</p>
                        </div>

                        {/* Main Content */}
                        <div className="max-w-3xl mx-auto space-y-8 text-left">
                            <Section
                                title={qualityContent.commitmentSections[0].title}
                                content={qualityContent.commitmentSections[0].content}
                            />
                            <Section
                                title={qualityContent.commitmentSections[1].title}
                                content={qualityContent.commitmentSections[1].content}
                            />
                            <Section
                                title={qualityContent.commitmentSections[2].title}
                                content={qualityContent.commitmentSections[2].content}
                            />
                            <Section
                                title={qualityContent.commitmentSections[3].title}
                                content={qualityContent.commitmentSections[3].content}
                            />
                            <Section
                                title={qualityContent.commitmentSections[4].title}
                                content={qualityContent.commitmentSections[4].content}
                            />
                            <Section
                                title={qualityContent.commitmentSections[5].title}
                                content={qualityContent.commitmentSections[5].content}
                            />
                            <Section
                                title={qualityContent.commitmentSections[6].title}
                                content={qualityContent.commitmentSections[6].content}
                            />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

// Components

interface SectionProps {
    title: string;
    content: string;
}

const Section: React.FC<SectionProps> = ({title, content}) => (
    <div className="space-y-4">
        <h2 className="text-2xl font-bold">{title}</h2>
        <p className="mt-3 text-lg text-gray-400">{content}</p>
    </div>
);

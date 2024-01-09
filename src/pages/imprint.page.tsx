import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { useTranslation } from 'next-i18next';
import { SeoFields } from '@src/components/features/seo';
import { Container } from '@src/components/shared/container';
import { Hero } from '@src/components/features/hero';
import { SectionText } from '@src/components/features/SectionText';

// Remove references to GraphQL and data fetching

const Page = () => {
  const { t } = useTranslation();

  return (
    <>
      {/* Include SEO fields if needed */}
      {/* <SeoFields {...page.seoFields} /> */}

      <Container>
        <SectionText
            title="Imprint"
            text={`Welcome to the comprehensive Terms & Conditions of our Berlin-based technology agency. As a prominent player in the tech industry, we are your dedicated partner for navigating the dynamic digital landscape with innovative Artificial Intelligence (AI) solutions.

                Our agency, fueled by a team of AI experts, is committed to revolutionizing the way businesses operate in the digital age. With a deep understanding of the ever-evolving tech landscape, we stand ready to address your most complex challenges and deliver tailor-made AI solutions that fuel your growth and success.

                Our mission extends beyond technology; it's about empowering businesses to unlock their full potential. Whether you're seeking AI-powered automation, data-driven decision support, or customer engagement enhancements, we have the expertise to transform your aspirations into reality.

                Transparency and ethical AI practices are at the core of our philosophy. We understand the importance of data privacy and security, and we're dedicated to safeguarding your valuable information throughout our partnership.

                These Terms & Conditions lay out the framework that governs your interactions with our platform and services. They provide insights into our commitment to quality, data protection, and responsible AI use. By engaging with us, you're joining a community of forward-thinkers who harness the power of AI responsibly and ethically.

                We invite you to explore this document in detail to ensure a mutual understanding of the rules that guide our collaboration. Should you have any inquiries, require clarification, or simply wish to discuss our services or policies, please don't hesitate to reach out to our dedicated team.

                Thank you for choosing us as your AI technology partner. We eagerly anticipate embarking on this transformative AI journey with you, driving innovation, and propelling your business to new heights.`}
            />

      </Container>
      
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  // No data fetching required for a static page
  // Return an empty object or remove this function if not needed

  return {
    props: {},
  };
};

export default Page;


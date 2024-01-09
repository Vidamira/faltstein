import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { useTranslation } from 'next-i18next';
import { SeoFields } from '@src/components/features/seo';
import { Container } from '@src/components/shared/container';
import { Hero } from '@src/components/features/hero';

// Remove references to GraphQL and data fetching

const Page = () => {
  const { t } = useTranslation();

  return (
    <>
      {/* Include SEO fields if needed */}
      {/* <SeoFields {...page.seoFields} /> */}

      <Container>
      <Hero
        background="assets/line-bg.png" // Define the URL for the background
        title="CONTACT"
        subtitle="Want to start a project?"
        buttonText="get in touch"
        onClick={() => {}}
      />
        {/* Add your static content here */}
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


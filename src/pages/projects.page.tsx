import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { Container } from '@src/components/shared/container';
import { revalidateDuration } from '@src/pages/utils/constants';
import { useTranslation } from 'next-i18next';
import { Hero } from '@src/components/features/hero';
import { CardsComponent } from '@src/components/features/CardsComponent';


const Page = () => {
  const { t } = useTranslation();

  return (
    <>
      {/* Include SEO fields if needed */}
      {/* <SeoFields {...page.seoFields} /> */}

      <Container>
        {/* Add your static content here */}
        <Hero
        background="/path/to/your-image.jpg" // Replace with your image URL
        title="PROJECTS"
        subtitle="Want to start a project with us?"
        buttonText="start"
        onClick={() => {
          // Handle button click event here
        }}
      />
      <CardsComponent
        heading="How We Help" // Add heading property
        description="Discover how our agency can transform your business with innovative AI integrations designed to drive growth and efficiency."
        cardsData={[
          {
            title: 'AI-Powered Solutions',
            text: 'Unleash the potential of artificial intelligence with our tailored solutions. From chatbots to predictive analytics, we\'ve got you covered.'
          },
          {
            title: 'Enhanced Decision-Making',
            text: 'Make data-driven decisions with confidence. Our AI integrations provide actionable insights to guide your strategic choices.'
          },
          {
            title: 'Improved Customer Experience',
            text: 'Deliver exceptional customer service and engagement. Our AI solutions enhance interactions and satisfaction.'
          },
          
          // Add more cards as needed with their respective titles and text
        ]}
      />
      <CardsComponent
        heading="How We Help" // Add heading property
        description="Discover how our agency can transform your business with innovative AI integrations designed to drive growth and efficiency."
        cardsData={[
          {
            title: 'AI-Powered Solutions',
            text: 'Unleash the potential of artificial intelligence with our tailored solutions. From chatbots to predictive analytics, we\'ve got you covered.'
          },
          {
            title: 'Enhanced Decision-Making',
            text: 'Make data-driven decisions with confidence. Our AI integrations provide actionable insights to guide your strategic choices.'
          },
          {
            title: 'Improved Customer Experience',
            text: 'Deliver exceptional customer service and engagement. Our AI solutions enhance interactions and satisfaction.'
          },
          
          // Add more cards as needed with their respective titles and text
        ]}
      />
      <Hero
        background="assets/abstract-1.jpg" // Define the URL for the background
        title="Lets build"
        subtitle="start your ai based project with us now."
        
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

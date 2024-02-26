import { GetStaticProps } from 'next';
import { Container } from '@src/components/shared/container';
import { revalidateDuration } from '@src/pages/utils/constants';
import { useTranslation } from 'next-i18next';
import { Hero } from '@src/components/features/hero';
import { SectionContainer } from '@src/components/features/SectionContainer';
import { CardsComponent } from '@src/components/features/CardsComponent';
import { AlternatingGridComponent } from '@src/components/features/AlternatingGridComponent';
import { HeroP5 } from '@src/components/features/HeroP5';

const Page = () => {
  const { t } = useTranslation();

  const handleButtonClick = () => {
    // Handle button click logic here
  };

  return (
    <>
      <Container>
        {/* Add your static content here */}
        <HeroP5
          background="/p5sketchAlt.html" // Replace with the path to your p5.js sketch
          title="LET'S AUTOMATE TOGETHER."
          subtitle="Discover amazing content here."
          buttonText="Learn More"
          onClick={() => {
            // Handle button click event here
          }}
        />

        <SectionContainer
          leftColumnContent={{
            h1Text: "who we are",
            h3Text: "We are a tech agency specializing in automatic websites and connecting clients with artificial intelligence.",
          }}
          rightColumnContent={{
            h1Text: "what we do",
            pText: "We provide cutting-edge technology solutions to automate your business processes and leverage the power of artificial intelligence.",
            buttonText: "Start Automating",
          }}
        />

        <CardsComponent
          heading="How We Help"
          description="Discover how our agency can transform your business with innovative AI integrations designed to drive growth and efficiency."
          cardsData={[
            {
              title: 'AI Integrations',
              text: 'Unleash the potential of artificial intelligence with our tailored solutions. From chatbots to predictive analytics, we\'ve got you covered.',
              imageUrl: 'assets/abstract-1.jpg', // Use the correct image URL
              linkUrl: '/ai-solutions' // Specify the appropriate link URL
            },
            {
              title: 'Decision-Making',
              text: 'Make data-driven decisions with confidence. Our AI integrations provide actionable insights to guide your strategic choices.',
              imageUrl: 'assets/abstract-2.jpg', // Use the correct image URL
              linkUrl: '/decision-making' // Specify the appropriate link URL
            },
            {
              title: 'Customer Experience',
              text: 'Deliver exceptional customer service and engagement. Our AI solutions enhance interactions and satisfaction.',
              imageUrl: 'assets/abstract-3.jpg', // Use the correct image URL
              linkUrl: '/customer-experience' // Specify the appropriate link URL
            },
            // Add more cards as needed with their respective titles, text, image URLs, and link URLs
          ]}
        />

        {/* <AlternatingGridComponent
            items={[
              { type: 'image', imageUrl: '/assets/abstract-1.jpg' },
              { type: 'text', title: 'Title 1', rowClass: '1', buttonText: 'Button 1', onButtonClick: () => {} },
              { type: 'text', title: 'Title 2', rowClass: '2', buttonText: 'Button 2', onButtonClick: () => {} },
              { type: 'image', imageUrl: '/assets/abstract-2.jpg' },
              // ... add more items as needed
            ]}
          /> */}
        
        <Hero
          background="assets/abstract-3.jpg" // Define the URL for the background
          title="what are you automating today?"
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

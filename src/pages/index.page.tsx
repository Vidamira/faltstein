import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { useRouter } from 'next/router';
import { Container } from '@src/components/shared/container';
import { revalidateDuration } from '@src/pages/utils/constants';
import { useTranslation } from 'next-i18next';
import { Hero } from '@src/components/features/hero';
import { CardsComponent } from '@src/components/features/CardsComponent';
import { FAQComponent } from '@src/components/features/FAQComponent';
import { AlternatingGridComponent } from '@src/components/features/AlternatingGridComponent';
import { SectionContainerMedia } from '@src/components/features/SectionContainerMedia';




const Page = () => {
  const router = useRouter();
  const { t } = useTranslation();

  return (
    <>
      {/* Include SEO fields if needed */}
      {/* <SeoFields {...page.seoFields} /> */}

      <Container>
        {/* Add your static content here */}
        <Hero
        background="assets/abstract-1.jpg" // Define the URL for the background
        title="Connecting your business and AI."
        subtitle="Berlin based tech agency specializing in automatic websites and connecting clients with artificial intelligence."
        buttonText="Start Project"
        onClick={() => {}}
      />
      <CardsComponent
        heading="What we can do for you."
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


      <FAQComponent faqsData={[
        { question: 'What kind of AI solutions do you provide?', answer: 'Our tech agency specializes in providing a wide range of AI solutions, including natural language processing, computer vision, recommendation systems, and more.' },

        { question: 'How can AI benefit my business?', answer: 'AI can help your business streamline operations, improve customer service, make data-driven decisions, and gain a competitive edge in today\'s market.' },
        
        { question: 'Do you offer AI consulting services?', answer: 'Yes, we offer AI consulting services to help businesses assess their AI needs, develop AI strategies, and implement AI solutions tailored to their specific requirements.' },
        
        { question: 'What industries do you serve?', answer: 'We work with clients across various industries, including healthcare, finance, e-commerce, manufacturing, and more, to provide AI solutions that address industry-specific challenges.' },
        
        { question: 'How do I get started with your AI services?', answer: 'Getting started with our AI services is easy. Simply contact us to discuss your project, and our team will work with you to identify the best AI solutions for your needs and goals.' }
        // ... more FAQs
    ]} />
      <AlternatingGridComponent
          items={[
            { type: 'image', imageUrl: '/assets/abstract-1.jpg' },
            { 
              type: 'text', 
              title: 'Blog', 
              rowClass: '1', 
              buttonText: 'Read More', 
              onButtonClick: () => router.push('/blog')
            },
            { 
              type: 'text', 
              title: 'Projects', 
              rowClass: '2', 
              buttonText: 'Read More', 
              onButtonClick: () => router.push('/projects')
            },
            { type: 'image', imageUrl: '/assets/abstract-2.jpg' },
            // ... more items
          ]}
        />


          <Hero
            background="assets/abstract-3.jpg" // Define the URL for the background
            title="what are you automating today?"
            
            
          />

        <SectionContainerMedia
          leftColumnContent={{
            h1Text: 'Left Column Heading 1',
            h3Text: 'Left Column Subheading 1',
          }}
          rightColumnContent={{
            mediaUrl: 'assets/abstract-4.jpg', // Define the URL for the media
          }}
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

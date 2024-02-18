// Import statements should be reordered as per linting rules
import React from 'react';
import { useRouter } from 'next/router';
import { CaseStudyContainer } from '@src/components/features/CaseStudyContainer';

const CaseStudyPage: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;

  let caseStudyContent;

  // Render case study content based on the value of id
  switch (id) {
    case '1':
      caseStudyContent = (
        <CaseStudyContainer
          title="Enhancing E-commerce Personalization with Machine Learning"
          rows={[
            {
              title: "Client Industry",
              items: ["E-commerce"]
            },
            {
              title: "Challenges",
              items: [
                "Improving user engagement and conversion rates",
                "Enhancing product recommendations",
                "Optimizing the customer shopping experience"
              ]
            },
            {
              title: "Solution",
              items: [
                "Implemented a recommendation engine powered by machine learning algorithms",
                "Personalized product suggestions based on user behavior and preferences",
                "Utilized predictive analytics to anticipate customer needs"
              ]
            },
            {
              title: "Results",
              items: [
                "Increased sales by [X]% within [timeframe]",
                "Higher customer satisfaction as evidenced by [specific metric or feedback]",
                "Improved retention rates with [percentage increase]"
              ]
            }
          ]}
        />
      );
      break;
    case '2':
      caseStudyContent = (
        <CaseStudyContainer
          title="Case Study 2: Building Scalable Web Applications with Python and React"
          rows={[
            // Add rows for Case Study 2 as needed
          ]}
        />
      );
      break;
    case '3':
      caseStudyContent = (
        <CaseStudyContainer
          title="Case Study 3: Optimizing Server-Side Performance with Advanced Backend Solutions"
          rows={[
            // Add rows for Case Study 3 as needed
          ]}
        />
      );
      break;
    // Add more case studies as needed
    default:
      // Render default content if id is not specified or invalid
      caseStudyContent = (
        <div>
          <h2>Case Study Not Found</h2>
          <p>The requested case study could not be found.</p>
        </div>
      );
  }

  return (
    <>
      {caseStudyContent}
    </>
  );
};

export default CaseStudyPage;

//sectionContainer.tsx

import React from 'react';
import styles from './SectionContainer.module.css';

interface SectionContainerProps {
  leftColumnContent: {
    h1Text: string;
    h3Text: string;
  };
  rightColumnContent: {
    h1Text: string;
    pText: string;
    buttonText: string;
  };
}

const SectionContainer = ({
  leftColumnContent,
  rightColumnContent,
}: SectionContainerProps) => {
  return (
    <div className={`${styles.sectionContainer}`}>
      <div className={`${styles.leftColumn}`}>
        <h1 className={`${styles.H1} section-container-left-h1`}>{leftColumnContent.h1Text}</h1>
        <h3 className={`${styles.H3}`}>{leftColumnContent.h3Text}</h3>
        {/* Add additional content or styling as needed based on the Figma design */}
      </div>
      <div className={`${styles.rightColumn}`}>
        <h1 className={`${styles.H1} section-container-right-h1`}>{rightColumnContent.h1Text}</h1>
        <p className={`${styles.extraText}`}>{rightColumnContent.pText}</p>
        <button className={`${styles.btn} section-container-button`}>{rightColumnContent.buttonText}</button>
        {/* Add additional content or styling as needed based on the Figma design */}
      </div>
    </div>
  );
};

export default SectionContainer;

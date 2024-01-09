// SectionContainerMedia.tsx

import React from 'react';
import styles from './SectionContainerMedia.module.css';

interface SectionContainerMediaProps {
  leftColumnContent: {
    h1Text: string;
    h3Text: string;
  };
  rightColumnContent: {
    mediaUrl: string; // URL for the media (image or video)
  };
}

const SectionContainerMedia = ({
  leftColumnContent,
  rightColumnContent,
}: SectionContainerMediaProps) => {
  return (
    <div className={`${styles.sectionContainer}`}>
      <div className={`${styles.leftColumn}`}>
        <h1 className={`${styles.H1} section-container-left-h1`}>{leftColumnContent.h1Text}</h1>
        <h3 className={`${styles.H3}`}>{leftColumnContent.h3Text}</h3>
        {/* Add additional content or styling as needed based on the Figma design */}
      </div>
      <div className={`${styles.rightColumn}`}>
        {rightColumnContent.mediaUrl && (
          <img src={rightColumnContent.mediaUrl} alt="Media" />
        )}
        {/* Add additional content or styling as needed based on the Figma design */}
      </div>
    </div>
  );
};

export default SectionContainerMedia;

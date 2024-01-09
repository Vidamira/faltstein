// SectionText.tsx

import React from 'react';
import styles from './SectionText.module.css';

interface SectionTextProps {
  title: string;
  text: string;
}

const SectionText: React.FC<SectionTextProps> = ({ title, text }) => {
  return (
    <div className={styles.sectionContainer}>
      <div className={styles.titleContainer}>
        <h1>{title}</h1>
      </div>
      <div className={styles.textContainer}>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default SectionText;

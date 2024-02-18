// CaseStudyContainer.tsx

import React from 'react';
import styles from './CaseStudyContainer.module.css';

interface CaseStudyContainerProps {
  title: string;
  rows: { title: string; items: string[] }[];
}

const CaseStudyContainer: React.FC<CaseStudyContainerProps> = ({ title, rows }) => (
  <div className={styles.caseStudyContainer}>
    <h2 className={styles.title}>{title}</h2>
    <div className={styles.content}>
      {/* First row */}
      <div className={styles.row}>
        <div className={styles.column}>
          <h3>{rows[0].title}</h3>
        </div>
        <div className={styles.column}>
          <ul>
            {rows[0].items.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* Second row with reversed columns */}
      <div className={`${styles.row} ${styles.reverse}`}>
        <div className={styles.column}>
          <h3>{rows[1].title}</h3>
        </div>
        <div className={styles.column}>
          <ul>
            {rows[1].items.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* Third row */}
      <div className={styles.row}>
        <div className={styles.column}>
          <h3>{rows[2].title}</h3>
        </div>
        <div className={styles.column}>
          <ul>
            {rows[2].items.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </div>
);

export default CaseStudyContainer;

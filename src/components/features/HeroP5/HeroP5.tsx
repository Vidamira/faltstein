import React from 'react';
import styles from './HeroP5.module.css';

interface HeroP5Props {
  background: string; // URL to the p5.js sketch
  title: string;
  subtitle: string;
  buttonText: string;
  onClick: () => void;
}

const HeroP5 = ({ background, title, subtitle, buttonText, onClick }: HeroP5Props) => {
  return (
    <div className={styles.heroContainer}>
      <iframe src={background} title="p5.js sketch" className={styles.p5Sketch} />
      <div className={styles.contentContainer}>
        <h1 className={styles.heroTitle}>{title}</h1>
        <h3 className={styles.heroSubtitle}>{subtitle}</h3>
        <button className={styles.heroButton} onClick={onClick}>
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default HeroP5;

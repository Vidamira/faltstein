// Hero.tsx

import React from 'react';
import styles from './Hero.module.css';

interface HeroProps {
  background: string; // Relative path to the background image
  title: string;
  subtitle: string;
  buttonText: string;
  onClick: () => void;
}

const Hero = ({ background, title, subtitle, buttonText, onClick }: HeroProps) => {
  return (
    <div className={styles.heroContainer}>
      <img src={background} alt="Background" className={styles.backgroundImage} />
      <div className={styles.overlay}></div>
      <div className={styles.contentContainer}>
        <h1 className={styles.heroTitle}>{title}</h1>
        <h3 className={styles.heroSubtitle}>{subtitle}</h3>
        <button
          className={styles.heroButton}
          onClick={onClick}
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default Hero;

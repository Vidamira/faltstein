import React from 'react';
import styles from './HeroVid.module.css';

interface HeroProps {
  videoSource: string;
  title: string;
  subtitle: string;
}

const HeroVid: React.FC<HeroProps> = ({ videoSource, title, subtitle }) => (
  <div className={styles.hero}>
    <video autoPlay loop muted className={styles['hero-video']}>
      <source src={videoSource} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
    <div className={styles['hero-content']}>
      <h1>{title}</h1>
      <p>{subtitle}</p>
    </div>
  </div>
);

export default HeroVid;

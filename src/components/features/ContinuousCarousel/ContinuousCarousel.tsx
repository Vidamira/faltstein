import React from 'react';
import styles from './ContinuousCarousel.module.css';

interface CarouselItemProps {
  fileName: string;
}

const CarouselItem: React.FC<CarouselItemProps> = ({ fileName }) => (
  <div className={styles.carouselItem}>
    <img src={`/assets/techstack-logo-icons/${fileName}`} alt="Carousel Item" className={styles.carouselImage} />
  </div>
);

interface ContinuousCarouselProps {
  folderPath: string;
}

const ContinuousCarousel: React.FC<ContinuousCarouselProps> = ({ folderPath }) => {
  // Manually specify the SVG filenames
  const svgFileNames = [
    'figma-icon.svg',
    'firebase-icon.svg',
    'java-icon.svg',
    'javascript-icon.svg',
    'mongodb-icon.svg',
    'nodejs-icon.svg',
    'numpy-icon.svg',
    'P5.js_icon.svg',
    'Pandas_icon.svg',
    'python-icon.svg',
    'pytorch-icon.svg',
    'qwik-icon-seeklogo.svg',
    'reactjs-icon.svg',
    'tensorflow-icon.svg',
    'typescriptlang-icon.svg',
    'w3_css-icon.svg',
    'w3_html5-icon.svg',
    // Add more filenames as needed
  ];

  return (
    <div className={styles.carouselContainer}>
      <div className={styles.carouselTrack}>
        {svgFileNames.map((fileName, index) => (
          <CarouselItem key={index} fileName={fileName} />
        ))}
        {/* Duplicate items for continuous scrolling */}
        {svgFileNames.map((fileName, index) => (
          <CarouselItem key={index + svgFileNames.length} fileName={fileName} />
        ))}
         {/* Duplicate items for continuous scrolling */}
         {svgFileNames.map((fileName, index) => (
          <CarouselItem key={index + svgFileNames.length} fileName={fileName} />
        ))}
      </div>
    </div>
  );
};

export default ContinuousCarousel;

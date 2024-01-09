// AlternatingGridComponent.tsx

import React from 'react';
import styles from './AlternatingGridComponent.module.css';

interface GridItemProps {
    type: 'image' | 'text';
    imageUrl?: string;
    title?: string;
    buttonText?: string;
    onButtonClick?: () => void;
    rowClass?: string; // Add rowClass to the interface
  }

  const GridItem: React.FC<GridItemProps> = ({ type, imageUrl, title, buttonText, onButtonClick }) => {
    console.log('Type:', type);
    console.log('Image URL:', imageUrl); // Add this line for debugging
  
    if (type === 'image') {
      return (
        <div className={styles.gridItem}>
          {imageUrl && <div className={styles.imageCard} style={{ backgroundImage: `url(${imageUrl})` }} />}
        </div>
      );
    } else if (type === 'text' && title && buttonText && onButtonClick) {
      return (
        <div className={`${styles.gridItem} ${styles.textCard}`}>
          <h2>{title}</h2>
          <button onClick={onButtonClick}>{buttonText}</button>
        </div>
      );
    } else {
      return null;
    }
  };

interface AlternatingGridComponentProps {
  items: GridItemProps[];
}

const AlternatingGridComponent: React.FC<AlternatingGridComponentProps> = ({ items }) => {
  return (
    <div className={`${styles.gridContainer} ${styles.pagePadding}`}>
      {items.map((item, index) => {
        // Apply alternating row classes here based on the index
        const rowClass = index % 2 === 0 ? styles.row1 : styles.row2;

        return (
          <GridItem key={index} {...item} rowClass={rowClass} />
        );
      })}
    </div>
  );
};





export default AlternatingGridComponent;

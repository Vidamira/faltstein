import React from 'react';
import styles from './CardsComponent.module.css';

interface CardProps {
  title: string;
  text: string;
}

const Card: React.FC<CardProps> = ({ title, text }) => (
  <div className={styles.card}>
    <h2>{title}</h2>
    <p>{text}</p>
  </div>
);

interface CardsComponentProps {
  cardsData?: CardProps[];
  heading?: string;
  description?: string;
  containerClassName?: string; // Add containerClassName property
}

const defaultCardsData: CardProps[] = [
  { title: 'Default Title 1', text: 'Default text for card 1.' },
  { title: 'Default Title 2', text: 'Default text for card 2.' },
  { title: 'Default Title 3', text: 'Default text for card 3.' }
];

const CardsComponent: React.FC<CardsComponentProps> = ({ cardsData = defaultCardsData, heading, description, containerClassName }) => (
  <div className={styles.cardsContainer}>
    {heading && <h1>{heading}</h1>}
    {description && <p>{description}</p>}
    <div className={containerClassName || styles.cardContainer}> {/* Use containerClassName or default to styles.cardContainer */}
      {cardsData.map((card, index) => (
        <Card key={index} title={card.title} text={card.text} />
      ))}
    </div>
  </div>
);

export default CardsComponent;

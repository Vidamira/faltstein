import React from 'react';
import styles from './CardsComponent.module.css';

interface CardProps {
  title: string;
  text: string;
  imageUrl: string;
  linkUrl: string;
}

const Card: React.FC<CardProps> = ({ title, text, imageUrl, linkUrl }) => (
  <div className={styles.card}>
    <div className={styles.imageWrapper}>
      <img src={imageUrl} alt={title} className={styles.cardImage} />
    </div>
    <div className={styles.circle}></div>
    <h2>{title}</h2>
    <p>{text}</p>
    <a href={linkUrl} className={styles.cardLink}></a>
  </div>
);

interface CardsComponentProps {
  cardsData?: CardProps[];
  heading?: string;
  description?: string;
  containerClassName?: string;
}

const defaultCardsData: CardProps[] = [
  {
    title: 'Default Title 1',
    text: 'Default text for card 1.',
    imageUrl: 'URL_FOR_IMAGE_1',
    linkUrl: 'URL_FOR_LINK_1',
  },
  {
    title: 'Default Title 2',
    text: 'Default text for card 2.',
    imageUrl: 'URL_FOR_IMAGE_2',
    linkUrl: 'URL_FOR_LINK_2',
  },
  {
    title: 'Default Title 3',
    text: 'Default text for card 3.',
    imageUrl: 'URL_FOR_IMAGE_3',
    linkUrl: 'URL_FOR_LINK_3',
  },
];

const CardsComponent: React.FC<CardsComponentProps> = ({
  cardsData = defaultCardsData,
  heading,
  description,
  containerClassName,
}) => (
  <div className={styles.cardsContainer}>
    {heading && <h1>{heading}</h1>}
    {description && <p>{description}</p>}
    <div className={containerClassName || styles.cardContainer}>
      {cardsData.map((card, index) => (
        <Card
          key={index}
          title={card.title}
          text={card.text}
          imageUrl={card.imageUrl}
          linkUrl={card.linkUrl}
        />
      ))}
    </div>
  </div>
);

export default CardsComponent;

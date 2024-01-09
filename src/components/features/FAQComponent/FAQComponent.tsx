// FAQComponent.tsx

import React, { useState } from 'react';
import styles from './FAQComponent.module.css';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <div className={styles.faqItem}>
      <button className={styles.question} onClick={toggleOpen}>
        {question}
        <FontAwesomeIcon icon={isOpen ? faChevronUp : faChevronDown} />
      </button>
      {isOpen && <div className={styles.answer}>{answer}</div>}
    </div>
  );
};

interface FAQComponentProps {
  faqsData: FAQItemProps[];
}

const FAQComponent: React.FC<FAQComponentProps> = ({ faqsData }) => (
  <div className={styles.faqContentContainer}>
    <div className={styles.faqContainer}>
      <h1 className={styles.faqTitle}>FAQ</h1>
      <p className={styles.faqSubtitle}>How can we help?</p> {/* Add this line */}
      {faqsData.map((faq, index) => (
        <FAQItem key={index} question={faq.question} answer={faq.answer} />
      ))}
    </div>
  </div>
);

export default FAQComponent;

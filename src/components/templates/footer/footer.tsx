import { useTranslation } from 'next-i18next';
import Link from 'next/link';

import { Container } from '@src/components/shared/container';
import styles from './footer.module.css'; // Import the CSS styles

export const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className={styles.footer}>
      <Container className={styles.footerContainer}>
        <div className={styles.footerContent}>
          <div className={styles.leftContent}>
            <h2 className={styles.h2}>{t('footer.aboutUs')}</h2>
            <div className={styles.maxWidth}>{t('footer.description')}</div>
          </div>
          <div className={styles.rightContent}>
            <Link
              href="https://www.example.com/link1"
              rel="noopener noreferrer"
              target="_blank"
              className={styles.link}
            >
              Link 1
            </Link>
            <Link
              href="https://www.example.com/link2"
              rel="noopener noreferrer"
              target="_blank"
              className={styles.link}
            >
              Link 2
            </Link>
            <Link
              href="https://www.example.com/link3"
              rel="noopener noreferrer"
              target="_blank"
              className={styles.link}
            >
              Link 3
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
};

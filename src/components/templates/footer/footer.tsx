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
            <h2 className={styles.h2}>{t('about us')}</h2>
            <div className={styles.maxWidth}>{t('Berlin based tech agency.')}</div>
          </div>
          <div className={styles.rightContent}>
            <Link href="/imprint" className={styles.link}>
              {t('imprint')}
            </Link>
            <Link href="/terms" className={styles.link}>
              {t('terms & conditions')}
            </Link>
            <Link href="/contact" className={styles.link}>
              {t('contact')}
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
};

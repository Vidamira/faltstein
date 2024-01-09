// header.tsx
import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { LanguageSelector } from '@src/components/features/language-selector';
import { Container } from '@src/components/shared/container';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';

import styles from './header.module.css'; // Import the CSS module

export const Header = () => {
  const { t } = useTranslation();
  const router = useRouter();
  const [isDarkMode, setIsDarkMode] = useState(false); // State to track dark mode

  // Function to toggle dark mode
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    // You can implement switching between light and dark mode here
  };

  useEffect(() => {
    // You can apply dark mode styles to the entire app based on 'isDarkMode' state here
    if (isDarkMode) {
      document.documentElement.classList.add('dark'); // Apply dark mode styles from globals.css
    } else {
      document.documentElement.classList.remove('dark'); // Remove dark mode styles
    }
  }, [isDarkMode]);

  return (
    <header className={styles.header}> {/* Use the CSS module class */}
      <nav>
        <Container className={styles.container}> {/* Use the CSS module class */}
          {/* Home Link */}
          <div className={styles.linksLeft}> {/* Use the CSS module class */}
            <Link
              href="/"
              title={t('common.homepage')}
              className={router.pathname === '/hello' ? styles.activeLink : styles.link}>
              Hello
            </Link>
          </div>

          {/* Light/Dark mode toggle */}
          <div className={styles.linksRight}>
            {/* Add other middle links here */}
            <Link
              href="/agency"
              className={router.pathname === '/agency' ? styles.activeLink : styles.link}>
              Agency
            </Link>

            <Link
              href="/projects"
              className={router.pathname === '/projects' ? styles.activeLink : styles.link}>
              Projects
            </Link>

            <Link
              href="/blog"
              className={router.pathname === '/blog' ? styles.activeLink : styles.link}>
              Blog
            </Link>

            <button
              onClick={toggleDarkMode}
              className={styles.darkModeButton}
              style={{
                backgroundColor: isDarkMode ? 'var(--secondary-color)' : 'var(--background-color)',
                color: 'var(--text-color)',
              }}
            >
              {isDarkMode ? (
                <FontAwesomeIcon icon={faMoon} className={styles.darkModeButtonIcon} />
              ) : (
                <FontAwesomeIcon icon={faSun} className={styles.darkModeButtonIcon} />
              )}
            </button>

            <div className={styles.languageStyle}>
              <LanguageSelector />
            </div>
          </div>
        </Container>
      </nav>
    </header>
  );
};

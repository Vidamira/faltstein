// ArticleLabel.tsx

import { HTMLProps, ReactNode } from 'react';
import styles from './Article.module.css'; // Import the module CSS

interface ArticleLabelProps extends HTMLProps<HTMLSpanElement> {
  children: ReactNode;
}

export const ArticleLabel = ({ children, className, ...props }: ArticleLabelProps) => {
  return (
    <span className={`${styles.label} ${className}`} {...props}>
      {children}
    </span>
  );
};

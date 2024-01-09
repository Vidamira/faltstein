// ArticleTile.tsx

import { useContentfulInspectorMode } from '@contentful/live-preview/react';
import Link from 'next/link';
import { HTMLProps } from 'react';
import styles from './Article.module.css'; // Import the module CSS
import { ArticleAuthor } from './ArticleAuthor';
import { FormatDate } from '@src/components/shared/format-date';
import { PageBlogPostFieldsFragment } from '@src/lib/__generated/sdk';
import { CtfImage } from '@src/components/features/contentful';

interface ArticleTileProps extends HTMLProps<HTMLDivElement> {
  article: PageBlogPostFieldsFragment;
}

export const ArticleTile = ({ article, className }: ArticleTileProps) => {
  const { title, publishedDate } = article;
  const inspectorProps = useContentfulInspectorMode({ entryId: article.sys.id });

  return (
    <Link href={`/${article.slug}`} legacyBehavior>
      <div className={`${styles.tileContainer} ${className}`}>
        {article.featuredImage && (
          <div className={styles.tileImage} {...inspectorProps({ fieldId: 'featuredImage' })}>
            <CtfImage
              nextImageProps={{ className: styles.tileImage }}
              {...article.featuredImage}
            />
          </div>
        )}
        <div className={styles.tileContent}>
          {title && (
            <p className={styles.tileTitle} {...inspectorProps({ fieldId: 'title' })}>
              {title}
            </p>
          )}

          <div className={styles.tileMeta}>
            <ArticleAuthor article={article} />
            <div className={styles.tilePublishedDate} {...inspectorProps({ fieldId: 'publishedDate' })}>
              <FormatDate date={publishedDate} />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

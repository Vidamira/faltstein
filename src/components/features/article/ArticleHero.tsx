// ArticleHero.tsx

import { useContentfulInspectorMode } from '@contentful/live-preview/react';
import { useTranslation } from 'next-i18next';
import { PageBlogPostFieldsFragment } from '@src/lib/__generated/sdk';
import styles from './Article.module.css'; // Import the module CSS
import { ArticleAuthor } from './ArticleAuthor';
import { ArticleLabel } from './ArticleLabel';
import { FormatDate } from '@src/components/shared/format-date';
import { CtfImage } from '@src/components/features/contentful';

interface ArticleHeroProps {
  article: PageBlogPostFieldsFragment;
  isFeatured?: boolean;
  isReversedLayout?: boolean;
}

export const ArticleHero = ({
  article,
  isFeatured,
  isReversedLayout = false,
}: ArticleHeroProps) => {
  const { t } = useTranslation();
  const inspectorProps = useContentfulInspectorMode({ entryId: article.sys.id });

  const { title, shortDescription, publishedDate } = article;

  return (
    <div
      className={`${styles.heroContainer} ${
        isReversedLayout ? styles.heroReversed : ''
      }`}
    >
      <div className={styles.imageContainer} {...inspectorProps({ fieldId: 'featuredImage' })}>
        {article.featuredImage && (
          <CtfImage
            nextImageProps={{ className: styles.featuredImage }}
            {...article.featuredImage}
          />
        )}
      </div>

      <div className={styles.textContainer}>
        <div className={styles.authorLabelContainer}>
          <ArticleAuthor article={article} />
          {isFeatured && (
            <ArticleLabel className={styles.featuredLabel}>
              {t('article.featured')}
            </ArticleLabel>
          )}
          <div className={styles.publishedDate} {...inspectorProps({ fieldId: 'publishedDate' })}>
            <FormatDate date={publishedDate} />
          </div>
        </div>
        <h1 className={styles.title} {...inspectorProps({ fieldId: 'title' })}>
          {title}
        </h1>
        {shortDescription && (
          <p className={styles.shortDescription} {...inspectorProps({ fieldId: 'shortDescription' })}>
            {shortDescription}
          </p>
        )}
        <div className={styles.publishedDateMobile} {...inspectorProps({ fieldId: 'publishedDate' })}>
          <FormatDate date={publishedDate} />
        </div>
      </div>
    </div>
  );
};

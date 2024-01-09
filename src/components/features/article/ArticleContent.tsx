// ArticleContent.tsx

import { useContentfulInspectorMode } from '@contentful/live-preview/react';
import { PageBlogPostFieldsFragment } from '@src/lib/__generated/sdk';
import styles from './Article.module.css'; // Import the module CSS
import { CtfRichText } from '@src/components/features/contentful';

interface ArticleContentProps {
  article: PageBlogPostFieldsFragment;
}

export const ArticleContent = ({ article }: ArticleContentProps) => {
  const { content } = article;
  const inspectorProps = useContentfulInspectorMode({ entryId: article.sys.id });

  return (
    <div className={styles.contentContainer} {...inspectorProps({ fieldId: 'content' })}>
      <CtfRichText json={content?.json} links={content?.links} />
    </div>
  );
};

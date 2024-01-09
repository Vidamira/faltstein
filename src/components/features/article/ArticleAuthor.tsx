import { useContentfulInspectorMode } from '@contentful/live-preview/react';
import { PageBlogPostFieldsFragment } from '@src/lib/__generated/sdk';
import { CtfImage } from '@src/components/features/contentful';
import styles from './Article.module.css'; // Import the module CSS

interface ArticleAuthorProps {
  article: PageBlogPostFieldsFragment;
}

export const ArticleAuthor = ({ article }: ArticleAuthorProps) => {
  const { author } = article;
  const inspectorProps = useContentfulInspectorMode({ entryId: author?.sys.id });

  return (
    <div className={styles.authorContainer}>
      <div className={styles.avatarContainer}>
        {author?.avatar && (
          <CtfImage
            nextImageProps={{
              width: 28,
              height: 28,
              sizes: undefined,
              placeholder: undefined,
            }}
            {...author.avatar}
          />
        )}
      </div>
      <span className={styles.authorName} {...inspectorProps({ fieldId: 'name' })}>
        {author?.name}
      </span>
    </div>
  );
};

// ArticleImage.tsx

import { useContentfulInspectorMode } from '@contentful/live-preview/react';
import { ComponentRichImage } from '@src/lib/__generated/sdk';
import styles from './Article.module.css'; // Import the module CSS
import { CtfImage } from '@src/components/features/contentful';

interface ArticleImageProps {
  image: ComponentRichImage;
}

export const ArticleImage = ({ image }: ArticleImageProps) => {
  const inspectorProps = useContentfulInspectorMode({ entryId: image.sys.id });

  return image.image ? (
    <figure className={styles.imageFigure}>
      <div className={styles.imageContainer} {...inspectorProps({ fieldId: 'image' })}>
        <CtfImage
          nextImageProps={{ className: styles.image }}
          {...image.image}
        />
      </div>
      {image.caption && (
        <figcaption className={styles.imageCaption} {...inspectorProps({ fieldId: 'caption' })}>
          {image.caption}
        </figcaption>
      )}
    </figure>
  ) : null;
};

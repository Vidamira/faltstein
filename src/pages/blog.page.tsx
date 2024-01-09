import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { useTranslation } from 'next-i18next';

import { getServerSideTranslations } from './utils/get-serverside-translations';

import { SeoFields } from '@src/components/features/seo';
import { Container } from '@src/components/shared/container';
import { client, previewClient } from '@src/lib/client';
import { revalidateDuration } from '@src/pages/utils/constants';
import { ArticleHero, ArticleTileGrid } from '@src/components/features/article';
import Link from 'next/link';
import { PageBlogPostOrder } from '@src/lib/__generated/sdk';
import { Hero } from '@src/components/features/hero';


const BlogPage = (props: InferGetStaticPropsType<typeof getStaticProps>) => {
  const { t } = useTranslation();
  const { page, posts } = props;

  if (!page || !posts) {
    return null; // Handle the case when data is not available
  }

  return (
    <>
      {page.seoFields && <SeoFields {...page.seoFields} />}
      <Container style={{ padding: 'var(--page-padding)' }}>
      
        <Link href={`/${page.featuredBlogPost.slug}`} legacyBehavior>
          <ArticleHero article={page.featuredBlogPost} />
        </Link>
      </Container>

      <Container style={{ padding: 'var(--page-padding)' }}>
        <h2 className="mb-4 md:mb-6">{t('landingPage.latestArticles')}</h2>
        <ArticleTileGrid className="md:grid-cols-2 lg:grid-cols-3" articles={posts} />
      </Container>
      
      <Hero
          background={"/line-bg.svg"} 
          title="BLOG"
          subtitle="Discover amazing content here."
          buttonText="Learn More"
          onClick={() => {
            // Handle button click event here
          }}
        />

    </>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale, draftMode: preview }) => {
  try {
    const gqlClient = preview ? previewClient : client;

    const landingPageData = await gqlClient.pageLanding({ locale, preview });
    const page = landingPageData.pageLandingCollection?.items[0];

    const blogPostsData = await gqlClient.pageBlogPostCollection({
      limit: 6,
      locale,
      order: PageBlogPostOrder.PublishedDateDesc,
      where: {
        slug_not: page?.featuredBlogPost?.slug,
      },
      preview,
    });
    const posts = blogPostsData.pageBlogPostCollection?.items;

    if (!page) {
      return {
        revalidate: revalidateDuration,
        notFound: true,
      };
    }

    return {
      revalidate: revalidateDuration,
      props: {
        previewActive: !!preview,
        ...(await getServerSideTranslations(locale)),
        page,
        posts,
      },
    };
  } catch {
    return {
      revalidate: revalidateDuration,
      notFound: true,
    };
  }
};

export default BlogPage;

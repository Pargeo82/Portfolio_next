import Head from 'next/head';
import Link from 'next/link';
import { getAllArticles } from '../../src/utils/mdx';
import { Typography, Stack, Box } from '@mui/material';

export default function BlogPage({ posts }) {
  return (
    <>
      <Head>
        <title>My Blog</title>
      </Head>
      <Box>
        {posts.map((frontMatter) => {
          return (
            <Link
              href={`/blog/${frontMatter.slug}`}
              passHref
              key={frontMatter.slug}
            >
              <Stack>
                <Typography variant='h2'>{frontMatter.title}</Typography>
                <Typography variant='body1'>{frontMatter.excerpt}</Typography>
              </Stack>
            </Link>
          );
        })}
      </Box>
    </>
  );
}

export async function getStaticProps() {
  const articles = await getAllArticles();

  articles
    .map((article) => article.data)
    .sort((a, b) => {
      if (a.data.publishedAt > b.data.publishedAt) return 1;
      if (a.data.publishedAt < b.data.publishedAt) return -1;

      return 0;
    });

  return {
    props: {
      posts: articles.reverse(),
    },
  };
}

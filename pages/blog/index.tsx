import Head from 'next/head';
import Link from 'next/link';
import { getAllArticles } from '../../src/utils/mdx';
import { Typography, Stack, Box } from '@mui/material';
import Image from 'next/image';

export default function BlogPage({ posts }) {
  return (
    <>
      <Head>
        <title>My Blog</title>
      </Head>
      <Box
        mb={8}
        minHeight={'calc(100vh - 250px)'}
      >
        {posts.map((frontmatter) => {
          return (
            <Link
              href={`/blog/${frontmatter.slug}`}
              passHref
              key={frontmatter.slug}
            >
              <Stack
                direction={{ xs: 'column', md: 'row' }}
                spacing={4}
                mb={4}
              >
                <Image
                  src={frontmatter.cover_image}
                  alt={frontmatter.title}
                  width={250}
                  height={250}
                  style={{ objectFit: 'cover', width: 'auto', height: '250px' }}
                  sizes='(min-width: 900px) 250px, calc(97.24vw - 24px)'
                />
                <Stack>
                  <Typography
                    variant='h4'
                    gutterBottom
                  >
                    {frontmatter.title}
                  </Typography>
                  {frontmatter.excerpt && (
                    <Typography
                      variant='body1'
                      gutterBottom
                    >
                      {frontmatter.excerpt}
                    </Typography>
                  )}
                  <Typography
                    variant='body1'
                    gutterBottom
                    color={'secondary.dark'}
                  >
                    {frontmatter.readingTime}
                  </Typography>
                </Stack>
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
      posts: articles,
    },
  };
}

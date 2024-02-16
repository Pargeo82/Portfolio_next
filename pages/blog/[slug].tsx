import { getArticleFromSlug, getSlug } from '../../src/utils/mdx';
import { Typography, Box, Grid, Button } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Image from 'next/image';
import MuiMarkdown from 'mui-markdown';
import { Highlight, themes } from 'prism-react-renderer';
import Link from 'next/link';

export const getStaticPaths = async () => {
  const paths = (await getSlug()).map((slug) => ({ params: { slug } }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const { slug } = params;
  const { content, frontmatter } = await getArticleFromSlug(slug);

  return {
    props: {
      post: {
        content,
        frontmatter,
      },
    },
  };
};

const Blog = ({ post }) => {
  const { content, frontmatter } = post;

  return (
    <Box minHeight={'calc(100vh - 250px)'}>
      <Grid
        container
        spacing={4}
        mb={4}
      >
        <Grid
          item
          xs={12}
          md={7}
        >
          <Image
            src={frontmatter.image}
            alt={frontmatter.title}
            width={500}
            height={500}
            style={{ objectFit: 'cover', height: '100%', width: '100%' }}
            sizes='(min-width: 1280px) 659px, (min-width: 900px) calc(48.61vw + 47px), calc(97.24vw - 24px)'
          />
        </Grid>
        <Grid
          item
          xs={12}
          md={5}
        >
          <Typography
            variant='h1'
            sx={{ fontSize: '2.7rem !important' }}
            gutterBottom
          >
            {frontmatter.title}
          </Typography>
          {frontmatter.excerpt && (
            <Typography
              variant='h6'
              gutterBottom
              mb={4}
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
        </Grid>
      </Grid>
      <Box mb={8}>
        <MuiMarkdown
          Highlight={Highlight}
          themes={themes}
          prismTheme={themes.duotoneDark}
        >
          {content}
        </MuiMarkdown>
      </Box>
      <Link href={'/blog'}>
        <Button
          variant='outlined'
          size='large'
          sx={{ mb: 8 }}
        >
          <ArrowBackIcon sx={{ mr: 2 }} />
          Back to Blogs
        </Button>
      </Link>
    </Box>
  );
};

export default Blog;

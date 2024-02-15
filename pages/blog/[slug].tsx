import { getArticleFromSlug, getSlug } from '../../src/utils/mdx';
import { Typography, Box } from '@mui/material';
import Image from 'next/image';
import MuiMarkdown from 'mui-markdown';

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
    <>
      <Box maxWidth={500}>
        <Image
          src={frontmatter.image}
          alt={frontmatter.title}
          width={1275}
          height={670}
          style={{ objectFit: 'cover', height: '100%', width: 'auto' }}
          sizes='80vw'
        />
      </Box>

      <Typography
        variant='h1'
        sx={{ fontSize: '2.5rem !important' }}
      >
        {frontmatter.title}
      </Typography>
      <Typography
        variant='h6'
        gutterBottom
        mb={4}
      >
        {frontmatter.excerpt}
      </Typography>
      <Box mb={8}>
        <MuiMarkdown>{content}</MuiMarkdown>
      </Box>
    </>
  );
};

export default Blog;

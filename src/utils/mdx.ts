import path from 'path';
import fs from 'fs';
import matter from 'gray-matter';
import readingTime from 'reading-time';
import { sync } from 'glob';

const articlesPath = path.join(process.cwd(), 'src/data/articles');

export const getSlug = async () => {
  const paths = sync(`${articlesPath}/*.mdx`);

  return paths.map((path) => {
    // holds the paths to the directory of the article
    const pathContent = path.split('/');
    const fileName = pathContent[pathContent.length - 1];
    const [slug, _extension] = fileName.split('.');

    return slug;
  });
};

export const getArticleFromSlug = async (slug) => {
  const articleDir = path.join(articlesPath, `${slug}.mdx`);
  const rawMatter = fs.readFileSync(articleDir); // Read as Buffer
  const source = rawMatter.toString();
  const { content, data } = matter(source);

  return {
    content,
    frontmatter: {
      slug,
      excerpt: data.excerpt || '',
      title: data.title,
      publishedAt: data.publishedAt,
      readingTime: readingTime(source).text,
      image: data.cover_image,
      ...data,
    },
  };
};

export const getAllArticles = async () => {
  const articles = fs.readdirSync(path.join(process.cwd(), 'src/data/articles'));

  return articles.reduce((allArticles: any[], articleSlug: string) => {
    // get parsed data from mdx files in the "articles" dir
    const source = fs.readFileSync(path.join(process.cwd(), 'src/data/articles', articleSlug), 'utf-8');
    const { data } = matter(source);

    return [
      ...allArticles,
      {
        ...data,
        slug: articleSlug.replace('.mdx', ''),
        readingTime: readingTime(source).text,
      },
    ];
  }, []);
};

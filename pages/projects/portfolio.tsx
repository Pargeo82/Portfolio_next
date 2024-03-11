import Image from 'next/image';
import { Typography, Grid, Stack, Button } from '@mui/material';
import { useTheme } from '@mui/material';
import projectData, { Project } from '../../src/components/Projects/projectData';
import ProjectTechnologies from '../../src/components/technologies/ProjectTechnologies';
import { TechnoTypes } from '../../src/types/technoTypes';
import { GitHub } from '@mui/icons-material';
import portfolio1 from '../../public/projects/portfolio1.png';
import portfolio2 from '../../public/projects/portfolio2.png';
import Link from 'next/link';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Head from 'next/head';

export default function Portfolio() {
  const theme = useTheme();
  const primaryText = theme.palette.text.primary;
  const project: Project | undefined = projectData.find((project) => project.name === 'Portfolio');
  if (project) {
    project.imageArray = [portfolio1, portfolio2];
  }
  return (
    <>
      <Head>
        <title>Portfolio project | Pargeo portfolio</title>
        <meta
          name='description'
          content='Personal portfolio project'
        />
      </Head>
      <Typography
        variant='h1'
        gutterBottom
      >
        {project?.title}
      </Typography>
      <Grid
        container
        spacing={4}
        mb={8}
      >
        {project?.imageArray?.map((image, index) => {
          return (
            <Grid
              item
              xs={12}
              md={6}
              key={index}
            >
              <Image
                key={index}
                src={image}
                alt={project.name}
                width={768}
                height={400}
                style={{ objectFit: 'contain', width: '100%', height: 'auto', alignSelf: 'flex-start' }}
                sizes='(min-width: 1280px) 560px, (min-width: 900px) calc(41.67vw + 35px), calc(97.24vw - 24px)'
                placeholder='blur'
              />
            </Grid>
          );
        })}
      </Grid>
      <Typography
        variant='h4'
        gutterBottom
      >
        Technologies used:
      </Typography>
      <ProjectTechnologies
        technologies={project?.technology as TechnoTypes[]}
        sx={{ marginBottom: 8 }}
      />
      <Typography
        variant='h4'
        gutterBottom
      >
        Description:
      </Typography>
      <Typography
        variant='body1'
        mb={8}
        textAlign={'justify'}
      >
        {project?.longerDescription}
      </Typography>
      <Typography
        variant='h4'
        gutterBottom
      >
        Links:
      </Typography>
      <Stack mb={12}>
        {project?.gitUrl && (
          <Link
            href={project?.gitUrl}
            target='_blank'
            rel='noreferrer noopener'
            title='github link'
            style={{ color: primaryText }}
          >
            <GitHub sx={{ fontSize: 40 }} />
          </Link>
        )}
      </Stack>
      <Link href={'/projects'}>
        <Button
          variant='outlined'
          size='large'
          sx={{ mb: 8 }}
        >
          <ArrowBackIcon sx={{ mr: 2 }} />
          Back to Projects
        </Button>
      </Link>
    </>
  );
}

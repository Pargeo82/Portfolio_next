import Image from 'next/image';
import { Typography, Grid, Stack, Button } from '@mui/material';
import { useTheme } from '@mui/material';
import projectData, { Project } from '../../src/components/Projects/projectData';
import ProjectTechnologies from '../../src/components/technologies/ProjectTechnologies';
import { TechnoTypes } from '../../src/types/technoTypes';
import gt2 from '../../public/projects/gt2.png';
import gt3 from '../../public/projects/gt3.png';
import Link from 'next/link';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Head from 'next/head';

export default function Gt() {
  const theme = useTheme();
  const primaryText = theme.palette.text.primary;
  const project: Project | undefined = projectData.find((project) => project.name === 'GT');
  if (project) {
    project.imageArray = [gt2, gt3];
  }
  return (
    <>
      <Head>
        <title>Gt project | Pargeo portfolio</title>
        <meta
          name='description'
          content='Local bar online menu project'
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
              display='flex'
              alignItems='flex-start'
            >
              <Image
                key={index}
                src={image}
                alt={project.name}
                width={560}
                height={727}
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
        {project?.url && (
          <Link
            href={project?.url}
            target='_blank'
            rel='noreferrer noopener'
            style={{ color: primaryText }}
          >
            <Typography
              variant='body1'
              gutterBottom
              color={'primary'}
            >
              {project.linkTitle}
            </Typography>
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

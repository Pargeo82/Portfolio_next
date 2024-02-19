import Image from 'next/image';
import { Typography, Grid, Stack, Button } from '@mui/material';
import { useTheme } from '@mui/material';
import projectData, { Project } from '../../src/components/Projects/projectData';
import ProjectTechnologies from '../../src/components/technologies/ProjectTechnologies';
import { TechnoTypes } from '../../src/types/technoTypes';
import { GitHub } from '@mui/icons-material';
import mai2 from '../../public/projects/mai2.png';
import mai3 from '../../public/projects/mai3.png';
import Link from 'next/link';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export default function Mai() {
  const theme = useTheme();
  const primaryText = theme.palette.text.primary;
  const project: Project | undefined = projectData.find((project) => project.name === 'Mai beauty salon');
  if (project) {
    project.imageArray = [mai2, mai3];
  }
  return (
    <>
      <Typography
        variant='h2'
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
              alignItems='flex-start'
              sx={{ display: 'flex' }}
            >
              <Image
                key={index}
                src={image}
                alt={project.name}
                width={560}
                height={280}
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

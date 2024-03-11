import { Typography, Grid } from '@mui/material';
import ProjectCard from '../../src/components/Projects/ProjectCard';
import projectData from '../../src/components/Projects/projectData';
import Head from 'next/head';

export default function ProjectsPage() {
  const projectElements = projectData.map((project) => {
    return (
      <ProjectCard
        key={project.id}
        image={project.image}
        name={project.name}
        title={project.title}
        description={project.description}
        technology={project.technology}
        link={project.link}
        outsideLink={project.outsideLink}
        sx={{ minHeight: '400px' }}
      />
    );
  });
  return (
    <>
      <Head>
        <title>Projects | Pargeo portfolio</title>
      </Head>
      <Typography
        variant='h1'
        gutterBottom
      >
        Projects
      </Typography>
      <Grid
        container
        width={'100%'}
        mb={{ xs: 4, md: 8 }}
        columnSpacing={{ xs: 0, md: 4 }}
        rowSpacing={4}
      >
        {projectElements}
      </Grid>
    </>
  );
}

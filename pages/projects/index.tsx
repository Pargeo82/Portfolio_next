import { Typography, Grid } from '@mui/material';
import ProjectCard from '../../components/Projects/ProjectCard';
import projectData from '../../components/Projects/projectData';

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
      <Typography
        variant='h2'
        gutterBottom
      >
        Projects
      </Typography>
      <Grid
        container
        width={'100%'}
        mb={8}
        spacing={4}
      >
        {projectElements}
      </Grid>
      <Grid
        container
        width={'100%'}
        mb={16}
        spacing={4}
      >
        <ProjectCard
          image={'projects/blog.jpg'}
          name={'Blog'}
          title={'Blog'}
          description={'Blogging about my coding journey and roadblocks I encounter'}
          link={'https://pargeo.hashnode.dev/'}
          outsideLink
          sx={{ width: '100%' }}
        />
      </Grid>
    </>
  );
}

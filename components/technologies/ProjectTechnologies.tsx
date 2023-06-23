import Image from 'next/image';
import { Grid, Tooltip } from '@mui/material';
import { TechnoTypes } from '../../types/technoTypes';

type Props = {
  technologies: TechnoTypes[];
  xs?: number;
};

const ProjectTechnologies = ({ technologies, xs }: Props) => {
  return (
    <Grid
      container
      spacing={4}
      px={6}
    >
      {technologies.map((technology, index) => {
        return (
          <Grid
            item
            xs={xs}
            key={index}
          >
            <Tooltip
              title={technology}
              placement='top'
              arrow
              followCursor
            >
              <span>
                <Image
                  src={`/technologies/${technology}.png`}
                  alt={technology}
                  width={50}
                  height={50}
                  layout='fixed'
                />
              </span>
            </Tooltip>
          </Grid>
        );
      })}
    </Grid>
  );
};
export default ProjectTechnologies;

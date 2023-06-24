import Image from 'next/image';
import { Grid, Tooltip } from '@mui/material';
import { CSSProperties } from 'react';
import { TechnoTypes } from '../../types/technoTypes';

type Props = {
  technologies: TechnoTypes[];
  xs?: number;
  px?: number;
  spacing?: number;
  sx?: CSSProperties;
};

const ProjectTechnologies = ({ technologies, xs, px = 1, spacing = 4, sx }: Props) => {
  return (
    <Grid
      container
      spacing={spacing}
      px={px}
      sx={{ ...sx }}
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

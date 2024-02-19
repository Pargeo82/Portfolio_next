import Image from 'next/image';
import { Grid, Tooltip, useTheme, useMediaQuery } from '@mui/material';
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
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down('md'));
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
            >
              <span>
                <Image
                  src={`/technologies/${technology}.png`}
                  alt={technology}
                  width={mobile ? 45 : 50}
                  height={mobile ? 45 : 50}
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

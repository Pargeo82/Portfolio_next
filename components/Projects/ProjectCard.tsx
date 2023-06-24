import { CSSProperties } from 'react';
import Link from 'next/link';
import { Card, CardActionArea, CardMedia, Grid, Typography, alpha } from '@mui/material';
import { useTheme } from '@mui/material/styles';

import ProjectTechnologies from '../technologies/ProjectTechnologies';
import { TechnoTypes } from '../../types/technoTypes';

type Props = {
  image: string;
  name: string;
  title: string;
  description: string;
  technology?: string[];
  link: string;
  outsideLink: boolean;
  sx?: CSSProperties;
};

const ProjectCard = (props: Props) => {
  const theme = useTheme();
  const primary = theme.palette.primary.main;
  const primaryText = theme.palette.text.primary;
  const primaryAlpha = alpha(primary, 0.5);

  const cardActionArea = (
    <CardActionArea>
      <CardMedia
        component='img'
        image={`/${props.image}`}
        alt={props.title}
      />
      <Typography
        variant='h5'
        color={primary}
        m={2}
      >
        {props.title}
      </Typography>
      {props.technology && <ProjectTechnologies technologies={[...props.technology] as TechnoTypes[]} />}
      <Typography
        variant='body1'
        m={2}
        sx={{ color: primaryText }}
      >
        {props.description}
      </Typography>
    </CardActionArea>
  );

  return (
    <Grid
      item
      xs={12}
      sm={6}
      md={4}
      sx={{ ...props.sx }}
    >
      <Card
        variant='elevation'
        elevation={4}
        sx={{ border: `1px solid ${primaryAlpha}`, height: '100%' }}
      >
        {props.outsideLink ? (
          <a
            href={props.link}
            target='_blank'
            rel='noreferrer noopener'
            style={{ textDecoration: 'none' }}
          >
            {cardActionArea}
          </a>
        ) : (
          <Link href={`/projects/${props.link}`}>{cardActionArea}</Link>
        )}
      </Card>
    </Grid>
  );
};

export default ProjectCard;

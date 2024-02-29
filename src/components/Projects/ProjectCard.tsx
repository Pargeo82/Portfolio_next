import { CSSProperties } from 'react';
import Link from 'next/link';
import { Card, CardActionArea, CardContent, CardMedia, Grid, Typography, alpha, useTheme } from '@mui/material';

import ProjectTechnologies from '../technologies/ProjectTechnologies';
import { TechnoTypes } from '../../types/technoTypes';
import Image, { StaticImageData } from 'next/image';

type Props = {
  image: StaticImageData;
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
      <CardMedia sx={{ height: { xs: '75%', lg: '80%' } }}>
        <Image
          src={props.image}
          alt={props.title}
          width={830}
          height={467}
          placeholder='blur'
          sizes='(min-width: 1280px) 558px, (min-width: 900px) calc(41.67vw + 33px), calc(97.24vw - 26px)'
          style={{ objectFit: 'cover', width: '100%', height: '100%' }}
        />
      </CardMedia>
      <CardContent sx={{ height: { xs: '25%', lg: '20%' } }}>
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
      </CardContent>
    </CardActionArea>
  );

  return (
    <Grid
      item
      xs={12}
      md={6}
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

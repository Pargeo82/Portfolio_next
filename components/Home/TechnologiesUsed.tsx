import Image from 'next/image';
import { Typography, Grid, Stack, Box } from '@mui/material';

export enum Technologies {
  HTML = 'HTML',
  CSS = 'CSS',
  Javascript = 'Javascript',
  React = 'React',
  NextJS = 'NextJS',
  Typescript = 'Typescript',
  NodeJS = 'NodeJS',
  Sass = 'Sass',
  MongoDB = 'MongoDB',
  Redux = 'Redux',
  Figma = 'Figma',
  MaterialUI = 'MaterialUI',
}

const technologiesArray = Object.values(Technologies);

const TechnologiesUsed = () => {
  const technologyElements = technologiesArray.map((technology, index) => {
    return (
      <>
        <Grid item xs={6} md={4} lg={2}>
          <Stack direction="row" alignContent={'bottom'} spacing={1} alignItems="end">
            <Image
              key={index}
              src={`/technologies/${technology}.png`}
              alt={technology}
              width={50}
              height={50}
              layout="fixed"
            />
            <Typography variant="h5">{technology}</Typography>
          </Stack>
        </Grid>
      </>
    );
  });
  return (
    <Box mb={10}>
      <Grid container rowSpacing={6} xs={12}>
        {technologyElements}
      </Grid>
    </Box>
  );
};

export default TechnologiesUsed;

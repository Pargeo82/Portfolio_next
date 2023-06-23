import Image from 'next/image';
import { Typography, Grid, Stack, Box } from '@mui/material';
import { TechnoTypes } from '../../types/technoTypes';

const technologiesArray = Object.values(TechnoTypes);

const TechnologiesUsed = () => {
  const technologyElements = technologiesArray.map((technology, index) => {
    return (
      <Grid
        item
        xs={6}
        md={4}
        lg={2}
        key={index}
      >
        <Stack
          direction='row'
          alignContent={'bottom'}
          spacing={1}
          alignItems='end'
        >
          <Image
            src={`/technologies/${technology}.png`}
            alt={technology}
            width={50}
            height={50}
            layout='fixed'
          />
          <Typography variant='h5'>{technology}</Typography>
        </Stack>
      </Grid>
    );
  });
  return (
    <Box mb={16}>
      <Typography
        variant='h3'
        className='h1-title center'
        mt={10}
        mb={6}
        letterSpacing={2}
      >
        Technologies I use
      </Typography>
      <Grid
        container
        rowSpacing={6}
      >
        {technologyElements}
      </Grid>
    </Box>
  );
};

export default TechnologiesUsed;

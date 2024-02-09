import Image from 'next/image';
import { Typography, Grid, Stack, Box, useTheme, useMediaQuery } from '@mui/material';
import { TechnoTypes } from '../../types/technoTypes';

const technologiesArray = Object.values(TechnoTypes);

const TechnologiesUsed = () => {
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down('md'));
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
          alignItems='end'
        >
          <Image
            src={`/technologies/${technology}.png`}
            alt={technology}
            width={mobile ? 45 : 50}
            height={mobile ? 45 : 50}
            sizes='(min-width: 1280px) 288px, (min-width: 900px) calc(20.83vw + 26px), (min-width: 600px) calc(50vw - 24px), calc(100vw - 32px)'
          />
          <Typography variant='h5'>{technology}</Typography>
        </Stack>
      </Grid>
    );
  });
  return (
    <Box mb={16}>
      <Typography
        variant='h4'
        textAlign={'center'}
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

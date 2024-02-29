import { Grid, Typography } from '@mui/material';
import HobbyCard from '../src/components/Hobbies/HobbyCard';
import hobbiesData from '../src/components/Hobbies/hobbies_data';

const HobbiesPage = () => {
  const hobbiesElements = hobbiesData.map((hobby) => {
    return (
      <HobbyCard
        key={hobby.id}
        image={hobby.image}
        name={hobby.name}
        description={hobby.description}
      />
    );
  });
  return (
    <>
      <Typography
        variant='h2'
        gutterBottom
      >
        Hobbies
      </Typography>
      <Grid
        container
        spacing={4}
        mb={16}
      >
        {hobbiesElements}
      </Grid>
      y
    </>
  );
};

export default HobbiesPage;

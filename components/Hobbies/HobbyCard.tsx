import Image from 'next/image';
import { Card, CardContent, CardMedia, Grid, Typography, alpha, useTheme } from '@mui/material';

type HobbiesProps = {
  name: string;
  description: string;
  image: string;
};

const HobbyCard = (props: HobbiesProps) => {
  const theme = useTheme();
  const primary = theme.palette.primary.main;
  const primaryAlpha = alpha(primary, 0.5);
  return (
    <Grid
      item
      xs={12}
      sm={6}
    >
      <Card
        variant='elevation'
        elevation={4}
        sx={{ border: `1px solid ${primaryAlpha}`, height: '100%' }}
      >
        <CardMedia>
          <Image
            src={`/${props.image}`}
            alt='{props.name}'
            width={400}
            height={300}
            layout='responsive'
          />
        </CardMedia>
        <CardContent>
          <Typography variant='h6'>{props.name}</Typography>
          <Typography variant='body1'>{props.description}</Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default HobbyCard;

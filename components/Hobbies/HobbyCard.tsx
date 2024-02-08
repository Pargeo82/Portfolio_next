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
      md={6}
      sx={{ display: 'flex' }}
    >
      <Card
        variant='elevation'
        elevation={4}
        sx={{
          border: `1px solid ${primaryAlpha}`,
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <CardMedia sx={{ height: { xs: '75%', lg: '80%' } }}>
          <Image
            src={`/${props.image}`}
            alt='{props.name}'
            width={560}
            height={450}
            sizes='(min-width: 1280px) 558px, (min-width: 900px) calc(41.67vw + 33px), calc(97.24vw - 26px)'
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
          />
        </CardMedia>
        <CardContent
          sx={{
            height: { xs: '25%', lg: '20%' },
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'start',
            justifyContent: 'flex-start',
          }}
        >
          <Typography variant='h6'>{props.name}</Typography>
          <Typography variant='body1'>{props.description}</Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default HobbyCard;

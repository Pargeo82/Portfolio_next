import { Box, Button, Grid, Stack, Typography } from '@mui/material';
import Image from 'next/image';
import Router from 'next/router';
import TypewriterEff from './Typewriter';
import theme from '../../src/theme';

const Hero = () => {
  return (
    <Grid container mt={12}>
      <Grid item xs={12} md={8}>
        <Stack direction="column" spacing={3}>
          <Typography variant="h3" gutterBottom>
            Hi, I&apos;m{' '}
            <Typography variant="h3" color="primary" display="inline" component="span">
              Mislav Markušić
            </Typography>
          </Typography>
          <Typography variant="h4" gutterBottom>
            also known as{' '}
            <Typography variant="h4" color="primary" display="inline" component="span">
              Pargeo
            </Typography>
          </Typography>
          <TypewriterEff />
        </Stack>
        <Stack direction="row" spacing={4} mt={10}>
          <Button variant="contained" onClick={() => Router.push('mailto:pargeo82@gmail.com')}>
            <Image src="/email20.svg" alt="email" width={30} height={30} />
            <Typography
              variant="button"
              color="secondary"
              letterSpacing={1}
              sx={{ textTransform: 'bold', ml: 1, color: theme.palette.text.primary }}
            >
              Email
            </Typography>
          </Button>
          <Button variant="outlined">
            <a
              href="./Mislav_Markusic_CV.pdf"
              download="Mislav_Markusic_CV.pdf"
              target="_blank"
              rel="noreferrer"
              title="Download Resume"
            >
              <Typography
                variant="button"
                color="secondary"
                letterSpacing={1}
                sx={{ textTransform: 'bold', mr: 1, color: theme.palette.text.primary }}
              >
                Download CV
              </Typography>
              <Image src="/download-svgrepo-com.svg" alt="email" width={20} height={20} />
            </a>
          </Button>
        </Stack>
      </Grid>
      <Grid item xs={0} md={4}>
        <Box>
          <Image src="/Pargeo2.png" alt="me" width={750} height={931} layout="responsive" />
        </Box>
      </Grid>
    </Grid>
  );
};

export default Hero;

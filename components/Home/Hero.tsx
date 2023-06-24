import { Box, Button, Grid, Stack, Typography } from '@mui/material';
import { MailOutline, Download } from '@mui/icons-material';
import Image from 'next/image';
import Router from 'next/router';
import TypewriterEff from './Typewriter';
import { useTheme } from '@mui/material/styles';

const Hero = () => {
  const theme = useTheme();
  const primaryText = theme.palette.text.primary;
  return (
    <Grid
      container
      mb={16}
    >
      <Grid
        item
        xs={12}
        md={8}
      >
        <Stack
          direction='column'
          spacing={3}
        >
          <Typography
            variant='h1'
            gutterBottom
          >
            Hi, I&apos;m{' '}
            <Typography
              variant='h1'
              color='primary'
              display='inline'
              component='span'
            >
              Mislav Markušić
            </Typography>
          </Typography>
          <Typography
            variant='h4'
            gutterBottom
          >
            also known as{' '}
            <Typography
              variant='h4'
              color='primary'
              display='inline'
              component='span'
            >
              Pargeo
            </Typography>
          </Typography>
          <TypewriterEff />
        </Stack>
        <Stack
          direction='row'
          spacing={4}
          mt={10}
          justifyContent={{ xs: 'center', md: 'flex-start' }}
        >
          <Button
            variant='contained'
            size='large'
            onClick={() => Router.push('mailto:pargeo82@gmail.com')}
            startIcon={<MailOutline sx={{ color: primaryText }} />}
            aria-label='Email me'
          >
            <Typography
              variant='button'
              color='secondary'
              letterSpacing={-1}
              sx={{ fontWeight: 600, textTransform: 'none', color: primaryText }}
            >
              Email
            </Typography>
          </Button>
          <Button
            variant='outlined'
            size='large'
            endIcon={<Download sx={{ color: primaryText }} />}
            aria-label='Download CV'
          >
            <a
              href='./Mislav_Markusic_CV.pdf'
              download='Mislav_Markusic_CV.pdf'
              target='_blank'
              rel='noreferrer'
              title='Download Resume'
              style={{ textDecoration: 'none' }}
            >
              <Typography
                variant='button'
                color='secondary'
                letterSpacing={-1}
                sx={{
                  fontWeight: 600,
                  textTransform: 'none',
                  color: primaryText,
                }}
              >
                Download CV
              </Typography>
            </a>
          </Button>
        </Stack>
      </Grid>
      <Grid
        item
        xs={0}
        md={4}
      >
        <Box>
          <Image
            src='/Pargeo2.png'
            alt='me'
            width={750}
            height={931}
            layout='responsive'
          />
        </Box>
      </Grid>
    </Grid>
  );
};

export default Hero;

import { Box, Button, Grid, Stack, Typography } from '@mui/material';
import { MailOutline, Download } from '@mui/icons-material';
import Image from 'next/image';
import Router from 'next/router';
import { useTheme } from '@mui/material/styles';
import PargeoPhoto from '../../../public/Pargeo2.png';
import Link from 'next/link';

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
            <Link
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
            </Link>
          </Button>
        </Stack>
        <Typography
          variant='body1'
          mt={8}
          align='justify'
          sx={{ fontSize: '1.25em !important' }}
        >
          I am a <span style={{ color: theme.palette.primary.main }}>frontend developer</span>
          .<br />I am a <span style={{ color: theme.palette.primary.main }}>UX/UI designer</span>
          .<br />I am a <span style={{ color: theme.palette.primary.main }}>digital marketer</span>
          .<br />I am an <span style={{ color: theme.palette.primary.main }}>SEO enthusiast</span>
          .<br />I am an <span style={{ color: theme.palette.primary.main }}>entrepreneur</span>.
        </Typography>
      </Grid>
      <Grid
        item
        md={4}
        sx={{ display: { xs: 'none', md: 'flex' } }}
      >
        <Box>
          <Image
            src={PargeoPhoto}
            alt='Photo of me'
            // width={384}
            // height={473}
            style={{ width: '100%', height: 'auto' }}
            placeholder='blur'
            priority
            quality={100}
            sizes='(min-width: 1280px) 384px, (min-width: 900px) calc(27.78vw + 34px), 40vw'
          />
        </Box>
      </Grid>
    </Grid>
  );
};

export default Hero;

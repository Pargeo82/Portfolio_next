import { Typography, Stack, useTheme, IconButton } from '@mui/material';
import { GitHub, LinkedIn, X, Email } from '@mui/icons-material';
import Router from 'next/router';

const Footer = () => {
  const theme = useTheme();
  const primaryText = theme.palette.text.primary;
  const currentYear = new Date().getFullYear();
  return (
    <footer>
      <Stack
        direction='row'
        spacing={2}
        justifyContent='center'
        alignItems={'center'}
      >
        <Typography variant='h6'>Connect with me</Typography>
        <a
          href='https://www.linkedin.com/in/mislav-markusic/'
          target='_blank'
          rel='noreferrer'
          title='linkedin link'
          style={{ color: primaryText }}
        >
          <LinkedIn sx={{ fontSize: 40 }} />
        </a>
        <a
          href='https://twitter.com/MislavMarkusic'
          target='_blank'
          rel='noreferrer'
          title='x link'
          style={{ color: primaryText }}
        >
          <X sx={{ fontSize: 40 }} />
        </a>
        <a
          href='https://github.com/Pargeo82'
          target='_blank'
          rel='noreferrer'
          title='github link'
          style={{ color: primaryText }}
        >
          <GitHub sx={{ fontSize: 40 }} />
        </a>
        <IconButton
          onClick={() => Router.push('mailto:pargeo82@gmail.com')}
          aria-label='Email me'
        >
          <Email sx={{ fontSize: 40, color: primaryText }} />
        </IconButton>
      </Stack>
      <Typography
        variant='h6'
        gutterBottom
        textAlign={'center'}
      >
        &copy; {currentYear} Pargeo
      </Typography>
    </footer>
  );
};

export default Footer;

import { Typography, Stack, useTheme, IconButton } from '@mui/material';
import { GitHub, LinkedIn, X, MailOutlineOutlined } from '@mui/icons-material';
import Router from 'next/router';
import Link from 'next/link';

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
        <Link
          href='https://www.linkedin.com/in/mislav-markusic/'
          target='_blank'
          rel='noreferrer'
          title='linkedin link'
          style={{ color: primaryText, height: '35px' }}
        >
          <LinkedIn fontSize='large' />
        </Link>
        <Link
          href='https://twitter.com/MislavMarkusic'
          target='_blank'
          rel='noreferrer'
          title='x link'
          style={{ color: primaryText, height: '35px' }}
        >
          <X fontSize='large' />
        </Link>
        <Link
          href='https://github.com/Pargeo82'
          target='_blank'
          rel='noreferrer'
          title='github link'
          style={{ color: primaryText, height: '35px' }}
        >
          <GitHub fontSize='large' />
        </Link>
        <IconButton
          onClick={() => Router.push('mailto:pargeo82@gmail.com')}
          aria-label='Email me'
          sx={{ color: primaryText, height: '35px', p: 0, alignItems: 'center' }}
        >
          <MailOutlineOutlined fontSize='large' />
        </IconButton>
      </Stack>
      <Typography
        variant='h6'
        gutterBottom
        textAlign={'center'}
        mt={2}
      >
        &copy; {currentYear} Pargeo
      </Typography>
    </footer>
  );
};

export default Footer;

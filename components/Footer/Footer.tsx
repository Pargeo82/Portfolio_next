import { Typography, Stack, useTheme, IconButton, Tooltip } from '@mui/material';
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
          style={{ color: primaryText, height: '35px' }}
          aria-label='Linkedin link'
        >
          <Tooltip
            title='Linkedin link'
            placement='top'
          >
            <LinkedIn fontSize='large' />
          </Tooltip>
        </Link>
        <Link
          href='https://twitter.com/MislavMarkusic'
          target='_blank'
          rel='noreferrer'
          style={{ color: primaryText, height: '35px' }}
          aria-label='X link'
        >
          <Tooltip
            title='X link'
            placement='top'
          >
            <X fontSize='large' />
          </Tooltip>
        </Link>
        <Link
          href='https://github.com/Pargeo82'
          target='_blank'
          rel='noreferrer'
          style={{ color: primaryText, height: '35px' }}
          aria-label='Github link'
        >
          <Tooltip
            title='Github link'
            placement='top'
          >
            <GitHub fontSize='large' />
          </Tooltip>
        </Link>
        <IconButton
          onClick={() => Router.push('mailto:pargeo82@gmail.com')}
          aria-label='Email me'
          sx={{ color: primaryText, height: '35px', p: 0, alignItems: 'center' }}
        >
          <Tooltip
            title='Email me'
            placement='top'
          >
            <MailOutlineOutlined fontSize='large' />
          </Tooltip>
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

import { Typography, Stack } from '@mui/material';
import Image from 'next/image';

export default function Footer() {
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
        >
          <Image
            className='icon'
            src='/linkedin.svg'
            alt='linkedin'
            width={40}
            height={40}
          />
        </a>
        <a
          href='https://twitter.com/MislavMarkusic'
          target='_blank'
          rel='noreferrer'
          title='twitter link'
        >
          <Image
            src='/twitter.svg'
            alt='twitter'
            width={40}
            height={40}
          />
        </a>
        <a
          href='https://github.com/Pargeo82'
          target='_blank'
          rel='noreferrer'
          title='github link'
        >
          <Image
            src='/github.svg'
            alt='github'
            width={40}
            height={40}
          />
        </a>
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
}

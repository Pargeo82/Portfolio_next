import { Typography, Stack } from '@mui/material';
import Typewriter from 'typewriter-effect';

const TypewriterEff = () => {
  return (
    <Stack direction={{ xs: 'column', sm: 'row' }}>
      <Typography
        variant='h4'
        gutterBottom
      >
        I&apos;m a junior{' '}
      </Typography>
      <Stack
        direction='column'
        sx={{ ml: 1, height: 50 }}
      >
        <Typography
          variant='h4'
          color='primary'
          display='inline'
          gutterBottom
        >
          <Typewriter
            options={{
              strings: ['frontend developer'], // Add empty string to match duration
              autoStart: true,
              loop: true,
              deleteSpeed: 168,
            }}
          />
        </Typography>
        <Typography
          variant='h4'
          color='primary'
          display='inline'
        >
          <Typewriter
            options={{
              strings: ['ux / ui designer'], // Add empty string to match duration
              autoStart: true,
              loop: true,
              deleteSpeed: 209,
            }}
          />
        </Typography>
      </Stack>
    </Stack>
  );
};

export default TypewriterEff;

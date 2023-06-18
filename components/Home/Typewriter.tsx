import { Typography, Stack } from '@mui/material';
import Typewriter from 'typewriter-effect';

export default function TypewriterEff() {
  return (
    <Stack direction="row">
      <Typography variant="h4" display="inline" gutterBottom>
        I&apos;m a junior{' '}
      </Typography>
      <Stack direction="column" sx={{ ml: 1 }}>
        <Typography variant="h4" color="primary" display="inline" gutterBottom>
          <Typewriter
            options={{
              strings: ['frontend developer'], // Add empty string to match duration
              autoStart: true,
              loop: true,
              deleteSpeed: 122,
            }}
          />
        </Typography>
        <Typography variant="h4" color="primary" display="inline">
          <Typewriter
            options={{
              strings: ['ux/ui designer'], // Add empty string to match duration
              autoStart: true,
              loop: true,
              deleteSpeed: 200,
            }}
          />
        </Typography>
      </Stack>
    </Stack>
  );
}

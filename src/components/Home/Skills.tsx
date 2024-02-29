import { Box, Grid, Typography } from '@mui/material';
import Image from 'next/image';
import efficiencyImage from '@/public/effic.png';
import goalsImage from '@/public/goals.png';
import problemImage from '@/public/problem.png';
import teamworkImage from '@/public/teamwork.png';

const skills = [
  {
    name: 'Efficiency',
    description:
      'I live by this. Use the least amount of time, energy and complications to reach a goal (not at the expense of quality, though)',
    image: efficiencyImage,
  },
  {
    name: 'Goal oriented',
    description: 'I always try to set smaller goals in order to reach the greater one',
    image: goalsImage,
  },
  {
    name: 'Problem solving',
    description: "When you divide bigger problems, smaller ones don't seem as big",
    image: problemImage,
  },
  {
    name: 'Teamwork',
    description: "You can't grow without a team, everything is better and faster, and more fun in one",
    image: teamworkImage,
  },
];

export default function Skills() {
  return (
    <Box pb={16}>
      <Typography
        variant='h4'
        textAlign={'center'}
        mb={6}
        letterSpacing={2}
      >
        Why hire me?
      </Typography>
      <Grid
        container
        spacing={2}
        width={'100%'}
      >
        {skills.map((skill, index) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={3}
            key={index}
          >
            <Image
              src={skill.image}
              alt={skill.name}
              width={585}
              height={585}
              placeholder='blur'
              style={{ width: '100%', height: 'auto', objectFit: 'contain' }}
              sizes='(min-width: 1280px) 288px, (min-width: 900px) calc(20.83vw + 26px), (min-width: 600px) calc(50vw - 24px), calc(100vw - 32px)'
            />
            <Typography
              variant='h4'
              mt={4}
              letterSpacing={-1}
              textAlign={'center'}
              color='primary'
            >
              {skill.name}
            </Typography>
            <Typography
              variant='body1'
              mt={2}
              textAlign={'center'}
              letterSpacing={1}
            >
              {skill.description}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

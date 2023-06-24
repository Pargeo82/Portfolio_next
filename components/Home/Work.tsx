import {
  Box,
  Card,
  Grid,
  Stack,
  Typography,
  Link,
  List,
  ListItem,
  CardMedia,
  CardContent,
  useMediaQuery,
} from '@mui/material';
import Image from 'next/image';
import { useTheme } from '@mui/material';
import ProjectTechnologies from '../technologies/ProjectTechnologies';
import { TechnoTypes } from '../../types/technoTypes';

export default function Work() {
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down('md'));
  const primaryText = theme.palette.text.primary;

  return (
    <Box mb={10}>
      <Typography
        variant='h4'
        textAlign={'center'}
        mb={6}
        letterSpacing={2}
      >
        Employment
      </Typography>
      <Stack direction={'column'}>
        <Stack
          direction={{ xs: 'column', md: 'row' }}
          width={'100%'}
          mb={4}
        >
          <Box width={{ xs: '100%', md: '60%' }}>
            <Typography
              variant='h6'
              gutterBottom
            >
              November 2022 -
            </Typography>
            <Typography
              variant='h6'
              fontWeight={700}
            >
              {' '}
              Frontend developer at{' '}
              <Link
                href='https://atmc.ai/'
                target='_blank'
                rel='noreferrer'
                title='Atomic Intelligence'
                sx={{ color: primaryText, textDecorationColor: primaryText }}
              >
                Atomic Intelligence
              </Link>
            </Typography>
            <List sx={{ listStyle: 'disc', pl: 4 }}>
              <ListItem sx={{ display: 'list-item' }}>
                Big data, streaming, DW/BI, Data Science, AI, Data Lakes
              </ListItem>
              <ListItem sx={{ display: 'list-item' }}>Document data extraction & masking</ListItem>
            </List>
          </Box>
          <Link
            href='https://atmc.ai/'
            target='_blank'
            rel='noreferrer'
            title='Atomic Intelligence'
          >
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <Image
                src='/atomicCopy.png'
                alt='Atomic Intelligence'
                width={400}
                height={100}
              />
            </div>
          </Link>
        </Stack>
        <Grid
          container
          spacing={4}
        >
          <Grid
            item
            xs={12}
            md={6}
          >
            <Card
              variant='elevation'
              elevation={2}
            >
              <CardMedia
                component='img'
                height={mobile ? '140' : '180'}
                image='/PandaLogo.png'
                alt='AI Panda logo'
              />
              <CardContent sx={{ display: 'flex', flexDirection: 'column', minHeight: 300 }}>
                <List
                  dense
                  sx={{ listStyle: 'disc', pl: 4 }}
                >
                  <ListItem sx={{ display: 'list-item' }}>B2B application</ListItem>
                  <ListItem sx={{ display: 'list-item' }}>
                    AI solution for data manipulation and transformation
                  </ListItem>
                  <ListItem sx={{ display: 'list-item' }}>
                    Detection and classification of personal and sensitive information
                  </ListItem>
                </List>
                <Box sx={{ marginTop: 'auto' }}>
                  <ProjectTechnologies
                    technologies={[TechnoTypes.React, TechnoTypes.Sass, TechnoTypes.Redux, TechnoTypes.TypeScript]}
                  />
                </Box>
              </CardContent>
            </Card>
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
          >
            <Card
              variant='elevation'
              elevation={4}
            >
              <CardMedia
                component='img'
                height={mobile ? '140' : '180'}
                image='/hawk.png'
                alt='Hawk-a-doc logo'
              />
              <CardContent sx={{ display: 'flex', flexDirection: 'column', minHeight: 300 }}>
                <List
                  dense
                  sx={{ listStyle: 'disc', pl: 4 }}
                >
                  <ListItem sx={{ display: 'list-item' }}>B2B application</ListItem>
                  <ListItem sx={{ display: 'list-item' }}>Structuring and extracting unstructured data</ListItem>
                  <ListItem sx={{ display: 'list-item' }}>AI, ML, NLP...</ListItem>
                </List>
                <Box sx={{ marginTop: 'auto' }}>
                  <ProjectTechnologies
                    technologies={[
                      TechnoTypes.React,
                      TechnoTypes.MaterialUI,
                      TechnoTypes.Redux,
                      TechnoTypes.TypeScript,
                    ]}
                  />
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Stack>
    </Box>
  );
}

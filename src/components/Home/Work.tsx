import { Box, Card, Grid, Stack, Typography, List, ListItem, CardMedia, CardContent } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import ProjectTechnologies from '../technologies/ProjectTechnologies';
import { TechnoTypes } from '../../types/technoTypes';

export default function Work() {
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
              October 2024 -
            </Typography>
            <Typography
              variant='h6'
              fontWeight={700}
            >
              {' '}
              Everything at{' '}
              <Link
                href='https://www.pargeo-design.hr/'
                target='_blank'
                title='Pargeo Design'
              >
                Pargeo Design
              </Link>
            </Typography>
            <List sx={{ listStyle: 'disc', pl: 4 }}>
              <ListItem sx={{ display: 'list-item' }}>Small business web agency</ListItem>
              <ListItem sx={{ display: 'list-item' }}>Designing and coding websites</ListItem>
              <ListItem sx={{ display: 'list-item' }}>Digital marketing & SEO</ListItem>
            </List>
          </Box>
          <Link
            href='https://www.pargeo-design.hr/'
            target='_blank'
            title='Pargeo Design'
          >
            <Image
              src='/Logo_PD.png'
              alt='Pargeo Design logo'
              width={560}
              height={385}
              sizes='(min-width: 900px) 187px, calc(97.24vw - 24px)'
              style={{ width: '100%', height: 'auto' }}
            />
          </Link>
        </Stack>
      </Stack>
      <Stack
        direction={'column'}
        sx={{ mt: 4 }}
      >
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
                title='Atomic Intelligence'
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
            title='Atomic Intelligence'
          >
            <Image
              src='/atomicCopy.png'
              alt='Atomic Intelligence'
              width={400}
              height={100}
              sizes='(min-width: 1600px) 400px, (min-width: 900px) calc(3.82vw + 340px), calc(97.24vw - 24px)'
              style={{ width: '100%', height: 'auto' }}
            />
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
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  height: 220,
                }}
              >
                <Link
                  href='https://www.stemjam.music/'
                  target='_blank'
                  title='Stem&Jam'
                >
                  <Image
                    src='/Stem.png'
                    alt='Stem&Jam logo'
                    width={740}
                    height={266}
                    sizes='429px'
                    style={{ width: 'auto', height: '200px' }}
                  />
                </Link>
              </CardMedia>
              <CardContent sx={{ display: 'flex', flexDirection: 'column', minHeight: 300 }}>
                <List
                  dense
                  sx={{ listStyle: 'disc', pl: 4 }}
                >
                  <ListItem sx={{ display: 'list-item' }}>B2C application</ListItem>
                  <ListItem sx={{ display: 'list-item' }}>Musical app for stem separation</ListItem>
                </List>
                <Box sx={{ marginTop: 'auto' }}>
                  <ProjectTechnologies
                    technologies={[TechnoTypes.React, TechnoTypes.TypeScript, TechnoTypes.Mantine, TechnoTypes.Figma]}
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
              elevation={2}
            >
              <CardMedia sx={{ height: 220 }}>
                <Image
                  src='/PandaLogo.png'
                  alt='AI Panda logo'
                  width={740}
                  height={266}
                  sizes='(min-width: 1280px) 560px, (min-width: 900px) calc(41.67vw + 35px), calc(97.24vw - 24px)'
                  style={{ width: '100%', height: 'auto' }}
                />
              </CardMedia>
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
              <CardMedia sx={{ height: 220 }}>
                <Image
                  src='/hawk.png'
                  alt='Hawk-a-doc logo'
                  width={740}
                  height={266}
                  sizes='(min-width: 1280px) 560px, (min-width: 900px) calc(41.67vw + 35px), calc(97.24vw - 24px)'
                  style={{ width: '100%', height: 'auto' }}
                />
              </CardMedia>
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

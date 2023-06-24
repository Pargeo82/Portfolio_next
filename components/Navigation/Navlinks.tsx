import { Box, Stack, Typography, useTheme, useMediaQuery } from '@mui/material';
import Link from 'next/link';
import { useRouter } from 'next/router';

type NavlinksProps = {
  onNavToggle?: () => void;
};

const Navlinks = ({ onNavToggle }: NavlinksProps) => {
  const theme = useTheme();
  const primaryText = theme.palette.text.primary;
  const primary = theme.palette.primary.main;
  const router = useRouter();
  const currentRoute = router.pathname;
  const mobile = useMediaQuery(theme.breakpoints.down('md'));

  const handleLinkClick = () => {
    if (mobile) {
      onNavToggle && onNavToggle();
    }
  };

  return (
    <Box>
      <Stack
        direction={mobile ? 'column' : 'row'}
        spacing={4}
        mx={12}
        my={3}
        justifyContent={'flex-end'}
        alignItems={'flex-end'}
      >
        <Link
          href='/'
          aria-label='Home link'
        >
          <Typography
            onClick={handleLinkClick}
            variant='h6'
            fontWeight={700}
            sx={{
              color: currentRoute === '/' ? primary : primaryText,
              textDecoration: 'none',
              '&:hover': {
                textDecoration: 'underline',
                cursor: 'pointer',
              },
            }}
          >
            Home
          </Typography>
        </Link>{' '}
        <Link
          href='/projects'
          aria-label='Projects link'
        >
          <Typography
            onClick={handleLinkClick}
            variant='h6'
            fontWeight={700}
            sx={{
              color: currentRoute === '/projects' ? primary : primaryText,
              textDecoration: 'none',
              '&:hover': {
                textDecoration: 'underline',
                cursor: 'pointer',
              },
            }}
          >
            Projects
          </Typography>
        </Link>{' '}
        <Link
          href='/hobbies'
          aria-label='Hobbies link'
        >
          <Typography
            onClick={handleLinkClick}
            variant='h6'
            fontWeight={700}
            sx={{
              color: currentRoute === '/hobbies' ? primary : primaryText,
              textDecoration: 'none',
              '&:hover': {
                textDecoration: 'underline',
                cursor: 'pointer',
              },
            }}
          >
            Hobbies
          </Typography>
        </Link>
      </Stack>
    </Box>
  );
};

export default Navlinks;

import { useMediaQuery, useTheme } from '@mui/material';
import Navigation from './Navigation';
import NavigationMobile from './NavigationMobile';

const Navbar = () => {
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down('md'));
  const desktop = useMediaQuery(theme.breakpoints.up('md'));

  return (
    <>
      {mobile && <NavigationMobile />}
      {desktop && <Navigation />}
    </>
  );
};

export default Navbar;

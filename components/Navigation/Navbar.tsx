import { useMediaQuery, useTheme } from '@mui/material';
import Navigation from './Navigation';
import NavigationMobile from './NavigationMobile';

const Navbar = () => {
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down('md'));

  return <>{mobile ? <NavigationMobile /> : <Navigation />}</>;
};

export default Navbar;

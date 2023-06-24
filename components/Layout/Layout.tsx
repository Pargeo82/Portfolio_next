import { Container } from '@mui/material';
import Footer from '../Footer/Footer';
import Navbar from '../Navigation/Navbar';

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <Container sx={{ mt: 12 }}>{children}</Container>
      <Footer />
    </>
  );
};

export default Layout;

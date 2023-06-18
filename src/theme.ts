import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    primary: {
      main: '#ff7736',
      dark: '#b25325',
      light: '#ff925e',
    },
    secondary: {
      main: '#1C26FF',
      dark: '#131ab2',
      light: '#4951ff',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#1c1c1c',
    },
    text: {
      primary: '#E3E3E3',
      secondary: '#1c1c1c',
    },
  },
  typography: {
    fontFamily: 'Poppins, sans-serif',
  },
});

export default theme;

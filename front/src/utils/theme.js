import { createTheme } from '@mui/material/styles';
import '../assets/fonts/fonts.css';

const theme = createTheme({
  typography: {
    fontFamily: 'Poppins, Roboto, Arial, sans-serif',  // Definición de las fuentes principales
    fontWeightLight: 200,   // Peso ligero
    fontWeightRegular: 400,  // Peso regular
    fontWeightBold: 700,     // Peso en negrita
  },
  palette: {
    primary: {
      main: '#1976d2',  // Color primario
    },
    secondary: {
      main: '#ffffff',  // Color secundario
    },
  },
});

export default theme;

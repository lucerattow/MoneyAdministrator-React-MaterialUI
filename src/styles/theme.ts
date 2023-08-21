import { createTheme } from '@mui/material/styles'

export const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#ff5722',
    },
    secondary: {
      main: '#607d8b',
    },
    background: {
      default: '#082032',
      paper: '#2C394B',
    },
  },
});

export default theme
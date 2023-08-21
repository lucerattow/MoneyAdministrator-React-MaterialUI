import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '@/App';
import "@/styles/index.scss";
import { ThemeProvider } from '@mui/material/styles';
import {CssBaseline} from '@mui/material';
import {theme} from "./styles/theme"

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <App />
  </ThemeProvider>
);
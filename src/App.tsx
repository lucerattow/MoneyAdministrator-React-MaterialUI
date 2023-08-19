import React from 'react';
import { AppRoutes } from '@/routes';
import { AppContextProvider } from '@/context';

//Import MaterialUI Fonts
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

const App: React.FC = () => {

  return (
    <AppContextProvider>
      <AppRoutes />
    </AppContextProvider>
  )
}

export default App;

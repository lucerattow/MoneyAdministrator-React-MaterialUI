import {AppRoutes} from '@/routes';
import {AppContextProvider} from '@/context';
import {ToastContainer} from 'react-toastify';
import {toastConfig} from '@/config';

//Import MaterialUI Fonts
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
//Import react-toastify styles
import 'react-toastify/dist/ReactToastify.css';

const App = () => {

  return (
    <AppContextProvider>
      <AppRoutes />
      <ToastContainer {...toastConfig} />
    </AppContextProvider>
  )
}

export default App;

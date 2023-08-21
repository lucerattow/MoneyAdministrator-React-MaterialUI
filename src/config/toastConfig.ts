import {ToastContainerProps} from 'react-toastify';

export const toastUpdateConfig: ToastContainerProps = {
  autoClose: 5000,
  closeOnClick: true,
  pauseOnFocusLoss: true,
  draggable: true,
  pauseOnHover: true,
}

export const toastConfig: ToastContainerProps = {
  ...toastUpdateConfig,
  position: "bottom-right",
  limit: 5,
  theme: "dark",
};


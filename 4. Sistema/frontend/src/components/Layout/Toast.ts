import { toast, ToastOptions } from 'react-toastify';

const toastOptions: ToastOptions = {
  position: 'top-right',
  autoClose: 3000,
  closeOnClick: true,
  pauseOnHover: true,
  theme: 'colored',
};

export function successToast(message: string) {
  return toast.success(message, toastOptions);
}

export function errorToast(message: string) {
  return toast.error(message, toastOptions);
}

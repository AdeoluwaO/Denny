import Toast from '@root/src/components/app_snackbar';
import {QueryClient} from '@tanstack/react-query';
import {extractErrorMessage} from './errors';
import {ApiError} from './api';

export const queryClient = new QueryClient({
  defaultOptions: {
    mutations: {
      retry: 1,
      retryDelay: 2000,
      onError: error => {
        Toast.showErrorSnackBar({
          text: extractErrorMessage(error as ApiError),
        });
      },
    },
  },
});

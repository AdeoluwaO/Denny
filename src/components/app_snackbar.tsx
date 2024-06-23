import Snackbar, {SnackBarOptions} from 'react-native-snackbar';

interface Options extends Omit<SnackBarOptions, 'text'> {
  text?: string;
}

const Toast = {
  showSuccessSnackBar(options: Options) {
    const text = options.text || 'Something went wrong';
    return Snackbar.show({
      duration: options.duration ?? 2000,
      ...options,
      backgroundColor: '#09A172',
      text,
    });
  },
  async showErrorSnackBar(options: Options) {
    const text = options.text || 'Something went wrong';
    return Snackbar.show({
      ...options,
      duration: options.duration ?? 2000,
      text,
      backgroundColor: 'red'
    });
  },
};

export default Toast;

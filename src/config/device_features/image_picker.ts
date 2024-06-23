import { Platform } from 'react-native';
import {
  launchCamera,
  launchImageLibrary,
  ImageLibraryOptions,
} from 'react-native-image-picker';

interface ImagePickerProps {
  settings?: ImageLibraryOptions;
}

export default class AppImagePicker {
  static async SelectImageFromGallery({ settings }: ImagePickerProps) {
    const response = await launchImageLibrary(
      settings ?? {
        mediaType: 'photo',
        selectionLimit: 1
      },
    );
    return response;
  }
  static async LaunchDeviceCamera({ settings }: ImagePickerProps) {
    const response = await launchCamera(settings ?? { mediaType: 'photo' });
    return response;
  }
}


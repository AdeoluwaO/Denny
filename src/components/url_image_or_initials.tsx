import {Avatar} from 'react-native-paper';
import {AppImage} from './app_image';
import {getInitialLetter} from '../config/helpers/helper_functions';
import {UrlImageOrInitialsProp} from './types';
import {StyleSheet} from 'react-native';

export function UrlImageOrNameInitials({
  imageUrl,
  urlImageStyle,
  initialsContainerSize,
  name,
}: UrlImageOrInitialsProp) {
  const initialLetter = getInitialLetter(name);
  return (
    <>
      {imageUrl ? (
        <AppImage
          image={{uri: imageUrl}}
          style={[styles.image, urlImageStyle]}
        />
      ) : (
        <Avatar.Text  label={initialLetter} size={initialsContainerSize ?? 60} />
      )}
    </>
  );
}

const styles = StyleSheet.create({
  image: {
    height: 60,
    width: 60,
    borderRadius: 30,
  },
});

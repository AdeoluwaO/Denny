import { Image } from 'react-native';
import { ImageProp } from './types';


export function AppImage({image, style}: ImageProp) {
return(
    <Image style={style}  source={image} />
)
}
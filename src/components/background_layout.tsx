import {View, Dimensions} from 'react-native';
import {useAppTheme} from 'src/design_system/theme/theme';
import Icon from '@assets/icons/icon';
import {
  getComputedHeight,
  getComputedWidth,
} from '../design_system/layout/responsiveness';
import { BackgroundLayoutProp } from './types';
import { FLEX } from '@root/App';

export const {width, height} = Dimensions.get('window');

//? this is the layout for the green background and the lines 
//? doesn't handle scrolling for that use [LAYOUT BOX]
export function BackgroundLayout({children, ...props}: BackgroundLayoutProp) {
  const {colors} = useAppTheme();

  return (
    <View
    {...props}
      style={{
        backgroundColor: props.backgroundColor ?? colors.primary,
        overflow: 'hidden'
      }}>
      <Icon name="rectangle-one" style={{position: 'absolute'}} />
      <Icon
        name="rectangle-two"
        style={{position: 'absolute', top: getComputedHeight(30)}}
      />
      <Icon
        name="rectangle-three"
        style={{position: 'absolute', top: getComputedHeight(250)}}
      />
      <Icon
        name="rectangle-four"
        style={{
          position: 'absolute',
          top: getComputedHeight(250),
          left: getComputedWidth(100),
        }}
      />
      {children}
    </View>
  );
}

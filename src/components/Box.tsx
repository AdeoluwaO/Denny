import {View} from 'react-native';
import {BoxProps} from './types';
export function Box({children, ...props}: BoxProps) {
  return <View  {...props}>{children}</View>;
}

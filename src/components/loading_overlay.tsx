import {Box} from './Box';
import {useAppTheme} from '../design_system/theme/theme';
import {Dimensions, StyleSheet} from 'react-native';
import {alignHorizontalToFlexAlign} from '../design_system/layout/alignment';
import {LoadingAnimation} from './loading_animation';
import { ReactNode } from 'react';

const {height, width} = Dimensions.get('window');
export function LoadingOverlay({children}: {children?: ReactNode}) {
  return (
    <Box {...style.container} >
      {children}
    </Box>
  );
}
const style = StyleSheet.create({
  container: {
    width: width,
    backgroundColor: 'black',
    opacity: 0.4,
    position: 'absolute',
    height: height,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center'
  },
});

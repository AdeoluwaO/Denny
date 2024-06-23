import {View,   Platform, KeyboardAvoidingView} from 'react-native';
import {BoxProps} from './types';
import {useAppTheme} from '../design_system/theme/theme';
import {SafeAreaView, useSafeAreaInsets} from 'react-native-safe-area-context';
import {FLEX} from '@root/App';

//? this is the layout for all contents scrolls
//? when contents are more than the view size
export function LayoutBox({children, header, ...props}: BoxProps) {
  const {colors} = useAppTheme();
  const {top, bottom, right, left} = useSafeAreaInsets();
  return (
    <SafeAreaView
    {...props}
      style={{
        backgroundColor: props.backgroundColor ?? colors.whiteSmoke,
        flex: FLEX,
      }}>
        {children}
    </SafeAreaView>
  );
}

import LottieView, {LottieViewProps} from 'lottie-react-native';
import {Box} from './Box';
import {useAppTheme} from '../design_system/theme/theme';
import {StyleProp, StyleSheet, ViewStyle} from 'react-native';
import {alignHorizontalToFlexAlign} from '../design_system/layout/alignment';

export function LoadingAnimation({
  style,
  props,
}: {
  style?: StyleProp<ViewStyle>;
  props?: LottieViewProps;
}) {
  return (
    <LottieView
      source={require('@assets/animations/sako_loader.json')}
      autoPlay
      loop
      {...props}
      style={[styles.lottie, style]}
    />
  );
}
const styles = StyleSheet.create({
  lottie: {
    width: '80%',
    aspectRatio: 4,
  },
});

import {View, StyleSheet} from 'react-native';
import {ICONS, IconProps} from './types';
import {
  getComputedHeight,
  getComputedWidth,
} from '../../design_system/layout/responsiveness';
import {useAppTheme} from '@root/src/design_system/theme/theme';
import {alignHorizontalToFlexAlign} from '@root/src/design_system/layout/alignment';

export default function Icon({
  name,
  size = 24,
  showBackgroundColor,
  borderRadius,
  opacity,
  backgroundColor,
  ...props
}: IconProps) {
  const SvgIcons = ICONS[name];
  const {colors} = useAppTheme();
  return SvgIcons ? (
    <View
      style={
        showBackgroundColor
          ? {
              ...style.iconBackdrop,
              opacity,
              backgroundColor: backgroundColor ?? colors.white,
              borderRadius: borderRadius ?? 10,
            }
          : null
      }>
      <SvgIcons {...props} />
    </View>
  ) : null;
}

const style = StyleSheet.create({
  iconBackdrop: {
    height: getComputedHeight(54),
    width: getComputedWidth(54),
    alignItems: alignHorizontalToFlexAlign.center,
    justifyContent: 'center',
  },
});

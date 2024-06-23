import {alignHorizontalToFlexAlign} from '../design_system/layout/alignment';
import {
  getComputedHeight,
  getComputedWidth,
} from '../design_system/layout/responsiveness';
import {useAppTheme} from '../design_system/theme/theme';
import {AppText} from './text';
import {BorderButtonProp} from './types';
import {View, StyleSheet, Pressable} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export function BorderButton({
  title,
  showIcon = false,
  iconColor,
  onPress,
  iconName,
  width,
  loading,
}: BorderButtonProp) {
  const {colors} = useAppTheme();
  return (
<Pressable onPress={onPress}>
    <View
      style={{
        ...style.container,
        borderColor: colors.secondary,
        backgroundColor: colors.transparent,
          width: width ?? '100%',

      }}>
      {showIcon ? (
        <Icon name={iconName ?? "chevron-back"} size={24} color={iconColor ?? colors.secondary} />
      ) : (
        <AppText color={colors.secondary} text={title} weight="large" />
      )}
    </View>
    </Pressable>
  );
}

const style = StyleSheet.create({
  container: {
    borderWidth: 0.6,
    borderStyle: 'solid',
    borderRadius: 20,
    height: getComputedHeight(63),
    alignItems: alignHorizontalToFlexAlign.center,
    justifyContent: alignHorizontalToFlexAlign.center,
  },
});

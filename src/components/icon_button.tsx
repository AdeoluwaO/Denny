import {Button} from 'react-native-paper';
import {useAppTheme} from 'src/design_system/theme/theme';
import {IconButtonProp} from './types';
import {
  getComputedHeight,
  getComputedWidth,
} from '../design_system/layout/responsiveness';
import Icon from 'react-native-vector-icons/Ionicons';
import {SPACING} from '../design_system/layout/spacing';
import {StyleSheet} from 'react-native';

export function AppIconButton({
  onPress,
  loading,
  name,
  ...props
}: IconButtonProp) {
  const {colors} = useAppTheme();
  return (
    <Button
      rippleColor={colors.transparent}
      buttonColor={colors.white}
      onPress={onPress}
      loading={loading}
      {...props}
      style={styles.button}>
      <Icon name={name} size={25} />
    </Button>
  );
}
const BORDER_RADIUS = 10;
const styles = StyleSheet.create({
  button: {
    width: getComputedWidth(20),
    height: getComputedHeight(48),
    justifyContent: 'center',
    borderRadius: 16,
  },
});

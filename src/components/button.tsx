import {ActivityIndicator} from 'react-native-paper';
import {useAppTheme} from 'src/design_system/theme/theme';
import {AppText} from './text';
import {ButtonProp} from './types';
import {getComputedHeight} from '../design_system/layout/responsiveness';
import {Pressable} from 'react-native';
import {Row} from './row';

export function AppButton({
  title,
  onPress,
  color,
  width,
  loading,
  textColor,
  style,
  ...props
}: ButtonProp) {
  const {colors} = useAppTheme();
  return (
    <Pressable
      onPress={onPress}
      style={[
        {
          borderRadius: 20,
          width: width ?? '100%',
          height: getComputedHeight(63),
          justifyContent: 'center',
          backgroundColor: color ?? colors.secondary,
          alignItems: 'center',
        },
        style,
      ]}>
      <Row {...props}>
        {loading && <ActivityIndicator animating={loading} color="white" />}

        <AppText weight="large" text={title} color={textColor} />
      </Row>
    </Pressable>
    // <Button
    //   rippleColor={colors.transparent}
    //   buttonColor={color ?? colors.secondary}
    //   onPress={onPress}
    //   loading={loading}

    //   {...props}
    //   style={[{
    //     borderRadius: BORDER_RADIUS,
    //     width: width ?? '100%',
    //     height: getComputedHeight(63),
    //     justifyContent: 'center',
    //   }, style]}
    //>
    //   <AppText weight="large" text={title} color={textColor} />
    // </Button>
  );
}
const BORDER_RADIUS = 20;

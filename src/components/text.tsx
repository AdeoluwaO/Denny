import {Text} from 'react-native-paper';
import {TextProp} from './types';
import {useAppTheme} from 'src/design_system/theme/theme';
import {FONT_WEIGHT} from 'src/design_system/theme/fonts';
import {textAlignment} from 'src/design_system/layout/alignment';

export function AppText({
  text,
  family,
  weight,
  textAlign,
  color,
  size = 16,
  onPress,
  width,
  numberOfLines,
  selectable = false,
  ...props
}: TextProp) {
  const {colors, fontFamily} = useAppTheme();
  const font = fontFamily[family!] ?? fontFamily.latoRegular;
  const weig = FONT_WEIGHT[weight];
  const alignText = textAlignment[textAlign!];
  return (
    <Text
      {...props}
      selectable={selectable}
      ellipsizeMode='tail'
      numberOfLines={numberOfLines}
      onPress={onPress}
      //@ts-ignore
      style={{
        fontFamily: font,
        color: color ?? colors.white,
        fontWeight: weig,
        fontSize: size,
        textAlign: alignText,
        width: width,
        textDecorationLine: props.textDecorationLine,
        textDecorationStyle: props.textDecorationStyle,
        textDecorationColor: props.textDecorationColor,
      }}>
      {text}
    </Text>
  );
}

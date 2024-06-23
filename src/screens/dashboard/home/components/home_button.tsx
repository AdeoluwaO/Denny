import Icon from '@root/src/assets/icons/icon';
import {AppText, Box} from '@root/src/components';
import {alignHorizontalToFlexAlign, alignVerticalToFlexAlign} from '@root/src/design_system/layout/alignment';
import {
  getComputedHeight,
  getComputedWidth,
} from '../../../../design_system/layout/responsiveness';
import { SPACING } from '@root/src/design_system/layout/spacing';
import {useAppTheme} from '@root/src/design_system/theme/theme';
import {Pressable } from 'react-native';
import { HomeButtonProp } from './types';
import Ionicons from 'react-native-vector-icons/Ionicons';

function HomeButton({name, onPress, title, width, textColor, fillColor, strokeColor, icon, ...props}: HomeButtonProp) {
  const {colors} = useAppTheme();
  return (
    <Pressable onPress={onPress}>
      <Box
      {...props}
        backgroundColor={props.backgroundColor ?? colors.opacWhite}
        height={props.height ?? getComputedHeight(51)}
        width={getComputedWidth( width ?? 195)}
        borderWidth={props.borderWidth ?? 1}
        borderRadius={props.borderRadius ?? 20}
        borderColor={props.borderColor ?? colors.opacWhite80}
        flexDirection='row'
        columnGap={props.columnGap ?? SPACING.medium}
        alignItems={props.alignItems ?? alignHorizontalToFlexAlign.center}
        justifyContent={props.justifyContent ?? alignVerticalToFlexAlign.center}>
       {icon != null ? <Ionicons name={icon} size={30} color={fillColor} /> : <Icon name={name!} fill={fillColor} stroke={strokeColor} />}
        <AppText weight="bigger" text={title} color={textColor} />
      </Box>
    </Pressable>
  );
}

export default HomeButton;

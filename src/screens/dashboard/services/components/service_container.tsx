import Icon from '@root/src/assets/icons/icon';
import {AppText, Row, Box} from '@root/src/components/index';
import {
  alignVerticalToFlexAlign,
} from '@root/src/design_system/layout/alignment';
import {
  getComputedHeight,
  getComputedWidth,
} from '../../../../design_system/layout/responsiveness';
import {useAppTheme} from '@root/src/design_system/theme/theme';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {ServicesContainerProp} from './types';
import {Pressable} from 'react-native';

export function ServicesContainer({
  iconName,
  title,
  showTrailingIcon = true,
  showDivider = true,
  backgroundColor,
  textColor,
  onPress,
}: ServicesContainerProp) {
  const {colors} = useAppTheme();
  return (
    <Pressable onPress={onPress}>
      <Row
        backgroundColor={backgroundColor ?? colors.white}
        width={getComputedWidth(163)}
        padding={17}
        borderRadius={16}
        flexWrap='nowrap'
        justifyContent={alignVerticalToFlexAlign['space-between']}>
        <Row flexWrap='nowrap'>
          <Icon name={iconName!}  />
          {showDivider && <Box borderWidth={0.20} borderColor={colors.opac} height={getComputedHeight(30)}>
            {/* THIS IS A DIVIDER DON'T ADD A COMPONENT */}
          </Box>}
          <AppText
            text={title}
            weight="bigger"
            size={14}
            color={textColor ?? colors.black}
          />
        </Row>
        {showTrailingIcon && <Ionicons name="chevron-forward" color={colors.primary}  />}
      </Row>
    </Pressable>
  );
}

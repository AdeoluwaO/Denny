import Icon from '@root/src/assets/icons/icon';
import {AppText, Box, Gap, Row, width} from '@root/src/components';
import {
  alignHorizontalToFlexAlign,
  alignVerticalToFlexAlign,
} from '@root/src/design_system/layout/alignment';
import {
  getComputedHeight,
  getComputedWidth,
} from '@root/src/design_system/layout/responsiveness';
import {useAppTheme} from '@root/src/design_system/theme/theme';
import IonIcons from 'react-native-vector-icons/Ionicons';
import {Pressable} from 'react-native';
import {TileProps} from './type';

function TileContainer({title, subtitle, icon, iconName, onPress}: TileProps) {
  const {colors} = useAppTheme();
  return (
    <Pressable onPress={onPress}>
      <Row  width={'100%'}  justifyContent="space-between">
        <Row>
          <Box
            height={getComputedHeight(48)}
            width={getComputedWidth(48)}
            alignItems={alignHorizontalToFlexAlign.center}
            borderRadius={15}
            justifyContent={alignVerticalToFlexAlign.center}
            backgroundColor={colors.opacGreeen}>
            <Icon name={iconName!} />
          </Box>
          <Box>
            <AppText
              text={title}
              weight="large"
              size={14}
              color={colors.black}
            />
            <Gap height={getComputedHeight(8)} />
            <AppText
              text={subtitle}
              weight="medium"
              size={10}
              color={colors.dimGray}
            />
          </Box>
        </Row>
        {icon != null ? icon : <IonIcons name="chevron-forward" size={24} color={colors.black}/>}
      </Row>
    </Pressable>
  );
}

export default TileContainer;

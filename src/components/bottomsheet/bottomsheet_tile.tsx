import {Pressable, StyleSheet} from 'react-native';
import Icon from '../../assets/icons/icon';
import {useAppTheme} from '../../design_system/theme/theme';
import {Box} from '../Box';
import {Row} from '../row';
import {AppText} from '../text';
import {alignHorizontalToFlexAlign} from '../../design_system/layout/alignment';
import {
  getComputedHeight,
  getComputedWidth,
} from '../../design_system/layout/responsiveness';
import {IconName} from '../../assets/icons/types';

interface BottomSheetTileProp {
  icon: IconName;
  title: string;
  subtitle: string;
  onPress: () => void;
}

export function BottomSheetTile({icon, title, subtitle, onPress}: BottomSheetTileProp) {
  const {colors} = useAppTheme();
  return (
    <Pressable onPress={onPress}>
      <Box backgroundColor={colors.white} {...style.container}>
        <Row>
          <Icon name={icon} />
          <Box>
            <AppText
              text={title}
              weight="large"
              size={12}
              color={colors.black}
            />
            <AppText
              text={subtitle}
              weight="big"
              size={12}
              color={colors.gray2}
            />
          </Box>
        </Row>
      </Box>
    </Pressable>
  );
}

const style = StyleSheet.create({
  container: {
    alignItems: alignHorizontalToFlexAlign.left,
    width: getComputedWidth(164),
    height: getComputedHeight(64),
    paddingHorizontal: 15,
    paddingVertical: 16,
    borderRadius: 20,
  },
});

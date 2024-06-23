import {AppText, Box} from '@root/src/components';
import {alignHorizontalToFlexAlign} from '@root/src/design_system/layout/alignment';
import {
  getComputedHeight,
  getComputedWidth,
} from '@root/src/design_system/layout/responsiveness';
import { useAppTheme } from '@root/src/design_system/theme/theme';
import {Pressable} from 'react-native';

interface PowerScreenButtonProp {
  backgroundColor?: string;
  title?: string;
  titleColor?: string;
  onPress?: () => void;
}

function PowerScreenButton({title, titleColor, backgroundColor, onPress }: PowerScreenButtonProp) {
    const {colors} = useAppTheme();
  return (
    <Pressable onPress={onPress}>
      <Box
        backgroundColor={backgroundColor ?? colors.lightGreen}
        alignItems={alignHorizontalToFlexAlign.center}
        justifyContent={alignHorizontalToFlexAlign.center}
        borderRadius={17}
        height={getComputedHeight(64)}
        width={getComputedWidth(164)}>
        <AppText text={title ?? 'Add title'} weight="larger"  size={22} color={titleColor ?? colors.white} />
      </Box>
    </Pressable>
  );
}

export default PowerScreenButton;

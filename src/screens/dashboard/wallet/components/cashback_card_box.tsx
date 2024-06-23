import Icon from '@root/src/assets/icons/icon';
import {Box, width} from '@root/src/components';
import {BoxProps} from '@root/src/components/types';
import {
  alignHorizontalToFlexAlign,
  alignVerticalToFlexAlign,
} from '@root/src/design_system/layout/alignment';
import {
  getComputedHeight,
  getComputedWidth,
} from '@root/src/design_system/layout/responsiveness';
import {SPACING} from '@root/src/design_system/layout/spacing';
import {useAppTheme} from '@root/src/design_system/theme/theme';

function CashbackCardBox({children, ...props}: BoxProps) {
  const {colors} = useAppTheme();
  return (
    <Box
      {...props}
      height={props.height ?? '20%'}
      width={'100%'}
      padding={SPACING.medium}
      borderRadius={props.borderRadius ?? 20}
      overflow="hidden"
      justifyContent={alignVerticalToFlexAlign.center}
      backgroundColor={props.backgroundColor ?? colors.white}>
      <Icon
        name="flat-rectangle"
        style={{ position: 'absolute', right: 3,  }}
      />
      <Icon
        name="flat-rectangle"
        style={{
          position: 'absolute',
          left: 90,
        }}
      />
      <Icon
        name="flat-rectangle"
        style={{
          position: 'absolute',
          top: 50,
          left: 90,
        }}
      />
      {children}
    </Box>
  );
}

export default CashbackCardBox;

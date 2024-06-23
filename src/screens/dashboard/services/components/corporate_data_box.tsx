import {AppText, Box, Gap, Row} from '@root/src/components';
import {
  alignHorizontalToFlexAlign,
  alignVerticalToFlexAlign,
} from '@root/src/design_system/layout/alignment';
import {
  getComputedHeight,
  getComputedWidth,
} from '@root/src/design_system/layout/responsiveness';
import {useAppTheme} from '@root/src/design_system/theme/theme';
import {CorporateDataBoxProp} from './types';
import {Pressable, StyleSheet} from 'react-native';
import { formatStringAmount } from '@root/src/config/helpers/helper_functions';

function CorporateDataBox({
  amount,
  dataPlan,
  duration,
  cashbackAmouunt,
  onPress,
  backgroundColor,
}: CorporateDataBoxProp) {
  const {colors} = useAppTheme();
  return (
    <Pressable onPress={onPress}>
      <Box backgroundColor={backgroundColor} {...style.container}>
        <AppText
          text={dataPlan}
          weight="larger"
          size={22}
          color={colors.black}
        />

        <Gap height={getComputedHeight(4)} />
        <Row columnGap={2}>
          <AppText
            text={`₦${formatStringAmount({amount: amount})}`}
            weight="large"
            size={9}
            color={colors.blueMagenta}
          />
          <AppText
            text="-"
            weight="large"
            size={9}
            color={colors.blueMagenta}
          />
          <AppText
            text={`${duration}`}
            weight="big"
            size={9}
            color={colors.blueMagenta}
          />
        </Row>

        <Gap height={getComputedHeight(4)} />

        <Row justifyContent={alignVerticalToFlexAlign['space-between']}>
          <AppText
            text="Cashback"
            weight="large"
            size={9}
            color={colors.gray2}
          />
          <AppText
            text={`₦ ${formatStringAmount({amount: cashbackAmouunt})}`}
            weight="big"
            size={9}
            color={colors.gray2}
          />
        </Row>
      </Box>
    </Pressable>
  );
}

export default CorporateDataBox;

const style = StyleSheet.create({
  container: {
    alignItems: alignHorizontalToFlexAlign.center,
    justifyContent: alignHorizontalToFlexAlign.center,
    width: getComputedWidth(104),
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 22,
    marginHorizontal: getComputedWidth(3)
  },
});

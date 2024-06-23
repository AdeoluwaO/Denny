import {AppText, Box} from '@root/src/components';
import { alignHorizontalToFlexAlign } from '@root/src/design_system/layout/alignment';
import {
  getComputedHeight,
  getComputedWidth,
} from '@root/src/design_system/layout/responsiveness';
import {useAppTheme} from '@root/src/design_system/theme/theme';

function PaymentPeriodBox({period}: {period: string}) {
  const {colors} = useAppTheme();
  return (
    <Box
      backgroundColor={colors.white}
      height={getComputedHeight(61)}
      alignItems={alignHorizontalToFlexAlign.center}
      justifyContent={alignHorizontalToFlexAlign.center}
      borderRadius={20}
      width={getComputedWidth(104)}>
      <AppText text={period} weight="larger" size={14} color={colors.black} />
    </Box>
  );
}

export default PaymentPeriodBox;

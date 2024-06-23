import Icon from '@root/src/assets/icons/icon';
import {AppText, Gap, Row} from '@root/src/components';
import {alignVerticalToFlexAlign} from '@root/src/design_system/layout/alignment';
import {
  getComputedHeight,
} from '@root/src/design_system/layout/responsiveness';
import {useAppTheme} from '@root/src/design_system/theme/theme';
import CashbackCardBox from './cashback_card_box';
import { formatStringAmount } from '@root/src/config/helpers/helper_functions';

function CashbackCard({cashbackAmount}:{cashbackAmount: string}) {
  const {colors} = useAppTheme();
  return (
    <CashbackCardBox>
      <AppText text="Cashback" weight="big" size={15} color={colors.black} />
      <Gap height={getComputedHeight(8)} />
      <Row justifyContent={alignVerticalToFlexAlign['space-between']}>
        <AppText
          text={`₦ ${formatStringAmount({amount: cashbackAmount!})}`}
          weight="large"
          size={32}
          width={getComputedHeight(200)}
          textDecorationStyle="dotted"
          numberOfLines={1}
          color={colors.black}
        />
        <Icon name="eyeOff" />
      </Row>
    </CashbackCardBox>
  );
}

export default CashbackCard;

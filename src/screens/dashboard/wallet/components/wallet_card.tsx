import Icon from '@root/src/assets/icons/icon';
import {AppText, BackgroundLayout, Gap, Row} from '@root/src/components';
import {formatStringAmount} from '@root/src/config/helpers/helper_functions';
import {
  alignVerticalToFlexAlign,
} from '@root/src/design_system/layout/alignment';
import {
  getComputedHeight,
} from '@root/src/design_system/layout/responsiveness';
import {SPACING} from '@root/src/design_system/layout/spacing';
import { useAppTheme } from '@root/src/design_system/theme/theme';
import {
  useStoredUserProfile,
  userProfileStoreActions,
} from '@root/src/store/profile';

function WalletCard({walletBalance}: {walletBalance: string}) {
  const profile = useStoredUserProfile();
  const {updateProfile} = userProfileStoreActions();
  const showWalletBalance = profile?.show_wallet_balance ?? true;
  const {colors} = useAppTheme();
  return (
    <BackgroundLayout flex={0} padding={SPACING.big} borderRadius={20}>
      <AppText text="Wallet Balance" weight="big" size={15} />
      <Gap height={getComputedHeight(17)} />
      <Row
        alignItems="center"
        justifyContent={alignVerticalToFlexAlign['space-between']}>
        <AppText
          text={showWalletBalance?`₦ ${formatStringAmount({amount: walletBalance})}` : `*******`}
          weight="large"
          size={39}
          textDecorationStyle="dotted"
          numberOfLines={1}
        />
        <Icon
          name={showWalletBalance ? 'eyeOff' : 'eyeOn'}
          onPress={() => {
            updateProfile({show_wallet_balance: !showWalletBalance});
          }}
        />
      </Row>
    </BackgroundLayout>
  );
}

export default WalletCard;

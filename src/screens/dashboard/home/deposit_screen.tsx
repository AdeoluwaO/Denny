import {
  AppBottomSheet,
  AppBottomSheetTextInput,
  AppButton,
  AppText,
  Gap,
  LoadingScreen,
  SharedLayoutBox,
} from '@root/src/components';
import {useAppTheme} from '@root/src/design_system/theme/theme';
import {getComputedHeight} from '@root/src/design_system/layout/responsiveness';
import {HomeScreenStackProps} from '@root/src/routes/types/home_stack_types';
import WalletCard from '../wallet/components/wallet_card';
import {WalletInfoContainer} from './components/wallet_info_container';
import {
  useStoredUserProfile,
  userProfileStoreActions,
} from '@root/src/store/profile';
import {useBottomModalRef} from '@root/src/hooks/bottomsheet';
import {useForm} from 'react-hook-form';

function DepositScreen({navigation}: HomeScreenStackProps<'deposit'>) {
  const {colors} = useAppTheme();
  const profile = useStoredUserProfile();
  const {updateProfile} = userProfileStoreActions();
  const [
    bvnBottomsheet,
    {open: openBvnBottomsheet, close: closeBvnBottomsheet},
  ] = useBottomModalRef();
  const {control, handleSubmit} = useForm();

  function onSubmit(data: {bvn: string}) {
    //11111111111
    console.log('TEXTINPUT BVN', data.bvn);
    closeBvnBottomsheet();
  }
  return (
    <SharedLayoutBox title="Deposit">
      <WalletCard walletBalance={profile?.wallet_balance ?? '0.00'} />
      <Gap height={getComputedHeight(32)} />
      <AppText
        text="Fund Wallet"
        weight="large"
        size={32}
        color={colors.primary}
      />
      <Gap height={getComputedHeight(32)} />
      <WalletInfoContainer
        accountNumber={profile?.account_number ?? '0.00'}
        bankName={profile?.bank_name ?? 'GTB'}
        accountName={profile?.first_name ?? ''}
      />
      <Gap height={getComputedHeight(32)} />
      <AppText
        text={'Payment would reflect in wallet when\ntransaction is approved'}
        weight="bigger"
        color={colors.primary}
        textAlign="center"
      />
      <Gap height={getComputedHeight(32)} />
      {!profile?.account_number && (
        <AppButton
          // title="Or pay with card"
          title="Get Account Number"
          onPress={() => {
            openBvnBottomsheet();
            // navigation.navigate('deposit-with-card');
          }}
        />
      )}
      <AppBottomSheet
        ref={bvnBottomsheet}
        snaps={['40%', '40%']}
        title="Verify BVN"
        index={1}>
        <AppBottomSheetTextInput
          control={control}
          label="BVN"
          name={'bvn'}
          backgroundColor={colors.white}
        />
        <Gap height={getComputedHeight(24)} />
        <AppButton title="Continue" onPress={handleSubmit(onSubmit)} />
        <Gap height={getComputedHeight(20)} />
      </AppBottomSheet>
    </SharedLayoutBox>
  );
}

export default DepositScreen;

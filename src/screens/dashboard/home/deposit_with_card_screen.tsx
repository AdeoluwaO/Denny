import {
  AppBottomSheet,
  AppButton,
  AppText,
  AppTextInput,
  Box,
  Gap,
  Row,
  SharedLayoutBox,
} from '@root/src/components';
import {useAppTheme} from '@root/src/design_system/theme/theme';
import {
  getComputedHeight,
} from '@root/src/design_system/layout/responsiveness';
import {BottomSheetModal} from '@gorhom/bottom-sheet';
import {useRef} from 'react';
import Icon from '@root/src/assets/icons/icon';
import {FLEX} from '@root/App';
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import {fundWalletWithCard} from '@root/src/utils/validators';

function DepositWithCardScreen() {
  const {colors, status} = useAppTheme();
  const {
    control,
    setFocus,
    formState: {errors},
  } = useForm({
    defaultValues: {
      amount: '',
      card_holder: '',
      card_number: '',
      cvv: '',
      expiry_date: '',
    },
    mode: 'onChange',
    resolver: yupResolver(fundWalletWithCard),
  });
  const bottomSheetRef = useRef<BottomSheetModal>(null);
  return (
    <SharedLayoutBox title="Deposit with card">
      <AppText
        text="Fund Wallet"
        weight="large"
        size={32}
        color={colors.primary}
      />
      <Gap height={getComputedHeight(32)} />
      <AppTextInput
        label={'Amount'}
        textColor={colors.black}
        keyboardType="phone-pad"
        backgroundColor={colors.white}
        control={control}
        name="amount"
        error={errors.amount?.message}
        onSubmitEditing={() => setFocus('card_number')}
      />
      <Gap height={getComputedHeight(20)} />
      <AppTextInput
        label={'Card number'}
        textColor={colors.black}
        keyboardType="phone-pad"
        backgroundColor={colors.white}
        control={control}
        name="card_number"
        error={errors.card_number?.message}
        onSubmitEditing={() => setFocus('card_holder')}
      />
      <Gap height={getComputedHeight(20)} />
      <AppTextInput
        label={'Card holder'}
        textColor={colors.black}
        keyboardType="phone-pad"
        backgroundColor={colors.white}
        control={control}
        name="card_holder"
        error={errors.card_holder?.message}
        onSubmitEditing={() => setFocus('expiry_date')}
      />
      <Gap height={getComputedHeight(20)} />
      <Row>
        <AppTextInput
          // width={getComputedWidth(165)}
          label="Expiry Date"
          textColor={colors.black}
          keyboardType="phone-pad"
          backgroundColor={colors.white}
          control={control}
          name="expiry_date"
          onSubmitEditing={() => setFocus('cvv')}
          error={errors.expiry_date?.message}
        />
        <AppTextInput
          // width={getComputedWidth(165)}
          label="CVV"
          textColor={colors.black}
          keyboardType="phone-pad"
          backgroundColor={colors.white}
          control={control}
          name="cvv"
          error={errors.cvv?.message}
          onSubmitEditing={() => {}}
        />
      </Row>
      <Gap height={getComputedHeight(20)} />
      <AppButton
        title="Proceed"
        onPress={() => {
          bottomSheetRef.current?.present();
        }}
      />
      <AppBottomSheet ref={bottomSheetRef} snaps={['50%']} index={1}>
        <Box flex={FLEX} alignItems="center">
          <Icon name="success" />
          <Gap height={getComputedHeight(34)} />
          <AppText
            text="Deposit Successful"
            weight="large"
            color={status.successful}
          />
          <Gap height={getComputedHeight(5)} />
          <AppText
            text="₦ 500.00"
            weight="bigger"
            color={colors.black}
            size={40}
          />
          <Gap height={getComputedHeight(24)} />
          <AppButton
            title="Pay"
            onPress={() => {
              bottomSheetRef.current?.close();
            }}
          />
        </Box>
        <Gap height={getComputedHeight(16)} />
      </AppBottomSheet>
    </SharedLayoutBox>
  );
}

export default DepositWithCardScreen;

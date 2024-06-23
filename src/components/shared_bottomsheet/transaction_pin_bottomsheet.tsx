import React from 'react';
import {getComputedHeight} from '@root/src/design_system/layout/responsiveness';
import {Box} from '../Box';
import {AppBottomSheet} from '../bottomsheet/bottomsheet';
import {Gap} from '../gap';
import {AppText} from '../text';
import Icon from '@root/src/assets/icons/icon';
import {useAppTheme} from '@root/src/design_system/theme/theme';
import {BottomSheetModalMethods} from '@gorhom/bottom-sheet/lib/typescript/types';
import {alignHorizontalToFlexAlign} from '@root/src/design_system/layout/alignment';
import {OtpInputField} from '../otp_input_field';
import {useNavigation} from '@react-navigation/native';
import {useBottomModalRef} from '@root/src/hooks/bottomsheet';
import {HomeStackParamsList} from '@root/src/routes/types/home_stack_types';

interface Props {
  onSubmit: (pin: string[]) => void;
}

export const TransactionPinBottomSheet = React.forwardRef(
  function TransactionPinBottomSheet(
    {onSubmit}: Props,
    ref: React.Ref<BottomSheetModalMethods>,
  ) {
    const {colors} = useAppTheme();
    const navigation = useNavigation();
    const [topModal, {closeAll}] = useBottomModalRef();

    return (
      <AppBottomSheet ref={ref} snaps={['40%', '60%']} index={1}>
        <Box alignItems={alignHorizontalToFlexAlign.center}>
          <Box alignSelf={alignHorizontalToFlexAlign.right}>
            {/* @ts-ignore */}
            <Icon name="close" onPress={() => ref?.current?.close?.()} />
          </Box>
          <AppText
            text="Enter Payment PIN"
            weight="big"
            color={colors.dimGray}
            textAlign="center"
          />
          <OtpInputField  onSubmit={onSubmit} />
          <Gap height={getComputedHeight(24)} />
          <AppText
            text="Forgot Transaction Pin?"
            weight="bigger"
            color={colors.lightGreen}
            onPress={() => {
              closeAll();
              /// @ts-ignore
              navigation.navigate('change-transaction-pin');
            }}
          />
        </Box>
      </AppBottomSheet>
    );
  },
);

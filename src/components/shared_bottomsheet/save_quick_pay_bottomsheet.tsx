import React from 'react';
import {getComputedHeight} from '@root/src/design_system/layout/responsiveness';
import {Box} from '../Box';
import {AppBottomSheet} from '../bottomsheet/bottomsheet';
import {BottomSheetTile} from '../bottomsheet/bottomsheet_tile';
import {AppButton} from '../button';
import {Gap} from '../gap';
import {Row} from '../row';
import {AppText} from '../text';
import Icon from '@root/src/assets/icons/icon';
import {useAppTheme} from '@root/src/design_system/theme/theme';
import {useBottomModalRef} from '@root/src/hooks/bottomsheet';
import {BottomSheetModalMethods} from '@gorhom/bottom-sheet/lib/typescript/types';
import {alignHorizontalToFlexAlign} from '@root/src/design_system/layout/alignment';
import {FLEX} from '@root/App';
import {AppBottomSheetTextInput} from '../app_bottomsheet_textinput';
import ServicesRowText from '@root/src/screens/dashboard/services/services_row_text';
import { useForm } from 'react-hook-form';

export const SaveQuickPayBottomsheet = React.forwardRef(
  function SaveQuickPayBottomsheet(
    {
      serviceTitle,
      amount,
      phoneNumber,
      onSaveQuickPay,
      ...props
    }: {
      onSaveQuickPay(name: string): void;
      phoneNumber: string;
      serviceTitle: string;
      amount: string;
    },
    ref: React.Ref<BottomSheetModalMethods>,
  ) {
    const {colors} = useAppTheme();
    const {control, getValues, reset} = useForm();
    return (
      <AppBottomSheet ref={ref} snaps={['60%', '85%']} index={1}>
        <Box backgroundColor={colors.whiteSmoke}>
          <Box alignItems={alignHorizontalToFlexAlign.right}>
            {/* @ts-ignore */}
            <Icon name="close" onPress={() => ref?.current.close()} />
          </Box>
          <AppText
            text="Save Quick Pay"
            weight="large"
            size={24}
            textAlign="center"
            color={colors.primary}
          />
          <Gap height={getComputedHeight(24)} />
          <ServicesRowText title="Service" message={serviceTitle} />
          <Gap height={getComputedHeight(24)} />
          <ServicesRowText title="Amount" message={amount} />
          <Gap height={getComputedHeight(24)} />
          <ServicesRowText title="Phone Number" message={phoneNumber} />
          <Gap height={getComputedHeight(24)} />
          <AppText
            text="Quick Pay title"
            weight="large"
            color={colors.primary}
          />
          <Gap height={getComputedHeight(24)} />
          <AppBottomSheetTextInput label="Enter name" control={control} name={'name'} />
        </Box>
        <Gap height={getComputedHeight(24)} />
        <AppButton title="Save" onPress={() => {
          const enteredName = getValues().name;
          console.log('ENTERED VALUE', enteredName)
          onSaveQuickPay(enteredName);
          reset();
        }} />
        <Gap height={getComputedHeight(24)} />
      </AppBottomSheet>
    );
  },
);
 
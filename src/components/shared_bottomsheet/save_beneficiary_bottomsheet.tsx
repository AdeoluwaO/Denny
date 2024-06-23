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

export const SaveBeneficiaryBottomSheet = React.forwardRef(
  function SaveBeneficiaryBottomSheet(
    {
      phoneNumber,
      onSaveBeneficiary,
      ...props
    }: {onSaveBeneficiary(name: string): void; phoneNumber: string},
    ref: React.Ref<BottomSheetModalMethods>,
  ) {
    const {colors} = useAppTheme();
    const {control, getValues} = useForm();
    return (
      <AppBottomSheet ref={ref} snaps={['45%', '70%']} index={1}>
        <Box backgroundColor={colors.whiteSmoke}>
          <Box alignItems={alignHorizontalToFlexAlign.right}>
            {/* @ts-ignore */}
            <Icon name="close" onPress={() => ref?.current.close()} />
          </Box>
          <AppText
            text="Save Beneficiary"
            weight="large"
            size={24}
            textAlign="center"
            color={colors.primary}
          />
          <Gap height={getComputedHeight(24)} />
          <ServicesRowText title="Phone Number" message={phoneNumber} />
          <Gap height={getComputedHeight(24)} />
          <AppText
            text="Beneficiary name"
            weight="large"
            size={15}
            color={colors.primary}
          />

          <Gap height={getComputedHeight(24)} />
          <AppBottomSheetTextInput label="Enter name" control={control} name='textinput' />
        </Box>
        <Gap height={getComputedHeight(24)} />
        <AppButton title="Save" onPress={() => {
          const name = getValues().textinput;
          onSaveBeneficiary(name)
        }} />
        <Gap height={getComputedHeight(24)} />
      </AppBottomSheet>
    );
  },
);

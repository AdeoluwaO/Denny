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
import {BottomSheetModalMethods} from '@gorhom/bottom-sheet/lib/typescript/types';
import {alignHorizontalToFlexAlign} from '@root/src/design_system/layout/alignment';
import {FLEX} from '@root/App';
import {formatStringAmount} from '@root/src/config/helpers/helper_functions';

interface Props {
  onTapSaveAsBeneficiary: () => void;
  onTapOneTimePayment: () => void;
  error?: boolean;
  contents?: JSX.Element;
  amount: string;
  errorMessage?: string;
  onTapDone(): void;
}

export const TransactionStatusBottomSheet = React.forwardRef(
  function TransactionStatusBottomSheet(
    {
      contents,
      onTapDone,
      error = false,
      errorMessage,
      amount,
      onTapOneTimePayment,
      onTapSaveAsBeneficiary,
    }: Props,
    ref: React.Ref<BottomSheetModalMethods>,
  ) {
    const {colors, status} = useAppTheme();
    return (
      <AppBottomSheet ref={ref} snaps={['55%']} index={1}>
        <Box alignItems={alignHorizontalToFlexAlign.center} flex={FLEX}>
          <Icon name={error ? 'error' : 'success'} />
          <Gap height={getComputedHeight(34)} />
          <AppText
            text={error ? 'Insufficient Funds' : 'success'}
            weight="large"
            color={error ? status.pending : status.successful}
          />
          <Gap height={getComputedHeight(5)} />
          <AppText
            text={`₦ ${formatStringAmount({amount: amount})}`}
            weight="bigger"
            color={colors.black}
            size={40}
          />
          <Gap height={getComputedHeight(24)} />
          {contents}
          <Gap height={getComputedHeight(24)} />
          <Row flexWrap="nowrap">
            <BottomSheetTile
              icon="user-badge"
              title="Save as"
              subtitle="Beneficiary"
              onPress={onTapSaveAsBeneficiary}
            />
            <BottomSheetTile
              icon="award-badge"
              title="Save as"
              subtitle="1-Tap Payment"
              onPress={onTapOneTimePayment}
            />
          </Row>
        </Box>
        <Gap height={getComputedHeight(16)} />

        <AppButton
          title="Done"
          onPress={() => {
            onTapDone();
            /// @ts-ignore
            ref?.current.close();
          }}
        />
        <Gap height={getComputedHeight(8)} />
      </AppBottomSheet>
    );
  },
);

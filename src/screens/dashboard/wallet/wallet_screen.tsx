/* eslint-disable react/react-in-jsx-scope */
import {
  AppFlatlist,
  AppText,
  Box,
  Gap,
  LayoutBox,
  Row,
} from '@root/src/components';
import {
  alignHorizontalToFlexAlign,
  alignVerticalToFlexAlign,
} from '@root/src/design_system/layout/alignment';
import {useAppTheme} from '@root/src/design_system/theme/theme';
import WalletCard from './components/wallet_card';
import HomeButton from '../home/components/home_button';
import {
  getComputedHeight,
  getComputedWidth,
} from '@root/src/design_system/layout/responsiveness';
import CashbackCard from './components/cashback_card';
import TransactionsTile from '../home/components/transaction_tile';
import {
  NestedBottomBarScreenProps,
} from '@root/src/routes/types/app_stack_types';
import {useStoredUserProfile} from '@root/src/store/profile';
import {
  calCashBackEarningMonth,
  calCashBackEarningYear,
} from '@root/src/config/helpers/helper_functions';

export function WalletScreen({
  navigation,
}: NestedBottomBarScreenProps<'wallet'>) {
  const {colors} = useAppTheme();
  const profile = useStoredUserProfile();


  return (
    <LayoutBox paddingHorizontal={getComputedWidth(16)}>
      <AppFlatlist
        data={[]}
        ListHeaderComponent={() => {
          return (
            <>
              <Row alignSelf={alignHorizontalToFlexAlign.left}>
                <AppText
                  text="Wallet"
                  weight="bigger"
                  size={24}
                  color={colors.lightGreen}
                />
              </Row>
              <Gap height={getComputedHeight(34)} />

              <WalletCard walletBalance={profile?.wallet_balance??'0.00'} />
              <Gap height={getComputedHeight(16)} />
              <HomeButton
                    icon="add"
                    title="Add Cash"
                    width={getComputedWidth(135)}
                    onPress={() => {
                      /// @ts-ignore
                      navigation.navigate('deposit');
                    }}
                    textColor={colors.black}
                    fillColor={colors.black}
                    borderColor={colors.black}
                  />
              <Gap height={getComputedHeight(16)} />
              <CashbackCard cashbackAmount={profile?.cashback ?? '0.00'} />
              <Gap height={getComputedHeight(16)} />
              <Row justifyContent={alignVerticalToFlexAlign['space-between']}>
                <Box>
                  <AppText
                    text="Earnings this month"
                    weight="big"
                    size={14}
                    color={colors.lightGrey}
                  />
                  <AppText
                    text={`₦ ${calCashBackEarningMonth([])}`}
                    weight="large"
                    size={15}
                    color={colors.black}
                  />
                </Box>
                <Box
                  borderWidth={0.4}
                  borderColor={colors.opac}
                  height={getComputedHeight(40)}>
                  <></>
                </Box>
                <Box>
                  <AppText
                    text="Earnings this year"
                    weight="big"
                    size={14}
                    color={colors.lightGrey}
                  />
                  <AppText
                    text={`₦ ${calCashBackEarningYear([])}`}
                    weight="large"
                    size={15}
                    color={colors.black}
                  />
                </Box>
              </Row>
              <Gap height={getComputedHeight(16)} />
              <AppText
                text="Cashback"
                weight="big"
                size={15}
                color={colors.black}
              />
              <Gap height={getComputedHeight(16)} />
            </>
          );
        }}
        renderItem={({item, index}: {item; index: number}) => {
          return (
            <TransactionsTile
              iconName="electricity"
              transactionType={item.name ?? ''}
              transactionStatus={item.status ?? ''}
              amount={item.amount ?? ''}
              date={item.created ?? ''}
              time={item.created ?? ''}
              onPress={() => {}}
            />
          );
        }}
        ItemSeparatorComponent={() => <Gap height={getComputedHeight(23)} />}
      />
    </LayoutBox>
  );
}

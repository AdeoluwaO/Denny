import {RadioButton, Text} from 'react-native-paper';
import Icon from '../../assets/icons/icon';
import {Box} from '../Box';
import {Row} from '../row';
import {AppText} from '../text';
import {useAppTheme} from '../../design_system/theme/theme';
import {StyleSheet} from 'react-native';
import {alignVerticalToFlexAlign} from '../../design_system/layout/alignment';
import {useState} from 'react';

export function BottomSheetWalletTile({
  walletBalance,
  onSelectWallet,
}: {
  walletBalance: string;
  onSelectWallet: (value: boolean) => void;
}) {
  const {colors} = useAppTheme();
  const [selectWallet, setSelectWallet] = useState<boolean>(false);

  return (
    <Box {...styles.container} backgroundColor={colors.white}>
      <Row {...styles.outterRow}>
        <Row>
          <Text>
            <AppText text="Wallet " weight="bigger" color={colors.primary} />
            <AppText
              text={`(₦${walletBalance})`}
              weight="large"
              color={colors.primary}
            />
          </Text>
        </Row>
        <RadioButton
          value="Test"
          status={selectWallet ? 'checked' : 'unchecked'}
          onPress={() => {
            onSelectWallet(selectWallet);
            setSelectWallet(!selectWallet);
          }}
        />
      </Row>
    </Box>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: 6,
    borderRadius: 20,
  },
  outterRow: {
    justifyContent: alignVerticalToFlexAlign['space-between'],
  },
});

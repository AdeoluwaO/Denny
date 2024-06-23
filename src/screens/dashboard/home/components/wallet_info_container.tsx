import {Row, AppText, Gap, Box} from '@root/src/components';
import {alignVerticalToFlexAlign} from '@root/src/design_system/layout/alignment';
import {getComputedHeight} from '@root/src/design_system/layout/responsiveness';
import Icon from '@root/src/assets/icons/icon';
import Toast from '@root/src/components/app_snackbar';
import {useAppTheme} from '@root/src/design_system/theme/theme';
import {WalletInfoContainerProps} from './types';
import { StyleSheet } from 'react-native';
import Clipboard from '@react-native-clipboard/clipboard';
import ServicesRowText from '../../services/services_row_text';

export const WalletInfoContainer = ({
  accountName,
  accountNumber,
  bankName,
}: WalletInfoContainerProps) => {
  const {colors} = useAppTheme();
  return (
    <Box {...styles.container}>
      <Row justifyContent={alignVerticalToFlexAlign['space-between']}>
        <AppText
          text="Account number"
          weight="bigger"
          size={14}
          color={colors.fadedGreen}
        />
        <Row>
          <AppText
            text={accountNumber}
            weight="large"
            size={14}
            color={colors.primary}
          />
          <Icon
            name="copy"
            onPress={() => {
              Clipboard.setString(accountNumber)
              Toast.showSuccessSnackBar({text: 'Copied to clipboard'});
            }}
          />
        </Row>
      </Row>
      <Gap height={getComputedHeight(16)} />
      <ServicesRowText title="Bank" message={bankName} />
      <Gap height={getComputedHeight(16)} />
      <ServicesRowText title="Account name" message={accountName} />
    </Box>
  );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius:20
    }
})

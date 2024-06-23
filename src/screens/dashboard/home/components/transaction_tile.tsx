import Icon from '@root/src/assets/icons/icon';
import {AppText, Box, Row} from '@root/src/components';
import {
  alignHorizontalToFlexAlign,
  alignVerticalToFlexAlign,
} from '@root/src/design_system/layout/alignment';
import {
  getComputedHeight,
  getComputedWidth,
} from '../../../../design_system/layout/responsiveness';
import {useAppTheme} from '@root/src/design_system/theme/theme';
import {Pressable} from 'react-native';
import {TransactionTileProps} from './types';
import {
  formatStringAmount,
  getStatusColor,
} from 'src/config/helpers/helper_functions';
import {format} from 'date-fns';


function TransactionsTile({
  iconName,
  transactionType,
  amount,
  transactionStatus,
  date,
  time,
  onPress,
}: TransactionTileProps) {
  const {colors} = useAppTheme();
  const formattedDate = new Date(date);

  return (
    <Pressable onPress={onPress}>
      <Row justifyContent={alignHorizontalToFlexAlign.left}>
        {/* icons container box */}
        <Box
          height={getComputedHeight(48)}
          width={getComputedWidth(48)}
          alignItems={alignHorizontalToFlexAlign.center}
          borderRadius={15}
          justifyContent={alignVerticalToFlexAlign.center}
          backgroundColor={colors.opacGreeen}>
          <Icon name={iconName} />
        </Box>

        {/* text container coluumn box */}
        <Box width={'80%'}>
          <Row justifyContent={alignVerticalToFlexAlign['space-between']}>
            <AppText
              text={transactionType}
              weight="large"
              size={14}
              width={'50%'}
              numberOfLines={1}
              textDecorationStyle="dotted"
              color={colors.black}
            />
            <AppText
              text={`₦ ${formatStringAmount({
                amount: amount,
                formatterOptions: {
                  style: 'decimal',
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                  minimumIntegerDigits: 1,
                },
              })}`}
              weight="larger"
              size={14}
              // width={'40%'}
              numberOfLines={1}
              textDecorationStyle="dotted"
              // textAlign='right'
              color={getStatusColor(transactionStatus)}
            />
          </Row>
          {/* transaction details box */}
          <Row justifyContent={alignVerticalToFlexAlign['space-between']}>
            <AppText
              text={transactionStatus}
              weight="large"
              size={10}
              color={getStatusColor(transactionStatus)}
            />
            <AppText
              text={`${format(
                date,
                'do MMMM, yyyy',
              )}  |  ${formattedDate.toLocaleTimeString('en-US', {
                hour: 'numeric',
                minute: 'numeric',
              })}`}
              weight="medium"
              size={10}
              color={colors.obsidian}
            />
          </Row>
        </Box>
      </Row>
    </Pressable>
  );
}

export default TransactionsTile;

import {AppText, Box, Gap, Row} from '@root/src/components';
import {
  alignHorizontalToFlexAlign,
  alignVerticalToFlexAlign,
} from '@root/src/design_system/layout/alignment';
import {
  getComputedHeight,
  getComputedWidth,
} from '@root/src/design_system/layout/responsiveness';
import {useAppTheme} from '@root/src/design_system/theme/theme';
import {Text} from 'react-native-paper';
import {ServiceAdBoxProp} from './types';
import {Pressable, StyleSheet} from 'react-native';
import {formatStringAmount} from '@root/src/config/helpers/helper_functions';

function ServiceAdBox({amount, cashbackAmouunt,backgroundColor, onPress}: ServiceAdBoxProp) {
  const {colors} = useAppTheme();
  return (
    <Pressable onPress={onPress}>
      <Box backgroundColor={backgroundColor ?? colors.white} {...style.container}>
        <Text>
          <AppText text="₦" weight="big" size={12} color={colors.black} />
          <AppText
            text={formatStringAmount({
              amount: amount,
              formatterOptions: {
                minimumFractionDigits: 0,
                maximumFractionDigits: 0,
              },
            })}
            weight="larger"
            size={22}
            textAlign='center'
            alignSelf='center'
            color={colors.black}
          />
        </Text>
        <Gap height={getComputedHeight(21)} />
        <Row
          width={'100%'}
          flexWrap="nowrap"
          justifyContent={alignVerticalToFlexAlign['space-between']}>
          <AppText
            text="Cashback"
            weight="large"
            size={10}
            color={colors.black}
          />
          <AppText
            text={`₦ ${formatStringAmount({amount: cashbackAmouunt})}`}
            weight="big"
            size={10}
            color={colors.black}
          />
        </Row>
      </Box>
    </Pressable>
  );
}

export default ServiceAdBox;

const style = StyleSheet.create({
  container: {
    alignItems: alignHorizontalToFlexAlign.center,
    borderRadius: 20,
    paddingVertical: 22,
    paddingHorizontal: 12,
    width: getComputedWidth(104),
    marginHorizontal: getComputedWidth(3),
  },
});

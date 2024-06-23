import {Box, AppText} from '@root/src/components';
import {alignHorizontalToFlexAlign} from '@root/src/design_system/layout/alignment';
import {
  getComputedHeight,
  getComputedWidth,
} from '@root/src/design_system/layout/responsiveness';
import {useAppTheme} from '@root/src/design_system/theme/theme';
import { StyleSheet } from 'react-native';

function DropdownSuffixIcon({text}: {text: string}) {
  const {colors} = useAppTheme();
  return (
    <Box
    backgroundColor={colors.lightBlue}
    // backgroundColor={colors.lightBlue}
      {...style.container}
      >
      <AppText text={text} weight="large" size={11} />
    </Box>
  );
}

export default DropdownSuffixIcon;


const style = StyleSheet.create({
  container: {
    height: getComputedHeight(46),
      width: getComputedWidth(46),
    // padding: 10,
      borderRadius: 18,
      
      justifyContent: alignHorizontalToFlexAlign.center,
      alignItems: alignHorizontalToFlexAlign.center,
      
  }
})
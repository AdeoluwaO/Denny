import {
  BackgroundLayout,
  Box,
  Gap,
  AppScrollView,
  AppText,
} from 'src/components/index';
import Icon from '@root/src/assets/icons/icon';
import { AuthBoxProp } from './types';
import { alignHorizontalToFlexAlign } from '@root/src/design_system/layout/alignment';
import { FLEX } from '@root/App';
import {
  getComputedHeight,
  getComputedWidth,
} from '@root/src/design_system/layout/responsiveness';
import { useAppTheme } from '@root/src/design_system/theme/theme';
import { Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {
  AuthStackParamsList,
} from '@root/src/routes/types/auth_stack_types';
import { StackNavigationProp } from '@react-navigation/stack';

function AuthMainBox({ children }: AuthBoxProp) {
  const { colors } = useAppTheme();
  const navigation = useNavigation<StackNavigationProp<AuthStackParamsList>>();
  return (
    // <AppScrollView automaticallyAdjustKeyboardInsets={true} style={{backgroundColor: colors.primary}}>
    <BackgroundLayout flex={FLEX}>
      <Icon
        style={{ alignSelf: alignHorizontalToFlexAlign.right }}
        name="topbar"
      />
      {/* <Gap height={getComputedHeight(33)} /> */}

      <Box
        flex={FLEX}
        alignItems={alignHorizontalToFlexAlign.center}
        paddingHorizontal={getComputedWidth(16)}>
        {children}
        <Gap height={getComputedHeight(20)} />
      </Box>
    </BackgroundLayout>
    // </AppScrollView>
  );
}

export default AuthMainBox;

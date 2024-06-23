import {FLEX} from '@root/App';
import Icon from '@root/src/assets/icons/icon';
import {
  AppButton,
  AppText,
  BackgroundLayout,
  BorderButton,
  Box,
  Gap,
} from '@root/src/components';
import {alignHorizontalToFlexAlign} from '@root/src/design_system/layout/alignment';
import {
  getComputedHeight,
  getComputedWidth,
} from '@root/src/design_system/layout/responsiveness';
import {AuthStackScreenProps} from '@root/src/routes/types/auth_stack_types';
import { useAuthStoreActions } from '@root/src/store/auth';
import {StyleSheet} from 'react-native';
import {Text} from 'react-native-paper';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

export function OnboardingLandingScreen({
  navigation,
}: AuthStackScreenProps<'landing-screen'>) {
  const insets = useSafeAreaInsets();
  const {setHasOnboarded} = useAuthStoreActions();

  return (
    <BackgroundLayout flex={FLEX}>
      <Box {...style.container} paddingTop={insets.top}>
        <Gap height={getComputedHeight(16)} />
        <Text style={{textAlign: 'center'}}>
          {/* ,   */}
          <AppText text={'Simplify your\n'} weight="small" size={32} />
          <AppText text={'Life '} weight="large" size={32} />
          <AppText text={'one '} weight="small" size={32} />
          <AppText text={'Task\n'} weight="large" size={32} />
          <AppText text={'at a Time'} weight="small" size={32} />
        </Text>
        <Gap height={getComputedHeight(25)} />

        <Icon name="onboarding" />
        <AppText
          weight="small"
          textAlign="center"
          text={
            ' Denny keeps your important tasks\nat your fingertips'
          }
        />
        <Gap height={getComputedHeight(43)} />

        <BorderButton
          title="Login"
          width={getComputedWidth(342)}
          onPress={() => {
            setHasOnboarded(true);
            navigation.reset({index: 0, routes: [{name: 'login'}]})
          }}
          />
        <Gap height={getComputedHeight(16)} />
        <AppButton
          title="Sign up"
          width={getComputedWidth(342)}
          onPress={() => {
            setHasOnboarded(true);
            navigation.reset({index: 0, routes: [{name: 'sign-up'}]})
          }}
        />
        <Gap height={getComputedHeight(16)} />
      </Box>
    </BackgroundLayout>
  );
}

const style = StyleSheet.create({
  container: {
    flex: FLEX,
    alignItems: alignHorizontalToFlexAlign.center,
    justifyContent: alignHorizontalToFlexAlign.center,
  },
});

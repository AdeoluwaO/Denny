import {createStackNavigator} from '@react-navigation/stack';
import {
  OnboardingScreen,
  OnboardingScreenWoman,
  OnboardingScreenFamily,
  OnboardingLandingScreen,
} from 'src/screens/onboarding/index';
import {AuthStackParamsList} from './types/auth_stack_types';
import {
  LoginScreen,
  SignupScreen,
} from 'src/screens/auth/index';
import {
  AuthStackScreenOptions,
} from './navigator_setup/navigators_options_setup';
import TermsAndCondition from '../screens/auth/terms_and_conditions';

export function AuthStackScreen() {
  const Stack = createStackNavigator<AuthStackParamsList>();
  const Onboarding = (
    <Stack.Group>
      <Stack.Screen name="onboarding" component={OnboardingScreen} />
      <Stack.Screen name="onboarding-one" component={OnboardingScreenWoman} />
      <Stack.Screen name="onboarding-two" component={OnboardingScreenFamily} />
      <Stack.Screen name="landing-screen" component={OnboardingLandingScreen} />
    </Stack.Group>
  );
  return (
    <Stack.Navigator  screenOptions={AuthStackScreenOptions}>
      {Onboarding}
      <Stack.Screen name="login" component={LoginScreen} />
      <Stack.Screen name="sign-up" component={SignupScreen} />
      <Stack.Screen name="tsandcs" component={TermsAndCondition} />
    </Stack.Navigator>
  );
}

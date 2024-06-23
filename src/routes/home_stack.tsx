import {createStackNavigator} from '@react-navigation/stack';
import {HomeStackParamsList} from './types/home_stack_types';
import {BottomBar} from './bottom_tab_bar';
import {screenOptions} from './navigator_setup/navigators_options_setup';
import EditProfileScreen from '../screens/dashboard/profile/edit_profle_screen';
import DeleteAccountScreen from '../screens/dashboard/profile/delete_account';
import DepositScreen from '../screens/dashboard/home/deposit_screen';
import DepositWithCardScreen from '../screens/dashboard/home/deposit_with_card_screen';
import TermsAndCondition from '../screens/auth/terms_and_conditions';

export function HomeScreenStack() {
  const Stack = createStackNavigator<HomeStackParamsList>();

  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen name="home" component={BottomBar} />
      <Stack.Screen name="deposit" component={DepositScreen} />
      <Stack.Screen
        name="deposit-with-card"
        component={DepositWithCardScreen}
      />
      <Stack.Screen name="tsandcs" component={TermsAndCondition} />
      <Stack.Screen name="edit-profile" component={EditProfileScreen} />

      <Stack.Screen name="delete-account" component={DeleteAccountScreen} />
    </Stack.Navigator>
  );
}

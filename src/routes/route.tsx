import {NavigationContainer} from '@react-navigation/native';
import {AuthStackScreen} from './auth_stack';
import RNBootSplash from 'react-native-bootsplash';
import {useAuth} from '../context/auth_context';
import {HomeScreenStack} from './home_stack';
export function Route() {
  const {authenticated, loading} = useAuth();
  console.log('AUTH VALUE IS ', authenticated);
  return (
    <NavigationContainer onReady={() => RNBootSplash.hide()}>
      {authenticated ? <HomeScreenStack /> : <AuthStackScreen />}
    </NavigationContainer>
  );
}

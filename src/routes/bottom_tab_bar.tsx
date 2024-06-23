import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  ProfileScreen,
  ServicesScreen,
  WalletScreen,
} from '../screens/dashboard';
import Icons from 'react-native-vector-icons/Ionicons';
import { useAppTheme } from '../design_system/theme/theme';



export function BottomBar() {
  const BottomTabBar = createBottomTabNavigator();
  const { colors } = useAppTheme();
  const isActive = ({ focused }: { focused: boolean }) => focused ? colors.white : colors.opacWhite80;
  return (
    <BottomTabBar.Navigator
      backBehavior="none"
      safeAreaInsets={{ top: 0 }}
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: colors.secondary
        },
      }}>

      <BottomTabBar.Screen
        options={{
          tabBarIcon: ({ focused, color, size }: { focused: boolean, color: string, size: number }) => <Icons name="home" size={30} color={isActive({ focused: focused })} />,
        }}
        name="home"
        component={ServicesScreen}
      />
      <BottomTabBar.Screen
        options={{
          tabBarIcon: ({ focused, color, size }: { focused: boolean, color: string, size: number }) => <Icons name="wallet" size={30} color={isActive({ focused: focused })} />,
        }}
        name="wallet"
        component={WalletScreen}
      />
      <BottomTabBar.Screen
        options={{
          tabBarIcon: ({ focused, color, size }: { focused: boolean, color: string, size: number }) => <Icons name="settings" size={30} color={isActive({ focused: focused })} />,
        }}
        name="settings"
        component={ProfileScreen}
      />
    </BottomTabBar.Navigator>
  );
}

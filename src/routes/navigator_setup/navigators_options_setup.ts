import {
  TransitionPresets,
} from '@react-navigation/stack';

export const screenOptions = () => ({
  ...TransitionPresets.SlideFromRightIOS,
  headerShown: false,
  safeAreaInsets: {top: 0},
});
export const AuthStackScreenOptions = () => ({
  ...TransitionPresets.SlideFromRightIOS,
  headerShown: false,
  safeAreaInsets: {top: 0},
});

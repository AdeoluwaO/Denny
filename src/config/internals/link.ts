import {Linking} from 'react-native';

export function openInstagram() {
  return Linking.openURL('https://www.instagram.com/');
}
export function openTwitter() {
  return Linking.openURL('https://twitter.com/');
}

export function openEmail() {
  return Linking.openURL('mailto:odejobbipauuul10@gmail.comm');
}

export function openFacebook() {
  return Linking.openURL('https://web.facebook.com/');
}

export function openSettings() {
  Linking.openURL('app-settings:');
}

import {Keyboard} from 'react-native';

function dismissKeyboard() {
    if(Keyboard.isVisible())
  return Keyboard.dismiss();
}

export function useKeyboardMethods() {
  return {dismissKeyboard};
}

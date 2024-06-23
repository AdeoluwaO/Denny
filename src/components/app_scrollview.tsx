import {FLEX} from '@root/App';
import {Component, ReactNode} from 'react';
import {KeyboardAvoidingView, ScrollView} from 'react-native';
import {AppScrollViewProps} from './types';

export const AppScrollView = ({
  children,
  ...props
}: AppScrollViewProps) => {
  return (
    <ScrollView
      keyboardShouldPersistTaps="handled"
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
      automaticallyAdjustKeyboardInsets={props.automaticallyAdjustKeyboardInsets ?? true}
      overScrollMode="never"
      bounces
      contentContainerStyle={props.contentContainerStyle ?? {flexGrow: FLEX}}
      bouncesZoom
      {...props}>

      {children}
    </ScrollView>
  );
};

import {
  ViewStyle,
  ImageStyle,
  ImageSourcePropType,
  TextProps,
  TextStyle,
  ScrollViewProps,
  FlatListProps,
  StyleProp,
} from 'react-native';
import {SnackbarProps} from 'react-native-paper';
import {TextInputProps} from 'react-native';
import {FontFamily} from 'src/design_system/theme/fonts';
import {IconName} from '@assets/icons/types';
import {DatePickerProps} from 'react-native-date-picker';
import {TextAlign} from '../design_system/layout/alignment';
import React, {Component, ReactNode} from 'react';
import {Control} from 'react-hook-form';
import  {HTMLViewProps} from "react-native-htmlview";



export type SharedLayoutProp = {
  children: ReactNode;
  title?: string;
  trailing?: string;
  layoutHeight?: number;
  paddingHorizontal?: number;
  onPressTrailing?: () => void;
};

export interface BackgroundLayoutProp extends ViewStyle {
  children: React.ReactNode;
}

export interface BoxProps extends BackgroundLayoutProp {
  alignmentHorizontal?: 'center' | 'justify' | 'left' | 'right';
  alignmentVertical?: 'bottom' | 'center' | 'top';
  header?: React.ComponentType;
}
//@ts-ignore
export interface TextProp extends TextStyle {
  text: string;
  selectable?: boolean;
  size?: number;
  family?: FontFamily;
  numberOfLines?: number;
  color?: string;
  weight: 'small' | 'medium' | 'big' | 'bigger' | 'large' | 'larger';
  textAlign?: TextAlign;
  onPress?: () => void;
  width?: number;
}
export interface ButtonProp {
  title: string;
  textColor?: string;
  style?: StyleProp<ViewStyle>;
  loading?: boolean;
  onPress: () => void;
  width?: number;
  color?: string;
}
export interface IconButtonProp {
  name: string;
  loading?: boolean;
  onPress: () => void;
}
export interface BorderButtonProp extends ButtonProp {
  name?: IconName;
  iconColor?: string;
  showIcon?: boolean;
  iconName?: string;
}
export interface InforContainerProp {
  iconName: IconName;
  title: string;
  price: string;
  onPress: () => void;
}
export interface ImageProp extends ImageStyle {
  image: ImageSourcePropType;
  style?: StyleProp<ImageStyle>;
}
export interface UrlImageOrInitialsProp {
  imageUrl: string;
  name: string;
  initialsContainerSize?: number;
  urlImageStyle?: StyleProp<ImageStyle>;
}
export interface TextInputProp
  extends Omit<TextInputProps, 'onBlur' | 'onFocus'> {
  label?: string;
  textColor?: string;
  name: string;
  width?: number;
  left?: React.ReactNode;
  right?: React.ReactNode;
  error?: string;
  control: Control<any, any>;
  backgroundColor?: string;
  bottomEndText?: string;
  iconName?: IconName;
  bottomEndTextFunction?: () => void;
  onPressIcon?: () => void;
  onTap?(): void;
}
export interface SwitchProp {
  value: boolean;
  onChange: () => void;
}
export interface SnackbarProp extends SnackbarProps {
  visible: boolean;
  message?: string;
  duration?: number;
  onDismiss: () => void;
}

export interface AppScrollViewProps extends ScrollViewProps {
  children?: ReactNode;
}
export interface AppFlatListProps {
  children: ReactNode;
}

export interface HtmlRendererProps extends HTMLViewProps {
  value: string;
  style?: StyleProp<ViewStyle>
}

export interface AppDatePickerProps extends DatePickerProps{
  showDatePicker: boolean;
  date: Date;
  onSelectDate: (date: Date) => void;
  onCancel(): void;
}

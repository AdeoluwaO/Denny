import React, {Component, useState} from 'react';
import {StyleProp, StyleSheet, Pressable, ViewStyle} from 'react-native';
import {Dropdown} from 'react-native-element-dropdown';
import IonIcon from 'react-native-vector-icons/MaterialIcons';
import {getComputedHeight} from '../design_system/layout/responsiveness';
import {useAppTheme} from '../design_system/theme/theme';
import {Box} from './Box';
import {Row} from './row';
import {AppText} from './text';
import Ionicon from 'react-native-vector-icons/Ionicons';
import {
  alignHorizontalToFlexAlign,
  alignVerticalToFlexAlign,
} from '../design_system/layout/alignment';
type CustomDropdownProps = {
  dropdownData?: [];
  backgroundColor?: string;
  placeholder?: string;
  onTap: () => void;
  renderLeftIcon?: JSX.Element;
};

export const AppDropdown = ({
  placeholder,
  onTap,
  backgroundColor,
  renderLeftIcon,
}: CustomDropdownProps) => {
  const {colors} = useAppTheme();
  return (
    <Pressable onPress={onTap}>
      <Box
        {...styles.container}
        backgroundColor={backgroundColor ?? colors.whiteGrey}>
        <Row {...styles.row}>
          <Row>
            {renderLeftIcon}
            <AppText
              text={placeholder ?? ''}
              weight="large"
              color={colors.black}
            />
          </Row>
          <Ionicon name="chevron-down" size={20} color={colors.black} />
        </Row>
      </Box>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    height: getComputedHeight(56),
    borderRadius: 20,
    paddingHorizontal: 16,
    justifyContent: alignHorizontalToFlexAlign.center,
  },
  row: {
    justifyContent: alignVerticalToFlexAlign['space-between'],
  },
});

import {SwitchProp} from './types';
import {Box} from './Box';
import {StyleSheet, Pressable} from 'react-native';
import {
  getComputedHeight,
  getComputedWidth,
} from '../design_system/layout/responsiveness';
import Animated, {useSharedValue, withTiming} from 'react-native-reanimated';
import {
  alignHorizontalToFlexAlign,
  alignVerticalToFlexAlign,
} from '../design_system/layout/alignment';
import {useAnimatedStyle} from 'react-native-reanimated';
import React, {memo, useLayoutEffect} from 'react';

export const AppSwitch = memo(({value, onChange}: SwitchProp) => {
  const translateX = useSharedValue(0);
  useLayoutEffect(() => {
    if (value === true) translateX.value = withTiming(8);
    else translateX.value = withTiming(-10);
  }, [value]);
  const translationAnimation = useAnimatedStyle(() => {
    return {
      transform: [{translateX: translateX.value}],
    };
  });
  return (
    <Box>
      {/* @ts-ignore */}
      <Box {...styles.switchContainer}></Box>
      <Animated.View
        style={[styles.animatedSwitchContainer, translationAnimation]}>
        <Pressable onPress={onChange}>
          {/* @ts-ignore */}
          <Box {...styles.switch}></Box>
        </Pressable>
      </Animated.View>
    </Box>
  );
});

const styles = StyleSheet.create({
  switchContainer: {
    borderColor: 'black',
    borderRadius: 20,
    borderWidth: 3,
    width: getComputedWidth(40),
    height: getComputedHeight(25),
    backgroundColor: 'white',
  },
  animatedSwitchContainer: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: alignVerticalToFlexAlign.center,
    alignItems: alignHorizontalToFlexAlign.center,
  },
  switch: {
    borderColor: 'black',
    borderRadius: 20,
    borderWidth: 3,
    width: getComputedWidth(25),
    height: getComputedHeight(25),
    backgroundColor: 'rgba(224, 224, 224, 1)',
  },
  
});

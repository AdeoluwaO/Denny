import React, {forwardRef} from 'react';
import {ICONS, IconProps} from './types';
import Animated from 'react-native-reanimated';

export const AnimatedIcons = Animated.createAnimatedComponent(
  forwardRef(
    (
      {
        name,
        size = 24,
        showBackgroundColor,
        borderRadius,
        opacity,
        backgroundColor,
        ...props
      }: IconProps,
      ref,
    ) => {
      const SvgIcon = ICONS[name];
      return <SvgIcon {...props} />;
    },
  ),
);



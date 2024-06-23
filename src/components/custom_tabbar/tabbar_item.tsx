import {alignHorizontalToFlexAlign} from '@root/src/design_system/layout/alignment';
import {
  getComputedHeight,
  getComputedWidth,
} from '@root/src/design_system/layout/responsiveness';
import {useAppTheme} from '@root/src/design_system/theme/theme';
import {Pressable, StyleSheet, View} from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
  useAnimatedProps,
} from 'react-native-reanimated';
import {AnimatedIcons} from '@root/src/assets/icons/animated_svgs';
import {useEffect, memo} from 'react';
import { IconName } from '@root/src/assets/icons/types';

export interface TabBarItemProp {
  onPress: () => void;
  label: string;
  activeIndex: number;
  tabBarIconName: IconName;
  isFocused: boolean;
  index: number;
  width: number;
  height: number;
}

function TabBarItem({
  label,
  onPress,
  activeIndex,
  index,
  isFocused,
  height,
  width,
  tabBarIconName,
}: TabBarItemProp) {
  const CONTAINER_WIDTH =  width;
  const CONTAINER_HEIGHT = height;
  console.log('TAB WIDTH', CONTAINER_WIDTH);
  const translateXIcon = useSharedValue(0);
  const translateXText = useSharedValue(0);
  const translateYIcon = useSharedValue(0);
  const translateYText = useSharedValue(0);
  const textColor = useSharedValue('black');
  const fontSize = useSharedValue(10);
  const translateTextUp= -CONTAINER_HEIGHT *(CONTAINER_HEIGHT > 94 ? 0.3: 0.3);
  useEffect(() => {
    //? if the index is active animate the tabbar item
    if(activeIndex === index){
      //? ICONS TRANSLATIONS
      translateYIcon.value = withTiming(CONTAINER_HEIGHT * 0.2);
      translateXIcon.value = withTiming(-CONTAINER_WIDTH *0.3);
      //? TEXT TRANSLATIONS
      translateYText.value = withTiming(-CONTAINER_HEIGHT *0.3);
      translateXText.value = withTiming(CONTAINER_WIDTH * 0.2);
      textColor.value = withTiming('white');
      fontSize.value = withTiming(16);
    }else{
      //? if the index is not active animate them back to their initial position
      translateXIcon.value = withTiming(0);
      translateXText.value = withTiming(0);
      translateYIcon.value = withTiming(0);
      translateYText.value =withTiming(0);
      textColor.value = withTiming('black');
      fontSize.value = withTiming(10);
    }
  }, [activeIndex]);
  const activeIcon = useAnimatedProps(() => {
    return {
      transform: [
        {
          translateX: translateXIcon.value,
        },
        {
          translateY: translateYIcon.value,
        },
      ],
    };
  });
  const isActiveTextStyle = useAnimatedStyle(() => {
    return {
      color: textColor.value,
      fontSize:fontSize.value,
      transform: [
        {translateX: translateXText.value},
        {translateY: translateYText.value},
      ],
    };
  });
  return (
    <Pressable onPress={onPress}>
        {/* this view makes sure that the icon is always at the center */}
        <View style={styles.iconContainer}>
          {/* @ts-ignore */}
          <AnimatedIcons animatedProps={activeIcon}
            stroke={isFocused ? 'white' : 'black'}
            name={tabBarIconName as IconName}
          />
          <Animated.Text style={isActiveTextStyle}>
            {label}
          </Animated.Text>
        </View>
    </Pressable>
  );
}

export default memo(TabBarItem);

const styles = StyleSheet.create({
  iconContainer: {
    alignItems: alignHorizontalToFlexAlign.center},
});

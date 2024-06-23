import {BottomTabBarProps} from '@react-navigation/bottom-tabs';
import {Box} from '../Box';
import {Dimensions, StyleSheet, View} from 'react-native';
import {getComputedHeight, getComputedWidth} from '../../design_system/layout/responsiveness';
import {
  alignHorizontalToFlexAlign,
  alignVerticalToFlexAlign,
} from '../../design_system/layout/alignment';
import TabBarItem from './tabbar_item';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {IconName} from '@root/src/assets/icons/types';
import Animated, { useAnimatedStyle,  withSpring, useSharedValue } from 'react-native-reanimated';
import { width } from '../background_layout';

const TAB_BAR_HEIGHT =   getComputedHeight(50);
function CustomTabbar({state, descriptors, navigation}: BottomTabBarProps) {
  const translateX = useSharedValue(0);
  const TAB_WIDTH =  width/state.routes.length;
  const translationAnimation = useAnimatedStyle(() => {
    translateX.value = withSpring(TAB_WIDTH*state.index);
    return {
      transform: [
        {translateX: translateX.value},
      ],
    };
  });
  return (
    <Box {...styles.container} >
      <Animated.View
        style={[styles.slidingTabContainer,{width:TAB_WIDTH,}, translationAnimation]}>
          <View style={styles.slidingTab} />
        </Animated.View>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

            const isFocused = state.index === index;
            const onPress = () => {
              const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });
          
          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };
        return (
          /// NOTE!!! THE NAME IN THE BottomTabBar.SCREEN
          /// IS SIMILAR TO THE NAME USED TO IDENTIFY WHAT SVG
          //  INSIDE OF THE CustomTabbar ICON TO RENDER HERE
          ///  CHANGE LATER
          <TabBarItem
          tabBarIconName={label as IconName}
          isFocused={isFocused}
          index={index}
            activeIndex={state.index}
            label={label as string}
            onPress={onPress}
            width={TAB_WIDTH}
            height={TAB_BAR_HEIGHT}
            />
        );
      })}
    </Box>
  );
}

export default CustomTabbar;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: getComputedHeight(100),
    justifyContent: alignVerticalToFlexAlign['space-between'],
    alignItems: alignHorizontalToFlexAlign.center,
    paddingHorizontal: 30,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: 'white',
  },
  slidingTabContainer: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: alignVerticalToFlexAlign.center,
    alignItems: alignHorizontalToFlexAlign.center,
  },
  slidingTab: {
    width: getComputedWidth(95),
    height:  TAB_BAR_HEIGHT,
    borderRadius: 19,
    backgroundColor: 'orange',
  }

});

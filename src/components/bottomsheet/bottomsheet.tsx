import React, {useCallback} from 'react';
import {
  BottomSheetModal,
  BottomSheetModalProps,
  BottomSheetView,
  useBottomSheetSpringConfigs,
  useBottomSheetModal,
  BottomSheetBackdrop,
  BottomSheetBackdropProps,
} from '@gorhom/bottom-sheet';
import {useMemo} from 'react';
import {
  AppText,
  AppFlatlist,
  Box,
  Gap,
  height,
  width,
} from '@root/src/components/index';
import {useAppTheme} from '../../design_system/theme/theme';
import {Pressable, StyleSheet} from 'react-native';
import {getComputedHeight} from '../../design_system/layout/responsiveness';
import {BottomSheetModalMethods} from '@gorhom/bottom-sheet/lib/typescript/types';
import {FLEX} from '@root/App';
import {Canvas, Rect} from '@shopify/react-native-skia';
import {FlatlistBottomSheetProp} from './types';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

export interface Prop extends Omit<BottomSheetModalProps, 'snapPoints'> {
  title?: string;
  index?: number;
  ref: React.RefObject<BottomSheetModalMethods>;
  children: React.ReactNode;
  onClose?: () => void;
  snaps?: string[];
}

export const AppBottomSheet = React.forwardRef(
  (
    {children, title, snaps, index}: Prop,
    ref: React.Ref<BottomSheetModalMethods>,
  ) => {
    const snapPoints = useMemo(() => ['25%', ...(snaps ?? [])], [snaps]);
    const {colors} = useAppTheme();
    const {bottom} = useSafeAreaInsets();
    const bgColor = colors.whiteSmoke;
    const animationConfigs = useBottomSheetSpringConfigs({
      damping: 40,
      overshootClamping: true,
      restDisplacementThreshold: 0.1,
      restSpeedThreshold: 0.1,
      stiffness: 500,
    });
    const renderBackdrop = useCallback(
      (props: BottomSheetBackdropProps) => (
        <BottomSheetBackdrop
          {...props}
          disappearsOnIndex={1}
          appearsOnIndex={2}
        />
      ),
      [],
    );
    return (
      <BottomSheetModal
        ref={ref}
        keyboardBehavior="extend"
        android_keyboardInputMode="adjustPan"
        index={index ?? 0}
        style={{...style.container, backgroundColor: bgColor}}
        animationConfigs={animationConfigs}
        snapPoints={snapPoints}
        backdropComponent={renderBackdrop}
        handleStyle={{backgroundColor: bgColor, ...style.handle}}>
        <BottomSheetView
          style={{
            ...style.contentContainer,
            backgroundColor: bgColor,
            // paddingBottom: bottom
          }}>
          <Gap height={getComputedHeight(16)} />
          {title != undefined && (
            <AppText
              weight="large"
              text={title ?? ''}
              size={21}
              color={colors.dimGray}
            />
          )}
          <Gap height={getComputedHeight(16)} />
          {children}
          {/* <Gap height={getComputedHeight(16)} /> */}
        </BottomSheetView>
      </BottomSheetModal>
    );
  },
);
export const AppFlatListBottomSheet = React.forwardRef(
  (
    {
      data,
      renderItem,
      keyExtractor,
      itemSeperator,
      title,
      children,
      flatListContainerStyle,
      snaps,
      ...props
    }: FlatlistBottomSheetProp,
    ref: React.Ref<BottomSheetModalMethods>,
  ) => {
    const {bottom} = useSafeAreaInsets();
    return (
      <AppBottomSheet
        ref={ref}
        snaps={['50%', ...(snaps ?? [])]}
        title={title}
        index={1}>
        {children}

        <Box {...flatListContainerStyle}>
          <AppFlatlist
            data={data}
            renderItem={renderItem}
            keyExtractor={keyExtractor}
            ItemSeparatorComponent={itemSeperator}
            // style={{flex: 1}}
            
            {...props}
            contentContainerStyle={{flexGrow: FLEX}}
            ListFooterComponent={() => <Gap height={getComputedHeight(20)} />}
            ListFooterComponentStyle={{paddingBottom: bottom}}
          />
        </Box>
      </AppBottomSheet>
    );
  },
);

const style = StyleSheet.create({
  container: {
    flex: FLEX,
    borderRadius: 41,
    overflow: 'hidden',
  },
  contentContainer: {
    flex: FLEX,
    paddingHorizontal: 22,
  },
  handle: {
    borderTopRightRadius: 41,
    borderTopLeftRadius: 41,
  },
});

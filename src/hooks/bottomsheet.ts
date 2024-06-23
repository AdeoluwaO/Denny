import {BottomSheetModal, useBottomSheetModal} from '@gorhom/bottom-sheet';
import {BottomSheetModalMethods} from '@gorhom/bottom-sheet/lib/typescript/types';
import React from 'react';

export function useBottomModalMethod(
  bottomSheetRef: React.RefObject<BottomSheetModalMethods>,
) {
  const {  dismissAll } = useBottomSheetModal();
  const close = () => {
    bottomSheetRef.current?.close?.();
  };
  const dismiss = () => {
    bottomSheetRef.current?.dismiss?.();
  };
  const open = () => {
    bottomSheetRef.current?.present?.();
  };
  const closeAll = () => {
    dismissAll();
  };
  return {
    close,
    dismiss,
    open,
    closeAll,
  };
}

export function useBottomModalRef(): [
  React.RefObject<BottomSheetModalMethods>,
  ReturnType<typeof useBottomModalMethod>,
] {
  const bottomSheetRef = React.useRef<BottomSheetModal>(null);
  return [bottomSheetRef, useBottomModalMethod(bottomSheetRef)];
}

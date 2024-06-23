import { BottomSheetHandleProps, BottomSheetModalProps } from "@gorhom/bottom-sheet";
import { ReactNode } from "react";
import { FlatListProps, StyleProp, ViewStyle } from "react-native";
import {FlatList} from 'react-native-gesture-handler';
export interface HandleProps extends BottomSheetHandleProps {
    style?: StyleProp<ViewStyle>;
  }
export interface BottomSheetProp extends BottomSheetModalProps {
    title?: string,
    showTitle: boolean
  }


export interface FlatlistBottomSheetProp extends  FlatListProps<FlatList> {
      data: any[];
      snaps?: string[],
      title?: string;
      children?: ReactNode;
      flatListContainerStyle?: ViewStyle;
      keyExtractor: (item: any) => string;
      renderItem: ({item, index}: {item: any; index: number}) => JSX.Element;
      itemSeperator?: React.ComponentType;
    }
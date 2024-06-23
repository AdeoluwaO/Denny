import {FlatListProps} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';

export const AppFlatlist = (props: FlatListProps<FlatList>) => {
  return (
    <FlatList
      {...props}
      automaticallyAdjustKeyboardInsets={props.automaticallyAdjustKeyboardInsets ?? true}
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
    />
  );
};

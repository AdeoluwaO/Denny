import {View} from 'react-native';


export function Gap({height, width, flex}: {flex?: number,height?: number, width?: number}) {
  return <View style={{height, width, flex}}></View>;
}

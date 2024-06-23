import {BottomSheetTextInput} from '@gorhom/bottom-sheet';
import {StyleSheet} from 'react-native';
import {useAppTheme} from '../../design_system/theme/theme';
import {TextInputProp} from '../types';
import { BottomSheetTextInputPr } from '@gorhom/bottom-sheet/lib/typescript/components/bottomSheetTextInput/types';

export function AppBottomSheetTextInput({
  label,
  backgroundColor,
  ...props
}: BottomSheetTextInputPr ) {
  const {colors} = useAppTheme();
  return (
    <BottomSheetTextInput
      
      {...props}
      placeholder={label}
      style={{
        ...style.textInput,
        backgroundColor: backgroundColor ?? colors.green,
      }}
    />
  );
}

const style = StyleSheet.create({
  // textinput: {
  //   width: '100%',
  //   borderRadius: 20,
  // },
  textInput: {
    alignSelf: "stretch",
    marginHorizontal: 12,
    marginBottom: 12,
    padding: 12,
    borderRadius: 12,
    backgroundColor: "grey",
    color: "white",
    textAlign: "center",
  },
});

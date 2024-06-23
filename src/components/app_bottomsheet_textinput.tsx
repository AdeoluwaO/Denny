import {BottomSheetTextInput} from '@gorhom/bottom-sheet';
import {StyleSheet} from 'react-native';
import {useAppTheme} from '../design_system/theme/theme';
import {BottomSheetTextInputProps} from '@gorhom/bottom-sheet/lib/typescript/components/bottomSheetTextInput';
import {getComputedHeight} from '../design_system/layout/responsiveness';
import {Row} from './row';
import IonIcons from 'react-native-vector-icons/Ionicons';
import {Box} from './Box';
import {alignHorizontalToFlexAlign} from '../design_system/layout/alignment';
import {Input} from './text_input';
import {Control} from 'react-hook-form';

export interface BottomSheetTextInputPr extends BottomSheetTextInputProps {
  label: string;
  iconName?: string;
  backgroundColor?: string;
  control: Control;
  name: string;
  editable?: boolean;
  onTap?(): void;
}

export function AppBottomSheetTextInput({
  label,
  control,
  name,
  backgroundColor,
  iconName,
  editable,
  ...props
}: BottomSheetTextInputPr) {
  const {colors} = useAppTheme();
  return (
    <Input
      control={control}
      label={label}
      name={name}
      {...props}
      editable={editable}
      left={<IonIcons name={iconName!} size={24} />}
    />
    // <Box {...style.container} backgroundColor={colors.white}>
    //   <Row {...style.rowContainer}>
    //     <IonIcons name={ionIconName!} size={24} />
    //     <BottomSheetTextInput
    //       {...props}
    //       placeholder={label}
    //       style={{...style.textinput,
    //         backgroundColor: backgroundColor ?? colors.white,
    //       }}
    //     />
    //   </Row>
    // </Box>
  );
}

const style = StyleSheet.create({
  container: {
    width: '100%',
    borderRadius: 20,
    height: getComputedHeight(63),
    backgroundColor: 'red',
    alignItems: alignHorizontalToFlexAlign.left,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  rowContainer: {
    flexWrap: 'nowrap',
  },
  textinput: {
    width: '100%',
    height: '100%',
  },
});

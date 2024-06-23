import {AppTextInput} from '@root/src/components';
import {useAppTheme} from '@root/src/design_system/theme/theme';

function DepositTextInput({placeholder}: {placeholder: string}) {
  const {colors} = useAppTheme();
  return (
    <AppTextInput
      label={placeholder}
      textColor={colors.black}
      keyboardType="phone-pad"
      backgroundColor={colors.white}
    />
  );
}
export default DepositTextInput;

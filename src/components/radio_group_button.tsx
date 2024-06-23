import {ReactNode} from 'react';
import {RadioButton} from 'react-native-paper';
import {Row} from './row';
import {AppText} from './text';
import {useAppTheme} from '../design_system/theme/theme';
import {Gap} from './gap';
import {getComputedHeight} from '../design_system/layout/responsiveness';

interface RadioProp {
  value: string;
  onValueChange: (value: string) => void;
  children: ReactNode;
}

export function AppRadioGroupButton({
  value,
  children,
  onValueChange,
}: RadioProp) {
  const {colors} = useAppTheme();
  // const [value, setValue] = useState<string>();

  return (
    <RadioButton.Group
      onValueChange={newValue => {
        console.log('RADIO VALUES', value);
        onValueChange(newValue);
      }}
      value={value!}>
      {children}
    </RadioButton.Group>
  );
}

import DatePicker from 'react-native-date-picker';
import {AppDatePickerProps} from './types';

export const AppDateTimePicker = ({
  showDatePicker,
  date,
  onSelectDate,
  onCancel,
  ...props
}: AppDatePickerProps) => {
  return (
    <DatePicker
      modal
      {...props}
      open={showDatePicker}
      date={date}
      onConfirm={onSelectDate}
      onCancel={onCancel}
    />
  );
};

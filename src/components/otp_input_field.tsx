import {StyleSheet} from 'react-native';
import {TextInput} from 'react-native-paper';
import {Controller, useFieldArray, useForm} from 'react-hook-form';
import {TextInputProp} from './types';
import {Row} from './row';

interface PinInputProps extends TextInputProp  {
 onSubmit: (pinValue: string[]) => void;
  pinFieldLength?: number;
};

export const OtpInputField = ({onSubmit,pinFieldLength = 4,...props}: PinInputProps) => {
  const {control, setFocus, getValues} = useForm({
    defaultValues: {
      otp: Array.from({length: pinFieldLength}, () => ({})),
    },
  });
  const {fields} = useFieldArray({
    name: 'otp',
    control
  })
console.log('otp values',getValues().otp);
return (
  <Row>
      {fields.map((field, index) => {
        return (
          <Controller
            key={field.id}
            control={control}
            name={`otp.${index}`}
            render={({field: {onChange, onBlur, ref, value}}) => {
              return (
                //  @ts-ignore
                <TextInput
                  ref={ref}
                  textColor={'black'}
                  value={value as string}
                  autoFocus={index === 0}
                  secureTextEntry
                  mode="flat"
                  {...props}
                  theme={{
                    roundness: 20,
                  }}
                  cursorColor={'black'}
                  maxLength={1}
                  keyboardType="number-pad"
                  onSubmitEditing={props.onSubmitEditing}
                  onChangeText={text => {
                    onChange(text);
                    if (text.length === 1) setFocus(`otp.${index + 1}`);
                    else setFocus(`otp.${index - 1}`);
                    if (index +1 === fields.length) onSubmit(getValues().otp as string[]);
                 }}
                  onBlur={onBlur}
                  autoCapitalize="none"
                  activeOutlineColor={'transparent'}
                  activeUnderlineColor={'transparent'}
                  underlineColor={'transparent'}
                  style={styles.textInput}
                />
              );
            }}
          />
        );
      })}
    </Row>
  );
};

const styles = StyleSheet.create({
  textInput: {
    borderRadius: 20,
    width: 60,
    height: 60,
    backgroundColor: 'white',
    textAlign: 'center',
    fontSize: 22,
    textDecorationColor: 'white',
    fontWeight: 'bold',
  },
  pinInputBox: {
    paddingHorizontal: 25,
    paddingVertical: 20,
    borderRadius: 20,
    marginRight: 8,
  },
  pinInputContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 24,
    marginBottom: 0,
  },
});

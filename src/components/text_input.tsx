import { TextInput } from 'react-native-paper';
import { KeyboardAvoidingView, Platform, Pressable, StyleSheet } from 'react-native';
import { useAppTheme } from '../design_system/theme/theme';
import { TextInputProp } from './types';
import { Box } from './Box';
import { Controller } from 'react-hook-form';
import { AppText } from './text';
import Icon from '../assets/icons/icon';
import { Row } from './row';
import { ICONS } from '../assets/icons/types';

export function AppTextInput({
  label,
  backgroundColor,
  bottomEndText,
  width,
  right,
  error,
  name,
  textColor,
  onTap,
  bottomEndTextFunction,
  ...props
}: TextInputProp) {
  const { colors } = useAppTheme();
  const activeColor = Platform.OS === 'android' ? colors.transparent : undefined;
  return (
    <Box {...style.container}>
      <Pressable onPress={onTap}>
        <Controller

          control={props.control}
          name={name}
          render={({ field: { onChange, onBlur, ref, value } }) => {
            return (
              <KeyboardAvoidingView behavior='padding'>
                {/* @ts-ignore  */}
                <TextInput
                  ref={ref}
                  textColor={
                    backgroundColor === colors.white
                      ? textColor ?? colors.black
                      : colors.white
                  }
                  value={value}
                  // mode="outlined"
                  {...props}
                  theme={{
                    roundness: 20,
                  }}
                  cursorColor={
                    backgroundColor === colors.lightRed ? colors.black : colors.white
                  }
                  onSubmitEditing={props.onSubmitEditing}
                  right={right}
                  onChangeText={onChange}
                  onBlur={onBlur}
                  placeholder={label}
                  autoCapitalize="none"
                  activeOutlineColor={colors.transparent}
                  /*
                  ON IOS THESE [activeUnderlineColor, underlineColor] DEPENDING 
                  ON THE SELECTED MODE CHOOSE THE COLOR OF THE INPUT CARET(CURSOR)
                  IT TRANSAPARENT THE CURSOR WOULD BE HIDDEN TO 
                  */
                  activeUnderlineColor={activeColor}
                  underlineColor={colors.transparent}
                  style={{
                    ...style.textinput,
                    width: width ?? '100%',
                    backgroundColor: backgroundColor ?? colors.green,
                  }}
                />
              </KeyboardAvoidingView>
            );
          }}
        />

      </Pressable>
      {error && (
        <AppText text={error} weight="large" color={colors.error} size={17} />
      )}
    </Box>
  );
}

/*
 USE THIS WHEN YOU WANT TO CUTOMISE
 COMPONENTS IN THE RIGHT AND LEFT 
 SIDE OF THE TEXT INPUT
 */
export function Input({
  label,
  backgroundColor,
  bottomEndText,
  width,
  right,
  left,
  name,
  error,
  iconName,
  onTap,
  onPressIcon,
  ...props
}: TextInputProp) {
  const { colors } = useAppTheme();
  const activeColor = Platform.OS === 'android' ? colors.transparent : undefined;
  
  return (
    <Controller
      control={props.control}
      name={name}
      render={({ field: { onChange, onBlur, value, ref } }) => {
        return (
          <Box>
            <Pressable onPress={onTap}>
              <Box
                {...style.inputContainer}
                backgroundColor={backgroundColor ?? colors.white}>
                <Row columnGap={0} flexWrap="nowrap">
                  {left}
                  <TextInput
                    mode="flat"
                    ref={ref}
                    value={value}
                    {...props}
                    theme={{
                      roundness: 20,
                    }}
                    cursorColor={
                      (backgroundColor ?? colors.white) === colors.white
                        ? colors.black
                        : colors.white
                    }
                    onChangeText={onChange}
                    onSubmitEditing={props.onSubmitEditing}
                    onBlur={onBlur}
                    right={right}
                    placeholder={label}
                    autoCapitalize="none"

                    /*
                    ON IOS THESE [activeUnderlineColor, underlineColor] DEPENDING 
                    ON THE SELECTED MODE CHOOSE THE COLOR OF THE INPUT CARET(CURSOR)
                    IT TRANSAPARENT THE CURSOR WOULD BE HIDDEN TO 
                    */
                    activeUnderlineColor={activeColor}
                    underlineColor={colors.transparent}
                    activeOutlineColor={colors.transparent}


                    style={{
                      ...style.textinput,
                      width: width ?? '80%',
                      backgroundColor: backgroundColor ?? colors.white,
                    }}
                  />
                  <Icon name={iconName!} onPress={onPressIcon} />
                  {right}
                </Row>
              </Box>
            </Pressable>
            {error && (
              <AppText
                text={error}
                weight="large"
                color={colors.error}
                size={17}
              />
            )}
          </Box>
        );
      }}
    />
  );
}

const style = StyleSheet.create({
  container: {
    width: '100%',
  },
  textinput: {
    borderRadius: 20,

  },
  inputContainer: {
    borderRadius: 10,
    paddingRight: 10,
  },
});

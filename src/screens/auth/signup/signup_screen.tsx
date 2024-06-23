import {
  AppButton,
  AppText,
  AppTextInput,
  Gap,
  Row,
  LoadingOverlay,
  Input,
} from 'src/components/index';
import AuthMainBox from '../components/auth_main_box';
import {AuthStackScreenProps} from '@root/src/routes/types/auth_stack_types';
import {useAppTheme} from '@root/src/design_system/theme/theme';
import {
  getComputedHeight,
} from '@root/src/design_system/layout/responsiveness';
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import {signUpSchema} from '@root/src/utils/validators';
import {
  useSignUpUserMutation,
} from '@root/src/domians/authentication';
import {
  SignUpPayload,
} from '@root/src/domians/authentication/types';
import {useKeyboardMethods} from '@root/src/hooks/keyboard';
import Toast from '@root/src/components/app_snackbar';
import {useAuth} from '@root/src/context/auth_context';
import {useUserProfileMutation} from '@root/src/domians/profile';
import { useState } from 'react';

export function SignupScreen({navigation}: AuthStackScreenProps<'sign-up'>) {
  const {colors} = useAppTheme();
  const [secureEntry, setSecureEntry] = useState(true);
  const {storeAccessToken} = useAuth();
  const {mutate, isPending} = useSignUpUserMutation();
  const {dismissKeyboard} = useKeyboardMethods();
  const {
    control,
    handleSubmit,
    reset,
    setFocus,
    formState: {errors},
  } = useForm({
    defaultValues: {
      email: 'eve.holt@reqres.in',
      password: 'cityslicka',
    },
    mode: 'onChange',
    resolver: yupResolver(signUpSchema),
  });
  const onSubmit = async (signUpData: SignUpPayload) => {
    mutate(signUpData, {
      onSuccess(data, variables, context) {
        storeAccessToken(data?.id ?? 3)
        Toast.showSuccessSnackBar({text: 'Signup suuccessfull...'});
        reset();
      },
    });
    dismissKeyboard();
  };

  return (
    <>
      <AuthMainBox>
        <Gap height={getComputedHeight(41)} />
        <AppText
          family="latoRegular"
          weight="large"
          text="Get Started"
          size={32}
        />
        <Gap height={getComputedHeight(9)} />
        <AppText
          weight="big"
          text="Create an account to enjoy our services"
          size={18}
        />
        <Gap height={getComputedHeight(24)} />

        <AppTextInput
          control={control}
          name="email"
          label="Email"
          error={errors.email?.message}
          placeholderTextColor={colors.white}
          onSubmitEditing={() => setFocus('email')}
        />
        <Gap height={getComputedHeight(20)} />
        <Input
          control={control}
          label="Password"
          name="password"
          width={'90%'}
          secureTextEntry={secureEntry}
          backgroundColor={colors.green}
          textColor="white"
          right={
            <AppText
              text={secureEntry ? 'Show' : 'Hide'}
              weight="big"
              color={colors.secondary}
              onPress={() => setSecureEntry(!secureEntry)}
            />
          }
          error={errors.password?.message}
          placeholderTextColor={colors.white}
          onSubmitEditing={handleSubmit(onSubmit)}
        />
  
        <Gap height={getComputedHeight(20)} />
        <AppButton
          title="Continue"
          loading={isPending}
          onPress={handleSubmit(onSubmit)}
        />
        <Gap height={getComputedHeight(20)} />

        <Row columnGap={0}>
          <AppText weight="medium" text="Already with us? " />
          <AppText
            weight="large"
            text="Login"
            onPress={() => navigation.replace('login')}
          />
        </Row>
      </AuthMainBox>
      {(isPending) && (
        <LoadingOverlay />
      )}
    </>
  );
}

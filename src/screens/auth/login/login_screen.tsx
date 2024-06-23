import {
  AppButton,
  AppText,
  AppTextInput,
  Gap,
  Input,
  LoadingOverlay,
  Row,
} from 'src/components/index';
import AuthMainBox from '../components/auth_main_box';
import {AuthStackScreenProps} from '@root/src/routes/types/auth_stack_types';
import {useAppTheme} from '@root/src/design_system/theme/theme';
import {
  getComputedHeight,
} from '@root/src/design_system/layout/responsiveness';
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import {loginSchema} from '@root/src/utils/validators';
import {
  useSignInUserMutation,
} from '@root/src/domians/authentication';
import {
  SignInPayload,
} from '@root/src/domians/authentication/types';
import {useKeyboardMethods} from '@root/src/hooks/keyboard';
import {useAuth} from '@root/src/context/auth_context';
import {useState} from 'react';
import Toast from '@root/src/components/app_snackbar';

export function LoginScreen({navigation}: AuthStackScreenProps<'login'>) {
  const {colors} = useAppTheme();
  const {storeAccessToken} = useAuth();
  const {mutate, isPending} = useSignInUserMutation();
  const {dismissKeyboard} = useKeyboardMethods();
  const [secureEntry, setSecureEntry] = useState(true);
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
    resolver: yupResolver(loginSchema),
  });


  const onSubmit = async (loginData: SignInPayload) => {
    mutate(loginData, {
      onSuccess: () => {
        storeAccessToken(1);
        Toast.showSuccessSnackBar({text: 'Login suuccessfull...'});
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
          text="Welcome Back"
          textAlign="center"
          size={32}
        />
        <AppText
          weight="big"
          textAlign="center"
          text="Input your details to gain access"
          size={18}
        />
        <Gap height={getComputedHeight(24)} />
        <AppTextInput
          control={control}
          label="Email"
          error={errors.email?.message}
          placeholderTextColor={colors.white}
          name="email"
          keyboardType='email-address'
          onSubmitEditing={() => setFocus('password')}
        />
        <Gap height={getComputedHeight(20)} />
        <Input
          control={control}
          label="Password"
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
          name="password"
          onSubmitEditing={handleSubmit(onSubmit)}
        />

        <Gap height={getComputedHeight(20)} />
        <AppButton
          title="Log in"
          loading={isPending}
          onPress={handleSubmit(onSubmit)}
        />
        <Gap height={getComputedHeight(20)} />
        <Row columnGap={0}>
          <AppText weight="medium" text="Don’t have an account?" />
          <Gap height={getComputedHeight(20)} />
          <AppText
            weight="large"
            text="Signup"
            onPress={() => navigation.replace('sign-up')}
          />
        </Row>
      </AuthMainBox>
      {(isPending ) && (
        <LoadingOverlay />
      )}
    </>
  );
}

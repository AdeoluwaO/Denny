import { StackScreenProps } from "@react-navigation/stack"

export type  AuthStackParamsList = {
    'splash-screen': undefined,
    'tsandcs': {showButton: boolean},
    'privacy-policy': {showButton: boolean},
    onboarding: undefined,
    'onboarding-one': undefined,
    'onboarding-two': undefined,
    'landing-screen': undefined,
    login: undefined,
    'sign-up': undefined,
    'create-account': {
      signupToken: string;
    },
    'otp-screen': {
      email: string;
    },
    'forgot-password-otp-screen': {
      email: string;
    },
    'forgot-password': undefined,
    'set-password': 
      {
        signupToken: string,
        firstName: string,
        lastName: string,
        username: string
    }
    ,
    'signup-successful':{
      password: string,
      signupToken: string,
      pin: string,
      firstName: string,
      lastName: string,
      username: string,
  },
}


export type AuthStackScreenProps<T extends keyof AuthStackParamsList> =
  StackScreenProps<AuthStackParamsList, T>
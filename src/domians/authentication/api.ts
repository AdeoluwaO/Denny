import {
  apiWithoutToken,
} from '@root/src/config/network/api_set_up';
import auth from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
// import { LoginManager, AccessToken, AuthenticationToken } from 'react-native-fbsdk-next';
import {
  SignInPayload,
  SignInResponse,
  SignUpPayload,
  SignUpResponse
} from './types';
import { ApiResponse } from '@root/src/config/internals/types';

//LOGIN FLOW /
export const SignInUser = async (loginData: SignInPayload) => {
  console.log('PASSED DATA', loginData);
  
  const response: ApiResponse<SignInResponse> = await (
    await apiWithoutToken.post('login',{
      "email": loginData.email,
      "password": loginData.password
    })
  );
  console.log(`SIGN IN USER  ${JSON.stringify(response.data)}`);
  return response.data;
};

//SIGN UP FLOW /
export const SignUpUser = async (data: SignUpPayload) => {
  console.log('ENTERE DATA', data);
    const response: SignUpResponse = (
      await apiWithoutToken.post('register',
        {
 
          "email": data.email,
          "password": `${data.passowrd}`
        }
      )
    ).data;
    console.log(`DATA FROM API IS ${JSON.stringify(response)}`);
    return response;
};

import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';

export interface SignUpPayload {
  // username: string;
  email: string;
  passowrd: string; 
}
export interface SignUpResponse {
  id: number;
  token: string
}
export interface SignInPayload {
  email: string;
  password: string;
}
export interface SignInResponse {
  access_token: string;
  refresh_token: string;
  id: number;
}
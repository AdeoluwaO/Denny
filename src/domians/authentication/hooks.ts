import {useMutation} from '@tanstack/react-query';
import {
  SignInUser,
  SignUpUser,
} from './api';

export function useSignInUserMutation() {
  return useMutation({mutationFn: SignInUser});
}

export function useSignUpUserMutation() {
  return useMutation({mutationFn: SignUpUser});
}


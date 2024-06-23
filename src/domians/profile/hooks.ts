import {useMutation} from '@tanstack/react-query';
import {
  GetUserProfile
} from './api';
import {ResponseUserData} from './types';

export function useUserProfileMutation() {
  return useMutation({mutationFn: GetUserProfile});
}
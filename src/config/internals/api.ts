import {getRawAuthState} from '@root/src/store/auth';
import {
  AxiosError,
  InternalAxiosRequestConfig,
} from 'axios';
import { ApiResponse } from './types';

export async function useAuthentication(config: InternalAxiosRequestConfig) {
  const {accessToken} =  getRawAuthState();
  // console.log(`Clladd api with token`, accessToken)
  if (accessToken)
    return {
      ...config,
      headers: {
        'Authorization': `Bearer ${accessToken}`,
      },

    };
}


export type ApiError = AxiosError<ApiResponse>;



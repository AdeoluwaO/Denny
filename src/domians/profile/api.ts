import { apiWithoutToken} from '@root/src/config/network/api_set_up';
import {
  ResponseUserData,
} from './types';
import {ApiResponse} from '@root/src/config/internals/types';
import {setRawProfileState} from '@root/src/store/profile';

const PROFILE_BASE_URL = 'api/v1/customer';

export async function GetUserProfile(id: number) {
  console.log(`USER DATA RESPON`);
  const response: ApiResponse<ResponseUserData> = await (
    await apiWithoutToken.get(`users/${id}`)
  ).data;
  /*
  STORING THE USER'S PROFILE IN THE DEVICE STORAGE
  NOTE: SET "has_used_refresh_token" & "token_has_expired" TO FALSE
  WHEN A USER LOGS IN OR ELSE IT WILL KEEP LOGGING THE USER OUT 
  (IF THESE VALUES BECOME TRUE WHEN A USER WAS USING THE APP PREVIOUSLY) 
  */
  setRawProfileState({
    profile: {
      ...response.data,
    },
  });
  console.log(`USER DATA RESPONSE ${JSON.stringify(response.data)}`, response.data);
  return response.data;
}

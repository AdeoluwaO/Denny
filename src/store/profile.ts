import {create} from 'zustand';
import {ResponseUserData} from '../domians/profile/types';
import {createJSONStorage, persist} from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';

export interface UserProfile {
  profile: ResponseUserData | null | Partial<ResponseUserData>;
  _hasHydrated: boolean;
  setHydrated(_hasHydrated: boolean): void;
  saveProfile: (userData: ResponseUserData) => void;
  deleteProfile(): void;
  updateProfile: (userData: Partial<ResponseUserData>) => void;
}

const userProfileStore = create<UserProfile>()(
  persist(
    set => ({
      profile: null,
      _hasHydrated: false,
      setHydrated: (_hasHydrated: boolean) => set({_hasHydrated: _hasHydrated}),
      saveProfile: (data: ResponseUserData) =>
        set({
          profile: data,
        }),
      deleteProfile: () => set({profile: null}),
      updateProfile: (data: Partial<ResponseUserData>) =>
        set(({profile}) => ({profile: {...profile, ...data}})),
    }),
    {
      name: 'user-data',
      storage: createJSONStorage(() => AsyncStorage),
      onRehydrateStorage: () => state => {
        state?.setHydrated(true);
      },
    },
  ),
);
export const useStoredUserProfile = () =>
  userProfileStore(state => state.profile);
export const useHasProfileStoreHydrated = () =>
  userProfileStore(state => state._hasHydrated);

export const userProfileStoreActions = () =>
  userProfileStore(({deleteProfile, saveProfile, updateProfile}) => {
    return {
      deleteProfile,
      saveProfile,
      updateProfile,
    };
  });

export const getRawProfileState = () => {
  return userProfileStore.getState();
};

export const setRawProfileState = (state: Partial<UserProfile>) => {
  const {profile} = getRawProfileState();
  return userProfileStore.setState({
    ...state,
    profile: {...profile, ...state.profile},
  });
};

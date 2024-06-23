import AsyncStorage from '@react-native-async-storage/async-storage';
import {create} from 'zustand';
import {createJSONStorage, persist} from 'zustand/middleware';

export interface AuthState {
  refreshToken: string | null;
  id: number | null;
  accessToken: string | null;
  authenticated: boolean;
  hasOnbooarded: boolean;
  _hasHydrated: boolean;
  removeAllTokens: () => void;
  setAuthenticated: (value: boolean) => void;
  setHasOnboarded: (value: boolean) => void;
  setId: (value: number) => void;
  setRefreshToken: (token: string) => void;
  setAccessToken: (token: string) => void;
  setHasHydrated: (_hasHydrated: boolean) => void;
}

const useAuthStore = create<AuthState>()(
  persist(
    set => ({
      refreshToken: null,
      id: null,
      accessToken: null,
      authenticated: false,
      hasOnbooarded: false,
      _hasHydrated: false,
      removeAllTokens: () => set({refreshToken: null, accessToken: null}),
      setId: (value: number) => set({id: value}),
      setAuthenticated: (value: boolean) => set({authenticated: value}),
      setHasOnboarded: (value: boolean) => set({hasOnbooarded: value}),
      setRefreshToken: (token: string) => set({refreshToken: token}),
      setAccessToken: (token: string) => set({accessToken: token}),
      setHasHydrated: (_hasHydrated: boolean) =>
        set({_hasHydrated: _hasHydrated}),
    }),
    {
      name: 'auth-storage', // note this name must be unique
      storage: createJSONStorage(() => AsyncStorage),
      onRehydrateStorage: () => state => {
        state?.setHasHydrated(true);
      },
    },
  ),
);

export const useUserId =() => useAuthStore(state => state.id);
export const useUserHasOnboarded =() => useAuthStore(state => state.hasOnbooarded);
export const useRefreshToken = () => useAuthStore(state => state.refreshToken);
export const useAccessToken = () => useAuthStore(state => state.accessToken);
export const useUserHasAuthticated = () => useAuthStore(state => state.authenticated);
export const useHasAuthStoreHydrated = () => useAuthStore(
  state => state._hasHydrated,
);

export const useAuthStoreActions = () =>
  useAuthStore(
    ({
      removeAllTokens,
      setAuthenticated,
      setHasOnboarded,
      setRefreshToken,
      setAccessToken,
      setId,
    }) => {
      return {
        removeAllTokens,
        setAuthenticated,
        setHasOnboarded,
        setRefreshToken,
        setAccessToken,
        setId
      };
    },
  );
  
export const getRawAuthState = (): AuthState => {
  return useAuthStore.getState();
};

export const setRawAuthState = (state: Partial<AuthState>) => {
  return useAuthStore.setState(state);
};

import {createContext, useContext} from 'react';
import {
  useAuthStoreActions,
  useHasAuthStoreHydrated,
  useUserHasAuthticated,
  useUserHasOnboarded,
} from '../store/auth';
import {LocalStorage} from '../store/local_storage';
import {userProfileStoreActions} from '../store/profile';

interface AuthContextData {
  loading: boolean;
  removeTokens(): void;
  storeAccessToken: (data: number) => void;
  authenticated: boolean;
  hasOnboarded: boolean;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthContextProvider = ({children}: {children: React.ReactNode}) => {
  const loading = !useHasAuthStoreHydrated();
  const authenticated = useUserHasAuthticated();
  const hasOnboarded = useUserHasOnboarded();
  const {deleteProfile} = userProfileStoreActions();
  const {
    removeAllTokens,
    setAccessToken,
    setId,
    setRefreshToken,
    setAuthenticated,
  } = useAuthStoreActions();

  function removeTokens() {
    LocalStorage.clear();
    setAuthenticated(false);
  }
  async function storeAccessToken(data: number) {
    setAuthenticated(true);
    setId(data);
  }

  return (
    <AuthContext.Provider
      value={{
        loading,
        authenticated,
        hasOnboarded,
        removeTokens,
        storeAccessToken,
      }}>
      {children}
    </AuthContext.Provider>
  );
};

function useAuth() {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within an AuthProvider');
  return context;
}

export {AuthContext, AuthContextProvider, useAuth};

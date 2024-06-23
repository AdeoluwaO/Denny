import { AppScrollView, AppText, Gap, LayoutBox, LoadingScreen, Row } from '@root/src/components';
import { alignHorizontalToFlexAlign } from '@root/src/design_system/layout/alignment';
import { useAppTheme } from '@root/src/design_system/theme/theme';
import Profile from './components/profile';
import TileContainer from './components/tile';
import { HomeScreenStackProps } from '@root/src/routes/types/home_stack_types';
import {
  getComputedHeight,
  getComputedWidth,
} from '@root/src/design_system/layout/responsiveness';
import Clipboard from '@react-native-clipboard/clipboard';
import { useEffect } from 'react';
import { useAuth } from '@root/src/context/auth_context';
import { useStoredUserProfile, userProfileStoreActions } from '@root/src/store/profile';
import { initialLetterToUppercase } from '@root/src/config/helpers/helper_functions'
import { useUserProfileMutation } from '@root/src/domians/profile';

export function ProfileScreen({ navigation }: HomeScreenStackProps<'profile'>) {
  const { colors } = useAppTheme();
  const { removeTokens } = useAuth();
  const { mutate: getProfile, isPending } = useUserProfileMutation();
  const profile = useStoredUserProfile();
  const {updateProfile} = userProfileStoreActions();

  useEffect(() => {
    getProfile(4)
  }, [])
console.log('STTORES PERR 32', profile);

  return (
    <LayoutBox paddingHorizontal={getComputedWidth(16)}>
      <AppScrollView>
        <Row alignSelf={alignHorizontalToFlexAlign.left}>
          <AppText
            text="Profile"
            weight="bigger"
            size={24}
            color={colors.lightGreen}
          />
        </Row>
        <Gap height={getComputedHeight(34)} />
        <Profile
          fullName={`${initialLetterToUppercase(profile?.first_name??'')} ${initialLetterToUppercase(profile?.last_name??'')}`}
          userName={`${profile?.first_name}`}
          profilePhoto={profile?.avatar!}
          onTapUserName={() => {
            Clipboard.setString(profile?.first_name ?? '');
          }}
        />
        <Gap height={getComputedHeight(16)} />
        <AppText text="Settings" weight="big" size={15} color={colors.black} />
        <Gap height={getComputedHeight(16)} />
        <TileContainer
          title="Edit Profile"
          subtitle="Edit Profile, Edit Transaction Tag"
          iconName="edit-profile-green"
          onPress={() => {
            navigation.navigate('edit-profile');
          }}
        />
        <Gap height={getComputedHeight(23)} />
        <TileContainer
          title="Deactivate/Delete Account"
          subtitle="Secure your account"
          iconName="deactivate-account-green"
          onPress={() => {
            navigation.navigate('delete-account');
          }}
        />
        <Gap height={getComputedHeight(23)} />
        <TileContainer
          title="Sign Out"
          subtitle="SIgn out your account"
          iconName="signout-green"
          onPress={() => {
            removeTokens();
          }}
        />
        <Gap height={getComputedHeight(16)} />
        {isPending && <LoadingScreen />}
      </AppScrollView>
    </LayoutBox>
  );
}

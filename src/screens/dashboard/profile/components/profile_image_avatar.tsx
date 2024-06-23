import {alignHorizontalToFlexAlign} from '@root/src/design_system/layout/alignment';
import {ProfileImageProp} from './type';
import {Avatar} from 'react-native-paper';
import {useStoredUserProfile} from '@root/src/store/profile';
import {getInitialLetter} from '@root/src/config/helpers/helper_functions';
import {Box} from '@root/src/components';

function ProfileImageAvatar({profilePhoto, alignSelf, size}: ProfileImageProp) {
  const profile = useStoredUserProfile();
  const initial = getInitialLetter(profile?.first_name!);
  return (
    <Box>
      {profilePhoto ? (
        <Avatar.Image
          size={size ?? 90}
          source={{uri: profilePhoto!}}
          //@ts-ignore
          style={{alignSelf: alignSelf ?? alignHorizontalToFlexAlign.center}}
          onError={() => require('@assets/images/delete_profile.png')}
        />
      ) : (
        <Avatar.Text
          style={{alignSelf: alignSelf ?? alignHorizontalToFlexAlign.center}}
          label={initial}
          size={size ?? 90}
        />
      )}
    </Box>
  );
}

export default ProfileImageAvatar;

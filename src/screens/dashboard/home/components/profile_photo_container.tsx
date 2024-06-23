import {AppText, Box} from '@root/src/components';
import {
  alignHorizontalToFlexAlign,
  alignVerticalToFlexAlign,
} from '@root/src/design_system/layout/alignment';
import {getComputedHeight} from '../../../../design_system/layout/responsiveness';
import {useAppTheme} from '@root/src/design_system/theme/theme';
import {Image, StyleSheet, Pressable} from 'react-native';
import { useStoredUserProfile } from '@root/src/store/profile';
import { getInitialLetter } from '@root/src/config/helpers/helper_functions';
function ProfileContainer({
  profilePhoto,
  onTapProfile
}: {
  profilePhoto?: string | null;
  onTapProfile?: () => void;
}) {
  const {colors} = useAppTheme();
  const profile  = useStoredUserProfile();
  const nameInital = getInitialLetter(profile?.first_name!);
  return (
    <Pressable onPress={onTapProfile}>
      <Box
       {...style.container}
        backgroundColor={colors.lightGrey}>
          {
            profilePhoto !== null ? <Image
            onError={() => '@assets/images/no_profile_photo.png'}
            source={{uri: profilePhoto!}}
            style={style.image}
          /> : <AppText text={`${nameInital}`} weight='large' size={25} />
          }
        
      </Box>
    </Pressable>
  );
}

export default ProfileContainer;

const style = StyleSheet.create({
  container: {
    height: getComputedHeight(58),
    width: getComputedHeight(58),
    alignItems: alignHorizontalToFlexAlign.center,
    justifyContent: alignVerticalToFlexAlign.center,
    borderRadius: 20,
  },
  image: {
    height: getComputedHeight(50),
    width: getComputedHeight(50),
    borderRadius: 20,
  }
});

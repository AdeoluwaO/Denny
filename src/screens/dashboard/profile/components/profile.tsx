import Icon from '@root/src/assets/icons/icon';
import {AppText, Box, Row} from '@root/src/components';
import {
  alignHorizontalToFlexAlign,
  alignVerticalToFlexAlign,
} from '@root/src/design_system/layout/alignment';
import {useAppTheme} from '@root/src/design_system/theme/theme';
import {ProfileProps} from './type';
import Clipboard from '@react-native-clipboard/clipboard';
import ProfileImageAvatar from './profile_image_avatar';
import Toast from '@root/src/components/app_snackbar';

function Profile({
  fullName,
  onTapUserName,
  profilePhoto,
  userName,
}: ProfileProps) {
  const {colors} = useAppTheme();
  return (
    <Row width={'100%'} justifyContent={alignHorizontalToFlexAlign.left}>
      <ProfileImageAvatar profilePhoto={profilePhoto} />
      <Box>
        <AppText
          text={`${fullName}`}
          weight="large"
          size={22}
          color={colors.black}
        />
        <Row justifyContent={alignVerticalToFlexAlign['space-evenly']}>
          <AppText text="Username:" weight="big" color={colors.black} />
          <AppText
            text={`@${userName?.toLowerCase()}`}
            weight="big"
            color={colors.lightGreen}
            onPress={onTapUserName}
          />
          <Icon
            name="copy"
            onPress={() => {
              Clipboard.setString(userName ?? '');
              Toast.showSuccessSnackBar({text: `Copied ${userName} to clipboard`});
            }}
          />
        </Row>
      </Box>
    </Row>
  );
}

export default Profile;

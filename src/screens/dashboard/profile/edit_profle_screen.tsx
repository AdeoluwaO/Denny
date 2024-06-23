import {
  AppBottomSheet,
  AppButton,
  AppScrollView,
  Box,
  Gap,
  AppText,
  LoadingOverlay,
  Row,
  SharedLayoutBox,
} from '@root/src/components';
import ProfileImageAvatar from './components/profile_image_avatar';
import UploadImageButton from './components/upload_image_button';
import TextInputWithTitle from './components/textinput_with_title';
import {
  alignHorizontalToFlexAlign,
  alignVerticalToFlexAlign,
} from '@root/src/design_system/layout/alignment';
import {
  getComputedHeight,
  getComputedWidth,
} from '@root/src/design_system/layout/responsiveness';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { editProfile } from '@root/src/utils/validators';
import {
  useStoredUserProfile,
  userProfileStoreActions,
} from '@root/src/store/profile';
import { ResponseUserData } from '@root/src/domians/profile/types';
import { HomeScreenStackProps } from '@root/src/routes/types/home_stack_types';
import AppImagePicker from '@root/src/config/device_features/image_picker';
import { request, PERMISSIONS, RESULTS } from 'react-native-permissions';
import { useBottomModalRef } from '@root/src/hooks/bottomsheet';
import { Platform, StyleSheet } from 'react-native';
import { useAppTheme } from '@root/src/design_system/theme/theme';
import { openSettings } from '@root/src/config/internals/link';

function EditProfileScreen({ navigation }: HomeScreenStackProps<'edit-profile'>) {
  const storedUserProfile = useStoredUserProfile();
  console.log('storedUserProfile id is ', storedUserProfile?.id);
  const {
    control,
    handleSubmit,
    setFocus,
    getValues,
    formState: { errors },
  } = useForm({
    defaultValues: {
      first_name: storedUserProfile?.first_name ?? '',
      last_name: storedUserProfile?.last_name ?? '',
      email: storedUserProfile?.email ?? '',
      display_picture: storedUserProfile?.avatar ?? '',
    },
    mode: 'onChange',
    resolver: yupResolver(editProfile),
  });
  const { colors } = useAppTheme();
  const { updateProfile } = userProfileStoreActions();
  const [ref, { open, close, closeAll }] = useBottomModalRef();

  const onSubmit = (profile: ResponseUserData) => {
    updateProfile(profile)
    console.log(`Entered  data  PROFILE ${profile}`, profile);
    navigation.pop();
  };

  return (
    <SharedLayoutBox title="Edit Profile">
      <AppScrollView>
        <Row
          columnGap={getComputedWidth(16)}
          justifyContent={alignHorizontalToFlexAlign.left}>
          <ProfileImageAvatar
            profilePhoto={storedUserProfile?.avatar!}
          />
          <UploadImageButton
            onPress={async () => {
              const status = await Platform.select({
                android: request(PERMISSIONS.ANDROID.READ_MEDIA_IMAGES),
                ios: request(PERMISSIONS.IOS.MEDIA_LIBRARY),
              });

              if (status === RESULTS.GRANTED) open();
              else
                openSettings()
            }}
          />
        </Row>
        <Gap height={getComputedHeight(16)} />
        <TextInputWithTitle
          title="First Name"
          control={control}
          error={errors.first_name?.message}
          name="first_name"
          onSubmitEditing={() => setFocus('last_name')}
        />
        <Gap height={getComputedHeight(16)} />
        <TextInputWithTitle
          title="Last Name"
          placeholder="Doe"
          control={control}
          error={errors.last_name?.message}
          name="last_name"
          onSubmitEditing={() => setFocus('username')}
        />
        <Gap height={getComputedHeight(16)} />
        <TextInputWithTitle
          title="Email"
          error={errors.email?.message}
          control={control}
          name="email"
          editable={false}
          onSubmitEditing={handleSubmit(onSubmit)}
        />
        <Gap height={getComputedHeight(16)} />
        <AppButton
          title="Update"
          onPress={handleSubmit(onSubmit)}
        />
        <Gap height={getComputedHeight(16)} />

      </AppScrollView>
      <AppBottomSheet ref={ref} title="Edit Photo" snaps={['30%']} index={1}>
        <Box {...style.contactBox}>
          <AppText
            text="Change Photo"
            weight="bigger"
            color={colors.primary}
            onPress={async () => {
              console.log('chnage photo');
              const data = await AppImagePicker.SelectImageFromGallery({});
              const galleryImage = data.assets?.at(0)?.uri;
              updateProfile({
                avatar: galleryImage,
              });

              navigation.pop();
              closeAll();
            }}
          />
          <Box {...style.hairline}>
            <></>
          </Box>
          <AppText
            text="Take Photo"
            weight="bigger"
            onPress={async () => {
              const data = await AppImagePicker.LaunchDeviceCamera({});
              const cammeraImage = data.assets?.at(0)?.uri;
              updateProfile({ avatar: cammeraImage });

              close();
              console.log('remove photo');
            }}
            color={colors.primary}
          />
          <Box {...style.hairline}>
            <></>
          </Box>
          <AppText
            text="Remove Photo"
            weight="bigger"
            onPress={() => {
              updateProfile({ avatar: null });
              close();
              console.log('remove photo');
            }}
            color={colors.primary}
          />
        </Box>
      </AppBottomSheet>
    </SharedLayoutBox>
  );
}

export default EditProfileScreen;

const style = StyleSheet.create({
  contactBox: {
    height: getComputedHeight(150),
    width: getComputedWidth(343),
    borderRadius: 30,
    backgroundColor: 'white',
    justifyContent: alignVerticalToFlexAlign.center,
    alignItems: alignHorizontalToFlexAlign.center,
    gap: 20,
  },
  hairline: {
    borderWidth: StyleSheet.hairlineWidth,
    width: '80%',
  },
});

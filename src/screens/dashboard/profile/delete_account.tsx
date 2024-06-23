import {
  AppBottomSheet,
  AppButton,
  AppText,
  Box,
  Gap,
  LoadingOverlay,
  Row,
  SharedLayoutBox,
} from '@root/src/components';
import ProfileImageAvatar from './components/profile_image_avatar';
import {alignHorizontalToFlexAlign} from '@root/src/design_system/layout/alignment';
import {useAppTheme} from '@root/src/design_system/theme/theme';
import {
  getComputedHeight,
  getComputedWidth,
} from '@root/src/design_system/layout/responsiveness';
import {FLEX} from '@root/App';
import {useStoredUserProfile} from '@root/src/store/profile';
import {HomeScreenStackProps} from '@root/src/routes/types/home_stack_types';
import {useAuth} from '@root/src/context/auth_context';
import {useBottomModalRef} from '@root/src/hooks/bottomsheet';
import Toast from '@root/src/components/app_snackbar';

function DeleteAccountScreen({
  navigation,
}: HomeScreenStackProps<'delete-account'>) {
  const {colors} = useAppTheme();
  const {removeTokens} = useAuth();
  const profile = useStoredUserProfile();
  const [ref, {open, close}] = useBottomModalRef();
  console.log('the id is', profile?.id);
  return (
    <SharedLayoutBox title="Delete Account">
      <Box flex={FLEX} alignSelf={alignHorizontalToFlexAlign.center}>
        <ProfileImageAvatar profilePhoto={profile?.avatar!} />
        <Gap height={getComputedHeight(16)} />
        <AppText
          text="Delete Account"
          weight="large"
          size={22}
          color={colors.primary}
          textAlign={alignHorizontalToFlexAlign.center}
        />
        <Gap height={getComputedHeight(16)} />
        <AppText
          text={
            'Are you sure you want to Deactivate/Delete your\nAccount? This action cannot be undone.'
          }
          weight="big"
          size={14}
          color={colors.obsidian}
          textAlign={alignHorizontalToFlexAlign.center}
        />
      </Box>

      <AppButton
        title="Delete Account"
        color={colors.lightRed}
        onPress={open}
      />
      <Gap height={getComputedHeight(16)} />
      <AppBottomSheet ref={ref} snaps={['30%']} index={1}>
        <AppText
          text="Are you sure?"
          weight="bigger"
          color={colors.primary}
          size={31}
          textAlign="center"
        />
        <AppText
          text="This action is irreversible"
          weight="bigger"
          color={colors.primary}
          size={18}
          textAlign="center"
        />
        <Gap flex={1} />
        <Row flexWrap="nowrap">
          <AppButton
            title="Cancel"
            onPress={close}
            width={getComputedWidth(164)}
            color={colors.transparent}
            style={{borderColor: colors.secondary, borderWidth: 1}}
            textColor={colors.secondary}
          />
          <AppButton
            title="Continue"
            onPress={() => {
              close();
              removeTokens();
              Toast.showSuccessSnackBar({
                text: 'Account successfully deleted...',
              });
            }}
            width={getComputedWidth(164)}
          />
        </Row>
        <Gap height={getComputedHeight(16)} />
      </AppBottomSheet>
    </SharedLayoutBox>
  );
}

export default DeleteAccountScreen;

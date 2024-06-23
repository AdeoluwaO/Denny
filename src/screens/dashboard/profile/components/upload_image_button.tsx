import Icon from '@root/src/assets/icons/icon';
import {AppText, Box, Row} from '@root/src/components';
import {SPACING} from '@root/src/design_system/layout/spacing';
import {useAppTheme} from '@root/src/design_system/theme/theme';
import {Pressable} from 'react-native';

function UploadImageButton({onPress}: {onPress(): void}) {
  const {colors} = useAppTheme();
  return (
    <Pressable onPress={onPress}>
      <Box
        backgroundColor={colors.opacGreeen}
        padding={SPACING.medium}
        borderRadius={17}>
        <Row>
          <Icon name="camera" />
          <AppText
            text="Upload Photo"
            weight="big"
            size={12}
            color={colors.lightGreen}
          />
        </Row>
      </Box>
    </Pressable>
  );
}

export default UploadImageButton;

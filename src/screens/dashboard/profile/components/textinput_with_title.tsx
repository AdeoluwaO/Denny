import {AppText, AppTextInput, Box} from '@root/src/components';
import {useAppTheme} from '@root/src/design_system/theme/theme';
import {TextInputWithTitleProp} from './type';
import { getComputedWidth } from '@root/src/design_system/layout/responsiveness';

function TextInputWithTitle({
  title,
  prefixIcon,
  suffixIcon,
  ...props
}: TextInputWithTitleProp) {
  const {colors} = useAppTheme();
  return (
    <Box rowGap={getComputedWidth(16)}>
      <AppText text={title} weight="big" size={15} color={colors.primary} />
      <AppTextInput
        // label={placeholder}
        {...props}
        textColor={colors.primary}
        backgroundColor={colors.white}
        right={prefixIcon}
        left={suffixIcon}
      />
    </Box>
  );
}

export default TextInputWithTitle;

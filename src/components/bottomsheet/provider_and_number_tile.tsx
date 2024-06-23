import {StyleSheet} from 'react-native';
import {Box} from '../Box';
import {Row} from '../row';
import {useAppTheme} from '@root/src/design_system/theme/theme';
import {AppText} from '../text';
import {getComputedHeight} from '@root/src/design_system/layout/responsiveness';
import {alignHorizontalToFlexAlign} from '@root/src/design_system/layout/alignment';
import {AppImage} from '../app_image';
import {UrlImageOrNameInitials} from '../url_image_or_initials';

export function ServiceProviderAndNumberBox({
  providerBanner,
  name,
  phoneNumber
}: {
  providerBanner: string;
  phoneNumber: string;
  name: string;
}) {
  const {colors} = useAppTheme();
  return (
    <Box {...style.container} backgroundColor={colors.white}>
      <Row {...style.row}>
        <UrlImageOrNameInitials
          imageUrl={providerBanner}
          name={name}
          urlImageStyle={style.image}
        />
        <AppText text="To" weight="bigger" color={colors.blueMagenta} />
        <AppText text={phoneNumber} weight="bigger" color={colors.primary} />
      </Row>
    </Box>
  );
}

const style = StyleSheet.create({
  container: {
    padding: 6,
    borderRadius: 20,
    height: getComputedHeight(70),
    width: '100%',
    alignItems: 'flex-start',
    justifyContent: alignHorizontalToFlexAlign.center,
  },
  row: {
    columnGap: 10,
  },
  image: {
    height: 56,
    width: 56,
    borderRadius: 20,
  },
});

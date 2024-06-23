import {
  AppIconButton,
  AppText,
  LayoutBox,
  Row,
  Gap,
} from 'src/components/index';
import {useAppTheme} from '@root/src/design_system/theme/theme';
import {AuthBoxProp} from './types';
import {alignHorizontalToFlexAlign} from '@root/src/design_system/layout/alignment';
import {
  getComputedHeight,
  getComputedWidth,
} from '@root/src/design_system/layout/responsiveness';

function AuthBox({children, title, onPress}: AuthBoxProp) {
  const {colors} = useAppTheme();

  return (
    <LayoutBox
      paddingHorizontal={getComputedWidth(16)}
      backgroundColor={colors.whiteSmoke}>
      <Row justifyContent={alignHorizontalToFlexAlign.left} width={'45%'}>
        <AppIconButton onPress={onPress!} name="chevron-back" />
        <Gap flex={1} />
        <AppText color={colors.primary} weight="bigger" text={title ?? ''} />
      </Row>
      <Gap height={getComputedHeight(46)} />
      {children}
    </LayoutBox>
  );
}

export default AuthBox;

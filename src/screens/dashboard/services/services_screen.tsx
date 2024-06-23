import {
  AppText,
  Row,
  LayoutBox,
  Gap,
  AppScrollView,
} from '@root/src/components';
import {alignHorizontalToFlexAlign} from '@root/src/design_system/layout/alignment';
import {useAppTheme} from '@root/src/design_system/theme/theme';
import Utilities from './components/utilities';
import Finance from './components/finance';
import Internet from './components/internet';
import Others from './components/others';
import {
  getComputedHeight,
  getComputedWidth,
} from '@root/src/design_system/layout/responsiveness';

export function ServicesScreen() {
  const {colors} = useAppTheme();
  return (
    <LayoutBox
      paddingHorizontal={getComputedWidth(16)}
      alignItems={alignHorizontalToFlexAlign.left}>
      <AppScrollView>
        <Row alignSelf={alignHorizontalToFlexAlign.left}>
          {/* <Icon name="service-green" color={colors.lightGreen} /> */}
          <AppText
            text="Services"
            weight="bigger"
            size={24}
            color={colors.lightGreen}
          />
        </Row>
        <Gap height={getComputedHeight(32)} />
        <Utilities />
        <Gap height={getComputedHeight(16)} />
        <Finance />
        <Gap height={getComputedHeight(16)} />
        <Internet />
        <Gap height={getComputedHeight(16)} />
        <Others />
        <Gap height={getComputedHeight(16)} />
      </AppScrollView>
    </LayoutBox>
  );
}

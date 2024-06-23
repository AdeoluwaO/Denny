import {Box, AppText, Row} from '@root/src/components';
import {alignHorizontalToFlexAlign} from '@root/src/design_system/layout/alignment';
import {useAppTheme} from '@root/src/design_system/theme/theme';
import {ServicesContainer} from './service_container';
import {
  getComputedHeight,
  getComputedWidth,
} from '@root/src/design_system/layout/responsiveness';

function Others() {
  const {colors} = useAppTheme();

  return (
    <Box gap={getComputedHeight(16)}>
      <AppText text="Others" weight="big" size={15} color={colors.black} />
      <Row
        justifyContent={alignHorizontalToFlexAlign.left}
        rowGap={getComputedWidth(16)}>
        <ServicesContainer
          title="Shopping"
          iconName="shopping-service"
          showTrailingIcon={false}
          onPress={() => {}}
        />
        <ServicesContainer
          title="Logistics"
          iconName="logistics-service"
          showTrailingIcon={false}
          onPress={() => {}}
        />
      </Row>
    </Box>
  );
}

export default Others;

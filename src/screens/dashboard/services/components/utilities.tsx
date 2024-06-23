import { Box, AppText, Row } from '@root/src/components';
import { alignHorizontalToFlexAlign } from '@root/src/design_system/layout/alignment';
import { useAppTheme } from '@root/src/design_system/theme/theme';
import { ServicesContainer } from './service_container';
import {
  getComputedHeight,
  getComputedWidth,
} from '@root/src/design_system/layout/responsiveness';

function Utilities() {
  const { colors } = useAppTheme();
  return (
    <Box gap={getComputedHeight(16)}>
      <AppText text="Utility" weight="big" size={15} color={colors.black} />
      <Row
        justifyContent={alignHorizontalToFlexAlign.left}
        rowGap={getComputedWidth(16)}>
        <ServicesContainer
          title="Airtime"
          iconName="airtime-service"
          showTrailingIcon={false}
          onPress={() => {

          }}
        />
        <ServicesContainer
          title="Data"
          iconName="data-service"
          showTrailingIcon={false}
          onPress={() => {

          }}
        />
        <ServicesContainer
          title="Data Sharing"
          iconName="data-service"
          showTrailingIcon={false}
          onPress={() => { }}
        />
        <ServicesContainer
          title="Cable"
          iconName="cable-service"
          showTrailingIcon={false}
          onPress={() => {

          }}
        />
        <ServicesContainer
          title="Electricity"
          iconName="electricity-service"
          showTrailingIcon={false}
          onPress={() => {
          }}
        />
      </Row>
    </Box>
  );
}

export default Utilities;

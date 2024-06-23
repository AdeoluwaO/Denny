import { Box, AppText, Row } from "@root/src/components";
import { alignHorizontalToFlexAlign } from "@root/src/design_system/layout/alignment";
import { useAppTheme } from "@root/src/design_system/theme/theme";
import { ServicesContainer } from "./service_container";
import { getComputedHeight, getComputedWidth } from "@root/src/design_system/layout/responsiveness";

function Finance() {
    const {colors} = useAppTheme();
  
    return(
        <Box gap={getComputedHeight(16)}>
        <AppText text="Finance" weight="big" size={15} color={colors.black} />
        <Row justifyContent={alignHorizontalToFlexAlign.left} rowGap={getComputedWidth(16)}>
          <ServicesContainer
            title="Apple Pay"
            iconName="apple-service"
            showTrailingIcon={false}
            onPress={() => {}}
          />
          <ServicesContainer
            title="Amazon Pay"
            iconName="amazon-service"
            showTrailingIcon={false}
            onPress={() => {}}
          />
          <ServicesContainer
            title="PayPal"
            iconName="paypal-service"
            showTrailingIcon={false}
            onPress={() => {}}
          />
          <ServicesContainer
            title="Skrill"
            iconName="skrill-service"
            showTrailingIcon={false}
            onPress={() => {}}
          />
        </Row>
      </Box>
    );
}

export default Finance;
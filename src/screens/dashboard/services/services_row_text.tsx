import { AppText, Row } from "@root/src/components";
import { alignVerticalToFlexAlign } from "@root/src/design_system/layout/alignment";
import { useAppTheme } from "@root/src/design_system/theme/theme";
import { DimensionValue } from "react-native";

function ServicesRowText({title, message, width}: {title: string, message: string, width?: DimensionValue}) {
    const {colors} = useAppTheme();
    return(
        <Row width={width} justifyContent={alignVerticalToFlexAlign["space-between"]}>
        <AppText
          text={title}
          weight="bigger"
          color={colors.primary}
        />
        <AppText
          text={message}
          weight="large"
          color={colors.primary}
        />
      </Row>
    );
}

export default ServicesRowText;
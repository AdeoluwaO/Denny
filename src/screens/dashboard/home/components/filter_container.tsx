import {  AppText, Box } from "@root/src/components";
import { alignVerticalToFlexAlign } from "@root/src/design_system/layout/alignment";
import { getComputedHeight } from "../../../../design_system/layout/responsiveness";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useAppTheme } from "src/design_system/theme/theme";

function FilterContainer() {
    const {colors} = useAppTheme();
    return(
        <Box 
        flexDirection="row"
        backgroundColor={colors.whiteGrey}
        borderRadius={20}
        justifyContent={alignVerticalToFlexAlign["space-between"]}
        width={'100%'}
        height={getComputedHeight(56)}
        // height={'100%'}
        >
            <AppText text="All" weight="large" color={colors.black} />
            <Ionicons name="chevron-down" onPress={() => {}} size={24} />
        </Box>
    );
}

export default FilterContainer;
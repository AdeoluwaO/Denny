import {useNavigation} from '@react-navigation/native';
import Icon from '@root/src/assets/icons/icon';
import {
  AppText,
  AppButton,
  BorderButton,
  BackgroundLayout,
  Gap,
} from '@root/src/components';
import {Box, Row,} from '@root/src/components/index';
import {
  alignHorizontalToFlexAlign,
} from '@root/src/design_system/layout/alignment';
import {
  getComputedHeight,
  getComputedWidth,
} from '../../../design_system/layout/responsiveness';
import {ScrollView} from 'react-native-gesture-handler';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {FLEX} from '@root/App';
import { IconName } from '@root/src/assets/icons/types';

type Prop = {
  onPress: () => void;
  buttonTitle: string;
  titleMessage: string;
  subTitle: string;
  iconName: IconName;
  showRowButton?: boolean;
};

function OnboardingBox({
  buttonTitle,
  titleMessage,
  subTitle,
  iconName,
  showRowButton = false,
  onPress,
}: Prop) {
  const navigation = useNavigation();
  const {top, bottom} = useSafeAreaInsets();

  return (
    <BackgroundLayout flex={FLEX} paddingTop={top} paddingBottom={bottom}>
        <ScrollView
          contentContainerStyle={{
            alignItems: alignHorizontalToFlexAlign.center,
            paddingHorizontal: getComputedWidth(24),
            flexGrow: 1,
          }}>
          <Box justifyContent={alignHorizontalToFlexAlign.center} flex={1}>
            <Icon height={170} name={iconName} />
          </Box>
          <Box alignSelf={alignHorizontalToFlexAlign.left}>
            <AppText weight="large" size={32} text={titleMessage} />
            <Gap height={getComputedHeight(16)} />
            <AppText weight="small" size={16} text={subTitle} />
          </Box>

          <Gap height={getComputedHeight(36)} />
          {!showRowButton && (
            <AppButton onPress={onPress} title={buttonTitle} />
          )}
          {showRowButton && (
            <Row rowGap={0}  columnGap={getComputedHeight(14)}>
              <BorderButton
                showIcon
                title=""
                width={getComputedWidth(56)}
                onPress={() => {
                  navigation.goBack();
                }}
              />
              <AppButton
                onPress={onPress}
                width={getComputedWidth(262)}
                title={buttonTitle}
              />
            </Row>
          )}
          <Gap height={getComputedHeight(36)} />
        </ScrollView>
    </BackgroundLayout>
  );
}

export default OnboardingBox;

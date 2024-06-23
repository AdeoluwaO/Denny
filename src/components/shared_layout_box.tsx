import {
  AppIconButton,
  AppText,
  LayoutBox,
  Row,
  Box,
  Gap,
} from 'src/components/index';
import { useAppTheme } from '@root/src/design_system/theme/theme';
import { SharedLayoutProp } from './types';
import {
  alignHorizontalToFlexAlign,
  alignVerticalToFlexAlign,
} from '@root/src/design_system/layout/alignment';
import { useNavigation } from '@react-navigation/native';
import {
  getComputedHeight,
  getComputedWidth,
} from '../design_system/layout/responsiveness';
import IonIcons from 'react-native-vector-icons/Ionicons';
import { KeyboardAvoidingView, Pressable } from 'react-native';

//? an example screen that uses this is the [Recent Transactions screen]
export function SharedLayoutBox({
  children,
  title,
  trailing,
  paddingHorizontal,
  onPressTrailing,
}: SharedLayoutProp) {
  const { colors } = useAppTheme();
  const nav = useNavigation();
  return (
    <LayoutBox paddingHorizontal={paddingHorizontal ?? getComputedWidth(24)}>
      <Row justifyContent={alignVerticalToFlexAlign['space-between']}>
        <Row>
          <Pressable onPress={() => nav.goBack()}>
            <Box
              height={getComputedHeight(48)}
              width={getComputedWidth(48)}
              justifyContent="center"
              alignItems="center"
              borderRadius={12}
              backgroundColor={colors.white}>
              <IonIcons name="chevron-back" size={24} color={colors.black} />
            </Box>
          </Pressable>
          <AppText color={colors.primary} weight="bigger" text={title ?? ''} />
        </Row>
        {trailing != null && (
          <AppText
            text={trailing}
            textDecorationLine="underline"
            onPress={onPressTrailing}
            weight="large"
            color={colors.lightGreen}
          />
        )}
      </Row>
      <Gap height={getComputedHeight(24)} />
      {children}
    </LayoutBox>
  );
}

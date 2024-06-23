import Icon from '@root/src/assets/icons/icon';
import {
  AppButton,
  AppHtmlRenderer,
  AppScrollView,
  Gap,
  LayoutBox,
} from '@root/src/components';
import {alignHorizontalToFlexAlign} from '@root/src/design_system/layout/alignment';
import {getComputedHeight} from '@root/src/design_system/layout/responsiveness';
import {AuthStackScreenProps} from '@root/src/routes/types/auth_stack_types';
import {termsAndConditions} from '@root/src/utils/constants';

function TermsAndCondition({
  navigation,
  route: {params},
}: AuthStackScreenProps<'tsandcs'>) {
  const {showButton} = params;
  return (
    <LayoutBox paddingHorizontal={16}>
      <AppScrollView>
        <AppHtmlRenderer value={termsAndConditions} />
        {showButton && (
          <>
            <AppButton
              title="I agree"
              onPress={() => {
                navigation.goBack();
              }}
            />
            <Gap height={getComputedHeight(20)} />
          </>
        )}
      </AppScrollView>
    </LayoutBox>
  );
}

export default TermsAndCondition;

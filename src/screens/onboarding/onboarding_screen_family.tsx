import {AuthStackScreenProps} from '@root/src/routes/types/auth_stack_types';
import OnboardingBox from './components/onboarding_box';

export function OnboardingScreenFamily({
  navigation,
}: AuthStackScreenProps<'onboarding-two'>) {
  return (
    <OnboardingBox
      titleMessage={'Always there for \nYou'}
      subTitle="From grocery lists to work deadlines, Denny keeps track of everythin."
      buttonTitle="Next"
      iconName='onboarding-image-three'
      onPress={() => {
        navigation.navigate('landing-screen');
      }}
      showRowButton
    />
  );
}

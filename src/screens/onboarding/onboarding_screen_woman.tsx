import {AuthStackScreenProps} from '@root/src/routes/types/auth_stack_types';
import OnboardingBox from './components/onboarding_box';

export function OnboardingScreenWoman({navigation}: AuthStackScreenProps<'onboarding-one'>) {
  return (
      <OnboardingBox 
      titleMessage={`Never miss a \nBeat`}
      subTitle='Capture your ideas, deadlines, and schedules instantly.'
      iconName='onboarding-image-two'
      buttonTitle='Next'
      onPress={() => {  
        navigation.navigate('onboarding-two');
      }}
      showRowButton
      />
  );
}


import {AuthStackScreenProps} from '@root/src/routes/types/auth_stack_types';
import OnboardingBox from './components/onboarding_box';

export function OnboardingScreen({
  navigation,
}: AuthStackScreenProps<'onboarding'>) {
  return (
      <OnboardingBox 
      titleMessage={'Streamline Your\nWorkflow'}
      subTitle='Do more with your time'
      iconName='onboarding-image-one'
      buttonTitle='Get started'
      onPress={() => {  
        navigation.navigate('onboarding-one');
      }}
      />
  );
}

import {LoadingAnimation} from './loading_animation';
import {LoadingOverlay} from './loading_overlay';

export function LoadingScreen() {
  return (
    <LoadingOverlay>
      <LoadingAnimation />
    </LoadingOverlay>
  );
}

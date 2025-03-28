import router from '@router';
import LoginScreen from './LoginScreen';
import InputOTP from './InputOTP';
import OnboardingScreen from './OnboardingScreen';
import InputInformation from './InputInformation';

export const auth = {
  [router.ONBOARDING_SCREEN]: OnboardingScreen,
  [router.LOGIN_SCREEN]: LoginScreen,
  [router.INPUT_OTP]: InputOTP,
  [router.INPUT_INFORMATION]: InputInformation,
};

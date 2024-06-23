import {SvgProps} from 'react-native-svg';
// import s from '@assets/svg/';
import apple from '@assets/svg/apple_logo.svg';
import facebook from '@assets/svg/facebook_logo.svg';
import google from '@assets/svg/google_logo.svg';
import onboarding from '@assets/svg/onboarding.svg';
import success from '@assets/svg/success.svg';
import topbar from '@assets/svg/top_icon.svg';
import home from '@assets/svg/home.svg';
import services from '@assets/svg/services.svg';
import wallet from '@assets/svg/wallet_money.svg';
import profile from '@assets/svg/profile.svg';
import rectangle from '@assets/svg/rectangle_one.svg';
import rectangleTwo from '@assets/svg/rectangle_two.svg';
import rectangleThree from '@assets/svg/rectangle_three.svg';
import rectangleFour from '@assets/svg/rectangle_four.svg';
import notification from '@assets/svg/notification_bell.svg';
import eyeOff from '@assets/svg/eye-off.svg';
import recents from '@assets/svg/recents.svg';
import add from '@assets/svg/add.svg';
import data from '@assets/svg/data_icon.svg';
import anncouncements from '@assets/svg/anncouncements.svg';
import naira from '@assets/svg/naira.svg';
import cellular from '@assets/svg/cellular_network.svg';
import electricity from '@assets/svg/electricity.svg';
import dataGreen from '@assets/svg/data_green.svg';
import tv from '@assets/svg/TV.svg';
import flatRectangle from '@assets/svg/rectangle.svg';
import copy from '@assets/svg/copy.svg';
import camera from '@assets/svg/camera.svg';
import helpAndSupport from '@assets/svg/help_and_support.svg';
import onboardingImageOne from '@assets/svg/workflow.svg';
import onboardingImageTwo from '@assets/svg/never_miss.svg';
import onboardingImageThree from '@assets/svg/always_there.svg';
import moreHor from '@assets/svg/more-hotizontal.svg';
import airtimeService from '@assets/svg/airtime-service.svg';
import dataService from '@assets/svg/data-service.svg';
import cableService from '@assets/svg/cable-service.svg';
import electricityService from '@assets/svg/electricity-service.svg';
import appleService from '@assets/svg/apple-service.svg';
import amazonService from '@assets/svg/amazon-service.svg';
import payPalService from '@assets/svg/paypal-service.svg';
import skrillService from '@assets/svg/skriill-service.svg';
import remitaService from '@assets/svg/remita-service.svg';
import flutterwaveService from '@assets/svg/flutterwave-service.svg';
import shoppingService from '@assets/svg/shopping-service.svg';
import logisticsService from '@assets/svg/logistics-service.svg';
import serviceGreen from '@assets/svg/service-green.svg';
import walletGreen from '@assets/svg/wallet-green.svg';
import profileGreen from '@assets/svg/profile-green.svg';
import editProfileGreen from '@assets/svg/edit-profile-green.svg';
import referFiendsGreen from '@assets/svg/refer-friend-green.svg';
import accountSecurityGreen from '@assets/svg/account-security-green.svg';
import notificationsGreen from '@assets/svg/notification-green.svg';
import deactivateAccountGreen from '@assets/svg/deactivate-account-green.svg';
import helpAndSupportGreen from '@assets/svg/help-green.svg';
import legalGreen from '@assets/svg/legal-green.svg';
import signoutGreen from '@assets/svg/signout-green.svg';
import changeTransactionPinGreen from '@assets/svg/chnage-password-green.svg';
import boimetricsGreen from '@assets/svg/biometrics-green.svg';
import deleteAccountProile from '@assets/svg/delete_account_image.svg';
import handle from '@assets/svg/bottomsheet_handle.svg';
import user from '@assets/svg/user.svg';
import ribbon from '@assets/svg/ribbon.svg';
import close from '@assets/svg/close.svg';
import error from '@assets/svg/error.svg';
import nairaWhite from '@assets/svg/naira_white.svg';
import twoFactorAuth from '@assets/svg/lock-password-green.svg';
import attachment from '@assets/svg/attachment.svg';
import send from '@assets/svg/send.svg';
import resolved from '@assets/svg/resolved.svg';
import unresolved from '@assets/svg/unresolved.svg';
import eyeOpen from '@assets/svg/eye_open.svg';
import search from '@assets/svg/search.svg';

export const ICONS = {
  apple: apple,
  facebook: facebook,
  google: google,
  onboarding: onboarding,
  success: success,
  error: error,
  topbar: topbar,
  home: home,
  'onboarding-image-one': onboardingImageOne,
  'onboarding-image-two': onboardingImageTwo,
  'onboarding-image-three': onboardingImageThree,
  services: services,
  wallet: wallet,
  profile: profile,
  'rectangle-one': rectangle,
  'rectangle-two': rectangleTwo,
  'rectangle-three': rectangleThree,
  'rectangle-four': rectangleFour,
  notification: notification,
  eyeOff: eyeOff,
  eyeOn: eyeOpen,
  recents: recents,
  add: add,
  data: data,
  anncouncements: anncouncements,
  naira: naira,
  'cellular-network': cellular,
  electricity: electricity,
  'data-green': dataGreen,
  tv: tv,
  'flat-rectangle': flatRectangle,
  copy: copy,
  camera: camera,
  'help-and-support': helpAndSupport,
  'more-horizontal': moreHor,
  'airtime-service': airtimeService,
  'cable-service': cableService,
  'data-service': dataService,
  'electricity-service': electricityService,
  'apple-service': appleService,
  'amazon-service': amazonService,
  'paypal-service': payPalService,
  'skrill-service': skrillService,
  'remita-service': remitaService,
  'flutterwave-service': flutterwaveService,
  'shopping-service': shoppingService,
  'logistics-service': logisticsService,
  'service-green': serviceGreen,
  'wallet-green': walletGreen,
  'profile-green': profileGreen,
  'edit-profile-green': editProfileGreen,
  'refer-friends-green': referFiendsGreen,
  'account-security-green': accountSecurityGreen,
  'notificaion-green': notificationsGreen,
  'deactivate-account-green': deactivateAccountGreen,
  'help-and-support-green': helpAndSupportGreen,
  'legal-green': legalGreen,
  'signout-green': signoutGreen,
  'transaction-pin-green': changeTransactionPinGreen,
  'biometrics-green': boimetricsGreen,
  'delete-account-profile': deleteAccountProile,
  handle: handle,
  'user-badge': user,
  'award-badge': ribbon,
  close: close,
  'naira-white': nairaWhite,
  'two-factor-authentication': twoFactorAuth,
  attachment: attachment,
  send: send,
  resolved: resolved,
  unresolved: unresolved,
  'search-icon': search
};

export type IconName = keyof typeof ICONS;

export interface IconProps extends SvgProps {
  name: IconName;
  size?: number;
  iconColor?: string;
  stroke?: string;
  iconOpacity?: number;
  strokeWidth?: number;
  focused?: boolean;
  showBackgroundColor?: boolean;
  backgroundColor?: string;
  opacity?: number;
  borderRadius?: number;
}

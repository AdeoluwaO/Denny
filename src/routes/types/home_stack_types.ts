import { StackScreenProps } from "@react-navigation/stack";
import { BottomBarStackParamsList } from "./app_stack_types";
import { Services } from "@root/src/domians/services/types";

export type HomeStackParamsList = {
home: {
    screen: BottomBarStackParamsList;
  },
airtime: undefined,
'tsandcs': {showButton: boolean},
'privacy-policy': {showButton: boolean},
'airtime-details': {id: string},
'corporate-data': undefined,
'electricity-subscription': undefined,
data: undefined,
'data-details': {id: string},
'cable-tv-details': {id: string},
'cable-tv-subscription': undefined,
'deposit': undefined,
'deposit-with-card': undefined,
'claim-data': {
  id: string;
},
transactions: {
  service: Services;
},
beneficiaries: undefined,
profile: undefined,
'edit-profile': undefined,
'change-password': undefined,
'change-transaction-pin': undefined,
'referal-screen': undefined,
'account-security': undefined,
'notifications': undefined,
'delete-account': undefined,
'help-and-support': undefined,
'legal': undefined,
'lost-password': undefined,
'electricity-details': {id: string},
'two-factor-authentication': undefined,
'two-factor-otp': undefined,
'turn-off-two-factor-authentication': undefined,
'report-screen': undefined,
'chat-screen': undefined,
'reset-pin': undefined,
'reset-pin-otp': {email: string},
}


export type  HomeScreenStackProps<T extends keyof HomeStackParamsList> = StackScreenProps<HomeStackParamsList, T>;
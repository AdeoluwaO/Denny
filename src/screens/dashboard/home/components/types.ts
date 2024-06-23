import { IconName } from "@root/src/assets/icons/types"
import { ButtonProp } from "@root/src/components/types"
import { ViewStyle } from "react-native"

export interface HomeHeaderProp {
    profilePhoto: string | null,
    walletBalance: string,
    cashback: string,
    onPressTransactions: () => void,
    onPressNotifictionBell: () => void,
    onPressTopup: () => void
}
export interface HomePromoProps {
    iconName: IconName,
    title: string,
    subtitle: string,
    onPress?: () => void,
    buttonTitle?: string,
    showButton?: boolean,
}
export interface AnncouncementProps {
    iconName: IconName,
    title: string,
    subtitle: string,
    onPressClose: () => void,
}
export interface TransactionTileProps {
    iconName: IconName,
    transactionType: string,
    transactionStatus: string,
    amount: string,
    date: string,
    time: string,
    onPress: () => void,
}

export interface HomeButtonProp extends ButtonProp, ViewStyle {
    name?: IconName,
    icon?: string,
    width?: number,
    textColor?: string,
    fillColor?: string,
    strokeColor?: string,
}
export interface WalletInfoContainerProps {
   accountNumber: string,
    bankName: string,
    accountName: string,
}
  
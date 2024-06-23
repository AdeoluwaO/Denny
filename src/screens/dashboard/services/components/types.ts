import { IconName } from "@root/src/assets/icons/types";

export interface ServicesContainerProp {
    iconName?: IconName,
    title: string,
    backgroundColor?: string,
    textColor?: string,
    showDivider? :boolean,
    showTrailingIcon?: boolean,
    onPress: () => void
}
export interface ServiceAdBoxProp {
    amount: string,
    cashbackAmouunt: string,
    onPress: () => void,
    backgroundColor?: string
}
export interface CorporateDataBoxProp extends ServiceAdBoxProp {
    dataPlan: string;
    duration: string;
    backgroundColor?: string;
}
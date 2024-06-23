import { TextProp } from "@root/src/components/types";
import { FlexAlignType, TextStyle, ViewStyle,  } from "react-native";

export const alignHorizontalToFlexAlign = {
    center: 'center' ,
    justify: 'space-between' ,
    left: 'flex-start' ,
    right: 'flex-end' ,
  } as const;
  export type AlignHorizontal = keyof typeof alignHorizontalToFlexAlign;
  
  export const alignVerticalToFlexAlign = {
    bottom: 'flex-end' ,
    center: 'center' ,
    top: 'flex-start' ,
    'space-between': 'space-between' ,
    'space-around': 'space-around' ,
    'space-evenly': 'space-evenly' ,
  } as const;
  export type AlignVertical = keyof typeof alignVerticalToFlexAlign;
  

  export const textAlignment = {
    center :"center",
    auto :  "auto" ,
    left : "left" ,
    right:  "right", 
    justify: "justify",
    '':  undefined
  } 

  export type TextAlign = keyof typeof textAlignment;
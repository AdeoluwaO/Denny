import { BottomTabScreenProps } from "@react-navigation/bottom-tabs"
import { HomeStackParamsList } from "./home_stack_types"
import { StackScreenProps } from "@react-navigation/stack"
import {CompositeScreenProps} from '@react-navigation/native'
export type  BottomBarStackParamsList = {
    home: undefined,
    services : undefined
    wallet : undefined
    profile : undefined
    }

    export type NestedBottomBarScreenProps<
    T extends keyof BottomBarStackParamsList
  > = CompositeScreenProps<StackScreenProps<HomeStackParamsList, 'home'>, BottomTabScreenProps<BottomBarStackParamsList, T>>
    // StackScreenProps<HomeStackParamsList, 'home'> &
    // BottomTabScreenProps<BottomBarStackParamsList, T>;




    export type BottomBarStackScreenProps<T extends keyof BottomBarStackParamsList> =
    BottomTabScreenProps<BottomBarStackParamsList, T>
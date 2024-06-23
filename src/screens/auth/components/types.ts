import { ReactNode } from "react";

export type AuthBoxProp = {
    children: ReactNode,
    title?: string,
    onPress?: () => void
};
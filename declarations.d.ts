
declare module "*.svg" {
    import { SvgProps } from "react-native-svg";
    const content: React.FC<SvgProps>;
    export default content;
  }

  declare module "*.png" {
    export default string;
  }

  declare module '@env' {
    export const API_BASE_URL: string;
    export const CLIENT_ID: string;
    export const CLIENT_SECRET: string;
    export const FIREBASE_ANDROID_API_KEY: string;
    export const FIREBASE_IOS_API_KEY: string;
    export const GOOGLE_WEB_CLIENT_ID: string;
    export const GOOGLE_IOS_CLIENT_ID: string;
  }
  
  
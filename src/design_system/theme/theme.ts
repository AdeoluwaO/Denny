import {MD3LightTheme as DefaultTheme} from 'react-native-paper';
import {useTheme} from 'react-native-paper';
import { FONT_FAMILY } from './fonts';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#003334',
    secondary: '#FFA600',
    white: '#FFFFFF',
    whiteGrey: '#E6E6E6',
    dimGray: '#4A4A68',
    green: '#143D3E',
    fadedGreen: 'rgba(0, 51, 52, 1)',
    lightRed: '#FF4C34',
    lightGreen: '#09A172',
    lighterGreen: 'rgba(9, 161, 114, 0.2)',
    opacGreeen: 'rgba(9, 161, 114, 0.3)',
    whiteSmoke: '#F5F5F5',
    transparent: 'transparent',
    black: '#1A1A1A',
    opacBlack: 'rgba(26, 26, 26, 0.9)',
    opac: '#6E6E6E',
    lightGrey: '#D9D9D9',
    opacWhite: 'rgba(255, 255, 255, 0.2)',
    obsidian: '#252525',
    opacWhite80: 'rgba(255, 255, 255, 0.8)',
    blueMagenta: '#8C8CA1',
    lightBlue: '#3D70AB',
    gray2: '#4F4F4F',
    blurryGray: 'rgba(26, 26, 26, 0.9)',
  },
  fontFamily: FONT_FAMILY,
  status: {
    pending: '#FFA600',
    error: '#FB0000',
    successful: '#09A172',
    backgroundError: 'rgba(251, 0, 0, 0.1)',
    backgroundPending: 'rgba(255, 166, 0, 0.1)',
    backgroundSuccessful: 'rgba(38, 161, 123, 0.1)',
  }
};

export type AppTheme = typeof theme;

export const useAppTheme = () => useTheme<AppTheme>();
export default theme;

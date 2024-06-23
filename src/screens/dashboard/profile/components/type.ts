import {IconName} from '@root/src/assets/icons/types';
import {TextInputProp} from '@root/src/components/types';
import {ReactNode} from 'react';

export interface ProfileProps {
  profilePhoto: string | null;
  fullName: string | null;
  userName: string | null;
  onTapUserName: () => void;
}
export interface TileProps {
  title: string;
  subtitle: string;
  iconName?: IconName;
  icon?: ReactNode;
  onPress: () => void;
}

export interface NotificationBoxProps {
  title: string;
  description: string;
  seen: boolean;
  date: string;
  onTap(): void;
}
export interface ProfileImageProp {
  profilePhoto: string | null;
  size?: number;
  alignSelf?: string;
}
export interface TextInputWithTitleProp extends TextInputProp {
  title: string;
  prefixIcon?: ReactNode;
  suffixIcon?: ReactNode;
}

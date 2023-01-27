import React from "react";
import { IconType } from "react-icons/lib/esm/iconBase";

export type detailsProps = {
  title: string;
  content: string;
  Icon: IconType;
  color?: string;
};

export type menu = {
  setChecked: React.Dispatch<React.SetStateAction<boolean>>;
  yes: boolean;
};

export type authProps = {
  signup?: boolean;
};

export type bottonProps = {
  text: string;
  onClick: any;
};

export interface IUser {
  full_name: string;
  email: string;
}
export interface IInitialState {
  resizeDiv: boolean;
  isLoggedIn: boolean | null;
  userData: IUser | null;
  //   productId: string | null;
}

export interface layoutProps {
  children: React.ReactNode;
}

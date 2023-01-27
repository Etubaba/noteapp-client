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
  id: string;
  full_name: string;
  email: string;
}
export interface IInitialState {
  resizeDiv: boolean;
  isLoggedIn: boolean | null;
  userData: IUser | null;
  noteContent: string;
  dependant: number;
  //   productId: string | null;
}

export interface layoutProps {
  children: JSX.Element;
}

export type NoteProps = {
  id: number;
  title: string;
  content: string;
  slug: string;
  createdAt: string;
};
export interface IApiData {
  id: number;
  slug: string;
  title: string;
  content: string;
  createdAt: string;
}

export interface IModal {
  children: React.ReactNode;
  title?: string;
  open: boolean;
  onClose: any;
}

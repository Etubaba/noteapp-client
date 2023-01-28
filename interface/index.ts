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

export interface EditNote {
  id: number;
  title: string;
  content: string;
}

export interface IInitialState {
  resizeDiv: boolean;
  isLoggedIn: boolean | null;
  userData: IUser | null;
  noteContent: string;
  dependant: number;
  noteDetails: EditNote | null;

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
type IDetails = {
  data: NoteProps;
};
export interface INote {
  details: IDetails;
}

export type EventProps = React.MouseEvent<HTMLButtonElement>;

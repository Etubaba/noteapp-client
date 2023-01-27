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

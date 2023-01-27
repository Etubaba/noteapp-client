import { BsPerson } from "react-icons/bs";
import { AiOutlineLogin } from "react-icons/ai";
import { MdOutlineEventNote } from "react-icons/md";
import { detailsProps } from "./interface";

export const details: detailsProps[] = [
  {
    title: "Create Account",
    content: "Firstly  to create note you have to create an account",
    color: "bg-orange",

    Icon: BsPerson,
  },
  {
    title: "Sign In",
    content:
      "Ensure u sign in to get the best experience,Login with your details",

    Icon: AiOutlineLogin,
  },
  {
    title: "Start creating Notes",
    content: "Firstly  to create note you have to create an account",
    color: "bg-green-600",

    Icon: MdOutlineEventNote,
  },
];

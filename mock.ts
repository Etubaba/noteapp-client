import { BsPerson } from "react-icons/bs";
import { AiOutlineLogin } from "react-icons/ai";
import { MdOutlineEventNote } from "react-icons/md";
import { detailsProps } from "./interface";

export const details: detailsProps[] = [
  {
    title: "Create Account",
    content:
      "Firstly  to create note you have to create an account, best experience",
    color: "bg-orange",

    Icon: BsPerson,
  },
  {
    title: "Sign In",
    content:
      "Ensure u sign in to get the best experience,Login with your credentials and enjoy the best",

    Icon: AiOutlineLogin,
  },
  {
    title: "Start creating Notes",
    content:
      "Start creating notes, to create note you have to create an account",
    color: "bg-green-600",

    Icon: MdOutlineEventNote,
  },
];

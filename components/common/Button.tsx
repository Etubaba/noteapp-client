import React from "react";
import { bottonProps } from "../../interface";

const Button = ({ text, onClick }: bottonProps):JSX.Element => {
  return (
    <div
      onClick={onClick}
      className="text-center cursor-pointer text-sm px-3 text-white py-1.5 bg-orange rounded-md hover:bg-[#8c2510] w-full"
    >
      {text}
    </div>
  );
};

export default Button;

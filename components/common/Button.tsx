import React from "react";
import { bottonProps } from "../../interface";

const Button = ({ text, onClick }: bottonProps):JSX.Element => {
  return (
    <div
      onClick={onClick}
      className="text-center text-white py-2 bg-orange rounded-md hover:bg-[#8c2510] w-full"
    >
      {text}
    </div>
  );
};

export default Button;

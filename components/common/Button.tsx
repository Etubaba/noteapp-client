import React from "react";
import { bottonProps } from "../../interface";
import { Loader } from "./Loader";

const Button = ({ text, onClick,loading }: bottonProps):JSX.Element => {
  return (
    <div
      onClick={onClick}
      className="text-center cursor-pointer text-sm px-3 text-white py-2 bg-orange rounded-md hover:bg-[#8c2510] w-full"
    >

        {loading ? (
              <div className="justify-center  flex items-center">
                <Loader />
              </div>
            ) : (

              <p>{text}</p>
            )}
      
    </div>
  );
};

export default Button;

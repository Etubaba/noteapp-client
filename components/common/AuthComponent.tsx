import React, { useState } from "react";
import { authProps } from "../../interface";
import Button from "./Button";
   
const AuthComponent = ({signup}:authProps) => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const  text:string=signup!==undefined? 'Login' : 'Signup';
  return (
    <div className="bg-white shadow-lg animate__fadeIn animate__animated rounded-md w-full md:w-[500px] p-7">
      <p className="text-center text-lg text-[#1e202a] font-semibold">
        Create An Account
      </p>
      <p className="text-center text-sm text-[#7c7f8a] mb-5">
        Provide your credentials
      </p>

      <div className="grid w-full mb-4 grid-col-2 gap-4  ">
        <div className="md:col-span-1 col-span-2">
          <p className="text-xs text-textColor/70 mb-1.5">Full Name</p>
          <input
            value={fullName}
            type={"text"}
            onChange={(e: React.FormEvent<HTMLInputElement>) =>
              setFullName(e.currentTarget.value)
            }
            className="border p-2 form-control rounded-md focus:border-orange focus:outline-none focus:ring-1 focus:ring-orange focus:ring-opacity-5"
            // placeholder={"First Name"}
          />
        </div>
        <div className="md:col-span-1  col-span-2">
          <p className="text-xs text-textColor/70 mb-1.5">Email</p>
          <input
            value={email}
            type={"text"}
            onChange={(e: React.FormEvent<HTMLInputElement>) =>
              setEmail(e.currentTarget.value)
            }
            className="border  p-2 form-control rounded-md focus:border-orange focus:outline-none focus:ring-1 focus:ring-orange focus:ring-opacity-5"
            // placeholder={"First Name"}
          />
        </div>
        <div className="md:col-span-1 col-span-2">
          <p className="text-xs text-textColor/70 mb-1.5">Password</p>
          <input
            value={password}
            type={"text"}
            onChange={(e: React.FormEvent<HTMLInputElement>) =>
              setPassword(e.currentTarget.value)
            }
            className="border  p-2 form-control rounded-md focus:border-orange focus:outline-none focus:ring-1 focus:ring-orange focus:ring-opacity-5"
            // placeholder={"First Name"}
          />
        </div>
      </div>


      <Button onClick={()=>console.log()}  text={text}/>
    </div>
  );
};

export default AuthComponent;

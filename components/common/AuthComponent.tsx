import axios from "axios";
import React, { useState } from "react";
import { BASE_URL } from "../../api/url";
import { authProps } from "../../interface";
import Button from "./Button";
import {useDispatch} from 'react-redux'
import { AppDispatch } from "../../features/store";
import { handleLogin, handleUserData } from "../../features/noteSlice";
import Router, { useRouter } from "next/router";
import {toast} from 'react-toastify'
   
const AuthComponent = ({signup}:authProps) => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const  text:string=signup===undefined? 'Login' : 'Signup';
  const dispatch: AppDispatch= useDispatch()
  const router = useRouter()


  const handleRegister=async()=>{

    setLoading(true)
     if(email==='' || password==='' || fullName===''){
      setLoading(false)
      return toast.error('Please,All fields are required',{
        position:'bottom-left'
        })}
   try{ await axios.post(`${BASE_URL}user/create`,{full_name:fullName,email,password})
    .then(res=>{
      if(res.data.status){
        setLoading(false)
        toast.success('Registration Successful',{
        position:'bottom-left'
        })
        router.push('/login')
       
      }
    })}catch(err:any){
      setLoading(false)
        console.log(err.message)
          if(err.response){
        toast.error(err.response.data.message,{
        position:'bottom-left'
        })
      }
    }
  }


  const handleSignin=async()=>{
    setLoading(true);
    if(email==='' || password===''){
      setLoading(false);
      return toast.error('Please,All fields are required',{
        position:'bottom-left'
        })}


     try{ 
        await axios.post(`${BASE_URL}auth`,{email,password})
        // await axios.post('/api/login',{email,password})
    .then(res=>{
        setLoading(false)
      // console.log(res.data.user);
        if(res.data.status){
       dispatch(handleLogin(true))
       dispatch(handleUserData(res.data?.user))

        toast.success('Login Successful',{
        position:'bottom-left'
        
        })
        router.push('/user')
        }
    })}catch(err:any){
      setLoading(false)
      if(err.response){
        toast.error(err.response.data.message,{
        position:'bottom-left'
        })
      }
        console.log(err.message)
    }
  }


  return (
    <div className="bg-white shadow-lg animate__fadeIn animate__animated rounded-md w-full md:w-[500px] p-7">
      <p className="text-center text-lg text-[#1e202a] font-semibold">
      { signup ?  'Create An Account':'Login to your account'}
      </p>
      <p className="text-center text-sm text-[#7c7f8a] mb-5">
        Provide your credentials
      </p>

      <div className=" grid gap-4 grid-cols-1 w-full mb-4   ">
       {signup && <div className="">
          <p className="text-xs text-textColor/70 mb-1.5">Full Name</p>
          <input
            value={fullName}
            type={"text"}
            onChange={(e: React.FormEvent<HTMLInputElement>) =>
              setFullName(e.currentTarget.value)
            }
            className="border w-full p-2 form-control rounded-md focus:border-orange focus:outline-none focus:ring-1 focus:ring-orange focus:ring-opacity-5"
            // placeholder={"First Name"}
          />
        </div>}
        <div className="">
          <p className="text-xs text-textColor/70 mb-1.5">Email</p>
          <input
            value={email}
            type={"text"}
            onChange={(e: React.FormEvent<HTMLInputElement>) =>
              setEmail(e.currentTarget.value)
            }
            className="border w-full p-2 form-control rounded-md focus:border-orange focus:outline-none focus:ring-1 focus:ring-orange focus:ring-opacity-5"
            // placeholder={"First Name"}
          />
        </div>
        <div className="">
          <p className="text-xs text-textColor/70 mb-1.5">Password</p>
          <input
            value={password}
            type={"text"}
            onChange={(e: React.FormEvent<HTMLInputElement>) =>
              setPassword(e.currentTarget.value)
            }
            className="border w-full p-2 form-control rounded-md focus:border-orange focus:outline-none focus:ring-1 focus:ring-orange focus:ring-opacity-5"
            // placeholder={"First Name"}
          />
        </div>
      </div>


      <Button loading={loading} onClick={()=>{signup?handleRegister():handleSignin()}}  text={text}/>
    </div>
  );
};

export default AuthComponent;

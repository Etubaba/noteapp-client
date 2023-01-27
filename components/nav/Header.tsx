import React from 'react'
import {BsPerson} from 'react-icons/bs'
import {AiOutlineLogin} from 'react-icons/ai'
import { NextRouter, useRouter } from 'next/router'

const Header = () => {
   const router:NextRouter=useRouter()
  return (
    <div className=" px-8 py-3 z-50 hidden font-sans md:flex shadow-sm bg-white sticky top-0 justify-between items-cente">
         <span className='flex'>
            <h2 className='text-primary font-semibold'>Lamus</h2>
            <h2 className='text-orange font-semibold'>Note</h2>
         </span>



         <div className='flex flex-row items-center space-x-2'>
               <button onClick={()=>router.push('/signup')} className='flex hover:bg-slate-100 flex-row items-center bg-white border border-gray-400 px-2 py-1 space-x-1 text-sm rounded-md'>
                  <BsPerson />
               
                  <span>Sign Up</span>
            
               </button>
               <button onClick={()=>router.push('/login')} className='flex hover:bg-[#a12911] flex-row items-center bg-orange text-white px-2 py-1 space-x-1 text-sm rounded-md'>
                  <AiOutlineLogin />
                 
                  <span>Login</span>
                
               </button>
            </div>
    </div>
  )
}

export default Header
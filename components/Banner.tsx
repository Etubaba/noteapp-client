import Image from 'next/image';
import React from 'react';
import BannerImage from '../assets/bannergirlnew.png';
import { MdWorkOutline, MdGroups } from 'react-icons/md';
import { BiSearch } from 'react-icons/bi';
import { BsCheckCircle } from 'react-icons/bs';

type Props = {};

const Banner = (props: Props) => {
   return (
      <div className='bg-primary p-7 h-[450px]'>
         <div className='md:max-w-[70%] mx-auto flex flex-row h-full items-center'>
            <div className='text-white md:w-[60%] pt-5'>
               <h2 className='capitalize font-bold text-2xl md:text-4xl pb-2'>
                  Notes & To-dos{' '}
               </h2>
               <h2 className='capitalize font-bold text-2xl md:text-4xl pb-2'>
                  Save Notes With Ease
               </h2>
               <p className='text-sm font-thin md:w-[80%] pb-5'>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
               </p>
               <div className='flex items-center space-x-1 md:space-x-3 pb-6'>
                  <button className='flex px-2 py-2.5 items-center space-x-1 bg-orange  md:px-3 md:py-2 rounded-sm'>
                     <MdWorkOutline className='text-white' />
                     <span className='font-medium text-sm md:text-base'>Signup</span>
                  </button>
                  <div className='md:w-[70%] relative'>
                     <input
                        type='text'
                        placeholder='Search for freelancers'
                        className='pl-3 pr-9 py-2 rounded-sm w-full placeholder:text-gray-200 placeholder:text-xs outline-none bg-white text-gray-800'
                     />
                     <button className='absolute top-2 bg-orange p-1 rounded-sm right-2'>
                        <BiSearch />
                     </button>
                  </div>
               </div>
               <div className='flex justify-center md:just space-x-2 md:space-x-4'>
                  <div className='flex flex-col px-2 md:px-6 border border-purple-600 justify-center items-center py-1 md:py-2 rounded-md'>
                     <div className='flex items-center space-x-2'>
                        <MdWorkOutline className='text-white w-5 h-5' />
                        <span className='font-medium text-sm md:text-xl'>21.9k</span>
                     </div>
                     <p className=' text-xs md:text-sm'>Notes</p>
                  </div>
                  <div className='flex flex-col px-2 md:px-6 border border-purple-600 justify-center items-center py-1 md:py-2 rounded-md'>
                     <div className='flex items-center space-x-2'>
                        <MdGroups className='text-red-500 w-6 h-6' />
                        <span className='font-medium text-sm md:text-xl'>21.9k</span>
                     </div>
                     <p className='text-sm'>Users</p>
                  </div>
                  <div className='flex flex-col px-2 md:px-6 border border-purple-600 justify-center items-center py-1 md:py-2 rounded-md'>
                     <div className='flex items-center space-x-2'>
                        <BsCheckCircle className='text-green-600 w-6 h-6' />
                        <span className='font-medium text-sm md:text-xl'>21.9k</span>
                     </div>
                     <p className='text-sm'>Partners</p>
                  </div>
               </div>
            </div>
            <div className='w-[40%] hidden md:inline-block pt-3 '>
               <div className='relative w-[430px] h-[440px]'>
                  <Image src={BannerImage} layout='fill' alt='' />
               </div>
            </div>
         </div>
      </div>
   );
};

export default Banner;

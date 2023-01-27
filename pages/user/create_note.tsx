import { useRouter } from 'next/router'
import React, { useState } from 'react'
import Button from '../../components/common/Button'
import Layout from '../../components/userlayout/Layout'
import MyStatefulEditor from "../../components/common/Editor";

const Create_note = (): JSX.Element => {
    const [title, setTitle] = useState('')
    const router = useRouter()
    return (
        <div className='md:p-10 p-3'>

            <div className='flex mb-8  justify-between items-center'>
                <p className="md:text-lg text-sm tracking-wide font-semibold">
                    Create Notes
                </p>
                <div>
                    <Button onClick={() => router.push('/user')} text='Back' />
                </div>
            </div>


            <div className='bg-white flex-col justify-center items-center mb-8 p-6 md:px-10 border'>
                <div className="">
                    <p className="text-lg font-semibold text-textColor/70 mb-1.5">Note Title</p>
                    <input
                        value={title}
                        type={"text"}
                        onChange={(e: React.FormEvent<HTMLInputElement>) =>
                            setTitle(e.currentTarget.value)
                        }
                        className="border w-full p-2 form-control rounded-md focus:border-orange focus:outline-none focus:ring-1 focus:ring-orange focus:ring-opacity-5"

                    />
                </div>
<div className=' w-full mt-5 mb-40 md:mb-20'> <p className="text-lg font-semibold text-textColor/70 mb-1.5">Note Content</p>
                <div className="flex justify-center space-x-10 w-full mt-5 mb-40 md:mb-20">
                  
                    <MyStatefulEditor />
                </div></div>



            </div>




        </div>
    )
}

Create_note.getLayout = Layout
export default Create_note
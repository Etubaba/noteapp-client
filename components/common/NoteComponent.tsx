import React from 'react'
import {FiEdit} from 'react-icons/fi'
import {RiDeleteBin6Line} from 'react-icons/ri'



type NoteProps={
    title:string,
    content:string
    createdAt:string
}
const NoteComponent = ({title,content,createdAt}:NoteProps) => {

   
  return (
     <div
    
      className="bg-[#F6F7FF] hover:border-scudGreen border p-4 rounded-lg"
    >
      {" "}
      <div className="flex mb-5 items-center justify-between">
        <div className="flex">
          {/* <img alt="" className="w-10 rounded-full h-10" src={"/photo.png"} /> */}
          <p className="font-bold">{title}</p>
        </div>
        <p className="text-xs text-textColor/50">{createdAt}</p>
      </div>
      <p className="text-textColor/50 text-sm">{content}</p>



       <span className="flex space-x-3 justify-end mt-4">
                <button
                  // onClick={() => copyToClipboard("scud.io/ref:jamesanderson")}
                  className="bg-[#020648] border flex space-x-2 hover:to-blue-500   rounded-md p-1"
                >
                  <FiEdit className="text-white" />
                </button>
                <button
                //   onClick={() => {
                //     setDeleteModal(true);
                //   }}
                  className="bg-red-600 border flex space-x-2 hover:to-red-300   rounded-md p-1"
                >
                  <RiDeleteBin6Line className="text-white" />
                </button>
              </span>
    </div>
  )
}

export default NoteComponent
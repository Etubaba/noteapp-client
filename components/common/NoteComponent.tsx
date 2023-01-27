import axios from "axios";
import React, { useState } from "react";
import { FiEdit } from "react-icons/fi";
import { MdErrorOutline } from "react-icons/md";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { RiDeleteBin6Line } from "react-icons/ri";
import { RootState } from "../../features/store";
import { NoteProps } from "../../interface";
import Button from "./Button";
import Modal from "./Modal";
import {useDispatch} from 'react-redux'
import { handleRefresh } from "../../features/noteSlice";

const NoteComponent = ({id, title, content, createdAt }: NoteProps) => {
  const [deleteModal, setDeleteModal] = useState(false);
  const [successModal, setSuccessModal] = useState(false);
  const dispatch=useDispatch()


  const date = new Date(createdAt);
  const time = date.toDateString();
  const year = date.getFullYear() + "";

  const formatedTime = time.replace(year, "");



  const handleDelete = async()=>{
    try{
      axios.post('/api/note_delete',{id}).then(res=>{
        if(res.data.data.status){
          dispatch(handleRefresh())
          setSuccessModal(true)
            setDeleteModal(false);
        }
      })
    }catch(err:any){
      console.log(err.message);
    }

  }
  return (
    <div className="bg-[#F6F7FF] h-[10hv] hover:border-scudGreen border p-4 rounded-lg">
      {" "}
      <div className="flex mb-5 items-center justify-between">
        <div className="flex">
          {/* <img alt="" className="w-10 rounded-full h-10" src={"/photo.png"} /> */}
          <p className="font-bold">{title.substring(0, 16) + "..."}</p>
        </div>
        <p className="text-xs text-textColor/50">{formatedTime}</p>
      </div>
      <p className="text-textColor/50 text-sm">
        {content?.substring(3, 70) + "..."}
      </p>
      <span className="flex space-x-3 justify-end mt-4">
        <button
          // onClick={() => copyToClipboard("scud.io/ref:jamesanderson")}
          className="bg-[#020648] border flex space-x-2 hover:to-blue-500   rounded-md p-1"
        >
          <FiEdit className="text-white" />
        </button>
        <button
          onClick={() => {
            setDeleteModal(true);
           
          }}
          className="bg-red-600 hover:bg-red-800 border flex space-x-2 hover:to-red-300   rounded-md p-1"
        >
          <RiDeleteBin6Line className="text-white" />
        </button>
      </span>
      <Modal onClose={() => setDeleteModal(false)} open={deleteModal}>
        <div className="w-[18rem] md:w-[24rem]  h-auto">
          <div className="flex flex-col space-y-3 justify-center items-center">
            <MdErrorOutline className="text-red-600 text-5xl" />
            <p className="text-lg font-semibold mt-2">Delete Note</p>
            <p className="text-sm text-textColor mt-2">
              You are about to delete your note.
            </p>
          </div>
          <div className="flex justify-between mt-4">
            <button
              onClick={() => setDeleteModal(false)}
              className="bg-white  border hover:bg-slate-50 px-4 py-1 rounded-md text-sm font-semibold text-textColor mr-2"
            >
              No,Cancel
            </button>
            <div>
              <Button
              onClick={handleDelete}
              
                 
              
              text={"Yes, Delete"}
            /></div>
            
          </div>
        </div>
      </Modal>

       <Modal onClose={() => setSuccessModal(false)} open={successModal}>
        <div className=" w-[20rem] md:w-[24rem]  h-auto">
          <div className="flex flex-col space-y-3 justify-center items-center">
            <AiOutlineCheckCircle className="text-green-600 text-5xl" />
            <p className="text-lg font-semibold mt-2">
              FAQ deleted successfully.
            </p>
            <p className="text-sm text-center text-textColor mt-2">
              Faq has been deleted successfully.
            </p>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default NoteComponent;

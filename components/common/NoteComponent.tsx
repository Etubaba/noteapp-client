import axios from "axios";
import React, { useState } from "react";
import { FiEdit } from "react-icons/fi";
import { MdErrorOutline } from "react-icons/md";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { BsShare ,BsCheckCircle} from "react-icons/bs";
import { RiDeleteBin6Line } from "react-icons/ri";
import { RootState } from "../../features/store";
import { EventProps, NoteProps } from "../../interface";
import Button from "./Button";
import Modal from "./Modal";
import { useDispatch } from "react-redux";
import { handleRefresh } from "../../features/noteSlice";
import { useRouter } from "next/router";

const NoteComponent = ({ id,slug, title, content, createdAt }: NoteProps) => {
  const [deleteModal, setDeleteModal] = useState(false);
  const [successModal, setSuccessModal] = useState(false);
  const [shareModal,setShareModal]=useState(false)

  const dispatch = useDispatch();
const router=useRouter()

  const date = new Date(createdAt);
  const time = date.toDateString();
  const year = date.getFullYear() + "";

  const formatedTime = time.replace(year, "");

  const handleDelete = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.stopPropagation();
    try {
      axios.post("/api/note_delete", { id }).then((res) => {
        if (res.data.data.status) {
          dispatch(handleRefresh());
          setSuccessModal(true);
          setDeleteModal(false);
        }
      });
    } catch (err: any) {
      console.log(err.message);
    }
  };

   const origin =
        typeof window !== 'undefined' && window.location.origin
            ? window.location.origin
            : '';
         
          

   //copy to clipboard
  const copyToClipboard = (e:React.MouseEvent) => {
    e.stopPropagation()
    const str=origin+`/note/link/${slug}`
    window.navigator.clipboard.writeText(str);
    setShareModal(true);
  };
  return (
    <div onClick={()=>router.push(`/note/${slug}`)} className="bg-[#F6F7FF] h-[10hv] hover:border-scudGreen border p-4 rounded-lg">
      {" "}
      <div className="flex mb-3 items-center justify-between">
        <div className="flex">
          {/* <img alt="" className="w-10 rounded-full h-10" src={"/photo.png"} /> */}
          <p className="font-bold">{title.substring(0, 16) + "..."}</p>
        </div>
        <p className="text-xs text-textColor/50">{formatedTime}</p>
      </div>
      <p className="text-textColor/50 min-h-[45px] text-sm">
        {content?.substring(3, 42) + "..."}
      </p>
      <div className="flex justify-between items-center">
        <div onClick={(e:React.MouseEvent)=>copyToClipboard(e)} className="mt-4 rounded-md hover:bg-primary/20 flex justify-center items-center p-1">
          <BsShare className="text-orange" />
        </div>
        <span className="flex space-x-3 justify-end mt-4">
          <button
            // onClick={() => copyToClipboard("scud.io/ref:jamesanderson")}
            className="bg-[#020648] border flex space-x-2 hover:to-blue-500   rounded-md p-1"
          >
            <FiEdit className="text-white" />
          </button>
          <button
            onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
              e.stopPropagation();
              setDeleteModal(true);
            }}
            className="bg-red-600 hover:bg-red-800 border flex space-x-2 hover:to-red-300   rounded-md p-1"
          >
            <RiDeleteBin6Line className="text-white" />
          </button>
        </span>
      </div>
      <Modal
        onClose={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
          e.stopPropagation();
          setDeleteModal(false);
        }}
        open={deleteModal}
      >
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
              onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
                e.stopPropagation();
                setDeleteModal(false);
              }}
              className="bg-white  border hover:bg-slate-50 px-4 py-1 rounded-md text-sm font-semibold text-textColor mr-2"
            >
              No,Cancel
            </button>
            <div>
              <Button
                onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) =>
                  handleDelete(e)
                }
                text={"Yes, Delete"}
              />
            </div>
          </div>
        </div>
      </Modal>
      <Modal
        onClose={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
          e.stopPropagation();
          setSuccessModal(false);
        }}
        open={successModal}
      >
        <div className=" w-[20rem] md:w-[24rem]  h-auto">
          <div className="flex flex-col space-y-3 justify-center items-center">
            <AiOutlineCheckCircle className="text-green-600 text-5xl" />
            <p className="text-lg font-semibold mt-2">
              Note deleted successfully.
            </p>
            <p className="text-sm text-center text-textColor mt-2">
              Note has been deleted successfully.
            </p>
          </div>
        </div>
      </Modal>

       <Modal onClose={(e:React.MouseEvent) => {e.stopPropagation();setShareModal(false)}} open={shareModal}>
        <div className="justify-center mt-1 space-x-3 mr-12 flex items-center">
          <BsCheckCircle className="text-green-600" />
          <p>Copied to clipboard</p>
        </div>
      </Modal>
    </div>
  );
};

export default NoteComponent;

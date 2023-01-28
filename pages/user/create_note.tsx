import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import Button from "../../components/common/Button";
import Layout from "../../components/userlayout/Layout";
import MyStatefulEditor from "../../components/common/Editor";
import { useSelector, TypedUseSelectorHook ,useDispatch} from "react-redux";
import { RootState } from "../../features/store";
import axios from "axios";
import { handleNoteContent } from "../../features/noteSlice";
import { BASE_URL } from "../../api/url";
import { toast } from "react-toastify";

const Create_note = (): JSX.Element => {
  const [title, setTitle] = useState("");
  const router = useRouter();
  const isLoggedIn = useSelector(
    (state: RootState) => state.note.isLoggedIn
  );
  const user = useSelector(
    (state: RootState) => state.note.userData
  );
  const noteContent = useSelector(
    (state: RootState) => state.note.noteContent
  );
  const dispatch=useDispatch()

    useEffect(() => {
      if (!isLoggedIn) router.push("/login", undefined, { shallow: true });
    }, []);

    if (!isLoggedIn) return <></>;

 

  const sendNote = async () => {
     if(title==='' || noteContent==='')return toast.error('Please,All fields are required',{
        position:'bottom-left'
        })
    try {
      await axios
        .post(`${BASE_URL}note/create`, { title, content: noteContent, user_id:user?.id})
        .then((res) => {
           if(res.data.status){
            setTitle('')
            dispatch(handleNoteContent(''))
        toast.success('Note saved successfully',{
        position:'bottom-left'
        })
        
           }
        });
    } catch (err) {
        console.log(err);
    }
  };

  return (
    <div className=" p-3">
      <div className="flex mb-8  justify-between items-center">
        <p className="md:text-lg text-sm tracking-wide font-semibold">
          Create Notes
        </p>
        <div>
          <Button onClick={() => router.push("/user")} text="Back" />
        </div>
      </div>

      <div className="bg-white flex-col justify-center items-center mb-8 p-6 md:px-10 border">
        <div className="">
          <p className="text-lg font-semibold text-textColor/70 mb-1.5">
            Note Title
          </p>
          <input
            value={title}
            type={"text"}
            onChange={(e: React.FormEvent<HTMLInputElement>) =>
              setTitle(e.currentTarget.value)
            }
            className="border w-full p-2 form-control rounded-md focus:border-orange focus:outline-none focus:ring-1 focus:ring-orange focus:ring-opacity-5"
          />
        </div>
        <div className=" w-full mt-5 mb-40 md:mb-20">
          {" "}
          <p className="text-lg font-semibold text-textColor/70 mb-1.5">
            Note Content
          </p>
          <div className="flex justify-center space-x-10 w-full mt-5 mb-40 md:mb-20">
            <MyStatefulEditor />
          </div>
        </div>

        <div className=" flex items-center justify-end">
            <div className="md:max-w-[600px] ">
                <Button onClick={sendNote} text="Save" />
                
            </div>
          
        </div>
      </div>
    </div>
  );
};

Create_note.getLayout = Layout;
export default Create_note;

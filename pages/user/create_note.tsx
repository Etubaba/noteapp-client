import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import Button from "../../components/common/Button";
import Layout from "../../components/userlayout/Layout";
import MyStatefulEditor from "../../components/common/Editor";
import { useSelector, TypedUseSelectorHook ,useDispatch} from "react-redux";
import { RootState } from "../../features/store";
import axios from "axios";
import { handleNoteContent } from "../../features/noteSlice";

const Create_note = (): JSX.Element => {
  const [title, setTitle] = useState("");
  const router = useRouter();
  const isLoggedIn: TypedUseSelectorHook<RootState> = useSelector(
    (state: any) => state.note.isLoggedIn
  );
  const user_id = useSelector(
    (state: any) => state.note.userData
  );
  const noteContent: TypedUseSelectorHook<RootState> = useSelector(
    (state: any) => state.note.noteContent
  );
  const dispatch=useDispatch()

    useEffect(() => {
      if (!isLoggedIn) router.push("/login", undefined, { shallow: true });
    }, []);

    if (!isLoggedIn) return <></>;

 

  const sendNote = async () => {
    try {
      await axios
        .post("/api/create_note", { title, content: noteContent, user_id:user_id?.id})
        .then((res) => {
           if(res.data.data.status){
            setTitle('')
            dispatch(handleNoteContent(''))
           }
        });
    } catch (err) {
        console.log(err);
    }
  };

  return (
    <div className="md:p-10 p-3">
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
          <Button onClick={sendNote} text="Save" />
        </div>
      </div>
    </div>
  );
};

Create_note.getLayout = Layout;
export default Create_note;

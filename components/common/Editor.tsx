import dynamic from "next/dynamic";
import {useDispatch, useSelector} from 'react-redux'
import { handleNoteContent } from "../../features/noteSlice";
import { AppDispatch, RootState } from "../../features/store";

const QuillNoSSRWrapper = dynamic(import("react-quill"), {
  ssr: false,
  loading: () => <p>Loading ...</p>,
});

const modules = {
  toolbar: [
    [{ header: "1" }, { header: "2" }, { font: [] }],
    [{ size: [] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [
      { list: "ordered" },
      { list: "bullet" },
      { indent: "-1" },
      { indent: "+1" },
    ],
    ["link", "image", "video"],
    ["clean"],
  ],
  clipboard: {
    // toggle to add extra line breaks when pasting HTML:
    matchVisual: false,
  },
};
/*
 * Quill editor formats
 * See https://quilljs.com/docs/formats/
 */
const formats = [
  "header",
  "font",
  "size",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list",
  "bullet",
  "indent",
  "link",
  "image",
  "video",
  "code-block",
];

export default function Home() {

const noteDetails=useSelector(
    (state:RootState)=>state.note.noteDetails)
    const dispatch:AppDispatch=useDispatch()
  return (
    <QuillNoSSRWrapper
      modules={modules}
      style={{ width: "100%", }}
      placeholder="Write here..."
      formats={formats}
      theme="snow"
      value={noteDetails.content}
      onChange={(e) => dispatch(handleNoteContent(e))}
    />
  );
}
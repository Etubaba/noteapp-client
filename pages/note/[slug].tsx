import { GetServerSideProps } from "next";
import React from "react";
import { BASE_URL } from "../../api/url";
import { INote } from "../../interface";

const Note = ({ details }: INote) => {
  const { title, content, createdAt, id } = details.data;

  const date = new Date(createdAt);
  const time = date.toDateString();

  return (
    <div className="px-10 h-screen">
      <p className="md:text-2xl mt-4 text-[#55575F] mb-8 text-sm tracking-wide font-semibold">
        Note Details
      </p>

      <div className="bg-white mb-8 p-6 border  rounded-lg  ">
        <p className="font-semibold mb-1 text-[#55575F] text-3xl"> {title}</p>

        <p className="text-xs text-[#55575F]/30">Posted: {time}</p>

        <div className="text-[#55575F] mt-4">
          <p
              className=""
              dangerouslySetInnerHTML={{ __html: content }}
            />
        </div>
      </div>
    </div>
  );
};

export default Note;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { slug } = context.query;

  const res = await fetch(`${BASE_URL}note/link/${slug}`);
  const details = await res.json();

  return {
    props: {
      details,
    },
  };
};

// }

import React from "react";
// import ProfileHeader from "./ProfileHeader";
import SideNav from "./SideNav";
import "animate.css";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/router";

import { useEffect } from "react";
import { RootState } from "../../features/store";
import { layoutProps } from "../../interface";

function Layout({ children }:layoutProps) {
  const divResize = useSelector((state:RootState) => state.note.resizeDiv);
  // const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  // const router = useRouter();
  typeof window !== "undefined"
    ? (document.body.style.overflow = "hidden")
    : null;
  // useEffect(() => {
  //   if (!isLoggedIn || isLoggedIn === "false")
  //     router.push("/signin/rider-signin", undefined, { shallow: true });
  // }, []);

  // if (!isLoggedIn || isLoggedIn === "false") return <></>;
  return (
    <div className={"w-full overflow-hidden"}>
     
      <div className="flex flex-col justify-between lg:flex-row md:space-y-3 lg:space-y-0 ">
        {divResize && (
          <span
            id="rider"
            className="w-full animate__animated hidden md:block animate__fadeInLeft shadow-md  fixed  border-r lg:h-full  lg:w-1/6 pb-24 bg-white"
          >
            <SideNav /> 
          </span>
         )}
        <section
          className={
            divResize
              ? "w-full md:w-5/6 p-5   2xl:ml-[16rem] shadow-md md:ml-[13.3rem] md:fixed  bg-[#FDFDFF] h-full pb-24 overflow-y-scroll"
              : "w-full   shadow-md p-5  fixed  bg-[#FDFDFF] h-full pb-24 overflow-y-scroll"
          }
        >
          {children}
        </section>
      </div>
    </div>
  );
}

export default Layout;


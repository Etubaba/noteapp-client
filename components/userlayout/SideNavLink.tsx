import { useRouter } from "next/router";
// import classNames from "classnames";
import { useDispatch } from "react-redux";
// import {
//   logout,
//   handleisAdminLoggedIn,
//   handleAdminDetails,
// } from "../../features/chplsSlice";
// import { useSnackbar } from "notistack";
//import { useState } from "react";

const SideNavLink = ({
  iconName,
  text,
  href,
  currentIndex,
  setIndex,
  setMenu,
  index,
  key,
}:any) => {
  // const { enqueueSnackbar } = useSnackbar();
  const router = useRouter();
  const dispatch = useDispatch();

  const handleClick = () => {
    // evt.preventDefault();
    // evt.stopPropagation();

    // setMenu((prevState) => !prevState);
    setIndex(index);

    if (href === "/logout") {
      
      if (typeof window !== undefined) {
        localStorage.removeItem("ScudDriverDetails");
        localStorage.removeItem("isScudDriver");
    
        router.push("/signin");
      }
    } else {
      router.push(href);
    }
  };

  return (
    <div
      key={index}
      className={
        router.pathname === href
          ? "hover:cursor-pointer rounded-md p-2  md:pl-2 md:my-2 md:block text-scudGreen  hover:text-blue-600 font-semibold"
          : "hover:cursor-pointer rounded-md p-2  md:pl-2 md:my-2 md:block  text-gray-700 hover:text-scudGreen font-light"
      }
      onClick={handleClick}
    >
      <div className="flex space-x-2 items-center">
        <div>{iconName}</div>
        <div className="capitalize">{text}</div>
      </div>
    </div>
  );
};

export default SideNavLink;

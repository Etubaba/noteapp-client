import { BiLogOut } from "react-icons/bi";
import { GiNotebook } from "react-icons/gi";
import { MdOutlineStickyNote2 } from "react-icons/md";
import SideNavLink from "./SideNavLink";
import { useState } from "react";
import { BsPersonX } from "react-icons/bs";
import axios from "axios";
import { BASE_URL } from "../../api/url";
import { useSelector } from "react-redux";
import { RootState } from "../../features/store";
import Router, { useRouter } from "next/router";
import { toast } from "react-toastify";
// import classNames from "classnames";
//import { useRouter } from "next/router";

const SideNav = () => {
  const router = useRouter();
  const [currentIndex, setIndex] = useState(0);
  const [showMenu, setMenu] = useState(false);
  const handleClick = () => {
    setMenu((prevState) => !prevState);
  };
  const sideNavList = [
    {
      id: 1,
      iconName: <GiNotebook />,
      text: "My Notes",
      href: "/user",
    },
    {
      id: 2,
      iconName: <MdOutlineStickyNote2 />,
      text: "Create Notes",
      href: "/user/create_note",
    },
  ];

  const user = useSelector((state: RootState) => state.note.userData);

  const deleteAcct = async () => {
    try {
      await axios.delete(`${BASE_URL}user/delete/${user?.id}`).then((res) => {
        if (res.data.status) {
          router.push("/");
          toast.success("Account deleted successfully", {
            position: "bottom-left",
          });
        }
      });
    } catch (err: any) {
      if (err.response) {
        toast.error(err.response.data.message, {
          position: "bottom-left",
        });
      }
    }
  };
  return (
    <div className="py-4 pl-4  pr-4 relative md:static">
      <div
        className="rounded-md md:hidden p-2 md:my-5 bg-chplsBlue text-white hover:cursor-default"
        onClick={handleClick}
      >
        <div className="flex items-center text-md lg:text-lg">
          <div className="flex space-x-2 items-center">
            <div>{sideNavList[currentIndex]?.iconName}</div>
            <div className="capitalize">{sideNavList[currentIndex]?.text}</div>
          </div>
          {/* <div
        
            className={classNames("ml-auto rotate-90", { hidden: showMenu })}
          >
            <MdArrowForwardIos />
          </div> */}
        </div>
      </div>
      <div className="h-screen">
        {sideNavList.map((sideNav, index) => (
          <SideNavLink
            iconName={sideNav.iconName}
            text={sideNav.text}
            href={`${sideNav.href}`}
            setIndex={setIndex}
            currentIndex={currentIndex}
            setMenu={setMenu}
            index={index}
            key={sideNav.id}
          />
        ))}

        {/* <div className="border-t w-[95%] cursor-pointer absolute bottom-40 md:mt-28 pt-4 flex space-x-3 ">
          <BiLogOut className="text-red-600 hover:text-red-700 text-lg mt-1 " />
          <p className="text-red-600 hover:text-red-700">Logout</p>
        </div> */}
        <div className="w-[95%] border-t md:mt-28 pt-4 bottom-40 absolute">
          <div onClick={()=>{router.push('/login');localStorage.clear()}} className="  cursor-pointer mb-3   flex space-x-3 ">
            <BiLogOut className="text-red-600 hover:text-red-700 text-lg mt-1 " />
            <p className="text-red-600 hover:text-red-700">Logout</p>
          </div>
          <div onClick={deleteAcct} className="  cursor-pointer    flex space-x-3 ">
            <BsPersonX className="text-red-600 hover:text-red-700 text-lg mt-1 " />
            <p className="text-red-600 hover:text-red-700">Delete Account</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideNav;

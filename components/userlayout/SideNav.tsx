import { FaFileInvoice, FaUserCircle } from "react-icons/fa";
import { BiSupport } from "react-icons/bi";
import {
  MdArrowForwardIos,
  MdPayment,
  MdOutlineAllInclusive,
  MdOutlineDashboard,
  MdOutlineAccountBalanceWallet,
} from "react-icons/md";
import { RiLogoutCircleRFill, RiSecurePaymentFill } from "react-icons/ri";
import { AiOutlineUsergroupAdd, AiOutlineHome } from "react-icons/ai";
import { HiOutlineSpeakerphone } from "react-icons/hi";
import { BiLogOut } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { TbCar, TbWallet } from "react-icons/tb";
import SideNavLink from "./SideNavLink";
import { useState } from "react";
import classNames from "classnames";
//import { useRouter } from "next/router";

const SideNav = () => {
  //const router = useRouter();
  const [currentIndex, setIndex] = useState(0);
  const [showMenu, setMenu] = useState(false);
  const handleClick = () => {
    setMenu((prevState) => !prevState);
  };
  const sideNavList = [
    {
      id: 1,
      iconName: <AiOutlineHome />,
      text: "Home",
      href: "",
    },
    {
      id: 2,
      iconName: <CgProfile />,
      text: "Profile",
      href: "/profile",
    },

    {
      id: 3,
      iconName: <TbCar />,
      text: "My Trips",
      href: "/trips_history",
    },
    {
      id: 6,
      iconName: <HiOutlineSpeakerphone />,
      text: "Promotion",
      href: "/promotions",
    },

    {
      id: 7,
      iconName: <MdOutlineAccountBalanceWallet />,
      text: "Wallet",
      href: "/wallet",
    },

    {
      id: 10,
      iconName: <AiOutlineUsergroupAdd />,
      text: "Referrals",
      href: "/referral",
    },
    {
      id: 11,
      iconName: <BiSupport />,
      text: "Support",
      href: "/support",
    },
  ];

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
          <div
        
            className={classNames("ml-auto rotate-90", { hidden: showMenu })}
          >
            <MdArrowForwardIos />
          </div>
        </div>
      </div>
      <div className="h-screen">
        {sideNavList.map((sideNav, index) => (
          <SideNavLink
            iconName={sideNav.iconName}
            text={sideNav.text}
            href={`/rider_profile${sideNav.href}`}
            setIndex={setIndex}
            currentIndex={currentIndex}
            setMenu={setMenu}
            index={index}
            key={sideNav.id}
          />
        ))}

        <div className="border-t w-[95%] cursor-pointer absolute bottom-40 md:mt-28 pt-4 flex space-x-3 ">
          <BiLogOut className="text-red-600 hover:text-red-700 text-lg mt-1 " />
          <p className="text-red-600 hover:text-red-700">Logout</p>
        </div>
      </div>
    </div>
  );
};

export default SideNav;
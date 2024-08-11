import React from "react";
import { SiGmail } from "react-icons/si";
import { GoHomeFill } from "react-icons/go";
import { IoIosSend } from "react-icons/io";
import { IoMail } from "react-icons/io5";
import { RiUserSearchFill } from "react-icons/ri";
import { FaThList } from "react-icons/fa";
import { FaInbox } from "react-icons/fa";
import { RiBarChartFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Sidebar = () => {
  const theme = useSelector((store) => store.theme);
  const textColor = theme === "dark" ? "text-black" : "text-white";
  const bgColor = theme === "dark" ? "bg-gray-900" : "bg-[#FAFAFA]";
  const borderClr = theme === "dark" ? "border-gray-700" : "border-[#DEDEDE]";

  return (
    <div className={`${bgColor} flex flex-col min-h-screen w-15 p-3 border-r ${borderClr}`}>
      <div className={`${theme === "dark" ? "bg-white" : "bg-black"} py-1 px-0.5 rounded flex justify-center items-center text-xl mt-1 ${textColor}`}>
        <SiGmail />
      </div>
      <div className="text-2xl mt-24 mb-2">
      <div className="relative group">
  <Link to="/home">
    <GoHomeFill className="hover:bg-gray-700 hover:p-1 rounded text-gray-400" />
  </Link>
  <span className="absolute left-7 top-1/2 transform -translate-y-1/2 scale-0 group-hover:scale-100 origin-left bg-black text-white px-2 py-1 rounded-lg border border-gray-400 text-xs transition-all duration-200">
    Home
  </span>
</div>

        <div className="relative group">
          <RiUserSearchFill className="mt-12 hover:bg-gray-700 hover:p-1 rounded text-gray-400" />
          <span className="absolute left-7 top-1/2 transform -translate-y-1/2 scale-0 group-hover:scale-100 origin-left bg-black text-white px-2 py-1 rounded-lg border border-gray-400 text-xs transition-all duration-200">
    Search
  </span>
        </div>
        <div className="relative group">
          <IoMail className="mt-12 hover:bg-gray-700 hover:p-1 rounded text-gray-400" />
          <span className="absolute left-7 top-1/2 transform -translate-y-1/2 scale-0 group-hover:scale-100 origin-left bg-black text-white px-2 py-1 rounded-lg border border-gray-400 text-xs transition-all duration-200">
    Mail
  </span>
        </div>
        <div className="relative group">
          <IoIosSend className="mt-12 hover:bg-gray-700 hover:p-1 rounded text-gray-400" />
          <span className="absolute left-7 top-1/2 transform -translate-y-1/2 scale-0 group-hover:scale-100 origin-left bg-black text-white px-2 py-1 rounded-lg border border-gray-400 text-xs transition-all duration-200">
    Send
  </span>
        </div>
        <div className="relative group">
          <FaThList className="mt-12 hover:bg-gray-700 hover:p-1 rounded text-gray-400" />
          <span className="absolute left-7 top-1/2 transform -translate-y-1/2 scale-0 group-hover:scale-100 origin-left bg-black text-white px-2 py-1 rounded-lg border border-gray-400 text-xs transition-all duration-200">
    List
  </span>
        </div>
        <div className="relative group">
          <Link to="/allmail">
            <FaInbox className="mt-12 hover:bg-gray-700 hover:p-1 rounded text-gray-400" />
          </Link>
          <span className="absolute left-7 top-1/2 transform -translate-y-1/2 scale-0 group-hover:scale-100 origin-left bg-black text-white px-2 py-1 rounded-lg border border-gray-400 text-xs transition-all duration-200">
    Inbox
  </span>
        </div>
        <div className="relative group">
          <RiBarChartFill className="mt-12 hover:bg-gray-700 hover:p-1 rounded text-gray-400" />
          <span className="absolute left-7 top-1/2 transform -translate-y-1/2 scale-0 group-hover:scale-100 origin-left bg-black text-white px-2 py-1 rounded-lg border border-gray-400 text-xs transition-all duration-200">
    Stats
  </span>
        </div>
      </div>
      <div className="text-white text-xl bg-green-900 rounded-full flex justify-center items-center h-9 w-9 mt-36 font-sans">
        AS
      </div>
    </div>
  );
};

export default Sidebar;

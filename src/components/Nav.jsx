import { useState } from "react";
import { FaAlignJustify } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import logo from "../assets/images/logo.png";

export default function Nav() {
  const [dropDown, setDropDown] = useState(false);
  const handleDropDown = () => setDropDown(!dropDown);

  return (
    <>
      <div className={`flex justify-center ${dropDown ? "hidden" : ""}`}>
        <div className="flex w-[90vw] py-5 justify-between items-center">
          <h2 className="text-black font-bold text-3xl justify-center">
            <img src={logo} alt="" className="w-[4vw]" />{" "}
            <span className="text-logo1Color">CI</span>
            <span className="text-logo2Color">CC</span>
          </h2>
          <div className="flex items-center gap-7">
            <h2 className="font-semibold hidden text-xm text-black md:block">
              Home
            </h2>
            <h2 className="font-semibold hidden text-xm text-gray-400 md:block">
              Feature
            </h2>
            <h2 className="font-semibold hidden text-xm text-gray-400 md:block">
              How it works
            </h2>
            <h2 className="font-semibold hidden text-xm text-gray-400 md:block">
              Goal & Mission
            </h2>
            <h2 className="font-semibold hidden text-xm text-gray-400">
              About
            </h2>
            <h2 className="p-1 px-4 font-semibold text-xm bg-blue-500 rounded-md text-white">
              Contact
            </h2>
            <FaAlignJustify
              size={25}
              className="md:hidden"
              onClick={handleDropDown}
            />
          </div>
        </div>
      </div>
      <div
        className={`flex ${
          dropDown ? "" : "hidden"
        } flex-col items-center gap-3 py-8 bg-blue-400 text-white z-10 relative`}
      >
        <button className="absolute right-4 top-2 w-9" onClick={handleDropDown}>
          <IoClose size={30} />
        </button>
        <a href="/details/New" className="font-semibold text-sm px-3">
          Home
        </a>
        <a href="/details/Women" className="font-semibold text-sm px-3">
          Feature
        </a>
        <a href="/details/Men" className="font-semibold text-sm px-3">
          How it works
        </a>
        <a href="/details/Jewelry" className="font-semibold text-sm px-3">
          Goal & Mission
        </a>
        <a href="/details/Watches" className="font-semibold text-sm px-3">
          About
        </a>
      </div>
    </>
  );
}

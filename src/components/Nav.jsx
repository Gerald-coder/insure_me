import { useState } from "react";
import { FaAlignJustify } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import logo from "../assets/images/logo.png";

export default function Nav() {
  const [dropDown, setDropDown] = useState(false);
  const [activeLink, setActiveLink] = useState("home");
  const handleDropDown = () => setDropDown(!dropDown);
  const updateActiveLink = (e) => setActiveLink(e.target.id || activeLink);

  return (
    <div className="h-full" onClick={updateActiveLink}>
      <div className={`flex justify-center ${dropDown ? "hidden" : ""}`}>
        <div className="flex w-[90vw] justify-between items-center">
          <h2 className="text-black font-bold text-3xl justify-center">
            <img src={logo} alt="" className="w-[8vw] md:w-[4vw]" />
            <span className="text-logo1Color">CI</span>
            <span className="text-logo2Color">CC</span>
          </h2>
          <div className="flex items-center gap-7 text-2xl">
            <a
              className={`font-semibold hidden ${
                activeLink == "home" ? "text-[#F1592A]" : "text-gray-400"
              } md:block`}
              href="#hero"
              id="home"
            >
              Home
            </a>
            <a
              className={`font-semibold hidden ${
                activeLink == "reach-out" ? "text-[#F1592A]" : "text-gray-400"
              } md:block`}
              href="#learn-more"
              id="reach-out"
            >
              Reach Out
            </a>
            <a
              href="#services"
              className={`font-semibold hidden ${
                activeLink == "service" ? "text-[#F1592A]" : "text-gray-400"
              } md:block`}
              id="service"
            >
              Services
            </a>
            <a
              className={`font-semibold hidden ${
                activeLink == "choose-plan" ? "text-[#F1592A]" : "text-gray-400"
              } md:block`}
              href="#plan"
              id="choose-plan"
            >
              Choose Plan
            </a>
            <a
              className={`font-semibold hidden ${
                activeLink == "abt" ? "text-[#F1592A]" : "text-gray-400"
              } md:block`}
              href="#about"
              id="abt"
            >
              About
            </a>
            <a className="p-1 px-4 font-semibold bg-[#2E3192] rounded-md text-white">
              Get Quote
            </a>
            <FaAlignJustify
              size={25}
              id="quote"
              className="md:hidden"
              onClick={handleDropDown}
            />
          </div>
        </div>
      </div>
      <div
        className={`absolute w-full top-0 z-10 ${
          dropDown ? "" : "pointer-events-none"
        }`}
      >
        <div
          className={`flex ${
            dropDown ? "transform translate-x-0" : "transform -translate-x-full"
          } flex-col items-center gap-3 py-8 bg-[#2E3192] z-10 relative transition-transform duration-300`}
        >
          <button
            className="absolute right-4 top-2 w-9"
            onClick={handleDropDown}
          >
            <IoClose size={30} className="text-white" />
          </button>
          <a
            href="#hero"
            id="s-home"
            className={`font-semibold ${
              activeLink == "s-home" ? "text-[#F1592A]" : "text-white"
            } text-sm px-3`}
          >
            Home
          </a>
          <a
            href="#learn-more"
            id="s-reach-out"
            className={`font-semibold ${
              activeLink == "s-reach-out" ? "text-[#F1592A]" : "text-white"
            } text-sm px-3`}
          >
            Reach Out
          </a>
          <a
            href="#services"
            id="s-service"
            className={`font-semibold ${
              activeLink == "s-service" ? "text-[#F1592A]" : "text-white"
            } text-sm px-3`}
          >
            Services
          </a>
          <a
            href="#plan"
            id="s-choose-plan"
            className={`font-semibold ${
              activeLink == "s-choose-plan" ? "text-[#F1592A]" : "text-white"
            } text-sm px-3`}
          >
            Choose Plan
          </a>
          <a
            href="#about"
            id="s-abt"
            className={`font-semibold ${
              activeLink == "s-abt" ? "text-[#F1592A]" : "text-white"
            } text-sm px-3`}
          >
            About
          </a>
        </div>
      </div>
    </div>
  );
}

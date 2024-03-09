/* eslint-disable */
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function ServiceBox({ children, heading, signColor, quote }) {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  });
  return (
    <div
      className="flex justify-center w-[40vw] mx-2 my-2 h-[25vh] border-2 border-gray-300 rounded-lg md:w-[16vw]"
      // data-aos="zoom-in"
      // data-aos="fade-right"
      // data-aos="fade-left"
    >
      <div className="flex flex-col my-3 px-2 items-center justify-between">
        <div className="py-1 relative">
          <span
            className={`absolute z-[-9] p-7 bottom-4 right-7 ${signColor} rounded-full`}
          ></span>
          {children}
        </div>
        <h2 className="font-semibold text-base md:text-xl">{heading}</h2>
        <button
          className={`px-4 text-green-500 font-semibold text-xm rounded-lg`}
        >
          {quote}
        </button>
      </div>
    </div>
  );
}

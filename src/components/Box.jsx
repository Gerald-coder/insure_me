import React from "react";

export default function Box({ children, heading, desc, buttonColor }) {
  return (
    <div className="flex justify-center w-[40vw] mx-2 my-2 h-[50vh] border-2 border-gray-300 rounded-lg md:w-[16vw]">
      <div className="flex flex-col my-3 px-2 items-center justify-between">
        <h2 className="font-normal text-base md:text-xl">{heading}</h2>
        <div className="py-1">{children}</div>
        <p className="text-center text-gray-800 text-sm font-normal">{desc}</p>
        <button
          className={`py-2 px-4 ${buttonColor} text-white font-semibold text-xm rounded-lg`}
        >
          Choose Plan
        </button>
      </div>
    </div>
  );
}

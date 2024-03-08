import React from "react";
import Description from "./Description";
import people from "../assets/images/people.png";

export default function WhatWeDo() {
  return (
    <div className="flex justify-center w-full bg-[#444c5c]">
      <div className="flex flex-col items-center w-[90vw] py-10 gap-4 px-3 md:flex-row md:justify-between">
        <div className="w-full text-white">
          <h2 className="py-3 text-2xl md:text-4xl">
            <strong>We take the work off your hands</strong>
          </h2>
          <Description
            heading="Excellent Protection"
            desc="Our best plans for every goal in life Lorem ipsum dolor sit amet,
        consetetur sadipscing"
          />
          <Description
            heading="Excellent Protection"
            desc="Our best plans for every goal in life Lorem ipsum dolor sit amet,
        consetetur sadipscing"
          />
          <Description
            heading="Excellent Protection"
            desc="Our best plans for every goal in life Lorem ipsum dolor sit amet,
        consetetur sadipscing"
          />
        </div>
        <div className="flex w-full mt-[5vh] md:h-[65vh] justify-end">
          <img
            src={people}
            className="w-full md:w-[95%] rounded-tr-3xl rounded-bl-3xl"
            alt="people"
          />
        </div>
      </div>
    </div>
  );
}

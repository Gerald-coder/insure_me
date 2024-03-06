import React from "react";
import Box from "./Box";
import { BsHeartPulse } from "react-icons/bs";
import { MdOutlineFamilyRestroom } from "react-icons/md";
import { GiThreeLeaves } from "react-icons/gi";

export default function PricingPlan() {
  return (
    <>
      <div className="w-[60vw] my-10 text-center md:w-[50%]">
        <h2 className="py-3 text-2xl font-semibold md:text-5xl">
          <strong>Insurance Pricing Plan</strong>
        </h2>
        <p className="text-center text-gray-800 text-sm font-normal">
          Our best plans for every goal in life Lorem ipsum dolor sit amet,
          consetetur sadipscing
        </p>
      </div>
      <div className="flex justify-center flex-wrap w-[90vw]">
        <Box
          heading="Family Protection"
          desc="Covers your personal belongings (furniture, clothing, electronics, etc.) if they're damaged or stolen"
          buttonColor="bg-red-400"
        >
          <MdOutlineFamilyRestroom size={60} />
        </Box>
        <Box
          heading="Hospital Protection"
          desc="Covers your personal belongings (furniture, clothing, electronics, etc.) if they're damaged or stolen"
          buttonColor="bg-green-400"
        >
          <BsHeartPulse size={60} />
        </Box>
        <Box
          heading="Check Suitability"
          desc="Covers your personal belongings (furniture, clothing, electronics, etc.) if they're damaged or stolen"
          buttonColor="bg-blue-400"
        >
          <GiThreeLeaves size={60} />
        </Box>
        <Box
          heading="Hospital Protection"
          desc="Covers your personal belongings (furniture, clothing, electronics, etc.) if they're damaged or stolen"
          buttonColor="bg-green-400"
        >
          <BsHeartPulse size={60} />
        </Box>
        <Box
          heading="Check Suitability"
          desc="Covers your personal belongings (furniture, clothing, electronics, etc.) if they're damaged or stolen"
          buttonColor="bg-red-400"
        >
          <GiThreeLeaves size={60} />
        </Box>
      </div>
    </>
  );
}

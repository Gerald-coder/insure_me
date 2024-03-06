import React from "react";
import ServiceBox from "./ServiceBox";
import { FiBriefcase } from "react-icons/fi";
import { LuPlane } from "react-icons/lu";
import { PiHouseLight } from "react-icons/pi";
import { TbBus } from "react-icons/tb";

export default function PricingPlan() {
  return (
    <div className="flex justify-center flex-wrap w-[90vw]">
      <ServiceBox heading="Tour Insurance" signColor="bg-blue-300">
        <TbBus size={60} />
      </ServiceBox>
      <ServiceBox heading="Business Insurance" signColor="bg-red-300">
        <FiBriefcase size={60} />
      </ServiceBox>
      <ServiceBox heading="Travel Insurance" signColor="bg-yellow-300">
        <LuPlane size={60} />
      </ServiceBox>
      <ServiceBox heading="Home Insurance" signColor="bg-green-300">
        <PiHouseLight size={60} />
      </ServiceBox>
    </div>
  );
}

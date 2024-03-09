import ServiceBox from "./ServiceBox";
import { LuPlane } from "react-icons/lu";
import { PiHouseLight } from "react-icons/pi";
import { TbBus } from "react-icons/tb";
import { RiHospitalLine } from "react-icons/ri";

export default function Service() {
  return (
    <div className="flex justify-center py-10 w-full flex-wrap">
      <ServiceBox
        heading="Auto Insurance"
        signColor="bg-blue-300"
        quote="Save Auto plan"
      >
        <TbBus size={60} />
      </ServiceBox>
      <ServiceBox
        heading="Health Insurance"
        signColor="bg-red-300"
        quote="Healthy Living"
      >
        <RiHospitalLine size={60} />
      </ServiceBox>
      <ServiceBox
        heading="Travel Insurance"
        signColor="bg-yellow-300"
        quote="travel Safe"
      >
        <LuPlane size={60} />
      </ServiceBox>
      <ServiceBox
        heading="Home Insurance"
        signColor="bg-green-300"
        quote="Live safe"
      >
        <PiHouseLight size={60} />
      </ServiceBox>
    </div>
  );
}

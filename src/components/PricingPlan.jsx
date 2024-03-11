import Box from "./Box";
import { BsHeartPulse } from "react-icons/bs";
import { MdOutlineFamilyRestroom } from "react-icons/md";
import { LuPlane } from "react-icons/lu";
import { TbBus } from "react-icons/tb";
import { GiSittingDog } from "react-icons/gi";

export default function PricingPlan() {
  const type = true;
  return (
    <div className="flex flex-col items-center py-10" id="plan">
      <div className="w-[60vw] text-center md:w-[50%] mb-8">
        <h2 className="py-3 text-2xl md:text-4xl">
          <strong>Insurance Pricing Plan</strong>
        </h2>
        <p className="text-center text-gray-800 text-xl font-normal md:text-2xl">
          Explore our comprehensive insurance plans tailored to meet your unique
          needs and life goals.
        </p>
      </div>
      <div className="flex justify-center flex-wrap w-[90vw]">
        <Box
          type={type}
          heading="Home Protection"
          desc="Safeguards your home and its contents against various risks, including fire, burglary, natural disasters, and liability claims."
          buttonColor="bg-[#2E3192]"
        >
          <MdOutlineFamilyRestroom size={60} color="#F1592A" />
        </Box>
        <Box
          type={type}
          heading="Life Protection"
          desc="Offers financial security and peace of mind to your loved ones in the event of your passing"
          buttonColor="bg-[#2E3192]"
        >
          <BsHeartPulse size={60} color="#F1592A" />
        </Box>
        <Box
          type={type}
          heading="Travel Protection"
          desc="Provides coverage for unexpected events that may disrupt your travel plans (trip cancellation, baggage loss, etc)"
          buttonColor="bg-[#2E3192]"
        >
          <LuPlane size={60} color="#F1592A" />
        </Box>
        <Box
          type={type}
          heading="Auto Protection"
          desc="Provides coverage for your vehicles against damages caused by accidents, theft, vandalism, or natural disasters"
          buttonColor="bg-[#2E3192]"
        >
          <TbBus size={60} color="#F1592A" />
        </Box>

        <Box
          type={type}
          heading="Pet Protection"
          desc="Helps pet owners manage the costs of pet healthcare and ensures that their furry companions receive the necessary medical attention"
          buttonColor="bg-[#2E3192]"
        >
          <GiSittingDog size={60} color="#F1592A" />
        </Box>
      </div>
    </div>
  );
}

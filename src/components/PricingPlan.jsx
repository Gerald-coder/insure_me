import Box from "./Box";
import { BsHeartPulse } from "react-icons/bs";
import { MdOutlineFamilyRestroom } from "react-icons/md";
import { GiThreeLeaves } from "react-icons/gi";

export default function PricingPlan() {
  const type = true;
  return (
    <div className="flex flex-col items-center py-10">
      <div className="w-[60vw] text-center md:w-[50%] mb-8">
        <h2 className="py-3 text-2xl md:text-4xl">
          <strong>Insurance Pricing Plan</strong>
        </h2>
        <p className="text-center text-gray-800 text-xl font-normal md:text-2xl">
          Our best plans for every goal in life Lorem ipsum dolor sit amet,
          consetetur sadipscing
        </p>
      </div>
      <div className="flex justify-center flex-wrap w-[90vw]">
        <Box
          type={type}
          heading="Family Protection"
          desc="Covers your personal belongings (furniture, clothing, electronics, etc.) if they're damaged or stolen"
          buttonColor="bg-[#2E3192]"
        >
          <MdOutlineFamilyRestroom size={60} />
        </Box>
        <Box
          type={type}
          heading="Hospital Protection"
          desc="Covers your personal belongings (furniture, clothing, electronics, etc.) if they're damaged or stolen"
          buttonColor="bg-[#2E3192]"
        >
          <BsHeartPulse size={60} />
        </Box>
        <Box
          type={type}
          heading="Check Suitability"
          desc="Covers your personal belongings (furniture, clothing, electronics, etc.) if they're damaged or stolen"
          buttonColor="bg-[#2E3192]"
        >
          <GiThreeLeaves size={60} />
        </Box>
        <Box
          type={type}
          heading="Hospital Protection"
          desc="Covers your personal belongings (furniture, clothing, electronics, etc.) if they're damaged or stolen"
          buttonColor="bg-[#2E3192]"
        >
          <BsHeartPulse size={60} />
        </Box>
        <Box
          type={type}
          heading="Check Suitability"
          desc="Covers your personal belongings (furniture, clothing, electronics, etc.) if they're damaged or stolen"
          buttonColor="bg-[#2E3192]"
        >
          <GiThreeLeaves size={60} />
        </Box>
      </div>
    </div>
  );
}

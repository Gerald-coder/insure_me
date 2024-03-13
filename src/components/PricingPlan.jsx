import Box from "./Box";
import { BsHeartPulse } from "react-icons/bs";
import { MdOutlineFamilyRestroom } from "react-icons/md";
import { LuPlane } from "react-icons/lu";
import { TbBus } from "react-icons/tb";
import { useTranslation } from "react-i18next";
import { IoBusinessOutline } from "react-icons/io5";

export default function PricingPlan() {
  const { t } = useTranslation();
  const type = true;
  return (
    <div className="flex flex-col items-center py-10" id="plan">
      <div className="w-[60vw] text-center md:w-[50%] mb-8">
        <h2 className="py-3 text-2xl md:text-4xl">
          <strong>{t("insuranceServiceHeader")}</strong>
        </h2>
        <p className="text-center text-gray-800 text-xl font-normal md:text-2xl">
          {t("insuranceServiceParagraph")}
        </p>
      </div>
      <div className="flex justify-center flex-wrap w-[90vw]">
        <Box
          type={type}
          heading={t("insuranceServicesHeading1")}
          desc={t("insuranceServicesDescription1")}
          buttonColor="bg-[#2E3192]"
        >
          <MdOutlineFamilyRestroom size={60} color="#F1592A" />
        </Box>
        <Box
          type={type}
          heading={t("insuranceServicesHeading2")}
          desc={t("insuranceServicesDescription2")}
          buttonColor="bg-[#2E3192]"
        >
          <BsHeartPulse size={60} color="#F1592A" />
        </Box>
        <Box
          type={type}
          heading={t("insuranceServicesHeading3")}
          desc={t("insuranceServicesDescription3")}
          buttonColor="bg-[#2E3192]"
        >
          <LuPlane size={60} color="#F1592A" />
        </Box>
        <Box
          type={type}
          heading={t("insuranceServicesHeading4")}
          desc={t("insuranceServicesDescription4")}
          buttonColor="bg-[#2E3192]"
        >
          <TbBus size={60} color="#F1592A" />
        </Box>

        <Box
          type={type}
          heading={t("insuranceServicesHeading5")}
          desc={t("insuranceServicesDescription5")}
          buttonColor="bg-[#2E3192]"
        >
          <IoBusinessOutline size={60} color="#F1592A" />
        </Box>
      </div>
    </div>
  );
}

import ServiceBox from "./ServiceBox";
import { LuPlane } from "react-icons/lu";
import { PiHouseLight } from "react-icons/pi";
import { TbBus } from "react-icons/tb";
import { RiHospitalLine } from "react-icons/ri";
import { useTranslation } from "react-i18next";

export default function Service() {
  const { t } = useTranslation();
  return (
    <div className="flex justify-center py-10 w-full flex-wrap">
      <ServiceBox
        heading={t("serviceAutoHeader")}
        signColor="bg-blue-300"
        quote={t("serviceAutoParagraph")}
      >
        <TbBus size={60} />
      </ServiceBox>
      <ServiceBox
        heading={t("serviceHealthHeader")}
        signColor="bg-red-300"
        quote={t("serviceHealthParagraph")}
      >
        <RiHospitalLine size={60} />
      </ServiceBox>
      <ServiceBox
        heading={t("serviceTravelHeader")}
        signColor="bg-yellow-300"
        quote={t("serviceTravelParagraph")}
      >
        <LuPlane size={60} />
      </ServiceBox>
      <ServiceBox
        heading={t("serviceHomeHeader")}
        signColor="bg-green-300"
        quote={t("serviceHomeParagraph")}
      >
        <PiHouseLight size={60} />
      </ServiceBox>
    </div>
  );
}

import Description from "./Description";
import people from "../assets/images/people.png";
import { useTranslation } from "react-i18next";

export default function WhatWeDo() {
  const { t } = useTranslation();
  return (
    <div className="flex justify-center w-full bg-[#444c5c]" id="services">
      <div className="flex flex-col items-center w-[90vw] py-10 gap-4 px-3 md:flex-row md:justify-between">
        <div className="w-full text-white">
          <h2 className="py-3 text-2xl md:text-4xl">
            <strong>{t("whatWeDoHeader")}</strong>
          </h2>
          <Description
            heading={t("whatWeDoHeading1")}
            desc={t("whatWeDodescription1")}
          />
          <Description
            heading={t("whatWeDoHeading2")}
            desc={t("whatWeDodescription2")}
          />
          <Description
            heading={t("whatWeDoHeading3")}
            desc={t("whatWeDodescription3")}
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

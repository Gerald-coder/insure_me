/* eslint-disable */

import { MdLocationPin } from "react-icons/md";
import { footerLinks } from "../utils";
import logo from "../assets/images/logo.png";
import logo2 from "../assets/images/logo2.png";
import { useTranslation } from "react-i18next";

const Consultation = () => {
  return (
    <div className="flex justify-center w-full bg-Gray py-14">
      <div className="flex w-[90vw] justify-between items-center flex-wrap">
        <div className="flex items-start justify-center flex-col gap-0">
          <p className="text-2xl">
            <strong>Consulting agency for your business</strong>
          </p>
          <p>the quick fox jumps over the lazy dogs</p>
        </div>
        <div className="flex flex-col items-start mt-5">
          <h1>
            <MdLocationPin />
          </h1>
          <p className="md:text-xl">
            <strong>
              359 Manchester St A Greenville, NC 27834, United States
            </strong>
          </p>
        </div>
      </div>
    </div>
  );
};

function Footer() {
  const { t } = useTranslation();

  return (
    <>
      <div className="flex justify-center py-5 border-b-2 border-gray-400 w-full bg-[#444c5c] text-white">
        <div className="flex flex-col w-[90vw] items-start justify-between md:items-center md:flex-row">
          <div className="w-full h-full flex items-stat justify-center md:w-[20vw]">
            <img src={logo2} alt="logo2" className="md:w-full" />
          </div>
          {footerLinks.map((details) => (
            <div
              key={details.id}
              className="flex flex-col items-start justify-start gap-4 h-full w-full p-4 md:w-auto"
            >
              <h1 className="font-bold text-xl md:text-3xl">{details.title}</h1>
              <div className="flex flex-col gap-2">
                {details.items.map((item) => (
                  <p key={item.id} className="flex gap-2 md:text-xl">
                    {item.icon && <span>{item.icon}</span>}
                    {item.item}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex py-5 w-full text-white bg-[#444c5c] text-xl font-bold md:text-2xl justify-center">
        <h1> &copy; CCIC All Rights Reserved.</h1>
      </div>
    </>
  );
}

export default Footer;

import { useState } from "react";
import { FaAlignJustify } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import logo from "../assets/images/logo.png";
import { useTranslation } from "react-i18next";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

export default function Nav() {
  const { t, i18n } = useTranslation();
  const [dropDown, setDropDown] = useState(false);
  const [activeLink, setActiveLink] = useState("home");
  const handleDropDown = () => setDropDown(!dropDown);
  const updateActiveLink = (e) => setActiveLink(e.target.id || activeLink);

  const [lngs] = useState({
    en: { nativeName: "eng", name: "EN" },
    es: { nativeName: "span", name: "ES" },
    pt: { nativeName: "port", name: "PT" },
  });
  const [curLng, setCurLng] = useState(
    i18n.language === "en"
      ? "eng"
      : i18n.language === "pt"
      ? "port"
      : i18n.language === "es"
      ? "span"
      : ""
  );
  const [showLanguages, setShowlanguages] = useState(false);
  // console.log(i18n);

  return (
    <div className="h-full" onClick={updateActiveLink}>
      <div className={`flex justify-center ${dropDown ? "hidden" : ""}`}>
        <div className="flex w-[90vw] justify-between items-center">
          <h2 className="text-black font-bold text-3xl justify-center">
            <img src={logo} alt="" className="w-[8vw] md:w-[4vw]" />
            <span className="text-logo1Color">CI</span>
            <span className="text-logo2Color">CC</span>
          </h2>
          <div className="flex items-center gap-7 text-2xl">
            <a
              className={`font-semibold hidden ${
                activeLink == "home" ? "text-[#F1592A]" : "text-gray-400"
              } md:block`}
              href="#hero"
              id="home"
            >
              {t("navHome")}
            </a>
            <a
              className={`font-semibold hidden ${
                activeLink == "reach-out" ? "text-[#F1592A]" : "text-gray-400"
              } md:block`}
              href="#learn-more"
              id="reach-out"
            >
              {t("navReach")}
            </a>
            <a
              href="#services"
              className={`font-semibold hidden ${
                activeLink == "service" ? "text-[#F1592A]" : "text-gray-400"
              } md:block`}
              id="service"
            >
              {t("navServices")}
            </a>
            <a
              className={`font-semibold hidden ${
                activeLink == "choose-plan" ? "text-[#F1592A]" : "text-gray-400"
              } md:block`}
              href="#plan"
              id="choose-plan"
              // onClick={() => {
              //   i18n.changeLanguage("es");
              //   setCurLng(lngs.es.name);
              // }}
            >
              {t("navPlan")}
            </a>
            <a
              className={`font-semibold hidden ${
                activeLink == "abt" ? "text-[#F1592A]" : "text-gray-400"
              } md:block`}
              href="#about"
              id="abt"
              // onClick={() => {
              //   i18n.changeLanguage("pt");
              //   setCurLng(lngs.pt.name);
              // }}
            >
              {t("navAbout")}
            </a>
            <a
              className="p-1 px-4 font-semibold bg-[#2E3192] rounded-md text-white cursor-pointer text-xl md:text-2xl"
              href="https://t.me/CCICGROUPS"
              target="_blank"
            >
              {t("navQuote")}{" "}
            </a>
            <button
              onClick={() => {
                setShowlanguages(!showLanguages);
              }}
              className="flex gap-2 items-center w-[80px] h-[40px] cursor-pointers"
            >
              {curLng}{" "}
              <span className="bold text-2xl ml-0">
                <MdOutlineKeyboardArrowDown />
              </span>
            </button>
            <FaAlignJustify
              size={25}
              id="quote"
              className="md:hidden"
              onClick={handleDropDown}
            />
          </div>
        </div>
        {/* langs */}
        {showLanguages && (
          <div className="absolute right-16 top-28 flex flex-col items-center justify-center bg-slate-400 h-auto shadow-dropDownShadow rounded-md animate-slide-bottom w-40 py-2 z-10">
            {Object.keys(lngs).map((text) => {
              return (
                <p
                  className={`mb-3 text-white cursor-pointer w-full flex items-center justify-center md:text-2xl ${
                    i18n.language === text && "font-extrabold text-[#F1592A]"
                  }`}
                  key={text}
                  onClick={() => {
                    i18n.changeLanguage(text);
                    setCurLng(lngs[text].nativeName);
                    setShowlanguages(false);
                  }}
                >
                  {lngs[text].nativeName}
                </p>
              );
            })}
          </div>
        )}
      </div>
      <div
        className={`absolute w-full top-0 z-10 ${
          dropDown ? "" : "pointer-events-none"
        }`}
      >
        <div
          className={`flex ${
            dropDown ? "transform translate-x-0" : "transform -translate-x-full"
          } flex-col items-center gap-3 py-8 bg-[#2E3192] z-10 relative transition-transform duration-300`}
        >
          <button
            className="absolute right-4 top-2 w-9"
            onClick={handleDropDown}
          >
            <IoClose size={30} className="text-white" />
          </button>
          <a
            href="#hero"
            id="s-home"
            className={`font-semibold ${
              activeLink == "s-home" ? "text-[#F1592A]" : "text-white"
            } text-sm px-3`}
          >
            Home
          </a>
          <a
            href="#learn-more"
            id="s-reach-out"
            className={`font-semibold ${
              activeLink == "s-reach-out" ? "text-[#F1592A]" : "text-white"
            } text-sm px-3`}
          >
            Reach Out
          </a>
          <a
            href="#services"
            id="s-service"
            className={`font-semibold ${
              activeLink == "s-service" ? "text-[#F1592A]" : "text-white"
            } text-sm px-3`}
          >
            Services
          </a>
          <a
            href="#plan"
            id="s-choose-plan"
            className={`font-semibold ${
              activeLink == "s-choose-plan" ? "text-[#F1592A]" : "text-white"
            } text-sm px-3`}
          >
            Choose Plan
          </a>
          <a
            href="#about"
            id="s-abt"
            className={`font-semibold ${
              activeLink == "s-abt" ? "text-[#F1592A]" : "text-white"
            } text-sm px-3`}
          >
            About
          </a>
        </div>
      </div>
    </div>
  );
}

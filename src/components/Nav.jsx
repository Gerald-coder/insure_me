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
    en: {
      nativeName: "English",
      name: "EN",
      flag: "https://flagcdn.com/w20/us.png",
      srcSet: "https://flagcdn.com/w40/us.png 2x",
    },
    es: {
      nativeName: "Spanish",
      name: "ES",
      flag: "https://flagcdn.com/w20/es.png",
      srcSet: "https://flagcdn.com/w40/es.png 2x",
    },
    pt: {
      nativeName: "Portuguese",
      name: "PT",
      flag: "https://flagcdn.com/w20/pt.png",
      srcSet: "https://flagcdn.com/w40/pt.png 2x",
    },
  });

  const [showLanguages, setShowlanguages] = useState(false);
  const [curFlag, setCurFlag] = useState(
    i18n.language === "en"
      ? "https://flagcdn.com/w20/us.png"
      : i18n.language === "pt"
      ? "https://flagcdn.com/w20/pt.png"
      : i18n.language === "es"
      ? "https://flagcdn.com/w20/es.png"
      : ""
  );

  const [curSrcSet, setCurSrcSet] = useState(
    i18n.language === "en"
      ? "https://flagcdn.com/w40/us.png 2x"
      : i18n.language === "pt"
      ? "https://flagcdn.com/w40/pt.png 2x"
      : i18n.language === "es"
      ? "https://flagcdn.com/w40/es.png 2x"
      : ""
  );

  return (
    <div className="h-full" onClick={updateActiveLink}>
      <div className={`flex justify-center ${dropDown ? "hidden" : ""}`}>
        <div className="flex w-[90vw] justify-between items-center">
          <h2 className="text-black font-bold text-3xl justify-center">
            <img src={logo} alt="" className="w-[8vw] md:w-[4vw]" />
            <span className="text-logo1Color">CC</span>
            <span className="text-logo2Color">IC</span>
          </h2>
          <div className="flex items-center gap-1 text-2xl md:gap-7 ">
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
            >
              {t("navPlan")}
            </a>
            <a
              className={`font-semibold hidden ${
                activeLink == "abt" ? "text-[#F1592A]" : "text-gray-400"
              } md:block`}
              href="#about"
              id="abt"
            >
              {t("navAbout")}
            </a>
            <a
              className="p-1 px-4 font-semibold bg-[#2E3192] rounded-md text-white cursor-pointer text-xl md:text-2xl"
              href="https://t.me/CCICLimited"
              target="_blank"
            >
              {t("navQuote")}{" "}
            </a>
            <button
              onClick={() => {
                setShowlanguages(!showLanguages);
              }}
              className="flex gap-2 items-center w-[70px] px-1 h-[40px] cursor-pointers"
            >
              <img src={curFlag} srcSet={curSrcSet} width="30" alt="Spain" />
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
          <div className="absolute right-5  top-28 flex flex-col items-start justify-center bg-slate-400 h-auto shadow-dropDownShadow rounded-md animate-slide-bottom w-44 p-3 z-10 md:right-10">
            {Object.keys(lngs).map((text) => {
              return (
                <div
                  key={text}
                  className="w-full flex items-center justify-start gap-3 cursor-pointer"
                >
                  <img
                    src={lngs[text].flag}
                    srcSet={`https://flagcdn.com/w40/${
                      text === "en" ? "us" : text
                    }.png 2x`}
                    width="30"
                    alt="Spain"
                  />
                  <p
                    className={`mb-3 text-white md:text-xl ${
                      i18n.language === text && "font-extrabold text-[#F1592A]"
                    }`}
                    onClick={() => {
                      console.log(text);
                      i18n.changeLanguage(text);
                      setShowlanguages(false);
                      setCurFlag(lngs[text].flag);
                      setCurSrcSet(lngs[text].srcSet);
                    }}
                  >
                    {lngs[text].nativeName}
                  </p>
                </div>
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
            {t("navHome")}
          </a>
          <a
            href="#learn-more"
            id="s-reach-out"
            className={`font-semibold ${
              activeLink == "s-reach-out" ? "text-[#F1592A]" : "text-white"
            } text-sm px-3`}
          >
            {t("navReach")}
          </a>
          <a
            href="#services"
            id="s-service"
            className={`font-semibold ${
              activeLink == "s-service" ? "text-[#F1592A]" : "text-white"
            } text-sm px-3`}
          >
            {t("navServices")}
          </a>
          <a
            href="#plan"
            id="s-choose-plan"
            className={`font-semibold ${
              activeLink == "s-choose-plan" ? "text-[#F1592A]" : "text-white"
            } text-sm px-3`}
          >
            {t("navPlan")}
          </a>
          <a
            href="#about"
            id="s-abt"
            className={`font-semibold ${
              activeLink == "s-abt" ? "text-[#F1592A]" : "text-white"
            } text-sm px-3`}
          >
            {t("navAbout")}
          </a>
        </div>
      </div>
    </div>
  );
}

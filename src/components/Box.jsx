/* eslint-disable */
import { useTranslation } from "react-i18next";

export default function Box({
  children,
  heading,
  desc,
  buttonColor,
  rating,
  type,
  image,
  id,
  bgColor,
}) {
  const { t } = useTranslation();
  return (
    <div
      className={`${bgColor} flex justify-center w-[70vw] mx-2 my-2 min-h-[50vh] border-2 border-gray-300 rounded-lg md:w-[16vw]`}
    >
      <div className="flex flex-col my-3 px-2 items-center justify-between">
        <h2 className="font-bold text-xl text-center">{heading}</h2>
        {type ? (
          <div className="py-1">{children}</div>
        ) : (
          <img
            src={image}
            alt={`client${id}`}
            className="w-[12vw] md:w-[6vw] h-[10vh] rounded-[50%]"
          />
        )}
        <p className="text-center text-gray-800 text-lg font-normal">{desc}</p>
        {type ? (
          <a
            className={`py-2 px-4 ${buttonColor} text-white font-semibold text-xm rounded-lg`}
            href="https://t.me/CCICGROUPS"
            target="_blank"
          >
            {t("choosePlan")}
          </a>
        ) : (
          <div>
            {rating.map((rate, ind) => (
              <button key={ind}> {rate}</button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

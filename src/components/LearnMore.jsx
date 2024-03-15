import fam1 from "../assets/images/fam1.webp";
import child from "../assets/images/child.webp";
import cars2 from "../assets/images/cars2.webp";
import { useTranslation } from "react-i18next";

/* eslint-disable */

const explore = [
  {
    title: "Application",
    desc: "When you apply for insurance, you will be asked basic questions such as your name, date of birth, address and often questions about your occupation",
    id: 1,
  },
  {
    title: "Analysis",
    desc: "After application, your request is being reviewed and analyzed by our agents for better understanding, identification and possible best outcome for your request. Note: Our Analysis takes less than 48hours to provide the best outcome",
    id: 2,
  },
  {
    title: "Finalize",
    desc: "Finally, getting your insurance processed",
    id: 3,
  },
];

export const H1 = ({ text }) => {
  return (
    <h1 className="text-2xl md:text-4xl">
      <strong>{text}</strong>
    </h1>
  );
};
export const P = ({ text }) => {
  return <p className="text-xl font-normal md:text-2xl">{text}</p>;
};

function LearnMore() {
  const { t } = useTranslation();
  return (
    <div
      className="flex justify-center py-10 w-full bg-[#f6f6f6]"
      id="learn-more"
    >
      <main className="flex flex-col justify-between items-center  gap-1 w-[90vw] md:flex-row md:gap-5">
        <div className="flex-1 items-center grid grid-cols-3 py-6 gap-4 h-[90%] md:py-0">
          <div className="col-span-2">
            <img src={fam1} alt="fam1" className="w-[100%] rounded-lg" />
          </div>
          <div className="grid grid-cols-1 grid-rows-2 gap-4">
            <img src={child} alt="child" className="w-[90%] rounded-lg" />
            <img src={cars2} alt="car" className="w-[90%] rounded-lg" />
          </div>
        </div>
        <div className="flex-1 flex flex-col gap-5 p-5">
          <h1 className="text-2xl md:text-4xl">
            <strong>{t("learnMoreHeader")}</strong>
          </h1>
          <p className="text-xl font-normal md:text-2xl">
            {t("learnMoreFirstParagraph")}
          </p>
          <div className="md:text-xl flex flex-col gap-4">
            {explore.map((exp) => {
              let desc;
              switch (exp.id) {
                case 1:
                  desc = t("learnMoreDesc1");
                  break;
                case 2:
                  desc = t("learnMoreDesc2");
                  break;
                case 3:
                  desc = t("learnMoreDesc3");
                  break;
                default:
                  desc = exp.desc;
                  break;
              }

              let title;
              switch (exp.id) {
                case 1:
                  title = t("learnMoreTitlte1");
                  break;
                case 2:
                  title = t("learnMoreTitlte2");
                  break;
                case 3:
                  title = t("learnMoreTitlte3");
                  break;
                default:
                  title = exp.title;
                  break;
              }

              return (
                <div key={exp.id} className="md:text-xl flex flex-col gap-2">
                  <h1 className="gap-2 font-semibold">{title}</h1>
                  <p>{desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </main>
    </div>
  );
}

export default LearnMore;

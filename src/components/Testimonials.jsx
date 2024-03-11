import { H1, P } from "./LearnMore";
import car1 from "../assets/images/car1.webp";
import house4 from "../assets/images/house4.jpg";
import car2 from "../assets/images/cars2.webp";
import car5 from "../assets/images/car5.webp";
import lady from "../assets/images/lady.jpg";
import { clients } from "../utils";
import Box from "./Box";
import { useTranslation } from "react-i18next";

/*  eslint-disable */

const Clients = ({ t }) => {
  const type = false;
  return (
    <section className="flex justify-center h-auto p-2 bg-Gray w-full">
      <div className="p-2 flex flex-col items-center justify-center w-[90vw] h-full md:gap-5">
        <div className="w-[60vw] my-10 text-center md:w-[50%] flex flex-col gap-4">
          <H1 text={t("testimonialsHeader2")} />

          <p className="text-center text-gray-800 text-sm font-normal md:text-2xl">
            {t("testimonialsParagraph2")}
          </p>
        </div>
        <div className="flex justify-center flex-wrap w-[90vw]">
          {clients.map((client) => {
            let description;

            switch (client.id) {
              case 1:
                description = t("client1TestimonialDesc");
                break;
              case 2:
                description = t("client2TestimonialDesc");
                break;
              case 3:
                description = t("client3TestimonialDesc");
                break;
              case 4:
                description = t("client4TestimonialDesc");
                break;
              default:
                description = client.name;
                break;
            }
            return (
              <Box
                desc={description}
                key={client.id}
                heading={client.name}
                type={type}
                image={client.img}
                id={client.id}
                bgColor={"bg-gray-400 bg-opacity-40"}
                rating={client.rating}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

function Testimonials() {
  const { t } = useTranslation();

  return (
    <>
      <div
        className="flex justify-center h-[70vh] p-2 bg-Gray  w-full"
        id="about"
      >
        <div className="p-2 flex flex-col items-center justify-between w-[90vw] h-full md:flex-row gap-9">
          <div className="flex-1 flex flex-col gap-5">
            <H1 text={t("testimonialsHeader1")} />
            <P text={t("testimonialsParagraph1")} />
            <div className="flex items-center justify-start gap-5">
              <div className="w-[10vh] md:w-[10vh] h-[10vh] rounded-[50%] flex items-center justify-between">
                <img
                  src={lady}
                  alt="insured"
                  className="w-full h-full rounded-[50%]"
                />
              </div>
              <div className="flex flex-col items-start justify-center gap-1">
                <p>
                  <strong>Maria Curia</strong>
                </p>
                <p>{t("testimonialClientText")}</p>
              </div>
            </div>
          </div>
          <div className="flex-1 grid grid-cols-2 gap-2 p-2 bg-gray-400 bg-opacity-40 rounded-tr-lg rounded-bl-lg">
            <div className="w-[90%] rounded-lg">
              <img src={car1} alt="car1" className=" rounded-lg" />
            </div>
            <div className="w-[90%] flex items-center justify-end rounded-lg ">
              <img src={car2} alt="car2" className="w-[80%] rounded-lg" />
            </div>
            <div className="w-[90%] flex items-end rounded-lg">
              <img src={house4} alt="car3" className="w-[80%] rounded-lg" />
            </div>
            <div className="w-[90%] rounded-lg">
              <img src={car5} alt="car4" className="  rounded-lg" />
            </div>
          </div>
        </div>
      </div>
      <Clients t={t} />
    </>
  );
}

export default Testimonials;

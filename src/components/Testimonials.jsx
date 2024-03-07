import { H1, P } from "./LearnMore";
import car1 from "../assets/images/car1.webp";
import house4 from "../assets/images/house4.jpg";
import car2 from "../assets/images/cars2.webp";
import car5 from "../assets/images/car5.webp";
import lady from "../assets/images/lady.jpg";
import { clients } from "../utils";
import Box from "./Box";

const Clients = () => {
  const type = false;
  return (
    <section className="flex justify-center h-auto p-2 bg-Gray w-full">
      <div className="p-2 flex flex-col items-center justify-center w-[90vw] h-full md:gap-5">
        <div className="w-[60vw] my-10 text-center md:w-[50%]">
          <H1 text={"This is what our clients have to say"} />

          <p className="text-center text-gray-800 text-sm font-normal md:text-2xl">
            With CCIC-Groups, Our dedicated team is always here to assist you,
            providing personalized support every step of the way
          </p>
        </div>
        <div className="flex justify-center flex-wrap w-[90vw]">
          {clients.map((client) => {
            return (
              <Box
                desc={client.desc}
                key={client.id}
                heading={client.name}
                type={type}
                image={client.img}
                id={client.id}
                // bgColor={"bg-white"}
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
  return (
    <>
      <div className="flex justify-center h-[70vh] p-2 bg-Gray  w-full">
        <div className="p-2 flex flex-col items-center justify-between w-[90vw] h-full md:flex-row md:gap-5">
          <div className="flex-1 flex flex-col gap-5">
            {" "}
            <H1 text={"Why Trust Us?"} />
            <P
              text={
                "We have helped over half a thousands clients secure their life and assets, world wide, giving 100% satisfaction"
              }
            />
            <div className="flex items-center justify-start gap-5">
              <div className="w-[12vw] md:w-[8vw] h-[9vh] rounded-[50%] flex items-center justify-between">
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
                <p>life insurance holder @ CCIC-Groups</p>
              </div>
            </div>
          </div>
          <div className="flex-1 grid grid-cols-2 gap-2 bg-gray-400 bg-opacity-40 rounded-r-lg">
            <div className="w-[90%] rounded-lg">
              {" "}
              <img src={car1} alt="car1" className=" rounded-lg" />
            </div>
            <div className="w-[90%] flex items-center justify-end rounded-lg ">
              <img src={car2} alt="car2" className="w-[80%] rounded-lg" />
            </div>{" "}
            <div className="w-[90%] flex items-end rounded-lg">
              <img src={house4} alt="car3" className="w-[80%] rounded-lg" />
            </div>{" "}
            <div className="w-[90%] rounded-lg">
              <img src={car5} alt="car4" className="  rounded-lg" />
            </div>{" "}
          </div>
        </div>
      </div>
      <Clients />
    </>
  );
}

export default Testimonials;

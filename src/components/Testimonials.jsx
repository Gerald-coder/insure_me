import { H1, P } from "./LearnMore";
import car1 from "../assets/images/car1.webp";
import lady from "../assets/images/lady.jpg";

function Testimonials() {
  return (
    <div className="flex justify-center h-[90vh] border-2 border-red-500 p-2">
      <div className="flex items-center justify-between w-[90vw] border-2 border-green-500">
        <div className="flex-1 flex flex-col gap-5">
          {" "}
          <H1 text={"Why Trust Us?"} />
          <P
            text={
              "We have helped over half a thousands clients secure their life and assets, world wide, giving 100% satisfaction"
            }
          />
          <div className="flex items-center justify-start gap-5 border-2 border-red-500">
            <div className="w-[8vw] h-[10vh] rounded-[50%] flex items-center justify-between border-2 border-red-500">
              <img
                src={lady}
                alt="insured"
                className="w-full h-full rounded-[50%]"
              />
            </div>
            <div className="flex flex-col items-center justify-center gap-1">
              <p>
                <strong>Maria Curia</strong>
              </p>
              <p>life insurance holder @ CCIC-Groups</p>
            </div>
          </div>
        </div>
        <div className="border-2 border-red-500 flex-1">image</div>
      </div>
    </div>
  );
}

export default Testimonials;

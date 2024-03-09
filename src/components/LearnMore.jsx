import fam1 from "../assets/images/fam1.webp";
import child from "../assets/images/child.webp";
import cars2 from "../assets/images/cars2.webp";
import { MdLocationPin } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

/* eslint-disable */

const explore = [
  {
    icon: <MdLocationPin size={25} />,
    text: "359 Manchester St A Greenville, NC 27834, United States",
    id: 1,
  },
  { icon: <FaPhone size={25} />, text: "+1 252-756-9956", id: 2 },
  { icon: <MdEmail size={25} />, text: "ccis-groups@hotmail.com", id: 3 },
  // { icon: <FaPhone />, text: "+1 252-756-9956", id: 4 },
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
  return (
    <div
      className="flex justify-center py-10 w-full bg-[#f6f6f6]"
      id="learn-more"
    >
      <main className="flex flex-col justify-between items-center gap-1 w-[90vw] md:flex-row md:gap-5">
        <div className="flex-1 items-center grid grid-cols-3 py-6 gap-4 h-[90%] md:py-0">
          <div className="col-span-2 h-full">
            <img src={fam1} alt="fam1" className="h-full rounded-lg" />
          </div>
          <div className="grid grid-cols-1 grid-rows-2 gap-4 h-full">
            <img src={child} alt="child" className="h-full rounded-lg" />
            <img src={cars2} alt="car" className="h-full rounded-lg" />
          </div>
        </div>
        <div className="flex-1 flex flex-col gap-5 p-5">
          <h1 className="text-2xl md:text-4xl">
            <strong>New to Insurance? Ready to get started?</strong>
          </h1>
          <p className="text-xl font-normal md:text-2xl">
            Contact us today to speak with an insurance specialist and receive a
            personalized quote.
          </p>
          <p className="text-xl font-normal md:text-2xl text-[#F1592A]">
            Visit our office or reach out to us via phone or email. We look
            forward to serving you!
          </p>

          <ul className="font-semibold md:text-xl">
            {explore.map((exp) => {
              return (
                <li
                  key={exp.id}
                  className="flex items-center justify-start gap-5 p-2"
                >
                  <span>{exp.icon}</span> <span>{exp.text}</span>
                </li>
              );
            })}
          </ul>
        </div>
      </main>
    </div>
  );
}

export default LearnMore;

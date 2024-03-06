import fam1 from "../assets/images/fam1.webp";
import child from "../assets/images/child.webp";
import cars2 from "../assets/images/cars2.webp";
import { IoIosArrowDown } from "react-icons/io";
import { MdLocationPin } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";

const explore = [
  {
    icon: <MdLocationPin />,
    text: "359 Manchester St A Greenville, NC 27834, United States",
    id: 1,
  },
  { icon: <FaPhone />, text: "+1 252-756-9956", id: 2 },
  { icon: <FaPhone />, text: "+1 252-756-9956", id: 3 },
  { icon: <FaPhone />, text: "+1 252-756-9956", id: 4 },
];

function LearnMore() {
  return (
    <div className="flex justify-center my-3">
      <main className="flex flex-col justify-between items-center gap-1 w-[90vw] md:flex-row md:gap-5">
        <div className="flex-1 grid grid-cols-3 gap-4 p-5 h-[90%]">
          <div className="col-span-2 h-full">
            <img src={fam1} alt="fam1" className="h-full rounded-lg" />
          </div>
          <div className="grid grid-cols-1 grid-rows-2 gap-4 h-full">
            <img src={child} alt="child" className="h-full rounded-lg" />
            <img src={cars2} alt="car" className="h-full rounded-lg" />
          </div>
        </div>
        <div className="flex-1 flex flex-col gap-5 p-5">
          <h1 className="text-2xl md:text-5xl">
            <strong>New to Insurance? No Problem</strong>
          </h1>
          <p className="text-2xl font-normal md:text-3xl">
            We have helped over <strong>450+</strong> client secure their lives
            and properties while they focus on what matters
          </p>
          <button className="self-start flex gap-2 justify-center items-center h-[8vh] px-5 bg-blue-700 text-white text-2xl rounded-lg">
            <strong>Get in touch</strong> <IoIosArrowDown />
          </button>
          <ul className="">
            {explore.map((exp) => {
              return (
                <li
                  key={exp.id}
                  className="flex items-center justify-start gap-5 p-2 md:text-xl"
                >
                  <span>{exp.icon}</span> <strong>{exp.text}</strong>
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

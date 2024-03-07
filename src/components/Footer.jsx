import { MdLocationPin } from "react-icons/md";
import { footerLinks } from "../utils";

const Consultation = () => {
  return (
    <div className="flex justify-center w-full bg-Gray">
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
  return (
    <>
      <Consultation />
      <div className="flex justify-center py-5">
        <div className="flex w-[90vw] items-center justify-between">
          <div></div>
          {footerLinks.map((details) => (
            <div key={details.id} className="flex flex-col gap-3">
              <h1 className="font-bold text-xl md:text-2xl">{details.title}</h1>
              <div className="flex flex-col gap-2">
                {details.items.map((item) => (
                  <p key={item.id} className="flex gap-2">
                    <span>{item?.icon}</span>
                    {item.item}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Footer;

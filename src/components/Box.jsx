/* eslint-disable */

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
  return (
    <div
      className={`${bgColor} flex justify-center w-[40vw] ${
        type ? "mx-2" : "mx-2"
      } my-2 h-[45vh] border-2 border-gray-300 rounded-lg md:w-[16vw]`}
    >
      <div className="flex flex-col my-3 px-2 items-center justify-between">
        <h2 className="font-bold text-base md:text-xl">{heading}</h2>
        {type ? (
          <div className="py-1">{children}</div>
        ) : (
          <img
            src={image}
            alt={`client${id}`}
            className="w-[12vw] md:w-[6vw] h-[10vh] rounded-[50%]"
          />
        )}
        <p className="text-center text-gray-800 text-sm font-normal">{desc}</p>
        {type ? (
          <button
            className={`py-2 px-4 ${buttonColor} text-white font-semibold text-xm rounded-lg`}
          >
            Choose Plan
          </button>
        ) : (
          <button className="flex gap-1">
            <span className="text-yellow-400">{rating}</span>
            <span className="text-yellow-400">{rating}</span>
            <span className="text-yellow-400 fill-yellow-400">{rating}</span>
            <span className="">{rating}</span>
          </button>
        )}
      </div>
    </div>
  );
}

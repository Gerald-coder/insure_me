import React from "react";

export default function Description({ heading, desc }) {
  return (
    <div className="my-2 px-2 py-1 rounded-lg border-2 border-gray-300">
      <h2 className="font-semibold text-2xl">{heading}</h2>
      <p className="text-gray-800 text-2sm font-normal">{desc}</p>
    </div>
  );
}

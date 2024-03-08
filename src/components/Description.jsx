import React from "react";

export default function Description({ heading, desc }) {
  return (
    <div className="my-2 px-2 py-1 rounded-lg">
      <h2 className="font-semibold text-2xl mb-2">{heading}</h2>
      <p className="text-gray-300 text-xl font-normal">{desc}</p>
    </div>
  );
}

// import { useState } from "react";
import Hero from "./components/Hero";
import Nav from "./components/Nav";
import PricingPlan from "./components/PricingPlan";
import LearnMore from "./components/LearnMore";

export default function App() {
  return (
    <>
      <div className="h-[10vh]  border-b-2 border-gray-400">
        <Nav />
      </div>
      <div className="h-[87vh] overflow-y-scroll remove-scrollbar">
        <Hero />

        <div className="flex flex-col items-center my-4">
          <LearnMore />
          <PricingPlan />
        </div>
      </div>
    </>
  );
}

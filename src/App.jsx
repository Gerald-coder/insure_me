// import { useState } from "react";
import Hero from "./components/Hero";
import Nav from "./components/Nav";
import PricingPlan from "./components/PricingPlan";
import LearnMore from "./components/LearnMore";
import Testimonials from "./components/Testimonials";
import Service from "./components/Service";
import WhatWeDo from "./components/WhatWeDo";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <div className="h-[12%] md:h-[15%] py-3 border-b-2 border-gray-400">
        <Nav />
      </div>
      <div className="h-[84vh] overflow-y-scroll remove-scrollbar !scroll-smooth">
        <Hero />
        <div className="flex flex-col items-center mt-4">
          <Service />
          <LearnMore />
          <WhatWeDo />
          <PricingPlan />
          <Testimonials />
          <Footer />
        </div>
      </div>
    </>
  );
}

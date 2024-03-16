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
    <div className="h-screen">
      <div className="h-[14%] py-3 border-b-2 border-gray-400 md:h-[15%]">
        <Nav />
      </div>
      <div className="h-[86%] overflow-y-scroll remove-scrollbar !scroll-smooth md:h-[85%]">
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
    </div>
  );
}

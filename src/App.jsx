// import { useState } from "react";
import Hero from "./components/Hero";
import Nav from "./components/Nav";

export default function App() {
  return (
    <>
      <div className="h-[10vh]  border-b-2 border-gray-400 mb-4">
        <Nav />
      </div>
      <div className="h-[88vh] overflow-y-scroll">
        <Hero />
      </div>
    </>
  );
}

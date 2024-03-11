function Hero() {
  return (
    <div className="flex justify-center mt-4 h-[100vh]" id="hero">
      <div
        className={`w-[100vw] bg-[url('/src/assets/images/house3.jpg')] bg-cover bg-center relative md:w-[90vw] md:rounded-lg`}
      >
        <div className="bg-black bg-opacity-40 text-white w-full h-full relative md:rounded-lg">
          <div className="w-[70%] absolute bottom-[8vh] left-5 flex flex-col gap-[1rem]">
            <h1 className="text-4xl font-bold leading-tight md:leading-none md:text-6xl">
              Quality Insurance with Coastal-Groups{" "}
            </h1>
            <p className="text-2xl font-normal md:text-3xl">
              From health and auto insurance to life and home insurance,
              we&apos;ve got you covered.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;

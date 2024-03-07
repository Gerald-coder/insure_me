function Hero() {
  return (
    <div className="flex justify-center my-4 h-[100vh]">
      <div
        className={`w-[100vw] bg-[url('/src/assets/images/house3.jpg')] bg-cover bg-center relative md:w-[90vw] md:rounded-lg`}
      >
        <div className="bg-black bg-opacity-40 text-white w-full h-full relative md:rounded-lg">
          <div className="w-[70%] absolute bottom-[8vh] left-5 flex flex-col gap-[1rem]">
            <h1 className="text-5xl font-bold leading-tight md:leading-none md:text-6xl">
              Protect your home and belongings with CICC-Groups
            </h1>
            <p className="text-2xl font-normal md:text-3xl">
              Get personalized insurance coverage for your health, life, homes
              and autos
            </p>
            <form className="h-[5rem] bg-inherit flex justify-between items-center px-4 rounded-lg border-2 border-gray-800">
              <input
                type="text"
                placeholder="Talk with an agent"
                className="text-2xl w-[70%] outline-none p-3 bg-inherit placeholder:text-gray-800 placeholder:text-xl placeholder:  font-semibold md:text-3xl h-full"
              />
              <button className="bg-blue-700 w-[7rem] h-[3rem] text-white text-[1.4rem] rounded-lg">
                submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;

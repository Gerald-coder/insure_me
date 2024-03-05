import house from "../assets/images/house3.jpg";

function Hero() {
  return (
    <div className="flex justify-center h-[100vh]">
      <div
        className={`w-[100vw] bg-[url('/src/assets/images/house3.jpg')] bg-cover bg-center relative md:w-[90vw]`}
      >
        <div className="bg-black bg-opacity-40 text-white w-full h-full relative">
          <div className="w-[60%] absolute bottom-[8vh] left-5 flex flex-col gap-[1rem]">
            <h1 className="text-5xl font-bold leading-none md:text-6xl">
              Protect your home and belongings with insurewise
            </h1>
            <p className="text-2xl font-normal md:text-3xl">
              Get personalized insurance coverage for your health, life, homes
              and autos
            </p>
            <form className="h-[5rem] bg-inherit flex justify-between items-center px-4 rounded-lg border-[1px]">
              <input
                type="text"
                placeholder="Talk with an agent"
                className="text-2xl w-[70%] outline-none p-3 bg-inherit placeholder:text-gray-800 placeholder:text-xl placeholder: font-semibold md:text-3xl h-full"
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

/**
 * <section className="flex justify-center bg-[#f3f5f5]">
      <main className="w-[90vw] flex justify-between h-[70vh]">
        <div className="flex-1 flex flex-col gap-7">
          <div className="flex flex-col gap-3">
            <p>
              news <span>get update news stay connected with brand</span>
            </p>
            <h1>The smarter choice for save life</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptates numquam dolorem excepturi, quibusdam perferendis
              accusamus omnis voluptate,
            </p>
          </div>
          <div>
            <p>get consultation</p>
            <div>
              <input type="text" />
              <button>signup</button>
            </div>
          </div>
          <div>
            <p>find an agent</p>
            <p>make a claim</p>
          </div>
        </div>
        <div className="flex-1 h-full border-2 border-red-300">
          <img
            src={sub}
            alt="my profile"
            className="h-full w-full border-2 border-red-300"
          />
        </div>
      </main>
    </section>
 */

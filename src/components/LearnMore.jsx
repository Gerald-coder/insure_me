import fam1 from "../assets/images/fam1.webp";
import child from "../assets/images/child.webp";
import cars2 from "../assets/images/cars2.webp";

function LearnMore() {
  return (
    <div className="flex justify-center h-[60vh] border-2 border-green-400">
      <main className="flex justify-between items-center gap-10 w-[90vw] h-full border-2 border-red-400">
        <div className="flex-1 grid grid-cols-3 gap-4 p-5 border-2 border-red-400 h-[80%]">
          <div className="col-span-2 h-full">
            <img src={fam1} alt="fam1" className="h-full rounded-lg" />
          </div>{" "}
          <div className="grid grid-cols-1 grid-rows-2 gap-4 h-full">
            <img src={child} alt="child" className="h-full rounded-lg" />
            <img src={cars2} alt="car" className="h-full rounded-lg" />
          </div>
        </div>
        <div className="flex-1 border-2 border-red-400">
          <h1>
            New to Insurance? <strong>No Problem</strong>
          </h1>
          <p>
            We have helped over <strong>450+</strong> client secure their lives
            and properties while they focus on what matters
          </p>
          <p>
            <strong>Get in touch</strong>
          </p>
        </div>
      </main>
    </div>
  );
}

export default LearnMore;

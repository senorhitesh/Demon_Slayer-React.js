import { MousePointer2, MousePointerClick } from "lucide-react";

const HeroBtn = () => {
  return (
    <>
      <button className="z-2 overflow-hidden rounded-full scale-60 group text-sm absolute   transtion duration-700 -left-3 top-34 bg-[#fb5607] text-shadow-2xl shadow-2xl ">
        <div className="relative mx-4 my-1  overflow-hidden">
          <p className="flex justify-center gap-2 group text-lg items-center font-bold group-hover:-translate-y-7 duration-[1.125s] ease-[cubic-bezier(0.19,1,0.22,1)]">
            {" "}
            WATCH TRAILER{" "}
            <span>
              <MousePointer2 className="rotate-90 transition ease-out" />
            </span>
          </p>
          <p className="inset-0 absolute flex justify-center gap-2  group text-lg font-bold items-center  top-13 left-0 group-hover:top-0 duration-[1.125s] ease-[cubic-bezier(0.19,1,0.22,1)] group-hover/arrow:delay-200 ">
            {" "}
            Click Me{" "}
            <span>
              <MousePointerClick />
            </span>
          </p>
        </div>
      </button>
    </>
  );
};

export default HeroBtn;

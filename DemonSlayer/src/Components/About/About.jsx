import Card from "../Card";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useState } from "react";

const About = () => {
  const [activeName, setactiveName] = useState("");
  return (
    <div id="trio" className="h-[50vh] relative items-center flex flex-col">
      <div id="trio-text" className="mt-30 font-black ">
        <p
          style={{ fontFamily: "Primary" }}
          className="text-slate-800 text-8xl"
        >
          The LEGENDARY TRIO
        </p>
      </div>
      <div className=" relative w-full flex   justify-center ">
        <p
          style={{ fontFamily: "Dm Sans" }}
          className="absolute text-slate-400  -z-1 font-extrabold text-[22rem]"
        >
          {activeName}
        </p>
        <Card activeName={activeName} setactiveName={setactiveName} />
      </div>
    </div>
  );
};

export default About;

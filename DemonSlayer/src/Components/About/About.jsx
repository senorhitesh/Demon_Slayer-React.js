import Card from "../Card";

const About = () => {
  return (
    <div className="h-[50vh] items-center flex flex-col">
      <div className="mt-30 font-black ">
        <p
          style={{ fontFamily: "Primary" }}
          className="text-slate-800 text-8xl"
        >
          The LEGENDARY TRIO
        </p>
      </div>
      <div className="w-full flex  justify-center ">
        <Card />
      </div>
    </div>
  );
};

export default About;

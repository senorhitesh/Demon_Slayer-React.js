import React from "react";

const HeroInfo = () => {
  return (
    <>
      {/* Title */}
      <p
        style={{ fontFamily: "Primary" }}
        className="absolute z-100 left-8 top-8 pointer-events-none text-4xl  font-bold tracking-wide mix-blend-difference lg:text-7xl md:text-6xl  sm:text-6xl"
      >
        DEMON SLAYER
      </p>
      {/* Description */}
      <p
        style={{ fontFamily: "Dm Sans" }}
        className="absolute pointer-events-none left-8 top-20 min-[334px]:text-[.8rem] max-w-md lg:max-w-2xl md:max-w-md md:text-[1.1rem] sm:max-w-md sm:text-[1.1rem]   text-[.7rem] leading-relaxed opacity-90 lg:top-26 md:top-24 sm:top-24 lg:text-[1.2rem]"
      >
        The destination of where Tanjiro and Demon Slayer Corps have fallen is
        the demons’ stronghold – the Infinity Castle.
      </p>
    </>
  );
};

export default HeroInfo;

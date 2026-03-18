import React from "react";

const HeroInfo = () => {
  return (
    <>
      {/* Title */}
      <p
        style={{ fontFamily: "Primary" }}
        className="absolute left-8 top-8 text-4xl  font-bold tracking-wide mix-blend-difference"
      >
        DEMON SLAYER
      </p>
      {/* Description */}
      <p
        style={{ fontFamily: "Dm Sans" }}
        className="absolute left-8 top-20 max-w-md text-[.7rem] leading-relaxed opacity-90"
      >
        The destination of where Tanjiro and Demon Slayer Corps have fallen is
        the demons’ stronghold – the Infinity Castle.
      </p>
    </>
  );
};

export default HeroInfo;

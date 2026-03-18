// Hero.jsx
import React, { useState, useRef } from "react";
import hero1 from "../assets/hero-videos/hero-1.mp4";
import hero2 from "../assets/hero-videos/hero-2.mp4";
import hero3 from "../assets/hero-videos/hero-3.mp4";
import hero4 from "../assets/hero-videos/hero-4.mp4";
import BottomText from "./Hero/BottomText";
import HeroBtn from "./Hero/HeroBtn";
import HeroInfo from "./Hero/HeroInfo";

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const hoverRef = useRef(null);

  const videos = [hero1, hero2, hero3, hero4];
  const currentVideo = videos[currentIndex];
  const nextVideo = videos[(currentIndex + 1) % videos.length];

  const handleClick = () => {
    setCurrentIndex((prev) => (prev + 1) % videos.length);
  };

  return (
    <div className="relative h-screen w-screen">
      {/* Bg-Video */}
      <div className="absolute inset-0 z-0">
        <video
          key={currentVideo}
          src={currentVideo}
          autoPlay
          muted
          loop
          className="absolute top-0 left-0 w-full h-screen object-cover"
        />
      </div>

      {/* Center Hover Video */}
      <div className="absolute inset-0 z-10 flex items-center justify-center">
        <div
          onClick={handleClick}
          className="overflow-hidden rounded-md group opacity-0 hover:opacity-100 transition-opacity duration-200 cursor-pointer"
        >
          <video
            key={currentIndex}
            ref={hoverRef}
            src={nextVideo}
            muted
            loop
            className="object-cover size-64 scale-100 group-hover:scale-110 transition duration-300"
            onMouseEnter={() => hoverRef.current?.play()}
            onMouseLeave={() => hoverRef.current?.pause()}
          />
        </div>
      </div>

      {/* UI Layer */}
      <div className="relative w-full h-screen z-20 text-white pointer-events-none">
        <HeroInfo />
        <BottomText />
        <div className="pointer-events-auto">
          <HeroBtn />
        </div>
      </div>
    </div>
  );
};

export default Hero;

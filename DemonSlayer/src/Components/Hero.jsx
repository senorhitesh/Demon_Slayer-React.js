import React, { useState } from "react";
import { useRef } from "react";
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
    // Main Content
    <div className="relative h-screen w-screen">
      {/* Bg-Video - BEHIND everything */}
      <div
        id="video-frame"
        className="absolute inset-0 flex items-center justify-center z-0"
      >
        <video
          key={currentVideo}
          src={currentVideo}
          autoPlay
          muted
          loop
          className="absolute top-0 left-0 w-full h-screen object-cover"
        />
        {/* Center-Video */}
        <div
          className="overflow-hidden absolute z-10 w-fit group rounded-md opacity-0 hover:opacity-100 transition-opacity duration-200 ease-linear"
          onClick={handleClick}
        >
          <video
            key={currentIndex}
            ref={hoverRef}
            src={nextVideo}
            muted
            loop
            id="current-video"
            className="object-center scale-100 group-hover:scale-120 transition duration-75 object-cover size-64"
            onMouseEnter={(e) => e.target.play()}
            onMouseLeave={(e) => e.target.pause()}
            onClick={handleClick}
          />
        </div>
      </div>

      {/* UI Layer - ABOVE video */}
      <div className="relative w-full h-screen z-20 text-white pointer-events-none">
        <HeroInfo />
        <HeroBtn />
        <BottomText />
      </div>
    </div>
  );
};

export default Hero;

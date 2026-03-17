import React, { useState } from "react";
import { useRef } from "react";
import hero1 from "../assets/hero-videos/hero-1.mp4";
import hero2 from "../assets/hero-videos/hero-2.mp4";
import hero3 from "../assets/hero-videos/hero-3.mp4";
import hero4 from "../assets/hero-videos/hero-4.mp4";

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
    <div className="relative h-full w-screen ">
      {/* Bg-Video */}
      <div
        id="video-frame"
        className="h-screen flex justify-center items-center"
      >
        <video
          key={currentVideo}
          src={currentVideo}
          autoPlay
          muted
          loop
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
        <div className="clip-path-[polygon(0_0,100%_0,100%_100%,0_100%)] cursor-pointer  overflow-hidden rounded-lg"></div>
        {/* Center-Video */}
        <div
          className="overflow-hidden  w-fit group rounded-md group opacity-0 hover:opacity-100 transition-opacity duration-200 ease-linear"
          onClick={() => {
            handleMiniVdClick();
          }}
        >
          <video
            key={currentIndex}
            ref={hoverRef}
            src={nextVideo}
            muted
            loop
            id="current-video"
            className="object-center scale-100 group-hover:scale-120 transition duration-75 object-cover size-64 "
            // onLoadedData={handleVideoLoaded}
            onMouseEnter={(e) => {
              e.target.play();
            }}
            onMouseLeave={(e) => {
              e.target.pause();
            }}
            onClick={handleClick}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;

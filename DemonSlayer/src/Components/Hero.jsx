// Hero.jsx
import React, { useState, useRef } from "react";
import hero1 from "../assets/hero-videos/hero-1.mp4";
import hero2 from "../assets/hero-videos/hero-2.mp4";
import hero3 from "../assets/hero-videos/hero-3.mp4";
import hero4 from "../assets/hero-videos/hero-4.mp4";
import BottomText from "./Hero/BottomText";
import HeroBtn from "./Hero/HeroBtn";
import HeroInfo from "./Hero/HeroInfo";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hasClicked, sethasClicked] = useState(false);
  const hoverRef = useRef(null);

  useGSAP(() => {
    gsap.set("#bg-video", {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)", // start: full screen
      borderRadius: "0",
    });

    gsap.to("#bg-video", {
      clipPath: "polygon(9% 0, 90% 0, 95% 90%, 0 100%)",
      borderRadius: "0 0 40% 10%",
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: "#hero-section",
        start: "top top",
        end: "bottom center",
        scrub: true,
      },
    });
  });

  const videos = [hero1, hero2, hero3, hero4];
  const currentVideo = videos[currentIndex];
  const nextVideo = videos[(currentIndex + 1) % videos.length];

  const handleClick = () => {
    sethasClicked(true);
    setCurrentIndex((prev) => (prev + 1) % videos.length);
  };

  return (
    <>
      <div id="bg-video-wrapper" className="relative h-screen w-screen ">
        {/* Bg-Video */}
        <div id="bg-video" className="absolute  inset-0 z-0">
          <video
            id="current-video"
            key={currentVideo}
            src={currentVideo}
            // autoPlay
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
              id="next-video"
              key={currentIndex}
              ref={hoverRef}
              src={nextVideo}
              muted
              loop
              className="object-cover size-64 scale-100 group-hover:scale-110 transition duration-300"
              onMouseEnter={() => hoverRef.current?.play()}
              onMouseLeave={() => {
                hoverRef.current?.pause();
                sethasClicked(false);
              }}
            />
          </div>
        </div>
        <BottomText />
        {/* UI Layer */}
        <div className="relative w-full h-screen z-20 text-white pointer-events-none">
          <HeroInfo />

          <div className="pointer-events-auto">
            <HeroBtn />
          </div>
          {/* Move this OUTSIDE the z-20 UI div, as its own layer */}
        </div>
      </div>
    </>
  );
};

export default Hero;

import React, { useState } from 'react'
import { useRef } from 'react';
import hero1 from "../assets/videos/hero-1.mp4";
import hero2 from "../assets/videos/hero-2.mp4";

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [hasClicked, sethasClicked] = useState(false);
  const [isLoading, setisLoading] = useState(true)
  const [loadedVds, setloadedVds] = useState(0);

  const totalVideos = 4;
  const videoRef = useRef(null);
  
  const videos = [hero1, hero2];

  const handleMiniVdClick = () => {
    sethasClicked(true)
    setCurrentIndex((previousVal) => previousVal + 1);
  }
  const handleVideoLoaded = () => {
    setloadedVds((prev) => prev + 1)
  }
//
  const getVideoSource = (index) => `/videos/hero-${index}.mp4`;

  return (
    // Main Content
    <div className='relative h-full w-screen '>
      {/* Bg-Video */}
      <div id="video-frame" className='h-screen flex justify-center items-center'>
        
        <div className='clip-path-[polygon(0_0,100%_0,100%_100%,0_100%)] cursor-pointer  overflow-hidden rounded-lg'></div>
                {/* Center-Video */}
                <div className='overflow-hidden  w-fit group rounded-md group hover:opacity-100 transition-opacity duration-200 ease-linear'
                         onClick={() => {
                         handleMiniVdClick()
                          }} >
                         <video
                           ref={videoRef}
                           src={videos[currentIndex]}
                           muted
                           loop
                           id="current-video"
                           className='object-center scale-100 group-hover:scale-120 transition duration-75 object-cover size-64'
                           onLoadedData={handleVideoLoaded}
                         />
                </div>
          </div>
    </div>
  )
}

export default Hero



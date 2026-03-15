import React, { useState } from 'react'
import { useRef } from 'react';
import hero1 from "../assets/videos/hero-1.mp4";
import hero2 from "../assets/videos/hero-2.mp4";

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState( 1);
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
      <div className='relative overflow-x-hidden h-ful w-screen '>
          <div id="video-frame" className='relative z-10 h-dvh w-fit overflow-hidden rounded-lg'>
              <div className='clip-path-[polygon(0_0,100%_0,100%_100%,0_100%)] cursor-pointer  overflow-hidden rounded-lg'></div>
        <div className='overflow-hidden w-fit border-4 rounded-md group hover:opacity-100 transition-opacity duration-500 ease-linear'
          onClick={() => {
                 handleMiniVdClick()
                        }} >
                         <video
                           ref={videoRef}
                           src={videos[currentIndex]}
                           muted
                           loop
                           id="current-video"
                           className='object-center absolute top-1/2   object-cover size-54'
                           onLoadedData={handleVideoLoaded}
                         />
                </div>
          </div>
    </div>
  )
}

export default Hero
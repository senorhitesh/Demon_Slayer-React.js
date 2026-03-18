import React from "react";

const SoundBtn = ({ isMuted, toggleMute }) => {
  return (
    <>
      <button
        onClick={toggleMute}
        className="absolute top-6 right-6 pointer-events-auto z-30
                     w-10 h-10 flex items-center justify-center
                     rounded-full border border-white/60 bg-black/30
                     backdrop-blur-sm text-white text-lg
                     hover:bg-white hover:text-black transition-all duration-200"
      >
        {isMuted ? "🔇" : "🔊"}
      </button>
    </>
  );
};

export default SoundBtn;

import React from "react";

const Video = () => {
  return (
    <video
      className="w-full h-full object-cover pointer-events-none"
      autoPlay
      loop
      muted
      playsInline
      src="https://cdn.jsdelivr.net/gh/shubhamkx34/f90-assets@main/M5csE.mp4"
    />
  );
};

export default Video;
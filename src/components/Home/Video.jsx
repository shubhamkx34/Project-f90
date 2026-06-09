import React from "react";

const video = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      <video
        className="absolute top-0 left-0 h-full w-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        src="https://cdn.jsdelivr.net/gh/shubhamkx34/M5CS-assets@main/M5csE.mp4"
      ></video>
    </div>
  );
};

export default video;



import React from "react";

const Machine = () => {
  return (
    <div className="bg-white min-h-screen w-full flex flex-col overflow-x-hidden ">
      <div className="absolute rounded-full top-[13vw] left-[37vw] h-[21vw] w-[21vw] overflow-hidden ">
        <img className="h-full w-full object-cover" src="/img8.jpg" alt="" />
      </div>
      <div>
        <div className=" relative mt-[55vh] w-full flex justify-center">
          <h1 className="text-[20vw] text-black font-[font2] leading-[17vw] uppercase text-center">
            Six-<br></br>Thirty<br></br>five
          </h1>
        </div>
        <div className="text-right mt-2 pr-19 mb-2 ">
          <p className="text-black text-[3.5vw] font-semibold leading-[3.8vw] tracking-tighter">
            Our racing heritage <br />
            nourishes our <span className="text-red-800">performance</span> . We{" "}
            <br /> stay focused and say no to extra weight, <br /> cutting
            exactly 70 kilograms to craft agility. A true
            <br />
            sports car is <span className="text-blue-800">alive</span>. It has
            dynamics, a personality, a legacy
            <br />
            dating back to 1984. If we forget that, we can build quick
            <br />
            straight-line sedans, but we ruin them in corners. <br /> That's why
            we are committed to relentless <br />
            Engineering to forge absolute, <br /> untouchable legends.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Machine;

import React from "react";
import { Link } from "react-router-dom";


const Home_bottom = () => {
  return (
    <div className="font-[font2] flex flex-col mt-12 lg:mt-5 ">
      <p className=" lg:text-sm lg:tracking-widest text-sm tracking-wider leading-6 ">
        The M5 CS is an apex predator that calculates every millisecond
        <br></br>
        to dominate the track. Born from 40 years
        <br></br>
        of M legacy, it strips away the <br></br> unnecessary to<br></br>
        deliver the pure <br></br>drive experience.We crave the<br></br>
        friction that ignites the tires to generate <br></br>
        Pure adrenaline. Filterless, it roars aloud and strikes on command.
      </p>
      <div className="flex items-center justify-between lg:pt-0 pt-8 lg:mt-10 lg:px-10 lg:mb-1  gap-1 ">
        <Link
          className="border-2 lg:border-3 hover:border-blue-950 hover:text-blue-800 rounded-full  overflow-hidden text-[7vw] pt-3 leading-12 px-1 lg:px-10 lg:pt-2 lg:leading-28 lg:text-[6vw]"
          to="/records"
        >
          TRACK RECORDS
        </Link>
        <Link
          className="border-2 lg:border-3  hover:border-red-950 hover:text-red-800 rounded-full overflow-hidden text-[7vw] pt-3 lg:text-[6vw] px-1 leading-12 lg:px-10 lg:leading-28 lg:pt-2 "
          to="/machine"
        >
          MACHINE
        </Link>
        <link></link>
      </div>
    </div>
  );
};

export default Home_bottom;

import React from "react";
import { Link } from "react-router-dom";


const Home_bottom = () => {
  return (
    <div className="font-[font2] flex flex-col mt-5">
      <p className=" text-sm tracking-widest">
        The M5 CS is an apex predator that calculates every millisecond
        <br></br>
        to dominate the track. Born from 40 years
        <br></br>
        of M legacy, it strips away the <br></br> unnecessary to<br></br>
        deliver the pure <br></br>drive experience.We crave the<br></br>
        friction that ignites the tires to generate <br></br>
        Pure adrenaline. Filterless, it roars aloud and strikes on command.
      </p>
      <div className="flex items-center justify-between mt-10 px-10 mb-1  ">
        <Link
          className="border-3 hover:border-blue-950 hover:text-blue-800 rounded-full  overflow-hidden px-10 pt-2 leading-28 text-[6vw]"
          to="/records"
        >
          TRACK RECORDS
        </Link>
        <Link
          className="border-3  hover:border-red-950 hover:text-red-800 rounded-full overflow-hidden text-[6vw] px-10 leading-28 pt-2 "
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

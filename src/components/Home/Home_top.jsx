import React from "react";
import Video from "./Video";

const Home_top = () => {
  return (
    <div className="  ">
      <div className="font-[font1] text-[9vw] leading-34 ">
        The <span className="text-red-800">monster</span>
      </div>
      <div className="font-[font1] text-[9vw] leading-34 flex items-center justify-center">
        that
        <div className="w-[19vw] h-[8vw] rounded-full overflow-hidden shrink-0">
          <Video />
        </div>
      </div>
      <div className="font-[font1] text-[9vw] leading-[1.1] flex items-center justify-center gap-[2vw] mt-7">
        devours the
      </div>
      <div className="font-[font1] text-[9vw] leading-34 flex items-center justify-center text-blue-800">
        tarmac
      </div>
    </div>
  );
};

export default Home_top;
//

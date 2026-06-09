import React from "react";
import Video from "../components/Home/Video";
import Home_top from '../components/Home/Home_top';
import Home_bottom from "../components/Home/Home_bottom";
const Home = () => {
  return (
    <div>
      <div className="min-h-screen w-screen fixed" >
        <Video />
      </div>
      <div className="h-screen w-screen relative flex flex-col">
    <Home_top />
    <Home_bottom />
      </div>
    </div>
  );
};

export default Home;

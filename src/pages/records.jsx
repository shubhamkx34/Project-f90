import React from "react";
import Record from "../components/Records/record";
import IMG6 from "../../public/record6.png";
import IMG7 from "../../public/record7.png";
import gsap from "gsap/all";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Records = () => {
  const data = [
    {
      img: "https://media.easy-peasy.ai/1dc237bf-e779-4302-994d-9cd4cb0860d6/1bf3646b-078a-4391-963b-bf466bb60c49_medium.webp",
      text: (
        <>
          Nordschleife <br /> Lap Time
        </>
      ),
    },
    {
      img: "https://images.caricos.com/b/bmw/2022_bmw_m5_cs/images/1600x1200/2022_bmw_m5_cs_147_1600x1200.jpg",
      text: (
        <>
          {" "}
          0-100 KMPH <br /> Sprint
        </>
      ),
    },
    {
      img: "https://images.caricos.com/b/bmw/2022_bmw_m5_cs/images/1600x1200/2022_bmw_m5_cs_137_1600x1200.jpg",
      text: (
        <>
          S63 Twin-Turbo <br /> V8
        </>
      ),
    },
    {
      img: "https://i0.wp.com/theauto.page/wp-content/uploads/2021/01/Scoop-M5-CS-1.jpg?fit=1024%2C682&ssl=1",
      text: (
        <>
          Hockenheim <br /> GP{" "}
        </>
      ),
    },
    {
      img: "https://images.caricos.com/b/bmw/2022_bmw_m5_cs/images/1600x1200/2022_bmw_m5_cs_9_1600x1200.jpg",
      text: <> Carbon Diet</>,
    },
    {
      img: [IMG6],
      text: (
        <>
          V-Max Velocity
          <br />
        </>
      ),
    },
    {
      img: [IMG7],
      text: (
        <>
          Lightning Lap
          <br />
        </>
      ),
    },
    {
      img: "https://mediapool.bmwgroup.com/cache/P9/202309/P90523621/P90523621-the-bmw-m5-cs-motogp-safety-car-09-2023-2250px.jpg",
      text: (
        <>
          MotoGP Safety Car <br />
          2021
        </>
      ),
    },
  ];

  gsap.registerPlugin(ScrollTrigger);
  useGSAP(() => {
    gsap.from(".stag", {
      y: 360,
      delay:0.5,
      duration: 1.5,

    });
  });

  return (
    <div className="h-screen w-full overflow-x-hidden bg-white p-2">
      <div className="pt-[32vh]">
        <h1 className="uppercase text-[12vw] text-black font-[font2]">Records</h1>
      </div>

      <div className="stag w-full flex flex-wrap mt-[-3.5vh]">
        {data.map(function (elem, index) {
          return  <Record key={index} image={elem.img} hoverText={elem.text} />;
        })}
      </div>
    </div>
  );
};

export default Records;

//https://images.caricos.com/b/bmw/2022_bmw_m5_cs/images/1600x1200/2022_bmw_m5_cs_124_1600x1200.jpg

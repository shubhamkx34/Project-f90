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
      text:  <>Nordschleife Lap Time <br/> 7:29.57 </>
    },
    {
      img: "https://images.caricos.com/b/bmw/2022_bmw_m5_cs/images/1600x1200/2022_bmw_m5_cs_147_1600x1200.jpg",
      text: <> 0-100 KMPH Sprint <br />2.6 SEC</>
    },
    {
      img: "https://images.caricos.com/b/bmw/2022_bmw_m5_cs/images/1600x1200/2022_bmw_m5_cs_137_1600x1200.jpg",
      text:<>  S63 Twin-Turbo  V8<br /> 627 HP</>
    },
    {
      img: "https://i0.wp.com/theauto.page/wp-content/uploads/2021/01/Scoop-M5-CS-1.jpg?fit=1024%2C682&ssl=1",
      text: <> Hockenheim GP<br /> 1:53.6</>
    },

    {
      img: "https://images.caricos.com/b/bmw/2022_bmw_m5_cs/images/1600x1200/2022_bmw_m5_cs_9_1600x1200.jpg",
      text: <>Carbon Diet <br />154 LBS</> 
    },
    {
      img: [IMG6],
      text: <>V-Max Velocity<br/>305 KMPH</>
    },
    {
      img:[IMG7],
      text:<> Lightning Lap<br />2:50.3</> },
    {
      img: "https://mediapool.bmwgroup.com/cache/P9/202309/P90523621/P90523621-the-bmw-m5-cs-motogp-safety-car-09-2023-2250px.jpg",
      text:<> MotoGP LEAD<br/> Safety Car  2021</>
    },
  ];

  gsap.registerPlugin(ScrollTrigger);
  useGSAP(() => {
    gsap.from(".stag", {
      y: 360,
      delay: 0.5,
      duration: 1.5,
    });
    gsap.from(".thin", {
      height: "17vh",
      scrollTrigger: {
        trigger: ".stag",
        scroller: "#main",
       
        start: "top 90%",
        end: "bottom 0%",
        scrub: 2,
      },
    });
  });
  return (
    <div id="main" className="h-screen w-full overflow-y-auto overflow-x-hidden bg-white p-2">
      <div className="pt-[32vh]">
        <h1 className="uppercase text-[12vw] text-black font-[font2]">Records</h1>
      </div>

      <div className="stag w-full  flex flex-wrap mt-[-3.5vh]">
        {data.map(function (elem, index) {
          return (
            <div className="thin w-1/2 h-[70vh] p-1 ">
              <Record key={index} image={elem.img} hoverText={elem.text} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Records;

//https://images.caricos.com/b/bmw/2022_bmw_m5_cs/images/1600x1200/2022_bmw_m5_cs_124_1600x1200.jpg

//  y: 360,
//       delay:0.5,
//       duration: 1.5,

// height:0,
//     scrollTrigger:{
//       trigger:'.stag',
//       markers:true,
//       start:'top 65%',
//       end:'end -150%'
//     }

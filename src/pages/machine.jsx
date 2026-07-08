import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React, { useRef, useEffect } from "react";

const Machine = () => {
  gsap.registerPlugin(ScrollTrigger);
  const imageDivRef = useRef(null);
  const imgRef = useRef(null);
  const imgarray = ["/img1.jpg", "/img2.jpg", "/img3.jpg", "/img4.jpg", "/img5.jpg", "/img6.jpg", "/img7.jpg", "/img8.jpg", "/img9.jpg"];
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  useGSAP(() => {
    gsap.to(imageDivRef.current, {
      scrollTrigger: {
        trigger: imageDivRef.current,
        start: "top 25.8%",
        end: "top -160%",
        scrub: 2,
        pin: true,
        onUpdate: (elem) => {
          //Image scrolling with gsap animations
          const imgindex = Math.min(Math.floor(elem.progress * imgarray.length), imgarray.length - 1);
          //Math.min( [Whatever number your scroll calculates] , 8 )
          imgRef.current.src = imgarray[imgindex];
        },
      },
    });
  });

  return (
    <div className="bg-white min-h-screen w-full flex flex-col overflow-x-hidden ">
      <div ref={imageDivRef} className="  absolute  rounded-full top-[12vw] left-[38vw] h-[22vw] w-[22vw] overflow-hidden ">
        <img ref={imgRef} className="h-full w-full object-cover" />
      </div>
      <div className="relative ">
        <div className="mt-[55vh] w-full flex justify-center">
          <h1 className="text-[20vw] text-black font-[font2] leading-[17vw] uppercase text-center">
            Six-<br></br>Thirty<br></br>five
          </h1>
        </div>
        <div className="text-right mt-2 pr-19 mb-2 h-[85vw] ">
          <p className="text-black text-[3.5vw] font-semibold leading-[3.8vw] tracking-tighter">
            Our racing heritage <br />
            nourishes our <span className="text-red-800">performance</span> . We <br /> stay focused and say no to extra weight, <br /> cutting
            exactly 70 kilograms to craft agility. A true
            <br />
            sports car is <span className="text-blue-800">alive</span>. It has dynamics, a personality, a legacy
            <br />
            dating back to 1984. If we forget that, we can build quick
            <br />
            straight-line sedans, but we ruin them in corners. <br /> That's why we are committed to relentless <br />
            Engineering to forge absolute, <br /> untouchable legends.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Machine;

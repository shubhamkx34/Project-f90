import React from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import { useLocation } from "react-router-dom";

const Zig = (props) => {
  const currentPath = useLocation().pathname; //used for Applying GSAP only when making page Transitions

  const zigref = useRef(null);
  const pageref = useRef(null);

  useGSAP(() => {
    const tml = gsap.timeline();

    // Show overlay
    tml.set(zigref.current, {
      display: "flex",
    });

    // Animate bars growing and sliding down
    tml.from(
      ".zig",
      {
        height: 0,
        duration: 0.3,
        stagger: {
          amount: -0.18,
        },
      },
      0,
    );

    tml.to(".zig", {
      y: "100%",
      duration: 0.4,
      stagger: {
        amount: -0.18,
      },
    });

    // Hide overlay
    tml.set(zigref.current, {
      display: "none",
    });
  }, [currentPath]);

  return (
    <>
      <div
        ref={zigref}
        className="h-screen w-full flex fixed z-50 top-0  pointer-events-none"
      >
        <div className="zig h-full w-1/5 bg-black"></div>
        <div className="zig h-full w-1/5 bg-black"></div>
        <div className="zig h-full w-1/5 bg-black"></div>
        <div className="zig h-full w-1/5 bg-black"></div>
        <div className="zig h-full w-1/5 bg-black"></div>
      </div>
      <div ref={pageref}>{props.children}</div>
    </>
  );
};

export default Zig;

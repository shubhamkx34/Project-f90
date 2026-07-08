import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useLocation } from "react-router-dom";

const Zig = (props) => {
  // 1. TRACKING THE URL
  // useLocation gives us the current URL path (like "/" or "/machine").
  // We store it in a variable [currentpath] so we can tell GSAP to re-run the animation every time this path changes.
  const currentPath = useLocation().pathname;

  const zigref = useRef(null);
  const pageref = useRef(null);

  // useGSAP is a special React hook built by GSAP to automatically handle cleanup and prevent memory leaks.
  useGSAP(() => {
    const tl = gsap.timeline();

    //It is used to make all the black div's in row format
    tl.set(zigref.current, { display: "flex" });

    // STEP B: SET STARTING POSITIONS,scaleY: 0 makes them completely flat (invisible).transformOrigin: "top" anchors them to the ceiling so they will grow downwards.
    tl.set(".zig", {
      scaleY: 0,
      transformOrigin: "top",
    });

    // STEP C: ANIMATE IN (THE DROPDOWN)
    // We animate scaleY to 1 (100% full height).stagger: 0.05 tells GSAP to wait 0.05 seconds before dropping the next bar in the row, creating the "staircase" wipe.
    tl.to(".zig", {
      scaleY: 1,
      duration: 0.3,
      ease: "power2.inOut",
      stagger: -0.05,
    });

    // STEP D: FLIP THE ANCHOR POINT
    tl.set(".zig", {
      transformOrigin: "bottom",
    });

    // STEP E: ANIMATE OUT (THE SHRINK),We shrink the bars back to 0.,Because the anchor is now at the bottom, they pull upwards from the floor, revealing the new page underneath
    tl.to(".zig", {
      scaleY: 0,
      duration: 0.3,
      ease: "power2.inOut",
      stagger: -0.05,
    });

    // STEP F: HIDE THE WRAPPER, The animation is over. We hide the wrapper again
    tl.set(zigref.current, { display: "none" });

    // 4. THE DEPENDENCY ARRAY
    // This tells React: "Any time 'currentPath' changes, re-run this entire useGSAP block."
  }, [currentPath]);

  return (
    <>
      <div ref={zigref} style={{ display: "none" }} className="h-screen w-full flex fixed z-999 top-0 pointer-events-none">
        <div className="zig h-full w-1/5 bg-black" />
        <div className="zig h-full w-1/5 bg-black" />
        <div className="zig h-full w-1/5 bg-black" />
        <div className="zig h-full w-1/5 bg-black" />
        <div className="zig h-full w-1/5 bg-black" />
      </div>

{/* Renders the actual active page content (Home, Machine, etc.) safely underneath the animation.
The pageref hooks this content layer to GSAP so you can easily animate the page itself later. */}
      <div ref={pageref}>{props.children}</div>
    </>
  );
};

export default Zig;

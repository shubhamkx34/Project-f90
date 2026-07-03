import React from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import { useLocation } from "react-router-dom";

const Zig = (props) => {
  const currentPath = useLocation().pathname;

  const zigref = useRef(null);
  const pageref = useRef(null);

  useGSAP(() => {
    const tml = gsap.timeline({ defaults: { ease: "power2.inOut" } });

    // Show overlay instantly
    tml.set(zigref.current, { display: "flex" });

    // Reset bars: anchored at top, scaled to 0 (invisible but full height reserved)
    tml.set(".zig", {
      scaleY: 0,
      transformOrigin: "top center",
      force3D: true,       // force GPU layer upfront
    });

    // Phase 1: bars drop IN — staggered left to right (ladder effect)
    tml.to(".zig", {
      scaleY: 1,
      duration: 0.28,
      ease: "power2.in",
      stagger: {
        each: 0.045,       // fixed per-bar delay (predictable, no overlap weirdness)
        from: "start",
      },
    });

    // Phase 2: bars slide OUT downward — same stagger direction = clean wipe
    tml.to(".zig", {
      scaleY: 0,
      transformOrigin: "bottom center",
      duration: 0.28,
      ease: "power2.out",
      stagger: {
        each: 0.045,
        from: "start",
      },
    });

    // Hide overlay — no delay needed, scaleY:0 already hides bars
    tml.set(zigref.current, { display: "none" });

  }, [currentPath]);

  return (
    <>
      {/* Overlay: hidden by default, shown only during transition */}
      <div
        ref={zigref}
        style={{ display: "none" }}
        className="h-screen w-full flex fixed z-50 top-0 pointer-events-none"
      >
        <div className="zig h-full w-1/5 bg-black" />
        <div className="zig h-full w-1/5 bg-black" />
        <div className="zig h-full w-1/5 bg-black" />
        <div className="zig h-full w-1/5 bg-black" />
        <div className="zig h-full w-1/5 bg-black" />
      </div>

      <div ref={pageref}>{props.children}</div>
    </>
  );
};

export default Zig;

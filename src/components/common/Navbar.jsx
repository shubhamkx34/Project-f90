import React from "react";
import F90 from "../../assets/F-90.svg";
import { Link, useNavigate } from "react-router-dom";
import { RiMenu4Fill } from "react-icons/ri";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className="flex items-start justify-between h-[4.5vw]">
      <div className="h-full">
        <button
          className="cursor-pointer h-full"
          onClick={() => {
            navigate("/");
          }}
        >
          <img className="h-full pt-2" src={F90} alt="F-90 Logo" />
        </button>
      </div>
      <div className="h-11.5 w-[16.5vw] ">
        <div className=" h-full w-full cursor-pointer bg-black hover:bg-red-800">
          <button className="cursor-pointer">
            <RiMenu4Fill />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

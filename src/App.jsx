import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from './pages/home'
import Machine from "./pages/machine";
import Records from "./pages/records";

const App = () => {
  return (
    <div className="w-screen min-h-screen text-4xl bg-black text-white">
      
    <div className="h-screen w-full fixed z-1">
      <div className="h-full w-1/5 bg-black "></div>
    </div>
      
      
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/machine" element={<Machine />} />
        <Route path="/records" element={<Records />} />
      </Routes>
    </div>
  );
};

export default App;

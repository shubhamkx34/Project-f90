import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Machine from "./pages/machine";
import Records from "./pages/records";
import Navbar from "./components/common/Navbar";
import FullNav from "./components/common/FullNav";

const App = () => {
  return (
    <div className="w-screen min-h-screen text-4xl text-white">
      <div className="relative z-50">
        <Navbar />
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/fullnav" element={<FullNav />} />
        <Route path="/machine" element={<Machine />} />
        <Route path="/records" element={<Records />} />
      </Routes>
    </div>
  );
};

export default App;

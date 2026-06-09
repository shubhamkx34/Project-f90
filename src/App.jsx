import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from './pages/Home'
import Dna from "./pages/Dna";
import Details from "./pages/Details";

const App = () => {
  return (
    <div className="w-screen min-h-screen text-4xl text-white">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dna" element={<Dna />} />
        <Route path="/details" element={<Details />} />
      </Routes>
    </div>
  );
};

export default App;

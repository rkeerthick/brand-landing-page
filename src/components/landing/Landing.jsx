import React from "react";
import Navbar from "../navbar/Navbar";
import MainSection from "../mainsection/MainSection";
import "./Landing.css"

const Landing = () => {
  return (
    <div className="landing">
      <Navbar />
      <MainSection />
    </div>
  );
};

export default Landing;

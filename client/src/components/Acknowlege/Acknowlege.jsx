import React from "react";
import "./Acknowlege.css";
import InfiniteSlider from "../Utilites/InfiniteSilder/InfiniteSlider";

const Acknowlege = () => {
  
  return (
    <section className="Acknowlege-container">
      <h1 className="ackn-heading">
        <span className="ack-color">Industry-Leading</span>
        <br></br>
        Certification Preparation
      </h1>
      <p className="ackn-para">
        Explore our on-demand courses developed by seasoned certifeid
        cybersecurity practitioners,aligned to the certification exam's key
        learning objectives.
      </p>
      <button className="ackn-btn">Start learning for Free</button>
      <InfiniteSlider className="logos-ctn" />
    </section>
  );
};

export default Acknowlege;

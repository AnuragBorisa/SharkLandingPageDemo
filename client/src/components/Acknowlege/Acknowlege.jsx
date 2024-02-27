import React from "react";
import "./Acknowlege.css";
import InfiniteSlider from "../Utilites/InfiniteSilder/InfiniteSlider";

const Acknowlege = () => {
  
  return (
    <section className="Acknowlege-container">
      <h1 className="ackn-heading">
       Industry-Leading
        <br></br>
        <span className="ack-color">Certification Preparation</span>
      </h1>
      <p className="ackn-para">
      Unlock your potential with our industry-leading certification program. Gain
expertise, credibility, and opportunities for advancement. Join a community of
professionals dedicated to excellence. Elevate your career today.
      </p>
      <button className="ackn-btn">Start learning for Free</button>
      <InfiniteSlider className="logos-ctn" />
    </section>
  );
};

export default Acknowlege;

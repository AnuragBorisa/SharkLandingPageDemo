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
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis culpa deserunt quae dolor. Hic totam asperiores temporibus accusamus error quo, quae, vitae soluta laudantium voluptatem illo, suscipit quaerat ipsam voluptates.
      </p>
      <button className="ackn-btn">Start learning for Free</button>
      <InfiniteSlider className="logos-ctn" />
    </section>
  );
};

export default Acknowlege;

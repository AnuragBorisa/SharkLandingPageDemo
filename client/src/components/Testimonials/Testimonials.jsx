import React from "react";
import Review from "../Utilites/ReviewComponent/Review";
import "./Testimonials.css"
import RevealHeading from "../Utilites/RevealHeading/RevealHeading";
const Testimonials = () => {
  return (
    <main >
    <section className="container">
      <div className="title">
      <RevealHeading>  <h2>Our Reviews</h2></RevealHeading>
        <div className="underline"></div>
      </div>
      <Review />
    </section>
   
    </main>
  );
};

export default Testimonials;

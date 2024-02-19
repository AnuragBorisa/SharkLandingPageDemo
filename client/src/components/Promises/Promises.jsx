import React from "react";
import "./Promises.css";
import PromisesCard from "../Utilites/PromisesCard";

const Promises = () => {
  
  return (
    <section className="promises-container">
      <div className="promises-left">
        <h1 className="promises-heading">Unleashing Accessibility
In <span className="graident-color"> Cybersecurity
Education</span></h1>
        <p className="promises-para">Immerse yourself in the cutting-edge realm of cybersecurity with
Shark Cybertech, a trailblazer in the industry. Redefining learning
through our Extreme Cybertech Live Training, we've garnered
acclaim as pioneers. Our platform boasts immersive, real-time
training experiences, surpassing traditional boundaries</p>
       
      </div>
      <div className="promises-right">
        <PromisesCard className="promises-card" />
      </div>
    </section>
  );
};

export default Promises;

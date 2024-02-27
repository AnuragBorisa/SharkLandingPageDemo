import React from "react";
import "./Promises.css";
import PromisesCard from "../Utilites/PromisesCard";

const Promises = () => {
  return (
    <section className="promises-container">
      <div className="promises-left">
        <h1 className="promises-heading">
          Unleashing Accessibility In{" "}
          <span className="graident-color"> Cybersecurity Education</span>
        </h1>
        <p className="promises-para">
          Discover the power of accessibility in cybersecurity education. Our
          program breaks barriers, providing inclusive learning experiences for
          all. Empowerment through knowledge awaits. Join us in shaping a more
          inclusive future in cybersecurity.
        </p>
      </div>
      <div className="promises-right">
        <PromisesCard className="promises-card" />
      </div>
    </section>
  );
};

export default Promises;

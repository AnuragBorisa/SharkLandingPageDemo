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
        <p className="promises-para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio quo deserunt, asperiores, quis quidem voluptas corporis veritatis rem quasi in expedita unde saepe? Dolore ad recusandae nobis architecto aliquid facilis!</p>
       
      </div>
      <div className="promises-right">
        <PromisesCard className="promises-card" />
      </div>
    </section>
  );
};

export default Promises;

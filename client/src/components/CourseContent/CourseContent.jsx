import React, { useState, useEffect } from "react";
import "./CourseContent.css";
import Card from "../Utilites/Card/Card";
import RevealHeading from "../Utilites/RevealHeading/RevealHeading";
const CourseContent = () => {
 

  

  return (
    <section className="course-ctn" >
      <div className="course-titles">
     <h1 className="course-tag">  <RevealHeading>Professional courses on creating websites </RevealHeading>
</h1>
                    

 <p className="course-tag-para">
 <RevealHeading>  Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque,
          nesciunt facere cupiditate aperiam temporibus expedita praesentium
          inventore perspiciatis porro? Beatae corrupti exercitationem suscipit
          ipsum nihil quis facere labore ratione odit.
          </RevealHeading> 
        </p>
      
      </div>
      <div className="course-cards">
        <Card />
      </div>
    </section>
  );
};

export default CourseContent;

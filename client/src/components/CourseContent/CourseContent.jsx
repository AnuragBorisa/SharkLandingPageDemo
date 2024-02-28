import React, { useState, useEffect } from "react";
import "./CourseContent.css";
import Card from "../Utilites/Card/Card";
import RevealHeading from "../Utilites/RevealHeading/RevealHeading";
const CourseContent = () => {
 

  

  return (
    <section className="course-ctn" >
      <div className="course-titles">
      <RevealHeading><h1 className="course-tag"> Professional courses on creating websites 
</h1></RevealHeading>
                    

<RevealHeading> <p className="course-tag-para">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque,
          nesciunt facere cupiditate aperiam temporibus expedita praesentium
          inventore perspiciatis porro? Beatae corrupti exercitationem suscipit
          ipsum nihil quis facere labore ratione odit.
        </p>
        </RevealHeading> 
      </div>
      <div className="course-cards">
        <Card />
      </div>
    </section>
  );
};

export default CourseContent;

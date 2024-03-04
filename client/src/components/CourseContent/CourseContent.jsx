import React, { useState, useEffect } from "react";
import "./CourseContent.css";
import Card from "../Utilites/Card/Card";
import RevealHeading from "../Utilites/RevealHeading/RevealHeading";
const CourseContent = () => {
 

  

  return (
    <section className="course-ctn" >
      <div className="course-titles">
     <h1 className="course-tag">  <RevealHeading>Professional courses on Cyber Security </RevealHeading>
</h1>
                    

 <p className="course-tag-para">
 <RevealHeading>  From mastering coding essentials to implementing cutting-edge design principles, we'll equip you with everything you need to thrive in cybersecurity. Elevate your skills and craft robust defenses that leave a lasting digital impression. Dive into the dynamic world of cybersecurity and transform your creativity into a formidable online shield.
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

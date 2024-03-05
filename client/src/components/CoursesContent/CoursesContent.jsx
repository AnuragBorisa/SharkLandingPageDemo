import React from "react";
import "./CoursesContent.css";
import Form from "../Form/Form";
import RevealHeading from "../Utilites/RevealHeading/RevealHeading";
import { useCourseContext } from "../../store";
import { useParams } from "react-router";
import { useEffect } from "react";


const CoursesContent = () => {
   
    const params = useParams();
    const Courses = useCourseContext();
    const course = Courses.find((topic) => topic.endpoint === params.id);
    const coursepoints = course.points.map((element,index)=>{
      return <li key={index}>{element}</li>
    })

    useEffect(() => {
        window.scrollTo(0, 0);
      }, [course]); // Scroll to top when courseId changes
      
  return (
    <>
      <section className="CoursesContent-Container">
        <div className="coursesctndesk-ctner">
          <div className="coursesctndesk-ctner-left">
            <h1 className="coursesContent-heading">
            <RevealHeading> {course.title} </RevealHeading>
            </h1>
            <p className="coursesContent-para">
            <RevealHeading> {course.Para} <br></br> <br></br> Join us, if you think you have a knack for Digital Security. Fill out the form below!!</RevealHeading>
            </p>
            <RevealHeading> </RevealHeading>
          </div>
          <div className="coursesctndesk-ctner-right">
          <RevealHeading> <img
              className="couresContent-img"
              src={course.img}
              alt="logo"
            ></img></RevealHeading>
          </div>
        </div>
        <div className="description-two-container">
          <div className="what-you-will-learn">
            <h1 className="wht-learn"> <RevealHeading> What You"ll Learn </RevealHeading></h1>
            <RevealHeading>    <div className="courses-points">
             {coursepoints}
            </div>
            </RevealHeading>
          </div>
          <div>
            <Form />
          </div>
        </div>
      </section>
    </>
  );
};

export default CoursesContent;

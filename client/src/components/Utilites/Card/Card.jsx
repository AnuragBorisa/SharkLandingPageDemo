import React from "react";
import "./Card.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faArrowRight} from "@fortawesome/free-solid-svg-icons";
import LeftToRight from "../Animations/LeftToRight";
import { useCourseContext } from "../../../store";
import { Link } from "react-router-dom";




const Card = () => {
  const coursesandtitles = useCourseContext();
  const courseContent = coursesandtitles.map((element,index)=>{
    return <>
   
     <div className="Card" key={index}>
      <div className="card-ctn">
      <LeftToRight>     <h2 className="card-ctn-title reveal-text"> {element.title} </h2></LeftToRight>
           <h1 className="card-ctn-para">
             {element.Para}{" "}
           </h1>
         </div>
         <Link to={`/courses/${element.endpoint}` } >
         <div className="card-redirect">
           <button className="card-read-more"><FontAwesomeIcon className="arrow" icon={faArrowRight} /></button>
           <img className="card-img" src={element.img} alt={element.img}></img>
         </div> 
         </Link>
         </div>
        
    </>
   
   })
  return (
    <>
     {courseContent}
     </>
  );
};

export default Card;

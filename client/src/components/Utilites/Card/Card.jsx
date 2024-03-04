import React from "react";
import "./Card.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faArrowRight} from "@fortawesome/free-solid-svg-icons";
import LeftToRight from "../Animations/LeftToRight";
const coursesandtitles = [
  {
    title: "VAPT",
    Para: "Equips learners with skills toidentify,assess,and mitigate cybersecurity risks in systems. Topics include reconnaissance,exploitation, and reporting, preparing individuals for roles in cybersecurity defense and analysis.",
    img: "https://res.cloudinary.com/dhuagtzvw/image/upload/v1709554612/images/xp1pwlpn4qdlc6h7l5nj.jpg",
  },
  {
    title: "Mobile Security",
    Para: "Mobile Security focuses on securing mobile devices and applications against cyber threats. Topics include secure coding practices, mobile app vulnerabilities, encryption, and secure communication protocols.",
    img: "https://res.cloudinary.com/dhuagtzvw/image/upload/v1709554611/images/jn6j4077uqsj03w8bdoy.jpg",
  },
  {
    title: "Web Security",
    Para: "Teaches strategies to protect web applications and servers from cyber threats. Topics cover common vulnerabilities like SQL injection and cross-site scripting, Along with this we also nourish your encryption.",
    img: "https://res.cloudinary.com/dhuagtzvw/image/upload/v1709554611/images/psipzmvf0dv94d4wtez1.jpg",
  },

];

const courseContent = coursesandtitles.map((element,index)=>{
 return <>
  <div className="Card" key={index}>
   <div className="card-ctn">
   <LeftToRight>     <h2 className="card-ctn-title reveal-text"> {element.title} </h2></LeftToRight>
        <h1 className="card-ctn-para">
          {element.Para}{" "}
        </h1>
      </div>

      <div className="card-redirect">
        <button className="card-read-more"><FontAwesomeIcon className="arrow" icon={faArrowRight} /></button>
        <img className="card-img" src={element.img} alt={element.img}></img>
      </div>
      </div>
 </>

})

const Card = () => {
  return (
    <>
     {courseContent}
     </>
  );
};

export default Card;

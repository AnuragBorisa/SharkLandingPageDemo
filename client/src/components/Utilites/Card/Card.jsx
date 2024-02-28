import React from "react";
import "./Card.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faArrowRight} from "@fortawesome/free-solid-svg-icons"
const coursesandtitles = [
  {
    title: "VAPT",
    Para: "Equips learners with skills toidentify,assess,and mitigate cybersecurity risks in systems. Topics include reconnaissance,exploitation, and reporting, preparing individuals for roles in cybersecurity defense and analysis.",
    img: "logo",
  },
  {
    title: "Mobile Security",
    Para: "Mobile Security focuses on securing mobile devices and applications against cyber threats. Topics include secure coding practices, mobile app vulnerabilities, encryption, and secure communication protocols.",
    img: "logo",
  },
  {
    title: "Web Security",
    Para: "Teaches strategies to protect web applications and servers from cyber threats. Topics cover common vulnerabilities like SQL injection and cross-site scripting, Along with this we also nourish your encryption.",
    img: "logo",
  },

];

const courseContent = coursesandtitles.map((element,index)=>{
 return <>
  <div className="Card" key={index}>
   <div className="card-ctn">
        <h2 className="card-ctn-title reveal-text">{element.title}</h2>
        <h1 className="card-ctn-para">
          {element.Para}{" "}
        </h1>
      </div>

      <div className="card-redirect">
        <button className="card-read-more"><FontAwesomeIcon icon={faArrowRight} /></button>
        <img className="card-img" src="" alt={element.img}></img>
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

import React from "react";
import "./Card.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const coursesandtitles = [
  {
    title: "VAPT",
    Para: "equips learners with skills toidentify,assess,and mitigate cybersecurity risks in systems. Topics include reconnaissance,exploitation, and reporting, preparing individuals for roles in cybersecurity defense and analysis.",
    img: "logo",
  },
  {
    title: "Mobile Security",
    Para: "Mobile Security focuses on securing mobile devices and applications against cyber threats. Topics include secure codingpractices, mobile app vulnerabilities, encryption, and secure communication protocols.",
    img: "logo",
  },
  {
    title: "Web Security",
    Para: "Teaches strategies to protect web applications and servers from cyber threats. Topics cover common vulnerabilities like SQL injection and cross-site scripting, along with techniques for secure authentication, encryption, and safeguarding online assets.",
    img: "logo",
  },
  {
    title: "VAPT",
    Para: "Teaches strategies to protect web applications and servers from cyber threats. Topics cover common vulnerabilities like SQL injection and cross-site scripting, along with techniques for secure authentication, encryption, and safeguarding online assets",
    img: "logo",
  },
];

const courseContent = coursesandtitles.map((element,index)=>{
 return <>
  <div className="Card" key={index}>
   <div className="card-ctn">
        <h2 className="card-ctn-title">{element.title}</h2>
        <h1 className="card-ctn-para">
          {element.Para}.{" "}
        </h1>
      </div>

      <div className="card-redirect">
        <button className="card-read-more">READ MORE `${"->"}`</button>
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

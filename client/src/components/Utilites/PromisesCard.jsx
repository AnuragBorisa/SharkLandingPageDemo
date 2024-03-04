import React from "react";
import "./PromisesCard.css"
import LeftToRight from "./Animations/LeftToRight";
const promisesup = [
  { 
    img: "https://res.cloudinary.com/dhuagtzvw/image/upload/v1709535833/images/biyybrmlnothq4sfqayk.png",
    title: "VAPT",
    para: "The fastest way to grow profitably",
  },
  { 
    img: "https://res.cloudinary.com/dhuagtzvw/image/upload/v1709535833/images/hhfnk06lzhwy0lidchxx.png",
    title: "CEH",
    para: "The fastest way to grow profitably",
  },
];
const promisesdown = [{
  img: "https://res.cloudinary.com/dhuagtzvw/image/upload/v1709535833/images/amknssazyw1tldysyq6x.png",
  title: "CISA",
  para: "lorem",
},
{ 
  img: "https://res.cloudinary.com/dhuagtzvw/image/upload/v1709535833/images/imyqxfhw4g9y7mfdfjw1.png",
  title: "CISSP",
  para: "The fastest way to grow profitably",
},]

const promisesupelement = promisesup.map((element,index)=>{
  return <div className="promises-internal" key={index}>
           <img  className="promises-img" src={element.img} alt="logo"></img>
           <h1 className="promises-t"> <LeftToRight> {element.title} </LeftToRight></h1>
           <p className="promises-p">{element.para}</p>
           </div>
}) 
const promisesdownelement = promisesdown.map((element,index)=>{
  return <div className="promises-internal" key={index}>
           <img className="promises-img" src={element.img} alt="logo"></img>
           <h1 className="promises-t"><LeftToRight> {element.title} </LeftToRight></h1>
           <p className="promises-p"> {element.para}</p>
           </div>
}) 

const PromisesCard = (props) => {

  return (
    <div className={props.className}>
      <div className='promises-up'>
        {promisesupelement}
      </div>
      <div className='promises-down'>
        {promisesdownelement}
      </div>
    </div>
  )
}

export default PromisesCard



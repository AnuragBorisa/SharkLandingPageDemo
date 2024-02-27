import React from 'react'
import "./CourseContent.css"
import Card from '../Utilites/Card/Card'

const CourseContent = () => {
  return (
   <section className='course-ctn'>
    <div className='course-titles'>
        <h1 className='course-tag'>Professional courses on creating websites</h1>
        <p className='course-tag-para'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, nesciunt facere cupiditate aperiam temporibus expedita praesentium inventore perspiciatis porro? Beatae corrupti exercitationem suscipit ipsum nihil quis facere labore ratione odit.
        </p>
    </div>
    <div className='course-cards'>
        <Card />
    </div>
   </section>
  )
}

export default CourseContent
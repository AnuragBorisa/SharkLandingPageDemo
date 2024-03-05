import React from 'react'
import CoursesContent from '../components/CoursesContent/CoursesContent';
import Header from '../components/Header/Header'
import FooterComponent from '../components/Footer/FooterComponent'
import CourseContent from '../components/CourseContent/CourseContent'

const Courses = () => {
  return (
    <div>
      <Header />
    <CoursesContent /> 
    <CourseContent />
    <FooterComponent />
    </div>
  )
}

export default Courses; 
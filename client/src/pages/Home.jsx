import React from 'react'
import Header from '../components/Header/Header'
import MainPage from '../components/MainPage/MainPage'
import Promises from '../components/Promises/Promises'
import CourseContent from '../components/CourseContent/CourseContent'
import Acknowlege from '../components/Acknowlege/Acknowlege'
import Testimonials from '../components/Testimonials/Testimonials'
import FooterComponent from '../components/Footer/FooterComponent'

export const Home = () => {
  return (
    <>
   <Header />
   <MainPage />
   <CourseContent />
   <Promises />
  
   <Acknowlege />
   <Testimonials />
   <FooterComponent />
   </>
  )
}

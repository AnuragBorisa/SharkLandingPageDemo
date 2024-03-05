import React, { createContext, useContext } from "react";
const CourseContentContext = createContext([]);
const CourseContentProvider = (props) => {
  return (
    <CourseContentContext.Provider value={props.CourseContent}>
      {props.children}
    </CourseContentContext.Provider>
  );
};
const useCourseContext = () => {
    return useContext(CourseContentContext);
}
export {CourseContentProvider,useCourseContext};

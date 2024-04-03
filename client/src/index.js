import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import {HashRouter} from "react-router-dom";
import { coursesAndTitles } from "./store/CourseContentConstant";
import { CourseContentProvider } from "./store";
import TagManager from "react-gtm-module";


const tagManagerArgs = {
  gtmId: "GTM-TSPT2PMX",
};


TagManager.initialize(tagManagerArgs);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  
  <React.StrictMode>
    <HashRouter  basename="/" >
      
        <CourseContentProvider CourseContent={coursesAndTitles}>
          <App />
        </CourseContentProvider>
     
    </HashRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

import React from "react";
import "./Form.css";
import axios from "axios";
import { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import LeftToRight from "../Utilites/Animations/LeftToRight";
import RevealHeading from "../Utilites/RevealHeading/RevealHeading";
const Form = (props) => {
  const navigate = useNavigate();
  const formRef = useRef();
 
  const onSubmitHandler = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log(data);
    const fullName = data.get("FullName");
    const email = data.get("email");
    const phoneNumber = data.get("phonenumber");

    axios
      .post("http://localhost:8080/saveForm/form", {
        fullName,
        email,
        phoneNumber,
      })
      .then((res) => {
        console.log(res.data.message);
        formRef.current.reset();
        navigate("/thankyou");
      })
      .catch((err) => {
        console.log(err.response.data);
      });

     
  };

  return (
    <>
      <form
        action="/"
        method="POST"
        className={props.className}
        onSubmit={onSubmitHandler}
        ref={formRef}
      >
        <div className="formContainer">
          <Link className="form-sign-in">
            {" "}
            <FontAwesomeIcon className="whatsapp" icon={faWhatsapp} />
          </Link>

          <h1 className="sign-up-form">Get Enrolled</h1>
          <div className="form-lables">
            <div className="internal-forms">
              <label htmlFor="Full-Name">
                <b>
                  {" "}
                <LeftToRight> FULL NAME </LeftToRight>
                </b>
               
              </label>
              <input
                type="text"
                placeholder="Enter Your Full Name"
                name="FullName"
                required
              />{" "}
            </div>
            <div className="internal-forms">
              <label htmlFor="email">
              <LeftToRight>   <b>EMAIL</b> </LeftToRight>
              </label>
              <input
                type="text"
                placeholder="Enter Email"
                name="email"
                required
              />
            </div>
            <div className="internal-forms">
              <label htmlFor="phonenumber">
              <LeftToRight>  <b>PHONE NUMBER</b> </LeftToRight>
              </label>
              <input
                type="tel"
                placeholder="Enter Phone-Number"
                name="phonenumber"
                required
              />
            </div>
          </div>

          <div className="form-btm">
            <label className="form-btm-label">
              <input
                type="checkbox"
                checked
                name="remember"
                style={{ marginBottom: "15px" }}
              />{" "}
              Remember me
            </label>
            <p className="form-btm-p">
              By creating an account you agree to our{" "}
              <a href="#" style={{ color: "dodgerblue" }}>
                Terms & Privacy
              </a>
              .
            </p>
            <button  type="submit" className="form-btm-signup">
              Sign Up
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default Form;

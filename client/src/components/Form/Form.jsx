import React from "react";
import "./Form.css";
import axios from "axios";
import { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import LeftToRight from "../Utilites/Animations/LeftToRight";
import LoadingSpiner from "../Utilites/LoadingSpiner/LoadingSpiner";
import { useState } from "react";
import { GoogleSpreadsheet } from "google-spreadsheet";
// import { JWT } from "google-auth-library";
const creds = require("./credential.json");

// const serviceAccountAuth = new JWT({
//   email: creds.client_email,
//   key: creds.private_key,
//   scopes: ["https://www.googleapis.com/auth/spreadsheets"],
// });


const doc = new GoogleSpreadsheet(
  "1mxMIVstJY7AgxqktMT4PfCWeRwc6nbGkKf5jpMv43DM",
  // serviceAccountAuth
);

const Form = (props) => {
  const [loading, setisLoading] = useState(false);
  const navigate = useNavigate();
  const formRef = useRef();

  async function accessSpreadsheet(data) {
    // Load the document properties and worksheets


    await doc.loadInfo();

    const sheet = doc.sheetsByIndex[0];

    // Read rows
    // const rows = await sheet.getRows();
    // rows.forEach((row) => {
    //   console.log(row._rawData);
    // });

    // Add a row
    await sheet.addRow({
      Date: data.date,
      FullName: data.name,
      Email: data.email,
      PhoneNumber: data.phNumber,
    });
    //   await sheet.addRow({ "ID": "34237", "FirstName": "Test23", "LastName": "J1", "Status": "Pass" });
    //   console.log("Added")

    // const rowsToAdd = [
    //     { "ID": "106", "FirstName": "Robert", "LastName": "J", "Status": "Pass" },
    //     { "ID": "107", "FirstName": "Test23", "LastName": "J1", "Status": "Pass" }
    //   ];

    //   // Add rows sequentially
    //   for (const rowData of rowsToAdd) {
    //     await sheet.addRow(rowData);
    //   }

    //   console.log("After Adding")
    //   const rows2 = await sheet.getRows();
    //   rows2.forEach(row => {
    //     console.log(row._rawData);
    //   });

    // Add rows using the callback function
    // addRow(
    //   {
    //     Date: data.date,
    //     FullName: data.name,
    //     Email: data.email,
    //     PhoneNumber: data.phNumber,
    //   },
    //   // async () => {
    //   //   console.log("After Adding");
    //   //   const rows2 = await sheet.getRows();
    //   //   rows2.forEach((row) => {
    //   //     console.log(row._rawData);
    //   //   });

    //   //   // addRow({ "ID": "107", "FirstName": "Test23", "LastName": "J1", "Status": "Pass" }, () => {
    //   //   // Delete a row after adding the new rows
    //   //   //   sheet.deleteRow(5).then(() => {
    //   //   //     console.log('Deleted row 5');
    //   //   //   }).catch(err => {
    //   //   //     console.error('Error deleting row 5', err);
    //   //   //   });
    //   //   // });
    //   // }
    // );

    // Delete a row
    // await sheet.delete;
  }

  // function addRow(rowData, callback) {
  //   sheet
  //     .addRow(rowData)
  //     .then(() => {
  //       console.log(`Added row: ${JSON.stringify(rowData)}`);
  //       if (callback) callback();
  //     })
  //     .catch((err) => {
  //       console.error(`Error adding row: ${JSON.stringify(rowData)}`, err);
  //     });
  // }

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    setisLoading(true);
    const formData = new FormData(event.currentTarget);

    var today = new Date();
    var dd = String(today.getDate()).padStart(2, "0");
    var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
    var yyyy = today.getFullYear();

    today = mm + "/" + dd + "/" + yyyy;

    // const sheetData = {
    //   email: formData.get("email"),
    //   name: formData.get("FullName"),
    //   phNumber: formData.get("phonenumber"),
    //   date: today,
    // };

    // accessSpreadsheet(sheetData);

    // const response = await fetch('https://script.google.com/macros/s/AKfycbwydU5zs58zl9X1spgkj2DQThX1ywKCl45Y1vQtOd15iwFxYuX8X2KS6VwEM3g4NM9Y/exec', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify(sheetData),
    //   mode: 'no-cors',
    // });
    // console.log('Data to be sent:', sheetData);

    // if (!response.ok) {
    //   throw new Error('Error sending data to Google Sheet');
    // }

    // console.log('Data successfully sent to Google Sheet');

    // console.log(formData);
    // formData.append("access_key", "992b1174-8fcc-445c-9130-c3d1652e0121");

    // const object = Object.fromEntries(formData);
    // const json = JSON.stringify(object);

    // const res = await fetch("https://api.web3forms.com/submit", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //     Accept: "application/json",
    //   },
    //   body: json,
    // }).then((res) => res.json());

    // if (res.success) {
    //   setisLoading(false);
    //   formRef.current.reset();
    //   navigate("/thankyou");
    //   console.log("Success", res);
    // }
    const fullName = formData.get("FullName");
    const email = formData.get("email");
    const phoneNumber = formData.get("phonenumber");

    axios
      .post("https://sharklandingpagedemo.onrender.com/saveSpreadsheet/spreadsheet", {
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
              <label for="Email">
                <LeftToRight>
                  {" "}
                  <b>EMAIL</b>{" "}
                </LeftToRight>
              </label>
              <input
                type="Email"
                placeholder="Enter Email"
                name="email"
                required
              />
            </div>
            <div className="internal-forms">
              <label htmlFor="phonenumber">
                <LeftToRight>
                  {" "}
                  <b>PHONE NUMBER</b>{" "}
                </LeftToRight>
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
            <button type="submit" className="form-btm-signup">
              Sign Up
            </button>
          </div>
        </div>
      </form>
      {loading && <LoadingSpiner />}
    </>
  );
};

export default Form;

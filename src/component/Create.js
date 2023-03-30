import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import "./Create.css";
function Create() {
  const [myname, setmyname] = useState();
  const [myage, setmyage] = useState();
  const [myemail, setmyemail] = useState();

  const Enterdata = async () => {
    console.log("function call**********");
    // console.log(myage,"data")
    // e.preventDefault()
    try {
      await axios
        .post("https://64142404ebce1f9d8c605bec.mockapi.io/user", {
          name: myname,
          age: myage,
          email: myemail,
        })
        .then(() => {
          navigate("/");
        });
    } catch (error) {
      console.log(error);
    }
  };

  const navigate = useNavigate();
  return (
    <>
      <div className="main">
      <Link to="/"><button className="create">Read Data</button></Link>
        <div className="heading">
          <h1>Create Data</h1>
        </div>
        <div className="form-group">
          <label>Enter Name:-</label>
          <br />
          <input
            type="text"
            placeholder="Name"
            onChange={(e) => setmyname(e.target.value)}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>Enter Age:-</label>
          <br />
          <input
            type="number"
            placeholder="Age"
            onChange={(e) => setmyage(e.target.value)}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>Enter Email:-</label>
          <br />
          <input
            type="text"
            placeholder="Email"
            onChange={(e) => setmyemail(e.target.value)}
            className="form-control"
          />
        </div>
        <div className="submit-btn">
          <input
            type="submit"
            value="Submit"
            className="btn"
            onClick={() => Enterdata()}
          />
        </div>
      
      </div>
    </>
  );
}
export default Create;

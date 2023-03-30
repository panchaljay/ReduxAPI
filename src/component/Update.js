import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

function Update() {
  const [myname, setmyname] = useState();
  const [myage, setmyage] = useState();
  const [myemail, setmyemail] = useState();

  const [data, setdata] = useState();

  const { id } = useParams();
  // console.log(id,"user id ");

  const getdata = async () => {
    try {
      const response = await axios.get(
        `https://64142404ebce1f9d8c605bec.mockapi.io/user/${id}`
      );

      const data = response.data;
      setmyname(data.name);
      setmyage(data.age);
      setmyemail(data.email);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getdata();
  }, []);

  const updatedata = async () => {
    try {
      await axios
        .put(`https://64142404ebce1f9d8c605bec.mockapi.io/user/${id}`, {
          name: myname,
          age: myage,
          email: myemail,
        })
        .then(() => {
          navigate("/");
        });
    } catch (err) {
      console.error(err);
    }
  };

  const navigate = useNavigate();

  return (
    <>
      <div className="main">
        <Link to="/">
          <button className="create">Read Data</button>
        </Link>
        <div className="heading">
          <h1>Update Data</h1>
        </div>
        <div className="form-group">
          <label>Enter Name:-</label>
          <br />
          <input
            type="text"
            placeholder="Name"
            value={myname}
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
            value={myage}
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
            value={myemail}
            onChange={(e) => setmyemail(e.target.value)}
            className="form-control"
          />
        </div>
        <div className="submit-btn">
          <input
            type="submit"
            value="Update"
            className="btn"
            onClick={() => updatedata()}
          />
        </div>
      </div>
    </>
  );
}

export default Update;

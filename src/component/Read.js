import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getdata,deletedata } from "../redux/slice/Api";
import "./Read.css";

function Read() {
  useEffect(() => {
    dispatch(getdata());
  }, []);

  const dispatch = useDispatch();

  const rdata = useSelector((state) => state.api.data);

  function handledelete(id) {
console.log("delete ",id);
dispatch(deletedata(id));

  }

  console.log(rdata, "data");
  return (
    <div className="main">
      <Link to="/create">
        {" "}
        <button className="btn">Create Data</button>
      </Link>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>Email</th>
            <th>Edit</th>
            <th>DELETE</th>
          </tr>
        </thead>
        <tbody>
          {rdata &&
            rdata.map((item) => (
              <tr>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.age}</td>
                <td>{item.email}</td>
                <td>
                  <Link to={`/Update/${item.id}`}>
                    {" "}
                    <button className="edt">Edit</button>
                  </Link>
                </td>
                <td>
                  <button
                    className="dlt"
                      onClick={() =>{ if(window.confirm(" Yuou really want to delete data?? ")) {handledelete(item.id )}} }
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default Read;

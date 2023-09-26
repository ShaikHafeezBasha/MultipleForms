import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const Customer = () => {
  let navigate = useNavigate();
  let [fname, setFname] = useState("");
  let [lname, setLname] = useState("");
  function handleCustomer() {
    if (fname && lname) {
      navigate("/car");
    }
  }
  return (
    <div>
      <form className="form">
        <h1>Customer Details</h1>
        <label for="fname">First Name:</label>
        <input
          type="text"
          id="fname"
          onChange={(e) => {
            setFname(e.target.value);
          }}
        />
        <label for="lname">Last Name:</label>
        <input
          type="text"
          id="lname"
          onChange={(e) => {
            setLname(e.target.value);
          }}
        />
        <button onClick={handleCustomer}>Next</button>
      </form>
    </div>
  );
};
export default Customer;

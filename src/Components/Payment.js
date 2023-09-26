import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Payment = () => {
  let navigate = useNavigate();
  let [credit, setCredit] = useState("");
  let [expiry, setExpiry] = useState("");
  return (
    <div>
      <form className="form">
        <h1>Payment Details</h1>
        <label for="credit">Credit Card Number:</label>
        <input
          type="number"
          id="credit"
          onChange={(e) => {
            setCredit(e.target.value);
          }}
        />
        {credit && credit.length < 12 ? (
          <p className="red">
            Credit Card Number Must be exactly 12 digits long
          </p>
        ) : (
          <></>
        )}
        <label for="expiry">Expiration date:</label>
        <input
          type="text"
          id="expiry"
          onChange={(e) => {
            setExpiry(e.target.value);
          }}
        />
        {expiry && expiry.length < 4 ? (
          <p className="red">Expiration date must be in the format MM/YY</p>
        ) : (
          <></>
        )}
        <button onClick={() => navigate("/car")}>Previous</button>
        <button className="btn">Submit</button>
      </form>
    </div>
  );
};
export default Payment;

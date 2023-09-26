import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Car = () => {
  let navigate = useNavigate();
  let [brand, setBrand] = useState("");
  let [modal, setModal] = useState("");

  function handleCar() {
    if (brand && modal) {
      navigate("/payment");
    }
  }
  return (
    <div>
      <form className="form">
        <h1>Car Details</h1>
        <label for="brand">Brand:</label>
        <input
          type="text"
          id="brand"
          onChange={(e) => {
            setBrand(e.target.value);
          }}
        />
        <label for="modal">Modal:</label>
        <input
          type="text"
          id="modal"
          onChange={(e) => {
            setModal(e.target.value);
          }}
        />
        <button onClick={() => navigate("/")}>Previous</button>
        <button className="btn" onClick={handleCar}>
          Next
        </button>
      </form>
    </div>
  );
};
export default Car;

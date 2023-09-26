import React from "react";
import { Routes, Route } from "react-router-dom";
import Customer from "./Components/Customer";
import Car from "./Components/Car";
import Payment from "./Components/Payment";
import "./App.css";
/*
customer details
car details
payment details
*/
export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Customer />} />
        <Route path="/car" element={<Car />} />
        <Route path="/payment" element={<Payment />} />
      </Routes>
    </div>
  );
};
export default App;

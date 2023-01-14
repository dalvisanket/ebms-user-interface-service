import logo from './logo.svg';
import './App.css';
import React from "react";
import Customer_Detail from "./components/customer_details";
import Navbar from "./components/navbar";

function App() {

  return (
      <React.Fragment>
          <Navbar/>
          <Customer_Detail/>
      </React.Fragment>

  );
}

export default App;


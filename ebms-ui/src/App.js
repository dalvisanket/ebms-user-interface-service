import logo from './logo.svg';
import './App.css';
import React from "react";
import Customer_Detail from "./components/details";
import Navbar from "./components/navbar";
import Consumer_Details from "./components/consumer_details";
import Details from "./components/details";
import Consumer_Graph from "./components/consumer_graph";

function App() {

  return (
      <React.Fragment>
          <Navbar/>
          <Details/>
          <div style={{padding: "10px 10px 10px 10px"}}>
              <Consumer_Graph/>
          </div>

      </React.Fragment>

  );
}

export default App;


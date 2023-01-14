import logo from './logo.svg';
import './App.css';
import React, {useEffect} from "react";
import Customer_Detail from "./components/customer_details";
import {AiFillLinkedin} from 'react-icons/ai'
import {FaGithubSquare} from "react-icons/fa";
import {SiPytorchlightning} from "react-icons/si";
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


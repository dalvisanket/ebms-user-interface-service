import React, {Component} from "react";
import {AgGridReact} from "ag-grid-react";
import {FaRegLightbulb} from "react-icons/fa";
import {AiFillLinkedin} from "react-icons/ai";
import {FaGithubSquare} from "react-icons/fa";

export default class Navbar extends Component{


    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light" style={{padding: "0 22px 0 22px"}}>
                    <a className="navbar-brand" href="">
                        <FaRegLightbulb style={{fontSize: '25px'}} /> BIG ELECTRICITY COMPANY
                    </a>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">

                    </div>
                    <a href="https://www.linkedin.com/in/-sanketdalvi-/"><AiFillLinkedin style={{color: '#0072b1', fontSize: '50px'}}/></a>
                    <a href="https://github.com/dalvisanket"><FaGithubSquare style={{color: '#171515', fontSize: '45px'}}/></a>
                </nav>
            </div>
        );
    }
}
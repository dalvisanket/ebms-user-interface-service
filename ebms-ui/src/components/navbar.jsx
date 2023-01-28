import React, {Component} from "react";
import {AgGridReact} from "ag-grid-react";
import {FaRegLightbulb} from "react-icons/fa";
import {AiFillLinkedin} from "react-icons/ai";
import {FaGithubSquare} from "react-icons/fa";
import '../css/consumer_details.css'

export default class Navbar extends Component{


    render() {
        return (
            <div className='componentPadding'>
                <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-lg" style={{padding: "0 22px 0 22px", height:"90px"}}>
                    <a className="navbar-brand" href="">
                        <FaRegLightbulb style={{fontSize: '50px',color:'#fce484'}} /> <big><b>New Brunswick Electricity Corporation</b></big>
                    </a>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">

                    </div>
                    <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/-sanketdalvi-/"><AiFillLinkedin style={{color: '#0072b1', fontSize: '60px'}}/></a>
                    <a target="_blank" rel="noopener noreferrer" href="https://github.com/dalvisanket"><FaGithubSquare style={{color: '#171515', fontSize: '55px'}}/></a>
                </nav>
            </div>
        );
    }
}
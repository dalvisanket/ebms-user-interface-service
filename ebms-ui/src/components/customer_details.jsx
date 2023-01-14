import React, {Component} from "react";
import Testservice from "../services/meter-reading-service";
import {AgGridReact} from "ag-grid-react";
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import {Dropdown} from "react-bootstrap";

export default class Customer_Detail extends Component{


    state ={
        rowData:[],
        columnDefs:[]
    };

    defaultColumnConfig(){
        return {
            sortable:true,
            filter:true,
            resizable:true,
            flex:1
        };
    }

    componentDidMount() {
        Testservice.getAllConsumers().then((response) =>{
            this.setState({rowData : response.data});
            const keys = Object.keys(response.data[0]);
            keys.forEach(key => this.state.columnDefs.push({field : key}));
        });
    }

    getConsumerData =() =>{
        Testservice.getAllConsumers().then((response) =>{
            this.setState({rowData : response.data});
            const keys = Object.keys(response.data[0]);
            const consumerData =[];
            keys.forEach(key => consumerData.push({field : key}));
            this.setState({columnDefs:consumerData});
        });
    }

    getMeterData = () =>{
        Testservice.getAllMeters().then((response) =>{
            this.setState({rowData : response.data});
            const keys = Object.keys(response.data[0]);
            const meterData =[];
            keys.forEach(key => meterData.push({field : key}));
            this.setState({columnDefs:meterData});
        });
    }


    render() {

        return (
            <div className="ag-theme-alpine" style={{height:500,padding: "10px 10px 10px 10px"}}>
                <Dropdown style={{padding: "10px 0px 10px 0px"}}>
                    <Dropdown.Toggle variant="outline-secondary" size="sm" id="dropdown-info">
                        Select Data
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item onClick={this.getConsumerData}>Consumer Data</Dropdown.Item>
                        <Dropdown.Item onClick={this.getMeterData}>Meter Data</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>

                <AgGridReact rowData={this.state.rowData} columnDefs={this.state.columnDefs} defaultColDef={this.defaultColumnConfig()} />

            </div>
        );
    }
}
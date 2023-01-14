import React, {Component, useMemo} from "react";
import Testservice from "../services/meter-reading-service";
import {AgGridReact} from "ag-grid-react";
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';


export default class Customer_Detail extends Component{


    state ={
        rowData:[],
        columnDefs:[]
    };

    defaultColumnDef(){
        return {
            sortable:true,
            filter:true
        };
    }

    componentDidMount() {
        Testservice.getAllConsumers().then((response) =>{
            this.setState({rowData : response.data});
            const keys = Object.keys(response.data[0]);
            keys.forEach(key => this.state.columnDefs.push({field : key}));

        });
    }


    render() {
        return (
            <div className="ag-theme-alpine" style={{height:500,width:1100}}>
                <AgGridReact rowData={this.state.rowData} columnDefs={this.state.columnDefs} defaultColDef={this.defaultColumnDef()}/>

            </div>
        );
    }
}
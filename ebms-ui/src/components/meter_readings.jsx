import React, {Component} from "react";
import MeterReadingService from "../services/meter-reading-service";
import {AgGridReact} from "ag-grid-react";
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import '../css/consumer_details.css'

export default class Meter_Readings extends Component{


    state ={
        rowData:[],
        columnDefs:[],
        consumer_id:this.props.cosumer_id,
        meter_id:this.props.meter_id
    };

    defaultColumnConfig(){
        return {
            sortable:true,
            filter: 'agTextColumnFilter' ,
            floatingFilter: true,
            resizable:true,
            flex:1,
        };
    }

    componentDidMount() {
        MeterReadingService.getAllMeterReadings(this.state.meter_id,this.state.consumer_id).then((response) =>{
            this.setState({rowData : response.data});
            const keys = Object.keys(response.data[0]);
            keys.forEach(key => this.state.columnDefs.push({field : key}));
        });
    }

    onCellClicked = (params: CellClickedEvent) => console.log(params.data);

    render() {

        return (
            <div className="shadow-lg componentPadding m-3">
                <div className="ag-theme-alpine" style={{height:500}}>
                    <AgGridReact rowData={this.state.rowData} columnDefs={this.state.columnDefs} defaultColDef={this.defaultColumnConfig()} />
                </div>
            </div>
        );
    }
}
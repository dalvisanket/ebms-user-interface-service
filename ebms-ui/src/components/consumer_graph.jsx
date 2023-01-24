import React,{Component} from "react";
import {Line} from "react-chartjs-2";
import Chart from 'chart.js/auto';
import MeterReadingService from "../services/meter-reading-service";
import {Dropdown} from "react-bootstrap";


export default class Consumer_Graph extends Component{


    state ={
        years:[],
        allMeterReadingData:{},
        graphData:[],
        labels:[],
        placeHolderLabels:['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
        lineGraphRef:{},
    };

    constructor() {
        super();
        MeterReadingService.getMeterReadingsForYear(65654555,98310466).then((response) =>{
            this.setState({years:Object.keys(response.data)});
            this.setState({allMeterReadingData:response.data});
        });
    }

    updateGraphData = (year) =>{
        const meterReadingForYear = this.state.allMeterReadingData[year.year];
        let unitsConsumed =[]
        let newlabel =[]
        meterReadingForYear.forEach(row => {
            unitsConsumed.push(row.units_consumed)
            let month = row.billing_cycle.split("-")[1];
            newlabel.push(this.state.placeHolderLabels[month-1])
        })

        this.setState({graphData : unitsConsumed})
        this.setState({labels : newlabel})
        this.state.lineGraphRef.update();
    }


    render() {
        return(
            <div style={{padding: "40px 10px 10px 10px"}}>
                <Dropdown style={{padding: "10px 0px 10px 0px"}}>
                    <Dropdown.Toggle variant="outline-secondary" size="sm" id="dropdown-info">
                        Select Year
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        {this.state.years.map(year =>
                            <Dropdown.Item id={year} onClick={() => this.updateGraphData({year})}>{year}</Dropdown.Item>
                        )}
                    </Dropdown.Menu>
                </Dropdown>

                <Line data={{
                    labels:this.state.labels,
                    datasets:[
                        {
                            label:"Units Consumed",
                            fill:true,
                            data:this.state.graphData,
                            tension:0.3,
                        }
                    ]
                }}
                options={{
                    title:{
                        display:true,
                        text:"Units Consumed"
                    },
                    legend:{
                        display: true,
                        position:'right'
                    },
                    scales:{
                        y:{
                            beginAtZero:true
                        }
                    }
                }}
                      ref={(reference) => this.setState({lineGraphRef:reference})  }
                />
            </div>
        );
    }
}
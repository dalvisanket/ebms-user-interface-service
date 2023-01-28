import React,{Component} from "react";
import {Line} from "react-chartjs-2";
import Chart from 'chart.js/auto';
import MeterReadingService from "../services/meter-reading-service";
import {Dropdown} from "react-bootstrap";


export default class Units_consumed_graph extends Component{


    state ={
        years:[],
        allMeterReadingData:{},
        graphData:[],
        labels:[],
        placeHolderLabels:['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
        lineGraphRef:{},
        heading_label:[],
        consumer_id:this.props.cosumer_id,
        meter_id:this.props.meter_id
    };


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
        let heading = "Units Consumed in " + year.year
        this.setState({heading_label: heading})
        this.state.lineGraphRef.update();
    }

    loadGraphData=(consumer_id, meter_id)=>{
        MeterReadingService.getMeterReadingsForYear(meter_id,consumer_id).then((response) =>{
            this.setState({years:Object.keys(response.data)});
            this.setState({allMeterReadingData:response.data});
        });

    }

    componentDidMount() {
        this.loadGraphData(this.state.consumer_id,this.state.meter_id);
    }


    render() {
        return(
            <div className="shadow-lg" style={{padding: "10px 10px 10px 10px"}}>
                <Dropdown style={{padding: "0px 0px 10px 0px"}}>
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
                            label:this.state.heading_label,
                            fill:true,
                            data:this.state.graphData,
                            tension:0.3,
                        }
                    ]
                }}
                options={{
                    aspectRatio:3,
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
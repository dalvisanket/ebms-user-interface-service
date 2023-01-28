
import './App.css';
import React, {Component} from "react";
import Navbar from "./components/navbar";
import DetailsBox from "./components/details-box";
import DetailsAgGrid from "./components/details-ag-grid";
import Units_consumed_graph from "./components/units_consumed_graph";
import Meter_Readings from "./components/meter_readings";
import './css/consumer_details.css'

class App extends Component{

  state ={
      graph_consumer_id:[],
      graph_meter_id:[],
      grid_dataType:[],
      grid_clicked_row:[],
  };

  handleDataChange =(dataType,data)=>{
    this.setState({grid_dataType:dataType});
    this.setState({grid_clicked_row:data});
    this.renderBox();
  }

  updateConsumerAndMeterId=(consumer_id, meter_id)=>{
        this.setState({graph_consumer_id:consumer_id});
        this.setState({graph_meter_id:meter_id});
  }



  renderBox = () => {
        if(this.state.grid_dataType =='consumer' || this.state.grid_dataType == 'meter'){
            return <div className='parent componentPadding'>
                        <div className='childBox boxRightPadding'>
                            <DetailsBox onDropDownClick={this.updateConsumerAndMeterId} key={this.state.grid_clicked_row.consumer_id || this.state.grid_clicked_row.meter_id} boxDataType={this.state.grid_dataType} clickedRowData={this.state.grid_clicked_row}/>
                        </div>
                        {this.renderGraph()}
                    </div>

        }

    }


    renderGraph=()=>{
        if(this.state.graph_consumer_id.length != 0 && this.state.graph_meter_id.length != 0) {
            return  <div className='childGraph graphLeftPadding'>
                        <Units_consumed_graph key={this.state.graph_consumer_id + this.state.graph_meter_id}
                                      cosumer_id={this.state.graph_consumer_id} meter_id={this.state.graph_meter_id}/>
                    </div>
        }
    }


    renderMeterReading=()=>{
        if(this.state.graph_consumer_id.length != 0 && this.state.graph_meter_id.length != 0) {
                return <Meter_Readings  key={this.state.graph_consumer_id + this.state.graph_meter_id} cosumer_id={this.state.graph_consumer_id} meter_id={this.state.graph_meter_id}/>

        }
    }


   render() {
        return (
            <React.Fragment>
                <div>
                    <Navbar/>
                </div>

                <div className='componentPadding'>
                    <DetailsAgGrid onDataChange={this.handleDataChange} />
                </div>

                {this.renderBox()}
                {this.renderMeterReading()}
            </React.Fragment>

        );
    }
}



export default App;


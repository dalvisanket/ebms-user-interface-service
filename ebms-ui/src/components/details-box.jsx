import React,{Component} from "react";
import {Card, Dropdown, Image, ListGroup, ListGroupItem} from "react-bootstrap";
import MeterReadingService from "../services/meter-reading-service";


export default class DetailsBox extends Component{

    state={
        dataType : this.props.boxDataType,
        defaultData : this.props.clickedRowData,
        dropDownIdData : []
    }

    getDropDownIdData=()=>{
        if(this.state.dataType == 'meter') {
            MeterReadingService.getAssociationFromMeterId(this.state.defaultData.meter_id).then((res)=>{
                let idData =[];
                res.data.map((row) =>{ idData.push(row.consumer_id) });
                this.setState({dropDownIdData:idData})
            });
        }
        else {
            MeterReadingService.getAssociationFromConsumerId(this.state.defaultData.consumer_id).then((res)=>{
                let idData =[];
                res.data.map((row) =>{ idData.push(row.meter_id) });
                this.setState({dropDownIdData:idData})
            });
        }

    }


    dropDownIdDatatype = () =>{
        if(this.state.dataType == 'consumer'){
            return 'Meter';
        }
        return 'Consumer'
    }

    componentDidMount() {
        this.getDropDownIdData()
    }


    onIdSelect=(id)=>{
        console.log("SSSSS");
        if(this.state.dataType == 'meter') {
            this.props.onDropDownClick(id.data, this.state.defaultData.meter_id);
        }
        else {
            this.props.onDropDownClick(this.state.defaultData.consumer_id, id.data);
        }
    }

    render() {

        return(
            <div>
                <Card >
                    <Image style={{display:"block", marginTop:"20px",marginLeft:"auto",marginRight:"auto"}} width='25%' src='https://api.dicebear.com/5.x/icons/svg?seed=Boots' roundedCircle/>
                    <Card.Body>
                        <ListGroup>
                            {Object.entries(this.state.defaultData).map(data =>
                                <ListGroup.Item id={data} ><b>{data[0]}</b> : {data[1]}</ListGroup.Item>
                            )}
                        </ListGroup>

                        <Dropdown style={{padding: "10px 0px 0px 0px"}}>
                            <Dropdown.Toggle variant="outline-secondary" size="sm" id="dropdown-info">
                                Select Associated {this.dropDownIdDatatype()} ID
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                {this.state.dropDownIdData.map(data =>
                                    <Dropdown.Item onClick={()=>this.onIdSelect({data})}>{data}</Dropdown.Item>
                                )}
                            </Dropdown.Menu>
                        </Dropdown>

                    </Card.Body>
                </Card>
            </div>
        );
    }
}
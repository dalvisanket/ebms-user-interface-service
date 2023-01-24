import axios from "axios";


const REST_APT_URL = "http://localhost:8080";


class MeterReadingService {

    getAllConsumers(){
        return axios.get(REST_APT_URL + "/get-all-consumers");
    }

    getAllMeters(){
        return axios.get(REST_APT_URL + "/get-all-meters");
    }

    getAllMeterReadings(meter_id,consumer_id){
        return axios.get(REST_APT_URL+"/get-all-meter-readings/"+meter_id+"/"+consumer_id);
    }

    getMeterReadingsForYear(meter_id,consumer_id){
        return axios.get(REST_APT_URL+"/get-meter-readings-for-year/"+meter_id+"/"+consumer_id);
    }
}

export default new MeterReadingService()
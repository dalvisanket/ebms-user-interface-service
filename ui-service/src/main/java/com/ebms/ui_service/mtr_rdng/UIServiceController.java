package com.ebms.ui_service.mtr_rdng;


import com.ebms.mtr_rdng.db.domain.model.ConsumerMeterRow;
import com.ebms.mtr_rdng.db.domain.model.ConsumerRow;
import com.ebms.mtr_rdng.db.domain.model.MeterReadingRow;
import com.ebms.mtr_rdng.db.domain.model.MeterRow;
import com.ebms.ui_service.mtr_rdng.proxy.controller.MeterReadingProxyController;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;

import org.springframework.web.bind.annotation.RestController;


import java.time.Year;
import java.util.List;
import java.util.Map;


@CrossOrigin
@RestController
public class UIServiceController {

    @Autowired
    private MeterReadingProxyController meterReadingProxyController;

    @PostMapping("/new-meter")
    public ResponseEntity addNewMeter(){
        return meterReadingProxyController.addNewMeter();
    }

    @GetMapping("/get-meter/{meter_id}")
    public ResponseEntity<MeterRow> getMeter(@PathVariable(name = "meter_id") long meter_id){
        return meterReadingProxyController.getMeter(meter_id);
    }

    @GetMapping("/get-all-meters")
    public ResponseEntity<List<MeterRow>> getAllMeter(){
        return meterReadingProxyController.getAllMeter();
    }

    @GetMapping("/get-all-consumers")
    public ResponseEntity<List<ConsumerRow>> getAllConsumers(){
        return meterReadingProxyController.getAllConsumers();
    }

    @GetMapping("/get-all-meter-readings/{meter_id}/{consumer_id}")
    public ResponseEntity getAllMeterReadings(@PathVariable(name = "meter_id") long meter_id, @PathVariable(name = "consumer_id") long consumer_id){
        return meterReadingProxyController.getAllMeterReadings(meter_id,consumer_id);
    }

    @GetMapping("/get-meter-readings-for-year/{meter_id}/{consumer_id}")
    public ResponseEntity<Map<Year,List<MeterReadingRow>>> getMeterReadingForYear(@PathVariable(name = "meter_id") long meter_id, @PathVariable(name = "consumer_id") long consumer_id){
        return meterReadingProxyController.getMeterReadingForYear(meter_id,consumer_id);
    }


    @GetMapping("/get-consumer-meter-association/consumer-id/{consumer_id}")
    public ResponseEntity<List<ConsumerMeterRow>> getAssociationFromConsumerId(@PathVariable(name = "consumer_id") long consumer_id){
        return meterReadingProxyController.getAssociationFromConsumerId(consumer_id);
    }

    @GetMapping("/get-consumer-meter-association/meter-id/{meter_id}")
    public ResponseEntity<List<ConsumerMeterRow>> getAssociationFromMeterId(@PathVariable(name = "meter_id") long meter_id){
        return meterReadingProxyController.getAssociationFromMeterId(meter_id);
    }

}
